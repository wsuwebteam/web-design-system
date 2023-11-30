// TODO: Redo the naming of things here!!!
// Or change what is in the store, so it can hold more than query params

import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { removeEmptyProperties } from './helpers';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const initialDegreeQueryParams = {
  count: urlParams.get('count') || '',
  page: urlParams.get('page') || '',
  ids: urlParams.get('ids') || '',
  s: urlParams.get('s') || '',
  areas: urlParams.get('areas') || '',
  'degree-types': urlParams.get('degree-types') || '',
  campuses: urlParams.get('campuses') || '',
  colleges: urlParams.get('colleges') || '',
  departments: urlParams.get('departments') || '',
};

export enum ActionType {
  SET_FIELD = 'SET_FIELD',
  SET_SEARCH = 'SET_SEARCH',
}

type DegreeFinderStateType = Record<string, string>;
type DegreeFinderActionType = {
  type: ActionType.SET_FIELD,
  payload: {
    field: keyof DegreeFinderStateType,
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
    case ActionType.SET_FIELD: {
      return action.payload.field ? {
        ...state,
        [action.payload.field]: action.payload.value,
      } : state;
    }
    case ActionType.SET_SEARCH: {
      return action.payload.search ? {
        ...state,
        s: action.payload.search,
      } : state;
    }
    default: {
      throw Error('Unknown action: ' + type);
    }
  }
}

export function DegreeFinderProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [state, dispatch] = useReducer(reducer, initialDegreeQueryParams);

  useEffect(() => {
    if (state) {
      const newUrlParams = new URLSearchParams(removeEmptyProperties(state)).toString();
      if (newUrlParams) {
        history.replaceState(null, '', `?${newUrlParams}`);
      } else {
        history.replaceState(null, '', window.location.href.split('?')[0]);
      }
    }
  }, [state]);

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


