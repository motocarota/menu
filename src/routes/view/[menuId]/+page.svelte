<script>
  import { onMount } from "svelte";
  import MenuRow from "../../../lib/MenuRow.svelte";
  import MenuFooter from "../../../lib/MenuFooter.svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  let posts = [];
  let loading = true;

  onMount(async function () {
    const endpoint = data?.url;
    const response = await fetch(endpoint);
    const res = await response.text();

    posts = res.split("\r\n").map((row) => row.split("\t"));
    loading = false;
  });
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<main
  style="background-color: {data.bgColor ??
    '#efefef'}; font-family: {data.fontFamily}; color: {data.primaryColor ??
    '#333'}"
  class="print:text-md"
>
  <div class="no-print">
    <h1 style="color: {data.accentColor ?? '#333'}">
      {data.title ?? ""}
    </h1>
    <h3 style="color: {data.secondaryColor ?? '#333'}">
      {data.subtitle ?? ""}
    </h3>

    {#if data.pic}
      <img src={data.pic} alt="logo" />
    {/if}
  </div>
  <div class="max-w-5xl mx-auto">
    {#if loading}
      <p class="text-center">Caricamento...</p>
    {/if}
    {#each posts as post}
      <MenuRow {post} {data} />
    {/each}
  </div>

  <MenuFooter {data} />
</main>

<style>
  img {
    margin: 3rem auto;
    max-height: 600px;
  }
</style>
