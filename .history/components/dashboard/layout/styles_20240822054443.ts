import {styled} from '@nextui-org/react';


export const WrapperLayout = styled('div', {
   display: 'flex',
});

export const Flex = styled('div', {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
 
    variants: {
       direction: {
          column: {
             flexDirection: 'column',
          },
          row: {
             flexDirection: 'row',
          },
       },
       justify: {
          center: {
             justifyContent: 'center',
          },
          start: {
             justifyContent: 'flex-start',
          },
          end: {
             justifyContent: 'flex-end',
          },
          between: {
             justifyContent: 'space-between',
          },
          around: {
             justifyContent: 'space-around',
          },
       },
       align: {
          center: {
             alignItems: 'center',
          },
          start: {
             alignItems: 'flex-start',
          },
          end: {
             alignItems: 'flex-end',
          },
          stretch: {
             alignItems: 'stretch',
          },
          between: {
             alignItems: 'space-between',
          },
       },
       wrap: {
          wrap: {
             flexWrap: 'wrap',
          },
          nowrap: {
             flexWrap: 'nowrap',
          },
       },
    },
});

export const Box = styled('div', {
    boxSizing: 'border-box',
});

const UnstyledSvg = styled('svg', {});
const UnstyledPath = styled('path', {});
const UnstyledRect = styled('rect', {});

export const Svg = Object.assign(UnstyledSvg, {
   Path: UnstyledPath,
   Rect: UnstyledRect,
});

export const StyledBurgerButton = styled('button', {
   'position': 'absolute',
   'display': 'flex',
   'flexDirection': 'column',
   'justifyContent': 'space-around',

   'width': '22px',
   'height': '22px',
   'background': 'transparent',
   'border': 'none',
   'cursor': 'pointer',
   'padding': '0',
   'zIndex': '202',
   '&:focus': {
      outline: 'none',
   },
   '& div': {
      'width': '22px',
      'height': '1px',
      'background': '#2ECFCF',
      'borderRadius': '10px',
      'transition': 'all 0.3s ease',
      'position': 'relative',
      'transformOrigin': '1px',

      '&:first-child': {
         transform: 'translateY(-4px) rotate(0deg)',
         height: '1px',
         marginTop: '10px',
      },
      '&:nth-child(2)': {
         transform: 'translateY(4px) rotate(0deg)',
         height: '1px',
         marginBottom: '10px',
      },
      '&:nth-child(2)': {
         transform: 'translateY(4px) rotate(0deg)',
         height: '1px',
         marginBottom: '10px',
      },
      
   },
   '@md': {
      display: 'none',
      zIndex: 'auto',
      opacity: 1,
   },
   'variants': {
      open: {
         true: {
            '& div': {
               '&:first-child': {
                  marginTop: '0px',
                  transform: 'translateY(1px) rotate(45deg)',
               },
               '&:nth-child(2)': {
                  zIndex: 'auto',
               },
               '&:nth-child(3)': {
                  marginBottom: '0px',
                  transform: 'translateY(4px) rotate(-45deg)',
               },
            },
         },
      },
   },
});