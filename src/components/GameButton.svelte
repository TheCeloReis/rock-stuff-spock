<style>
  .button {
    position: absolute;
    transition: all 500ms ease;
    border-radius: 50%;
    border: 12px solid #fff0;
    background: var(--dark-text);
    padding: 0;
    width: var(--button-size);
    height: var(--button-size);
    outline: none;
  }
  .button.rock {
    background: var(--gradient-rock);
    top: calc(100% - var(--button-size));
    left: 50%;
    transform: translateX(-50%);
  }
  .button.paper {
    background: var(--gradient-paper);
    top: 0%;
    left: 0%;
  }
  .button.scissors {
    background: var(--gradient-scissors);
    top: 0%;
    left: calc(100% - var(--button-size));
  }
  .button.lizard {
    background: var(--gradient-lizard);
  }
  .button.spock {
    background: var(--gradient-spock);
  }

  .button.is-selected {
    transition: transform 500ms ease, left 500ms ease, top 500ms ease;
    transform: translate(0%, -50%);
    left: 0%;
    top: 50%;
  }
  .button.is-hidden {
    transition: all 500ms ease;
    opacity: 0;
  }
  .button.-opponent {
    top: 50%;
    left: calc(100% - var(--button-size));
    opacity: 0;
    visibility: hidden;
    transform: translate(100%, -50%);
  }
  .button.-opponent.-is-waiting {
    transform: translate(0%, -50%);
    opacity: 1;
    visibility: visible;
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
    max-width: calc(100% - 36px);
    max-height: calc(100% - 36px);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
</style>

<script>
  export let option = "";
  export let select;
  export let selected;
  export let opponent = false;
</script>

{#if !opponent}
  <button
    class="button {option}
    {option === selected ? 'is-selected' : selected !== undefined && 'is-hidden'}"
    on:click="{select}"
  >
    <div class="button-icon">
      <img class="button-image" src="{`/images/icon-${option}.svg`}" alt="" />
    </div>
  </button>
{:else}
  <button class="button -opponent {selected !== undefined && '-is-waiting'}">
    <div class="button-icon">
      <img class="button-image" src="{`/images/icon-${option}.svg`}" alt="" />
    </div>
  </button>
{/if}
