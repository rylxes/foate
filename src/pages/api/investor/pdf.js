import { cloudinary } from "../../../util/cloudinary";
import { formid } from "../../../util/formidable";
import Investment from "../../../models/Investment";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    try {
      formid.parse(req, async (err, fields, files) => {
        if (err) {
          return res
            .status(400)
            .json({ error: "Image could not be uploaded." });
        }

        let paths = [];
        for (const key in files) {
          paths.push(files[key].path);
        }

        //Upload image to cloudinary
        try {
          const result = await Promise.all(
            paths.map((path) => {
              return cloudinary.uploader.upload(path, {
                upload_preset: process.env.NEXT_APP_CLOUDINARY_PRESET,
                resource_type: "raw"
              });
            })
          );

          //Store investment in your DB.
          const uploadPaths = result.map((item) => item.secure_url);
          const { title, description, tier } = fields;
          const investment = await Investment.create({
            title, description, tier, filePaths: uploadPaths
          });
          return res.status(200).json({ success: true, data: investment });
        } catch (error) {
          console.log("Error: ", error);
        }
      });
    } catch (error) {
      res.status(400).json({ success: false });
      console.log(error);
    }
  }
};
