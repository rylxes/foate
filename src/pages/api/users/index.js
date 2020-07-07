import DbConnect from "../../../util/database";
import User from "../../../models/User";

import {authMiddleware} from '../../../util/authMiddleware'


export default authMiddleware( async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
});
