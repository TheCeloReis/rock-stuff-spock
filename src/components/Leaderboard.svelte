<script>
  const score = 12;
</script>

<style>
  .container {
    border: 2px solid var(--header-outline);
    border-radius: 8px;
    margin: 32px 32px 0 32px;
    padding: 8px;

    display: grid;
    grid-template-columns: auto 80px;
    grid-template-rows: 64px;
  }

  .logo {
    padding: 8px;
  }

  .score {
    background-color: #fff;
    border-radius: 4px;
    text-align: center;
  }

  .score-title {
    text-transform: uppercase;
    font-size: 12px;
    color: var(--score-text);
  }
  .score-number {
    color: var(--dark-text);
    font-weight: 700;
    font-size: 2.25rem;
  }
</style>

<div class="container">
  <div class="logo">
    <img src="/images/logo-bonus.svg" height="100%" alt="" />
  </div>
  <div class="score">
    <div class="score-title">Score</div>
    <div class="score-number">{score}</div>
  </div>
</div>
