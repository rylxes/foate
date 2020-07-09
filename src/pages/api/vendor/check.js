import { cloudinary } from "../../../util/cloudinary";
import { formid } from "../../../util/formidable";
import Invoice from "../../../models/Invoice";
import DbConnect from "../../../util/database";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  await DbConnect();
  // return new Promise((resolve) => {
    try {
      if (req.method === "POST") {
        formid.parse(req, async (err, fields, files) => {
          if (err) {
            return res.status(400).json({ error: "Image could not be uploaded." });
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
          
          //Store invoice in your DB.
          const {title, description, amount, status} = fields;
          try {
            const invoice = await Invoice.create({
              // vendor: "123456",
              title: title,
              description: description,
              amount: amount,
              status: status,
              photos: uploadPaths
            });  
            return res.status(200).json({data: {invoice, uploadPaths}});
          } catch (error) {
            console.log(error)
          }
        });
        // return resolve();
      } else {
        res.status(400).json({ err: "a bad request was made." });
        // return resolve();
      }
    } catch (error) {
      res.status(400).json({ err: "SOmething went wrong" });
      // return resolve();
    }
  // });
};
