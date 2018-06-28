let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

    //clean the room

    let isClear = true;

    if(isClear) {
        resolve('clear');
    } else {
        reject('not clear');
    }

});

promiseToCleanTheRoom.then(function(fromResolve) {
    console.log('the room is ' + fromResolve)
    console.log('i am then')
}).catch(function(fromResolve) {
    console.log('the room is ' + fromResolve)
    console.log('i am catch')
});

