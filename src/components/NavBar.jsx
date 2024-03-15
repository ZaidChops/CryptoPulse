import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Link } from 'react-router-dom';


const NavBar = ({ changeTheme }) => {
    const handleTheme = () => {
        changeTheme()

    }

    return (
        <div>
            <AppBar sx={{ bgcolor: "#184181" }}>

                <Toolbar>
                    {/* <Avatar alt="" src='../assets/images/logo1.png' /> */}
                    <Link to={'/'} style={{ width: "60%", textDecoration: "none", color: "white", flexGrow: "1" }}> <Typography sx={{ fontFamily: "Amatic SC" }} variant='h5'>cryptoKING <CurrencyBitcoinIcon /></Typography></Link>
                    <Link to={'/trending'} style={{ textDecoration: "none", color: "white", marginRight: "10px" }}><Typography sx={{ fontFamily: "Amatic SC" }} variant='h5'>Trending</Typography></Link>
                    {/* <Link to={'/search'} style={{ textDecoration: "none", color: "white" }}><Typography sx={{ fontFamily: "Amatic SC" }} variant='h5'>Search</Typography></Link> */}

                    <Switch onClick={handleTheme} />
                    <DarkModeIcon />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar