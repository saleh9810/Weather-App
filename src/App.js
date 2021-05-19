import SearchBar from "./containers/search_bar";
import Weather_list from "./containers/weather_list";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <Weather_list />
    </div>
  );
}

export default App;
