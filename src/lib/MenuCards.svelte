<script>
  import { Card } from "flowbite-svelte";
  export let menus;
</script>

<div class="flex justify-center gap-5 flex-wrap px-4">
  {#each menus as menu}
    <Card img={menu.pic} href={`/view/${menu.id}`}>
      <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
        {menu.subtitle}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {menu.desc ?? ""}
      </p>
    </Card>
  {/each}
</div>
