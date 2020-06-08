<script>
  import "./styles/main.scss";
  import Leaderboard from "./components/Leaderboard.svelte";
  import Game from "./components/Game.svelte";
  import RulesModal from "./components/RulesModal.svelte";
  import Button from "./components/Button.svelte";

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

  .button-rules {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
</style>

<div id="app">
  <Leaderboard />
  <Game />

  <div class="button-rules">
    <Button onClick={game.toggleRules}>Rules</Button>
  </div>

  <RulesModal show={$game.showRules} toggle={game.toggleRules} />
</div>
