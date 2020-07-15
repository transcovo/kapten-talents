<script>
    import LocationIcon from "./icons/Location";

    export let talent;
</script>

<div class="location">
    <div class="location__icon">
        <LocationIcon />
    </div>
    <p class="location__text">
        {talent.location}
        {#if talent.isOpenToRelocationOrRemote}
            <br />
            Open to remote work & relocation
        {/if}
    </p>
</div>

<style>
    .location {
        display: flex;
        justify-content: normal;
        align-items: center;
        margin-bottom: 0.875rem;
        color: #6c798b;
        font-size: 0.75rem;
        font-weight: 500;
    }
    .location__icon {
        margin-right: 1rem;
        line-height: 0;
        grid-area: icon;
        align-self: center;
    }
</style>
