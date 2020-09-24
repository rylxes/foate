import DbConnect from "../../../util/database";
import Investment from "../../../models/Investment";


// Register route
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  const reqBody = JSON.parse(req.body);
  
  switch (method) {
    case "PUT":
      try {
        // const id = { _id: reqBody.id };
        // const update  = { tier: reqBody.tier };
        // const options = { new: true, useFindAndModify: false };

        // const updatedInvestor  = await Investment.findOneAndUpdate(id, update, options);
    
        // if(!updatedInvestor){
        //   return res.status(404).json({
        //     success: false,
        //     message: "Investor was not found.",
        //   })
        // }
        // return res.status(200).json({success: true});
      } catch (error) {
        // console.log(error);
        // return res.status(400).json({ success: false });
      }
      
    case "DELETE":
      try {
        const deleteInvestment = await Investment.findOneAndDelete({_id: reqBody._id});
        if (deleteInvestment === null) {
          return res.status(404).json({
            success: false,
            message: "Investment was not found.",
          });
        }
        
        return res.status(200).json({
          success: true,
          message: "Investment was successfully removed.",
          data: deleteInvestment,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Unable to delete investment.",
          error: error,
        });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
