<script>
  export let type = "outline";
  export let full = "";
  export let disabled = undefined;
  export let onClick = () => {};
</script>

<style>
  .button {
    text-transform: uppercase;
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px solid #fff;
  }
  .button:disabled {
    opacity: 0.5;
  }
  .button.outline {
    color: #fff;
    background-color: transparent;
  }
  .button.full {
    width: 100%;
  }
</style>

<button {disabled} on:click={onClick} class={`button ${type} ${full}`}>
  <slot />
</button>
