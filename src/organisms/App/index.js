import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import TournamentCreator from '../TournamentCreator';
import Tournament from '../Tournament';
import { ROUTES } from '../../constants';

function Home() {
    return <div>Home Page</div>
}

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
            <Router>
                <div>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route path={ROUTES.CREATOR} render={() => <TournamentCreator meta={tournamentMeta} onModified={setTournamentMeta} />} />
                    <Route path={ROUTES.TOURNAMENT} component={Tournament} />
                </div>
            </Router>
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