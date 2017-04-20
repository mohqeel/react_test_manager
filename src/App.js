import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
 componentWillMount() {
   const config = {
     apiKey: 'AIzaSyCUVYJHSNTaiOoGs2PUSGpIdN9xja4DMzQ',
     authDomain: 'manager-99acd.firebaseapp.com',
     databaseURL: 'https://manager-99acd.firebaseio.com',
     storageBucket: 'manager-99acd.appspot.com',
     messagingSenderId: '422789188397'
   };
   firebase.initializeApp(config);
 }

 render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

   return (
     <Provider store={store}>
       <Router />
     </Provider>
   );
 }
}

export default App;
