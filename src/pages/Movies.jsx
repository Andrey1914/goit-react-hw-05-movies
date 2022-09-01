import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import {
  Form,
  Button,
  SearchSvg,
  Input,
} from '../components/SearchBar/SearchBarStyled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MovieList';
import { Mapper } from 'utils/Mapper';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const onChangeQuery = event => {
    setSearchQuery(event.target.value);
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const newQuery = event.target.elements.query.value.toLowerCase();
    if (newQuery.trim() === '') {
      toast.error("Please, enter correct movie's name");
      return;
    }
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      fetchMoviesBySearch(newQuery).then(r => {
        const mappedMovies = Mapper(r.results);
        setMovies(mappedMovies);
        resetForm();
      });
    }
  }, [searchParams]);

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onFormSubmit}>
        <Button type="submit">
          <span>
            <SearchSvg />
          </span>
        </Button>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          onChange={onChangeQuery}
        ></Input>
      </Form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
