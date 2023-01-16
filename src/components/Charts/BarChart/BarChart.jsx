import './BarChart.scss';
import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";



const BarChart = () => {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("bar-chart");
    
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
    
        let chart = root.container.children.push( 
          am5xy.XYChart.new(root, {
            panY: false,
            wheelY: "zoomX",
            layout: root.verticalLayout
          }) 
        );
    
        // Define data
        let data = [{ 
            category: "1PM", 
            value1: 850
          }, { 
            category: "2PM", 
            value1: 650
          }, { 
            category: "3PM", 
            value1: 1000
          }, {
            category: "4PM",
            value1: 600
          },{
            category: "5PM", 
            value1: 850
          }, {
            category: "6PM", 
            value1: 500
          }, {
            category: "7PM", 
            value1: 700
          }];
    
        // Create Y-axis
        let yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {}),
            visible: false
          })
        );
    
        // Create X-Axis
        let xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
            categoryField: "category"
          })
        );
        xAxis.data.setAll(data);
    
        // Create series
        let series1 = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value1",
            categoryXField: "category"
          })
        );
        series1.data.setAll(data);
    
        return () => {
          root.dispose();
        };
      }, []);

    return(
        <div className="bar-chart">
            <div id="bar-chart"></div>
        </div>
    );
}

export default BarChart;