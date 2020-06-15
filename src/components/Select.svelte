<style>
    /* .container {
        background-color: #eeeeee;
        color: rgb(0, 0, 0);
        display: flex;
        position: relative;
        width: 100%;
    }
    .container__select {
        -webkit-appearance: none;
        background-color: transparent;
        color: rgb(0, 0, 0);
        font-size: 16px;
        font-weight: 400;
        height: 48px;
        padding-left: 12px;
        padding-right: 36px;
        width: 100%;
        border: none;
        margin: 0px;
        outline: none;
    }
    .container__icon {
        -webkit-box-pack: center;
        -webkit-box-align: center;
        position: absolute;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-width: 50%;
        min-width: 36px;
        padding-right: 12px;
        pointer-events: none;
        color: rgb(0, 0, 0);
    } */
</style>

<script>
    export let name;
    export let id;

    export let value;
</script>

<div class="container">
    <select class="container__select" {name} {id} on:blur bind:value on:change>
        <slot />
    </select>
    <div class="container__icon">
        <svg
            viewBox="0 0 18 18"
            role="presentation"
            aria-hidden="true"
            focusable="false"
            style="height: 16px; width: 16px; display: block; fill: rgb(34, 34,
            34);"
        >
            <path
                d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1
                1 0 1 1 1.41-1.42l7.29 7.29z"
                fill-rule="evenodd"
            ></path>
        </svg>
    </div>
</div>
