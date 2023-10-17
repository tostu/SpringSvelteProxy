

export async function load({ fetch, params }) {
    try {
        const res = await fetch(`/api/test`,{
            headers: {'Authorization': 'Basic ' + btoa('admin:admin')}
        });
        const item = await res.text();
        return { item };
    } catch (e) {
        console.log(e)
        return {}
    }

}