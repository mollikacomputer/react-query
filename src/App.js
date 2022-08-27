import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactQuery from "./Components/ReactQuery/ReactQuery";
import { Suspense } from "react";
import Loading from "./Components/Loading";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <div className="App">
      <h2> React Query </h2>
      <QueryClientProvider client={client}>
        <Suspense fallback={<Loading />}>
          <ReactQuery />
          <ReactQuery />
          <ReactQuery />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
