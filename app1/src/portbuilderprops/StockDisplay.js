// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect from 'react'
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import Axios from 'axios'; // Import Axios for making HTTP requests
import { Avatar, Box, Grid, Menu, MenuItem, Typography, Button } from '@mui/material'; // Import material-ui components
import { styled, useTheme } from '@mui/material/styles'; // Import styled and useTheme from material-ui
import MainCard from 'ui-component/cards/MainCard'; // Import MainCard component
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard'; // Import SkeletonEarningCard component
import EarningIcon from 'assets/images/icons/earning.svg'; // Import EarningIcon image
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined'; // Import GetAppTwoToneIcon
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined'; // Import FileCopyTwoToneIcon
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined'; // Import PictureAsPdfTwoToneIcon
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined'; // Import ArchiveTwoToneIcon
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Define styling for CardWrapper using styled from material-ui
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// Define the StockDisplay functional component
function StockDisplay() {
  // Define state variables
  const [responseData, setResponseData] = useState(null); // responseData for API response
  const isLoading = false; // You should define isLoading as needed

  // Provided variables and functions
  const navigate = useNavigate(); // Hook for navigation
  const theme = useTheme(); // Hook for accessing the theme
  const [anchorEl, setAnchorEl] = useState(null); // State variable for anchor element of the menu

  // Function to handle button click and navigate to a different route
  const handleButtonClick = () => {
    navigate('/icons/stock-val');
  };

  // Function to handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    Axios.post('http://localhost:5000/api/get-portfolio-info', { "email": localStorage.getItem('userEmail') })
      .then((response) => {
        console.log(response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // Return JSX for rendering the component
  return (
    <>
      {isLoading ? ( // Conditional rendering based on isLoading
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Button onClick={handleButtonClick} variant="contained" color="grey" style={{ width: '100%', justifyContent: 'flex-start' }}>
            <Box sx={{ p: 2.25 }}>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        sx={{
                          ...theme.typography.commonAvatar,
                          ...theme.typography.largeAvatar,
                          backgroundColor: theme.palette.secondary[800],
                          mt: 1
                        }}
                      >
                        <img src={EarningIcon} alt="Notification" />
                      </Avatar>
                    </Grid>
                    <Grid item>
                      <Menu
                        id="menu-earning-card"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right'
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right'
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <GetAppTwoToneIcon sx={{ mr: 1.75 }} /> Import Card
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <FileCopyTwoToneIcon sx={{ mr: 1.75 }} /> Copy Data
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <PictureAsPdfTwoToneIcon sx={{ mr: 1.75 }} /> Export
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <ArchiveTwoToneIcon sx={{ mr: 1.75 }} /> Archive File
                        </MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center">
                    <Grid item>
                      {responseData ? ( // Conditional rendering based on responseData
                        <div>
                          <ul>
                            {Object.entries(responseData).map(([key, value]) => (
                              <p key={key}>
                                {key}: {value}
                              </p>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </Grid>
                    <Grid item>
                      {/* Add other content */}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ mb: 1.25 }}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.secondary[200]
                    }}
                  >
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Button>
        </CardWrapper>
      )}
    </>
  );
}

// Define propTypes for prop type validation
StockDisplay.propTypes = {
  isLoading: PropTypes.bool,
};

// Export the StockDisplay component as the default export
export default StockDisplay;
