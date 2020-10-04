import DbConnect from "../../../util/database";
import Project from "../../../models/Project";
import {authMiddleware} from '../../../util/authMiddleware'
import {cloudinary} from '../../../util/cloudinary';
import {formid} from '../../../util/formidable'

export const config = {
  api: {
    bodyParser: false,
  },
};


// Register route
export default authMiddleware( async (req, res, vendor) => {
  await DbConnect();

  switch (req.method) {
    case "PUT":
      try {
        // Get image from POST req using formidable
        formid.parse(req, async (err, fields, files)=> {
          
          console.log(fields, files)
          if(err){
            return res.status(400).json({error: 'Image could not be uploaded.'})
          }
          
          let paths = [];
          for (const key in files) {
            paths.push(files[key].path);
          }
          
          //Upload image to cloudinary
          const result = await Promise.all(paths.map((path)=> {
            return cloudinary.uploader.upload(path, {
              upload_preset: process.env.NEXT_APP_CLOUDINARY_PRESET
            });
          }));
          
          const uploadPaths = result.map(item => item.secure_url);

          const updatedProject = await Project.updateOne({ _id: fields._id }, {
            quote: fields.quote,
            photos: uploadPaths
          });
          
          if(!updatedProject.ok){
            return res.status(404).json({
              success: false,
              message: "Project was not found.",
            })
          }
          const project = await Project.findOne({_id: fields._id})
          return res.status(200).json({success: true, data: updatedProject});
        })
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}, ['admin', 'vendor', 'user']);
