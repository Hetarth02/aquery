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
  import Modal, { open_Modal, close_Modal } from "../components/Modal.svelte";

  let sdata;
  let forum_form;

  data.subscribe(value => {
    sdata = value;
  });

  function form_submit() {
    forum_form.reset();
    close_Modal();
  }
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

  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }

  form input {
    padding: 0.6rem;
    margin: 0.5rem 0;
    border-radius: 0.2rem;
  }

  .desc {
    width: 100%;
  }

  .button-grp {
    width: 100%;
    display: flex;
  }

  button {
    width: 80%;
    border: none;
    outline: none;
    margin: 1rem;
    cursor: pointer;
    padding: 0.6rem;
    font-size: 1.8ch;
    border-radius: 5px;
    transition: ease 300ms;
    background-color: goldenrod;
    box-shadow: 0 1px 1px rgb(18 21 26 / 8%);
  }

  button:hover,
  button:focus {
    color: white;
    background-color: #19072e;
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
    <NewButton func={open_Modal}>
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
  <h1>Create New Forum</h1>
  <form method="post" on:submit|preventDefault={form_submit} bind:this={forum_form}>
    <input
      type="text"
      class="title"
      name="forum_title"
      placeholder="Forum Title"
      required
    />
    <input
      type="text"
      class="desc"
      name="forum_desc"
      placeholder="Forum Description"
      required
    />
    <div class="button-grp">
      <button type="submit"><i class="bi bi-patch-plus"></i> Create</button>
      <button type="reset"><i class="bi bi-arrow-clockwise"></i> Clear</button>
    </div>
  </form>
</Modal>