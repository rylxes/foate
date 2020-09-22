import DbConnect from "../../../util/database";
import Vendor from "../../../models/Vendor";


export default  async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const vendors = await Vendor.find({});
        res.status(200).json({ success: true, data: vendors });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteVendor = await Vendor.findById(JSON.parse(req.body)._id);
        if (deleteVendor === null) {
          return res.status(404).json({
            success: false,
            message: "Vendor was not found.",
          });
        }
        await deleteVendor.remove();
        return res.status(200).json({
          success: true,
          message: "Vendor was successfully removed.",
          data: deleteVendor,
        });
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Unable to delete Vendor.",
          error: error,
        });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
