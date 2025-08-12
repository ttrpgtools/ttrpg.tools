<script lang="ts">
    import Icon from "./Icon.svelte";
    interface Props {
        icon: string;
        colors: string;
        href: string;
    }

    let { icon, colors, href }: Props = $props();
</script>

<a
    {href}
    target="_blank"
    class="rounded-full flex size-10 items-center justify-center {colors}"
    ><Icon {icon} class="size-6" /></a
>
