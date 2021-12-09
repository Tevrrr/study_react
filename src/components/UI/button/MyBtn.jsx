import React from 'react';
import classes from './styles.module.css'

const Mybtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    );
}

export default Mybtn;
