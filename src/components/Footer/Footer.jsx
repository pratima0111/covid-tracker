import React from 'react';
import styles from './Footer.module.css';


const Footer =()=>{
    return (
        <div className={styles.container}>
            
            {/* <p className={styles.link}>   --{'>'}  </p> */}
            <a className={styles.footerlink} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">Click here to know more about COVID-19 pandemic </a>
            
        </div>

    )
}
export default Footer;