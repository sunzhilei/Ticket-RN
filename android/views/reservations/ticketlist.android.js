import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Image,
    ListView,
    Text,
    Alert,
    TouchableHighlight,
    BackAndroid,
} from 'react-native';

class TicketListView extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            modalVisible: false,
            dataSource: ds.cloneWithRows([])
        }

        this.handleBack = this._handleBack.bind(this) // 返回一个绑定好this的方法并存储于当前实例中
    }

    componentDidMount () {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
    }

    componentWillUnmount () {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
    }

    _handleBack () {
        console.log(99999999999999999999999999999999);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.modalVisible != this.state.modalVisible){
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                modalVisible: nextProps.modalVisible,
                dataSource: ds.cloneWithRows(nextProps.dataList)
            });
        }
    }

    _cancelCityModal() {
        this.setState({modalVisible: false});
    }

    _onSearchTicket() {

    }

    _renderRow(rowData, sectionID, rowID){
// queryLeftNewDTO:Object
// arrive_time:"00:21"
// canWebBuy:"Y"
// control_day:29
// control_train_day:"20301231"
// controlled_train_flag:"0"
// controlled_train_message:"正常车次，不受控"
// day_difference:"1"
// end_station_name:"秦皇岛"
// end_station_telecode:"QTP"
// from_station_name:"邯郸"
// from_station_no:"01"
// from_station_telecode:"HDP"
// gg_num:"--"
// gr_num:"--"
// is_support_card:"0"
// lishi:"06:28"
// lishiValue:"388"
// location_code:"P2"
// qt_num:"--"
// rw_num:"--"
// rz_num:"--"
// sale_time:"0800"
// seat_feature:"W31333"
// seat_types:"113"
// start_station_name:"邯郸"
// start_station_telecode:"HDP"
// start_time:"17:53"
// start_train_date:"20160809"
// station_train_code:"K7726"
// swz_num:"--"
// to_station_name:"北京西"
// to_station_no:"10"
// to_station_telecode:"BXP"
// train_class_name:""
// train_no:"26000K772611"
// train_seat_feature:"3"
// tz_num:"--"
// wz_num:"有"
// yb_num:"--"
// yp_ex:"101030"
// yp_info:"100000046210000035583000000022"
// yw_num:"有"
// yz_num:"有"
// ze_num:"--"
// zy_num:"--"
        return (
            <View style={styles.body}>
                <View style={styles.section}>
                    <View style={styles.column}>
                        <Text style={styles.bigText}>{rowData.queryLeftNewDTO.from_station_name}</Text>
                        <Text style={styles.smallText}>{rowData.queryLeftNewDTO.start_time}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.bigText}>{rowData.queryLeftNewDTO.station_train_code}</Text>
                        <Text style={styles.smallText}>{rowData.queryLeftNewDTO.lishi}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.bigText}>{rowData.queryLeftNewDTO.to_station_name}</Text>
                        <Text style={styles.smallText}>{rowData.queryLeftNewDTO.arrive_time}</Text>
                    </View>
                    <View style={styles.column}>
                        <TouchableHighlight value={rowData.secretStr} style={styles.button} underlayColor='#99d9f4' onPress={this._onSearchTicket.bind(this)}>
                            <Text style={styles.buttonText}>{rowData.buttonTextInfo}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
                <Modal
                animationType={'none'}
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={this._cancelCityModal.bind(this)}>
                    <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    />
                </Modal>
            )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 10,
        padding: 10,
    },
    section: {
        flexDirection: 'row',
        height: 60,
    },

    column: {
        flex: 2.5,
        borderBottomWidth: 0.2,
        borderBottomColor: '#0000FF'
    },
    bigText: {
        fontSize: 18,
        color: '#000000',
        alignSelf: 'center',
    },
    smallText: {
        fontSize: 11,
        color: '#333333',
        marginTop: 5,
        alignSelf: 'center',
    },

    button: {
        flex: 1,
        height: 25,
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'center',
    },
});

module.exports = TicketListView;