import * as React from 'react';
import {
    LineChart,
    Line,
    Tooltip,
} from 'recharts';
import * as colors from './colors';
import { lines_tiny, lines_tiny_2 } from './sampleData';

interface TinyLineChartOneProps {
    city?: string;
}

export default class TinyLineChartOne extends React.Component<TinyLineChartOneProps> {

    public render() {
        return (
            <LineChart
                width={350}
                height={100}
                data={this.props.city == 'Los Angeles' ? lines_tiny_2 : lines_tiny}
            >
                <Line
                    type='monotone'
                    dataKey='Sales'
                    stroke={colors.orange}
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    type='monotone'
                    dataKey='Guests'
                    stroke={colors.mint}
                    strokeWidth={2}
                    dot={false}
                />
                <Line
                    type='monotone'
                    dataKey='Incidents'
                    stroke='#ccc'
                    strokeWidth={2}
                    dot={false}
                />
                <Tooltip />
            </LineChart>
        );
    }
}