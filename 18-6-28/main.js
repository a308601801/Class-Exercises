(function(){
    let _log = console.log;
    let _error = console.error;

    console.error = function(errMsg) {
        document.getElementById('console').innerHTML = 'Error' +
        errMsg;
        _error.apply(console, arguments);
    }

    console.log = function(logMsg) {
        document.getElementById('console').innerHTML = logMsg;
        _log.apply(console, arguments);        
    }
    
})()

const sourceBtn = document.getElementById('viewSource');
const runBtn = document.getElementById('runCode');
const consl = document.getElementById('console');

sourceBtn.addEventListener('click', displayCode);
runBtn.addEventListener('click', runCode);

let xhr;
function displayCode() {
    xhr= new XMLHttpRequest;
    xhr.open('GET', './room.js', true);
    xhr.responseType = 'text';
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function processRequest() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText); 
    }
}

function runCode() {
    let input = document.getElementsByTagName('input')[0];
    console.log(input.value);
    try {
        eval(input.value);
    } catch(err) {
        console.log(err);
    }
    input.value = '';
}