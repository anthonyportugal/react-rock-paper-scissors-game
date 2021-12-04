import { DataProvider } from './context/DataContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <HomePage />
      </div>
    </DataProvider>

  );
}

export default App;
