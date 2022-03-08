<script>
  export let func = () => {};
</script>

<style>
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
</style>

<button class="sort-btn" on:click={func()}>
  <slot></slot>
</button>