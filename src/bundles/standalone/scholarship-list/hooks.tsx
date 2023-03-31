import { useState, useEffect, useRef, useMemo } from "react";

type FetchRequest = {
	data: any | null,
	isLoading: boolean,
	error: string | null,
};

const useFetch = function (url: string, options = {}): FetchRequest {
	const [output, setOutput] = useState<FetchRequest>({
		data: null,
		isLoading: false,
		error: null,
	});
	const abortControllerRef = useRef<AbortController | null>(null);

	useEffect(() => {
		try {
			setOutput({
				data: null,
				isLoading: true,
				error: null,
			});

			abortControllerRef.current?.abort();

			if (typeof AbortController !== "undefined") {
				abortControllerRef.current = new AbortController();
			}

			// options.signal = abortControllerRef.current?.signal;
			options = { ...options, signal: abortControllerRef.current?.signal };

			(async () => {
				console.log("Calling: " + url);
				const response = await fetch(url, options);
				const responseJson = await response.json();

				if (response.ok) {
					setOutput({
						data: responseJson,
						isLoading: false,
						error: null,
					});
				} else {
					setOutput({
						data: null,
						isLoading: false,
						error: `${responseJson.code} | ${responseJson.message} ${response.status} (${response.statusText})`,
					});
				}
			})();

			return () => {
				abortControllerRef.current?.abort();
			};
		} catch (ex: any) {
			setOutput({
				data: null,
				isLoading: false,
				error: ex.message,
			});
		}
	}, [url]);

	return output;
};

export { useFetch };
