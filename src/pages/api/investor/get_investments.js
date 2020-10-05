import DbConnect from "../../../util/database";
import Investment from "../../../models/Investment";

// import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default  async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const investments = await Investment.find({}); 
        return res.status(200).json({ success: true, data: {investments} });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    default:
      return res.status(400).json({ success: false });
  }
}
