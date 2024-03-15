import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';


const SearchCard = ({ coin }) => {
    return (
        <>

            <Grid item sm={12} md={6} lg={4} >
                <Card sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={coin.large}
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
                                    {coin.symbol}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" color="text.secondary">
                                    {coin.name}
                                </Typography>
                                <Typography>
                                    Market Cap Rank:{coin.market_cap_rank}
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

export default SearchCard