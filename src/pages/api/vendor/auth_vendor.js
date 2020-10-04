import DbConnect from "../../../util/database";
import Project from "../../../models/Project";


import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default authMiddleware( async (req, res, authVendor) => {

  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({vendor: authVendor.sub}).exec();        
        res.status(200).json({ success: true, data: {projects, user: authVendor} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}, ['admin', 'vendor']);
