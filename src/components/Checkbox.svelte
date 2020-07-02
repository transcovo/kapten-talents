<script>
    export let name;
    export let id;
    export let label;
    export let value;

    export let checked;
</script>

<div class="container">
    <input type="checkbox" class="checkbox" {id} {name} {value} bind:checked />
    <label class="label" for="{id}">{label}</label>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
    }

    .label {
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        color: #001632;
        margin-left: 0.625rem;
    }

    .checkbox {
        margin: 0;
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
