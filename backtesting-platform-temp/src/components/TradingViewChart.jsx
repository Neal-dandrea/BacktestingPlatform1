import React, { useEffect, useRef, useState } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const TradingViewChart = () => {
    const chartContainerRef = useRef(null);
    const [chart, setChart] = useState(null);
    const [candlestickSeries, setCandlestickSeries] = useState(null);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (!chartContainerRef.current) return;

        // Setup chart with enhanced styles
        const newChart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth || 1000,
            height: 600,
            layout: theme === 'dark' 
                ? { backgroundColor: '#0e0e0e', textColor: '#ffffff' } 
                : { backgroundColor: '#ffffff', textColor: '#000000' },
            grid: {
                vertLines: { color: theme === 'dark' ? '#2B2B43' : '#EAEAEA' },
                horzLines: { color: theme === 'dark' ? '#2B2B43' : '#EAEAEA' },
            },
            timeScale: {
                borderColor: '#D1D4DC',
                timeVisible: true,
                secondsVisible: false,
            },
            crosshair: {
                mode: CrosshairMode.Normal,
                vertLine: { color: '#FF4500', width: 2, style: 0 },
                horzLine: { color: '#FF4500', width: 2, style: 0 },
            },
        });

        // Add candlestick series
        const newCandlestickSeries = newChart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderUpColor: '#26a69a',
            borderDownColor: '#ef5350',
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
        });

        // Load sample data
        newCandlestickSeries.setData([
            { time: '2024-01-10', open: 100, high: 105, low: 98, close: 104 },
            { time: '2024-01-11', open: 104, high: 108, low: 102, close: 107 },
            { time: '2024-01-12', open: 107, high: 110, low: 105, close: 108 },
            { time: '2024-01-13', open: 108, high: 112, low: 107, close: 111 },
            { time: '2024-01-14', open: 111, high: 113, low: 109, close: 110 },
        ]);

        newChart.timeScale().fitContent();
        setChart(newChart);
        setCandlestickSeries(newCandlestickSeries);

        return () => newChart.remove();
    }, [theme]);

    // Simulated real-time updates
    useEffect(() => {
        if (!candlestickSeries) return;

        const interval = setInterval(() => {
            const newTime = Math.floor(Date.now() / 1000);
            const newPrice = Math.floor(Math.random() * 20) + 100;
            candlestickSeries.update({
                time: newTime,
                open: newPrice - 2,
                high: newPrice + 5,
                low: newPrice - 5,
                close: newPrice,
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [candlestickSeries]);

    return (
        <div style={{ position: 'relative', textAlign: 'center', marginTop: '20px' }}>
            <h1 style={{ color: '#fff' }}>Advanced Backtesting Chart</h1>
            <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                style={{
                    marginBottom: '10px',
                    padding: '10px',
                    cursor: 'pointer',
                    backgroundColor: theme === 'dark' ? '#fff' : '#000',
                    color: theme === 'dark' ? '#000' : '#fff',
                }}
            >
                Toggle Theme
            </button>
            <div ref={chartContainerRef}></div>
        </div>
    );
};

export default TradingViewChart;
