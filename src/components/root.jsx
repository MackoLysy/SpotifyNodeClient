import React from 'react';

export class Root extends React.Component {
    constructor(props){
        super(props);
        fetch("/api/hello");

    }
    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar" className="sidebar">
                    <div className="sidebar-header">
                        <h3>Super Player</h3>
                        <span>SP</span>
                    </div>
                    <ul className="list-unstyled components">
                        <li><a href="/login">Daily mix</a></li>
                        <li>Test 1</li>
                        <li>Test 2</li>
                        <li>Test 3 </li>
                    </ul>
                </nav>
                <div id="content">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
