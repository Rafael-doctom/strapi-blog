module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
  })
