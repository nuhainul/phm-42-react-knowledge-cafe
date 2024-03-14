import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  return (
    <>

      <Header></Header>
      {/* <Blogs></Blogs> */}
      <main className='md:flex max-w-6xl mx-auto p-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App;
