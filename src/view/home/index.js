import React, { useEffect, useState } from 'react';
import Header from '../../components/Header'
import Card from '../../components/CardComponent'
import { getPostList } from '../../config/globalConfig'
import CircularProgress from '../../components/CircularProgress'

export default () => {
  const [postList, setPostList] = useState([]);
  const [whiteHeader, setWhiteHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //Get Film List
      let list = await getPostList();
      console.log(list)
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
            <div className="col-md-4">
              <Card isLoading={true} />
            </div>
            <div className="col-md-4">
              <Card isLoading={true} />
            </div>
            <div className="col-md-4">
              <Card isLoading={true} />
            </div>
          </div>
        </div>
      }
    </section>

  );
}