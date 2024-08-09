<script>
  /** @type {import('./$types').PageData} */
  export let data = {};

  import { Listgroup } from "flowbite-svelte";

  const l = Object.keys(data.list) ?? [];
  const clients = l.map((el) => ({
    name: el,
    href: "/c/" + el,
  }));
</script>

<div class="p-5 min-h-screen">
  <Listgroup
    active
    items={clients}
    let:item
    class="max-w-lg mx-auto cursor-pointer"
  >
    {item.name}
  </Listgroup>
</div>
