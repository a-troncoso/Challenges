<script>
  import Label from "../atoms/Label.svelte"

  export let label
</script>

<div class="input">
  <Label {label} />
  <input id="id" type="text" class="input__control" />
</div>

<style>
  .input__control {
    padding: 10px 16px;
    width: 100%;
    font-weight: bold;
    color: var(--primary);
    text-align: right;
    border: 0;
    border-radius: 4px;
    background-color: #f2f8fb;
  }
</style>
