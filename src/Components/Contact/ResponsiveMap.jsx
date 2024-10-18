import React, { useEffect, useState } from 'react';

const ResponsiveMap = () => {
  const [iframeHeight, setIframeHeight] = useState('450px'); // default height

  // Function to resize the iframe based on container width
  const resizeMap = () => {
    const mapContainer = document.getElementById('map-container');
    const aspectRatio = 9 / 16; // 16:9 aspect ratio
    if (mapContainer) {
      setIframeHeight(`${mapContainer.offsetWidth * aspectRatio}px`);
    }
  };

  // Run resizeMap on component mount and when the window is resized
  useEffect(() => {
    resizeMap(); // Initial resize on mount
    window.addEventListener('resize', resizeMap);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', resizeMap);
  }, []);

  return (
    <div id="map-container" style={{ width: '100%', background: '#f0f0f0' }} className='mx-auto container mb-10'>
      <iframe
        id="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3991.0802318149636!2d89.23625581116946!3d24.008176778741174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b2f09ca98af%3A0x8c57d521635c03fc!2sMaa%20Medicine%20Corner!5e1!3m2!1sen!2sbd!4v1729188825193!5m2!1sen!2sbd"
        style={{
          border: '0',
          width: '100%',
          height: iframeHeight,
        }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ResponsiveMap;
