import {verify} from 'jsonwebtoken'


//Decodes cookie value-token with secret key. 
export const authMiddleware = (fn, authRoles) => async (req, res) => {
  verify(req.cookies.auth, process.env.secret, async function(err, decode){
    if(!err && decode){
        //Checks if user role in cookie === allowed route roles.
        if(authRoles.includes(decode.role)){
          await fn(req, res, decode);
        }else{
          return res.status(403).json({message: "Sorry, you are not unauthorised."})    
        }
    }else{
      return res.status(401).json({message: "Sorry, you are not aunthenticated."})
    }
  })
}
