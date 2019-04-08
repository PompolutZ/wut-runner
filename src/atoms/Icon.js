import React from 'react';
import { withStyles } from '@material-ui/core/styles';

function Icon({ classes, faction }) {
    return <img className={classes.main} src={`/assets/${faction}-icon.png`} />
}

const styles = theme => ({
    main: {
        width: '3rem',
        margin: '.2rem',
    }
})

export default withStyles(styles)(Icon);