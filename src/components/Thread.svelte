<script>
  import tooltip from "../tooltip.js";
  import { link, location } from "svelte-spa-router";

  export let i = undefined;
</script>

<style>
  a {
    color: inherit;
    cursor: default;
    text-decoration: none;
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
    width: 50rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  .thread-content-row p {
    width: 65rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 1rem 1rem 1rem 0;
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
					<span use:tooltip={{content: "Views", delay: [1000, null]}}><i class="bi bi-eye-fill"></i> 10</span>
					<span use:tooltip={{content: "Comments", delay: [1000, null]}}><i class="bi bi-chat-fill"></i> 10</span>
				</div>
			</div>
			<div class="thread-content-row">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At culpa qui laborum blanditiis labore minus sed numquam adipisci, ducimus molestias consequuntur asperiores nostrum laudantium nulla rem perspiciatis nobis voluptatum enim?
				</p>
			</div>
			<div class="thread-row thread-row-last">
				<h3>Author posted on 01/01/2000</h3>
				<div class="icon-cont">
					<span use:tooltip={{content: "Upvote", delay: [1000, null]}}>
						<button><i class="bi bi-caret-up"></i> 20</button>
					</span>
					<span use:tooltip={{content: "Downvote", delay: [1000, null],placement: 'bottom'}}>
						<button><i class="bi bi-caret-down"></i> 5</button>
					</span>
					<span use:tooltip={{content: "Add to Favourites!", delay: [500, null],placement: 'top'}}>
						<button><i class="bi bi-bookmark-heart"></i></button>
					</span>
				</div>
			</div>
		</div>
	</div>
</a>