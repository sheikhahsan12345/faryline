import { useEffect } from "react";
import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS
    // Import Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return <Component {...pageProps} />;
}
