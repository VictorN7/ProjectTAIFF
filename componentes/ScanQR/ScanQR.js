import React from 'react';
import { View, Button, Image } from 'react-native';
import styles from '../ScanQR/style';


function ScanQR({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageqr}>
                <Image style={styles.logo} source={require('../../assets/qrcode.png')} />
            </View>
            <View style={styles.viewbotao}>
                <View style={styles.subbotao}>
                    <Button style={styles.botao} color="#4A47A3" title="Scannear" onPress={() => {alert("Pronto pra Escanear!!")}} />
                </View>
                <View>
                    <Button color="#4A97A3" title="Dashboard" onPress={() => navigation.navigate("Dashboard")} />
                </View>
            </View>
        </View>

    );
}
export default ScanQR;