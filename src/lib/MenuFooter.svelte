<script>
  export let data = {};
</script>
<footer class="bg-white text-slate-800 p pb-10">
  <div class="max-w-screen-lg mt-10 pt-10 mx-auto font-thin text-center">
    <p>{data.website}</p>
    <p>{data.address}</p>
    <p>
      {#each data.phone as p}
        <a href="tel:{p}">{p}</a>
      {/each}
    </p>
    <p>
      <a href="mailto:?subject=informazioni" target="_blank">{data.email}</a>
    </p>
    <br>
    <p>P.IVA e C.F. {data.vat}</p>
  </div>
</footer>
