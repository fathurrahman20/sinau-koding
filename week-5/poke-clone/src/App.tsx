import { ThemeProvider } from "./components/theme-provider";
import Routers from "./routes/router";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;
