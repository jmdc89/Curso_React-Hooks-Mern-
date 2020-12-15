import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarApp } from '../CalendarApp';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

export const AppRouter = () => {
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
                        component={ CalendarApp }
                    />

                    <Redirect to="/"  />

                </Switch>
            </div>
        </Router>

    )
}
