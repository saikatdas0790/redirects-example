import urlDictionary from '$lib/urlDictionary';

export async function handle({ request, resolve }) {
	if (urlDictionary[request.path]) {
		return { status: 301, headers: { location: urlDictionary[request.path] } };
	} else {
		return await resolve(request);
	}
}
