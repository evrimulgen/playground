import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, WebView } from "react-native";
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import YouTube from 'react-native-youtube';
const deviceWidth = Dimensions.get("window").width;

class VideoTester extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width:200,height:500, backgroundColor: 'lightblue' }}>
                    
                    <Video
                        source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                        style={{width:500,height:500}}
                    />
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
});
export default VideoTester;