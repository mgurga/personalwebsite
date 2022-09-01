import Globe from 'react-globe.gl';
import { SizeMe } from 'react-sizeme';
import { useEffect, useRef } from 'react';

const World = () => {
  const globeEl = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (globeEl.current !== undefined) {
        globeEl.current.controls().enableZoom = false;
        globeEl.current.controls().autoRotateSpeed = 1;
        globeEl.current.controls().autoRotate = true;
      }
    }, 100)
  }, []);

  return <div style={{ width: "49%", display: "inline-block", float: "right" }}>
    <SizeMe>{({ size: { width } }) => (
      <Globe
        ref={globeEl}
        width={width}
        height={width}
        backgroundColor="rgb(0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      />
    )}</SizeMe></div>;
};

export default World;