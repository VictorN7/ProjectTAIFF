import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import styles from './style';
import Grafico from '../Chart/Grafic';
function Dashboard({ navigation }) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Grafico />
                <View style={styles.viewbotao}>
                    <View style={styles.botao}>
                        <Button color="#4A47A3" title="Home" onPress={() => navigation.navigate('Tela Inicial')} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Dashboard;