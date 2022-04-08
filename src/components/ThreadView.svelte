<script>
  import tooltip from "../tooltip.js";
  import { link } from "svelte-spa-router";
  import Nav from "../components/Nav.svelte";
  import Reply from "../components/Reply.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import NewButton from "../components/NewButton.svelte";

  let props;
  let reply_form;

  function rform_submit() {
    // Create new reply, refresh data, also parse it for Github markdown flavored text
    reply_form.reset();
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
    display: flex;
    margin: 1rem 0;
  }

  .flex-contents {
    width: 20%;
  }

  .form-contents {
    width: 50%;
  }

  .sort-cont,
  .form-cont {
    top: 0;
    gap: 1rem;
    display: flex;
    padding: 1rem;
    color: white;
    position: sticky;
    flex-direction: column;
  }

  .form-cont {
    padding: 0;
  }

  form {
    padding: 1rem;
  }

  form textarea {
    width: 100%;
    padding: 0.6rem;
    margin: 0.5rem 0;
    align-self: center;
    border-radius: 0.2rem;
  }

  .button-grp {
    width: 100%;
    display: flex;
  }

  .form-btn {
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

  .form-btn:hover,
  .form-btn:focus {
    color: white;
    background-color: #19072e;
  }

  .border {
    top: 0;
    bottom: 0;
    height: 99%;
    z-index: -5;
    margin-left: 5rem;
    position: absolute;
    border-left: 1px solid rgba(220, 20, 60, 0.8);
  }

  .question {
    padding: 1rem;
  }

  .wrapper {
    position: relative;
  }

  span button {
    opacity: 0.8;
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 2.5ch;
    background: none;
  }

  span {
    align-self: flex-start;
  }

  .reply,
  .reply-header,
  .header,
  .answer {
    display: flex;
    gap: 1rem;
  }

  .reply {
    margin: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .reply-header {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .header {
    width: 40%;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  .header img {
    width: 40px;
    border-radius: 1rem;
  }

  .header h4 a {
    font-size: 2.4ch;
    color: blueviolet;
    text-decoration: none;
  }

  .header small {
    font-size: 1.8ch;
  }

  .answer {
    padding: 1rem;
    width: 100%;
    justify-content: space-between;
  }

  .answer p {
    width: 80%;
  }
</style>

<Nav />

<h1 class="nav-heading"><a href="/forum/1" use:link>Title</a> <i class="bi bi-chevron-right"></i> Question</h1>

<div class="cont">
  <div class="flex-contents">
    <div class="sort-cont">
      <span use:tooltip={{content: "Upvote this thread", delay: [1000, null]}}>
        <button><i class="bi bi-caret-up"></i> 20</button>
      </span>
      <span use:tooltip={{content: "Downvote this thread", delay: [1000, null],placement: 'bottom'}}>
        <button><i class="bi bi-caret-down"></i> 5</button>
      </span>
      <span use:tooltip={{content: "Add to Favourites!", delay: [500, null],placement: 'top'}}>
        <button><i class="bi bi-bookmark-heart"></i></button>
      </span>
    </div>
  </div>

  <div>
    <div class="reply question">
      <div class="reply-header">
        <div class="header">
          <img src="	https://via.placeholder.com/60" alt="Img" />
          <h4><a href="/profile/username">Username</a></h4>
          <small>2 seconds ago</small>
        </div>
      </div>
      <div class="answer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit voluptas
          quam laudantium eum voluptatum quia. Facilis ullam voluptatem quasi eius beatae
          vitae laborum nihil dignissimos. Eos suscipit ducimus illum!
        </p>
      </div>
    </div>

    <h1 style="text-align: center; font-size: 4ch;">Answers</h1>

    <div class="wrapper">
      <div class="reply-cont">
        {#each {length: 10} as _,i}
          <Reply {props} />
        {/each}
      </div>
      <div class="border"></div>
    </div>
  </div>

  <div class="form-contents">
    <div class="sort-cont form-cont">
      <form method="post" on:submit|preventDefault={rform_submit} bind:this={reply_form}>
        <textarea
          name="reply_desc"
          cols="50"
          rows="10"
          placeholder="Your reply, You can also write in Markdown(Preferred Github flavored Markdown)"
          required
        ></textarea>
        <div class="button-grp">
          <button class="form-btn" type="submit"><i class="bi bi-patch-plus"></i> Reply</button>
          <button class="form-btn" type="reset"><i class="bi bi-arrow-clockwise"></i> Clear</button>
        </div>
      </form>
    </div>
  </div>
</div>