import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';

const AnimatedFavicon = () => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const animInterval = setInterval(() => {
      let newframe = Math.floor(Math.random() * (5) + 1);
      while (newframe === frame) {
        newframe = Math.floor(Math.random() * (5) + 1);
      }
      setFrame(newframe);
    }, 3000);

    return () => { clearInterval(animInterval) };
  }, [frame])

  return <Helmet><link type="image/x-icon" rel="icon" href={`${process.env.PUBLIC_URL}/favicon${frame}.ico`} /></Helmet>
}

export default AnimatedFavicon;