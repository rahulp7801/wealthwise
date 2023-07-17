import { Grid, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow   } from '@mui/material';
import React, { useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TopActive from './topActiveComponent';
import 'assets/scss/styles.css';

const MyComponent = () => {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el, index) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });

      setTimeout(() => {
        observer.observe(el);
      }, index * 200); // Delay each element by 200ms

      // Clean up the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    });
    const blocksElement = document.getElementById('blocks');
    blocksElement.onmousemove = (e) => {
      for (const block of document.getElementsByClassName('block')) {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        block.style.setProperty('--mouse-x', `${x}px`);
        block.style.setProperty('--mouse-y', `${y}px`);
      }
    };
  }, []);

  useEffect(() => {
    
    const subtitle = document.getElementsByClassName("get-started-subtitle")[0];

    const createWord = (text, index) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("get-started-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };

    const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

    const createSubtitle = (text) => text.split(" ").map(addWord);

    createSubtitle("Browse relevant publicly traded companies to decide the first stock you want to analyze!");

  }, []);


  return (
      <div>
        <div className="top-active-stocks-container">
          Pick a Stock
        </div>
        <div className='hidden'>
          <div className='get-started'>
            <div className='get-started-content'>
              <h5 className='get-started-title'>First Step:</h5>
              <h5 className='get-started-title'>Stock Selection</h5>
              <h7 className='get-started-subtitle'>

              </h7>
            </div>
          </div>
        </div>
        <div className='fat'>
          <div id='blocks'>
            <Grid  container spacing={1}>
              <Grid item xs={4}>
                <div className='hidden'>
                    <div className="block">
                      <div className="block-border"> 
                        <div className='block-content'>
                          <MainCard>
                            <CardContent>
                              <Typography variant="h3">TOP ESG STOCKS</Typography>
                              <TableContainer>
                                <Table>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Ticker</TableCell>
                                      <TableCell>Industry</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>WOR</TableCell>
                                      <TableCell>Metal </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>JBHT</TableCell>
                                      <TableCell> Freight & Logistics</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>VRSK</TableCell>
                                      <TableCell> Consulting </TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>TXN</TableCell>
                                      <TableCell>Semiconductors</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>AAPL</TableCell>
                                      <TableCell> Electronics </TableCell>
                                    </TableRow>

                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </CardContent>
                          </MainCard>
                        </div>
                      </div>
                    </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='hidden'>
                  <div className="block">
                    <div className="block-border"> 
                      <div className='block-content'>
                        <MainCard>
                          <TopActive />
                        </MainCard>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className='hidden'>
                  <div className="block">
                    <div className="block-border"> 
                      <div className='block-content'>
                        <MainCard>
                          <TopActive />
                        </MainCard>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
  );
};

export default MyComponent;
