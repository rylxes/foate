const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
  cloud_name: process.env.NEXT_APP_CLOUDINARY_NAME, 
  api_key: process.env.NEXT_APP_CLOUDINARY_API_KEY, 
  api_secret: process.env.NEXT_APP_CLOUDINARY_SECRET, 
  // upload_preset:  process.env.NEXT_APP_CLOUDINARY_PRESET
});

module.exports = {
  cloudinary
}


// module.exports = (path) => {
//   return new Promise((resolve)=> {
//     cloudinary.uploader.upload(paths, {
//       upload_preset: process.env.NEXT_APP_CLOUDINARY_PRESET
//     }, (error, result)=>{
//       resolve({
//         url: result.secure_url,
//         id: result.public_id
//       })
//     });
//   })
// }