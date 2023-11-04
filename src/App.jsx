import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/forsiden/Home";
import About from "./components/about/About";
import Events from "./components/events/Events";
import EventDetails from "./components/events/EventDetails";
import Nyheder from "./components/news/Nyheder";
import NewsDetails from "./components/news/NewsDetails";
import Kontakt from "./components/contact/Kontakt";

// Admin
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import AdminHome from "./admin/AdminHome";
import EventsAdmin from "./admin/events/EventsAdmin";
import EventsCreate from "./admin/events/EventsCreate";
import EventsEdit from "./admin/events/EventsEdit";
import GoalsAdmin from "./admin/goals/GoalsAdmin";
import GoalsRet from "./admin/goals/GoalsRet";
import HerosAdmin from "./admin/heros/HerosAdmin";
import HerosRet from "./admin/heros/HerosRet";
import ContactAdmin from "./admin/contacts/ContactAdmin";

// components
import Login from "./components/Login";
import ScrollToTop from "./components/ScrollToTop";
import NoMatch from "./components/NoMatch";

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
          <Route path="events/:eventID" element={<EventDetails />} />
          <Route path="news" element={<Nyheder />} />
          <Route path="news/events/:eventID" element={<NewsDetails />} />
          <Route path="contact" element={<Kontakt />} />

          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        {/* Admin Section */}
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<AdminHome />} />
          <Route path="eventsadmin" element={<EventsAdmin />} />
          <Route path="eventsadmin/create" element={<EventsCreate />} />
          <Route path="eventsadmin/edit/:eventsID" element={<EventsEdit />} />
          <Route path="eventsadmin/:eventsID" element={<NewsDetails />} />
          <Route path="goalsadmin" element={<GoalsAdmin />} />
          <Route path="goalsadmin/edit/:goalsID" element={<GoalsRet />} />
          <Route path="herosadmin" element={<HerosAdmin />} />
          <Route path="herosadmin/edit/:herosID" element={<HerosRet />} />

          <Route path="contactadmin" element={<ContactAdmin />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
