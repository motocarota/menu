<script>
  export let post;
  export let data;
  const accentColor = data.accentColor ?? "#333";
  const altColor = data.secondaryColor ?? "#333";

  const [color = "", name, notes, desc, price, _show = 0, _qty] = post ?? [];
</script>

<div
  class="flex flex-wrap lg:flex-nowrap justify-between mb-2 p-4 hover:bg-blend-darken"
>
  <div>
    <div style="background: {color}" class="dot"></div>
  </div>
  <div class="flex-1 min-w-72">
    <span style="color: {accentColor}" class="text-xl">{name}</span><br />
    <span class="mr-6">{notes}</span>
  </div>
  <div class="mr-6">{desc}</div>
  <div class="text-lg font-bold" style="color: {altColor}">{price}</div>
</div>
