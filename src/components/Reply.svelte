<script>
  import tooltip from "../tooltip.js";
  // export let props;
</script>

<style>
  .reply,
  .reply-header,
  .header,
  .answer,
  .btn-cont {
    gap: 1rem;
    display: flex;
  }

  .reply {
    margin: 1rem;
    padding: 1rem;
    margin-bottom: 3rem;
    border-radius: 1rem;
    flex-direction: column;
    transition: ease 300ms;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .reply:hover,
  .reply:focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .reply-header {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
    width: 100%;
    padding: 1rem;
    justify-content: space-between;
  }

  .answer p {
    width: 80%;
  }

  .btn-cont {
    flex-direction: column;
  }

  span button {
    opacity: 0.8;
    border: none;
    font-size: 2ch;
    padding: 0 1rem;
    cursor: pointer;
    background: none;
  }
</style>

<div class="reply">
  <div class="reply-header">
    <div class="header">
      <img src="https://via.placeholder.com/60" alt="Img" />
      <h4><a href="/profile/username">Username</a></h4>
      <small>2 seconds ago</small>
    </div>
    <div class="solution">Solution</div>
  </div>
  <div class="answer">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit
      voluptas quam laudantium eum voluptatum quia. Facilis ullam voluptatem
      quasi eius beatae vitae laborum nihil dignissimos. Eos suscipit ducimus
      illum!
    </p>
    <div class="btn-cont">
      <span use:tooltip={{content: "Upvote Answer", delay: [1000, null]}}>
        <button><i class="bi bi-caret-up"></i> 20</button>
      </span>
      <span use:tooltip={{content: "Downvote Answer", delay: [1000, null],placement: 'bottom'}}>
        <button><i class="bi bi-caret-down"></i> 5</button>
      </span>
    </div>
  </div>
</div>