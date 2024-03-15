import { Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import CoinCard from '../components/CoinCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../features/coins/coinSlice'
import image1 from '../assets/images/crypto.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
    const { allCoins, isLoading, isError } = useSelector(state => state.coins)
    const dispatch = useDispatch()
    const getAllCoins = () => {
        dispatch(getAll())
    }

    useEffect(() => {
        getAllCoins()

    }, [])

    if (allCoins.length === 0 || isLoading) {
        return (<>
            <LinearProgress color='success' sx={{ marginTop: "180px" }} />
        </>
        )

    }
    if (isError) {
        return (
            <Typography variant='h3' color={'error'} sx={{ marginTop: "100px" }}> Oops!! something went wrong... </Typography>
        )
    }


    return (
        <>
            <div className='img-cont'>
                <h4 >
                    Get all the data about Crypto currencies on your finger tips <br />
                    Anywhere...anytime
                    <br />
                    Whichever...whatever

                </h4>
                <Link to={'/search'}><button> Go to Search </button></Link>

            </div>
            <Typography variant='h3' align='center' color={"primary"} sx={{ marginTop: "30px" }}>ALL COINS!!</Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px", padding: "0px 20px" }}>
                {
                    allCoins.map(coin => <CoinCard key={coin.id} coin={coin} />)
                }
            </Grid>
        </>
    )
}

export default Home