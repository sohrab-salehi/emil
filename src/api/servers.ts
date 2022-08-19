import axios from "axios";

const randomUserServer = axios.create({
    baseURL: "https://randomuser.me/api/",
    timeout: 10000,
});

export default randomUserServer;
