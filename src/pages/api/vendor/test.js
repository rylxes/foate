import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
};


export default (req, res) => {
  if(req.method === 'POST'){
    

    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files)=> {
      // console.log(err, fields, files);

      if(err){
        return res.status(400).json({
          error: 'Image could not be uploaded.'
        })
      }
      console.log('fields:', fields);
      console.log('files:', files);
      return res.status(200).json({fileName: files.photo.name, filePath:  files.photo.path})
    });
   




    // if(req.files === null ){
    //   return res.status(400).json({msg: 'No file was uploaded.'})
    // }
    // const file = req.files.photo;
    // file.mv(`${__dirname}/public/uploads/${files.name}`, (err)=>{
    //   if(err){
    //     console.error(err);
    //     return res.status.send(err);
    //   }
    //   return res.json({fileName: file.name, filePath:  `/uploads/${file.name}`})
    // })
  
  }else{
    res.status(400).json({err: "a bad request was made."});
  }
}