<style>
    /* .link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 1rem;
        text-decoration: none;
        cursor: pointer;
    }
    .link__icon {
        padding: 0 1rem;
        margin-right: 1rem;
    }
    .link__name {
        flex: 1;
    }
    .link__arrow {
        margin-left: 1rem;
    } */
</style>

<script>
    export let href;
    export let name;
</script>

<a class="link" target="_blank" {href} rel="noreferrer noopener">
    <div class="link__icon">
        <slot />
    </div>
    <span class="link__name">{name}</span>
    <div class="link__arrow">
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            color="#AFAFAF"
        >
            <title>Chevron Right</title>
            <path
                d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                fill="currentColor"
            ></path>
        </svg>
    </div>
</a>
