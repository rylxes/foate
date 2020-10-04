import DbConnect from "../../../util/database";
import User from "../../../models/User";

import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default authMiddleware( async (req, res, authUser) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});

        res.status(200).json({ success: true, data: authUser });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}, ['admin', 'user']);
