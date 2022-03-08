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
    flex-direction: column;
  }
</style>

<div class="flex-contents">
  <div class="sort-cont">
    <slot></slot>
  </div>
</div>