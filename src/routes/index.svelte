<style>
    /* ========================== Filters ========================== */
    /* .form {
        margin: 2rem 0;
    }

    .form__selects {
        color: rgb(0, 0, 0);
        margin-bottom: 1rem;
    }
    .form__selects > div {
        min-width: 320px;
        display: inline-block;
        margin-right: 1rem;
    }
    .form__selects > div label {
        margin-bottom: 8px;
        font-size: 0.875rem;
        font-weight: 500;
        display: block;
        color: rgb(0, 0, 0);
    }

    .form__checboxes div {
        display: inline-flex;
        align-items: center;
    }
    .form__checboxes div:not(:last-child) {
        margin-right: 2rem;
    }
    .form__checboxes input {
        margin: 0 0.5rem 0 0;
    }
    .form__checboxes label {
        font-size: 1rem;
        font-weight: 500;
        color: rgb(0, 0, 0);
    } */

    /* ========================== Talent List ========================== */
    /* .talent-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template: auto / 1fr;
        grid-gap: 1rem;
    }

    .talent-list__item.talent {
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
        color: rgb(0, 0, 0);
        border-radius: 8px;
        padding: 24px;
    }
    .talent__title {
        overflow-wrap: break-word;
        font-size: 24px;
        line-height: 1.25em;
        color: inherit;
        padding-top: 2px;
        padding-bottom: 2px;
        font-weight: 700;
    }
    .talent__subtitle {
        line-height: 24px;
        font-weight: normal;
        color: #757575;
        font-size: 18px;
        margin-bottom: 6px;
        margin: 0 0 6px;
    }

    .talent__tags {
        margin-bottom: 0.5rem;
    }
    .talent__tags p {
        margin-right: 5px;
        height: 24px;
        font-size: 12px;
        border-radius: 12px;
        color: rgb(51, 51, 51);
        padding: 2px 12px;
        background-color: #eeeeee;
        display: inline-flex;
        align-items: center;
        font-weight: 500;
    }

    .talent__text {
        font-size: 1rem;
        color: rgb(84, 84, 84);
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 768px) {
        .talent-list {
            grid-template: auto / repeat(2, 1fr);
        }
    }
    @media screen and (min-width: 1080px) {
        .talent-list {
            grid-template: auto / repeat(3, 1fr);
        }
    }
    @media screen and (min-width: 1440px) {
        .talent-list {
            grid-template: auto / repeat(4, 1fr);
        }
    } */
</style>

<script context="module">
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

    export function preload(page, session) {
        return this.fetch(`index.json`)
            .then(r => r.json())
            .then(talents => {
                return { talents: shuffle(talents) };
            });
    }
</script>

<script>
    import Select from "../components/Select.svelte";
    import TalentLink from "../components/TalentLink.svelte";
    import TalentLocation from "../components/TalentLocation.svelte";

    import GithubIcon from "../components/icons/Github.svelte";
    import LinkedInIcon from "../components/icons/LinkedIn.svelte";
    import ResumeIcon from "../components/icons/Resume.svelte";
    import PersonalWebsiteIcon from "../components/icons/PersonalWebsite.svelte";

    export let talents;

    let filteredTalents = talents;

    function filterTalents({
        location,
        role,
        isOpenToRelocation,
        isOpenToRemoteWork
    }) {
        filteredTalents = talents.filter(talent => {
            let isLocationValid = false;
            let isRoleValid = false;

            let isReloc = true;
            let isRemote = true;

            if (location === "all" || location === talent.location.key) {
                isLocationValid = true;
            }
            if (role === "all" || role === talent.role.key) {
                isRoleValid = true;
            }
            if (isOpenToRelocation && !talent.isOpenToRelocation) {
                isReloc = false;
            }
            if (isOpenToRemoteWork && !talent.isOpenToRemoteWork) {
                isRemote = false;
            }

            return isLocationValid && isRoleValid && isReloc && isRemote;
        });
    }

    let location = "all";
    let role = "all";
    let isOpenToRelocation = false;
    let isOpenToRemoteWork = false;

    $: filterTalents({
        location,
        role,
        isOpenToRelocation,
        isOpenToRemoteWork
    });
</script>

<svelte:head>
    <title>Kapten's Talent Directory</title>
    <meta name="description" content="Their talent helped move the world" />
</svelte:head>

<!-- ========================================== Page Title ========================================== -->
<h1>Their talent helped move the world</h1>
<h2>
    We wouldn’t be where we are without them. Learn how they can help grow your
    team.
</h2>

<!-- ========================================== Filters ========================================== -->
<form class="form">
    <div class="form__selects">
        <div>
            <label for="location">Locations</label>
            <Select bind:value="{location}" name="location" id="location">
                <option value="all">All locations</option>
                <option value="france/paris">Paris</option>
                <option value="england/london">London</option>
            </Select>
        </div>

        <div>
            <label for="role">Role/Skills</label>
            <Select bind:value="{role}" name="role" id="role">
                <option value="all">All Role/Skills</option>
                <option value="developer/frontend">Frontend Developer</option>
                <option value="developer/backend">Backend Developer</option>
                <option value="human-ressource">Human Ressource</option>
                <option value="developer/android">Android Developer</option>
                <option value="developer/ios">iOs Developer</option>
            </Select>
        </div>
    </div>

    <div class="form__checboxes">
        <div>
            <input
                type="checkbox"
                id="relocation"
                name="relocation"
                value="relocation"
                bind:checked="{isOpenToRelocation}"
            />
            <label for="relocation">open to relocation</label>
        </div>

        <div>
            <input
                type="checkbox"
                id="remote-work"
                name="remote"
                value="remote"
                bind:checked="{isOpenToRemoteWork}"
            />
            <label for="remote-work">open to remote work</label>
        </div>
    </div>
</form>

<!-- ========================================== Talent List ========================================== -->
<ul class="talent-list">
    {#each filteredTalents as talent (talent.id)}
        <li>
            <div class="talent-list__item talent">
                <!-- ========================================== Talent Basic information ========================================== -->
                <h3 class="talent__title">{talent.fullName}</h3>
                <p class="talent__subtitle">{talent.role.label}</p>
                <div class="talent__tags">
                    {#each talent.tags as tag}
                        <p>{tag}</p>
                    {/each}
                </div>
                {#if talent.introduction}
                    <p class="talent__text">{talent.introduction}</p>
                {/if}

                <!-- ========================================== Talent Location ========================================== -->
                <TalentLocation {talent} />

                <!-- ========================================== Talent Links ========================================== -->
                {#if talent.linkedin}
                    <TalentLink href="{talent.linkedin}" name="LinkedIn">
                        <LinkedInIcon />
                    </TalentLink>
                {/if}
                {#if talent.resume}
                    <TalentLink href="{talent.resume}" name="Resume">
                        <ResumeIcon />
                    </TalentLink>
                {/if}
                {#if talent.personalWebsite}
                    <TalentLink
                        href="{talent.personalWebsite}"
                        name="Personal Website"
                    >
                        <PersonalWebsiteIcon />
                    </TalentLink>
                {/if}
                {#if talent.github}
                    <TalentLink href="{talent.github}" name="Github">
                        <GithubIcon />
                    </TalentLink>
                {/if}
            </div>
        </li>
    {/each}
</ul>
