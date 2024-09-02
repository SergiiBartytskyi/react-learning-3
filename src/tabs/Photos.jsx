import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { useState, useEffect } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  const handleSubmit = value => {
    setQuery(value);
    setPictures([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchApi = async () => {
      try {
        setError(false);
        setLoading(true);
        setNextPage(false);
        const data = await getPhotos(query, page, {
          signal,
        });

        setPictures(prevPicture => [...prevPicture, ...data.photos]);
        data.next_page ? setNextPage(true) : setNextPage(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchApi();

    return () => {
      controller.abort();
    };
  }, [query, page]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} />

      {pictures.length > 0 ? (
        <PhotosGallery pictures={pictures} />
      ) : (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {nextPage && <Button onClick={loadMore}>Load more</Button>}
    </>
  );
};
