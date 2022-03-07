<script>
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Container from "../components/Container.svelte";
</script>

<style>
  div {
    display: flex;
    margin: 1rem 0 0 1rem;
    flex-direction: row-reverse;
  }

  @media (max-width: 500px) {
    div {
      flex-direction: column;
    }
  }
</style>

<Nav />
<div>
  <Sidebar />
  <Container />
</div>