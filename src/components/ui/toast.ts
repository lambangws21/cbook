import { ToastContainer, toast as showToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastOptions {
  title: string;
  description: string;
}

export const toast = ({ title, description }: ToastOptions) => {
  showToast.info(
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export const Toaster = () => {
  return <ToastContainer />;
};
