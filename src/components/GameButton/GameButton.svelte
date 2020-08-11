<style src="./GameButton.scss" lang="scss">

</style>

<script>
  export let option;
  export let select;
  export let selected;

  import RoundedButton from "../RoundedButton/RoundedButton.svelte";
</script>

<div
  class="normal {option}
  {option === selected ? '-is-selected' : selected !== undefined ? '-is-hidden' : false}
  "
>
  <RoundedButton onClick="{select}" {option} />
</div>
