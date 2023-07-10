import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    alert('Clicked');

    navigate('/icons/tabler-icons');
  };

  return (
    <Button onClick={handleButtonClick} variant="contained" color="secondary">
      button textssss
    </Button>
  );
};

export default MyComponent;
