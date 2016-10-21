import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class WelcomeView extends Component {
  componentDidMount() {
    this.timer = setTimeout(
      () => {
        this.props.navigator.push({name: 'center'});
      },
      1000
    );
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./static/imgs/welcome_bg.png')}>
          <Text style={styles.welcome}>
            欢迎使用畅行火车票
          </Text>
          <Text style={styles.instructions}>
            畅快订票  出行无忧
          </Text>
        </Image>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

module.exports = WelcomeView;