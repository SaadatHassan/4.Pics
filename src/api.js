import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID I30KxxzyPXz8YVi3ks1uJOfW66q66ebyqkKZP5firQE",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
