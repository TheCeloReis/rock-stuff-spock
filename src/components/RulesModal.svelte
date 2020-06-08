<script>
  export let show = false;
  export let toggle = () => {};
</script>

<style>
  .container {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transition: transform 200ms ease;
    transform: translateY(100%);
  }

  .container.on {
    transform: translateY(0);
  }
</style>

<div class={`container${show ? ' on' : ''}`}>
  Rules
  <button on:click={toggle}>close</button>
</div>
