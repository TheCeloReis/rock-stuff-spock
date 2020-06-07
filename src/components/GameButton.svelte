<script>
  export let option = "";
</script>

<style>
  .button {
    border-radius: 50%;
    border: 10px solid #fff0;
    background: var(--gradient-scissors);
    padding: 0;
    width: 80px;
    height: 80px;
    outline: none;
  }
  .button.rock {
    background: var(--gradient-rock);
  }
  .button.paper {
    background: var(--gradient-paper);
  }
  .button.scissors {
    background: var(--gradient-scissors);
  }
  .button.lizard {
    background: var(--gradient-lizard);
  }
  .button.spock {
    background: var(--gradient-spock);
  }

  .button-icon {
    position: relative;
    background-color: #fff;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .button-image {
    position: absolute;
    max-width: calc(100% - 24px);
    max-height: calc(100% - 24px);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
</style>

<button class="button {option}">
  <div class="button-icon">
    <img class="button-image" src={`/images/icon-${option}.svg`} alt="" />
  </div>
</button>
