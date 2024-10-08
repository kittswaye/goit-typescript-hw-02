import { ThreeDots } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ display: 'block' }}
    />
  );
}

export default Loader;
