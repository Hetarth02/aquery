<script>
  import Nav from "../components/Nav.svelte";
  import Radar from "../charts/Radar.svelte";

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
        data: [0, 59, 90, 81, 56, 55, 40],
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
    scales: {
      r: {
        pointLabels: {
          color: "burlywood"
        },
        angleLines: {
          color: "gray"
        },
        grid: {
          display: false,
          color: "white"
        },
        ticks: {
          display: false,
          backdropColor: "black",
          color: "aqua"
        }
      }
    },
    plugins: {
      tooltip: {
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black"
      },
      title: {
        display: true,
        color: "yellow",
        text: "Chart.js Radar Chart"
      }
    }
  };
  let radarConfig = {
    data: radar_data,
    options: radar_options
  };
</script>

<style>
  .cont {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
  }

  .user {
    gap: 1rem;
    width: 40%;
    padding: 1rem;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  .profile {
    display: flex;
    padding: 1rem;
    color: black;
    border-radius: 1rem;
    align-items: center;
    flex-direction: column;
    transition: ease 500ms;
    background-color: #0073bc;
    background-image: linear-gradient(315deg, #0073bc 0%, #80d0c7 100%);
  }

  .profile:hover {
    box-shadow: 0 0 10px 1px grey;
  }

  .pic {
    padding: 1rem;
  }

  .pic img {
    width: 100px;
    border-radius: 4rem;
  }

  .user-info {
    padding: 1rem;
    text-align: center;
  }

  .user-info h3 {
    padding-top: 1rem;
  }

  .border {
    height: 100%;
    border-left: 1px solid black;
  }

  .pro-cont {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .other {
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    align-items: flex-end;
    justify-self: flex-end;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .graph {
    height: 100%;
    padding: 1rem;
    display: flex;
    border-radius: 1rem;
    flex-direction: column;
    transition: ease 500ms;
    background-color: black;
  }

  .graph .info {
    color: white;
  }

  .info {
    align-self: flex-end;
  }

  .user-graph {
    width: inherit;
    height: inherit;
  }

  .trophy-cont {
    gap: 1rem;
    width: 60%;
    height: 40rem;
    padding: 2rem;
    display: flex;
    border-radius: 1rem;
    background-color: white;
    justify-content: space-evenly;
    box-shadow: 0 0 10px 1px grey;
  }

  .col {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .trophies {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: flex-start;
  }

  hr {
    width: 100%;
  }

  .trophy {
    width: 110px;
    height: 110px;
    display: flex;
    flex: 1 1 auto;
    padding: 0.5rem;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    background-color: rgb(0 115 188 / 10%);
  }

  .trophy img {
    width: 70px;
    padding: 0.5rem;
    border-radius: 4rem;
  }

  .trophy small {
    padding: 0.3rem 0;
  }
</style>

<Nav />
<div class="cont">
  <div class="user">
    <div class="profile">
      <div class="info">Icon</div>
      <div class="pro-cont">
        <div class="pic">
          <img
            src="https://avatars.githubusercontent.com/u/80420115?v=4"
            alt="profile"
          />
        </div>
        <div class="border"></div>
        <div class="user-info">
            <h1>Username</h1>
            <h3>Full Name</h3>
        </div>
        <div class="other">
          <p>Qcoins: 20</p>
          <p>Points: 10000</p>
        </div>
      </div>
    </div>
    <div class="graph">
      <div class="info">Icon</div>
      <div class="user-graph">
        <Radar {...radarConfig}/>
      </div>
    </div>
  </div>
  <div class="trophy-cont">
    <div class="col">
        <h1>Achieved</h1>
        <div class="trophies">
          {#each {length: 50} as _}
            <div class="trophy">
              <div class="img"></div>
              <img src="https://via.placeholder.com/70" alt="Icon" />
              <hr />
              <small>Name</small>
            </div>
          {/each}
        </div>
    </div>
    <div class="border"></div>
    <div class="col">
      <h1>Remaining</h1>
      <div class="trophies">
        {#each {length: 50} as _}
          <div class="trophy">
            <div class="img"></div>
            <img src="https://via.placeholder.com/70" alt="Icon" />
            <hr />
            <small>Name</small>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>