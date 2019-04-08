import React from 'react';
import Participant from './Participant';

function ParticipantsList(props) {
    return (
        <div>
            { 
                props.children
            }
        </div>
    );
}

export default ParticipantsList;