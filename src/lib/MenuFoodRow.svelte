<script>
  import Allergeni from "./Allergeni.svelte";

  export let post;
  export let data;
  const altColor = data.secondaryColor ?? "#333";
  const accentColor = data.accentColor ?? "#333";
  const [
    color = "",
    name,
    notes,
    desc,
    price,
    _show = 0,
    _qty,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
  ] = post ?? [];

  const n = notes ? `(${notes}) ` : "";
  const allergeni = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13];
</script>

<div class="flex flex-wrap lg:flex-nowrap justify-between mb-2 p-4">
  <div>
    <div style="background: {color}" class="dot"></div>
  </div>
  <div class="flex-1 min-w-72">
    <span style="color: {accentColor}" class="text-xl print:text-xs"
      >{name}</span
    >
    <br />
    <span class="text-sm print:text-xs">{desc}</span>
  </div>
  <div>
    {n}
  </div>
  <div>
    <Allergeni list={allergeni} />
  </div>
  <div class="text-lg print:text-sm font-bold" style="color: {altColor}">
    {price}
  </div>
</div>
