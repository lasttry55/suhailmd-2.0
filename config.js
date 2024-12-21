hiconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_06_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVhQ0wzVURCcTMyZVZCMzZYOHRWdzVmZVdNY2NkRTFlQWtlQnZPeWFhQ289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImN3VHdvc2IzUU9hZkRMRURJd3NlUXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDA1MjBhYWEtNzBjYS00ZDIwLTg2NzktZTQ3YmQ5OGJkNzUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDI1NSxcbiAgICAgIDE1LFxuICAgICAgOTEsXG4gICAgICAxMDEsXG4gICAgICAyNTQsXG4gICAgICAxNDksXG4gICAgICA2MixcbiAgICAgIDIwOSxcbiAgICAgIDkzLFxuICAgICAgMTc4LFxuICAgICAgMTAxLFxuICAgICAgMTIsXG4gICAgICAxMzcsXG4gICAgICA3LFxuICAgICAgMTI3LFxuICAgICAgOTgsXG4gICAgICA5MyxcbiAgICAgIDM1LFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDI4LFxuICAgICAgMjI4LFxuICAgICAgOTYsXG4gICAgICAzLFxuICAgICAgOTksXG4gICAgICAxMyxcbiAgICAgIDE2NSxcbiAgICAgIDIwNyxcbiAgICAgIDI0MyxcbiAgICAgIDE1MixcbiAgICAgIDIwMixcbiAgICAgIDI2LFxuICAgICAgMjMwLFxuICAgICAgNDcsXG4gICAgICA4NyxcbiAgICAgIDIzNyxcbiAgICAgIDk4LFxuICAgICAgMjAxLFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNZRkpCOUYxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NDAxOTAzOTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU5MzU2NzUwMDQ5NTI3OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ002UHVoSVFpWTJZdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2szWFd3SGdCaitucHdldlhBbDE1VDNjL0JjNDdiMHorYzEyVFE5SWhtRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLaXlIOGtKWHJIdzFpdWdJUDhxcDRrRDIrT2VvK211bW9ubXQ1NkYrbUdqcWFHOFJ1Tk5MMUx3M2RKRnIzaUtjTlRuSHlqcHdSVVhFUkk3cHRicFVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrcTNGWk9XeTM1SktLWnlSejdtcG5taWJSQnRpR2l4L0lHQUhFOExVeTFFczN1THNhcVdnbFBSVE55SkNERFhNa3JwLy8yVzZSV1FSZjBiK2RSMS9qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NDAxOTAzOTU6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDczOTU5N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
