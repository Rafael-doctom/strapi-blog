module.exports = ({ env }) => ({
  host: env('HOST', '3.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
