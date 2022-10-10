import { SSRProvider } from "react-bootstrap";
import { UserProvider } from "../context/userContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <SSRProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </SSRProvider>
  );
}

export default MyApp;
