import DbConnect from "../../../util/database";
import Investor from "../../../models/Investor";


// Register route
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  const reqBody = JSON.parse(req.body);

  switch (method) {
    case "PUT":
      try {
        const updatedInvestor = await Investor.updateOne({ _id: reqBody._id }, {
          tier: reqBody.tier
        });
        if(!updatedInvestor.ok){
          return res.status(404).json({
            success: false,
            message: "Investor was not found.",
          })
        }
        return res.status(200).json({success: true});
      } catch (error) {
        return res.status(400).json({ success: false, error: error });
      }
      
    case "DELETE":
      try {
        const deleteInvestor = await Investor.deleteOne({ _id: reqBody._id });
        if(!deleteInvestor.deletedCount){
          return res.status(404).json({
            success: false,
            message: "Unable to delete investor.",
          });
        }

        return res.status(200).json({
          success: true,
          message: "Investor was successfully removed."
        });

      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Unable to delete investor.",
          error: error,
        });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
