import DbConnect from "../../../util/database";
import Investment from "../../../models/Investment";
import Investor from "../../../models/Investor";



//Protected routes
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const investments = await Investment.find({});
        const investors = await Investor.find({});
        return res.status(200).json({ success: true, data: {investments, investors} });
      } catch (error) {
        return res.status(400).json({ success: false, data: { investments: [], investors: []} });
      }
    default:
      return res.status(400).json({ success: false });
  }
};
