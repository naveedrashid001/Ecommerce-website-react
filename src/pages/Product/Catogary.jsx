import React from 'react';

function Catogary({ finalCategory, setCatName }) {
  const cat = finalCategory.map((v, i) => {
    // Adjust the property based on the actual structure of finalCategory
    const categoryName = v.name || v; // Replace 'name' with the correct property if needed

    return (
      <li
        onClick={() => setCatName(categoryName)}
        key={i}
        className="list-group-item mb-2 text-center"
        style={{
          backgroundColor: '#ccc',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        {categoryName}
      </li>
    );
  });

  return (
    <div>
       <ul className="list-group bg-white text-black p-3 fw-bold rounded-3">
      {finalCategory.length >= 1 ? (
        cat
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <span className='text-center'>No Category Is Found</span>
        <img
          src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif"
          alt="loading img"
          style={{ width: '260px' }}
        />
      </div>
      )}
    </ul>

    </div>
  );
}

export default Catogary;
