<svelte:head>
	<title>Aquery | Home</title>
</svelte:head>

<script>
  import { data } from "../stores.js";
  import Nav from "../components/Nav.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import NewButton from "../components/NewButton.svelte";
  import Container from "../components/Container.svelte";
  import SortButton from "../components/SortButton.svelte";
  import Modal, { openModal } from "../components/Modal.svelte";

  let sdata;

  data.subscribe(value => {
    sdata = value;
  });
</script>

<style>
  .cont {
    gap: 1rem;
    display: flex;
    margin: 1rem 0;
  }
</style>

<Nav />
<div class="cont">
  <Container />
  <Sidebar>
    <NewButton func={openModal}>
      <i class="bi bi-blockquote-left"></i> New Forum
    </NewButton>
    <SortButton func={() => data.set(sdata.sort((a, b) => b.members - a.members))}>
      <i class="bi bi-stars"></i> Popular Forums
    </SortButton>
    <SortButton func={() => data.set(sdata.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))}>
      <i class="bi bi-layer-backward"></i> Latest Forums
    </SortButton>
    <SortButton func={() => data.set(sdata.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()))}>
      <i class="bi bi-layer-forward"></i> Old Forums
    </SortButton>
  </Sidebar>
</div>
<Modal>
  <p>Create Forum Form</p>
</Modal>