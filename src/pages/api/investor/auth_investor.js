import DbConnect from "../../../util/database";
import Investor from "../../../models/Investor";
import Investment from "../../../models/Investment";


import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default authMiddleware( async (req, res, authInvestor) => {

  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const investments = await Investment.find({});
        const investors = await Investor.find({});
        
        res.status(200).json({ success: true, data: {investments, investors, user: authInvestor} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}, ['admin', 'investor']);
