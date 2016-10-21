import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class CenterMyView extends Component {

    loadCategoryList() {
        // fetch('http://vcustomer.applinzi.com/admin/getCategoryList')
        //     .then((response) => response.text())
        //     .then((responseText) => {
        //         console.log(responseText);
        //     })
        //     .catch((error) => {
        //         console.warn(error);
        //     });
    }

    componentDidMount() {
        this.loadCategoryList();
    }
    
    render() {
        return (
            <View>
                <Text style={styles.text}>我的</Text>
                <Text style={styles.text}>我的</Text>
                <Text style={styles.text}>我的</Text>
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

module.exports = CenterMyView;