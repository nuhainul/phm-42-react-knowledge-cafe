import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]); // বুকমার্কের জন্য প্যারেন্টের প্যারেন্টে এসে স্টেট ডিক্লেয়ার করা হল 
  // বুকমার্কের স্টেট ডিক্লেয়ারের পরে ইভেন্টহ্যান্ডলার অ্যাড করা হলো 
  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>

      <Header></Header>
      {/* <Blogs></Blogs> */}
      <main className='md:flex max-w-6xl mx-auto p-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App;
