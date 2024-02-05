interface AuthToken {
    access_token: string;
}

//TODO: put type to the data prop

const universalRequest = async (method: string, url: string, data) => {
    const userAuth = localStorage.getItem('access_token');
    let auth: AuthToken;
    const headers: HeadersInit = {};

    if (userAuth) {
        auth = JSON.parse(userAuth);
        if (auth.access_token) {
            headers['Authorization'] = `Bearer ${auth.access_token}`;
        }
    }

    if (method === 'GET') {
        try {
            const response = await fetch(url, { headers });
            const fetchedData = await response.json();
            if (fetchedData.error) {
                const backendError = fetchedData.error.message;

                console.log("backend", backendError);
                
                return { error: backendError };
            }
            return fetchedData;
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        try {
            const response = await fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const fetchedData = await response.json();
            if (fetchedData.error) {
                const backendError = fetchedData.error.message;
                console.log("backend", backendError);
                return { error: backendError };
            }

            return fetchedData;
        } catch (error) {}
    }
};

const get = universalRequest.bind({}, 'GET');
const post = universalRequest.bind({}, 'POST');
const patch = universalRequest.bind({}, 'PATCH');
const del = universalRequest.bind({}, 'DELETE');

export { get, post, patch, del };
