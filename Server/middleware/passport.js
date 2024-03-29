// passport is the midleware who will intercept the  http request and go to the request header and grab the JWT Token 
const pasport = require ('passport')
const LocalStrategy =require('passport-local')
const JwtStrategy = require ('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const config = require ('../config/config');
const userController = require('../controllers/user.controller');

const localLogin = new LocalStrategy(
    {
     usernameFeild:'email'
    },
    async(email,password,done)=>{ //done will call/invoke  next in the express /middleware pipeline . 
        const user = userController.getUserByEmailIdAndPassword(email,password);
        return user 
        ?done(null,user)
        :done(null,false,
            {
                error:'Your Login Detaiils Are Not Valid, Please Check Email & Password '
            });
    }
);
const jwtLogin = new JwtStrategy(
    {
      jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey:config.jwtSecret
    },
    async(payload,done)=>{
    const user = await userController.getUserByID(payload._id);
    return user 
    ?done(null,user)
    :done(null,false,
        {
            error:'Your Login Detaiils Are Not Valid Or Expired, Please Try Again'
        });
    }
);

module.exports= pasport.use(localLogin).use(jwtLogin);