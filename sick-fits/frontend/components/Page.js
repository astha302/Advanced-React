import React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };

const MainDiv= styled.div`
    font-size: ${ props => props.huge ? '15px' : null };
    background: white;
    color: ${ props => props.theme.black };
    padding: 10px;
`; 

const InnerContent = styled.div `
    background: white;
    margin: 0 auto;
    width: 100%;
    max-width: ${ props => props.theme.maxWidth};
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 6px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

class Page extends React.Component{

    render(){
        return(
            <ThemeProvider theme={ theme }>
            <MainDiv>
                <Meta/>
                <Header/>
                <InnerContent> {this.props.children} </InnerContent>
            </MainDiv>
            </ThemeProvider>
        ); 
    }

}
export default Page;