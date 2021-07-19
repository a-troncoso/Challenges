<script>
  import Amount from "../atoms/Amount.svelte"
</script>

<div class="amount-list">
  <Amount />
  <Amount />
</div>

<style>
  .amount-list {
    display: grid;
    row-gap: 32px;
  }
</style>
