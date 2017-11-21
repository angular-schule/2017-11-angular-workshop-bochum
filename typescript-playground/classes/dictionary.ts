import { HashMap } from "./hashmap";

export class Dictionary<T = string> {
    private hashMap: HashMap<T> = {};
    
    get(key: string): T {
        return this.hashMap[key];
    }

    set(key: string, value: T) {
        this.hashMap[key] = value;
    }
}



