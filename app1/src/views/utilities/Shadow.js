import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TenInputSlotsComponent
 from 'valuationCourseProps/animationTest';
const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    alert('Clicked');

    navigate('/icons/tabler-icons');
  };

  return (
    <div>
      <Button onClick={handleButtonClick} variant="contained" color="secondary">
        button texsss
      </Button>
      <TenInputSlotsComponent />
    </div>
  );
};

export default MyComponent;
