import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Actions } from 'react-native-router-flux';
const deviceWidth = Dimensions.get("window").width;

class FourthPage extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
                    <View>
                        <Text>WELCOME TO FOURTH PAGE</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => Actions.Main({type: 'replace'})}>
                    <Text style={styles.text}>
                        go to root
                    </Text>
                </TouchableOpacity>
            </View>
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
export default FourthPage;