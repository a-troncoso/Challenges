<script>
  export let type
  let styleClasses = ["button"]

  if (!type) {
    styleClasses.push("button--primary")
  } else if (type === "secondary") {
    styleClasses.push("button--secondary")
  } else if (type === "tertiary") {
    styleClasses.push("button--tertiary")
  }

  const handleClick = () => {
    // styleClasses =
    //   styleClasses.indexOf("button--selected") === -1
    //     ? styleClasses.concat("button--selected")
    //     : styleClasses.filter(x => x !== "button--selected")
  }
</script>

<button class={styleClasses.join(" ")} on:click={handleClick}><slot /></button>

<style>
  .button {
    width: 100%;
    padding: 10px 16px;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    /* background-color: var(--primary); */
    border: none;
    border-radius: 6px;
  }
  .button.button--primary {
    background-color: var(--primary);
    color: #fff;
  }
  .button.button--secondary {
    background-color: var(--secondary);
    color: #00494c;
  }
  .button.button--tertiary {
    background-color: var(--tertiary);
    color: var(--tertiary);
  }
  .button.button--selected {
    background-color: var(--secondary);
    color: #00494c;
  }
</style>
