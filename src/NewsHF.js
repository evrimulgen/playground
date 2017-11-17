import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, WebView, ScrollView } from "react-native";
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class NewsHF extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: [],
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = 'https://www.hatyaifocus.com/rest/api.php?action=news&cat=1&start=1&per_page=1';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.state.data = responseJson;
                this.setState({ isLoading: false })
            })
            .catch((error) => {
                console.error(error);
                this.setState({ isLoading: false });
            });
    }

    renderNode(node, index, siblings, parent, defaultRenderer) {
        if (node.name == 'img') {
            const a = node.attribs;
            console.log(a.src)
            return (
                <Image
                    style={{ height: 200, width: deviceWidth, resizeMode: 'contain' }}
                    source={{
                        uri: a.src
                    }} />
            );
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View />
            )
        }
        return (
            <ScrollView style={styles.container}>
                <HTMLView
                    value={this.state.data[0].DESCRIPTION}
                    renderNode={this.renderNode}
                    stylesheet={styless}
                />
            </ScrollView>
        )
    }
}

const styless = StyleSheet.create({
    a: {
        fontWeight: '300',
        color: '#FF3366', // make links coloured pink
    },
    p: {
        color: '#000',
        //marginVertical: -30
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
export default NewsHF;