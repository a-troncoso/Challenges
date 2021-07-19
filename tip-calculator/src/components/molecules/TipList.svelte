<script>
  import Button from "../atoms/Button.svelte"
  import Label from "../atoms/Label.svelte"

  export let label
  export let options
  // export let tip
</script>

<div>
  <Label {label} />

  <div class="tip-list-options">
    {#each options as opt}
      <div>
        <Button>{opt}</Button>
      </div>
    {/each}
  </div>
</div>

<style>
  .tip-list-options {
    display: grid;
    margin-top: 16px;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (min-width: 768px) {
    .tip-list-options {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
