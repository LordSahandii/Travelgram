"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 5406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BottomNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
// EXTERNAL MODULE: external "chakra-ui-bottom-navigation"
var external_chakra_ui_bottom_navigation_ = __webpack_require__(7777);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/Footer.js




const SocialButton = ({ children , label , href ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.button, {
        bg: (0,react_.useColorModeValue)('blackAlpha.100', 'whiteAlpha.100'),
        rounded: 'full',
        w: 8,
        h: 8,
        cursor: 'pointer',
        as: 'a',
        href: href,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.3s ease',
        _hover: {
            bg: (0,react_.useColorModeValue)('blackAlpha.200', 'whiteAlpha.200')
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.VisuallyHidden, {
                children: label
            }),
            children
        ]
    }));
};
function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        color: (0,react_.useColorModeValue)('gray.700', 'gray.200'),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            as: react_.Stack,
            maxW: '6xl',
            py: 4,
            direction: {
                base: 'column',
                md: 'row'
            },
            spacing: 4,
            justify: {
                base: 'center',
                md: 'space-between'
            },
            align: {
                base: 'center',
                md: 'center'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: "\xa9 Travelgram, All rights reserved"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: 'row',
                    spacing: 6,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialButton, {
                            label: 'Twitter',
                            href: '#',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialButton, {
                            label: 'YouTube',
                            href: '#',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaYoutube, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialButton, {
                            label: 'Instagram',
                            href: '#',
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {})
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./components/Header.js
var Header = __webpack_require__(7673);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./components/HomeContents/HomePageCarousel.js





// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
};
function HomePageCarousel() {
    const [slider1, setSlider] = external_react_default().useState(null);
    const top = (0,react_.useBreakpointValue)({
        base: '90%',
        md: '50%'
    });
    const side = (0,react_.useBreakpointValue)({
        base: '30%',
        md: '40px'
    });
    const cards = [
        {
            title: '',
            text: "",
            image: 'https://cdn.kimkim.com/files/a/images/ceb6c1ccfc1da56c233f4987e4ac58066d01bf36/big-570d6dbcc2255abf5a85e1d9ee4b3731.jpg'
        },
        {
            title: '',
            text: "",
            image: 'https://livability.com/wp-content/uploads/2018/05/PortlandME-LighthouseDusk.jpg'
        },
        {
            title: '',
            text: "",
            image: 'https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg'
        },
        {
            title: '',
            text: "",
            image: 'https://files.tripstodiscover.com/files/2015/10/Kyoto-Japan.jpg'
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        position: 'relative',
        height: '600px',
        width: 'full',
        overflow: 'hidden',
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                charSet: "UTF-8",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "left-arrow",
                variant: "ghost",
                position: "absolute",
                left: side,
                top: top,
                transform: 'translate(0%, -50%)',
                zIndex: 2,
                onClick: ()=>{
                    return slider1 === null || slider1 === void 0 ? void 0 : slider1.slickPrev();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiLeftArrowAlt, {
                    size: "40px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                "aria-label": "right-arrow",
                variant: "ghost",
                position: "absolute",
                right: side,
                top: top,
                transform: 'translate(0%, -50%)',
                zIndex: 2,
                onClick: ()=>{
                    return slider1 === null || slider1 === void 0 ? void 0 : slider1.slickNext();
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiRightArrowAlt, {
                    size: "40px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                ...settings,
                ref: (slider)=>setSlider(slider)
                ,
                children: cards.map((card, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        height: 'full',
                        width: "full",
                        position: "relative",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${card.image})`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                            size: "container.lg",
                            height: "600px",
                            position: "relative",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                spacing: 6,
                                w: 'full',
                                maxW: 'xl',
                                position: "absolute",
                                top: "20%",
                                left: "32%",
                                transform: "translate(0, -100%)",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    fontSize: {
                                        base: '4xl',
                                        md: '5xl',
                                        lg: '6xl'
                                    },
                                    fontWeight: "hairline",
                                    children: card.title
                                })
                            })
                        })
                    }, index)
                )
            })
        ]
    }));
};

// EXTERNAL MODULE: external "react-icons/fc"
var fc_ = __webpack_require__(178);
;// CONCATENATED MODULE: ./components/HomeContents/Features.js




const Feature = ({ title , text , icon  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                w: 16,
                h: 16,
                align: 'center',
                justify: 'center',
                color: 'white',
                rounded: 'full',
                bg: 'gray.100',
                mb: 1,
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                fontWeight: 600,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                color: 'gray.600',
                children: text
            })
        ]
    }));
};
function Features() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        p: 4,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
            columns: {
                base: 1,
                md: 3
            },
            spacing: 10,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        as: fc_.FcGlobe,
                        w: 10,
                        h: 10
                    }),
                    title: 'Travel Easy',
                    text: 'Experience your best travel with us. Find the best deals with us.'
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        as: fc_.FcGraduationCap,
                        w: 10,
                        h: 10
                    }),
                    title: 'Grudate Students',
                    text: 'Find the best deals for gradute students. Take your gap year as soon as possible, go have fun.'
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Feature, {
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(react_.Icon, {
                        as: fc_.FcDebt,
                        w: 10,
                        h: 10
                    }),
                    title: 'Pay only for yourself',
                    text: 'With the new system design, you dont need to pay for others'
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/HomeContents/BackgroundImg.js



function BackgroundImg() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        w: 'full',
        h: '100vh',
        backgroundImage: 'url(https://cdn.britannica.com/54/150954-050-F8D14782/Night-view-Parthenon-Athens.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
            w: 'full',
            justify: 'center',
            px: (0,react_.useBreakpointValue)({
                base: 4,
                md: 8
            }),
            bgGradient: 'linear(to-r, blackAlpha.600, transparent)',
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                maxW: '2xl',
                align: 'flex-start',
                spacing: 6,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        color: 'white',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontSize: (0,react_.useBreakpointValue)({
                            base: '3xl',
                            md: '4xl'
                        }),
                        children: "Explore the temple of the Greek Gods this season."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                        direction: 'row',
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            bg: 'blue.400',
                            rounded: 'full',
                            color: 'white',
                            _hover: {
                                bg: 'blue.500'
                            },
                            children: "Show me more"
                        })
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./components/HomeContents/HomeContents.js








const HomeContents = ()=>{
    const route = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
            w: "full",
            h: "full",
            p: 0,
            spacing: 8,
            justifyContent: "left",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    size: "md",
                    fontStyle: "oblique",
                    children: "Travel Anywhere, Any Season"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HomePageCarousel, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(BackgroundImg, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Features, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    }));
};
/* harmony default export */ const HomeContents_HomeContents = (HomeContents);

// EXTERNAL MODULE: ./pages/profile.js
var profile = __webpack_require__(8812);
;// CONCATENATED MODULE: ./components/ChatBoxContents/ChatBox.js




function ChatBox() {
    const route = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        spacing: 10,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                    children: "Chat Box"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        colorScheme: "teal",
                        children: "Create"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        colorScheme: "teal",
                        children: "Join"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                py: 6,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    maxW: '600px',
                    maxH: "300px",
                    w: 'full',
                    boxShadow: '2xl',
                    rounded: 'lg',
                    p: 6,
                    textAlign: 'left',
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                            size: 'lg',
                            src: '/Emilly.jpeg',
                            alt: 'Avatar Alt',
                            pos: 'relative',
                            _after: {
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'green.300',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                            direction: "row",
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                                    spacing: 0,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                            fontSize: '2xl',
                                            fontFamily: 'body',
                                            children: "Emily Hurt"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontWeight: 600,
                                            color: 'gray.500',
                                            children: "@emily_hurt213"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                    fontSize: 'sm',
                                    rounded: 'full',
                                    bg: 'blue.400',
                                    color: 'white',
                                    boxShadow: '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)',
                                    _hover: {
                                        bg: 'blue.500'
                                    },
                                    _focus: {
                                        bg: 'blue.500'
                                    },
                                    onClick: ()=>{
                                        route.push("/chat");
                                    },
                                    children: "Message"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/TravelContents/ThingsToDo.js







const ThingsToDo = ()=>{
    const { 0: i , 1: setI  } = (0,external_react_.useState)(0);
    const { 0: j , 1: setJ  } = (0,external_react_.useState)(0);
    const { 0: k , 1: setK  } = (0,external_react_.useState)(0);
    const children = /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiMap, {
        color: "gray.300"
    });
    const toast = (0,react_.useToast)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: 7,
        w: 'full',
        bg: (0,react_.useColorModeValue)('white', 'gray.900'),
        boxShadow: '2xl',
        rounded: 'lg',
        p: 6,
        textAlign: 'center',
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                children: "Things To Do In"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "text",
                            placeholder: "Things to do in"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "From:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date",
                            placeholder: "Pickup Date"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "To:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date",
                            placeholder: "Dropoff Date"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "teal",
                onClick: ()=>{
                    toast({
                        title: 'Found!!!',
                        description: "We've found the best deal for you",
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    });
                },
                children: "Search"
            })
        ]
    }));
};
/* harmony default export */ const TravelContents_ThingsToDo = (ThingsToDo);

;// CONCATENATED MODULE: ./components/TravelContents/Stay.js






const Stay = ()=>{
    const toast = (0,react_.useToast)();
    const { 0: i , 1: setI  } = (0,external_react_.useState)(0);
    const { 0: j , 1: setJ  } = (0,external_react_.useState)(0);
    const { 0: k , 1: setK  } = (0,external_react_.useState)(0);
    const children = /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiMap, {
        color: "gray.300"
    });
    const { 0: room , 1: setRoom  } = (0,external_react_.useState)(0);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: 7,
        w: 'full',
        bg: (0,react_.useColorModeValue)('white', 'gray.900'),
        boxShadow: '2xl',
        rounded: 'lg',
        p: 6,
        textAlign: 'center',
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                        as: react_.Button,
                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {}),
                        onClick: ()=>{
                            setI(j + k);
                        },
                        children: [
                            i,
                            " Travellers, ",
                            room,
                            " Rooms"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Adult ",
                                            j,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (j > 0) {
                                                setJ(j - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setJ(j + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Child ",
                                            k,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (k > 0) {
                                                setK(k - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setK(k + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Room ",
                                            room,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (room > 0) {
                                                setRoom(room - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setRoom(room + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                color: "#1A736A",
                                onClick: ()=>{
                                    setI(j + k);
                                },
                                children: "Done"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                children: "Where to Stay"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.InputRightElement, {
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "text",
                            placeholder: "Going to"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Check-in:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Check-out:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "teal",
                onClick: ()=>{
                    toast({
                        title: 'Found!!!',
                        description: "We've found the best deal for you",
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    });
                },
                children: "Search"
            })
        ]
    }));
};
/* harmony default export */ const TravelContents_Stay = (Stay);

;// CONCATENATED MODULE: ./components/TravelContents/Airplane.js






const Airplane = ()=>{
    const { 0: i , 1: setI  } = (0,external_react_.useState)(0);
    const toast = (0,react_.useToast)();
    const { 0: j , 1: setJ  } = (0,external_react_.useState)(0);
    const { 0: k , 1: setK  } = (0,external_react_.useState)(0);
    const { 0: types , 1: setTypes  } = (0,external_react_.useState)("Economy");
    const children = /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiMap, {
        color: "gray.300"
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: 7,
        w: 'full',
        bg: (0,react_.useColorModeValue)('white', 'gray.900'),
        boxShadow: '2xl',
        rounded: 'lg',
        p: 6,
        textAlign: 'center',
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                        as: react_.Button,
                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {}),
                        onClick: ()=>{
                            setI(j + k);
                        },
                        children: [
                            i,
                            " Travellers"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Adult ",
                                            j,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (j > 0) {
                                                setJ(j - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setJ(j + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Child ",
                                            k,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (k > 0) {
                                                setK(k - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setK(k + 1);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                        as: react_.Button,
                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {}),
                        onClick: ()=>{
                            setI(j + k);
                        },
                        children: types
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                onClick: ()=>{
                                    setTypes("Economy");
                                },
                                children: "Economy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                onClick: ()=>setTypes("Premium")
                                ,
                                children: "Premium"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                onClick: ()=>setTypes("Business Class")
                                ,
                                children: "Business Class"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                onClick: ()=>setTypes("First Class")
                                ,
                                children: "First Class"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                children: "Flight"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                type: "text",
                                placeholder: "Leaving From"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                                type: "text",
                                placeholder: "Going to"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Departing:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Returning:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "teal",
                onClick: ()=>{
                    toast({
                        title: 'Found!!!',
                        description: "We've found the best deal for you",
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    });
                },
                children: "Search"
            })
        ]
    }));
};
/* harmony default export */ const TravelContents_Airplane = (Airplane);

;// CONCATENATED MODULE: ./components/TravelContents/Cruise.js






const Cruise = ()=>{
    const { 0: i , 1: setI  } = (0,external_react_.useState)(0);
    const { 0: j , 1: setJ  } = (0,external_react_.useState)(0);
    const { 0: k , 1: setK  } = (0,external_react_.useState)(0);
    const children = /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiMap, {
        color: "gray.300"
    });
    const toast = (0,react_.useToast)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        spacing: 7,
        w: 'full',
        bg: (0,react_.useColorModeValue)('white', 'gray.900'),
        boxShadow: '2xl',
        rounded: 'lg',
        p: 6,
        textAlign: 'center',
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                        as: react_.Button,
                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.ChevronDownIcon, {}),
                        onClick: ()=>{
                            setI(j + k);
                        },
                        children: [
                            i,
                            " Travellers"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Adult ",
                                            j,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (j > 0) {
                                                setJ(j - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setJ(j + 1);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuDivider, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
                                gap: 3,
                                templateColumns: "repeat(3, 1fr)",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                                        children: [
                                            "Child ",
                                            k,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.MinusIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            if (k > 0) {
                                                setK(k - 1);
                                            }
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        as: icons_.AddIcon,
                                        variant: "ghost",
                                        size: "xxs",
                                        onClick: ()=>{
                                            setK(k + 1);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                children: "Getting a Cruise"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "text",
                            placeholder: "Going to"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: 2,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Departs as early as:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        children: "Departs as late as:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.InputGroup, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            type: "date"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                colorScheme: "teal",
                onClick: ()=>{
                    toast({
                        title: 'Found!!!',
                        description: "We've found the best deal for you",
                        status: 'success',
                        duration: 2000,
                        isClosable: true
                    });
                },
                children: "Search"
            })
        ]
    }));
};
/* harmony default export */ const TravelContents_Cruise = (Cruise);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
;// CONCATENATED MODULE: ./components/TravelContents/OnSale.js















function PriceWrapper({ children  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        mb: 4,
        shadow: "base",
        borderWidth: "1px",
        alignSelf: {
            base: 'center',
            lg: 'flex-start'
        },
        borderColor: (0,react_.useColorModeValue)('gray.200', 'gray.500'),
        borderRadius: 'xl',
        w: "70%",
        children: children
    }));
}
function ContentTravel({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        p: 0,
        maxW: "container.xxl",
        children: [
            children === 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TravelContents_ThingsToDo, {})
            }),
            children === "value" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TravelContents_Stay, {})
            }),
            children === 2 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TravelContents_Airplane, {})
            }),
            children === 3 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TravelContents_Cruise, {})
            })
        ]
    }));
}
function OnSale() {
    const { 0: index2 , 1: setIndex2  } = (0,external_react_.useState)(0);
    const route = (0,router_.useRouter)();
    // const ref = React.createRef();
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)("value");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
        w: "full",
        h: "full",
        spacing: 10,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                spacing: 7,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        justifyContent: "space-evenly",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: fa_.FaWpexplorer,
                                variant: "ghost",
                                onClick: ()=>{
                                    setIndex(0);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: md_.MdCardTravel,
                                variant: "ghost",
                                onClick: ()=>{
                                    setIndex("value");
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: md_.MdFlight,
                                variant: "ghost",
                                onClick: ()=>{
                                    setIndex(2);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                as: ri_.RiShip2Line,
                                variant: "ghost",
                                onClick: ()=>{
                                    setIndex(3);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ContentTravel, {
                        children: index
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                spacing: 2,
                textAlign: "center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        as: "h1",
                        fontSize: "4xl",
                        children: "Huge Deals!!!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontSize: "lg",
                        color: 'gray.500',
                        children: "Start booking for Spring and Summer with our best valuable packages."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                direction: {
                    base: 'column',
                    lg: 'row'
                },
                textAlign: "center",
                justify: "center",
                spacing: {
                    base: 4,
                    lg: 10
                },
                py: 10,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceWrapper, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                py: 4,
                                px: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontWeight: "800",
                                        fontSize: "2xl",
                                        children: "Cancun"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                        justifyContent: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontSize: "3xl",
                                                fontWeight: "900",
                                                children: "$1800"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontSize: "md",
                                                color: "gray.500",
                                                children: "5 days, 4 nights"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                bg: (0,react_.useColorModeValue)('gray.50', 'gray.700'),
                                py: 4,
                                borderBottomRadius: 'xl',
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                                        spacing: 3,
                                        textAlign: "start",
                                        px: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                                src: "/Cancun.webp",
                                                w: "100%",
                                                height: "100%"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        w: "80%",
                                        pt: 7,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                            w: "full",
                                            colorScheme: "teal",
                                            variant: "outline",
                                            onClick: ()=>{
                                                route.push('/cancun');
                                            },
                                            children: "Book Now"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PriceWrapper, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            position: "relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                    position: "absolute",
                                    top: "-26px",
                                    left: "50%",
                                    style: {
                                        transform: 'translate(-50%)'
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        textTransform: "uppercase",
                                        bg: (0,react_.useColorModeValue)('teal.300', 'teal.700'),
                                        px: 3,
                                        py: 1,
                                        color: (0,react_.useColorModeValue)('gray.900', 'gray.300'),
                                        fontSize: "sm",
                                        fontWeight: "600",
                                        rounded: "xl",
                                        children: "Most Popular"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                    py: 4,
                                    px: 12,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontWeight: "800",
                                            fontSize: "2xl",
                                            children: "Santorini"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                            justifyContent: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    fontSize: "3xl",
                                                    fontWeight: "900",
                                                    children: "$2400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                    fontSize: "md",
                                                    color: "gray.500",
                                                    children: "14 days"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                    bg: (0,react_.useColorModeValue)('gray.50', 'gray.700'),
                                    py: 4,
                                    borderBottomRadius: 'xl',
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                                            spacing: 3,
                                            textAlign: "start",
                                            px: 12,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                                    src: "/Santorini.jpeg",
                                                    w: "100%",
                                                    height: "100%"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                            w: "80%",
                                            pt: 7,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                                w: "full",
                                                colorScheme: "teal",
                                                onClick: ()=>{
                                                    route.push('/santorini');
                                                },
                                                children: "Book Now"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PriceWrapper, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                py: 4,
                                px: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                        fontWeight: "800",
                                        fontSize: "2xl",
                                        children: "Paris"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                        justifyContent: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontSize: "3xl",
                                                fontWeight: "900",
                                                children: "$3000"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                                fontSize: "md",
                                                color: "gray.500",
                                                children: "10 days"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VStack, {
                                bg: (0,react_.useColorModeValue)('gray.50', 'gray.700'),
                                py: 4,
                                borderBottomRadius: 'xl',
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.List, {
                                        spacing: 3,
                                        textAlign: "start",
                                        px: 12,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                                src: "/Paris.jpeg",
                                                w: "100%",
                                                height: "100%"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                        w: "80%",
                                        pt: 7,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                            w: "full",
                                            colorScheme: "teal",
                                            variant: "outline",
                                            onClick: ()=>{
                                                route.push('/paris');
                                            },
                                            children: "Book Now"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/content.js









function Content({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
        p: 0,
        maxW: "container.xxl",
        children: [
            children === 0 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(OnSale, {})
            }),
            children === "value" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(HomeContents_HomeContents, {})
            }),
            children === 2 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(ChatBox, {})
            }),
            children === 3 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(profile["default"], {})
            })
        ]
    }));
}

// EXTERNAL MODULE: external "react-icons/gi"
var gi_ = __webpack_require__(8866);
;// CONCATENATED MODULE: ./components/BottomNav.js











function BottomNav() {
    const { 0: index , 1: setIndex  } = (0,external_react_.useState)("value");
    console.log("render", {
        index
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        p: 10,
        py: 20,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                children: index
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_bottom_navigation_.BottomNavigation, {
                value: index,
                onChange: (newIndex)=>{
                    setIndex(newIndex);
                },
                colorScheme: "cyan",
                variant: "float",
                showLabel: "if-active",
                borderRadius: 20,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_bottom_navigation_.BottomNavigationItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationIcon, {
                                as: gi_.GiCommercialAirplane
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationLabel, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_bottom_navigation_.BottomNavigationItem, {
                        value: "value",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationIcon, {
                                as: md_.MdHome
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationLabel, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_bottom_navigation_.BottomNavigationItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationIcon, {
                                as: icons_.ChatIcon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationLabel, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_chakra_ui_bottom_navigation_.BottomNavigationItem, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationIcon, {
                                as: icons_.Search2Icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_chakra_ui_bottom_navigation_.BottomNavigationLabel, {})
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);









const Header = ()=>{
    const { 0: log , 1: setLog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( true ? 'Login' : 0);
    const { colorMode , toggleColorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handleClick = (e)=>{
        e.preventDefault();
        router.push("/Map");
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            bg: "teal.400",
            px: 4,
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
            position: "absolute",
            width: "full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                h: 16,
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton,
                                "aria-label": "Options",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {}),
                                variant: "outline",
                                borderColor: "teal.400"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                                bg: "#60B5AC",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CalendarIcon, {}),
                                        onClick: ()=>{
                                            router.push("/notbook");
                                        },
                                        children: "Notebook"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillCar, {}),
                                        onClick: ()=>{
                                            router.push("/rent");
                                        },
                                        children: "Rent"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.EditIcon, {}),
                                        onClick: ()=>{
                                            router.push("/aboutUs");
                                        },
                                        children: "About Me"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        fontFamily: "cursive",
                        fontWeight: "bold",
                        fontSize: "2xl",
                        children: "Travelgram"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: 'row',
                            spacing: 3,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    onClick: toggleColorMode,
                                    bg: "teal.400",
                                    children: colorMode === 'light' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {})
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button,
                                            rounded: 'full',
                                            variant: 'link',
                                            cursor: 'pointer',
                                            minW: 0,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                size: 'sm',
                                                src: 'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                                            alignItems: 'center',
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                        size: '2xl',
                                                        src: 'https://avatars.dicebear.com/api/bottts/wqeqqe.svg'
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Username"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuDivider, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                    onClick: ()=>{
                                                        router.push("/myprofile");
                                                    },
                                                    children: "View Profile"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                    onClick: ()=>{
                                                        router.push("/settings");
                                                    },
                                                    children: "Account Settings"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        alert("Logged out successfully");
                                                        setLog(log === 'Logout' ? 'Login' : 'Logout');
                                                    },
                                                    children: log === 'Logout' ? 'Login' : 'Logout'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;