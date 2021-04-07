import React, { useEffect, useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../style/RadarChart.css'
import { requestPerformance } from "../components/ApiCalls"



function RadarCHART() {

  const [performance, setPerformance] = useState([])
 
  useEffect(() => {
    requestPerformance(setPerformance)
  }, [])
  
  return (
      <div className="chart-box">
          <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={performance} fill="white">
              <PolarGrid />
              <PolarAngleAxis dataKey="kind" />
              <Radar name="Mike" dataKey="value"  fill="#E60000" fillOpacity={0.6} />
          </RadarChart>
          </ResponsiveContainer>
      </div>
  )

}

export default RadarCHART
