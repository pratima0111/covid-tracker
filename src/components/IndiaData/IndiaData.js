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
            <div className={styles.cardlist2}>
                <h1>India</h1>
                <br></br>
                <Grid container spacing={5} justify="center" >
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <h2 style={{ color: "#636363" }}>Total Cases</h2>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.confirmed.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={confirmpercent} duration={4} />% of Global Cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <h2 style={{ color: "#69A469" }}>Recovered</h2>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.recovered.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={recoveredpercent} duration={4} />% of Global cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3}  className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <h2 style={{ color: "#DB6F4B" }}>Deaths</h2>
                            <Typography variant="h5"><CountUp start={0} end={indiadata.deaths.value} duration={2} separator="," /></Typography>
                            <Typography color="primary"><CountUp start={0} end={deathpercent} duration={4} />% of Global Cases</Typography>
                        </CardContent>
                    </Grid>

                </Grid>
                <br></br>

            </div>

        </div>
    )
    }

export default IndiaData;