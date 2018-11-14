import React from 'react';
import { render } from "react-dom";
import { Root } from './components/root.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./css/main.scss";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact pat={"/"} component={Root} >
                </Route>
            </Router>
        );
    }
}
render(< App />, window.document.getElementById("app"));