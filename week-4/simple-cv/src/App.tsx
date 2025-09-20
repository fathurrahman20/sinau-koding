import { LeftPanel } from "./components/left-panel";
import { RightPanel } from "./components/right-panel";
import { cvData } from "./data/cvData";

function App() {
  return (
    <main className="font-poppins bg-gradient-to-br from-[#74ebd5] to-[#acb6e5] min-h-screen w-full flex justify-center items-center p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-3">
        <LeftPanel data={cvData} />
        <RightPanel data={cvData} />
      </div>
    </main>
  );
}

export default App;
