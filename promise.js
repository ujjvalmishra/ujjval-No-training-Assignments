const fs = require('fs')

let dir = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
let promise = [];

function readFile(file){
  let promise = new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => { 
      if (err) {
        reject(err); 
      } else{
        resolve(data.toString());
      }
    })  
  })
  return promise;
}

for( let i = 0 ; i < dir.length ; i ++ ){
   promise[i] = readFile(dir[i]);
} 

promise[0].then((message) => {
  console.log(message);
  return promise[1]; 
}).then((message) => {
  console.log(message);
  return promise[2]; 
}).then((message) => {
  console.log(message);
  return promise[3];
}).then((message) => {
  console.log(message);
  return promise[4];
}).then((message) => {
  console.log(message);
})