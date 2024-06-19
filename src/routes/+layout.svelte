<script>
  import '../app.css';
	import Footer from '../lib/Footer.svelte';
</script>


<div style="min-height: calc(100vh - 420px);">
  <slot></slot>
</div>
<Footer />