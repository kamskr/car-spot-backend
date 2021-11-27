module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        host: env("DB_HOST", ""),
        srv: true,
        port: 27017,
        database: env("DB_NAME", ""),
        username: env("DB_LOGIN", ""),
        password: env("DB_PASSWORD", ""),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
