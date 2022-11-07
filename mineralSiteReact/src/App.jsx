import ReactDom from "react-dom";
import Home from  "./pages/home";
import Started from "./pages/get-started";
import Collect from  "./pages/where-to-collect";
import Collection from  "./pages/my-collection";
import Layout from  "./pages/layout";
import NoPage from  "./pages/NoPage";
import data from "./data";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    // function collection(item) {
    //     return (
    //         <Card
    //             key={item.id}
    //             img={item.img}
    //             title={item.title}
    //             description={item.description}
    //           />
    //     )
    //     }
    //     {data.map(collection)}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get-started" element={<Started />} />
          <Route path="where-to-collect" element={<Collect />} />
          <Route path="my-collection" element={<Collection />} />
          <Route path="*" element={<NoPage/>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
