import DbConnect from "../../../util/database";
import Vendor from "../../../models/Vendor";

// Login route
import {sign} from 'jsonwebtoken'
import {compare} from 'bcrypt'
import cookie from 'cookie'

export default async function login(req, res){
  if(req.method === 'POST'){
    await DbConnect();
    
    //Check form email with DB
    const guest = await Vendor.findOne({email: req.body.email});
    if(!guest){
      return res.status(405).json({message: "Something went wrong."});
    }
    
    //Check form password with DB
    compare(req.body.password, guest.password, async function(err, result) {
      if(err && !result){
        return res.status(405).json({err, message: "Something went wrong."})
      }
      
      // Token data
      const claims = {
        sub: guest.id,
        firstName: guest.firstName,
        lastName: guest.lastName, 
        userEmail: guest.email,
        role: guest.role
      }
      
      const jwt = sign(
        claims, process.env.secret,
        {expiresIn: '1hr'}
      );

      // Set cookie
      res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 3600,
        path: '/'
      }));
      
      res.status(200).json({ message: "OK"})
      res.end();
    });
  }else{
    res.status(405).json({message: "Only POST requests are allowed."});
    res.end();
  }
}