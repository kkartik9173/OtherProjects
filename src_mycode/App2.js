import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>LastName: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  
  return (
    <div className="App">
    
      <Person name ={'Karnik'} lastName = {'Goyal'} age = {40}/>
      <Person name ={'Ashwini'} lastName = {'Goyal'} age = {32}/>
      
    </div>
  );
}

export default App;
