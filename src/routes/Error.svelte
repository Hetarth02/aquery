<svelte:head>
	<title>Aquery | Error</title>
</svelte:head>

<script>
  import { link } from "svelte-spa-router";
  import Nav from "../components/Nav.svelte";
</script>

<style>
  div {
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  div p {
    opacity: 0.6;
    margin: 6rem 0;
    font-size: 30ch;
    margin-bottom: 0;
    color: chocolate;
    background-clip: text;
    background-color: chocolate;
    background: radial-gradient(circle at 0 50%, chocolate, #283e63cc 70%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  div a {
    color: darkorchid;
    text-decoration: none;
  }

  div a:hover,
  div a:focus {
    text-decoration: underline;
  }
</style>

<Nav />
<div>
  <p>404</p>
  <a href="/" use:link>Not found, Back to Home</a>
</div>