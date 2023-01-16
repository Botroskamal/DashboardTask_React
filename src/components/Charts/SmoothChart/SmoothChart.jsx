import './SmoothChart.scss'
import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const SmoothChart = () => {
    useLayoutEffect(() => {
    
        let root = am5.Root.new("smoothChart");
    
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX:true
        }));

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
        }));

        cursor.lineY.set("visible", false);
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        var value = 100;
          
        function generateData() {
            value = Math.round((Math.random() * 10 - 5) + value);
            am5.time.add(date, "day", 1);
            return {
                date: date.getTime(),
                value: value
            };
        }

        function generateDatas(count) {
            var data = [];
            for (var i = 0; i < count; ++i) {
            data.push(generateData());
            }
            return data;
        }

        var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0.5,
            baseInterval: {
            timeUnit: "day",
            count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
                pan:"zoom"
            }),
            tooltip: am5.Tooltip.new(root, {})
        }));


        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation:1,
            visible: false,
            renderer: am5xy.AxisRendererY.new(root, {
                pan:"zoom"
            })
        }));


        var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));


        series.fills.template.setAll({
            visible: true,
            fillOpacity: 0.2
        });


        series.fills.template.set(
            "fillGradient",
            am5.LinearGradient.new(root, {
                stops: [
                {
                    color: am5.color(0xff764c),
                    opacity: 0.24,
                },
                {
                    color: am5.color(0xff7e07),
                    opacity: 0,
                },
                ],
                rotation: 90,
            })
        );

        var data = generateDatas(50);
        series.data.setAll(data);
        series.appear(1000);
        chart.appear(1000, 100);
    
        return () => {
          root.dispose();
        };
      }, []);

    return(
        <div className="smooth-chart">
            <div id="smoothChart"></div>
        </div>
    );
}

export default SmoothChart;