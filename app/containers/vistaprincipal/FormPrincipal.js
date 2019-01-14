import React,{Component} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import styles from './styles';

//componente clase y se llaman dependiendo de como le pongamos de 
//preferencia de la misma manera que el js
export default class FormPrincipal extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.sum} >
                    <Text >sumale</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.resta}>
                    <Text >restale</Text>
                </TouchableOpacity>
            </View>
        )
    }
}