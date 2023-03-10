import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart';
const Chart = (props) => {
    return (
        <div>
            {props.dataPoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    label={datapoint.label}
                    maxValue={null}
                />
            ))}
        </div>
    );
};
export default Chart;
