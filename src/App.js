import './App.css';
import StoryContainer from './containers/StoryContainer';

function App() {
  
  const filters = [
    {name: "title A-Z", value: "title A-Z"},
    {name: "title Z-A", value: "title Z-A"}
  ]

  return (
    <div className='story-container'>
      <StoryContainer filters={filters}/>
    </div>
  );
}

export default App;
