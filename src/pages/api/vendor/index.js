import DbConnect from "../../../util/database";
import Invoice from "../../../models/Invoice";
import Axios from 'axios';
import formidable from 'formidable'
import form_Data from 'form-data'

import {authMiddleware} from '../../../util/authMiddleware'

// Register route
export default authMiddleware( async (req, res, user) => {
  await DbConnect();
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        
        const form = formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files)=> {
          if(err){
            return res.status(400).json({
              error: 'Image could not be uploaded.'
            })
          }
          const {title, description, amount, status} = fields;

          if(files.photo.size > 4000000){
            return res.status(400).json({
              error: "Photo should be less than " + 4000000 + " in size."
            });
          }

          console.log(fields, files) 
          
          // const formData = new form_Data();
          //   formData.append("file", files.photo);
          //   formData.append("upload_preset", process.env.Next_APP_CLOUDINARY_PRESET);
          //   formData.append("api_key", process.env.Next_APP_CLOUDINARY_API_KEY);
            
          // console.log(formData)

          //   Axios({
          //     url: process.env.Next_APP_CLOUDINARY_URL,
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/x-www-form-urlencoded",
          //     },
          //     data: formData,
          //   })
          // .then(sendToCloud => {

          //   let invoice = new Invoice();
          //   invoice.vendor = user
          //   invoice.title = title
          //   invoice.description = description
          //   invoice.amount = amount
          //   invoice.status = status
          //   invoice.photo = sendToCloud

          //   // Store invoice in your DB.
          //   // const invoice = await Invoice.create({
          //   //   vendor: user,
          //   //   title: title,
          //   //   description: description,
          //   //   amount: amount,
          //   //   status: status,
          //   //   photo: sendToCloud
          //   // })
            
          //   Invoice.save((err, result)=>{
          //     if(err){
          //       return res.status(400).json({ success: false, message: "Save failed" });
          //     }
          //     return res.json({ success: true, data: result });
          //   })
          // })
          
           // Retrive stored invoice with _id
          //  const invoiceById = await Invoice.findById({_id: invoice._id});
        })
        
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}, ['admin', 'vendor', 'user']);
