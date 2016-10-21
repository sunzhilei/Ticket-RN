import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from './component/TabBar/index';

import ReservationsView from './reservations/index.android';
import ServiceView from './service/index.android';
import AnnouncementView from './announcement/index.android';
import CenterMyView from './my/index.android'

class CenterView extends Component {
    render() {
        return ( <View style={styles.container}>
            <ScrollableTabView initialPage={0} renderTabBar={() => <DefaultTabBar/>}>
                <ScrollView tabLabel="订票" style={styles.tabView}>
                    <ReservationsView/>
                </ScrollView> 
                <ScrollView tabLabel="服务" style={styles.tabView}>
                    <ServiceView/>
                </ScrollView> 
                <ScrollView tabLabel="公告" style={styles.tabView}>
                    <AnnouncementView/>
                </ScrollView> 
                <ScrollView tabLabel="我的" style={styles.tabView}>
                    <CenterMyView/>
                </ScrollView> 
            </ScrollableTabView> 
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabView: {
        flex: 1,
        paddingTop: 5,
        backgroundColor: 'rgba(0,0,0,0.01)',
    }
});

module.exports = CenterView;
