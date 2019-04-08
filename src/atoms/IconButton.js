import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { withStyles } from '@material-ui/core/styles';
import Icon from './Icon';

function IconButton({ faction, classes, selected, onSelected }) {
    const handleClick = () => onSelected(faction);

    return (
        <ButtonBase className={classes.button} onClick={handleClick} style={{ opacity: selected ? 1 : '.2'}}>
            <Icon faction={faction} />            
        </ButtonBase>
    )
}

const styles = theme => ({
    icon: { 
        width: '3rem',
        margin: '.2rem'
    },

    button: {
        borderRadius: '2rem'
    }
});

export default withStyles(styles)(IconButton);