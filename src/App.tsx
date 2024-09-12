import { Suspense } from "react";
import "./App.css";
import { fetchData } from "./helpers/fetchData";
import { Counter } from "./features/counter/Counter";
import CounterClassicAndReducer from "./features/testeableReducers/CounterClassicAndReducer";

const apiData = fetchData("https://jsonplaceholder.typicode.com/albums");
function App() {
  const fetchingMockData = apiData.read();

  return (
    <div className="h-full w-full bg-slate-600">
      <h1 className="text-3xl font-bold text-black underline">Hello world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>{fetchingMockData?.map((user: any) => <li key={user.id}>{user.title}</li>)}</ul>
      </Suspense>
      <Counter />
      <CounterClassicAndReducer />
    </div>
  );
}

export default App;
