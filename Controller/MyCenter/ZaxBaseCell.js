import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

var  ScreenWith = require('Dimensions').get('window').width;


var  BaseCell = React.createClass({

    getInitialState(){
        return{

            text: '我是一个小小的cell'
        }
    },

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity activeOpacity={0.5}
                onPress={() =>{this.BtnClick(this.state.text)}}
                >
               <View  style={styles.welcome}>
                   <Text>{this.state.text}
                   </Text>
               </View>

                </TouchableOpacity>
            </View>
        );
    },

    // cell点击的方法
    BtnClick(text){

        //判断是否传入点击函数
        if (this.props.callBackFunc == null) return;
        //如果有执行回调函数
        this.props.callBackFunc(text);
    },

    getDefaultProps(){

        return{
            callBackFunc : null,  //回调函数
        }


    }
});



const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
        flexWrap:'wrap',



},
    welcome: {
        width:ScreenWith /2,
        height:80,
        backgroundColor: 'blue',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = BaseCell;
