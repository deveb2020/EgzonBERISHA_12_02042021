import axios from "axios"

/*  IMPORTANT!!!
    We are changing the state of a component A from the file B, only by passing the setState of component A as argument and param
    to the file B function and than calling the function of a file B inside the useEffect of a component A
*/

/*
    HOW ARE API REQUEST WORKING
    1 - I am using async/await to handle the response time
    2 - I am changin the state of the A component using function arguments and parameters
    3 - Only for the function requestName i'am not changing the state directly from the function but i'am returning the response recived from the API
        and then in Componant A I'am using the method .then("change state inside") to change the state
*/


// the user id grabed from the url and used to update the endpoints dynamically
const urlID = window.location.pathname // console result( /user/id )



export const requestName = async () => {

    const result = await axios.get(`http://localhost:3000${urlID}`);

    return  result
}




export const requestNutrition = async (setCalories, setProtein, setClucide, setLipide) => {

    const result = await axios.get(`http://localhost:3000${urlID}`);

    return  {
        calories: setCalories(result.data.data.keyData.calorieCount),
        protein: setProtein(result.data.data.keyData.proteinCount),
        clucide: setClucide(result.data.data.keyData.carbohydrateCount),
        lipide: setLipide(result.data.data.keyData.lipidCount)
    }
}




export const requestActivity = async (setKg, setCalories, setDate) => {

    const result = await axios.get(`http://localhost:3000${urlID}/activity`);

    return {
        kg: setKg(result.data.data.sessions.map(elt => elt.kilogram)),
        calories: setCalories(result.data.data.sessions.map(elt => elt.calories)),
        date: setDate(result.data.data.sessions.map(elt => elt.day))   
    }
}




export const requestSessionLength = async (setSessionLength) => {

    const result = await axios.get(`http://localhost:3000${urlID}/average-sessions`);

    return setSessionLength(result.data.data.sessions.map(elt => elt.sessionLength))
}





export const requestPerformance = async (setPerformance) => {

    const result = await axios.get(`http://localhost:3000${urlID}/performance`);

    return setPerformance(result.data.data.data)
}


