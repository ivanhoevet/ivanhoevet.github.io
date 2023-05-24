const fs = require('fs');


fs.readdir('./',function(err,res){
  if(err){return console.log(err)}

  console.log(res)
})
