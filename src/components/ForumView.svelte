<script>
  import tooltip from "../tooltip.js";
  import { link } from "svelte-spa-router";
  import Nav from "../components/Nav.svelte";
  import Thread from "../components/Thread.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import NewButton from "../components/NewButton.svelte";
  import SortButton from "../components/SortButton.svelte";
  import Modal, { open_Modal, close_Modal } from "../components/Modal.svelte";

  let thread_form;
  let thread_title = undefined;
  let thread_desc = undefined;
  let props = {
    content: "No. of People who are following this forum.",
    interactive: true
  };

  function tform_submit() {
    // Create new thread, refresh data, also parse it for Github markdown flavored text
    thread_form.reset();
    close_Modal();
  }
</script>

<style>
  .nav-heading {
    padding: 1rem;
    margin-left: 1rem;
  }

  .nav-heading a {
    color: #000000aa;
    text-decoration: none;
  }

  .nav-heading a:hover,
  .nav-heading a:focus {
    text-decoration: underline;
  }

  .cont {
    gap: 1rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-evenly;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }

  form input,
  form textarea {
    width: 100%;
    padding: 0.6rem;
    margin: 0.5rem 0;
    border-radius: 0.2rem;
  }

  form textarea {
    align-self: center;
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
<h1 class="nav-heading"><a href="/" use:link>Home</a> <i class="bi bi-chevron-right"></i> Title</h1>
<div class="cont">
  <div class="thread-cont">
    {#each {length: 10} as _,i}
      <Thread {i}/>
    {/each}
  </div>
  <Sidebar>
    <NewButton func={open_Modal}>
      <i class="bi bi-blockquote-left"></i> New Thread
    </NewButton>
    <SortButton>
      <i class="bi bi-stars"></i> Popular Threads
    </SortButton>
    <SortButton>
      <i class="bi bi-layer-backward"></i> Latest Threads
    </SortButton>
    <SortButton>
      <i class="bi bi-layer-forward"></i> Old Threads
    </SortButton>
    <div class="forum-content">
      <div class="title-cont">
        <h1>Title</h1>
        <small use:tooltip={props}><i class="bi bi-people-fill"></i> 100</small>
      </div>
      <h5>By Aquery</h5>
      <p>01/01/2022</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis pariatur et
        in possimus est!
      </p>
    </div>
  </Sidebar>
</div>
<Modal>
  <h1>Create New Thread</h1>
  <form method="post" on:submit|preventDefault={tform_submit} bind:this={thread_form}>
    <input
      type="text"
      class="title"
      name="thread_title"
      placeholder="Thread Title"
      bind:value={thread_title}
      required
    />
    <textarea
      name="thread_desc"
      cols="50"
      rows="10"
      placeholder="Thread Description, You can also write in Markdown(Preferred Github flavored Markdown)"
      bind:value={thread_desc}
      required
    ></textarea>
    <div class="button-grp">
      <button type="submit"><i class="bi bi-patch-plus"></i> Create</button>
      <button type="reset"><i class="bi bi-arrow-clockwise"></i> Clear</button>
    </div>
  </form>
</Modal>