import React,{Component} from 'react';
import {View,Text, TextInput , TouchableOpacity} from 'react-native';
import styles from './styles';

//componente tonto
export const FormDos =({texto,handleChange}) =>  (
        <View>
            <TextInput onChangeText={value=>handleChange("name",value)}/>
            <TouchableOpacity >
                <Text>{texto}</Text>

            </TouchableOpacity>
        </View>
    )

//export default FormDos