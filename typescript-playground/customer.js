"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id) {
        this.id = id;
    }
    calculateNumber() {
        debugger;
        return this.id * 10;
    }
    fooBar() {
        var self = this;
        let callback = function () {
            return self.calculateNumber();
        };
        let callback1 = () => this.calculateNumber();
        console.log(callback1());
        let city = 'Bochum-Wattenscheid';
        let myString = `Hallo
Welt
wir sind in
${city}!`;
        console.log(myString);
    }
}
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map