<script>
  export let post;
  export let data;
  const accentColor = data.accentColor ?? "#333";
  const altColor = data.secondaryColor ?? "#333";

  const [color = "", name, notes, desc, price, _show = 0, _qty] = post ?? [];
</script>

<div
  class="flex flex-wrap md:flex-nowrap justify-between mb-2 p-4 print:p-0 hover:bg-blend-darken"
>
  <div>
    <div style="background: {color}" class="dot"></div>
  </div>
  <div class="flex-1 lg:min-w-72">
    <div class="flex justify-center">
      <div style="color: {accentColor}" class="text-xl print:text-md">
        {name}
      </div>
      {#if desc}
        <div class="text-xl print:text-md ml-1">- {desc}</div>
      {/if}
    </div>

    <span class="mr-6 print:text-md">{notes}</span>
  </div>
  <div class="text-lg print:text-md font-bold" style="color: {altColor}">
    {price}
  </div>
</div>
