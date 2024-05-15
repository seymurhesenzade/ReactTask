import axios from 'axios';
import {BASE_URL} from './constant'


// get All Data 
export async function getAllData(endpoint){
    try {
        const response = await axios(`${BASE_URL}/${endpoint}`)
        return response;
    } catch (error) {
        console.log(error);
    }
} 

// get one data By Id 

export async function getDataById(endpoint,id){
    try {
        const response = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return response;
    } catch (error) {
        console.log(error);
    }
} 

// delete data by id

export  async function deleteDataById(endpoint, id){
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

