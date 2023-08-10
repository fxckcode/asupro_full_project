import axiosClient from "../axios-client";

async function getUser() {
    try {
        const response = await axiosClient.get('/user');
        const user = response.data;
        console.log(user)
        return user;
    } catch (error) {
        console.log(error)
    }
}

export default getUser