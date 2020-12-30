import React, { useEffect } from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector( state => state.auth);

    useEffect(() => {

        dispatch( startChecking )

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (

        <Router>
            <div>
                <Switch>
                    <Route
                        exact 
                        path="/login"
                        component={ LoginScreen }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ CalendarScreen }
                    />

                    <Redirect to="/"  />

                </Switch>
            </div>
        </Router>

    )
}
