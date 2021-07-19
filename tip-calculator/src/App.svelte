<script>
  import Main from "./components/organisms/Main.svelte"
</script>

<svelte:head>
  <style>
    :root {
      --primary: #00494c;
      --secondary: #00c4b0;
      --tertiary: #5D8788;
    }
  </style>
</svelte:head>

<Main />

<style>
  :global(body) {
    background-color: #bde4e6;
    padding: 0;
  }
  :global(h1) {
    margin: 0;
  }
  :global(input) {
    margin: 0;
  }
  :global(button) {
    margin: 0;
  }
</style>
