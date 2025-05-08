import { Stack } from "expo-router";
import {Provider, useSelector} from 'react-redux';
import { profileReducer } from "./store/reducers/profileReducer";
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  profileReducer: profileReducer
});

const store = createStore(rootReducer);

export default function RootLayout() {
  return (
    <Provider store={store}>
      <LayoutWithAuth

      />
    </Provider>
  )
}

function LayoutWithAuth(){
  const isLogin = useSelector(state => state.profileReducer.isLogin);
  return(
    <Stack initialRouteName={isLogin ? "(tabs)" : "index"}>
  {!isLogin && (
    <>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </>
  )}
  {isLogin && (
    <Stack.Screen name="(tabs)" /> 
  )}
</Stack>
  )
} 