<style src="./RoundedButton.scss" lang="scss">

</style>

<script>
  export let option;
  export let onClick;
</script>

<button class="button {option || 'undefined'}" on:click="{onClick}">
  <div class="button-icon">
    <img class="button-image" src="{`/images/icon-${option}.svg`}" alt="" />
  </div>
</button>
