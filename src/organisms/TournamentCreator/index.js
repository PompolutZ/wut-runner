import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import uuidv4 from 'uuid/v4';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import ParticipantsList from '../../molecules/ParticipantsList';
import Participant from '../../molecules/Participant';
import AddParticipantForm from '../../molecules/AddParticipantForm';
import { Button } from '@material-ui/core';
import { TOURNAMENT_ID } from '../../constants/routes';

class TournamentCreator extends React.Component {
    state = {
        name: '',
        participants: {},
        rounds: 3
    }

    componentDidMount() {
        console.log(this.props)
        this.setState(this.props.meta);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h5">Create New Tournament:</Typography>
                <TextField className={classes.textField} label="Tournament Name" placeholder="Our Cool WU Tournament Name" value={this.state.name} onChange={this.handleChange('name')} />
                
                <div className={classes.roundsContainer}>
                    <Typography variant="body1">Specify how many rounds each player needs to play:</Typography>
                    <FormControl className={classes.select}>
                        <InputLabel htmlFor="rounds">Rounds to play</InputLabel>
                        <Select
                            value={this.state.rounds}
                            onChange={this.handleChange('rounds')}
                            inputProps={{
                                name: 'rounds',
                                id: 'rounds',
                            }}
                        >
                            <MenuItem value={1}>One</MenuItem>
                            <MenuItem value={2}>Two</MenuItem>
                            <MenuItem value={3}>Three</MenuItem>
                            <MenuItem value={4}>Four</MenuItem>
                            <MenuItem value={5}>Five</MenuItem>
                            <MenuItem value={6}>Six</MenuItem>
                            <MenuItem value={7}>Seven</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
                <div className={classes.participants}>
                    <Typography className={classes.participantsLabel}>Add players, by choosing their faction icon and typing their names: </Typography>
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

                <div className={classes.startButtonContainer}>
                    <Button className={classes.startButton} variant="contained" color="primary" onClick={this.handleFinishAndNavigate}>Let's Go!</Button>
                </div>
            </div>
        )
    }

    handleAddNewParticipant = (name, faction) => {
        this.setState(state => ({ participants: {...state.participants, [uuidv4()] : { name: name, faction: faction } }}), this.serialize);
    }

    handleDeleteParticipant = id => {
        const copy = this.state.participants;
        delete copy[id];
        this.setState({ participants: copy }, this.serialize);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value }, this.serialize);
    }

    handleFinishAndNavigate = () => {
        this.setState({ id: uuidv4() }, () => {
            this.serialize();
            this.props.history.push(TOURNAMENT_ID(this.state.id));
        });
    }

    serialize = () => {
        this.props.onModified(this.state);
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap'
    },

    list: {
        margin: '2rem 0 0 0'
    },

    nameInput: {
        margin: '1rem auto'
    },

    textField: {
        margin: '1rem auto',
        width: '100%'
    },

    roundsContainer: {
        margin: '1rem auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },

    select: {
        minWidth: '10rem',
        marginLeft: '1rem',
        flex: '1 1 auto'
    },

    participants: {
        margin: '2rem 0 0 0'
    },

    participantsLabel: {
        margin: '0 0 1rem 0',
        color: theme.palette.primary.dark,
        fontSize: '1rem'
    },

    startButtonContainer: {
        display: 'flex'
    },

    startButton: {
        maxWidth: '10rem',
        padding: '2rem',
        margin: '3rem auto',
        color: 'white',
        fontSize: '1.3rem'
    }
});

export default compose(
    withRouter,
    withStyles(styles)
)(TournamentCreator);