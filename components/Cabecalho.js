import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cores from '../cores/cores'
const Cabecalho = (props) => {
    return(
        <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>{props.titulo}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        width: '100%',
        height: 95,
        paddingTop: 40,
        backgroundColor: Cores.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#000',
        fontSize: 22
    }

});

export default Cabecalho;