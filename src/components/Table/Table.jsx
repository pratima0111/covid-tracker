
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';

// import TableRow from '@material-ui/core/TableRow';
// import TableColoumn from '@material-ui/core/TableColoumn';
import {NativeSelect} from '@material-ui/core';

import { fetchStateData } from '../../api';
import styles from './Table.module.css';
import './Table.module.css';

const MyTable = () => {
    // React Hooks
    const [stateData, setStateData] = useState([])

    useEffect(() => {
        const FetchAPI = async () => {

            setStateData(await fetchStateData())

        }
        FetchAPI()

    }, [])

    /* in built styling of material UI*/
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    // const StyledTableRow = withStyles((theme) => ({
    //     root: {
    //         '&:nth-of-type(odd)': {
    //             backgroundColor: theme.palette.action.hover,
    //         },
    //     },
    // }))(TableRow);
    const useStyles = makeStyles({
        table: {
            minWidth: 100,
        },
    });
    /*end of inbuilt styling of material UI*/




    
    const dataa = stateData.data
    const classes = useStyles();
    const [currentValue,setValue]= useState('');
    console.log(currentValue);
    const handleStateChange=(event)=>{
        setValue(event);
        console.log(currentValue);
    }
    
    

    return (

        <div className={styles.container}>
            <div component={Paper}>
                <div className={classes.table}  aria-label="sticky table">
                    {/* <TableHead>
                        <TableColoumn>
                            <StyledTableCell width='100'>States</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Confirmed</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Active</StyledTableCell>

                            <StyledTableCell align="left" width='50'>Rcvrd</StyledTableCell>
                            <StyledTableCell align="left" width='50'>Deaths</StyledTableCell>
                        </TableColoumn>
                    </TableHead> */}
                    <div  >
                        
                        
                        {/* <select id ="dropdown" value={currentValue}  defaultValue='Maharashtra' >
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Bihar">Bihar</option>
                
                        </select> */}
                        {/* <p className= {styles.stateWise}   >State-Wise Data</p> */}
                        <div   className={styles.dropDown} >
                            
                        <NativeSelect  defaultValue="" onChange={(e) => handleStateChange(e.target.value)}>
                            <option value="">SELECT ANY STATE</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Ladakh">Ladakh</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttaranchal">Uttaranchal</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                            
                            
                        </NativeSelect>
                        </div>



                       <br></br>
                       <div  className={styles.tableContainer}>
                           

                            {dataa && dataa.map((row) => (
                                <div  key={row.provinceState}>
                                    
                                    {row.provinceState===currentValue
                                    ?<>
                            
                                        <StyledTableCell  className="StateHeading" component="th" scope="row">
                                        <span className={styles.tableHead}  >STATE :  {row.provinceState} </span>
                                        </StyledTableCell><br></br>
                                        <StyledTableCell align="center"><div className={styles.tableHead}>CONFIRMED  :  {row.confirmed}</div></StyledTableCell><br></br>
                                        <StyledTableCell align="center"><span className={styles.tableHead}>ACTIVE  :  {row.active} </span></StyledTableCell><br></br>
                                        <StyledTableCell align="center"><span className={styles.tableHead}>RECOVERED  :  {row.recovered}</span></StyledTableCell><br></br>
                                        <StyledTableCell align="center"><span className={styles.tableHead}>DEATHS  :  {row.deaths}</span></StyledTableCell><br></br>
                                   
                                    </>
                                    :<></>
                                    }

                                </div>
                            ))}
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MyTable;

