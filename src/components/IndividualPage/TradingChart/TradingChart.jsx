import React, { useEffect, useRef } from "react";
import classes from "./TradingChart.module.css";
// Custom data provider
const createDataFeed = (symbol) => {
  return {
    onReady: (callback) => {
      callback({
        supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D"],
      });
    },

    resolveSymbol: (symbolName, onSymbolResolvedCallback) => {
      const symbolInfo = {
        name: symbolName,
        full_name: symbolName,
        description: symbolName,
        ticker: symbolName,
        type: "bitcoin",
        session: "24x7",
        timezone: "Etc/UTC",
        exchange: "BINANCE",
        listed_exchange: "BINANCE",
        minmov: 1,
        pricescale: 100,
      };
      onSymbolResolvedCallback(symbolInfo);
    },

    getBars: async (
      symbolInfo,
      resolution,
      rangeStartDate,
      rangeEndDate,
      onDataCallback,
      onErrorCallback
    ) => {
      try {
        const response = await fetch(
          `YOUR_API_URL?symbol=${symbolInfo.name}&resolution=${resolution}&start=${rangeStartDate}&end=${rangeEndDate}`
        );
        const data = await response.json();

        const bars = data.map((item) => ({
          time: item.timestamp,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close,
          volume: item.volume,
        }));

        onDataCallback(bars, { noData: false });
      } catch (error) {
        onErrorCallback(error);
      }
    },

    subscribeBars: (symbolInfo, resolution, onRealtimeCallback) => {
      // Handle live updates (WebSocket or polling)
    },

    unsubscribeBars: (subscriberUID) => {
      // Handle unsubscribing
    },
  };
};

const TradingViewChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: "tradingview_chart",
          autosize: true,
          symbol: "BINANCE:BTCUSDT", // Can be customized to any symbol
          interval: "5",
          theme: "dark",
          style: "1", // Candlestick chart
          toolbar_bg: "#f1f3f6",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: [],
          datafeed: createDataFeed("BTCUSDT"), // Custom data feed
        });
      }
    };

    chartContainerRef.current.appendChild(script);
  }, []);

  return (
    <div
      className={classes.myChart}
      id="tradingview_chart"
      ref={chartContainerRef}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default TradingViewChart;
