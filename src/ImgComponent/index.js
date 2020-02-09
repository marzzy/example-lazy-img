import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Image from './image'
import useIO from './useIO'
import fallbackImage from '../logo.svg'

function LazyLoadImg() {
  const [data, setData] = useState([])

  const [observer, setElements, entries] = useIO({
    threshold: 0.25,
    root: null
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      setData(res.data);
    }).catch(err => {
      console.error(err)
    })
  }, [])

  useEffect(() => {
    if (data.length) {
      let img = Array.from(document.getElementsByClassName('lazy'));
      setElements(img)
    }
  }, [data, setElements])

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    })
  }, [entries, observer])

  const images = data.map(item => (
    <Image
      key={item.id}
      src={item.url}
      fallbackSrc={fallbackImage}
      isLazy
      style={{
        display: 'block',
        height: '150px',
        width: '150px',
        margin: 'auto',
        marginBottom: '15px'
      }}
      alt='thumbnails'
    />
  ))
  return (
    <div className="App">
      {images}
    </div>
  );
}

export default LazyLoadImg;