<script>
  import { user_data } from "../stores.js";
  import { link, push } from "svelte-spa-router";

  let user;
  let is_logged;

  user_data.subscribe(value => {
    user = value;
    is_logged = value.is_logged;
  });

  if (user.is_logged == "true") {
    user = user.name;
  }

  function logged_out() {
    sessionStorage.clear();
    user_data.set({
      name: sessionStorage.getItem("name"),
      password: sessionStorage.getItem("password"),
      is_logged: sessionStorage.getItem("is_logged")
    });
    push("/");
  }
</script>

<style>
  nav {
    width: 100%;
  }

  .large-device {
    display: block;
    transition: ease 1s;
    background-size: 300%;
    background-position: left;
    background-color: burlywood;
    background-image: radial-gradient(circle at 120% 0%, #000000 2%, #ce0648 95%);
  }

  .large-device a {
    color: white;
  }

  .nav {
    width: 60%;
    display: flex;
    position: relative;
    justify-content: space-around;
  }

  .nav a {
    font-size: 2ch;
    padding: 0.7rem;
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }

  .large-device:hover {
    outline: none;
    background-position: right;
  }

  .nav a:hover,
  .nav a:focus {
    outline: none;
    border-bottom: 3px solid white;
  }
</style>

<nav class="large-device">
  <div class="nav">
    <a href="/" use:link><i class="bi bi-house-door"></i> Home</a>
    {#if is_logged}
        <a href="/profile/{user}" use:link><i class="bi bi-person-circle"></i> Profile</a>
    {/if}
    <a href="/educorner" use:link><i class="bi bi-bank"></i> Educorner</a>
    <a href="/market" use:link><i class="bi bi-graph-up-arrow"></i> Market</a>
    <a href="/about" use:link><i class="bi bi-chat-left-heart"></i> About</a>
    {#if is_logged}
      <a href="/logout" use:link={{disabled: true}} on:click={logged_out}><i class="bi bi-door-closed"></i>Logout</a>
    {:else}
      <a href="/login" use:link><i class="bi bi-door-open"></i>Login</a>
    {/if}
  </div>
</nav>