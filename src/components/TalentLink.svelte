<script>
    export let href;
    export let name;
</script>

<a class="link" target="_blank" {href} rel="noreferrer noopener">
    <div class="link__icon">
        <slot />
    </div>
    <span class="link__name">{name}</span>
</a>

<style>
    .link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.75rem;
        text-decoration: none;
        cursor: pointer;
        color: #2d66a5;
        font-size: 0.875rem;
    }
    .link__icon {
        display: flex;
        margin-right: 0.875rem;
    }
    .link__name {
        flex: 1;
    }
</style>
