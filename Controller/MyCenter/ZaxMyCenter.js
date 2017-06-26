import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


var  BaseCell = require('./ZaxBaseCell');
var  ShopDetail = require('./ZaxShopDetial');
var  ZaxMyCenter = React.createClass({
    render() {


        return (
            <View style={styles.container}>



                <BaseCell
                    callBackFunc = {(data)=>{this.popToNextShopView(data)}}
                />

            </View>
        );
    },

    popToNextShopView(text){
        this.props.navigator.push({
            component: ShopDetail,
            titile:'详情页面',
            passProps :{
                'data': text
            }

        })
    }
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    },
});

module.exports = ZaxMyCenter;