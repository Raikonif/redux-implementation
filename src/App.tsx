import { Suspense } from "react";
import "./App.css";
import { fetchData } from "./helpers/fetchData";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");
function App() {
  const fetchingMockData = apiData.read();

  return (
    <div className="h-screen w-full bg-slate-600">
      <h1 className="text-3xl font-bold text-black underline">Hello world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>{fetchingMockData?.map((user: any) => <li key={user.id}>{user.name}</li>)}</ul>
      </Suspense>
    </div>
  );
}

export default App;
