import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Modal,
    Image,
    ScrollView,
    ListView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
} from 'react-native';
import CityDataList from '../../../12306/city_list'

class CityListView extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            curr_focus: 0, //0标识出发站，1标识到达站


            start_city: '',
            end_city: '',

            animationType: 'none',
            modalVisible: false,
            transparent: false,
            dataSource: ds.cloneWithRows(CityDataList.list),
        }
    }

    _onStartFocus() {
        this.setState({curr_focus:0});
    }
    _onEndFocus() {
        this.setState({curr_focus:1});
    }

    _renderRow(rowData, sectionID, rowID){
        var F = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var colors = ['#009bad','#613cbd','#2877ee','#01a300','#db562d','#0b55be','#be1e4c','#2d89f0','#761b35','#123135','#194519','#6d2510','#180153','#009bad','#613cbd','#2877ee','#01a300','#db562d','#0b55be','#be1e4c','#2d89f0','#761b35','#123135','#194519','#6d2510','#180153'];
        var letter = rowData[0].charAt(0).toUpperCase();
        var list_letter_style = {
            borderRadius:50,
            backgroundColor:colors[F.indexOf(letter)],
            flex: 0.1,
        }
        return (
            <TouchableOpacity onPress={() => this._onPressRow(rowData, sectionID)}>
                <View style={styles.body}>
                    <View style={styles.list_section}>
                        <View style={list_letter_style}>
                            <Text style={{color:'#FCFCFC',textAlign:'center',fontWeight:'900'}}>{letter}</Text>
                        </View>
                        <View style={{flex: 0.9}}>
                            <Text style={{marginLeft:10}}>{rowData[1]}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressRow(rowData, sectionID) {
        switch(this.state.curr_focus) {
            case 0:
            this.setState({
                start_city: rowData[1],
            });
            break;
            case 1:
            this.setState({
                end_city: rowData[1],
            });
            break;
            default:
            Alert.alert('警告','请选择出发站或目的地！',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
            )
            break;
        }
    }

    _okCityModal() {
        this.props.onPressOK(this.state.start_city, this.state.end_city);
    }

    _cancelCityModal() {
        this.setState({modalVisible: false});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            start_city: nextProps.startCity,
            end_city: nextProps.endCity,

            animationType: nextProps.animationType,
            modalVisible: nextProps.modalVisible,
            transparent: nextProps.transparent,
        });
    }

    render() {
        return (
            <View>
                <Modal animationType={this.state.animationType} transparent={this.state.transparent} visible={this.state.modalVisible} onRequestClose={this._cancelCityModal.bind(this)}>
                    <View style={styles.body}>
                        <View style={styles.top_section}>
                            <View style={{flex: 0.3}}>
                                <TouchableHighlight underlayColor='#99d9f4' onPress={this._cancelCityModal.bind(this)}>
                                    <Text style={styles.navTextLeft}>返回</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={{flex: 0.4}}>
                                <Text style={styles.navTextCenter}>{ this.state.curr_focus == 0 ? '出发站' : '到达站' }</Text>
                            </View>
                            <View style={{flex: 0.3}}>
                                <TouchableHighlight underlayColor='#99d9f4' onPress={this._okCityModal.bind(this)}>
                                    <Text style={styles.navTextRight}>确定</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={styles.opra_section}>
                            <View style={{flex: 0.5}}>
                                <TextInput style={styles.input} autoFocus={this.props.clickCity == 0} onFocus={this._onStartFocus.bind(this)} value={this.state.start_city}/>
                            </View>
                            <View style={{flex: 0.5}}>
                                <TextInput style={styles.input} autoFocus={this.props.clickCity == 1} onFocus={this._onEndFocus.bind(this)} value={this.state.end_city}/>
                            </View>
                        </View>
                        <View style={styles.opra_section}>
                            <ListView
                            style={styles.scrollview}
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow.bind(this)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        height: 50,
    },
    top_section: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        marginTop: 2,
        borderBottomWidth: 0.2,
        borderBottomColor: '#ACACAC',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    opra_section: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        marginTop: 2,
        borderBottomWidth: 0.2,
        borderBottomColor: '#ACACAC',
        paddingLeft: 10,
        paddingRight: 10,
    },
    list_section: {
        flexDirection: 'row',
        backgroundColor: '#F6F6F6',
        padding: 15,
        marginTop: 2,
        borderBottomWidth: 0.2,
        borderBottomColor: '#ACACAC'
    },
    input: {
        height: 50,
        fontSize: 14,
        textAlign: 'center',
    },
    navTextLeft: {
        fontSize: 14,
        color: '#0000FF',
        alignSelf: 'flex-start',
    },
    navTextCenter: {
        fontSize: 14,
        alignSelf: 'center',
    },
    navTextRight: {
        fontSize: 14,
        color: '#0000FF',
        alignSelf: 'flex-end',
    },
    scrollview: {
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#F6F6F6',
        margin:1,
    },
});

module.exports = CityListView;