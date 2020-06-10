<script context="module">
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  export async function preload(page, session) {
    const { slug } = page.params;

    const res = new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: "grewjibfwejggfihuewe",
            fullName: "Tristan",
            role: {
              key: "developer/frontend",
              label: "Frontend Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grewejibfwejggfihuewe",
            fullName: "Thierry",
            role: {
              key: "developer/backend",
              label: "Backend Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grewjibffwewfgeewejggfihuewe",
            fullName: "Nathan",
            role: {
              key: "human-ressource",
              label: "Human ressource"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grewjibfwejggfihuewfwe",
            fullName: "Florent",
            role: {
              key: "human-ressource",
              label: "Human ressource"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: {
                key: "france/paris",
                label: "Paris"
              },
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "ewfgrewjibfwejggfihuewe",
            fullName: "Joanna",
            role: {
              key: "developer/backend",
              label: "Backend Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "england/london",
              label: "London"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grewjibffwejggfihuewe",
            fullName: "Alexis",
            role: {
              key: "developer/android",
              label: "Android Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grfewewjibfwejggfihuewe",
            fullName: "Louis",
            role: {
              key: "developer/ios",
              label: "IOs Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "grewjibfwejgfewgfihuewe",
            fullName: "Moran",
            role: {
              key: "developer/frontend",
              label: "Frontend Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: true,
            isOpenToRelocation: true,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "england/london",
              label: "London"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          },
          {
            id: "hklaugofegwiufuew",
            fullName: "Amélie",
            role: {
              key: "developer/backend",
              label: "Backend Developer"
            },
            tags: ["Frontend", "Engineering"],
            isOpenToRemoteWork: false,
            isOpenToRelocation: false,
            introduction:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            location: {
              key: "france/paris",
              label: "Paris"
            },
            linkedin:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr",
            resume:
              "https://www.linkedin.com/in/boulangertristan/?originalSubdomain=fr"
          }
        ]);
      }, 300);
    });
    let talents = await res;

    shuffle(talents);

    return { talents };
  }
</script>

<script>
  import Select from "../components/Select.svelte";

  export let talents;

  let filteredTalents = talents;

  function handleChange(e) {
    const value = e.target.value;

    console.log(value, e.target.name);

    if (value === "all") {
      filteredTalents = talents;
    } else {
      filteredTalents = talents.filter(
        talent => talent[e.target.name].key === value
      );
    }
  }

  let location;
  let role;
  let isOpenToRelocation = false;
  let isOpenToRemoveWork = false;

  $: console.log(location, role, isOpenToRelocation, isOpenToRemoveWork);
</script>

<style>
  /* ========================== Form ========================== */
  form {
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
  }

  /* ========================== List ========================== */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template: auto / 1fr;
    grid-gap: 1rem;
  }

  .talent {
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
    margin: 8px 0 16px;
  }

  .talent__location {
    display: grid;
    grid-template:
      "icon text" 1fr
      "icon info" 1fr
      / auto 1fr;
    grid-column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .talent__location > div {
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .talent__location > div > div {
    background-color: #eeeeee;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .talent__location > p:nth-child(2) {
    grid-area: text;
    font-weight: 500;
  }
  .talent__location > p:nth-child(3) {
    grid-area: info;
    color: rgb(33, 164, 83);
    font-size: 0.875rem;
  }

  .talent__link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    text-decoration: none;
    cursor: pointer;
  }
  .talent__link div:first-child {
    padding: 0 1rem;
    margin-right: 1rem;
  }
  .talent__link span {
    flex: 1;
  }
  .talent__link div:last-child {
    margin-left: 1rem;
  }

  @media screen and (min-width: 768px) {
    ul {
      grid-template: auto / repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 1080px) {
    ul {
      grid-template: auto / repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1440px) {
    ul {
      grid-template: auto / repeat(4, 1fr);
    }
  }
</style>

<svelte:head>
  <title>Kapten's Talent Directory</title>
  <meta name="description" content="Their talent helped move the world" />
</svelte:head>

<h1>Their talent helped move the world</h1>
<h2>
  We wouldn’t be where we are without them. Learn how they can help grow your
  team.
</h2>

<form>
  <div class="form__selects">
    <div>
      <label for="location">Locations</label>
      <Select
        bind:value={location}
        on:change={handleChange}
        name="location"
        id="location">
        <option value="all">All locations</option>
        <option value="france/paris">Paris</option>
        <option value="england/london">London</option>
      </Select>
    </div>

    <div>
      <label for="role">Role/Skills</label>
      <Select bind:value={role} on:change={handleChange} name="role" id="role">
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
        bind:checked={isOpenToRelocation} />
      <label for="relocation">open to relocation</label>
    </div>

    <div>
      <input
        type="checkbox"
        id="remote-work"
        name="remote"
        value="remote"
        bind:checked={isOpenToRemoveWork} />
      <label for="remote-work">open to remote work</label>
    </div>
  </div>
</form>

<ul>
  {#each filteredTalents as talent (talent.id)}
    <li>
      <div class="talent">
        <h3 class="talent__title">{talent.fullName}</h3>
        <p class="talent__subtitle">{talent.role.label}</p>
        <div class="talent__tags">
          {#each talent.tags as tag}
            <p>{tag}</p>
          {/each}
        </div>
        <p class="talent__text">{talent.introduction}</p>
        <div class="talent__location">
          <div>
            <div>
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1c2.4 0 4.9.9 6.7 2.8 3.7 3.7 3.7 9.8 0 13.4L12
                  24l-6.7-6.7c-3.7-3.7-3.7-9.8 0-13.5C7.1 1.9 9.6 1 12 1zm0
                  18.8l4.6-4.6c2.5-2.6 2.5-6.7 0-9.3C15.4 4.7 13.7 4 12 4c-1.7
                  0-3.4.7-4.6 1.9-2.5 2.6-2.5 6.7 0 9.3l4.6 4.6zm2-9.3a2 2 0
                  11-4 0 2 2 0 014 0z"
                  fill="currentColor" />
              </svg>
            </div>
          </div>
          <p>{talent.location.label}</p>
          {#if talent.isOpenToRemoteWork && talent.isOpenToRelocation}
            <p>Open to remote work & relocation</p>
          {:else if talent.isOpenToRemoteWork}
            <p>Open to remote work</p>
          {:else if talent.isOpenToRelocation}
            <p>Open to relocation</p>
          {/if}
        </div>
        <a
          class="talent__link"
          href={talent.linkedin}
          rel="noreferrer noopener">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              size="16">
              <title>Linkedin (filled)</title>
              <path
                d="M21.37 1H2.62C1.73 1 1 1.71 1 2.58v18.83c0 .88.73 1.59 1.62
                1.59h18.75c.9 0 1.63-.71 1.63-1.59V2.58C23 1.71 22.27 1 21.37
                1zM7.53 19.75H4.26V9.25h3.27v10.5zM5.89 7.81C4.85 7.81 4 6.96 4
                5.92s.84-1.89 1.89-1.89c1.04 0 1.89.85 1.89 1.89.01 1.04-.84
                1.89-1.89 1.89zm13.86
                11.94h-3.26v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96
                2.7v5.19H9.57V9.26h3.13v1.43h.04c.44-.83 1.5-1.7 3.09-1.7 3.3 0
                3.91 2.17 3.91 5v5.76h.01z"
                fill="currentColor" />
            </svg>
          </div>
          <span>LinkedIn</span>
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              color="#AFAFAF">
              <title>Chevron Right</title>
              <path
                d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                fill="currentColor" />
            </svg>
          </div>
        </a>
        <a class="talent__link" href={talent.resume} rel="noreferrer noopener">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              size="16">
              <title>Document (outlined)</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 1v22h18V1H3zm15 19H6V4h12v16zM16 6H8v3h8V6zm-8 5h6v3H8v-3z"
                fill="currentColor" />
            </svg>
          </div>
          <span>Resume</span>
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              color="#AFAFAF">
              <title>Chevron Right</title>
              <path
                d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                fill="currentColor" />
            </svg>
          </div>
        </a>
        <a class="talent__link" href={talent.resume} rel="noreferrer noopener">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              size="16">
              <title>Link (filled)</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 1c1.7 0 3.3.6 4.6 1.9 2.5 2.5 2.5 6.7 0 9.2l-3 3c-1.3
                1.3-2.9 1.9-4.6 1.9-1.7 0-3.3-.6-4.6-1.9l-1-1L10 12l1 1c.7.6 1.5
                1 2.5 1s1.8-.3 2.5-1l1.5-1.5L19 10c1.4-1.4 1.4-3.6
                0-5-.7-.6-1.5-1-2.5-1s-1.8.3-2.5
                1l-.5.6c-.9-.4-2-.6-3-.6h-.7l2.1-2.1C13.2 1.6 14.8 1 16.5 1zM10
                19l.5-.6c.9.4 2 .6 3 .6h.7l-2.1 2.1C10.8 22.4 9.2 23 7.5 23c-1.7
                0-3.3-.6-4.6-1.9-2.5-2.5-2.5-6.7 0-9.2l3-3C7.2 7.6 8.8 7 10.5
                7c1.7 0 3.3.6 4.6 1.9l1 1L14
                12l-1-1c-.7-.6-1.5-1-2.5-1s-1.8.3-2.5 1l-1.5 1.5L5 14c-1.4
                1.4-1.4 3.6 0 5 .7.6 1.5 1 2.5 1s1.8-.3 2.5-1z"
                fill="currentColor" />
            </svg>
          </div>
          <span>Personal Website</span>
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              color="#AFAFAF">
              <title>Chevron Right</title>
              <path
                d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                fill="currentColor" />
            </svg>
          </div>
        </a>
        <a class="talent__link" href={talent.resume} rel="noreferrer noopener">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              size="16">
              <title>Github (filled)</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C5.923 1 1 6.048 1 12.28c0 4.986 3.153 9.21 7.522
                10.706.547.104.75-.242.75-.547
                0-.27-.007-.976-.014-1.918-3.058.679-3.707-1.51-3.707-1.51-.5-1.302-1.222-1.655-1.222-1.655-1-.7.074-.685.074-.685
                1.101.083 1.688 1.163 1.688 1.163.98 1.724 2.573 1.226
                3.201.935.101-.727.385-1.226.696-1.51-2.438-.277-5.004-1.246-5.004-5.567
                0-1.233.425-2.237 1.134-3.026-.114-.291-.492-1.434.102-2.985 0 0
                .925-.305 3.025 1.157.878-.25 1.816-.374 2.755-.381.932.007
                1.877.131 2.755.38 2.1-1.46 3.025-1.156 3.025-1.156.601
                1.551.223 2.7.108 2.985.702.79 1.128 1.793 1.128 3.026 0
                4.335-2.573 5.283-5.024 5.567.392.347.75 1.04.75 2.092 0
                1.51-.014 2.721-.014 3.095 0 .305.196.65.756.54C19.854 21.49 23
                17.266 23 12.287 23 6.048 18.077 1 12 1z"
                fill="currentColor" />
            </svg>
          </div>
          <span>Github</span>
          <div>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              color="#AFAFAF">
              <title>Chevron Right</title>
              <path
                d="M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z"
                fill="currentColor" />
            </svg>
          </div>
        </a>
      </div>
    </li>
  {/each}

</ul>
