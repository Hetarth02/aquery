<script>
  import { link, location } from "svelte-spa-router";
  import Nav from "../components/Nav.svelte";
</script>

<style>
  a {
    color: inherit;
    cursor: default;
    text-decoration: none;
  }

  .cont {
    gap: 1rem;
    margin: 1rem 0;
    display: flex;
  }

  .flex-contents {
    width: 20%;
  }

  .new-thread-cont,
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

  .thread-btn {
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

  .thread-btn i {
    top: 1.7px;
    font-size: 2.1ch;
    position: relative;
    margin-right: 0.2rem;
  }

  .thread-btn:hover,
  .thread-btn:focus {
    outline: none;
    border-color: rgb(50, 138, 241);
    background-color: rgb(39, 121, 189);
    box-shadow: 0 0 20px rgb(0 117 255 / 45%);
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
    color: rgb(50, 138, 241);
    background-color: rgb(236, 243, 252);
    border: 1px solid rgb(108, 178, 235);
  }

  .thread {
    gap: 0.5rem;
    display: flex;
    border-radius: 1rem;
    margin-bottom: 0.8rem;
    transition: ease 300ms;
    background-color: rgb(236, 243, 252);
  }

  .thread:hover,
  .thread:focus {
    outline: none;
    box-shadow: 0 0 12px 0px rgb(108, 178, 235);
  }

  .user-img {
    padding: 0.8rem;
  }

  .user-img img {
    padding: 0.5rem;
    border-radius: 1rem;
  }

  .thread-content {
    display: flex;
    padding: 1rem 0.5rem;
    flex-direction: column;
  }

  .thread-row {
    width: 100%;
    gap: 0.2rem;
    display: flex;
    justify-content: space-between;
  }

  .thread-title {
    font-size: 2.1ch;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .thread-stats {
    width: 25%;
    gap: 0.5rem;
    display: flex;
    font-size: 1.8ch;
    justify-content: flex-end;
    color: rgb(120, 144, 156);
  }

  .thread-content-row {
    font-size: 1.8ch;
    margin-bottom: 0.3rem;
  }

  .thread-row-last {
    align-items: center;
    justify-content: space-between;
  }

  .thread-row-last h3 {
    font-size: 1.8ch;
    font-weight: normal;
    color: rgb(87 108 118);
  }

  .icon-cont span button {
    opacity: 0.8;
    border: none;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.9ch;
    background: none;
  }
</style>

<Nav />
<div class="cont">
  <div class="flex-contents">
    <div class="new-thread-cont">
      <button class="thread-btn">
        <i class="bi bi-blockquote-left"></i> New Thread
      </button>
    </div>
  </div>
  <div class="thread-cont">
    {#each {length: 10} as _,i}
      <a href="{$location}/thread/{i}" use:link>
        <div class="thread">
          <div class="user-img">
              <img src="https://via.placeholder.com/60" alt="Image60x60" />
          </div>
          <div class="thread-content">
            <div class="thread-row">
              <div class="thread-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                recusandae.
              </div>
              <div class="thread-stats">
                <span><i class="bi bi-eye-fill"></i> 10</span>
                <span><i class="bi bi-chat-fill"></i> 10</span>
              </div>
            </div>
            <div class="thread-content-row">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                iure beatae numquam? Asperiores ipsam obcaecati eaque dolorum
                dolores id facilis?
              </p>
            </div>
            <div class="thread-row thread-row-last">
              <h3>Author posted on 01/01/2000</h3>
              <div class="icon-cont">
                  <span>
                    <button><i class="bi bi-caret-up"></i> 20</button>
                  </span>
                  <span>
                      <button><i class="bi bi-caret-down"></i> 5</button>
                  </span>
                  <span>
                      <button><i class="bi bi-bookmark-heart"></i></button>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
  <div class="flex-contents">
    <div class="sort-cont">
      <button class="sort-btn"><i class="bi bi-stars"></i> Popular Threads</button>
      <button class="sort-btn">
        <i class="bi bi-layer-backward"></i> Latest Threads
      </button>
      <button class="sort-btn">
        <i class="bi bi-layer-forward"></i> Old Threads
      </button>
    </div>
  </div>
</div>