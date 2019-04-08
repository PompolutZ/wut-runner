import React, { useState } from 'react';

import { factions } from '../constants';
import IconButton from '../atoms/IconButton';

function IconPicker({ selectedFaction, onSelectionChanged}) {
    
    //const [selectedFaction, setSelectedFaction] = useState(props.faction);
    const handleSelectionChanged = faction => {
        //setSelectedFaction(faction);
        onSelectionChanged(faction);
    };

    return (
        <div>
            { Object.keys(factions).slice(1).map((faction, i) => (
                <IconButton key={i} faction={faction} selected={faction === selectedFaction} onSelected={handleSelectionChanged} />
            ))}
        </div>
    );
}

export default IconPicker;