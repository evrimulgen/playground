import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';
import Dropdown from './dropdown'
const deviceWidth = Dimensions.get("window").width;

class SecondPage extends Component {

    constructor() {
        super();
        this.state = {
            show: true,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Dropdown show={this.state.show} height={200} duration={2000}>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 1</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 2 </Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 3</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 4</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 5</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 6</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 7</Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>line 8</Text>
                </Dropdown>
                <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                    <View>
                        <Text>WELCOME TO SECOND PAGE</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.ThirdPage()}>
                        <Text style={styles.text}>
                            go to third page
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.FourthPage()}>
                        <Text style={styles.text}>
                            go to fourth page
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5CFCF',
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 5,
        margin: 2,
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center'
    }
});
export default SecondPage;