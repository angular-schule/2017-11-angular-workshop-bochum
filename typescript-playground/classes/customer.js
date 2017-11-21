"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id) {
        this.user = {
            name: 'Klaus',
            id: 4,
            role: 'admin'
        };
        this.id = id;
    }
    uselessMethod(user) {
        if (typeof user.id === 'string') {
            user.id = parseInt(user.id, 10);
        }
    }
    calculateNumber() {
        return this.id * 10;
    }
    fooBar() {
        var self = this;
        let callback = function () {
            return self.calculateNumber();
        };
        this.uselessMethod(this.user);
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