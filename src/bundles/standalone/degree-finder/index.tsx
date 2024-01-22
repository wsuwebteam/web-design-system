import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider, PersistQueryClientOptions } from '@tanstack/react-query-persist-client';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { default as DegreeFinder } from "./degree-finder";
import { DegreeFinderProvider } from "./context";
import { CookiesProvider } from "react-cookie";

const cacheTime = 1000 * 60 * 60 * 24; // 1 day
const staleTime = 1000 * 60 * 5; // 5 minutes

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: cacheTime,
			staleTime: staleTime,
			retry: 2,
		},
	},
});

const persister = createSyncStoragePersister({
	storage: window.localStorage
})

const doNotPersistKeys: string[] = []; // do not cache queries with these keys
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

const domain = window.location.hostname.includes('wsu.edu') ? '.wsu.edu' : window.location.host;
const cookieExpireDate = new Date();
cookieExpireDate.setDate(cookieExpireDate.getDate() + 365);

const DegreeFinderRoot = ({ props }: { props: DOMStringMap }) => {
	return (
		<React.StrictMode>
			<PersistQueryClientProvider
				client={queryClient}
				persistOptions={persistOptions}>
				<CookiesProvider defaultSetOptions={{ path: '/', expires: cookieExpireDate, domain: domain }}>
					<DegreeFinderProvider siteUrl={props.siteUrl ?? '/'}>
						<DegreeFinder />
						{/* <ReactQueryDevtools initialIsOpen={false} /> */}
					</DegreeFinderProvider>
				</CookiesProvider>
			</PersistQueryClientProvider>
		</React.StrictMode>
	);
};

const elements = document.querySelectorAll<HTMLElement>(".js-wsu-degree-finder");
elements.forEach((el) => {
	const rootEl = el.dataset.rootElement === 'parent' ? (el.parentElement || el) : el;
	const app = ReactDOM.createRoot(rootEl);
	app.render(<DegreeFinderRoot props={el.dataset} />);
});
