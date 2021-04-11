import React from 'react'
import { View, Text } from 'react-native'
import { AreaChart,StackedAreaChart,LineChart,PieChart,YAxis  ,BarChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import colors from '../styles/colors'
export default function AreaChartComponent(props) {
    const {AreaChartData}=props
    return (
        <View>
            <AreaChart
                style={{ height: 200 }}
                data={AreaChartData}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill:colors.pie_char_color }}
            >
                <Grid />
            </AreaChart>
        </View>
    )
}
