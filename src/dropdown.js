import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

class dropdown extends Component {

    constructor() {
        super();
        this.state = {
            show: true,
            animateHeight: 0,
            height: 0,
            duration: 50,
            rotate: 0,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState)
        if (this.state.show && !nextState.show) {
            this.hide()
        }
        else if (!this.state.show && nextState.show) {
            this.show()
        }
        if (this.state.duration != nextState.duration) {
            this.setState({ duration: nextState.duration })
        }
        if (this.state.height != nextState.height) {
            this.setState({ height: nextState.height })
        }
    }

    componentDidMount() {
        let { height, duration } = this.props
        if (height) {
            this.setState({ animateHeight: new Animated.Value(height), rotate: new Animated.Value(0), height: height })
        }
        else {
            this.setState({ animateHeight: new Animated.Value(200), rotate: new Animated.Value(0), height: 200 })
        }
        if (duration) {
            this.setState({ duration: duration })
        }
    }

    show() {
        Animated.parallel([
            Animated.timing(
                this.state.animateHeight,
                {
                    toValue: this.state.height,
                    duration: this.state.duration,
                }
            ),
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 0,
                    easing: Easing.linear,
                    duration: this.state.duration,
                }
            ),
        ]).start();
        this.setState({ show: true })
    }

    hide() {
        Animated.parallel([
            Animated.timing(
                this.state.animateHeight,
                {
                    toValue: 0,
                    duration: this.state.duration,
                }
            ),
            Animated.timing(
                this.state.rotate,
                {
                    toValue: 90,
                    easing: Easing.linear,
                    duration: this.state.duration,
                }
            ),
        ]).start();
        this.setState({ show: false })
    }

    render() {
        let { show } = this.props
        let { animateHeight, rotate } = this.state
        return (
            <View>
                <TouchableOpacity style={{ height: 30, backgroundColor: 'navy', justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => this.setState({ show: !this.state.show })}>
                    <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                        {this.state.show ?
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'pink', textAlign: 'center' }}>
                                        show
                                    </Text>
                                </View>
                            </View>
                            :
                            <View style={{ justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'pink', textAlign: 'center' }}>
                                        hide
                                    </Text>
                                </View>
                            </View>
                        }
                    </View>
                    {console.log(rotate)}
                    <Animated.Text style={{ color: 'yellow' }}>
                        {rotate._value}
                    </Animated.Text>
                    <Animated.Text style={{ transform: [{ rotate: rotate + 'deg' }], marginRight: 10, justifyContent: 'center', alignSelf: 'center' }}>
                        <Icon style={{ color: 'pink', fontSize: 16 }} name={'ios-arrow-forward'} />
                    </Animated.Text>
                </TouchableOpacity>
                <Animated.View style={{ height: animateHeight, backgroundColor: 'gray' }}>
                    {this.props.children}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

});

export default dropdown;