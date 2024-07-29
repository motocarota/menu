<script>
  import MenuFoodRow from "./MenuFoodRow.svelte";
  import MenuWineRow from "./MenuWineRow.svelte";

  export let post;
  export let data;
  const altColor = data.secondaryColor ?? "#333";
  const [_color = "", name, _notes, _desc, price, show = 0] = post ?? [];
</script>

{#if show && show > 0}
  <!-- TITLE -->
  {#if !price}
    <div
      style="color: {altColor}"
      class="p-5 print:p-0 print:pb-3 text-xl font-extrabold text-center"
    >
      {name}
    </div>
  {:else}
    {#if data.type === "food"}
      <MenuFoodRow {data} {post} />
    {/if}
    {#if data.type === "wine"}
      <MenuWineRow {data} {post} />
    {/if}
    {#if data.type === "bar"}
      <MenuFoodRow {data} {post} />
    {/if}
  {/if}
{/if}
