<script>
  export let post;
  const [
    name, type, canteen, location, price, qty = 0, color = ""
  ] = post ?? [];
</script>

{#if qty && qty > 0}
<tr>
  {#if !price}
    <th colspan="4" class="pt-5 text-xl">{name}</th>
  {:else}
    <td>
      <div style="background: {color}" class='dot'></div>
    </td>
    <td><span class="text-xl">{name}</span> {type} - {canteen} - {location}</td>
    <td class="price">{price}</td>
  {/if}
  </tr>
{/if}
