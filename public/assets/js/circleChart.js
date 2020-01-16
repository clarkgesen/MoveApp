const repsArray = [];
const createdArray = [];

$(document).ready(() => {
  $.get('/api/activities').then((data) => {
    const today = new Date();

    let legscount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'legs') { legscount++; }
    }
    const legspercent = (legscount / 5) * 100;

    let armscount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'arms') { armscount++; }
    }
    const armspercent = ((armscount / 5) * 100);

    let chestcount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'chest') { chestcount++; }
    }
    const chestpercent = ((chestcount / 5) * 100);

    let cardiocount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'cardio') { cardiocount++; }
    }
    const cardiopercent = ((cardiocount / 5) * 100);

    // const chartData = data.map((item) => ({
    //   y: parseFloat(item.reps),
    //   x: new Date(item.createdAt).getTime(),
    // }));

    // const chart = Highcharts.chart('container', {
    //   chart: {
    //     type: 'line',
    //   },
    //   xAxis: [{
    //     type: 'datetime',
    //     // tickInterval: .2,
    //   }],
    //   title: {
    //     text: 'Reps',
    //   },
    //   // xAxis: {
    //   categories: createdArray,
    // },
    // yAxis: {
    //   title: {
    //     text: 'Fruit eaten',
    //   },
    // },
    //   series: [{
    //     name: 'Reps',
    //     data: chartData,
    //   }],
    // });
    //   });
    // });


    // /**
    //  * In the chart render event, add icons on top of the circular shapes
    //  */
    function renderIcons() {
      // Cardio icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR
        - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2,
      );

      // Legs icon
      if (!this.series[1].icon) {
        this.series[1].icon = this.renderer.path(
          ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8],
        )
          .attr({
            stroke: '#ffffff',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }
      this.series[1].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR
        - (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2,
      );

      // Arms icon
      if (!this.series[2].icon) {
        this.series[2].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8],)
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[2].group);
      }

      this.series[2].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR
        - (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2,
      );

      // Chest icon
      if (!this.series[3].icon) {
        this.series[3].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8],)
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[3].group);
      }

      this.series[3].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[3].points[0].shapeArgs.innerR
        - (this.series[3].points[0].shapeArgs.r - this.series[3].points[0].shapeArgs.innerR) / 2,
      );
    }

    Highcharts.chart('container', {

      chart: {
        type: 'solidgauge',
        height: '110%',
        events: {
          render: renderIcons,
        },
      },

      title: {
        text: 'Activity',
        style: {
          fontSize: '24px',
        },
      },

      tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
          fontSize: '16px',
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner(labelWidth) {
          return {
            x: (this.chart.chartWidth - labelWidth) / 2,
            y: (this.chart.plotHeight / 2) + 15,
          };
        },
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Cardio
          outerRadius: '112%',
          innerRadius: '88%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Legs
          outerRadius: '87%',
          innerRadius: '63%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Arms
          outerRadius: '62%',
          innerRadius: '38%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        },
        { // Track for Arms
          outerRadius: '37%',
          innerRadius: '13%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[3])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }],
      },

      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false,
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: true,
        },
      },

      series: [{
        name: 'Cardio',
        data: [{
          color: Highcharts.getOptions().colors[0],
          radius: '112%',
          innerRadius: '88%',
          y: cardiopercent,
        }],
      }, {
        name: 'Legs',
        data: [{
          color: Highcharts.getOptions().colors[1],
          radius: '87%',
          innerRadius: '63%',
          y: legspercent,
        }],
      }, {
        name: 'Arms',
        data: [{
          color: Highcharts.getOptions().colors[2],
          radius: '62%',
          innerRadius: '38%',
          y: armspercent,
        }],
      },
      {
        name: 'Chest',
        data: [{
          color: Highcharts.getOptions().colors[3],
          radius: '37%',
          innerRadius: '13%',
          y: chestpercent,
        }],
      }],
    });
  });
});
