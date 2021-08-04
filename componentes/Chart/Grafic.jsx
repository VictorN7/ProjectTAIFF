import React, { Component } from "react";
import { View, Text} from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryTheme, VictoryLegend, VictoryAxis } from "victory-native";
import styles from "../Chart/style";

const data = {
    /* planned: [null, { x: 'week 2', y: 10 }], */
    atual: [{ x: 'dado 1', y: 50 }, { x: 'dado 2', y: 10 }, , { x: 'dado 3', y: 40 }, , { x: 'dado 4', y: 35 }, , { x: 'dado 5', y: 47 }, , { x: 'dado 6', y: 70 },],
}
class Grafic extends Component {
    render() {
        return (
            <View>
                <Text style={styles.texto}>Grafico de Barras</Text>
                <View style={styles.allGrafic}>
                    <VictoryChart style={styles.GraficConfig} theme={VictoryTheme.material}
                        domainPadding={5}>
                        <VictoryGroup>
                            <VictoryBar style={{ data: { fill: "#242424" }, }}
                                data={data.atual} />

                        </VictoryGroup>
                    </VictoryChart>
                </View>
                <Text style={styles.texto}>Grafico de Barras 2</Text>
                <View style={styles.allGrafic}>
                    <VictoryChart style={styles.GraficConfig} theme={VictoryTheme.material}
                        domainPadding={5}>
                        <VictoryGroup>
                            <VictoryBar style={{ data: { fill: "#9f18b1" }, }}
                                data={data.atual} />
                        </VictoryGroup>
                    </VictoryChart>
                </View>
            </View>
        );
    }
}
export default Grafic;