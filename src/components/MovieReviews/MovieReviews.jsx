import css from './MovieReviews.module.css';
import { useState, useEffect } from 'react';
import { getReviews } from '../../tmdb-api.js';
import { useParams } from 'react-router-dom';

export default function MovieReviews() {

  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
    .then((data) => setReviews(data.data.results))
    .catch((error) => console.log(error))
  }, [movieId]);

  return (
      <>
      <ul className={css.reviews}>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
                <p><b>Content:</b> {review.author}</p>
                <p>{review.content}</p>
            </li>
          ))
          ) : (
          <p>We don't have any reviews for this movie.</p>
          )
        }
      </ul>
      </>
  );
}
