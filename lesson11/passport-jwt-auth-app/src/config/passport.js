const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const SECRET_KEY = 'your_secret_key'; // !!! Використовуй змінні середовища у продакшені

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const users = []; // Емуляція бази користувачів

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  const user = users.find(u => u.id === payload.userId);

  if (user) {
    return done(null, user);
  } else {
    return done(null, false);
  }
});

module.exports = {
  jwtStrategy,
  users,
};
