<script>
  /** @type {import('./$types').PageData} */
  export let data = {};

  import { Listgroup } from "flowbite-svelte";

  const buttons = (data.list ?? []).map((el) => ({
    name: el.split("-").join(" "),
    href: `view/${el}`,
  }));
</script>

<div class="p-5 min-h-screen">
  <h3>Menu disponibili</h3>
  <Listgroup
    active
    items={buttons}
    let:item
    class="max-w-lg mx-auto cursor-pointer"
  >
    {item.name}
  </Listgroup>
</div>
