import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { Navbar } from "../components/ui/NavBar";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <Navbar />

                <Switch>
                    <Route exact patch="/login" component={ LoginScreen } />

                    <Route exact patch="/" component={ MarvelScreen } />
                </Switch>
            </div>
        </Router>
    )
}
