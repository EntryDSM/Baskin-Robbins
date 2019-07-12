import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {}

const App = ({  }: Props) => {
  return <h1>Pickin</h1>;
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));