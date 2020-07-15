import React, {useState,useEffect} from 'react';
import styles from "../Cards/Cards.module.css"
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from "classnames";
import {fetchIndiaData } from "../../api";


const IndiaData = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

    /**   extra       */
    const [indiaData,setIndiaData]=useState({});
    useEffect(()=>{
        const fetchAPI =async() =>{
            setIndiaData(await fetchIndiaData());
        };
        fetchAPI();
    },[]);

    const indiadata=indiaData.data;

    /**    end  */


    if(!confirmed){
        return 'Loading...';
    }
    var confirmpercent = (indiadata.confirmed.value * 100 / confirmed.value).toFixed(0)
    var recoveredpercent = (indiadata.recovered.value * 100 / recovered.value).toFixed(0)
    var deathpercent = (indiadata.deaths.value * 100 / deaths.value).toFixed(0)
    return (
        <div className="container">
                {/* <img src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19" className="image"/> */}
                <Grid container spacing={4} justify="center" >
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography >Confirmed (INDIA)</Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.confirmed.value} duration={2} separator="," /></Typography>
                            <Typography className={styles.percent} ><CountUp start={0} end={confirmpercent} duration={2} />% of Global Cases...</Typography>
                            <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                            {/* <Typography variant="body2">Number of active cases of COVID-19</Typography> */}


                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography >Recovered (INDIA) </Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.recovered.value} duration={2} separator="," /></Typography>
                            <Typography className={styles.percent}><CountUp start={0} end={recoveredpercent} duration={2} />% of Global cases...</Typography>
                            <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                            {/* <Typography variant="body2">Number of recovered cases of COVID-19</Typography> */}

                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={4}  className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography >Deaths (INDIA) </Typography>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.deaths.value} duration={2} separator="," /></Typography>
                            <Typography className={styles.percent}><CountUp start={0} end={deathpercent} duration={2} />% of Global Cases...</Typography>
                            
                            <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                            {/* <Typography variant="body2">Number of deaths of COVID-19</Typography> */}

                        </CardContent>
                    </Grid>

                </Grid>
                <br></br>
            
        </div>
    )
    }

export default IndiaData;