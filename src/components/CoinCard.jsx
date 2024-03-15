import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';



const CoinCard = ({ coin }) => {
    return (
        <>
            <Grid item sm={12} md={6} lg={4} >
                <Card sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={coin.image}
                        sx={{ width: "200px", height: "200px" }}
                    />
                    <CardContent>
                        <Accordion sx={{ width: "400px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    {coin.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    {coin.symbol}
                                </Typography>
                                <Typography variant='h4'>
                                    <CurrencyRupeeIcon />{coin.current_price}
                                </Typography>

                            </AccordionDetails>
                            <AccordionActions>
                                <Button ><Link style={{ fontSize: "30px", textDecoration: "none", color: "black" }} to={`/coin-details/${coin.id}`}>DETAILS</Link></Button>
                            </AccordionActions>
                        </Accordion>


                    </CardContent>

                </Card>


            </Grid>
        </>
    )
}

export default CoinCard