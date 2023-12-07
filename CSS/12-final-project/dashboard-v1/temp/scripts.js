<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <script>

  const options = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
  const chart = new ApexCharts(document.querySelector("#sales-figures"), options);
  chart.render();
</script>
<script>
  const pullBar = document.querySelector('#pull-bar')
  pullBar.addEventListener('click', e => {
    document.querySelector('#configuration').classList.toggle('active')
  })
</script>
<script>
  const progressOptions = {
      chart: {
        height: 280,
        type: "radialBar"
      },

      series: [67],

      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%"
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "13px"
            },
            value: {
              color: "#111",
              fontSize: "30px",
              show: true
            }
          }
        }
      },

      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    };

    const progressChart = new ApexCharts(document.querySelector("#artemis-progress"), progressOptions);

    progressChart.render();

</script>