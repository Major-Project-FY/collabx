import { Toast as BToast, ToastContainer } from "react-bootstrap";

const Toast = ({ toggleShow, show, title, small, message, bg }) => {
  return (
    <ToastContainer position="bottom-end" className="m-5">
      <BToast show={show} onClose={toggleShow} bg={bg}>
        <BToast.Header>
          <strong className="me-auto">{title}</strong>
          <small>{small}</small>
        </BToast.Header>
        <BToast.Body className={bg == "light" ? "text-black" : "text-white"}>
          {message}
        </BToast.Body>
      </BToast>
    </ToastContainer>
  );
};

export default Toast;
