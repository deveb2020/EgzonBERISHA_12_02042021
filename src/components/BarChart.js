import React, { useEffect, useState } from 'react'
import '../style/BarChart.css'
import { Bar } from 'react-chartjs-2';
import { requestActivity } from "../components/ApiCalls"


const options = {
    maintainAspectRatio: false,      //fits the size of the parent div 
    barValueSpacing: 50,
    //legend is the litle info box in top right of the chart
    legend: {  
        align: 'end',
        position: "top",
        labels: {
            usePointStyle: true,
            padding: 20
        },
    },
    //tooltip is the little info box wich show on the hower
    tooltips: {
        mode: 'label',
        displayColors: true,   
        callbacks: {
           label: function(t, d) {
              var yLabel = t.yLabel;
              const color = d.datasets[t.datasetIndex].backgroundColor;
              const kgOrCalories = color === 'black'? 'Kg' : 'Calories'
              return  yLabel + ' ' + kgOrCalories ;
           },
           title: function() {} // hides the tittle of the tooltip
        },
        backgroundColor: 'red'
    },
    scales: {
        yAxes: [
            {
                position: 'right',
                ticks: {
                    min: 5,       //it is the number at wich vertical numbers will start
                    stepSize: 150  //it's the sâce bettwen numbers in vertical bar
                },
            }
        ],
        xAxes: [
            {
                gridLines: {
                    display: false
                },
                barPercentage : 0.4,
            }
        ]
    }       
}

export default function BarChart() {

    const [kg, setKg] = useState([])
    const [calories, setCalories] = useState([])
    const [date, setDate] = useState([])

    useEffect(() => {
        requestActivity(setKg, setCalories, setDate)
    }, [])

    return (
        <div className='Bar-chart'>

            <Bar data={{
                labels: date,
                datasets: [
                    //first dataset group shows the weights of each label 
                    {
                        label: "Poids (kg)",
                        backgroundColor: "black",
                        data: kg,
                    }, 
                    //second dataset group shows the calories of each label 
                    {
                        label: "Calories brûlées (kCal)",
                        backgroundColor: "#E60000",
                        data: calories,
                    } 
                ]            
            }} 
            
            options={options} />
        </div>
    )
}
