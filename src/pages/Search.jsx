import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
import { useSelector } from 'react-redux'
import SearchCard from '../components/SearchCard'

const Search = () => {
    const { searchCoins, isLoading, isError } = useSelector(state => state.coins)
    if (searchCoins.length === 0) {
        return (
            <>
                <Typography variant='h3' color={'error'} sx={{ marginTop: "90px" }} align='center' >No Coins Yet!!! </Typography>
                <Form />

            </>
        )

    }
    if (!searchCoins || isLoading) {
        return (
            <LinearProgress color='success' sx={{ marginBlock: "180px" }} />
        )

    }
    if (isError) {
        return (
            <Typography variant='h3' color={'error'} sx={{ marginTop: "100px" }}>Oops!! something went wrong... </Typography>
        )
    }

    return (
        <>
            <Box>
                <Typography variant='h3' sx={{ marginTop: "90px" }} color={"primary"} align='center'>Search Coins here...</Typography>
                <Form />
                <Grid container spacing={4} sx={{ marginTop: "20px", padding: "0px 20px" }}>
                    {
                        searchCoins.map(coin => <SearchCard key={coin.id} coin={coin} />)}
                </Grid>
            </Box>

        </>
    )
}

export default Search