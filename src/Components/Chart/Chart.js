import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';
const Chart = (props) => {
    const datapointValue = props.dataPoints.map((dataPoint) => dataPoint.value);

    const totalMaximum = Math.max(...datapointValue);

    return (
        <div className="chart">
            {props.dataPoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
 maxValue={totalMaximum}
                />
            ))}
        </div>
    );
};
export default Chart;
