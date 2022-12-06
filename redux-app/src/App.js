import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import myStore, { myPersistor } from "./components/reducers/Store";
import MyRoute from "./MyRoute";


function App() {
  return (
    <>
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor}>
    <MyRoute/>
    </PersistGate>
    </Provider>
    
    </>
  )
}

export default App;
