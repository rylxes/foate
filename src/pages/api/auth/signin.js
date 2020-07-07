import DbConnect from "../../../util/database";
import User from "../../../models/User";


import {sign} from 'jsonwebtoken'
import {compare} from 'bcrypt'
import cookie from 'cookie'

export default async function login(req, res){
  if(req.method === 'POST'){
    DbConnect();
    const guest = await User.findOne({email: req.body.email});
    if(!guest){
      return res.status(405).json({message: "Something went wrong."});
    }
    
    compare(req.body.password, guest.password, async function(err, result) {
      if(err && !result){
        return res.status(405).json({err, message: "Something went wrong."})
      }
      
      const claims = {
        sub: guest.id,
        userEmail: guest.email
      }
      
      const jwt = sign(
        claims, process.env.secret,
        {expiresIn: '1hr'}
      );

      res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 3600,
        path: '/'
      }));
      
      res.status(200).json({ message: "OK"})
    });
  }else{
    res.status(405).json({message: "Only POST requests are allowed."})
  }
}