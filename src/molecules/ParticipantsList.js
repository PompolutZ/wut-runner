import React from 'react';
import Participant from './Participant';

function ParticipantsList(props) {
    return (
        <div className={props.className}>
            { 
                props.children
            }
        </div>
    );
}

export default ParticipantsList;