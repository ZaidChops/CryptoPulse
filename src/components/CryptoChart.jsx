import React from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const CryptoChart = () => {

    const { chartData, isError } = useSelector(state => state.coins)
    const data = {
        labels: chartData.map((dataPoint) => new Date(dataPoint[0]).toLocaleTimeString()),
        datasets: [
            {
                label: "Price",
                data: chartData.map((dataPoint) => dataPoint[1]),
                borderColor: "green",
                fill: false
            }
        ]
    }

    if (!chartData) {
        return (
            <LinearProgress color='success' sx={{ marginBlock: "40px" }} />
        )
    }

    if (isError) {
        return (
            <Typography variant='h3' color={'error'}>Oops!! something went wrong... </Typography>
        )
    }


    return (
        <>
            <Box sx={{ width: "100%" }} >
                <Line data={data} style={{ width: "100%" }} />
            </Box>

        </>
    )
}

export default CryptoChart