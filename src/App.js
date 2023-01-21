import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Book
        category="Action"
        title="The Hunger Games"
        author="Suzanne Collins"
        chapters={25}
        currentChapter={16}
      />
    </div>
  );
}

export default App;
