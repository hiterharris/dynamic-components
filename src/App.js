import './App.css';
import { data } from './data'

function DynamicComponent(props) {
  const Element = props.element;
  return <Element {...props.data} />;
}

function App() {
  return (
    <div className="App">
      {data.map((item, index) => {
        return <DynamicComponent key={index} {...item} />   
      })}
    </div>
  );
}

export default App;
