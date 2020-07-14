import React from 'react';
  
import { useState, useEffect } from "react";
import styles from "./CardsInd.module.css"
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from "classnames";
import { fetchIndiaData } from "../../api";

const CardsInd = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {


    // console.log(confirmed);
    // console.log(recovered);
    // console.log(deaths);
    const [indiaData, setIndiaData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {

            setIndiaData(await fetchIndiaData());


        };
        fetchAPI();

    }, []);

    const indiadata = indiaData.data



    if(!confirmed){
        return 'Loading...';
    } else{
        return (
            <div className="container">
                <Grid container spacing={5} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary">Infected </Typography>
                            <Typography variant="h5">
                                <CountUp
                                    start={0}
                                    end={indiadata.confirmed.value}
                                    duration={1.7}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        </CardContent>
    
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary">Recovered </Typography>
                            <Typography variant="h5">
                            <CountUp
                                    start={0}
                                    end={indiadata.recovered.value}
                                    duration={1.7}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                        </CardContent>
    
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary">Deaths </Typography>
                            <Typography variant="h5"> 
                                <CountUp
                                    start={0}
                                    end={indiadata.deaths.value}
                                    duration={1.7}
                                    separator=","
                                />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of deaths from COVID-19</Typography>
                        </CardContent>
    
                    </Grid>
    
                </Grid>
    
            </div>
        )

    }
   
}

export default CardsInd;