<script lang="ts">
  export let icon: string | undefined;
  export let size: string = '1rem';
  $: href = `/icons.svg?1#${icon}`;
</script>
{#if icon}
<svg preserveAspectRatio="xMidYMid meet" class="inline-block m-0 !mt-0 leading-none" style:height={size} style:width={size}><use xlink:href={href}/></svg>
{/if}