<script>
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Container from "../components/Container.svelte";
</script>

<style>
  .cont {
    gap: 1rem;
    display: flex;
    margin: 1rem 0;
  }

  @media (max-width: 500px) {
    div {
      flex-direction: column;
    }
  }
</style>

<Nav />
<div class="cont">
  <Container />
  <Sidebar />
</div>