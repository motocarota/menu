<script>
  export let post;
  const [
    name, price
  ] = post ?? [];
</script>

<tr>
  <td class="text-xl text-center">{name} {price}</td>
</tr>