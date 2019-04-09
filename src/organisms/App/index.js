import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TournamentCreator from '../TournamentCreator';

function App({ classes }) {
    const initMeta = () => {
        const meta = JSON.parse(localStorage.getItem('wut_meta'));
        return meta || {};
    }
    const [tournamentMeta, setTournamentMeta] = useState(initMeta);

    useEffect(() => {
        localStorage.setItem('wut_meta', JSON.stringify(tournamentMeta, null, 4));
    }, [tournamentMeta]);

    return (
        <div className={classes.root}>
            <TournamentCreator meta={tournamentMeta} onModified={setTournamentMeta} />
        </div>
    );
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap'
    },
});

export default withStyles(styles)(App);