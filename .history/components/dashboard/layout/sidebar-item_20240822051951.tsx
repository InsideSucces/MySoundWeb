import { Text, Link } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';
import { useSidebarContext } from './context';
import { Flex } from './styles';

interface Props {
   title: string;
   icon: React.ReactNode;
   isActive?: boolean;
   href?: any;
   badge?: React.ReactNode;
}

export const SidebarItem = ({ icon, title, isActive, href, badge }: Props) => {
   const { collapsed, setCollapsed } = useSidebarContext();

   const handleClick = () => {
      if (window.innerWidth < 868) {
         setCollapsed();
      }
   };

   return (
      <NextLink href={href} passHref shallow={true} legacyBehavior>
         <Link
            css={{
               color: '#99938F',
               maxWidth: '100%',
               fontFamily: 'Roboto',
               ...(isActive ? {
                  borderRight: '5px solid #2ECFCF',
               } : {})
            }}
         >
            <Flex
               onClick={handleClick}
               css={{
                  'gap': '$10',
                  'width': '100%',
                  'minHeight': '54px',
                  'height': '100%',
                  'alignItems': 'center',
                  'px': '$7',
                  'borderRadius': '8px',
                  'cursor': 'pointer',
                  'transition': 'all 0.15s ease',
                  '&:active': {
                     transform: 'scale(0.98)',
                  },
                  ...(isActive
                     ? {
                        'bg': '',
                        'color': '#2ECFCF',
                        // borderRight: '5px solid #2ECFCF',
                        '& svg path': {
                           fill: '#2ECFCF',
                        },
                     }
                     : { '&:hover': { bg: '$accents2' } }),
               }}
               align={'center'}
            >
               {icon}
               <Text
                  
                  b
                  weight={'semibold'}
                  // color='#2ECFCF'
                  size={20}
                  css={{
                     fontFamily: "$sans",
                     ...(isActive ? {
                        color: '#2ECFCF', // Set color to #2ECFCF when active
                     } : {
                        color: '#99938F', // Default color
                     }),
                  }}
                  className='text-white'
               >
                  {title}
               </Text>
               {badge && badge}
            </Flex>
         </Link>
      </NextLink>
   );
}