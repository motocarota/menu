<script>
  export let data;
  export let post;

  const altColor = data.secondaryColor ?? "#333";
  const [_color, name] = post ?? [];
</script>

{#if name === "---"}
  <div class="page-break"></div>
{:else}
  <div
    style="color: {altColor}"
    class="p-5 print:mb-3 text-2xl font-extrabold text-center"
  >
    {name}
  </div>
{/if}
