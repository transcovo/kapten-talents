import talents from "./_talents.js";
import fixtures from "./_talents.fixtures.js";

const talentsStringify = JSON.stringify(talents);
const fixturesStringify = JSON.stringify(fixtures);

export function get(_, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    const dev = process.env.NODE_ENV === "development";

    res.end(dev ? fixturesStringify : talentsStringify);
}
