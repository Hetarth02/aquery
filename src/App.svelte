<script>
  import routes from "./routes";
  import Router from "svelte-spa-router";
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body) {
    width: 100%;
    height: 100%;
  }

  :global(body) {
    display: box;
    line-height: 1.5;
    background-color: #f7f8fc;
    font-family: sans-serif;
  }
</style>

<Router {routes} restoreScrollState={true} />