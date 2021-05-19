import { useEffect, useState } from 'react';
import { Posts } from '../../components/Posts';
import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/button';
import { SearchInput } from '../../components/SearchInput';

const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  
  const noMorePosts = page + postPerPage >= allPosts.length;
  

  const filteredPost = !!searchValue ?
  allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  : posts;

  useEffect(() => {
    handleLoadPosts();
  }, [])
  
  const handleLoadPosts  = async () => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(page,postPerPage));
    setAllPosts(postAndPhotos)
  }

  const loadMorePosts = () => {
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts)
    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const {value} = e.target;
    setSearchValue(value);
  }


  return (
    <section className="container">
    <div className="search-container">
   <SearchInput searchValue={searchValue} onChange={handleChange} />
    </div>


    {filteredPost.length > 0 && (
      <Posts posts={filteredPost} />
    )}
    {filteredPost.length === 0 &&(
      <p>Não existem posts</p>
    )}

    <div className="button-container">
      {!searchValue && (
        <Button 
        disabled={noMorePosts}
        text="Next"
        onclick={loadMorePosts}
        />
      )}
    </div>
  </section>
  )
}

export default Home;
