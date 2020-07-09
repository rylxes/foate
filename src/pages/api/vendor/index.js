import DbConnect from "../../../util/database";
import {authMiddleware} from '../../../util/authMiddleware'

// Register route
export default authMiddleware( async (req, res, user) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        
        
        
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
