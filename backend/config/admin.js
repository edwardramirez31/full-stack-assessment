module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5df72a3e68e4bf2ae55519abfd5c2152'),
  },
});
