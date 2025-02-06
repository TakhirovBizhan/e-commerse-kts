import axios from "axios";
import { IData } from "../../config/DataInterfaces";
import { ErrorHandler } from "../../utils/ErrorHandler";

export const getProducts = async () => {
    try {
        const response = await axios.get<IData[]>('https://api.escuelajs.co/api/v1/products');
        return response.data;
    } catch (error) {
        const errorMessages = await ErrorHandler.getErrors(error);
        console.error(errorMessages);
        throw errorMessages;
    }
};