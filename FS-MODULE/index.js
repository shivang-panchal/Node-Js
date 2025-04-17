const fs = require('fs');

// File Write sync
// fs.writeFileSync('myfile.txt','This is Content of File')
// console.log("File Write DOne")

// File Write Async
// fs.writeFile('myfile.txt','Hello Async',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Created")
// })
// console.log("After File Write")

// Read File Sync
// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString())

// Read File Async
// fs.readFile('myfile.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log("After File Read");

// Delete File Sync
// try {
//     fs.unlinkSync('myfile.txt');
// } catch (error) {
//     console.log("Error:",error)
// }

// Delete File Async
// fs.unlink('myfile.txt',(err)=>{
//     if(err){
//     console.log("Error:",err)
//     }else{
//     console.log("File Deleted SuccessFully")
//     }
// })

// Make Directory Sync And Exists Sync
// try {
//     if(!fs.existsSync('Folder')){
//         fs.mkdirSync('Folder')
//     }
//     else{
//         console.log("Directory Already Exists")
//     }
//  } catch (error) {
//     console.log("Error:",error)
// }

// console.log("After mkdirsync")

// Make Directory Async And fs.access is a method from Node.js's fs (File System) module that checks if a file or directory exists and if your program has permission to access it.
// fs.access('Folder', (err) => {
//     if (err) {
//         // Directory does not exist
//         fs.mkdir('Folder', (err) => {
//             if (err) {
//                 console.log('Error creating directory:', err);
//             } else {
//                 console.log('Directory Created');
//             }
//         });
//     } else {
//         console.log('Directory Already Exists');
//     }
// });

// Remove Directory Sync
// console.log("Before rmdirSync")
// if(fs.existsSync('Folder')){
//     console.log("Directory Exists")
//     fs.rmdirSync('Folder');
//     console.log("Directory Deleted")
// }else{
//     console.log("Directory Not Exists")
// }
// console.log("After rmdirSync")

// Remove Directory Async
// fs.rmdir("Folder",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Directory Deleted")
//     }
// })

// Read Directory Sync And Check Is Exists or Not
// if(fs.existsSync(__dirname)){
//     const data = fs.readdirSync(__dirname)
//     console.log(data)
// }else{
//     console.log("Directory Not Exists");
// }


// Read Directory Async
// console.log("Current Directory:",__dirname);
// fs.readdir(__dirname,(err,data)=>{
//     if(err){
//         console.log("Error:",err)
//         return
//     }
//     console.log("Content of Directory is",data)
// })

// Rename Directory or file Sync
// console.log("Before Rename")

// if(fs.existsSync("myfile.txt")){
//     fs.renameSync("myfile.txt","file1.txt");
//     console.log("Renamed SuccessFUlly")
// }else{
//     console.log("File Not Found")
// }

// try {
//     fs.renameSync("file1.txt","file2.txt");
//     console.log("Rename Successfully")
// } catch (error) {
//     console.log("Error:",error);
// }

// console.log("After Rename")

// Rename Directory or File Async
// fs.rename("file2.txt","file3.txt",(err)=>{
//     if(err){
//         console.log("Error:",err);
//         return
//     }
//     console.log("Renamed Successfully")
// })




