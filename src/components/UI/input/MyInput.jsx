import React from 'react';
import classes from './MyInput.module.css'
const Myinput = (props) => {
    return (
        <input className={classes.MyInput} {...props}/>
            
        
    );
}

export default Myinput;
