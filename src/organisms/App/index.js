import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ParticipantsList from '../../molecules/ParticipantsList';
import Participant from '../../molecules/Participant';
import AddParticipantForm from '../../molecules/AddParticipantForm';

class App extends React.Component {
    state = {
        participants: []
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AddParticipantForm onAddNewClick={this.handleAddNewParticipant} />
                <ParticipantsList>
                    {
                        this.state.participants.map((p, i) => 
                            <Participant key={i} {...p} />)
                    }
                </ParticipantsList>
            </div>
        )
    }

    handleAddNewParticipant = (name, faction) => {
        this.setState(state => ({ participants: [...state.participants, { name: name, faction: faction }]}));
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap'
    },

    body: {
        margin: '50% auto',
        fontSize: '3rem'
    }
});

export default withStyles(styles)(App);