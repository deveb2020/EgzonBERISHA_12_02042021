import React, {useEffect, useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import '../style/DonutChart.css'
import { requestName } from "../components/ApiCalls"


const options = {
    cutoutPercentage: 90,            //thicknes of the circle
    maintainAspectRatio: false,      //fits the size of the parent div             
    hover: {mode: null},             //hides info pop box on hover
    tooltips: {
        enabled: false
   }
    
}

export default function DoughnutChart() {

    const [score, setScore] = useState()

    useEffect(() => {
        requestName()
        .then(res => setScore(res.data.data.todayScore))
    }, [])

    console.log(score)

    return (
        <div className="Doughnut-Box">
            <p className='score'>Score</p>
            <p className='midle-text'><span>{score}% </span><br/> de votre <br/> objectif</p>
            <Doughnut data={{
                datasets: [{
                    data: [score, 50],
                    backgroundColor: ['#E60000', 'rgba(210, 210, 219, 0)'],
                    borderColor: 'rgba(210, 210, 219, 0)'
                }],
            
            }} options={ options }/>
        </div>
    )
}
