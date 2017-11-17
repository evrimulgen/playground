import React, { Component } from 'react';
import { Router, Scene, Actions, Navigator, Drawer, Stack } from 'react-native-router-flux';
import { View, TouchableOpacity, Image } from "react-native";
import MainScreen from './Main';
import SecondPageScreen from './SecondPage';
import ThirdPageScreen from './ThirdPage';
import FourthPageScreen from './FourthPage';
import VideoTesterScreen from './VideoTester';
import NewsHF from './NewsHF';

import Icon from 'react-native-vector-icons/FontAwesome';

import DrawerContent from './DrawerContent';

const Route = () => {
    return (
        <Router>
            <Drawer
                key='drawer'
                contentComponent={DrawerContent}
                drawerImage={require('./images/menu_burger.png')}
            >
                <Scene
                    key="Main"
                    component={MainScreen}
                    title="Main"
                    initial
                />
                <Stack key="root">
                    <Scene
                        key="SecondPage"
                        component={SecondPageScreen}
                        title="SecondPage"
                        titleStyle={{ alignSelf: 'center' }}
                        navigationBarStyle={{ backgroundColor: '#a6ff00' }}
                        rightTitle="Home"
                        onRight={() => Actions.Main(type = 'reset')}
                        rightButtonTextStyle={{ color: '#000000', textAlign: 'center', padding: 1 }}
                        headerTintColor="red"
                    >
                    </Scene>
                    <Scene
                        key="ThirdPage"
                        component={ThirdPageScreen}
                        title="ThirdPage"
                        navigationBarStyle={{ backgroundColor: '#a6ff00' }}
                        rightTitle="Home"
                        onRight={() => Actions.Main()}
                        rightButtonTextStyle={{ color: '#000000' }}
                        headerTintColor="#000"
                    />
                    <Scene
                        key="FourthPage"
                        component={FourthPageScreen}
                        title="FourthPage"
                        navigationBarStyle={{ backgroundColor: '#a6ff00' }}
                        rightTitle="Home"
                        onRight={() => Actions.Main()}
                        rightButtonTextStyle={{ color: '#000000' }}
                        headerTintColor="#000"
                    />
                    <Scene
                        key="VideoTester"
                        component={VideoTesterScreen}
                        title="VideoTester"
                        navigationBarStyle={{ backgroundColor: '#a6ff00' }}
                        rightTitle="Home"
                        onRight={() => Actions.Main()}
                        rightButtonTextStyle={{ color: '#000000', textAlign: 'center', padding: 1 }}
                        headerTintColor="#000"
                    />
                    <Scene
                        key="NewsHF"
                        component={NewsHF}
                        title="News HatyaiFocus"
                        navigationBarStyle={{ backgroundColor: '#ffffff' }}
                        titleStyle={{color : "red"}}
                        rightTitle="Home"
                        onRight={() => Actions.Main()}
                        rightButtonTextStyle={{ color: '#000000', textAlign: 'center', padding: 1 }}
                        headerTintColor="#000"
                    />
                </Stack>
            </Drawer>
        </Router>
    );
}

export default Route;