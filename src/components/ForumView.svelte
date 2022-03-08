<script>
  import Nav from "../components/Nav.svelte";
  import Thread from "../components/Thread.svelte";
  import { link, location } from "svelte-spa-router";
  import Sidebar from "../components/Sidebar.svelte";
  import NewButton from "../components/NewButton.svelte";
  import SortButton from "../components/SortButton.svelte";
  import Modal, { openModal } from "../components/Modal.svelte";
</script>

<style>
  .cont {
    gap: 1rem;
    margin: 1rem 0;
    display: flex;
  }

  .forum-content {
    color: black;
    padding: 0.8rem;
    border-radius: 1rem;
    margin: 0 0 0 0.3rem;
    background-color: white;
    border: 1px solid #d3d3d3;
  }

  .forum-content p {
    margin-bottom: 0.6rem;
  }

  .title-cont {
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    justify-content: space-between;
  }

  .title-cont h1 {
    font-size: 2.8ch;
  }

  .title-cont small {
    font-size: 1.9ch;
  }
</style>

<Nav />
<div class="cont">
  <Sidebar>
    <div class="forum-content">
      <div class="title-cont">
        <h1>Title</h1>
        <small><i class="bi bi-people-fill"></i> 100</small>
      </div>
      <h5>By Aquery</h5>
      <p>01/01/2022</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis pariatur et
        in possimus est!
      </p>
    </div>
    <SortButton>
      <i class="bi bi-stars"></i> Popular Forums
    </SortButton>
    <SortButton>
      <i class="bi bi-layer-backward"></i> Latest Forums
    </SortButton>
    <SortButton>
      <i class="bi bi-layer-forward"></i> Old Forums
    </SortButton>
  </Sidebar>
  <div class="thread-cont">
    {#each {length: 10} as _,i}
      <Thread {i}/>
    {/each}
  </div>
  <Sidebar>
    <NewButton func={openModal}>
      <i class="bi bi-blockquote-left"></i> New Thread
    </NewButton>
  </Sidebar>
</div>
<Modal>
  <p>Create Thread Form</p>
</Modal>