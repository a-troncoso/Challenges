<script>
  import Button from "../atoms/Button.svelte"
  import AmountList from "./AmountList.svelte"
</script>

<div class="summary">
  <AmountList />
  <div class="summary__wrapper-btn-reset">
    <Button type="secondary">RESET</Button>
  </div>
</div>

<style>
  .summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    border-radius: 16px;
    background-color: var(--primary);
  }
  .summary__wrapper-btn-reset {
    margin-top: 40px;
  }
</style>
