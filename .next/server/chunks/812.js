"use strict";
exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 8812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function Profile() {
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const { 0: isvisible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("hidden");
    const HandleClick = (e)=>{
        e.preventDefault();
        let vis = document.getElementById('user').value;
        if (vis == "Emily Hurt") {
            setVisible("visible");
        } else {
            setVisible("hidden");
            toast({
                title: 'No User Found!',
                status: 'error',
                duration: 2000,
                isClosable: true
            });
        }
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
        spacing: 10,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                    children: "Search"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
                size: "md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                        placeholder: "try searching for Emily Hurt",
                        variant: "filled",
                        id: "user"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputRightElement, {
                        width: "4.5rem",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon,
                            size: "sm",
                            variant: "ghost",
                            onClick: (e)=>{
                                HandleClick(e);
                            },
                            type: "submit"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                py: 6,
                visibility: isvisible,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    maxW: '320px',
                    w: 'full',
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('white', 'gray.900'),
                    boxShadow: '2xl',
                    rounded: 'lg',
                    p: 6,
                    textAlign: 'center',
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            size: 'xl',
                            src: '/Emilly.jpeg',
                            alt: 'Avatar Alt',
                            mb: 4,
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            fontSize: '2xl',
                            fontFamily: 'body',
                            children: "Emily Hurt"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontWeight: 600,
                            color: 'gray.500',
                            mb: 4,
                            children: "@emily_hurt213"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            textAlign: 'center',
                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.700', 'gray.400'),
                            px: 3,
                            children: [
                                "Sales Manager, friendly person, coffee lover. PM for best car deals or",
                                ' ',
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: '#',
                                    color: 'blue.400',
                                    children: "#tag"
                                }),
                                ' ',
                                "me in your posts"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            align: 'center',
                            justify: 'center',
                            direction: 'row',
                            mt: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "200 Followers"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "155 Followings"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "2 posts"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            mt: 8,
                            direction: 'row',
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    flex: 1,
                                    fontSize: 'sm',
                                    rounded: 'full',
                                    _focus: {
                                        bg: 'gray.200'
                                    },
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    flex: 1,
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
                                    children: "Follow"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                py: 6,
                visibility: isvisible,
                id: "user",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    maxW: '320px',
                    w: 'full',
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('white', 'gray.900'),
                    boxShadow: '2xl',
                    rounded: 'lg',
                    p: 6,
                    textAlign: 'center',
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                            size: 'xl',
                            src: 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                            alt: 'Avatar Alt',
                            mb: 4,
                            pos: 'relative',
                            _after: {
                                content: '""',
                                w: 4,
                                h: 4,
                                bg: 'red.500',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 0,
                                right: 3
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            fontSize: '2xl',
                            fontFamily: 'body',
                            children: "Emily Hurt"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            fontWeight: 600,
                            color: 'gray.500',
                            mb: 4,
                            children: "@Hurt_15442"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            textAlign: 'center',
                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.700', 'gray.400'),
                            px: 3,
                            children: "Actress, musician, songwriter and artist. PM for work inquires."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            align: 'center',
                            justify: 'center',
                            direction: 'row',
                            mt: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "50 Followers"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "55 Followings"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                                    px: 2,
                                    py: 1,
                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('gray.50', 'gray.800'),
                                    fontWeight: '400',
                                    children: "6 posts"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            mt: 8,
                            direction: 'row',
                            spacing: 4,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    flex: 1,
                                    fontSize: 'sm',
                                    rounded: 'full',
                                    _focus: {
                                        bg: 'gray.200'
                                    },
                                    children: "Message"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    flex: 1,
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
                                    children: "Follow"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ })

};
;