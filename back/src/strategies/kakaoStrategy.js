const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

passport.use(
  "kakao-login",
  new KakaoStrategy(
    { clientID: "[REST API Key]", callbackURL: "[등록한 Redirect URI]" },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(profile);
    },
  ),
);
