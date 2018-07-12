const fs = require('fs')
const STORE_FILE_NAME = 'node.txt';
const DEFAULT_ENCODING = 'utf8';
let a = [1,2]
a.push(3)
console.log(a)

module.exports.readFile =  function() {
    return new Promise(function(resolve, reject){
        fs.readFile(STORE_FILE_NAME, DEFAULT_ENCODING, function(err, data) {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports.writeFile = function(args) {
    return new Promise(function(resolve, reject){
        fs.writeFile('node.txt', args, 
            function(err,data){
                if(err){
                    reject(err)
                } else {
                    resolve(data)
                }
        })
    })
}

module.exports.deleteFile = function(args) {
    return new Promise((resolve, reject) => {
        fs.unlink(args, (err, data) => {
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

module.exports.appendFile = (args) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(STORE_FILE_NAME, `\n${args.join(' ')}`,
         (err, data) => err ? reject(err) : resolve(data = 1)
        )
    })
}