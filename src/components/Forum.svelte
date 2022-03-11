<script>
  import tooltip from "../tooltip.js";
  import { link } from "svelte-spa-router";

  export let forum_data = undefined;

  let props = {
    content: "No. of People who are following this forum.",
    interactive: true
  };
</script>

<style>
  a {
    flex: auto;
    width: 45%;
    color: inherit;
    text-decoration: none;
  }

  .forum {
    gap: 0.5rem;
    padding: 1rem;
    display: flex;
    border-radius: 1rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    transition: ease 1s;
    background-size: 200%;
    background-position: left;
    background-image: linear-gradient(315deg, burlywood, paleturquoise);
  }

  .forum:hover,
  .forum:focus {
    outline: none;
    background-size: 150%;
    background-position: right;
  }

  .title-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .forum small {
    font-size: 1.8ch;
  }
</style>

<a href="/forum/{forum_data.forum_id}" use:link>
  <div class="forum">
    <div class="title-cont">
      <h1>{forum_data.title}</h1>
      <small use:tooltip={props}><i class="bi bi-people-fill"></i> {forum_data.members}</small>
    </div>
    <small><b>By {forum_data.author}</b> on {forum_data.created_at}</small>
    <p>
      {forum_data.description}
    </p>
  </div>
</a>
