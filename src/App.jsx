
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import Home from "./components/forsiden/Home";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Nyheder from "./components/news/Nyheder";
import NewsDetail from "./components/news/NewsDetail";
import Kontakt from "./components/contact/Kontakt";
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import NoMatch from "./components/NoMatch";

import AdminHome from "./admin/AdminHome";
import NewsAdmin from "./admin/news/NewsAdmin";
import NewsCreate from "./admin/news/NewsCreate";
import NewsEdit from "./admin/news/NewsEdit";
// import NDetail from "./components/news/NDetail";
import AboutAdmin from "./admin/about/AboutAdmin";
import GoalsPut from "./admin/about/GoalsPut";
// import SearchResult from "./components/SearchResult";


const App = () => {
  

  return (
    
    <Router>
       <ScrollToTop />
      <Routes>
        {/* Public Section */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="news" element={<Nyheder />} />
          <Route path="news/events/:eventID" element={<NewsDetail />} />
          <Route path="contact" element={<Kontakt />} />

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} /> 
        </Route>

        {/* Admin Section */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
           <Route path="eventsadmin" element={<NewsAdmin />} />
          <Route path="eventsadmin/create" element={<NewsCreate />} />
          <Route path="eventsadmin/edit/:eventsID" element={<NewsEdit />} />
         {/* <Route path="newsadmin/:newsID" element={<NDetail />} />*/}
          <Route path="goalsadmin" element={<AboutAdmin />} /> 
          <Route path="goalsadmin/edit/:goalsID" element={<GoalsPut />} />
           <Route path="*" element={<NoMatch />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
