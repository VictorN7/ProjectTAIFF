import React, { Component } from "react";
import { Text, View, Button, Modal, SafeAreaView, TextInput } from 'react-native';
import styles from '../Pesquisar/style';
// Modal apresenta a tela que contem a mensagem
// View para usar como container dos nossos componentes


function Pesquisar() {
    const [text, onChangeText] = React.useState("Secador");
     const [text1, Entrada] = React.useState("");  
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.texto}>Pesquisar:</Text>
                <TextInput style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Tipo:" />
                  <TextInput style={styles.input}
                    onChangeText={Entrada}
                    value={text1}
                    placeholder="Modelo"/>  
            </SafeAreaView>
            <View>
                <Button color="#4A47A3" title="Pesquisar 🔍" onPress={() => {
                    alert(`${text} Modelo ${text1}`);
                }} />
            </View>
        </View>

    );
}

export default Pesquisar;