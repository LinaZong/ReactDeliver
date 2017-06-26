import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


var  HomeDetialClass = require('./HomeDetial');
var  ZaxHome = React.createClass({
    render() {
        return (
            <View style={styles.container}>


                {/*//跳转到下一个页面*/}
                <TouchableOpacity onPress={()=> {this.pushToNextView()}}>
                <View>
                    <Text style={styles.welcome}>跳转到下一个页面</Text>
                </View>

              </TouchableOpacity>

            </View>
        );
    },
    pushToNextView(){
        this.props.navigator.push({

              component:HomeDetialClass, //跳转页面的路由

              title:'详情页面', //唯一表示的名称

            passProps :{  //要传递的内容

                  'text' : '我是正向传值'
            }





        });
    },
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

module.exports = ZaxHome;
