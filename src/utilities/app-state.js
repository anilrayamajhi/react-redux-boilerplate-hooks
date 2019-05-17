import React, { createContext, useReducer, useContext } from "react";

const Context = createContext();

// centralize reduce in seperate file -> reducer.js
// import {combineReducers} from 'redux';
// import * from './reducers'
//
// const reducer = combineReducers(reducers);
// const initialState = reducer({}, {type: '@@INIT'})

const INITIAL_STATE = {posts: { all: [], post: null, loading: true }}

export function AppStateProvider({ reducer, initialState = INITIAL_STATE, children }) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value} children={children} />;
}

export function useAppState() {
  return useContext(Context);
}
