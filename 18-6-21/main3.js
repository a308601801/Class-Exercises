
let cleanRoom = () => {
    let cleanTheRoom = new Promise(function(resolve){
        resolve('cleaned the Room');
    });
    return cleanTheRoom;
}

let removeGarbage = () => {
    let removeTheGarbage = new Promise((resolve) => {
        resolve('remove garbage');
    });
    return removeTheGarbage;
}

let winIceCream = () => {
    let winMyIceCream = new Promise((resolve) => {
        resolve('win Icecream');
    });
    return winMyIceCream;
}

cleanRoom().then((x) => {
    removeGarbage();
    console.log(x)
}).then(() => {
    winIceCream();
}).then(() => {
    console.log('finish');
})

Promise.race([
    cleanRoom(), removeGarbage(), winIceCream()
]).then(()=> {
    console.log('all finish')
})

function searchAndDisplay() {
    try {
        let respose = fetchJSON(creatUrl());
        response
    }
}