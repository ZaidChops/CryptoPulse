import { Container, IconButton, InputBase, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { searchCoin } from '../features/coins/coinSlice';

const Form = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        // console.log(search);
        dispatch(searchCoin(search))
        setSearch("")
    }
    return (
        <>

            <Container sx={{ marginTop: "40px" }}  >

                {/* <TextField label={"Search here...."}/> */}
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Crypto here..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        fullWidth
                        onChange={(e) => setSearch(e.target.value)} />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={(e) => handleSearch(e)}>
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </Container>
        </>
    )
}

export default Form