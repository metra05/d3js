var DonutChart = function(){
    var pi = Math.PI;
    var sensorDomainArray;
    var divIdName;
    var sensorAmount;
    var sensorText = "";
    var sensorScale;
    var foreground;
    var jarum;
    var arc;
    var svg;
    var g;
    var textValue;
    var textlow ="";
    var textHigh ="";
    let warna="";
    
    function setSensorDomain(domainArray){
        sensorDomainArray = domainArray;
    };

    function setSvgDiv(name){
        divIdName = name;
    };

    function createChart(sensorTextNew, sensorType){
        sensorText = sensorTextNew;
        var margin = {top: 10, right: 10, bottom: 10, left: 10};
        var width = 450 - margin.left - margin.right;   //ukuran wadah(svg)
        var height = 300;
        sensorScale = d3.scaleLinear()
            .range([0, 180]);       
        arc = d3.arc()              //ukuran donut
            .innerRadius(140)
            .outerRadius(150)
            .startAngle(0);

        svg = d3.select(divIdName).append("svg")    //d3 menyelect tag berdasarkan id
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        l = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        l1 = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        l2 = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1em")
            .attr("y", 20)
            .attr("x",-145)
            .text(sensorDomainArray[0]);
        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1em")
            .attr("y", 20)
            .attr("x",145)
            .text(sensorDomainArray[1]);
        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1.3em")
            .attr("y", 60)
            .text(sensorType);
        textValue = g.append("text")
            .attr("text-anchor", "middle")
            .attr('font-size', '4.8em')
            .attr('y', 145)
            .text(sensorAmount + "" + sensorText);
        var background = g.append("path")
            .datum({endAngle: pi})
            .style("fill", "#ddd")
            .attr("d", arc)
            .attr("transform", "rotate(-90)")
        foreground = g.append("path")
            .datum({endAngle: 0.5 * pi})
            .style("fill", "#FE8402")
            .attr("d", arc)
            .attr("transform", "rotate(-90)");

        //ini tick..........................................
        let det=[0,1,2,3,4,5];
        l1.selectAll("line")
            .data(det)
            .enter()
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0)
            .attr("x2", -130).attr("y2", 0)
            .attr("transform", d=>"rotate("+sensorDomainArray[1]*180+d*180/5+")"); 

        let det2=[1,3,5,7,9]
        l2.selectAll("line")
            .data(det2)
            .enter()
            .append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0)
            .attr("x2", -130).attr("y2", 0)
            .attr("transform", d=>"rotate("+sensorDomainArray[1]*180+d*180/10+")"); 

        
        let det3=[];                    //membuat tik yang paling kecil 
        for (let i=1; i<51; i++){
            if (i%5!=0){
                det3.push(i);
            }
        }
        console.log(det3);
        l3.selectAll("line")
            .data(det3)
            .enter()
            .append("line") 
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", -123).attr("y1", 0)
            .attr("x2", -130).attr("y2", 0)
            .attr("transform", d=>"rotate("+sensorDomainArray[1]*180+d*180/50+")"); 

        //..............INI CARA YANG MEMBOSANKAN MEMBUAT SATU PERSATU........................
        // tickkecil=l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+")"); 
        
        // l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+(180/10)+")");     

        // l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+(3*180/10)+")"); 
        
        // l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+(5*180/10)+")"); 

        // l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+(7*180/10)+")"); 

        // l.append("line").style("stroke", "black").style("stroke-width", 1)
        //     .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
        //     .attr("transform", "rotate("+sensorDomainArray[1]*180+(9*180/10)+")"); 

        //.................................................................................
        l.append('circle')
            .attr("fill","red")
            .attr("r","10");
        l.append('circle')    
            .attr("fill","black")
            .attr("r","5");
        jarum = l.append("line")
            .style("stroke", "black")
            .style("stroke-width", 3)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", -100)
            .attr("y2", 0);
        ekor = l.append("line")
            .style("stroke", "black")
            .style("stroke-width", 2)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 30)
            .attr("y2", 0);
    }

    function updateChart(newSensorValue){
        sensorScale.domain(sensorDomainArray);
        var sensorValue = sensorScale(newSensorValue);
        sensorValue = sensorValue/180;
        textValue.text(newSensorValue + "" + sensorText);
        //console.log(sensorValue*pi);
        let newCol=d3.scaleLinear()
            .domain([0,1])
            .range(["blue","red"]);

        warna=newCol(sensorValue);
        console.log(warna);

        foreground.transition()
            .duration(750)
            .style("fill", warna)
            .attrTween("d", arcAnimation(sensorValue * pi));
        
        jarum.transition()
            .duration(750)
            .attr("transform", "rotate("+sensorValue*180+")"); //${sensorValue*pi})`);   .attr("transform", "rotate(40)")
        
        ekor.transition()
            .duration(750)
            .attr("transform", "rotate("+sensorValue*180+")"); 
    }

    function arcAnimation(newAngle){
        return function(d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            return function(t) {
                d.endAngle = interpolate(t);
                return arc(d);
            };
        };
    }

    return{
        setSensorDomain: setSensorDomain,
        setSvgDiv: setSvgDiv,
        createChart:createChart,
        updateChart: updateChart
    }
 
};
        
