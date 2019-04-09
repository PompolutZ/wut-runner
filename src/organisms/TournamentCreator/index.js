import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ParticipantsList from '../../molecules/ParticipantsList';
import Participant from '../../molecules/Participant';
import AddParticipantForm from '../../molecules/AddParticipantForm';


class TournamentCreator extends React.Component {
    state = {
        participants: [],
    }

    componentDidMount() {
        this.setState(this.props.meta);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AddParticipantForm onAddNewClick={this.handleAddNewParticipant} />
                <ParticipantsList className={classes.list}>
                    {
                        this.state.participants.map((p, i) => {
                            return i % 2 !== 0 ? <Participant key={i} {...p} altered /> : <Participant key={i} {...p} />
                        })
                    }
                </ParticipantsList>
            </div>
        )
    }

    handleAddNewParticipant = (name, faction) => {
        this.setState(state => ({ participants: [...state.participants, { name: name, faction: faction }]}), () => {
            this.props.onModified(this.state);
        });
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap'
    },

    list: {
        margin: '2rem 0 0 0'
    }
});

export default withStyles(styles)(TournamentCreator);