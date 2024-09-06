//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk80MmFpSzBHS1k0R2dQVkxmZ2lyZ3ZwbkkwYW1KeHc2TDZBSkF6ZE9WTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFdEKy9zcll5YWppWktvZzlPeitlUHRZVDdsa0NIVW41a1N4MjllYVlGRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTVhVazdhb2wvNjhQZStPc1RGZHBJWnkvMjA5cG5wT0Naa1BtV085bEZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqSFVicjVCRitTZE9NTVgyUEt2bkdNemdxNFdqaWpCS2xNOVplWXg4cnhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhFd1ZKYy9pQjF2eDZaOU50VU5BNUxXeEhKWjF0Q2Vlb1hHYTdVQm9hMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJMQmZDaDJDY2psYVZOM0ZzUUVhbWIybkxuRDlUMW1wWmIxNllSOU9OU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RSRlMzZ3VmNnRIUGFtSlBoMzBYSmpUMWU0NDNTZiswL3VjTVcwY09IUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JFZlFYOFQxQUxqTUFKZzgxT2thVU1TaFVvNW9mTGowOU44S2F4MFF3QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBQZzJZTmo0NzU3c0lLK0ZyVEhoWlIwOUxGV3lWUmhzSlZobVNtdmx1UmtpY2JNQnc4Q1dibHFFbVNMTUY3UkRUbUU0MUUyTytFdHN4TU9ZUlFzL2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJBN2o4YXpBa1ROMXg0QzUzK3lKeGRYUVJ5eVlDbGNBZVliTmxqU0pLV21FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwNjk5OTkwOTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRENGQjU5NjY5OTdFMkI5NzJDNEU2NDc1Q0U1NDhFNjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTY0NjM2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA2OTk5OTA5NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNDA2NTlDQThCQzFERDcxREE4REFFREJGQUI3M0RBNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NjQ2MzY2fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZVl8zOE0xMVFTQ0M1b1hCVEpSQXpRIiwicGhvbmVJZCI6IjkxOTQyNzNkLWNjMTAtNDJlNC04NDUxLTY5NDFkNTBlZDY1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtM3lGMklHRk9BbEJYbTF3RklyN0hmYTNYOEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmtFeDZyZEpha3FoWGtOU3grRDREbTZWb0dVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijc4Ujk1TFFRIiwibWUiOnsiaWQiOiIyMzQ4MDY5OTk5MDk0OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSSBEb24ndCBLbm93IFlvdSDwn5iVIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNkM0NWNHRUpDTTdiWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIYnhEOGswN3Z4MXg4b3VJbW95d1N2OUtKMzN5TG1rUUZXRUVJWVRsVFJNPSIsImFjY291bnRTaWduYXR1cmUiOiJob0NCWEZxRXI1OVcwc0VpREdIdGUwTU5BQlZ2K0I3SytZY2NVdFFzd3dBM0dqY05WWmRuOEJXL0VyOWg4Rzd5b2RHd2ppZWk0UUtDYnlvNStJMVpBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWRJOVVkMytCRDVqWlpjY25Yb3oyUkxuenFBc1B6UHB2a1ZmWTU4KzRKanExWFNvTEhRRXpLelR3bi9hYzNaeTZmRkl5czRQRlMvakxSSW9nNzROZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5OTk5MDk0OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjI4US9KTk83OGRjZktMaUpxTXNFci9TaWQ5OGk1cEVCVmhCQ0dFNVUwVCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTY0NjM2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNYWIifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
