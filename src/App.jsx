import "./App.css";
import Navbar from "./component/Navbar";
import Home from"./pages/Home";
import Contact from"./pages/Contact";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./pages/about";

// function App() {
//   return (
//     <div>

//       <h1 className="app">this my first website using react</h1>
//       <p>first day</p>
//       <input type="button" value="button" />
//       <br />
//       <p>text input</p>
//       <input type="text" name="name" id="nm" />
//       <br />
//       <p>number input</p>
//       <input type="number" name="quantity" min="1" max="10"></input>
//       <br />
//       <input type="search" name="search" id="" />
//       <Card
//         imagecard={ReactImg}
//         title="react workshop"
//         description="this is react"
//         lable="enroll now"
//       />
//        <Card
//         imagecard={ReactImg}
//         title="react workshop"
//         description="this is react"
//         lable="enroll now"
//       />
//       <Studentidcard
//           imagecard={ReactImg}
//         name="react workshop"
//         address="this is react"
//         phno="enroll now"
//       />

//     </div>
//   );
// }
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
