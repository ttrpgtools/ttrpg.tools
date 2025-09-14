<script lang="ts">
    import { twMerge, type ClassNameValue } from "tailwind-merge";

    type IconProps = {
        icon: string;
        class?: ClassNameValue;
    };
    let { icon, class: className }: IconProps = $props();

    let href = $derived(`/icons.svg?2.7#${icon}`);
</script>

{#if icon}
    <svg
        preserveAspectRatio="xMidYMid meet"
        class={twMerge(`m-0 mt-0! inline-block size-4`, className)}
        ><use xlink:href={href} {href} /></svg
    >
{/if}
