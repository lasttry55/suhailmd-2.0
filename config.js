const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233536809688";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_28_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgODksXG4gICAgICAgIDgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICA2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInNQNFRqUHlZSjRUcWk2RTY3bytSQUp2UDNSWlVHUnNhdzBpUU1PSHFUaUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRBSDhDWTQtUVhhZUN6SkF6RE5sSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y3MTlmMDMtOGU4Yy00MTQ3LTgxYzYtNDQ3NGY1MmEyY2I0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMTE2LFxuICAgICAgMTUxLFxuICAgICAgMTgxLFxuICAgICAgNTUsXG4gICAgICAyMzUsXG4gICAgICAxNDksXG4gICAgICAxMTAsXG4gICAgICAzLFxuICAgICAgMTI2LFxuICAgICAgMTQ2LFxuICAgICAgODksXG4gICAgICAxNjMsXG4gICAgICAxNTIsXG4gICAgICAyMTUsXG4gICAgICAxMDksXG4gICAgICAyMjgsXG4gICAgICA0MCxcbiAgICAgIDc4LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE5MyxcbiAgICAgIDE0LFxuICAgICAgODMsXG4gICAgICA5MyxcbiAgICAgIDg5LFxuICAgICAgMSxcbiAgICAgIDQ4LFxuICAgICAgMTE4LFxuICAgICAgMjEwLFxuICAgICAgMjM0LFxuICAgICAgMzQsXG4gICAgICAyMzksXG4gICAgICAxLFxuICAgICAgMTY2LFxuICAgICAgMTcxLFxuICAgICAgODEsXG4gICAgICAyNTEsXG4gICAgICA3OCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDODZIUjlUM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTM2ODA5Njg4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4OTUyMDQ3MzEyNDk5Nzo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNQ1J2ZGdHRVBUOWxic0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZTQXQyS05vRFdsSDZXd1NRNFg3c1NWSG5pSzA2QW56bUs2QThyWDZzU3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR0xOMjU1YzFucVViRUhtQmVKMjhzQnp2NStuN2F6S2JGbHZLMWd6M0V2bEFMakN0RnVOOWg4SVY5eG5tMW5TSEVDZFJEcExOSUlDdThBeEFWSGdaQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVJudjYzcVhiazFJME5oUHFVcUVnNCswV0ZqSllyNjJPaFpuNHhLazNGUkhUWEJMeG51WjRtRXNGam9WTG5renF3RmhELzBxZDhVMlJXRWI4VkNJalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTM2ODA5Njg4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzA0ODg3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Efficacious",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
