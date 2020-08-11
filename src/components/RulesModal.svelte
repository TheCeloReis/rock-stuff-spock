<style>
  .container {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: #fff;
    transition: transform 200ms ease;
    transform: translateY(100%);
  }
  .container.on {
    transform: translateY(0);
  }

  .modal-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .button {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
    font-size: 0;
    width: 48px;
    height: 48px;

    background: none;
    border: none;
  }
  .close-icon {
    display: block;
    background-image: url("/images/icon-close.svg");
    background-size: 24px 24px;
    background-repeat: no-repeat;
    margin: auto;
    width: 24px;
    height: 24px;
  }
</style>

<script>
  import Rules from "./Rules.svelte";

  export let show = false;
  export let mode;
  export let toggle = () => {};
</script>

<div class="{`container ${show ? 'on' : ''}`}">
  <div class="modal-box">
    <Rules {mode} />
  </div>

  <button class="button" on:click="{toggle}" title="Fechar">
    <i class="close-icon"></i>
  </button>
</div>
