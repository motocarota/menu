<script>
  export let data = {};
</script>

<footer class="bg-white text-slate-800 p pb-10 no-print">
  <div class="max-w-screen-lg mt-10 pt-10 mx-auto font-thin text-center">
    <p><a href={data.website} target="_blank">{data.website ?? ""}</a></p>
    <p>{data.address ?? ""}</p>
    {#if data.phone}
      <p>
        {#each data.phone as p}
          <a href="tel:{p}" target="_blank">{p ?? ""} </a>
        {/each}
      </p>
    {/if}
    <p>
      <a href="mailto:?subject=informazioni" target="_blank"
        >{data.email ?? ""}</a
      >
    </p>
    <br />
    {#if data.vat}
      <p>P.IVA/C.F. {data.vat}</p>
    {/if}
  </div>
</footer>
