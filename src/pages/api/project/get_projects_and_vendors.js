import DbConnect from "../../../util/database";
import Project from "../../../models/Project";
import Vendor from "../../../models/Vendor";

//Protected routes
export default  async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({});
        const vendors = await Vendor.find({});
        
        res.status(200).json({ success: true, data: {projects, vendors} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
