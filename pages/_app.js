import { SSRProvider } from "react-bootstrap";
import { UserProvider } from "../context/userContext";
import Navbar from "../components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
      </UserProvider>
    </SSRProvider>
  );
}

export default MyApp;
