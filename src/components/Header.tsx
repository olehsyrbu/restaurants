import { useNavigate } from 'react-router-dom';
import BrandLogo from '@assets/BrandLogo.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex cursor-pointer items-center bg-[#262638] p-6">
      <a onClick={() => navigate('/', { replace: true })}>
        <img src={BrandLogo} alt="Brand logo" />
      </a>
    </header>
  );
};

export default Header;
