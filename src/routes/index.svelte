<script context="module">
    export function preload(page, session) {
        return this.fetch(`index.json`)
            .then(r => r.json())
            .then(talents => {
                return { talents: shuffle(talents) };
            });
    }
</script>

<script>
    import { onMount } from "svelte";

    import Select from "../components/Select.svelte";
    import Checkbox from "../components/Checkbox.svelte";
    import TalentCard from "../components/TalentCard.svelte";
    import EmptyList from "../components/EmptyList.svelte";

    export let talents;

    function shuffle(array) {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        return shuffledArray;
    }

    talents = shuffle(talents);

    let filteredTalents = talents;

    const translations = {
        allDepartmentsOption: "All Departments",
        allPositionsOption: "All Positions",
        allExperiencesOption: "All Experiences"
    };

    const allDepartmentsOption = translations.allDepartmentsOption;
    const allPositionsOption = translations.allPositionsOption;
    const allExperiencesOption = translations.allExperiencesOption;

    let positionSelectValue = allPositionsOption;
    let departmentSelectValue = allDepartmentsOption;
    let experienceSelectValue = allExperiencesOption;
    let isOpenToRelocationOrRemoteChecked = false;

    let windowInnerWidth;

    let filterBar;
    let header;
    let isFilterBarActive;
    let isFilterBarAdditionalContentVisible;
    $: isFilterBarAdditionalContentVisible =
        isFilterBarActive && windowInnerWidth >= 1180;

    const KPI = {
        [allDepartmentsOption]: {
            title: "Might just be your best decision today",
            description:
                "For some of us, it’s the end of the journey but the beginning of yours ! For 8 years, our Tech, HR, Product teams helped moved Kapten from nothing to a major actor in Europe. Discover some of the talents that made this success possible.",
            kpi: [
                {
                    value: "3M",
                    label: "Active users"
                },
                {
                    value: "6",
                    label: "European cities"
                },
                {
                    value: "40K",
                    label: "Partner drivers"
                }
            ]
        },
        Engineering: {
            title: "Our Tech team is awesome",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "30",
                    label: "deployments per day"
                },
                {
                    value: "90%",
                    label: "average code coverage"
                },
                {
                    value: "3",
                    label: "countries opened in 8 months"
                }
            ]
        },
        Product: {
            title: "Our Product team is astonishing",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "3M",
                    label: "active users"
                },
                {
                    value: "4.9",
                    label: "rate on the app store"
                },
                {
                    value: "45s",
                    label: "median time to order a ride"
                }
            ]
        },
        "Customer Service": {
            title: "Our Customer Service is amazing",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "85%",
                    label: "of customer satisfaction"
                },
                {
                    value: "50%",
                    label: "complaints handled in < 1 h"
                },
                {
                    value: "1st",
                    label: "2019 customer service"
                }
            ]
        },
        Operations: {
            title: "Our Operations team is extraordinary",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "3M",
                    label: "active users"
                },
                {
                    value: "40k",
                    label: "partnered drivers"
                },
                {
                    value: "6",
                    label: "european cities"
                }
            ]
        },
        Marketing: {
            title: "Our Marketing team is breathtaking",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "3.3M",
                    label: "app downloads in 2019"
                },
                {
                    value: "3",
                    label: "countries opened in 8 months"
                },
                {
                    value: "2",
                    label: "rebrandings in 2 years"
                }
            ]
        },
        "Human Resources": {
            title: "Our HR team is incredible",
            description:
                "Here are some a glimpse of their biggest successes. Discover who they are below 👇",
            kpi: [
                {
                    value: "200",
                    label: "hirings in 1 year"
                },
                {
                    value: "20",
                    label: "nationalities"
                },
                {
                    value: "3",
                    label: "countries opened in 8 months"
                }
            ]
        }
    };

    const { EXPERIENCE, DEPARTMENTS } = getOptions(talents);

    let positionOptions;
    let activeKPI;
    const departmentOptions = Object.values(DEPARTMENTS);
    const defaultKPI = KPI[allDepartmentsOption];
    $: positionOptions = DEPARTMENTS[departmentSelectValue].positions;
    $: activeKPI = KPI[departmentSelectValue]
        ? KPI[departmentSelectValue]
        : defaultKPI;

    $: filterTalents({
        position: positionSelectValue,
        department: departmentSelectValue,
        experience: experienceSelectValue,
        isOpenToRelocationOrRemote: isOpenToRelocationOrRemoteChecked
    });

    onMount(() => {
        let headerObserver;

        headerObserver = new IntersectionObserver(handleIntersect);
        headerObserver.observe(header);
    });

    function handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.target === header) {
                isFilterBarActive = !entry.isIntersecting;
            }
        });
    }

    function stringToObjectKey(string) {
        return string.toLowerCase().replace(/(\s)|(')/g, "-");
    }

    function getOptions(data) {
        const { experiences, departments } = data.reduce(
            (acc, { experience, department, position }) => {
                // EXPERIENCE ==========
                if (!acc.experiences.includes(experience)) {
                    acc.experiences.push(experience);
                }

                // DEPARTMENTS ==========
                if (!acc.departments[department]) {
                    acc.departments[department] = {
                        label: department,
                        positions: []
                    };
                }
                if (
                    !acc.departments[allDepartmentsOption].positions.includes(
                        position
                    )
                ) {
                    acc.departments[allDepartmentsOption].positions.push(
                        position
                    );
                }
                if (!acc.departments[department].positions.includes(position)) {
                    acc.departments[department].positions.push(position);
                }

                return acc;
            },
            {
                experiences: [],
                departments: {
                    [allDepartmentsOption]: {
                        label: translations.allDepartmentsOption,
                        positions: []
                    }
                }
            }
        );

        return {
            EXPERIENCE: experiences.sort((a, b) => {
                const firstValue = a.match(/\d+/g);
                const secondValue = b.match(/\d+/g);

                // if same first match, try to compare second one (fallback to first one if does not exist);
                if (firstValue[0] === secondValue[0]) {
                    return (
                        (firstValue[1] || firstValue[0]) -
                        (secondValue[1] || secondValue[0])
                    );
                }

                return firstValue[0] - secondValue[0];
            }),
            DEPARTMENTS: departments
        };
    }

    function filterTalents({
        position,
        department,
        experience,
        isOpenToRelocationOrRemote
    }) {
        filteredTalents = talents.filter(talent => {
            let isPositionValid = false;
            let isDepartmentValid = false;
            let isXPValid = false;
            let isOpenToRelocationOrRemoteValid = true;

            if (
                position === allPositionsOption ||
                position === talent.position
            ) {
                isPositionValid = true;
            }
            if (
                department === allDepartmentsOption ||
                department === talent.department
            ) {
                isDepartmentValid = true;
            }
            if (
                experience === allExperiencesOption ||
                experience === talent.experience
            ) {
                isXPValid = true;
            }
            if (
                isOpenToRelocationOrRemote &&
                !talent.isOpenToRelocationOrRemote
            ) {
                isOpenToRelocationOrRemoteValid = false;
            }

            return (
                isPositionValid &&
                isDepartmentValid &&
                isXPValid &&
                isOpenToRelocationOrRemoteValid
            );
        });
    }

    function handleResetPosition() {
        positionSelectValue = allPositionsOption;
    }
</script>

<svelte:window bind:innerWidth="{windowInnerWidth}" />

<div class="banner" bind:this="{header}">
    <img
        class="banner__logo logo logo--banner"
        src="logo-white.svg"
        alt="Kapten"
    />

    <div class="banner__info info">
        <div class="info__block info__block--department department">
            <h1 class="department__title underscore">{activeKPI.title}</h1>
            <p class="department__description">{activeKPI.description}</p>
            {#if activeKPI.kpi}
                <div class="department__achievements">
                    {#each activeKPI.kpi as kpi}
                        <div class="achievement">
                            <p class="achievement__number">{kpi.value}</p>
                            <p class="achievement__text">{kpi.label}</p>
                        </div>
                    {/each}
                </div>
            {/if}

        </div>

        <form class="info__block info__block--form form">
            <div class="form__selects">
                <Select
                    bind:value="{departmentSelectValue}"
                    name="department"
                    id="department"
                    label="Department"
                    on:change="{handleResetPosition}"
                >
                    {#each departmentOptions as option (option.label)}
                        <option value="{option.label}">{option.label}</option>
                    {/each}
                </Select>

                <Select
                    bind:value="{positionSelectValue}"
                    name="position"
                    id="position"
                    label="Position"
                >
                    <option value="{allPositionsOption}">
                        {translations.allPositionsOption}
                    </option>
                    {#each positionOptions as option (option)}
                        <option value="{option}">{option}</option>
                    {/each}
                </Select>
            </div>
        </form>
    </div>
</div>

<form
    class="filter-bar form"
    class:active="{isFilterBarActive}"
    bind:this="{filterBar}"
>
    <div class="filter-bar__block filter-bar__block--start">
        {#if isFilterBarAdditionalContentVisible}
            <img class="logo logo--filter-bar" src="logo.svg" alt="Kapten" />

            <div class="select">
                <Select
                    bind:value="{departmentSelectValue}"
                    name="department"
                    id="department"
                    ariaLabel="Department"
                    on:change="{handleResetPosition}"
                >
                    {#each departmentOptions as option (option.label)}
                        <option value="{option.label}">{option.label}</option>
                    {/each}
                </Select>
            </div>
            <div class="select">
                <Select
                    bind:value="{positionSelectValue}"
                    name="position"
                    ariaLabel="Position"
                    id="position"
                >
                    <option value="{allPositionsOption}">
                        {translations.allPositionsOption}
                    </option>
                    {#each positionOptions as option (option)}
                        <option value="{option}">{option}</option>
                    {/each}
                </Select>
            </div>
        {/if}

        <div class="select">
            <Select
                bind:value="{experienceSelectValue}"
                name="experience"
                ariaLabel="Experience"
                id="filter-bar-experience"
            >
                <option value="{allExperiencesOption}">
                    {translations.allExperiencesOption}
                </option>
                {#each EXPERIENCE as xp (xp)}
                    <option value="{xp}">{xp}</option>
                {/each}
            </Select>
        </div>

    </div>

    <div class="filter-bar__block filter-bar__block--end">
        <Checkbox
            id="filter-bar-relocation-or-remote"
            name="relocation-or-remote"
            value="relocation-or-remote"
            bind:checked="{isOpenToRelocationOrRemoteChecked}"
            label="open to relocation or remote"
        />
    </div>
</form>

<main class="main">
    {#if filteredTalents && filteredTalents.length}
        <ul class="talent-list">
            {#each filteredTalents as talent (talent.id)}
                <TalentCard {talent} />
            {/each}
        </ul>
    {:else}
        <EmptyList />
    {/if}
</main>

<style>
    .underscore::after {
        content: "_";
        display: inline-block;
        font-size: inherit;
        font-weight: inherit;
        color: #ff4f71;
    }

    .logo--filter-bar {
        width: 6.25rem;
        margin-right: 1.25rem;
    }
    .logo--banner {
        margin-bottom: 2rem;
        width: 8rem;
    }

    .banner {
        padding: 2rem 1.5rem 5.25rem;
        background: #002b51 url("wallpaper.svg");
        color: red;
    }
    .banner__logo {
        margin-bottom: 2rem;
    }
    .banner__info.info {
        display: flex;
        flex-direction: column;
    }
    .info__block--form {
        margin-top: 2.5rem;
    }
    .info__block {
        width: 100%;
    }
    .info__block--form.form {
        background: #003c72;
        border-radius: 0.5rem;
        padding: 1.5rem;
        align-self: center;
    }
    .form__selects {
        display: grid;
        grid-template: auto / repeat(1, 1fr);
        grid-row-gap: 1.5rem;
    }
    .info__block--department.department {
        display: grid;
        grid-template-rows: repeat(3, auto);
        grid-row-gap: 1rem;
        justify-items: center;
        text-align: center;
    }

    .department {
        color: #ffffff;
    }
    .department__title {
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
    }
    .department__achievements {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;
    }

    .achievement__number {
        font-style: normal;
        font-weight: bold;
        font-size: 2.25rem;
    }
    .achievement__text {
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
    }
    .department__description {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
    }

    /* ========================== Filter Bar ========================== */
    .filter-bar {
        background: #e2eef7;
        top: 0;
        padding: 1.5rem;
    }
    .filter-bar__block--start {
        margin-bottom: 1rem;
    }

    /* ========================== Talent List ========================== */
    .talent-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template: auto / 1fr;
        grid-gap: 1.5rem 1rem;
    }

    .main {
        padding: 1.5rem;
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        .banner__info.info {
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: flex-end;
        }
        .info__block--form {
            margin-right: 4rem;
            margin-top: 0;
        }
        .info__block--department.department {
            justify-items: stretch;
            text-align: left;
        }
        .filter-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .filter-bar__block {
            display: flex;
            align-items: center;
        }
        .filter-bar__block--start {
            justify-content: flex-start;
            margin-bottom: 0;
        }
        .filter-bar__block--start .select {
            margin-right: 1rem;
            width: 15.625rem;
        }
        .filter-bar__block--end {
            justify-content: flex-end;
        }
        .talent-list {
            grid-template: auto / repeat(2, 1fr);
        }
    }
    @media screen and (min-width: 1180px) {
        .info__block--form {
            margin-right: 2rem;
        }
        .form__selects {
            display: grid;
            grid-template: auto / repeat(2, 1fr);
            grid-column-gap: 1rem;
            grid-row-gap: 0;
        }

        .filter-bar {
            position: sticky;
        }
        .filter-bar.active .select {
            width: 13.75rem;
        }

        .talent-list {
            grid-template: auto / repeat(3, 1fr);
        }
    }
    @media screen and (min-width: 1440px) {
        .info__block {
            margin-right: 8rem;
        }

        .filter-bar.active .select {
            width: 15.625rem;
        }

        .talent-list {
            grid-template: auto / repeat(4, 1fr);
        }
    }
</style>
