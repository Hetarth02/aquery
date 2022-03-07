<script>
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
  <a href="/#">Not found, Back to Home</a>
</div>