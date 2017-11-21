import { Customer, UserRole, UserId } from "./classes";
import { Dictionary } from "./classes";

let role: UserRole;
let id: UserId;

const c = new Customer(5);
c.fooBar();


let d = new Dictionary<number>();
d.set('bochum', 44866);

console.log(d.get('bochum'));