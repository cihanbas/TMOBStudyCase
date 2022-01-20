import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import store from '../redux/store/index';
// const store = createStore(rootReducer, Reactotron.createEnhancer())
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
