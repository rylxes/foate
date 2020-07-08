import DbConnect from "../../../util/database";
import User from "../../../models/User";
import { hash } from "bcrypt";

// Register route
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        // hash password
        hash(req.body.password, 10, async function (err, hash) {
          if (err) {
            return res.status(405).json({ message: "Something went wrong." });
          }

          // Store hash password in your DB.
          const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
          })

          // Retrive stored user with _id
          const userById = await User.findById({_id: user._id});
          const data = {
            _id: userById._id,
            firstName: userById.firstName,
            email: userById.email
          }
          res.json({ success: true, data });
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
