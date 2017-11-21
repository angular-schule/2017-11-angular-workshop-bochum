import { Customer, UserRole, UserId } from "./classes/index";
import { Dictionary } from "./classes/index";

const c = new Customer(5);
c.fooBar();


const d = new Dictionary<number>();
d.set('bochum', 44866);

console.log(d.get('bochum'));