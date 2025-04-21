import { Stack } from "expo-router";
import {Provider} from 'react-redux';
import { profileReducer } from "./store/reducers/profileReducer";
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
  profileReducer: profileReducer
});

const store = createStore(rootReducer);

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="RegisterScreen" options={{headerShown:false}}/>
      </Stack>
    </Provider>
  )
}