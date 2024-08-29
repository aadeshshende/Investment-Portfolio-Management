import React, { useEffect, useState } from 'react';
import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar, Line, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const StockGraph = ({ikey}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data with Axios
        axios.get(`https://api.upstox.com/v2/historical-candle/${ikey}/1minute/2024-08-14/2024-08-14/`)
            .then(response => {
                if (response.data.status === "success") {
                    // Transform the data to match the required format
                    const formattedData = response.data.data.candles.map(item => {
                        const date = new Date(item[0]);
                        return {
                            date: `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`,
                            open: item[1],
                            high: item[2],
                            low: item[3],
                            close: item[4],
                        };
                    });
                    setData(formattedData);
                }
            })
            .catch(error => {
                console.error('Error fetching candlestick data:', error);
            });
    }, [ikey]);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin', 'dataMax']} />
                <Tooltip />
                {/* Draw wicks using lines */}
                <Line
                    type="monotone"
                    dataKey="high"
                    stroke="#8884d8"
                    dot={false}
                    isAnimationActive={false}
                    connectNulls
                    activeDot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="low"
                    stroke="#8884d8"
                    dot={false}
                    isAnimationActive={false}
                    connectNulls
                    activeDot={{ r: 4 }}
                />
                {/* Draw candles using bars */}
                <Bar
                    dataKey="open"
                    fill="#8884d8"
                    isAnimationActive={false}
                    shape={({ x, y, width, height, payload }) => {
                        const color = payload.close > payload.open ? "#82ca9d" : "#ff4d4f";
                        return (
                            <rect
                                x={x}
                                y={Math.min(y, y - height)}
                                width={width}
                                height={Math.abs(height)}
                                fill={color}
                            />
                        );
                    }}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default StockGraph;
