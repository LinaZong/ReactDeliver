import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';



var ZaxGBShop = React.createClass({
    render() {
        return (
            <View style={styles.container}>

       <HeaderView

           text = '我是组件类之间传递的数据'
       >

       </HeaderView>
            </View>
        );
    }
});


var HeaderView = React.createClass({

    getDefaultProps(){

        return{

            text: ''
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <Text> {this.props.text}</Text>
            </View>
        );
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
module.exports = ZaxGBShop ;
