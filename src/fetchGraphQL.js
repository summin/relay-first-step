async function fetchGraphQL(text, variables) {
    const token = process.env.REACT_APP_PUBLIC_URL;
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: `bearer ${token}`,
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