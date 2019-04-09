import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Icon from '../atoms/Icon';

function Participant({ classes, id, name, faction, altered, onDelete }) {
    const handleDeleteClick = () => {
        onDelete(id);
    };

    return (
        <div className={altered ? classes.alteredRoot : classes.root}>
            <Icon faction={faction} />
            <Typography className={classes.name} variant="headline">{name}</Typography>
            <Button color="secondary" variant="contained" onClick={handleDeleteClick}>delete</Button>
        </div>
    );
}

const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center'
    },

    alteredRoot: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.light,
    },

    name: {
        marginLeft: '1rem',
        flex: '1 1 auto',
    }
});

export default withStyles(styles)(Participant);