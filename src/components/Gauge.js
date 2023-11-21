import React from 'react';
import GaugeChart from 'react-gauge-chart';

const chartStyle = {
    height: 250,
    
};

export function Gauge1() {
    return (
            <GaugeChart
                id="gauge-chart1"
                style={chartStyle}
                nrOfLevels={20}
                percent={0.86}
                textColor= "#000000"
            />
    );
}

export function Gauge2() {
    return (
            <GaugeChart
                id="gauge-chart1"
                style={chartStyle}
                nrOfLevels={20}
                percent={0.86}
                textColor= "#000000"
            />
    );
}

export function Gauge3() {
    return (
            <GaugeChart
                id="gauge-chart1"
                style={chartStyle}
                nrOfLevels={20}
                percent={0.86}
                textColor= "#000000"
            />
    );
}
