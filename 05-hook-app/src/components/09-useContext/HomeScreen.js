import React, { useContext } from 'react';
import { UserContext, userContext } from './UserContext';

export const HomeScreen = () => {

    const userContext = useContext(UserContext);

    console.log(userContext);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            
        </div>
    )
}
