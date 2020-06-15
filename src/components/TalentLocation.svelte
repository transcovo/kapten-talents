<style>
    /* .location {
        display: grid;
        grid-template:
            "icon text" 1fr
            "icon info" 1fr
            / auto 1fr;
        grid-column-gap: 1rem;
        margin-bottom: 1rem;
    }
    .pin {
        grid-area: icon;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pin__container {
        background-color: #eeeeee;
        height: 3rem;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .location__text--top {
        grid-area: text;
        font-weight: 500;
    }
    .location__text--bottom {
        grid-area: info;
        color: rgb(33, 164, 83);
        font-size: 0.875rem;
    } */
</style>

<script>
    import LocationIcon from "./icons/Location";

    export let talent;
</script>

<div class="location">
    <div class="location__pin pin">
        <div class="pin__container">
            <LocationIcon />
        </div>
    </div>
    <p class="location__text location__text--top">{talent.location.label}</p>
    {#if talent.isOpenToRemoteWork && talent.isOpenToRelocation}
        <p class="location__text location__text--bottom">
            Open to remote work & relocation
        </p>
    {:else if talent.isOpenToRemoteWork}
        <p class="location__text location__text--bottom">Open to remote work</p>
    {:else if talent.isOpenToRelocation}
        <p class="location__text location__text--bottom">Open to relocation</p>
    {/if}
</div>
