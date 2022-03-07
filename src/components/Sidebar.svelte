<script>
  import { data } from "../stores.js";
  let sdata;

  data.subscribe(value => {
    sdata = value;
  });
</script>

<style>
  .flex-contents {
    width: 20%;
  }

  .sort-cont {
    top: 0;
    gap: 1rem;
    display: flex;
    padding: 1rem;
    color: white;
    position: sticky;
    margin: 1rem 0.5rem;
    flex-direction: column;
  }

  .sort-btn {
    padding: 0.6rem;
    font-size: 1.6ch;
    text-align: center;
    border-radius: 1rem;
    transition: ease 0.5s;
    background: transparent;
    background-color: white;
    color: rgba(120, 144, 156);
    border: 1px solid rgb(50, 138, 241);
  }

  .sort-btn:hover,
  .sort-btn:focus {
    outline: none;
    color: black;
    background-color: rgb(236, 243, 252);
    border: 1px solid rgb(108, 178, 235);
  }

  .forum-btn {
    width: 100%;
    color: white;
    padding: 0.6rem;
    font-size: 1.8ch;
    font-weight: bold;
    border-radius: 1rem;
    transition: ease 500ms;
    background-color: rgb(50, 138, 241);
    border: 1px solid rgb(50, 138, 241);
    box-shadow: 0 0 15px rgb(50 138 241 / 45%);
  }

  .forum-btn i {
    top: 1.7px;
    font-size: 2.1ch;
    position: relative;
    margin-right: 0.2rem;
  }

  .forum-btn:hover,
  .forum-btn:focus {
    outline: none;
    border-color: rgb(50, 138, 241);
    background-color: rgb(39, 121, 189);
    box-shadow: 0 0 20px rgb(0 117 255 / 45%);
  }
</style>

<div class="flex-contents">
  <div class="sort-cont">
    <button class="forum-btn">
      <i class="bi bi-blockquote-left"></i> New Thread
    </button>
    <button class="sort-btn" on:click={() => data.set(sdata.sort((a, b) => b.members - a.members))}>
      <i class="bi bi-stars"></i> Popular Threads
    </button>
    <button class="sort-btn" on:click={() => data.set(sdata.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))}>
      <i class="bi bi-layer-backward"></i> Latest Threads
    </button>
    <button class="sort-btn" on:click={() => data.set(sdata.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()))}>
      <i class="bi bi-layer-forward"></i> Old Threads
    </button>
  </div>
</div>