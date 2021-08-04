import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, Button } from 'react-native';
import styles from '../TelaInicial/style';

export function TelaInicial({ navigation }) {
    return (

        <View style={styles.container} >
            <View style={styles.container2}>
                <View style={styles.espacologo}>
                    <Image style={styles.logo} source={require('../../assets/taiff2.png')} />
                </View>
                <View style={styles.espaco}>
                    <View style={styles.botoes}>
                        <Button color="#4A47A3" style={styles.botao1} title="Scan QR" onPress={() => navigation.navigate('Scan QR')} />
                    </View>
                    <View style={styles.botoes}>
                        <Button color="#4A47A3" style={styles.botao2} title="Pesquisar" onPress={() => navigation.navigate('Pesquisar')} />
                    </View>
                    <View style={styles.botoes}>
                        <Button color="#4A47A3" style={styles.botao3} title="Histórico" onPress={() => navigation.navigate('Historico')} />
                    </View>

                </View>
            </View>
        </View>

    );
}
