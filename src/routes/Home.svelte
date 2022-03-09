<svelte:head>
	<title>Aquery | Home</title>
</svelte:head>

<script>
  import { data } from "../stores.js";
  import Nav from "../components/Nav.svelte";
  import Forum from "../components/Forum.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import NewButton from "../components/NewButton.svelte";
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

  .forum-cont {
    gap: 1rem;
    width: 80%;
    display: flex;
    padding: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<Nav />
<div class="cont">
  <div class="forum-cont">
    {#each sdata as fdata}
      <Forum forum_data={fdata} />
    {/each}
  </div>
  <Sidebar>
    <NewButton func={openModal}>
      <i class="bi bi-blockquote-left"></i> New Forum
    </NewButton>
    <SortButton func={() => sdata = sdata.sort((a, b) => b.members - a.members)}>
      <i class="bi bi-stars"></i> Popular Forums
    </SortButton>
    <SortButton func={() => sdata = sdata.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())}>
      <i class="bi bi-layer-backward"></i> Latest Forums
    </SortButton>
    <SortButton func={() => sdata = sdata.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())}>
      <i class="bi bi-layer-forward"></i> Old Forums
    </SortButton>
  </Sidebar>
</div>
<Modal>
  <p>Create Forum Form</p>
</Modal>