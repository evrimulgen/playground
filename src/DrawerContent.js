import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ViewPropTypes, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  }

  static contextTypes = {
    drawer: PropTypes.object,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Drawer Content</Text>
        <Button onPress={() => Actions.pop()} title="Close"/>
        <Button onPress={() => Actions.Main()} title="Main"/>
        <Button onPress={() => Actions.SecondPage()} title="secord"/>
        <Button onPress={() => Actions.ThirdPage()} title="third"/>
        <Button onPress={() => Actions.FourthPage()} title="fourth"/>
      </View >
    );
  }
}

export default DrawerContent;
