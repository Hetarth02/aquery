<script>
  import Chart from "chart.js/auto";
  import { afterUpdate } from "svelte";
  let ctx;
  let myChart;
  export let data = {};
  export let options = {
    responsive: true,
    maintainAspectRatio: false
  };
  export let plugins = {};
  export let config = {
    type: "pie",
    data: data,
    options: options,
    plugins: plugins
  };
  async function createChart() {
    myChart ? myChart.update() : (myChart = new Chart(ctx, config));
  }
  afterUpdate(createChart);
</script>

<canvas width="100" height="100" bind:this={ctx}></canvas>