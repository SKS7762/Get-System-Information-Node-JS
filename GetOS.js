
function Get_info_OS(){

const os = require('os');


  console.log("Computer name: " + os.hostname())
  console.log("OS: " + os.platform())
  console.log("Architecture: " + os.arch())
  console.log("CPU: " + os.cpus()[0].model)
  console.log("Total Memory: " + os.totalmem() / 1024 / 1024 + " MB")
  console.log("Free Memory: " + os.freemem() / 1024 / 1024 + " MB")
  console.log("Uptime: " + os.uptime() + " seconds")
  console.log("Total Users: " + os.userInfo().username)
  
}
Get_info_OS()
