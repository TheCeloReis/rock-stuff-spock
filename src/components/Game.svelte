<script>
  import GameButton from "./GameButton.svelte";
  import game from "../store/game";
</script>

{#if !$game.mode}
  <button on:click={() => game.init('normal')}>Normal</button>
  <button on:click={() => game.init('spock')}>Spock</button>
{:else}
  {#each $game.cards as card}
    <GameButton option={card.value} />
  {/each}
  <button on:click={() => game.reset()}>Reset</button>
{/if}
