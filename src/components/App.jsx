import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { PictureSearchBar } from './Searchbar/Searchbar';
import { List } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/Button';
import { ImageLoader } from './Loader/Loader';
import { Container } from './App.styled';
import { apiFetchImages } from 'api';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    valueSearch: '',
    page: 1,
    isLoading: false,
    isError: false,
  };

  handleSubmit = value => {
    if (value.trim() === '') {
      return;
    } else {
      this.setState({
        valueSearch: `${Date.now()}/${value}`,
        page: 1,
        images: [],
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { valueSearch, page } = this.state;
    if (prevState.valueSearch !== valueSearch || prevState.page !== page) {
      const valueAfterSlash = valueSearch.split('/').pop();
      try {
        this.setState({ isLoading: true, isError: false });
        const response = await apiFetchImages(valueAfterSlash, page);
        const newImages = response.data.hits;
        const totalHits = response.data.totalHits;

        if (newImages.length === 0) {
          toast.error('No more images');
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...newImages],
            totalHits,
          }));
        }
      } catch (error) {
        toast.error('Oops! Something went wrong! Try reloading the page!');
        this.setState({ isError: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images, isLoading, totalHits } = this.state;
    return (
      <Container>
        <PictureSearchBar onSubmit={this.handleSubmit} />
        {images.length > 0 && <List images={images} />}
        {isLoading && <ImageLoader />}
        {images.length > 0 && !isLoading && totalHits > images.length && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
        <GlobalStyle />
        <Toaster />
      </Container>
    );
  }
}
