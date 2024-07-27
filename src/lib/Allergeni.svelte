<script>
  import { Tooltip, Button } from "flowbite-svelte";

  export let list = [];
  const allergeni = [
    "arachidi",
    "frutta_guscio",
    "latte",
    "molluschi",
    "pesce",
    "sesamo",
    "soia",
    "crostacei",
    "glutine",
    "lupini",
    "senape",
    "sedano",
    "solfiti",
    "uova",
  ];
</script>

<span class="flex justify-end mr-3">
  {#each list as el, i}
    {#if el && el !== "0"}
      <Button
        color="light"
        pill
        outline
        size="xl"
        class="!p-2 allerg w-8 h-8 opacity-60 {allergeni[i]}"
      />
      <Tooltip>{allergeni[i]}</Tooltip>
    {/if}
  {/each}
</span>
