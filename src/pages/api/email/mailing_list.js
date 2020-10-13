
//Protected routes
export default  async (req, res) => {
 
  const { method } = req;
  switch (method) {
    case "POST":
      try {
       const postEmail = await fetch('https://foateblog.herokuapp.com/mailing-lists', {
        method: "POST",
        body: req.body
       })
        res.status(200).json({ success: true});
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
