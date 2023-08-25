import './App.css';

const App = () => {
  const name = 'Kartik';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'NoName'}</h1>
      {name ? (
        <>
        <h1>test</h1>
        </>
      ) : (
        <>
        <h6>test2</h6>
        <h6>test3</h6>
        </>
      )}
    </div>
  );
}

export default App;
