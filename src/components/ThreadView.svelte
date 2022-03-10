<script>
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
</script>

<style>
  p {
    color: black;
  }
</style>

<Nav />
<div>
  <Sidebar>
    <p>Sidebar Content</p>
  </Sidebar>
</div>