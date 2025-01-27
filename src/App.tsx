import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Greeting name={"View"} />
      <Counter />
      <UserProfile userId={4} />
    </QueryClientProvider>
  );
}

export default App;
