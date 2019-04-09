import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ParticipantsList from '../../molecules/ParticipantsList';
import Participant from '../../molecules/Participant';
import AddParticipantForm from '../../molecules/AddParticipantForm';
import uuidv4 from 'uuid/v4';

class TournamentCreator extends React.Component {
    state = {
        participants: {},
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
                        Object.entries(this.state.participants).map(([id, data], i) => {
                            return i % 2 !== 0 
                            ? <Participant key={id} id={id} {...data} altered onDelete={this.handleDeleteParticipant} /> 
                            : <Participant key={id} id={id} {...data} onDelete={this.handleDeleteParticipant} />
                        })
                    }
                </ParticipantsList>
            </div>
        )
    }

    handleDeleteParticipant = id => {
        const copy = this.state.participants;
        console.log(copy)
        delete copy[id];
        console.log(copy)
        this.setState({ participants: copy }, () => this.props.onModified(this.state));
    }

    handleAddNewParticipant = (name, faction) => {
        this.setState(state => ({ participants: {...state.participants, [uuidv4()] : { name: name, faction: faction } }}), () => {
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