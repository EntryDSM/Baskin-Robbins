import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from "./../public/GlobalStyle";
import { BrowserRouter, Route } from "react-router-dom";
import { Landing } from "./pages/index";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
