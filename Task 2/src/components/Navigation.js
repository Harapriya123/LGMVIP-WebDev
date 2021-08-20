import React from 'react';
import Button from '@material-ui/core/Button';
import '../containers/styles.css';

const Navigation = ({ onButtonSubmit }) => {

    return (
       

        <nav className = 'navbar'>

        <h3 className = "logo"> Crystal </h3> 
         <div className = 'nav-links'>

         <Button variant = "contained"
        onClick = { onButtonSubmit }
        color = "secondary">
        Get Users
        </Button>  
        </div> 
         </nav>
    );
}

//{onRouteChange, isSignedIn}
export default Navigation;