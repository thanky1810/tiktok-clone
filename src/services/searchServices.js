import * as HttpRequest from '~/utils/HttpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await HttpRequest.get('users/search', {
            params: {
                q,
                type,
            }
        })
        return res.data;


        // //.then((res) => res.json())
        // .then((res) => {
        //     setSearchResult(res.data);
        // })
        // .catch(() => {
        //     setSearchResult([]);
        // })
        // .finally(() => {
        //     setLoading(false);
        // });
    } catch (error) {
        console.log(error)

    }
}
