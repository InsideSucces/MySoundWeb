import {styled} from '@nextui-org/react';

export const SidebarWrapper = styled('div', {
   'backgroundColor': '#000000',
   'transition': 'transform 0.2s ease',
   'height': '100%',
   'position': 'fixed',
   'transform': 'translateX(-100%)',
   'width': '23.625rem',
   'flexShrink': 0,
   'zIndex': '202',
   'overflowY': 'auto',
   '&::-webkit-scrollbar': {
      display: 'none',
   },
   'borderRight': '1px solid #2ECFCF',
   'flexDirection': 'column',
   'py': '$5',
   // 'px': '$2',
   '@md': {
      marginLeft: '0',
      display: 'flex',
      position: 'static',
      height: '100vh',
      transform: 'translateX(0)',
   },
   'variants': {
      collapsed: {
         true: {
            display: 'inherit',
            marginLeft: '0 ',
            transform: 'translateX(0)',
         },
      },
   },
});

export const Overlay = styled('div', {
   'backgroundColor': '',
   'position': 'fixed',
   'inset': 0,
   'zIndex': '201',
   'transition': 'opacity 0.3s ease',
   'opacity': 0.8,
   '@md': {
      display: 'none',
      zIndex: 'auto',
      opacity: 1,
   },
});

export const Header = styled('div', {
   display: 'flex',
   gap: '$9',
   alignItems: 'center',
   'justifyContent': 'center',
   px: '$10',
});

export const Body = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   gap: '$6',
   mt: '$10',
   // px: '$4',
});

export const Footer = styled('div', {
   'display': 'flex',
   'alignItems': 'center',
   'justifyContent': 'center',
   // 'gap': '$6',
   'pt': '$18',
   'pb': '$8',
   // '@md': {
   //    pt: 0,
   //    pb: 0,
   // },
   px: '$4',
});

export const Sidebar = Object.assign(SidebarWrapper, {
   Header,
   Body,
   Overlay,
   Footer,
});