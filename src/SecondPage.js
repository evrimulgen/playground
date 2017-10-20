import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;

class SecondPage extends Component {

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
                        <Text>WELCOME TO SECOND PAGE</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5CFCF',
    },
    pic: {
        width: deviceWidth / 1.25,
        height: 0,
    },
    picS: {
        width: 20,
        height: 20.
    }
});
export default SecondPage;