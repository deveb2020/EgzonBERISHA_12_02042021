import React from 'react'
import Navbar from './Navbar'
import LeftBar from './LeftBar'
import BarChart from './BarChart'
import '../style/UserProfil.css'
import LineChart from './LineChart'
import RadarCHART from './RadarChart'
import DoughnutChart from './DonutChart'
import UserName from './UserName'
import Nutritions from './Nutritions'


export default function UseProfil() {

    return (
        <div>
            <Navbar />
            <div className="dashboard">
                <LeftBar />
                <div className="charts-wrapper">
                    <UserName />
                    <BarChart />
                    <div className="inline-charts">
                        <LineChart />
                        <RadarCHART />
                        <DoughnutChart />
                    </div>
                </div>
                <div className='nutritions-wrapper'>
                    <Nutritions />
                </div>
            </div>
        </div>
    )
}
