import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">GitHub User Search</h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Setup complete! Start building your components here.
        </p>
        <Search />
      </div>
    </div>
  );
}

export default App;
