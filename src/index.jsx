// external modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import ChannelsReducer from './reducers/channels_reducer';
import MessagesReducer from './reducers/messages_reducer';
import CurrentUserReducer from './reducers/current_user_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';

// initial state
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general'
};

// State and reducers
const reducers = combineReducers({
  channels: ChannelsReducer,
  messages: MessagesReducer,
  currentUser: CurrentUserReducer,
  selectedChannel: SelectedChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>
);
