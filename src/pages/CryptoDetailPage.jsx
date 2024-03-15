import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getChartDetails, getCoinDetail } from '../features/coins/coinSlice'
import CoinDetails from '../components/CoinDetails'
import CryptoChart from '../components/CryptoChart'

const CryptoDetailPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCoinDetail(params.id))
        dispatch(getChartDetails(params.id))

    }, [])
    return (
        <Container>
            <CoinDetails />
            <CryptoChart />
        </ Container>
    )
}

export default CryptoDetailPage