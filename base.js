"use strict";
Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });
function deliveryMethod() {
    // TODO some logic
    return 'overnight';
}
function shipWeight() {
    var el = document.getElementById('weight');
    // if (el === null) {
    //     return 0;
    // }
    return parseInt(el.innerHTML);
}
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        // tslint:disable-next-line:no-console
        console.log("Shipping to " + addr + " via " + (deliveryMethod() || 'standard') + " delivery");
        if (shipWeight() > 100) {
            // tslint:disable-next-line:no-console
            console.log('WARNING: Oversize package');
        }
    }
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (val) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
