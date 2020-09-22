import DbConnect from "../../../util/database";
import Vendor from "../../../models/Vendor";
import { hash } from "bcrypt";


// Register route
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const reqBody = JSON.parse(req.body);
        // hash password
        hash(reqBody.password, 10, async function (err, hash) {
          if (err) {
            return res.status(405).json({ message: "Something went wrong." });
          }

          // Store hash password in your DB.
          const vendor = await Vendor.create({
            firstName: reqBody.firstName,
            lastName: reqBody.lastName,
            email: reqBody.email,
            password: hash,
            phone: reqBody.phone
          })

          res.json({ success: true });
        });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
