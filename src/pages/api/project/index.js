import DbConnect from "../../../util/database";
import Project from "../../../models/Project";

// import {authMiddleware} from '../../../util/authMiddleware'

//Protected routes
export default  async (req, res) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const projects = await Project.find({});
        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      case "DELETE":
        try {
          const deleteProject = await Project.findById(JSON.parse(req.body)._id);
          if (deleteProject === null) {
            return res.status(404).json({
              success: false,
              message: "Project was not found.",
            });
          }
          await deleteProject.remove();
          return res.status(200).json({
            success: true,
            message: "Project was successfully removed.",
            data: deleteProject,
          });
        } catch (error) {
          return res.status(500).json({
            success: false,
            message: "Unable to delete Project.",
            error: error,
          });
        }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
