const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03314110070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_58_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjU3M3VaYnQ3R3ZBYWNxTXVUTDhKdFAyUnhaT2lPa1o0NlFtQkpJRjBOTDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzE0MTEwMDcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwRTA4NUYyQTk1MUEyRkQ5MTIzRTUwODY0MEVCN0NCOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDk4Mzc0NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWpOZlRnZVNRaXlXREVSeDVkbk4xd1wiLFxuICBcInBob25lSWRcIjogXCI3NGFjNDQ2Ny02NTIzLTRiOGEtYjM3NC01MjQ2MDliN2M0OTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxMTYsXG4gICAgICA4NyxcbiAgICAgIDE2MixcbiAgICAgIDI1NSxcbiAgICAgIDE2NCxcbiAgICAgIDEwNixcbiAgICAgIDE3NSxcbiAgICAgIDEzNyxcbiAgICAgIDEwNSxcbiAgICAgIDExNCxcbiAgICAgIDIyNCxcbiAgICAgIDE2MyxcbiAgICAgIDIxMixcbiAgICAgIDMyLFxuICAgICAgMTU5LFxuICAgICAgMjE1LFxuICAgICAgMTk3LFxuICAgICAgMTY5LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDE5NSxcbiAgICAgIDE4MSxcbiAgICAgIDE0MCxcbiAgICAgIDI0NyxcbiAgICAgIDExMCxcbiAgICAgIDI0NSxcbiAgICAgIDEyNSxcbiAgICAgIDE1MSxcbiAgICAgIDYsXG4gICAgICAxNzAsXG4gICAgICA0MCxcbiAgICAgIDEzNyxcbiAgICAgIDEwOSxcbiAgICAgIDEwOCxcbiAgICAgIDEyMixcbiAgICAgIDIzNixcbiAgICAgIDU0LFxuICAgICAgMTc4LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSGIxOGdERUozTnNjSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhQajRnTVk1VWJkRFppMStRV3FEUmtYWlhHOWVHeEdoZitNMU0zZXNFVUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidmhQZHBjR3NJdXBUelA0SFhobFRNU2dvTjJBT0hhbkFKSFZuR2h1dXRqdFRjaXk2TnJNbnE0KzJVVEVWb0ZmZko2RHU0TFBUQyt0WkNWWTBWYkpaQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMzM4VG4wN2hMb3FheXFVMEtsdS9qWGxWZDhVclRTeGRIa0pYMU5IRVJZMFVYY1g2V3IyeHAxNmg5V2hTZm5UK1JHbDMxemVZTFh3blZpaVdDaElXaFE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTQxMTAwNzA6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0ODAxODA0NTE2MTcxNDo3MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLiuJkg8JOGqcOQ4rGkIOKkufCdkIDOssqLIMqR6qqW4rGk8JOGqlwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzE0MTEwMDcwOjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ5ODM3NDczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkZMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzS09GWmZ6dEdMY0hqdUhMV1NkWEhodUlqVktyOVhnR1Fub3g1M3REd1BRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1NzczODM4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkZLLmpzb24iOiAie1wia2V5RGF0YVwiOlwic1ZuZ3RrS2Q4eTlMeEZ2Q0VhS0hPalhGYmVxMnZmYi9KRUI4U3JGclNXZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NTc3MzgzODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDk4MzY0MzEwMThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0d25oTTBEcDZ5cWRiUndKM0IrL2RxWUtkSDZkdzc4QlFMUzVIUmFFemxNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1NzczODM4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ5ODM3NDc5NjMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
