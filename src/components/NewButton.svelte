<script>
  export let func = () => {};
</script>

<style>
  .new-btn {
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

  .new-btn:hover,
  .new-btn:focus {
    outline: none;
    border-color: rgb(50, 138, 241);
    background-color: rgb(39, 121, 189);
    box-shadow: 0 0 20px rgb(0 117 255 / 45%);
  }
</style>

<button class="new-btn" on:click={func()}>
  <slot></slot>
</button>