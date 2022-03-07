<script>
  import { link, push } from "svelte-spa-router";
  import { user_data } from "../stores.js";
  let is_logged;
  let user;
  let toggle = false;

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
    background-color: #0073bc;
  }

  .small-device {
    display: none;
  }

  .nav {
    width: 60%;
    display: flex;
    position: relative;
    justify-content: space-around;
  }

  .nav a {
    color: black;
    font-size: 2ch;
    padding: 0.8rem;
    text-decoration: none;
    transition: ease 300ms;
  }

  .nav a:hover,
  .nav a:focus {
    outline: none;
    background-color: #80d0c7;
  }

  @media (max-width: 800px) {
    .large-device {
      display: none;
    }

    .small-device {
      display: block;
      background-color: deepskyblue;
    }

    .small-device .nav {
      width: 100%;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
    }

    .small-device .nav a {
      color: black;
      font-size: 2ch;
      padding: 0.8rem;
      text-decoration: none;
      transition: ease 300ms;
    }

    .small-device .nav a:hover,
    .small-device .nav a:focus {
      outline: none;
      font-size: 2.2ch;
      color: aliceblue;
      background-color: transparent;
    }

    .small-device button {
      border: none;
      font-size: 2ch;
      padding: 0.8rem;
      background: transparent;
    }

    .small-device button:hover,
    .small-device button:focus {
      outline: none;
      cursor: pointer;
      color: aliceblue;
    }

    .menu-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu-cont a {
      color: black;
      font-size: 2ch;
      padding: 0.8rem;
      text-decoration: none;
      text-decoration: none;
      transition: ease 300ms;
    }

    .menu-cont a:hover,
    .menu-cont a:focus {
      outline: none;
      font-size: 2.1ch;
      color: aliceblue;
    }
  }
</style>

<nav class="large-device">
  <div class="nav">
    <a href="/" use:link>Home</a>
    {#if is_logged}
        <a href="/profile/{user}" use:link>Profile</a>
    {/if}
    <a href="/educorner" use:link>Educorner</a>
    <a href="/market" use:link>Market</a>
    <a href="/about" use:link>About</a>
    {#if is_logged}
      <a href="/logout" use:link={{disabled: true}} on:click={logged_out}>Logout</a>
    {:else}
      <a href="/login" use:link>Login</a>
    {/if}
  </div>
</nav>

<nav class="small-device">
  <div class="nav">
    <a href="/" use:link>Home</a>
    <button on:click|preventDefault={() => toggle = !toggle}>Menu</button>
  </div>
  {#if toggle}
    <div class="menu-cont">
      {#if is_logged}
        <a href="/profile/{user}" use:link>Profile</a>
      {/if}
      <a href="/educorner" use:link>Educorner</a>
      <a href="/market" use:link>Market</a>
      <a href="/about" use:link>About</a>
      {#if is_logged}
        <a href="/logout" use:link={{disabled: true}} on:click={logged_out}>Logout</a>
      {:else}
        <a href="/login" use:link>Login</a>
      {/if}
    </div>
  {/if}
</nav>