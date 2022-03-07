<script>
  import { link } from "svelte-spa-router";
  export let forum_data = undefined;
</script>

<style>
  .forum {
    width: 20rem;
    color: aqua;
    flex: 1 1 auto;
    padding: 0.7rem;
    transition: ease 1s;
    background-color: rgb(84, 84, 84);
  }

  .forum a {
    color: inherit;
    text-decoration: none;
  }

  .forum:hover {
    border-radius: 1rem;
    color: rgb(3, 32, 32);
    background-color: rgb(84 84 84 / 70%);
  }

  .forum-data {
    padding: 1rem;
  }

  .forum-data h1 {
    font-size: 4ch;
  }

  .forum-data h3,
  .forum-data h5 {
    opacity: 0.7;
    font-weight: 600;
  }

  .forum-data h3 {
    font-size: 1.8ch;
    margin: 0.2rem 0 1rem 0;
  }
</style>

<div class="forum" >
  <a href="/forum/{forum_data.forum_id}" use:link>
    <div class="forum-data">
      <h1>{forum_data.title}</h1>
      <h5>By {forum_data.author}</h5>
      <h3>Members: {forum_data.members}</h3>
      <h3>{forum_data.created_at}</h3>
      <p>
        {forum_data.description}
      </p>
    </div>
  </a>
</div>