import React from 'react';
import { withStyles } from '@material-ui/core/styles';

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.body}> Warhammer Underworlds Tournament Runner</div>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
        display: 'flex'
    },

    body: {
        margin: '50% auto',
        fontSize: '3rem'
    }
});

export default withStyles(styles)(App);