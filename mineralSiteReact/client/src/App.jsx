import Home from "./pages/home";
import Started from "./pages/get-started";
import Collect from "./pages/where-to-collect";
import SortedCollection from "./pages/sorted-collection";
import RecentCollection from "./pages/recent-collection";
import Layout from "./pages/layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from "./pages/admin";
import Login from "./pages/login";
import PrivateRoute from "./pages/privateRoute";
import { AuthProvider } from "./pages/contexts/context";

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="get-started" element={<Started />} />
            <Route path="where-to-collect" element={<Collect />} />
            <Route path="recent-collection" element={<RecentCollection />} />
            <Route path="sorted-collection" element={<SortedCollection />} />
            <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
