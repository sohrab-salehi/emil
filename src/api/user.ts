import { iGetUsersRequest } from "../types/user";
import randomUserServer from "./servers";

export const getUsers: () => Promise<iGetUsersRequest> = () => {
    const result = randomUserServer
        .get(`?results=200`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return result;
};

export default getUsers;
