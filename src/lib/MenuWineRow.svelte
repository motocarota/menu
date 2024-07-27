<script>
  export let post;
  export let titleColor = "#333";
  export let altColor = "#333";
  const [color = "", name, notes, desc, price, qty = 0] = post ?? [];

  const n = notes ? `(${notes}) ` : "";
</script>

{#if qty && qty > 0}
  <tr>
    {#if !price}
      <th
        colspan="5"
        style="color: {altColor}"
        class="pt-5 text-xl font-extrabold">{name}</th
      >
    {:else}
      <td>
        <div style="background: {color}" class="dot"></div>
      </td>
      <td><span style="color: {titleColor}" class="text-xl">{name}</span></td>
      <td>{n} {desc}</td>
      <td class="price">{price}</td>
    {/if}
  </tr>
{/if}
