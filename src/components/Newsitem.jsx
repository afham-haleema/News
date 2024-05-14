import React from 'react';

const Newsitem = ({ title, description, src, url }) => {
  const imageStyle = {
    height: '200px', // Set a fixed height for the image container
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f0f0f0', // Background color for the image container (you can also use a placeholder image)
  };

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div className="card bg-dark text-light mb-3" style={{ width: '345px', minHeight: '400px' }}>
        <div style={imageStyle}>
          {src ? (
            <img src={src} className="card-img-top" alt="..." style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
          ) : null}
        </div>
        <div className="card-body" style={{ minHeight: '200px', overflow: 'hidden' }}>
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : title.slice(0, 90)}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;



// style={{height:'360px', width:'200px'}}