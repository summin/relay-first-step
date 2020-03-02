async function fetchGraphQL(text, variables) {
    const REACT_APP_GITHUB_AUTH_TOKEN ="1220c80933e3e109049db8473c1cefe7e488bf8c";

    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    // Get the response as JSON
    return await response.json();
}

export default fetchGraphQL;