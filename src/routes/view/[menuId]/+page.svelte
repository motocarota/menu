<script>
  import { onMount } from "svelte";
  import MenuRow from '../../../lib/MenuWineRow.svelte'
  import MenuFooter from '../../../lib/MenuFooter.svelte'
  
  /** @type {import('./$types').PageData} */
	export let data;

  let posts = [];
  let loading = true;

  onMount(async function () {
    const endpoint = data?.url;
    const response = await fetch(endpoint);
    const res = await response.text();
    
		posts = (res.split('\r\n')).map(row => row.split('\t'));
    loading = false;
  });

</script>

<main style="background-color: {data.bgColor};">
  <h1>{data.title}</h1>
  <h3>{data.subtitle}</h3>
  <img src="{data.pic}" alt="" />
  <table>
    {#if loading}
      <p>Caricamento...</p>
    {/if}
    {#each posts as post}
      <MenuRow {post} />
    {/each}
  </table>
  <MenuFooter data={data} />
</main>

<style>
  main {
    text-align: center;
  }
  img {
    margin: 3rem auto;
    max-height: 600px;
  }
  table {
    width: 90%;
    margin: 3rem auto;
    border-collapse: separate;
    border-spacing: 0 1em;
  }
</style>