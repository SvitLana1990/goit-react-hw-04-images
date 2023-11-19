import { useState, useEffect } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { PictureSearchBar } from './Searchbar/Searchbar';
import { List } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/Button';
import { ImageLoader } from './Loader/Loader';
import { Container } from './App.styled';
import { apiFetchImages } from 'api';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const handleSubmit = value => {
    if (value.trim() === '') {
      return;
    } else {
      setValueSearch(`${Date.now()}/${value}`);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (valueSearch === '') {
        return;
      }
      const valueAfterSlash = valueSearch.split('/').pop();
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await apiFetchImages(valueAfterSlash, page);
        const newImages = response.data.hits;
        setTotalHits(response.data.totalHits);

        if (newImages.length === 0) {
          toast.error('No images for your request');
        } else {
          setImages(prevImages => [...prevImages, ...newImages]);
        }
      } catch (error) {
        toast.error('Oops! Something went wrong! Try reloading the page!');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [valueSearch, page]);

  return (
    <Container>
      <PictureSearchBar onSubmit={handleSubmit} />
      {isError && <div>Unable to fetch images. Please try again.</div>}
      {images.length > 0 && <List images={images} />}
      {isLoading && <ImageLoader />}
      {images.length > 0 && !isLoading && totalHits > images.length && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <GlobalStyle />
      <Toaster />
    </Container>
  );
};
