console.log("hello nodejs!");

var figlet = require('figlet');

figlet('DeokDuck', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});