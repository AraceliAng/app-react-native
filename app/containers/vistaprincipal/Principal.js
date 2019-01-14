import React,{Component} from 'react';
import {View,Text} from 'react-native'
import styles from './styles'
//se importan las clases que se vayan creando
import FormPrincipal from './FormPrincipal';
import {FormDos} from './FormDos';

export default class Principal extends Component{
    // una mini base de datos de la vista
    state={
        resultado:0,
        nombre:'',
        data:{
            name:'',
            val:''
        }
    }

  //arrow functions
    sum = () => {
        let{resultado}=this.state
        resultado++

        this.setState({resultado})
    }

    resta = () => {
        let{resultado}=this.state
        resultado--

        this.setState({resultado})
    }

    handleChange = (name,value) => {
        let{nombre,data}=this.state
        nombre=value
        data[name]=value
        this.setState({nombre,data})
    }
    picame = () => {
        console.log('que es data:')
    }

    render(){
        let{nombre,resultado}=this.state;
        return(
            <View>
                <Text style={styles.texto}> Resultado = {resultado}</Text>
                <Text style={styles.texto}> Mi nombre es = {nombre}</Text>
                <FormPrincipal 
                    sum={this.sum}
                    resta={this.resta}
                />
{/*con este se manda a llamar al componente tonto*/}
                <FormDos
                texto="da click"
                handleChange={this.handleChange}
                />
            </View>
        )
    }
}


