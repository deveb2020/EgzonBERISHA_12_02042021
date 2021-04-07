import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import '../style/LineChart.css'
import { requestSessionLength } from "../components/ApiCalls"



const options = {
    maintainAspectRatio: false,
    scales: {
        xAxes: [{ 
            gridLines: {
                display: false,
            },
            ticks: {
                 fontColor: "white",
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display: false,
            }
        }]
    },
    legend: {
        display: false
    },
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 50,
            bottom: 0
        }
    } 
}

function LineChart() {

    const [sessionLength, setSessionLength] = useState([])

    useEffect(() => {
        requestSessionLength(setSessionLength)
    }, [])
    

    return (
        <div className="Line-chart">
            <p>Durée moyenne des session</p>
            <div className="Line-chart-box">
                <Line data={{
                    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'], // here passe dynamic data, like so:  labels: dataApi,
                    datasets: [
                        {
                            label: 'Minutes',
                            data: sessionLength,
                            backgroundColor: '#fa1f1f',
                            borderColor: "white",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: 'white',
                            pointHoverBorderColor: 'white'
                        }
                    ]
                }} 
                
                options={options} />
            </div>
        </div>
    )
}

export default LineChart