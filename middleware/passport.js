const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User');
const keys = require('../config/keys');

let cookieExtractor = function(req) {
    let token = null;
    if (req && req.headers['cookie']) {
        let cookies = req.headers['cookie'].split('; ');
        for(let i = 0; i < cookies.length; i++){
            console.log(cookies[i])
            let tmp = cookies[i].split("=");
            if (tmp[0]==='jwt')
                token = tmp[1];
        }
    }
    console.log(token)
    return token;
};

const options = {};

options.jwtFromRequest = cookieExtractor;
options.secretOrKey = keys.jwt;



module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const candidate = await User.findById(payload.userId).select('email id');
                if (candidate) {
                    done(null, candidate);
                } else {
                    done(null, false);
                }
            } catch (e) {
                console.log(e);
            }
        })
    )
};
