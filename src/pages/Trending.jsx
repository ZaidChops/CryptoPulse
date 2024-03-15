import React, { useEffect } from 'react'
import CryptoCard from '../components/CryptoCard'
import { Grid, LinearProgress, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { TrendingCoins } from '../features/coins/coinSlice'
import Form from '../components/Form'

const Trending = () => {
    const { coins, isLoading, isError } = useSelector(state => state.coins)
    const dispatch = useDispatch()
    const getTrendingCoins = () => {
        dispatch(TrendingCoins())
    }
    useEffect(() => {
        getTrendingCoins()
    }, [])

    if (!coins || isLoading) {
        return (
            <LinearProgress color='success' sx={{ marginBlock: "180px" }} />
        )

    }
    if (isError) {
        return (
            <Typography variant='h3' color={'error'}>Oops!! something went wrong... </Typography>
        )
    }

    return (
        <>

            <Typography variant='h3' color={"primary"} align='center' sx={{ marginTop: "90px" }}>TRENDING COINS</Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px", padding: "0px 20px" }}>
                {coins.map(coin => <CryptoCard key={coin.item.coin_id} coin={coin} />)}
            </Grid>

        </>
    )
}

export default Trending