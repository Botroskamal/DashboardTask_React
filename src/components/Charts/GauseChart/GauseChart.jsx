import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect, useEffect } from "react";
import '../../SpecsCard/SpecsCard.scss';

import './GauseChart.scss';
import { PieChart, Pie } from "recharts";

const GauseChart = (props) => {

    setTimeout(() => {
        let root = am5.Root.new(props.id);
    
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
    
        var chart = root.container.children.push(
            am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                startAngle: -200,
                endAngle: 20,
                innerRadius: -10
            })
        );
    
        var axisRenderer = am5radar.AxisRendererCircular.new(root, {
            strokeOpacity: 0.1,
            minGridDistance: 30
        });
    
    
        axisRenderer.grid.template.setAll({
            visible: false
        });
    
        var axis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                maxDeviation: 0,
                min: 0,
                max: 100,
                strictMinMax: true,
                visible: false,
                renderer: axisRenderer
            })
        );
    
        function createRange(start, end, color, label) {
        
        var rangeDataItem = axis.makeDataItem({
            value: start,
            endValue: end
        });
    
        var range = axis.createAxisRange(rangeDataItem);
        
        rangeDataItem.get("axisFill").setAll({
            visible: true,
            fill: color,
            fillOpacity: 0.8
        });
        
        rangeDataItem.get("tick").setAll({
            visible: false
        });
        
        rangeDataItem.get("label").setAll({
            text: label,
            inside: true,
            radius: 5,
            fontSize: "0.9em",
            fill: am5.color(0xffffff)
        });
    
        }
    
        createRange(0, props.Angle, am5.color(props.firstColor));
        createRange(props.Angle, 100, am5.color(props.secondColor));
    
        root.current = root;
    
        return () => root.dispose();
    },0)
    


    // const classes = 'card ' + props.cardType;

    // const data = [
    //     { name: "Group A", value: 190 }
    // ];
      
    // const data2 = [
    //     { name: "Group B", value: 300 }
    // ];


    return(
        // <PieChart width={200} height={120}>
        //     <Pie
        //         dataKey="value"
        //         startAngle={200}
        //         endAngle={props.Angle}
        //         data={data}
        //         cx={100}
        //         cy={80}
        //         outerRadius={80}
        //         innerRadius={65}
        //         fill={props.firstColor}
        //     />
        //     <Pie
        //         dataKey="value"
        //         startAngle={props.Angle}
        //         endAngle={-20}
        //         data={data}
        //         cx={100}
        //         cy={80}
        //         outerRadius={80}
        //         innerRadius={65}
        //         fill={props.secondColor}
        //     />
        // </PieChart>
        // <div className={classes}>
        //     <div>
        //         <img src={"src/assets/img/cards/"+props.icon} alt={props.cardName} />
        //     </div>
        //     <span>{props.cardName}</span>
        //     <div id="chartdiv1" className='Gause-chart'>
        //         <span>45%</span>
        //     </div>
        // </div>
        <div id={props.id} className='Gause-chart'>
            <span>{props.value}</span>
        </div>
    );
}

export default GauseChart;