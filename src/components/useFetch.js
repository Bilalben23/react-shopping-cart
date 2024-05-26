import { useEffect, useState } from 'react'

export default function useFetch(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(url);
                const data = await res.json();
                if (data) {
                    setData(data);
                }
            } catch (err) {
                setError(err.message || err.name)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { isLoading, data, error }
}
