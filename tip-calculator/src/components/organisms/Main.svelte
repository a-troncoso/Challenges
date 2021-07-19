<script>
  import Controls from "../molecules/Controls.svelte"
  import Summary from "../molecules/Summary.svelte"
</script>

<div class="main">
  <h1 class="main__title">SPLITTER</h1>
  <main class="main__card">
    <Controls bill={12} tip={15} people={0} />
    <Summary />
  </main>
</div>

<style>
  .main__title {
    text-align: center;
    color: #5d8788;
    margin: 32px 0;
  }

  .main__card {
    display: grid;
    padding: 32px;
    column-gap: 32px;
    background-color: #fff;
    border-radius: 16px;
    row-gap: 32px;
  }

  @media (min-width: 768px) {
    .main {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 60%;
      min-width: 720px;
      transform: translate(-50%, -50%);
    }
    .main__title {
      margin-bottom: 72px;
    }
    .main__card {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
