<script>
  import { data } from "../stores.js";
  let sdata;

  data.subscribe(value => {
    sdata = value;
  });
</script>

<style>
  div {
    width: 20%;
    margin: 1rem;
    background-color: black;
  }

  .side-bar {
    top: 0;
    gap: 1rem;
    width: 100%;
    height: auto;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    position: sticky;
    color: burlywood;
    align-items: center;
    align-self: flex-start;
    flex-direction: column;
  }

  .side-bar button {
    border: none;
    font-size: 2ch;
    padding: 0.4rem;
    color: burlywood;
    text-align: center;
    transition: ease 0.5s;
    text-decoration: none;
    background: transparent;
  }

  .side-bar button:hover,
  .side-bar button:focus {
    outline: none;
    font-size: 2.6ch;
  }
</style>

<div>
  <div class="side-bar">
    <!-- Check if user logged in then only let them create forum -->
    <button>Create Forum</button>
    <h3>Sort by:</h3>
    <button on:click={() => data.set(sdata.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))}>Latest</button>
    <button on:click={() => data.set(sdata.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()))}>Oldest</button>
    <button on:click={() => data.set(sdata.sort((a, b) => b.members - a.members))}>Popular</button>
  </div>
</div>