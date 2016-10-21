/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    Text,
    BackAndroid,
    StyleSheet
} from 'react-native';

import WelcomeView from './android/views/welcome.android';
import CenterView from './android/views/center.android';

class TicketAPP extends Component {

    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(router, navigator) {
        var Component = router.component;
        this._navigator = navigator;
        switch (router.name) {
            case "welcome":
                Component = WelcomeView;
                break;
            case "center":
                Component = CenterView;
                break;
        }
        return <Component navigator={navigator}/>
    }

    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'center'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/> 
        );
    }
}

AppRegistry.registerComponent('TicketAPP', () => TicketAPP);