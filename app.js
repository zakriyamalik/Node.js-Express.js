// const amount=12;

// if(amount<10)
// {
//     console.log("Small number ")
// }
// else
// { 
//     console.log("large number ")
// }


// console.log(`hey it's my first node app!!!`);

// // setInterval(()=>
// // {
// //     console.log('hello world')
// // },1000);


//Modules


// const names=require('./names');

// const sayHi =require('./functions');

// sayHi(names.john);

// // sayHi(secret);
// // sayHi(john);


// const os = require('os')

// const user=os.userInfo()
// //console.log(user);
// console.log("The system Uptime is ",os.uptime);

// const currentOS= {
//     name: os.type(),
//     release: os.release(),
//     totalmem:os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);


// Path 

// const path=require('path');
// console.log(path.sep);

// const filePath=path.join('/content','subfolder','test.txt');
// console.log(filePath);

// const base=path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
// console.log(absolute);


// Synchronous approach

// const {readFileSync,writeFileSync}= require("fs");

// const first = readFileSync('./content/first.txt','utf8')

// const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);

//  writeFileSync(
//     './content/result.txt',`Here is the result ${first+ second}`
//     ,{flag:'a'}
// )


//Async


// const {readFile,writeFile}=require("fs");
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err)
//     {
//         console.log(err);
//         return 
//     }
//    const first=result;
//    readFile('./content/second.txt','utf8',(err,result)=>
// {
//     if(err)
//         {
//             console.log(err);
//             return 
//         }
//        const second=result;
//        writeFile('./content/result-async.txt',`here is the result ${first+second}`,
//         (err,result)=>
//             {
//                 if(err)
//                 {
//                     console.log(err);
//                     return;
//                 }
//                 console.log(result);
//             }
//        )
// })
// })


// HTTP

// const http =require('http');

// const server=http.createServer((req,res)=>
// {
//     if(req.url==='/')
//     {
//         res.end("Wellcome to aur Home Page");

//     }
//     if(req.url==='/about')
//     {
//         res.end("Here is more information about us");
//     }
//     // res.end(
//     //     `<h1>Oops!!!!</h1>
//     //     <p>We don't have one we are looking for </p>
//     //     <a href='/'> Go Back Home</a>`

//     // )
// })

// server.listen(5000);


//NPM Package

// const _= require('lodash')
// const arr=[1,[2,[3,[4]]]];
// const newItems=_.flattenDeep(arr);
// console.log(newItems);
// console.log("Hello people!!!");

// Event loop Example 

// Import the 'fs' module to interact with the file system
// const fs = require('fs');

// // Simulate a blocking operation
// console.log('Start of the script');

// // Asynchronous operation using setTimeout
// setTimeout(() => {
//   console.log('Timeout callback executed');
// }, 0);

// // Asynchronous operation using fs.readFile
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file', err);
//     return;
//   }
//   console.log('File read completed');
// });

// // Simulate a blocking operation
// console.log('End of the script');


// const http=require('http');

// const server=http.createServer((req,res)=>
// {
//     console.log('request event')
//     res.end('Hello World')
// })

// server.listen(5000,()=>
// {
//     console.log('listening on port 5000');
// })



const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFile('./content/first.txt', 'utf8')
//     const second = await readFile('./content/second.txt', 'utf8')
//     await writeFile(
//       './content/result-mind-grenade.txt',
//       `THIS IS AWESOME : ${first} ${second}`,
//       { flag: 'a' }
//     )
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }
// start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))


// const EventEmitter= require('events');
// const emitter = new EventEmitter();
//  emitter.on('event', (name,id) => {
//  console.log('data received with name and id respectively ',name,id)})

//  emitter.on('event', (john) => {
//  console.log('data not not received ',john)})
    
// emitter.emit('event','john',34);


// const { writeFileSync }= require('fs');
// for(let i=0;i<10000;i++)
// {
//     writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'})
// }


// const {createReadStream}= require('fs');
// const stream=createReadStream('./content/big.txt',{
//     highWaterMark:90000
// });

// stream.on('data',(result)=>
// {
//     console.log(result);
// })

var http=require('http')
var fs =require('fs')

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8');
    // res.end(text)
    const fileStream= fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>
    {
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>
        {
            res.end(err);
        })
}).listen(5000)

