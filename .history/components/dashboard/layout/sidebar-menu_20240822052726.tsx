import { Text } from '@nextui-org/react';
import React from 'react';
import { Flex } from './styles';


interface Props {
    title: string;
    children?: React.ReactNode;
};

export const SidebarMenu = ({ title, children }: Props) => {
    return (
                     'px': '$7',
                     <Flex css={{ gap: '$9',  }} direction={'column'}>
            <Text
                h1
                size={20}
                weight={'bold'}
                color='#99938F'
                css={{
                    // gap: '$10',
                    letterSpacing: '0.04em',
                    // lineHeight: '$lg',
                    fontFamily: "$sans",
                }}
            >
                {title}
            </Text>
            {children}
        </Flex>
    );
};