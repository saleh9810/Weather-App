import SearchBar from "./containers/search_bar";
import Weather_list from "./containers/weather_list";

function App() {
  return (
    <div className="container">
          <h1 className="title">Find the Average weather for the next 7 days</h1>
      <SearchBar />
      <Weather_list />
    </div>
  );
}

export default App;
