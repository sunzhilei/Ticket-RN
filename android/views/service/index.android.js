import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class ServiceView extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>商品</Text>
                <Text style={styles.text}>商品</Text>
                <Text style={styles.text}>商品</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 25,
    },
});

module.exports = ServiceView;