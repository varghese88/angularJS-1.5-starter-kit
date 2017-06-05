import * as d3 from "d3"

class BarChart {
    constructor($scope,$element){
        "ngInject";
        this.element = $element;

    }
    $onInit(){
         console.log('initialized');
    }
    $postLink(){
        let data = this.data;
        
        let containerHeight = this.element[0].offsetHeight;
        let containerWidth = this.element[0].offsetWidth;
        let margin = {left:containerWidth*0.08, right:containerWidth*0.015,top:containerHeight*0.04,bottom:containerHeight*0.2},
            width = containerWidth - margin.left -margin.right,
            height = containerHeight - margin.top - margin.bottom;

        //define svg
        let svg = d3.select(this.element[0])
                    .append('svg')
                    .attr("width",containerWidth)
                    .attr("height",containerHeight)
                    .append('g')
                    .attr('transform','translate('+margin.left+','+ margin.top+')');

        //define scale

        let xScale = d3.scaleBand()
                       .rangeRound([0,width])
                       .padding(0.2);
        let yScale = d3.scaleLinear()
                       .range([height,0]);

        //define axis

        let xAxis = d3.axisBottom().scale(xScale);
        let yAxis = d3.axisLeft().scale(yScale);

        data.forEach(function(d){
            d.gdp = +d.gdp;
        });

        data.sort(function(a,b){
            return b.gdp - a.gdp;
        });
        var arr = data.map(function(d){ return d.country;})
        console.log(arr);
        xScale.domain(data.map(function(d){ return d.country;}));
        yScale.domain([0,d3.max(data,function(d){return d.gdp})]);

        console.log(data);
        svg.selectAll('rect')
           .data(data)
           .enter()
           .append('rect')
           .attr("x",function(d){ return xScale(d.country);})
           .attr("y",function(d){ return yScale(d.gdp);})
           .attr("fill","black")
           .attr("width",xScale.bandwidth())
           .attr("height",function(d){return height - yScale(d.gdp)});

        svg.selectAll('text')
           .data(data)
           .enter()
           .append('text')
           .text(function(d){return d.gdp;})
           .attr('x',function(d){return xScale(d.country);})
           .attr('y',function(d){return yScale(d.gdp);})


        svg.append('g')
           .attr('class','x axis')
           .attr('transform','translate(0,'+height+')')
           .call(xAxis)
           .selectAll('text')
           .attr('transform','rotate(-60)')
           .style('text-anchor','end');

        svg.append('g')
           .attr('class','y axis')
           .call(yAxis);
    }
    
}
export default BarChart;