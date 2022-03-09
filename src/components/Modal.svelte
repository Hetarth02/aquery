<script context="module">
  let modal;

  export function openModal() {
    modal.style.display = "block";
  }
</script>

<script>
  function closeModal(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>

<style>
  .modal {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: none;
    overflow: auto;
    position: fixed;
    padding-top: 100px;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-cont {
    width: 50%;
    display: flex;
    margin: 0 auto;
    padding: 0.8rem;
    align-items: center;
    border-radius: 1rem;
    flex-direction: column;
    background-color: white;
  }

  .close {
    font-size: 3ch;
    color: #aaaaaa;
    font-weight: bold;
    align-self: flex-end;
  }

  .close:hover,
  .close:focus {
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
</style>

<svelte:window on:click|preventDefault={closeModal}/>

<div class="modal" bind:this={modal}>
  <div class="modal-cont">
    <span class="close" on:click|preventDefault={() => modal.style.display = "none"}>&times;</span>
    <slot></slot>
  </div>
</div>