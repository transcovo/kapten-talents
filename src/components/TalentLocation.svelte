<script>
    import LocationIcon from "./icons/Location";

    export let talent;
</script>

<div class="location">
    <div class="location__icon">
        <LocationIcon />
    </div>
    <p class="location__text location__text--top">{talent.location}</p>
    {#if talent.isOpenToRelocationOrRemote}
        <p class="location__text location__text--bottom">
            Open to remote work & relocation
        </p>
    {/if}
</div>

<style>
    .location {
        display: grid;
        grid-template:
            "icon text" 1fr
            "icon info" 1fr
            / auto 1fr;
        grid-column-gap: 1rem;
        margin-bottom: 0.875rem;
        color: #6c798b;
        font-size: 0.75rem;
        font-weight: 500;
    }
    .location__icon {
        line-height: 0;
        grid-area: icon;
        align-self: center;
    }
    .location__text--top {
        grid-area: text;
    }
    .location__text--bottom {
        grid-area: info;
    }
</style>
