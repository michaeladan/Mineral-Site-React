import Home from "./pages/home";
import Started from "./pages/get-started";
import Collect from "./pages/where-to-collect";
import SortedCollection from "./pages/sorted-collection";
import RecentCollection from "./pages/recent-collection";
import Layout from "./pages/layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get-started" element={<Started />} />
          <Route path="where-to-collect" element={<Collect />} />
          <Route path="recent-collection" element={<RecentCollection />} />
          <Route path="sorted-collection" element={<SortedCollection />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
