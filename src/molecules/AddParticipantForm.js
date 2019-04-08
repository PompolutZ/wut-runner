import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconPicker from './IconPicker';
import { factions } from '../constants';

function AddParticipantForm(props) {
    const initFaction = () => Object.keys(factions).slice(1)[0];
    const handleTextChange = event => setParticipantName(event.target.value);
    const handleFactionSelection = faction => setSelectedFaction(faction);
    const handleClick = () => {
        props.onAddNewClick(participantName, selectedFaction);
        setParticipantName('');
        setSelectedFaction(Object.keys(factions).slice(1)[0]);
    };

    const [participantName, setParticipantName] = useState('');
    const [selectedFaction, setSelectedFaction] = useState(initFaction); 

    return (
        <div>
            <IconPicker selectedFaction={selectedFaction} onSelectionChanged={handleFactionSelection} />
            <div className={props.classes.nameForm}>
                <TextField className={props.classes.input} onChange={handleTextChange} placeholder="Player Name" value={participantName} />
                <Button color="default" className={props.classes.button} onClick={handleClick}>Add New</Button>
            </div>
        </div>
    )
}

const styles = theme => ({
    nameForm: {
        display: 'flex',
        alignItems: 'center',
    },

    input: {
        flex: '1 1 auto'
    },

    button: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        margin: '0 0 0 1rem' 
    }
});

export default withStyles(styles)(AddParticipantForm);