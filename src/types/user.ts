export interface iUser {
    gender: "female" | "male";
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    login: {
        username: string;
    };
    dob: {
        date: Date;
        age: number;
    };
    registered: {
        date: Date;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}

export default iUser;
