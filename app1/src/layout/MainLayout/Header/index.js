import PropTypes from 'prop-types';
import { useEffect } from 'react';
import TextHackedEffectComponent from 'views/dashboard/Default/headerTest';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
// import 'assets/scss/header-aurora2.css';
import 'assets/scss/header-hack.css'

// project imports
import LogoSection from '../LogoSection';

// assets
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setText('Ipsum');
    }, 3000);
    setTimeout(() => {
      setText('dolor sit amet');
    }, 5000);
  }, []);

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'visible' }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.secondary.dark,
                color: theme.palette.secondary.light
              }
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      {/* header search */}
    <Box sx={{flexGrow: 0.5}}/>
    
                  <div className="App">
                      <TextHackedEffectComponent defaultText={'Wealth Wise'} startOnHover={true} />
                    </div>
                    

      {/* notification & profile */}
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func
};

export default Header;
