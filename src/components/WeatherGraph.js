import React from "react";
import Chart from "chart.js";
import axios from "axios";
import moment from "moment";

var timeDataset = [];
var tempDataset;

export default function WeatherGraph({ city, apiKey }) {
  function graphSlider(day) {
    let segmentSize = 2000 / timeDataset.length;
    let firstDaySegments = timeDataset.length - 32;
    let firstDaySegmentsSize = firstDaySegments * segmentSize;
    let otherDaySegmentsSize = segmentSize * 8;

    if (day == 0) document.querySelector(".chartjs-wrapper").style.right = 0;
    else {
      console.log("hlw shaon");

      document.querySelector(".chartjs-wrapper").style.right =
        firstDaySegmentsSize + otherDaySegmentsSize * (day - 1) + "px";
    }
  }

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((res) => {
        let slicer;
        timeDataset = res.data.list
          .map((elem, index) => {
            let m = moment.utc(elem.dt * 1000);
            if (index == 0) slicer = m.format("h");
            return m.format("h a");
          })
          .slice(0, -(slicer / 3));
        tempDataset = res.data.list
          .map((elem) => Math.round(elem.main.temp))
          .slice(0, timeDataset.length);

        //visualizing yAxis
        var ctxFixed = document.getElementById("myFixedChart").getContext("2d");
        var chart = new Chart(ctxFixed, {
          // The type of chart we want to create
          type: "line",

          // The data for our dataset
          data: {
            labels: timeDataset,
            datasets: [
              {
                backgroundColor: "transparent",
                borderColor: "transparent",
                data: tempDataset,
                pointBackgroundColor: "transparent",
              },
            ],
          },

          // Configuration options go here
          options: {
            maintainAspectRatio: false,

            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 3,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontColor: "transparent",
                  },
                },
              ],
            },
          },
        });
        //positionsing yAxis
        document.querySelector(".fixed").style.top =
          document.querySelector(".weather-grapher").offsetTop + "px";

        //visualizing data with chart.js
        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: "line",

          // The data for our dataset
          data: {
            labels: timeDataset,
            datasets: [
              {
                backgroundColor: "#e2dfdf",
                borderColor: "gray",
                data: tempDataset,
                pointBackgroundColor: "black",
              },
            ],
          },

          // Configuration options go here
          options: {
            maintainAspectRatio: false,

            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 3,
                    fontColor: "transparent",
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    backgroundColor: "red",
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          },
        });
      });
  });

  return (
    <>
      <div className="weather-grapher">
        <div className="chartjs-wrapper">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <div
        className="weather-grapher fixed"
        style={{ position: "absolute", left: "25px" }}
      >
        <div className="chartjs-wrapper ">
          <canvas id="myFixedChart" className="fixed-chart"></canvas>
        </div>
      </div>
      <div className="day">
        <button onClick={() => graphSlider(0)}>sunday</button>
        <button onClick={() => graphSlider(1)}>monday</button>
        <button onClick={() => graphSlider(2)}>tuesday</button>
        <button onClick={() => graphSlider(3)}>wednesday</button>
        <button onClick={() => graphSlider(4)}>thursday</button>
      </div>
    </>
  );
}
