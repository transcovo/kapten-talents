<script>
    export let name;
    export let id;
    export let label;

    export let value;
</script>

<div class="container">
    {#if label}
        <label class="label" for="{id}">{label}</label>
    {/if}
    <div class="select">
        <select class="select__tag" {name} {id} on:blur bind:value on:change>
            <slot />
        </select>
        <div class="select__icon">
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.36651 3.70311L8.74865 0.154785C8.95107 -0.0515951
                    9.27926 -0.0515951 9.48167 0.154785L9.84819 0.528469C10.0506
                    0.734849 10.0506 1.06946 9.84819 1.27584L5.36651
                    5.84521C5.16409 6.05159 4.83591 6.05159 4.63349
                    5.84521L0.151814 1.27584C-0.0506049 1.06946 -0.0506049
                    0.734849 0.151814 0.528469L0.518325 0.154785C0.720744
                    -0.0515948 1.04893 -0.0515948 1.25135 0.154785L4.63349
                    3.70311C4.83591 3.90949 5.16409 3.90949 5.36651 3.70311Z"
                    fill="#A4ADBA"
                ></path>
            </svg>

        </div>
    </div>
</div>

<style>
    .container {
        display: block;
    }
    .select {
        background-color: #ffffff;
        position: relative;
        display: flex;
        width: 100%;
        color: #002b51;
    }
    .select__tag {
        -webkit-appearance: none;
        appearance: none;
        background-color: transparent;
        font-weight: 400;
        height: 2.5rem;
        padding-left: 0.75rem;
        padding-right: 2.25rem;
        width: 100%;
        border: none;
        margin: 0;
        outline: none;
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
    }
    .select__icon {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        max-width: 50%;
        min-width: 2.25rem;
        padding-right: 0.75rem;
        pointer-events: none;
    }

    .label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: bold;
        color: #ffffff;
    }
</style>
