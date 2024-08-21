import React from 'react';
import { Box, Flex } from './styles';
import { Input, Link, Text} from '@nextui-org/react';
import { BurguerButton } from './burger-btn';
interface Props {
    children: React.ReactNode;
}
export const NavbarWrapper = (props: Props) => {
    // useEffect(() => {
    //     getActiveRoute(routes);
    //   }, [pathname]);
    // }
    const getActiveRoute = (routes: any) => { }
    return (
        <Box
            css={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                flex: '1 1 auto',
                overflowY: 'auto',
                overflowX: 'hidden',
            }}
        >
            <Navbar
                defaultValue={`Dashboard`}
                css={{
                    'borderBottom': '1px solid $border',
                    'justifyContent': 'space-between',
                    background: '$transparent',
                    'width': '100%',
                    '@md': {
                        justifyContent: 'space-between',
                    },

                    '& .nextui-navbar-container': {
                        'border': 'none',
                        'maxWidth': '100%',

                        'gap': '$6',
                        '@md': {
                            justifyContent: 'space-between',
                        },
                    },
                }}
            >
                <Navbar.Content showIn="md">
                    <BurguerButton />
                </Navbar.Content>
                <NavbarContent>

                    <Flex css={{ gap: '96px', alignItems: 'center' }}>
                        <Flex css={{ gap: '20px', alignItems: 'center' }}>
                            <Text
                                size={20}
                                weight={'normal'}
                                css={{
                                    fontFamily: '$sans',
                                    color: '$accents9',
                                }}
                            >
                            </Text>
                            <Text
                                size={16}
                                weight={'medium'}
                                css={{
                                    fontFamily: '$sans',
                                    color: '$accents7',
                                }}
                            >

                            </Text>
                        </Flex>

                    </Flex>
                </NavbarContent>
                <NavbarContent>
                    <Flex css={{ gap: '17px', alignItems: 'center' }}>
                        <img className="w-52 h-52 relative rounded-xl" src="https://s3-alpha-sig.figma.com/img/6315/0ee4/95ff5313f4dac6958d3a7838bbfa7012?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QADyDBQPTUBHngfcx-5Ho0~r2ZsrWFx66z46iCT9hec9LF5XrIh5uI2DsrBfW5h57ImOjre0beHB6AVsWj9p4gRhMROmrzFmrrzyj0UzvZ9XjziNEwCW7IDwQa8NaM3-47AKGJ~eKW4Zu5-hfMk4IAhtz~d5zgpwp1bxZt1tydKlJN~fSm4pZCE0~BhlQyd9ZeRuui5gYBY2nfoxQHoDISGK6CMYtd-lLTs1x96vhlizW2G9ypoMYRfVsuzmUcBsxsQOtLsaoX8DXjW55XCKyFya2BDc0pXm75BUwPO1TlRLEVBVlazgqwqCB-PY1jkPsbVMWcIbh675IbCTDjYJbg__" srcSet="https://s3-alpha-sig.figma.com/img/6315/0ee4/95ff5313f4dac6958d3a7838bbfa7012?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QADyDBQPTUBHngfcx-5Ho0~r2ZsrWFx66z46iCT9hec9LF5XrIh5uI2DsrBfW5h57ImOjre0beHB6AVsWj9p4gRhMROmrzFmrrzyj0UzvZ9XjziNEwCW7IDwQa8NaM3-47AKGJ~eKW4Zu5-hfMk4IAhtz~d5zgpwp1bxZt1tydKlJN~fSm4pZCE0~BhlQyd9ZeRuui5gYBY2nfoxQHoDISGK6CMYtd-lLTs1x96vhlizW2G9ypoMYRfVsuzmUcBsxsQOtLsaoX8DXjW55XCKyFya2BDc0pXm75BUwPO1TlRLEVBVlazgqwqCB-PY1jkPsbVMWcIbh675IbCTDjYJbg__" />
                        <Flex css={{ gap: '10px', alignItems: 'center' }}>
                            <Flex css={{ flexDirection: 'column' }}>
                                <Text
                                    size={14}
                                    weight={'medium'}
                                    css={{
                                        fontFamily: '$sans',
                                        color: '$accents9',
                                    }}
                                >
                                    Ola Ugo
                                </Text>
                                <Text
                                    size={12}
                                    weight={'medium'}
                                    css={{
                                        fontFamily: '$sans',
                                        color: '$accents7',
                                        marginTop: '5px',
                                    }}
                                >
                                    Premium
                                </Text>
                            </Flex>
                            <div className="w-4 h-4 justify-center items-center flex">
                                <div className="w-4 h-4 relative">
                                </div>
                            </div>
                        </Flex>
                    </Flex>
                </NavbarContent>
            </Navbar>

            {props.children}
        </Box>
    );
}