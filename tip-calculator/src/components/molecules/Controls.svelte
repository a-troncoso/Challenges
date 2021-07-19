<script>
  import Input from "../atoms/Input.svelte"
  import TipList from "../molecules/TipList.svelte"

  export let bill
  export let tip
  export let people
</script>

<div class="inputs">
  <Input value={bill} label="bill" />
  <TipList
    label="Select tip %"
    options={["5%", "10%", "15%", "25%", "30%", "custom"]}
    {tip}
  />
  <Input label="number of people" value={people} />
</div>

<style>
  .inputs {
    display: grid;
    grid-template-rows: repeat(3, auto);
    row-gap: 40px;
  }
</style>
