//const sysUser = os.hostname();
function greet (hostname) {
    return "Date of request" + new Date() + "\n" + "Goog evening " + hostname;
}

const currDate = new Date();
module.exports.date = currDate;

module.exports.showGreet = function(name) {
    const hour = currDate.getHours();
    switch(true) {
        case hour >= 5 && hour < 12: return `Good morning, ${name}`;
        case hour >= 12 && hour < 18: return `Good aftenoon, ${name}`;
        case hour >= 18 && hour < 23: return `Good evening, ${name}`;
        case hour >= 23 || hour < 5: return `Good morning, ${name}`;
    }
}