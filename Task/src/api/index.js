import { BASE_URL } from "./constant";
// get all data 
export async function getAllData (enpoint){
    try {
        const response = await axios(`${BASE_URL}/${enpoint}`);

        return response;
    } catch (error) { 
        console.log(error);  
        
    }
}

// get data by id 

export async function getDataById (enpoint,id){
    try {
        const response = await axios(`${BASE_URL}/${enpoint}/${id}`);

        return response;
    } catch (error) { 
        console.log(error);  
        
    }
}
