<script>
  import "./styles/main.scss";
  import Leaderboard from "./components/Leaderboard.svelte";
  import Footer from "./components/Footer.svelte";

  const name = "world";
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
  <Leaderboard />
  <Footer />
</div>
