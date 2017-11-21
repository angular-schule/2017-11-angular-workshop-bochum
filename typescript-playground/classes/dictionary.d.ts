export declare class Dictionary<T = string> {
    private hashMap;
    get(key: string): T;
    set(key: string, value: T): void;
}
