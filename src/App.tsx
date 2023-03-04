import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import { Videos } from "./components/Videos";

function App() {
  return (
    <Provider store={store}>
      <Videos />
    </Provider>
  );
}

export default App;
