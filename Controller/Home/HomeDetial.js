import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


var  ThreeDetialClass = require('./ZaxHomeThreeDetial');
var HomeDetial = React.createClass({

    getInitialState(){

        return{

            text: ''
        }
    },
    render() {

        return (
            <View style={styles.container}>

                <Text style={{color:'green', marginTop:20,fontSize: 30}}>
                    {this.props.text}
                </Text>
                <TouchableOpacity onPress={() =>{this.popToHome()}}>

                <Text style={styles.instructions}>
                    点击返回上一页
                </Text>
                </TouchableOpacity>




                <TouchableOpacity onPress={() =>{this.popToNextView()}}>
                    <Text style={styles.instructions}>
                        点击跳转到下一页
                    </Text>
                </TouchableOpacity>

                <Text style={{color:'black',fontSize:20}}>
                    {this.state.text}
                </Text>
            </View>

        );
    },

    popToHome(data){

        this.props.navigator.pop();

    },



    popToNextView(){

        this.props.navigator.push({

            component: ThreeDetialClass,
            passProps:{

                callback: ((text) =>{this.seedToSecond(text)})

            }


        })
    },

     seedToSecond( data ){
        this.setState({

            text: data,
        })
     },

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
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
        marginTop:20,
    },
});
module.exports = HomeDetial ;
