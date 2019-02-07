const fs = require('fs') 
  
fs.readFile('file1.txt', (err, data) => { 
  if (err) throw err; 
  console.log(data.toString()); 

  fs.readFile('file2.txt', (err, data) => { 
    if (err) throw err; 
    console.log(data.toString()); 

    fs.readFile('file3.txt', (err, data) => { 
      if (err) throw err; 
      console.log(data.toString()); 

      fs.readFile('file4.txt', (err, data) => { 
        if (err) throw err; 
        console.log(data.toString()); 

        fs.readFile('file5.txt', (err, data) => { 
          if (err) throw err; 
          console.log(data.toString()); 
        })
      })
    }) 
  })
})
