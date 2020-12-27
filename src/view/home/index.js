import React, { useEffect, useState } from 'react';

import Header from '../../components/Header'
import Card from '../../components/CardComponent'
import Post from '../../components/Post'
import { getPostList } from '../../config/globalConfig'
export default () => {
  const [postList, setPostList] = useState([]);
  const [whiteHeader, setWhiteHeader] = useState(false);


  useEffect(() => {
    const loadAll = async () => {
      let list = await getPostList();
      setPostList(list.data);

    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setWhiteHeader(true)
      } else {
        setWhiteHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <section className="landing-page">
      <Header white={whiteHeader} />
      <Post />
      <section className="blog-list">
        <div className="container">
          <div className="row">
            {postList.map((item, key) => (
              <Card isLoading={false} item={item} />
            ))}
          </div>
        </div>
      </section>
      {postList.length <= 0 &&
        <div className="container">
          <div className="row">
            <Card isLoading={true} />
            <Card isLoading={true} />
            <Card isLoading={true} />
          </div>
        </div>
      }
    </section>
  );
}