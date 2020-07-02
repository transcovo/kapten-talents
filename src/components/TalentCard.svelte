<script>
    import TalentLink from "./TalentLink.svelte";
    import TalentLocation from "./TalentLocation.svelte";

    import GithubIcon from "./icons/Github.svelte";
    import LinkedInIcon from "./icons/LinkedIn.svelte";
    import ResumeIcon from "./icons/Resume.svelte";
    import PersonalWebsiteIcon from "./icons/PersonalWebsite.svelte";

    export let talent;
</script>

<li class="talent-list__item talent">
    <h3 class="talent__title">{talent.fullName}</h3>
    <p class="talent__subtitle">{talent.position}</p>
    <p class="talent__experience">{talent.experience}</p>
    <div class="talent__tags">
        {#each talent.tags as tag}
            <p>{tag}</p>
        {/each}
    </div>
    {#if talent.introduction}
        <p class="talent__text">{talent.introduction}</p>
    {/if}

    <TalentLocation {talent} />

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
        <TalentLink href="{talent.personalWebsite}" name="Personal Website">
            <PersonalWebsiteIcon />
        </TalentLink>
    {/if}
    {#if talent.github}
        <TalentLink href="{talent.github}" name="Github">
            <GithubIcon />
        </TalentLink>
    {/if}
</li>

<style>
    .talent {
        background-color: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        border-radius: 0.25rem;
        padding: 1.25rem;
    }
    .talent__title {
        font-weight: 700;

        font-style: normal;
        font-weight: bold;
        font-size: 1.25rem;
        color: #001632;
        margin-bottom: 0.3125rem;
    }
    .talent__subtitle {
        font-weight: normal;
        color: #757575;
        font-size: 1.125rem;
        margin-bottom: 0.375rem;
        margin: 0 0 0.375rem;

        font-style: normal;
        font-weight: bold;
        font-size: 0.875rem;
        color: #8490a0;
        margin-bottom: 0.3125rem;
    }
    .talent__experience {
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        color: #8490a0;
        margin-bottom: 1.25rem;
    }
    .talent__tags {
        margin-bottom: 1.25rem;
    }
    .talent__tags p {
        margin-right: 0.3125rem;
        height: 1.5rem;
        font-size: 0.75rem;
        border-radius: 10rem;
        color: #2d66a5;
        padding: 0.3125rem 0.625rem;
        background: #cedfef;
        display: inline-flex;
        align-items: center;
        font-weight: 700;
    }
    .talent__text {
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        color: #6c798b;
        margin-bottom: 1.25rem;
    }
</style>
