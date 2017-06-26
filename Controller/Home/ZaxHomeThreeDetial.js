import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    DeviceEventEmitter,
} from 'react-native';


var  FourDetialClass = require('./ZaxHomeFourDetial');
var ThreeDetial = React.createClass({

    getInitialState(){

        return{

            name: '',
        }
    },
    render() {

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() =>{this.popToHome()}}>

                    <Text style={styles.instructions}>
                        点击返回上一页
                    </Text>

                </TouchableOpacity>

                <Text style={{color:'green', marginTop:20,fontSize: 30}}>
                    {this.props.text}
                </Text>


                <TouchableOpacity onPress={() =>{this.popToNextView()}}>
                    <Text style={styles.instructions}>
                        点击跳转到下一页
                    </Text>
                </TouchableOpacity>

                <Text style={{color:'black',fontSize:20}}>
                    {this.state.name}
                </Text>
            </View>

        );
    },

    popToHome(data){

        this.props.navigator.pop();
        this.props.callback('我是反向传值第二种方式');

    },
    popToNextView(){

        this.props.navigator.push({

            component:FourDetialClass, //跳转页面的路由

            title:'第四层', //唯一表示的名称

            passProps :{  //要传递的内容

            }
        })
    },

    componentDidMount(){

        DeviceEventEmitter.addListener('change',(text)=>{
            this.setState({
                name: text
            })
        })

    },

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
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
module.exports = ThreeDetial;
