import Project from "../../../models/Project";

export default async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const reqBody = JSON.parse(req.body);
    try {
      const project = await Project.create({
        title: reqBody.title, 
        description: reqBody.description, 
        vendor: reqBody.vendor 
      });
      return res.status(200).json({ success: true, data: project });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  }
};
