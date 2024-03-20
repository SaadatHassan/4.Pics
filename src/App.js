import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

export const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
};
