import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import fontFamily from '../styles/fontFamily'
 
export default function PieChartComponent() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))
    return (
        <View>
            <View style={styles.pieChartCon}>
                <Text style={[styles.pieChartText,{color: randomColor()}]}>
                PieChart
                </Text>
            </View>
            <PieChart style={{ height: 200 }} data={pieData} />
            </View>
    )
}
const styles = StyleSheet.create({
    pieChartText:
    {fontFamily:fontFamily.bold,fontSize:18},
    pieChartCon:
    {alignItems:'center',paddingBottom:20}
})

