<script>
  import { data } from "../stores.js";
  import Forum from "./Forum.svelte";
  export let stored_data = undefined;
  data.subscribe(value => {
    stored_data = value;
  });
</script>

<style>
  div {
    gap: 1rem;
    width: 80%;
    display: flex;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    div {
      margin: 2rem;
    }
  }
</style>

<div>
  {#each stored_data as fdata}
    <Forum forum_data={fdata} />
  {/each}
</div>