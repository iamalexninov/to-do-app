import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { TaskCreate } from "./pages/TaskCreate/TaskCreate";
import { TaskUpdate } from "./pages/TaskUpdate/TaskUpdate";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home type="all"/>} />
            <Route path="/pending" element={<Home type="pending"/>} />
            <Route path="/overdue" element={<Home type="overdue"/>} />
            <Route path="/create" element={<TaskCreate />} />
            <Route path="/update/:id" element={<TaskUpdate />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
