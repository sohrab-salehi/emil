import { iUser } from "../types/user";
import randomUserServer from "./servers";

export const getUsers: () => Promise<iUser> = () => {
    const result = randomUserServer
        .get(`?results=400`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

export default getUsers;
