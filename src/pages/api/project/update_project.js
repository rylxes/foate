import DbConnect from "../../../util/database";
import Project from "../../../models/Project";


// Register route
export default async (req, res) => {
  await DbConnect();
  const { method } = req;
  const reqBody = JSON.parse(req.body);
  
  switch (method) {
    case "PUT":
      try {
        const updatedProject = await Project.updateOne({ _id: reqBody._id }, {
          status: reqBody.status === 'PENDING' ? 'COMPLETED' : 'PENDING'
        });
        
        if(!updatedProject.ok){
          return res.status(404).json({
            success: false,
            message: "Project was not found.",
          })
        }
        const project = await Project.findOne({_id: reqBody._id})
        
        return res.status(200).json({success: true, data: project.status});
      } catch (error) {
        return res.status(400).json({ success: false, error: error });
      }  
    default:
      res.status(400).json({ success: false });
      break;
  }
};
