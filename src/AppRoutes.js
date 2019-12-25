import React from "react";
import {Switch, Route} from "react-router-dom";
import WeatherLookup from "./container/WeatherLookup";
import ListLookup from "./container/ListLookup";

export default function AppRoutes() {
    return (
        <Switch>
            <Route path={'/'} exact component={WeatherLookup}/>
            <Route path={'/list'} exact component={ListLookup}/>
        </Switch>
    );
}
