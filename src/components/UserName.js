import React, {useEffect, useState} from 'react'
import { requestName } from "../components/ApiCalls"



export default function UserName() {
    
    let [name, setName] = useState([])


    useEffect(() => {
        //call this function only when the page loads
        requestName(setName)
        .then(res => {
            setName(res.data.data.userInfos.firstName)
        })
    }, [])

    return (
        <div>
            <h1>Bonjour <span style={{color: 'red'}}> {name} </span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}
