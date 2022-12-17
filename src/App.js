import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Student from './components/pages/Student';
import AddStudent from './components/pages/AddStudent';
import EditStudent from './components/pages/EditStudent';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/students" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
