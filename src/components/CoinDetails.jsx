import { Box, Container, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const CoinDetails = () => {
    const { singleCoin, isLoading } = useSelector(state => state.coins)



    // console.log(!singleCoin || isLoading);
    if (!singleCoin || isLoading) {
        return (
            <LinearProgress color='primary' />
        )
    }
    // console.log(chartData);

    return (
        <>
            <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={singleCoin.image.small} alt="img" />
                    <Typography variant='h5'>Name:{singleCoin.name}</Typography>
                </Box>
                <Typography variant='body1' >Description:{singleCoin.description.en}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
                    <Typography variant='h6' >Current price[USD]:<AttachMoneyIcon />{singleCoin.market_data.current_price.usd}</Typography>
                    <Typography variant='h6'>Current price[INR]:<CurrencyRupeeIcon />{singleCoin.market_data.current_price.inr}</Typography>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
                    <Typography variant='h6' >Price Change in 24hrs[USD]:<AttachMoneyIcon />{singleCoin.market_data.price_change_24h_in_currency.usd}</Typography>
                    <Typography variant='h6'>Price Change in 24hrs[INR]:<CurrencyRupeeIcon />{singleCoin.market_data.price_change_24h_in_currency.inr}</Typography>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
                    <Typography variant='h6'>Highest in 24hrs[USD]:<AttachMoneyIcon />{singleCoin.market_data.high_24h.usd}</Typography>
                    <Typography variant='h6'>Highest in 24hrs[INR]:<CurrencyRupeeIcon />{singleCoin.market_data.high_24h.inr}</Typography>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "30px" }}>
                    <Typography variant='h6'>Lowest in 24hrs[USD]:<AttachMoneyIcon />{singleCoin.market_data.low_24h.usd}</Typography>
                    <Typography variant='h6'>Lowest in 24hrs[INR]:<CurrencyRupeeIcon />{singleCoin.market_data.low_24h.inr}</Typography>

                </Box>







            </Container>
        </>
    )
}

export default CoinDetails