export type UserId = string | number;
export type UserRole = 'editor' | 'admin' | 'user';

export interface User {
    name: string;
    id: UserId;
    role: UserRole;
    location?: string;
}

export class Customer {
    user: User = {
        name: 'Klaus',
        id: 4,
        role: 'admin'
    }


    constructor(private id: number) { }

    uselessMethod(user: User) {
        
        if(typeof user.id === 'string') {
            user.id = parseInt(user.id, 10);
        }
    }

    calculateNumber(): number {
        debugger;
        return this.id * 10;
    }

    fooBar() {
        var self = this;
        let callback = function() {
            return self.calculateNumber();
        }

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
