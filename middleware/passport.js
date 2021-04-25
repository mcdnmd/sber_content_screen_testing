const JwtStratagy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/User');
//const keys = require('../config/keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//options.secretOrKey = keys.jwt;

module.exports = passport => {
    passport.use(
        new JwtStratagy(options, async (payload, done) => {
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
