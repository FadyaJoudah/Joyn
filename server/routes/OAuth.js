const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const G_ID = process.env.GOOGLE_CLIENT_ID;
const G_SECRET = process.env.GOOGLE_CLIENT_SECRET;
passport.use(
  new GoogleStrategy(
    {
      clientID: G_ID,
      clientSecret: G_SECRET,
      callbackURL: "http://localhost:8080/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, profile);
      // });
    }
  )
);

passport.serializeUser1(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = OAuth;
