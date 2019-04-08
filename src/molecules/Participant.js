import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Icon from '../atoms/Icon';

function Participant({ classes, name, faction }) {
    
    return (
        <div className={classes.root}>
            <Icon faction={faction} />
            <Typography className={classes.name} variant="headline">{name}</Typography>
        </div>
    );
}

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },

    name: {
        marginLeft: '1rem',
        flex: '1 1 auto',
    }
});

export default withStyles(styles)(Participant);