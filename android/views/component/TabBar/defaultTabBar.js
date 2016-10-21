import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, Animated, } from 'react-native';

class DefaultTabBarView extends Component {
    propTypes:{
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabLabel: React.PropTypes.array,
        underlineColor: React.PropTypes.string,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string
    }

    renderTabOption(name, page) {
        var isTabActive = this.props.activeTab === page;
        var activeTextColor = this.props.activeTextColor || "navy";
        var inactiveTextColor = this.props.inactiveTextColor || "black";
        var img_source = require('../../static/imgs/reservations.png');
        switch(name){
            case "订票":
            img_source = require('../../static/imgs/reservations.png');
            break;
            case "服务":
            img_source = require('../../static/imgs/service.png');
            break;
            case "公告":
            img_source = require('../../static/imgs/announcement.png');
            break;
            case "我的":
            img_source = require('../../static/imgs/my.png');
            break;
        }

        return (
            <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
            <View>
            <Image source={img_source} style={styles.image}/>
            <Text style={{color: isTabActive ? activeTextColor : inactiveTextColor,fontWeight: isTabActive ? 'bold' : 'normal'}}>
            {name}
            </Text>
            </View>
            </TouchableOpacity>
            )
    }

    render() {
        var containerWidth = this.props.containerWidth;
        var numberOfTabs = this.props.tabLabel.length;
        var tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 4,
            backgroundColor: this.props.underlineColor || "navy",
            bottom: 0,
        };

        var left = this.props.scrollValue.interpolate({
            inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
        });

        return (
            <View style={[styles.tabs, {backgroundColor : this.props.backgroundColor || null}, this.props.style, ]}>
            {this.props.tabLabel.map((tab, i) => this.renderTabOption(tab, i))}
            <Animated.View style={[tabUnderlineStyle, {left}]}/>
            </View>
            );
    }
}

var styles = StyleSheet.create({
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#ccc',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 2,
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        marginTop: 5,
    },
});

module.exports = DefaultTabBarView;