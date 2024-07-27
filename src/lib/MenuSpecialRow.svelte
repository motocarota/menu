<script>
  export let post;
  const [name, price] = post ?? [];
</script>

<div class="flex justify-center">
  <div class="text-xl text-center">{name} {price}</div>
</div>
