import { useState, useEffect } from "react"
import styles from './BarChart.module.css'

import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS. register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function BarChart(){

 const [chartData, setChartData] = useState({
    datasets: []
 })

 const [chartOptions, setChartOptions] = useState({})

 useEffect(() => {
      setChartData({
        labels: ["Sun", "Mon", "Tue", "Web", "Thurs", "Fri", "Sat"],
        datasets: [
            {
                label: "Sales $",
                data: [15234, 18923, 13728, 20081, 14900, 14012, 12340],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)'
            }
        ]
      })
      setChartOptions({
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Daily Revenue"
            }
        },
        maintainAspectRatio: false,
        responsive: true
      })
 }, [])

    return(
        <>
        <div className={styles.containers}>
          <Bar data={chartData} options={chartOptions} />
        </div>
        </>
    )
}