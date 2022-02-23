import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import PostAdd from "./components/pages/AddPost";
import PostEdit from "./components/pages/EditPost";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SinglePost from "./components/pages/SinglePost";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";

function App() {
  return (
<Container>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<SinglePost />} />
    <Route path="/post/add" element={<PostAdd />} />
    <Route path="/post/edit/:id" element={<PostEdit />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</Container>
  );
}

export default App;
