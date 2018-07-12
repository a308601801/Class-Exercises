const fsopts = require('./fsopts')
const cmd = process.argv[2]; //0 node 1 main.js 2 args(add/help)
const args = process.argv.slice(3) //3 arg banana// get input from cmd

//fsopts.readFile()
//    .then(data => console.log(data))

//fsopts.writeFile()
//   .then(data => console.log(`content: ${data}`))

//fsopts.deleteFile()



function printHelp(){
    console.log(
        `Options:
        add: Adds a todo item
        remove: remove an item by index
        help: print help
        list: show all todo item
        reset: remove all todo items`
    )
}

switch(cmd) {
    case 'add':
        fsopts.appendFile(args)
            .then(() => fsopts.readFile())
            .then(data => console.log(`To-Dos: \n${data}`))
            .catch()
        break;
    case 'help':
        printHelp()
        break;
    case 'remove':
        let newData
        fsopts.readFile()
            .then(data => newData = data.split('\n').slice(args).join('\n'))
            .then(() => fsopts.writeFile(newData))
            .then(() => fsopts.readFile()
            .then(data => console.log(`To-Dos:\n${data}`))
        )
        break;
    case 'list':

        break;
    case 'reset':

        break;
    default:
        console.log('Cannot understand')
        break;
}