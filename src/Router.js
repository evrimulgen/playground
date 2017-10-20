import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MainScreen from './Main';
import SecondPageScreen from './SecondPage';

const Route = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="Main"
                    component={MainScreen}
                    title="Main"
                    initial
                />
                <Scene
                    key="SecondPage"
                    component={SecondPageScreen}
                    title="SecondPage"
                />
            </Scene>
        </Router>
    );
}

export default Route;