import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider, PersistQueryClientOptions } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { default as ScholarshipList } from "./scholarship-list";

const cacheTime = 1000 * 60 * 60 * 24; // 1 day
const staleTime = 1000 * 60 * 5; // 5 minutes

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: cacheTime,
			staleTime: staleTime,
			retry: 0,
		},
	},
});

const persister = createSyncStoragePersister({
	storage: window.localStorage
})

const doNotPersistKeys = ['scholarships'];
const persistOptions: PersistQueryClientOptions = {
	queryClient: queryClient,
	persister: persister,
	maxAge: cacheTime,
	dehydrateOptions: {
		shouldDehydrateQuery: ({ queryKey }) => {
			const key = typeof queryKey[0] === 'string' ? queryKey[0] : '';
			return !doNotPersistKeys.includes(key);
		}
	}
}

const ScholarshipListRoot = ({ props }: { props: DOMStringMap }) => {
	return (
		<React.StrictMode>
			<PersistQueryClientProvider
				client={queryClient}
				persistOptions={persistOptions}>
				<ScholarshipList siteUrl={props.siteUrl} />
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</PersistQueryClientProvider>
		</React.StrictMode>
	);
};

const elements = document.querySelectorAll<HTMLElement>(".wsu-scholarship-list");
elements.forEach((el) => {
	const app = ReactDOM.createRoot(el);
	app.render(<ScholarshipListRoot props={el.dataset} />);
});
