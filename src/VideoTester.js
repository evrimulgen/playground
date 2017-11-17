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
                <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
                    {/*<VideoPlayer source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4", mainVer: 1, patchVer: 0 }} // Looks for .mp4 file (background.mp4) in the given expansion version.
                        rate={1.0}                   // 0 is paused, 1 is normal.
                        volume={1.0}                 // 0 is muted, 1 is normal.
                        muted={false}                // Mutes the audio entirely.
                        paused={false}               // Pauses playback entirely.
                        resizeMode="cover"           // Fill the whole screen at aspect ratio.
                        repeat={true}                // Repeat forever.
                        onLoadStart={this.loadStart} // Callback when video starts to load
                        onLoad={this.setDuration}    // Callback when video loads
                        onProgress={this.setTime}    // Callback every ~250ms with currentTime
                        onEnd={this.onEnd}           // Callback when playback finishes
                        onError={this.videoError}    // Callback when video cannot be loaded
                        style={styles.backgroundVideo} />
                    <YouTube
                        videoId="KVZ-P-ZI6W4"   // The YouTube video ID
                        play={true}             // control playback of video with true/false
                        fullscreen={true}       // control whether the video should play in fullscreen or inline
                        loop={true}             // control whether the video should loop when ended

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}

                        style={{ alignSelf: 'stretch', height: 300 }}
                    />*/}
                    <WebView
                        source={{ uri: 'https://www.youtube.com/embed/aLiSRfFxVVk' }}
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
    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 5,
        margin: 2,
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
export default VideoTester;