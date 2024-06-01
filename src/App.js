import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import UserPost from "./Components/User/UserPost";
import Navbar from "./Components/Navbar";

import UserGet from "./Components/User/UserGet";
import UserEdit from "./Components/User/UserEdit";
import StudentGet from "./Components/Student/StudentGet";
import StudentPost from "./Components/Student/StudentPost";
import CollegePost from "./Components/College/CollegePost";
import CollegeGet from "./Components/College/CollegeGet";
import MarksheetGet from "./Components/Marksheet/MarksheetGet";
import MarksheetPost from "./Components/Marksheet/MarksheetPost";
import RoleGet from "./Components/Role/RoleGet";
import RolePost from "./Components/Role/RolePost";
import CollegeEdit from "./Components/College/CollegeEdit";
import MarksheetEdit from "./Components/Marksheet/MarksheetEdit";
import StudentEdit from "./Components/Student/StudentEdit";
import RoleEdit from "./Components/Role/RoleEdit";
import Login from "./Components/Login";
import Home1 from "./Components/Home1";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home1 />}></Route>
     


      <Route path="/userpost" element={<UserPost />}></Route>
      <Route path="/userget" element={<UserGet />}></Route>
      <Route path='/useredit/:id' element={<UserEdit/>}/>

      <Route path="/studentget" element={<StudentGet />}></Route>
      <Route path="/studentpost" element={<StudentPost />}></Route>
      <Route path='/studentedit/:id' element={<StudentEdit/>}/>


      <Route path="/collegepost" element={<CollegePost />}></Route>
      <Route path="/collegeget" element={<CollegeGet/>}></Route>
      <Route path='/collegeedit/:id' element={<CollegeEdit/>}/>


      <Route path="/marksheetget" element={<MarksheetGet/>}></Route>
      <Route path="/marksheetpost" element={<MarksheetPost/>}></Route>
      <Route path='/marksheetedit/:id' element={<MarksheetEdit/>}/>


      <Route path="/roleget" element={<RoleGet/>}></Route>
      <Route path="/rolepost" element={<RolePost/>}></Route>
      <Route path='/roleedit/:id' element={<RoleEdit/>}/>


      <Route path='/login' element={<Login/>}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
