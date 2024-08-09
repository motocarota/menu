<script>
  import MenuFooter from "../../../lib/MenuFooter.svelte";
  import MenuCards from "../../../lib/MenuCards.svelte";
  export let data;

  const { menus, client } = data;
</script>

<main
  style="background-color: {client.bgColor ??
    '#efefef'}; font-family: {client.fontFamily}; color: {client.primaryColor ??
    '#333'}"
  class="print:text-md"
>
  {#if client.pic}
    <img src={client.pic} alt="logo" class="mx-auto" />
  {/if}

  <h3>Menu disponibili</h3>

  <MenuCards {menus} />

  <MenuFooter data={client} />
</main>
