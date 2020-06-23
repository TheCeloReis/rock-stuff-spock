<style>
  #app {
    position: relative;
    width: 100vw;
    height: 100vh;
    max-width: var(--max-width);
    margin: auto;
  }
</style>

<script>
  import "./styles/main.scss";
  import Game from "./components/Game.svelte";
  import RulesModal from "./components/RulesModal.svelte";

  import game from "./store/game";
</script>

<div id="app">
  <Game />
  <RulesModal
    mode="{$game.mode}"
    show="{$game.showRules}"
    toggle="{game.toggleRules}"
  />
</div>
