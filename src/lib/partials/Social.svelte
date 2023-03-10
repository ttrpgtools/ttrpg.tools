<script lang="ts">
  import Icon from "./Icon.svelte";
  export let icon: string;
  export let colors: string;
  export let href: string;
</script>
<a {href} target="_blank" class="rounded-full p-2 block {colors}"><Icon {icon} size="1.5rem" /></a>