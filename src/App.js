import HarshalFlixHome from './components/HarshalFlixHome';
import Error from './components/Error/Error';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HarshalFlixHome />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;