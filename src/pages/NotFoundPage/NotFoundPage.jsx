import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
      <>
      <p>Page not found</p>
      <p><Link to='/'>Home</Link></p>
      </>
  );
}
