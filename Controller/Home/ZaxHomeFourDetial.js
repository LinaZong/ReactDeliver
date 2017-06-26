import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';



var FourDetial = React.createClass({

    render() {

        return (
            <View style={styles.container}>


                <TouchableOpacity onPress={() =>{this.popToHome()}}>

                    <Text style={styles.instructions}>
                        点击返回上一页
                    </Text>

                </TouchableOpacity>

                <Text style={{color:'green', marginTop:20,fontSize: 30}}>

                </Text>
            </View>

        );
    },

    popToHome(data){
        DeviceEventEmitter.emit('change','我是反向传值的第一种方式');
        this.props.navigator.pop();




    },

    componentDidMount(){
        this.setState({
            name: this.props.text
        })
    }

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        borderColor:'black',
        borderWidth: 1,
    },
});
module.exports = FourDetial;

