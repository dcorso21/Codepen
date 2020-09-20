var running, btn;


// Shortcut to get elements
var el = function (element) {
    if (element.charAt(0) === "#") {
        // If passed an ID...
        return document.querySelector(element); // ... returns single element
    }
    return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

var nums = el('.btn'),
    conversion = {
        
    }


nums.forEach(element => {
    element.addEventListener('click', event => {
        console.log(event)
    })
});