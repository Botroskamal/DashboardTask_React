import React, { useRef, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import GauseChart from '../Charts/GauseChart/GauseChart';
import './SpecsCard.scss';

const SpecsCard = (props) => {

    const classes = 'card ' + props.cardType;

    // useLayoutEffect(() => {
    //     let root = am5.Root.new("chartdiv1");
    
    //     root.setThemes([
    //         am5themes_Animated.new(root)
    //     ]);
    
    //     var chart = root.container.children.push(
    //         am5radar.RadarChart.new(root, {
    //             panX: false,
    //             panY: false,
    //             startAngle: -200,
    //             endAngle: 20,
    //             innerRadius: -10
    //         })
    //     );
    
    //     var axisRenderer = am5radar.AxisRendererCircular.new(root, {
    //         strokeOpacity: 0.1,
    //         minGridDistance: 30
    //     });
    
    
    //     axisRenderer.grid.template.setAll({
    //         visible: false
    //     });
    
    //     var axis = chart.xAxes.push(
    //         am5xy.ValueAxis.new(root, {
    //             maxDeviation: 0,
    //             min: 0,
    //             max: 100,
    //             strictMinMax: true,
    //             visible: false,
    //             renderer: axisRenderer
    //         })
    //     );
    
    //     function createRange(start, end, color, label) {
        
    //     var rangeDataItem = axis.makeDataItem({
    //         value: start,
    //         endValue: end
    //     });
    
    //     var range = axis.createAxisRange(rangeDataItem);
        
    //     rangeDataItem.get("axisFill").setAll({
    //         visible: true,
    //         fill: color,
    //         fillOpacity: 0.8
    //     });
        
    //     rangeDataItem.get("tick").setAll({
    //         visible: false
    //     });
        
    //     rangeDataItem.get("label").setAll({
    //         text: label,
    //         inside: true,
    //         radius: 5,
    //         fontSize: "0.9em",
    //         fill: am5.color(0xffffff)
    //     });
    
    //     }
    
    //     createRange(0, 45, am5.color(0xFFFFFF));
    //     createRange(45, 100, am5.color(0xB37EFC));
    
    //     root.current = root;
    
    //     return () => root.dispose();
    // }, []);

    return(
        <div className={classes}>
            <div>
                <img src={"src/assets/img/cards/"+props.icon} alt={props.cardName} />
            </div>
            <span>{props.cardName}</span>
            {/* <div id="chartdiv1" className='Gause-chart'>
                <span>45%</span>
            </div> */}
            {/* <GauseChart 
                firstColor={props.firstColor}
                secondColor={props.secondColor}
                Angle={props.Angle}
            /> */}
            <GauseChart id={props.id} value={props.value} firstColor={props.firstColor} secondColor={props.secondColor} Angle={props.Angle}/>
        </div>
    );
}

export default SpecsCard;