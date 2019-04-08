import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

function useCounter(initialState, step) {
    // setting this to be a function runs this evaluation only once
    const init = () => Number(localStorage.getItem('count') || initialState || 0);
    const incrementBy = Number(step || 1);
    const [count, setCount] = useState(init);
    const increment = () => setCount(count + incrementBy);

    useEffect(
        () => {
            localStorage.setItem('count', count);
        }, 
        [count]
    );

    return { count, increment};
}

function Counter(props) {
    const { count, increment } = useCounter(props.initial, props.step);

    return (
        <Fab onClick={increment}>
            <Typography style={{ fontSize: '2rem'}}>
                { count }
            </Typography>
        </Fab>
    );
}

export default Counter;