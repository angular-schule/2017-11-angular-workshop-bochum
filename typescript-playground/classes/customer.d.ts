export declare type UserId = string | number;
export declare type UserRole = 'editor' | 'admin' | 'user';
export interface User {
    name: string;
    id: UserId;
    role: UserRole;
    location?: string;
}
export declare class Customer {
    user: User;
    private id;
    constructor(id: number);
    uselessMethod(user: User): void;
    calculateNumber(): number;
    fooBar(): void;
}
