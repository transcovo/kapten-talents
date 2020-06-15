import talents from "./_talents.js";

const talentsStringify = JSON.stringify(talents);

export function get(_, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
    });

    res.end(talentsStringify);
}
