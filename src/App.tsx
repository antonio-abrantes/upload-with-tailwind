import UploadComponent from "./components/UploadDragDeop";

function App() {
  return (
    <>
      <div className="w-screen bg-gray-300 h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-5">
          Implementation with Vite, Tailwind and Shadcn/ui
        </h2>
        <div>
          <UploadComponent />
        </div>
      </div>
    </>
  );
}

export default App;
