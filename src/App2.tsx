import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Bear from "./components/Bear";
import { ZustandCounter } from "./components/ZustandCounter";

// Create a client
const queryClient = new QueryClient();

function App2() {
  return (
    <QueryClientProvider client={queryClient}>
      <Bear />
      <ZustandCounter />
    </QueryClientProvider>
  );
}

export default App2;
