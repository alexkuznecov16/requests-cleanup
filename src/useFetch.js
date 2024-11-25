// ./useFetch.js - custom hooks
import {useEffect, useState} from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);

	// will be ON - after url change
	useEffect(() => {
		const abortCont = new AbortController();
		fetch(url, {signal: abortCont.signal})
			.then(res => {
				if (res.ok) {
					return res.json();
				}
				throw Error('Could not fetch the data.');
			})
			.then(data => {
				if (!data || !Array.isArray(data)) {
					throw Error('Invalid API data');
				}

				setData(data.slice(0, 100)); // set API requested data (first 100 elements)
			})
			.catch(err => {
				if (err.name === 'AbortError') {
					console.log('fetch aborted');
				} else {
					console.error(err);
				}
			});

		// Cleanup: stops the request if the component is removed from the DOM or the URL changes
		return () => abortCont.abort();
	}, [url]);

	return {data};
};

export default useFetch;
