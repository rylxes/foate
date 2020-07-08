import DbConnect from "../../../util/database";
import Invoice from "../../../models/Invoice";
import {authMiddleware} from '../../../util/authMiddleware'
import {cloudinary} from '../../../util/cloudinary';
import {formid} from '../../../util/formidable'

export const config = {
  api: {
    bodyParser: false,
  },
};


// Register route
export default authMiddleware( async (req, res, user) => {
  await DbConnect();
  switch (req.method) {
    case "POST":
      try {
        // Get image from POST req using formidable
        formid.parse(req, async (err, fields, files)=> {
          if(err){
            return res.status(400).json({error: 'Image could not be uploaded.'})
          }

          // Upload image to cloudinary
          const uploadResponse = await cloudinary.uploader.upload(files.photo.path, {
            upload_preset: process.env.NEXT_APP_CLOUDINARY_PRESET
          });

          
          //Store invoice in your DB.
          const {title, description, amount, status} = fields;
          const invoice = await Invoice.create({
            vendor: user.sub,
            title: title,
            description: description,
            amount: amount,
            status: status,
            photo: uploadResponse.secure_url
          });
          if(!invoice){
            return res.status(400).json({err: "Unable to write to DB."})
          }
          return res.status(200).json({
            data: {
              invoice: invoice,
              fileName: files.photo.name, 
              filePath: uploadResponse.secure_url
            }
          });
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
