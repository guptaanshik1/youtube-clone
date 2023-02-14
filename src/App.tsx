import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Videos/components/Body/Body";
import Header from "./components/Videos/components/Header/Header";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
