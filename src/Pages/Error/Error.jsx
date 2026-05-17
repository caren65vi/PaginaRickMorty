import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FondoError from '../../assets/FondoError.png';
import './Error.css';

const Error = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((current) => current - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 9000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <main
      className="error-page">
    
      <div className="error-overlay">
        <section className="error-card">
          <div className="error-info">
             <img src={FondoError} alt="nave espacial" className="error-nave" />
            <h1>Error</h1>
            <p>Ha ocurrido un error.</p>
            <p className="error-subtitle">error: 404 Page not found</p>
            <p className="error-quote">Oh dios mío Rick, ¿Esos somos nosotros?</p>
            <span className="error-row__countdown">Redirigiendo al inicio en {countdown}s...</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Error;