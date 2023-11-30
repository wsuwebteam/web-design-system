// TODO: Redo the naming of things here!!!
// Or change what is in the store, so it can hold more than query params

import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { removeEmptyProperties } from './helpers';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialDegreeFinderState = {
  siteUrl: '',
  queryParams: {
    count: urlParams.get('count') || '',
    page: urlParams.get('page') || '',
    ids: urlParams.get('ids') || '',
    s: urlParams.get('s') || '',
    areas: urlParams.get('areas') || '',
    'degree-types': urlParams.get('degree-types') || '',
    campuses: urlParams.get('campuses') || '',
    colleges: urlParams.get('colleges') || '',
    departments: urlParams.get('departments') || '',
  }
};

export enum ActionType {
  UPDATE_QUERY_PARAM = 'UPDATE_QUERY_PARAM',
  SET_SEARCH = 'SET_SEARCH',
}

type DegreeFinderStateType = {
  siteUrl: string,
  queryParams: Record<string, string>
};

type DegreeFinderActionType = {
  type: ActionType.UPDATE_QUERY_PARAM,
  payload: {
    field: string,
    value: string,
  }
} | {
  type: ActionType.SET_SEARCH,
  payload: {
    search: string,
  }
};

type DegreeFinderDispatchType = Dispatch<DegreeFinderActionType>;

const DegreeFinderContext = createContext<DegreeFinderStateType>({} as DegreeFinderStateType);
const DegreeFinderDispatchContext = createContext<DegreeFinderDispatchType>({} as DegreeFinderDispatchType);

function reducer(state: DegreeFinderStateType, action: DegreeFinderActionType) {
  const type = action.type;

  switch (type) {
    case ActionType.UPDATE_QUERY_PARAM: {
      return {
        ...state,
        queryParams: {
          ...state.queryParams,
          [action.payload.field]: action.payload.value,
        }

        // return action.payload.field ? {
        //   ...state,
        //   [action.payload.field]: action.payload.value,
        // } : state;
      }
    }
    // case ActionType.SET_SEARCH: {
    //   return action.payload.search ? {
    //     ...state,
    //     s: action.payload.search,
    //   } : state;
    // }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

export function DegreeFinderProvider({ siteUrl, children }: { siteUrl: string, children: JSX.Element | JSX.Element[] }) {
  initialDegreeFinderState.siteUrl = siteUrl;
  const [state, dispatch] = useReducer(reducer, initialDegreeFinderState);

  useEffect(() => {
    if (state) {
      const newUrlParams = new URLSearchParams(removeEmptyProperties(state.queryParams)).toString();
      if (newUrlParams) {
        history.replaceState(null, '', `?${newUrlParams}`);
      } else {
        history.replaceState(null, '', window.location.href.split('?')[0]);
      }
    }
  }, [state.queryParams]);

  return (
    <DegreeFinderContext.Provider value={state}>
      <DegreeFinderDispatchContext.Provider value={dispatch}>
        {children}
      </DegreeFinderDispatchContext.Provider>
    </DegreeFinderContext.Provider>
  );
}

export function useDegreeFinder() {
  return useContext(DegreeFinderContext);
}

export function useDegreeFinderDispatch() {
  return useContext(DegreeFinderDispatchContext);
}


