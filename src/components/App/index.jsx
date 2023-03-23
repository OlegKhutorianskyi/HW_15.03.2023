import { Route, Routes } from 'react-router-dom';
import '../../App.css';
import Nav from '../Nav';
import AddPostPage from '../pages/AddPostPage';
import AllPostsPage from '../pages/AllPostsPage';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<AllPostsPage/>}/>
        <Route path='/add_posts' element={<AddPostPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
