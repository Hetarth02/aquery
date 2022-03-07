<script>
  import Nav from "../components/Nav.svelte";
  import Bar from "../charts/Bar.svelte";
  import Pie from "../charts/Pie.svelte";
  import Radar from "../charts/Radar.svelte";
  import Line from "../charts/Line.svelte";
  let bar_data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "% of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 2
      }
    ]
  };
  let bar_options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true
      },
      y: {
        stacked: true,
        beginAtZero: true
      }
    }
  };
  let barConfig = {
    data: bar_data,
    options: bar_options
  };
  let pie_data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)"
        ],
        hoverOffset: 4
      }
    ]
  };
  let pie_options = {
    responsive: true,
    maintainAspectRatio: false
  };
  let pieConfig = {
    data: pie_data,
    options: pie_options
  };
  let radar_data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff"
      }
    ]
  };
  let radar_options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Radar Chart"
      }
    }
  };
  let radarConfig = {
    data: radar_data,
    options: radar_options
  };
  let line_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0
      }
    ]
  };
  let line_options = {
    responsive: true,
    maintainAspectRatio: false
  };
  let lineConfig = {
    data: line_data,
    options: line_options
  };
  function myfunc() {
    for (let i = 0; i < 10; i++) {
      line_data.datasets[0].data.push(Math.random() * 100);
      line_data.labels.push("Aug");
      lineConfig = lineConfig;
    }
  }
  let value = 0;
</script>

<style>
  .card-cont {
    gap: 1rem;
    display: flex;
    width: 80%;
    align-items: center;
    padding: 1rem;
  }

  .card {
    width: 50%;
    padding: 1rem;
    color: black;
    border-radius: 1rem;
    background-color: #0073bc;
    background-image: linear-gradient(315deg, #0073bc 0%, #80d0c7 100%);
  }

  .card small {
    opacity: 0.7;
  }

  .card h1 {
    opacity: 0.9;
    font-size: 3ch;
    padding: 0.6rem 0;
  }

  .graphs {
    width: 100%;
    padding: 1rem;
    height: 25rem;
  }

  .line {
    width: 100%;
    padding: 1rem;
    height: 25rem;
  }

  .graph-cont {
    display: flex;
  }

  .bar-cont {
    width: 70%;
  }

  .pie-cont {
    width: 30%;
  }

  .line-cont {
    margin: 1rem;
    display: flex;
    align-items: center;
  }

  .button-cont {
    gap: 1rem;
    width: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button-cont button {
    border: none;
    color: white;
    font-size: 2ch;
    padding: 0.8rem;
    border-radius: 1rem;
    transition: ease 500ms;
    background-color: darkorchid;
  }

  .button-cont :is(button:hover, button:focus) {
    color: black;
    background-color: chocolate;
  }
</style>

<Nav />
<div class="cont">
    <div class="card-cont">
      <div class="card">
        <small>Yesterday's Price</small>
        <h1>100 points = 1 Qcoin</h1>
      </div>
      <div class="card">
        <small>Today's Price</small>
        <h1>100 points = 1 Qcoin</h1>
      </div>
      <div class="card">
        <small>Tomorrow's Prediction</small>
        <h1>100 points = 1 Qcoin</h1>
      </div>
    </div>
    <div class="line-cont">
      <div class="graphs line">
        {#if value == 1}
          <p>Graph 1</p>
          <Line {...lineConfig}/>
        {:else if value == 2}
          <p>Graph 2</p>
          <Line {...lineConfig}/>
        {:else}
          <p>Graph 3</p>
          <Line {...lineConfig}/>
        {/if}
        <!-- <button on:click={myfunc}>click</button> -->
      </div>
        <div class="button-cont">
          <button on:click={() => {value = 1}}>Graph 1</button>
          <button on:click={() => {value = 2}}>Graph 2</button>
          <button on:click={() => {value = 0}}>Graph 3</button>
        </div>
    </div>
    <div class="graph-cont">
      <div class="bar-cont">
        <div class="graphs bar">
          <Bar {...barConfig}/>
        </div>
        <div class="graphs bar">
          <Bar {...barConfig}/>
        </div>
      </div>
      <div class="pie-cont">
        <div class="graphs pie">
          <Pie {...pieConfig}/>
        </div>
        <div class="graphs radar">
          <Radar {...radarConfig}/>
        </div>
      </div>
    </div>
</div>