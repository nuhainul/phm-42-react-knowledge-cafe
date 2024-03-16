import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]); // বুকমার্কের জন্য প্যারেন্টের প্যারেন্টে এসে স্টেট ডিক্লেয়ার করা হল 
  const [readingTime, setReadingTime] = useState(0);

  // বুকমার্কের স্টেট ডিক্লেয়ারের পরে ইভেন্টহ্যান্ডলার অ্যাড করা হলো 
  const handleAddToBookmark = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // const handleMarkAsRead = time => {
  const handleMarkAsRead = (id, time) => {
    // console.log('marking as read', time);
    // setReadingTime(readingTime + time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // removing the read blog from bookmark 
    // console.log('remove bookmark from id:', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id); // what is this? 
    setBookmarks(remainingBookmarks)
  }


  return (
    <>
      <Header></Header>
      {/* <Blogs></Blogs> */}
      <main className='md:flex max-w-6xl mx-auto p-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App;
