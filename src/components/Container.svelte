<script>
  import Forum from "./Forum.svelte";
  import { data } from "../stores.js";

  let stored_data = undefined;

  data.subscribe(value => {
    stored_data = value;
  });
</script>

<style>
  .forum-cont {
    gap: 1rem;
    width: 80%;
    display: flex;
    padding: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<div class="forum-cont">
  {#each stored_data as fdata}
    <Forum forum_data={fdata} />
  {/each}
</div>