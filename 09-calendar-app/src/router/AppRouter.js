import React, { useEffect } from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { useDispatch } from 'react-redux';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch( startChecking )

    }, [])

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
