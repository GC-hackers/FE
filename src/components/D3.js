import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3 = props => {
  console.log(props);
  const chartRef = useRef(null);

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const width = 460 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    let svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    updateChart(svg, width, height);
  }, []);

  async function updateChart(svg, width, height) {
    const data = await d3.csv(props.dataUrl);
    // Add X axis --> it is a date format
    const x = d3
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")

    // Add Y axis
    const y = d3

      .range([height, 0]);


    // Show confidence interval
    svg
      .append("path")
      .datum(data)
      .attr("fill", "#cce5df")
      .attr("stroke", "none")
      .attr(
        "d"
      );

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
      );
  }

  return <div ref={chartRef} />;
};

export default D3;
