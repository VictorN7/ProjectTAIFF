import React from 'react';
import { View, Button, Text, ScrollView } from 'react-native';
import styles from '../Historico/style';


function Historico({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.conteudo}>
                    <View style={styles.dados}>
                        <Text style={styles.informacao}>Aparelho: Secador</Text>
                        <Text style={styles.informacao}>Modelo: Unique</Text>
                        <Text style={styles.informacao}>Pôtencia: 2600W</Text>
                        <Text style={styles.informacao}>Ultima Utilização: 05/07/2021</Text>
                    </View>
                    <View style={styles.dados}>
                        <Text style={styles.informacao}>Aparelho: Secador</Text>
                        <Text style={styles.informacao}>Modelo: Style</Text>
                        <Text style={styles.informacao}>Pôtencia: 2000W</Text>
                        <Text style={styles.informacao}>Ultima Utilização: 04/07/2021</Text>

                    </View>
                    <View style={styles.dados}>
                        <Text style={styles.informacao}>Aparelho: Secador</Text>
                        <Text style={styles.informacao}>Modelo: Fox S</Text>
                        <Text style={styles.informacao}>Pôtencia: 2100W</Text>
                        <Text style={styles.informacao}>Ultima Utilização: 23/06/2021</Text>

                    </View>
                    <View style={styles.dados}>
                        <Text style={styles.informacao}>Aparelho: Secador</Text>
                        <Text style={styles.informacao}>Modelo: Vulcan KOMPRESS</Text>
                        <Text style={styles.informacao}>Pôtencia: 2400W</Text>
                        <Text style={styles.informacao}>Ultima Utilização: 17/04/2021</Text>
                    </View>
                    <View style={styles.dados}>
                        <Text style={styles.informacao}>Aparelho: Secador</Text>
                        <Text style={styles.informacao}>Modelo: Unique DUO</Text>
                        <Text style={styles.informacao}>Pôtencia: 2700W</Text>
                        <Text style={styles.informacao}>Ultima Utilização: 10/03/2021</Text>

                    </View>
                    <View style={styles.botao}>
                        <Button color="#4A47A3" title="Tela Inicial" onPress={() => navigation.navigate('Tela Inicial')} />
                    </View>
                </View>

            </View>
        </ScrollView>

    );
}
export default Historico;