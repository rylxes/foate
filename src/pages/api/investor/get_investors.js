import DbConnect from "../../../util/database";
import Investor from "../../../models/Investor";

// import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default  async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const investors = await Investor.find({});
        
        res.status(200).json({ success: true, data: {investors} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
