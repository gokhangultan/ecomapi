import Axios from 'axios';

const username = 'gultangokhan@gmail.com';
const password = '1994hopGG';

const createBasicAuthToken = (username, password) => {
    return btoa(`${username}:${password}`);
};

const token = createBasicAuthToken(username, password);

const axiosInstance = Axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Authorization': `Basic ${token}`
    }
});


export const fetchCategory = () => async (dispatch, getState) => {
    try {
        const { categories } = getState().global;
        if (categories.length > 0) {
            // Check if categories exist
            return;
        }

        const response = await axiosInstance.get("/categories");
        dispatch(setCategories(response.data));
    } catch (error) {
        console.error("Cannot access categories.", error);

        // Log the error response if available
        if (error.response) {
            console.error("Error Response:", error.response);
        }
    }
};

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories
});
