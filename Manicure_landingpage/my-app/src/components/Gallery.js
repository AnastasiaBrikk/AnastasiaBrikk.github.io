import React, { useState } from "react";

// Примеры путей к изображениям, замените на свои пути
const galleryItems = [
  {
    webp: "./images/image1.webp",
    jpg: "./images/image1.jpg",
  },
  {
    webp: "./images/image2.webp",
    jpg: "./images/image2.jpg",
  },
  {
    webp: "./images/image3.webp",
    jpg: "./images/image3.jpg",
  },
  {
    webp: "./images/image4.webp",
    jpg: "./images/image4.jpg",
  },
  {
    webp: "./images/image5.webp",
    jpg: "./images/image5.jpg",
  },
  {
    webp: "./images/image6.webp",
    jpg: "./images/image6.jpg",
  },
  {
    webp: "./images/image7.webp",
    jpg: "./images/image7.jpg",
  },
  {
    webp: "./images/image8.webp",
    jpg: "./images/image8.jpg",
  },
  {
    webp: "./images/image9.webp",
    jpg: "./images/image9.jpg",
  },
  {
    webp: "./images/image10.webp",
    jpg: "./images/image10.jpg",
  },
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(galleryItems[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
    setSelectedImage(galleryItems[(currentIndex + 1) % galleryItems.length]);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length
    );
    setSelectedImage(
      galleryItems[
        (currentIndex - 1 + galleryItems.length) % galleryItems.length
      ]
    );
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(index)}
          >
            <picture>
              <source srcSet={item.webp} type="image/webp" />
              <img src={item.jpg} alt={`Gallery item ${index}`} />
            </picture>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal gallery-lightbox">
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>
          <button className="modal-prev" onClick={prevImage}>
            ‹
          </button>
          <div className="gallery-lightbox-content">
            <picture>
              <source srcSet={selectedImage.webp} type="image/webp" />
              <img src={selectedImage.jpg} alt="Selected" />
            </picture>
          </div>
          <button className="modal-next" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
