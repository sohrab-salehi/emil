import randomUserServer from "./servers";

export const getUsers: () => Promise<any> = () => {
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
