<script>
  import "./styles/main.scss";
  import Game from "./components/Game.svelte";
  import RulesModal from "./components/RulesModal.svelte";

  import game from "./store/game";
</script>

<style>
  #app {
    position: relative;
    overflow: hidden;
    height: 100%;
    max-width: var(--max-width);
    width: 100%;
    margin: auto;
  }
</style>

<div id="app">
  <Game />
  <RulesModal show={$game.showRules} toggle={game.toggleRules} />
</div>
