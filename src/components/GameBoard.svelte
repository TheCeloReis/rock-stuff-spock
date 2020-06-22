<style>
  .game-board {
    width: calc(100% - 32px);
    margin: 16px;
    padding-top: 86.6%;
    position: relative;
  }

  .game-background {
    width: calc(100% - var(--button-size));
    position: absolute;
    top: calc(var(--button-size) / 2);
    left: calc(var(--button-size) / 2);
    z-index: -1;
  }
  .game-background.-is-selected {
    transition: opacity 500ms ease;
    opacity: 0;
  }

  .game-caption {
    position: absolute;
    top: calc(50% + var(--button-size) / 2);
    margin-top: 16px;
    width: var(--button-size);
    text-align: center;
    text-transform: uppercase;
    opacity: 0;
    visibility: hidden;
  }
  .game-caption.-left {
    transform: translateX(-100%);
  }
  .game-caption.-right {
    transform: translateX(100%);
    left: calc(100% - var(--button-size));
  }
  .game-caption.-is-selected {
    visibility: visible;
    opacity: 1;
    transition: transform 500ms ease, opacity 500ms ease;
    transform: translateX(0%);
  }
</style>

<script>
  import { beforeUpdate, tick } from "svelte";

  import GameButton from "./GameButton.svelte";

  export let cards = [];
  export let selected = undefined;
  export let opponent = undefined;
  export let select = () => {};
</script>

<div class="game-board">
  <img
    class="game-background {selected !== undefined && '-is-selected'}"
    src="/images/bg-triangle.svg"
    alt=""
  />
  {#each cards as card}
    <GameButton
      select="{() => select(card.value)}"
      {selected}
      option="{card.value}"
    />
  {/each}
  <span class="game-caption -left {selected !== undefined && '-is-selected'}">
    You picked
  </span>

  <GameButton select="{() => {}}" {selected} option="{opponent}" opponent />
  <span class="game-caption -right {selected !== undefined && '-is-selected'}">
    Opponent
  </span>

</div>
