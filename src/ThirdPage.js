import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import ActionBar from "react-native-action-bar";
const deviceWidth = Dimensions.get("window").width;

class ThirdPage extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <ActionBar
                        containerStyle={styles.bar}
                        title={'React-native-action-bar Example'}
                        rightText={'Hello'}
                        leftIconName={'menu'}
                        leftBadge={''}
                        onLeftPress={() => console.log('Left!')}
                        onTitlePress={() => console.log('Title!')}
                        rightIcons={[
                            {
                                name: 'star',
                                badge: '1',
                                onPress: () => console.log('Right Star !'),
                            },
                            {
                                name: 'phone',
                                badge: '1',
                                onPress: () => console.log('Right Phone !'),
                                isBadgeLeft: true,
                            },
                            {
                                name: 'plus',
                                onPress: () => console.log('Right Plus !'),
                            },
                            {
                                name: 'flag',
                                badge: '1',
                                onPress: () => console.log('Right Flag !'),
                            },
                        ]}
                    />
                    <Text>WELCOME TO THIRD PAGE</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#324323',
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
export default ThirdPage;