import {verify} from 'jsonwebtoken'



export const authMiddleware = (fn) => async (req, res) => {
  verify(req.cookies.auth, process.env.secret, async function(err, decode){
    if(!err && decode){
        await fn(req, res)
    }else{
      // res.writeHead(302, {
      //   Location: `http://localhost:3000/login`
      // });
      return res.status(401).json({message: "Sorry, you are not aunthenticated."})
    }
  })
}
