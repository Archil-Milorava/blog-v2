import { Route, Routes } from "react-router-dom";
import FooterMain from "./components/footer/FooterMain";
import Header from "./components/Header";
import Navbar from "./navbar/Navbar";
import BlogPage from "./pages/BlogPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import ErrorBoundary from "./pages/ErrorBoundary";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <main className="p-2 h-auto min-h-screen w-full sm:px-[18rem] bg-[#F4F4F4] text-black font-main">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<CreateBlogPage />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorBoundary />} />
      </Routes>
      <FooterMain />
    </main>
  );
};

export default App;
