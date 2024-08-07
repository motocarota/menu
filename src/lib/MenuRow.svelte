<script>
  import MenuFoodRow from "./MenuFoodRow.svelte";
  import MenuRowTitle from "./MenuRowTitle.svelte";
  import MenuWineRow from "./MenuWineRow.svelte";

  export let post;
  export let data;
  const [_color = "", _name, _notes, _desc, price, show = 0] = post ?? [];
</script>

{#if show && show > 0}
  {#if !price}
    <MenuRowTitle {data} {post} />
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
