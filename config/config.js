exports.config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "sdghjak82374ihury83yr3yr2u3h",
  mongoUri: "mongodb+srv://user:1234@cluster0.ibstm.mongodb.net/on_call_system"
};