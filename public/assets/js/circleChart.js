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
    const legspercent = (legscount / 12) * 100;

    let armscount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'arms') { armscount++; }
    }
    const armspercent = ((armscount / 12) * 100);

    let chestcount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'chest') { chestcount++; }
    }
    const chestpercent = ((chestcount / 12) * 100);

    let cardiocount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'cardio') { cardiocount++; }
    }
    const cardiopercent = ((cardiocount / 12) * 100);

    let backcount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'back') { backcount++; }
    }
    const backpercent = ((backcount / 12) * 100);

    let shouldercount = 0;
    for (i = 0; i < data.length; ++i) {
      const activitydate = new Date(data[i].createdAt);
      if (today.getMonth() === activitydate.getMonth() && data[i].bodypart === 'shoulders') { shouldercount++; }
    }
    const shoulderpercent = ((shouldercount / 12) * 100);

    function renderIcons() {
      // Shoulder icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[0].group);
      }
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR
        - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2,
      );
      // Back icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[0].group);
      }
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR
        - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2,
      );
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
          .add(this.series[0].group);
      }
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR
        - (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2,
      );

      // Legs icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(
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
      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR
        - (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2,
      );

      // Arms icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8],)
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
        this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR
        - (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2,
      );

      // Chest icon
      if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8],)
          .attr({
            stroke: '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            zIndex: 10,
          })
          .add(this.series[0].group);
      }

      this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[3].points[0].shapeArgs.innerR
        - (this.series[3].points[0].shapeArgs.r - this.series[3].points[0].shapeArgs.innerR) / 2,
      );
    }

    Highcharts.chart('circleContainer', {

      chart: {
        type: 'solidgauge',
        height: '110%',
        backgroundColor: '#f0efef',
        events: {
          render: renderIcons,
        },
      },

      title: {
        text: 'Monthly Goals',
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
          outerRadius: '108%',
          innerRadius: '93%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Cardio
          outerRadius: '92%',
          innerRadius: '77%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Cardio
          outerRadius: '76%',
          innerRadius: '61%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Legs
          outerRadius: '60%',
          innerRadius: '45%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[3])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        }, { // Track for Arms
          outerRadius: '44%',
          innerRadius: '29%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[4])
            .setOpacity(0.3)
            .get(),
          borderWidth: 0,
        },
        { // Track for Arms
          outerRadius: '28%',
          innerRadius: '13%',
          backgroundColor: Highcharts.color(Highcharts.getOptions().colors[5])
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
        name: 'Shoulders',
        data: [{
          color: Highcharts.getOptions().colors[0],
          radius: '108%',
          innerRadius: '93%',
          y: shoulderpercent,
        }],
      }, {
        name: 'Back',
        data: [{
          color: Highcharts.getOptions().colors[1],
          radius: '92%',
          innerRadius: '77%',
          y: backpercent,
        }],
      }, {
        name: 'Cardio',
        data: [{
          color: Highcharts.getOptions().colors[2],
          radius: '76%',
          innerRadius: '61%',
          y: cardiopercent,
        }],
      }, {
        name: 'Legs',
        data: [{
          color: Highcharts.getOptions().colors[3],
          radius: '60%',
          innerRadius: '45%',
          y: legspercent,
        }],
      }, {
        name: 'Arms',
        data: [{
          color: Highcharts.getOptions().colors[4],
          radius: '44%',
          innerRadius: '29%',
          y: armspercent,
        }],
      },
      {
        name: 'Chest',
        data: [{
          color: Highcharts.getOptions().colors[5],
          radius: '28%',
          innerRadius: '13%',
          y: chestpercent,
        }],
      }],
    });
  });
});
