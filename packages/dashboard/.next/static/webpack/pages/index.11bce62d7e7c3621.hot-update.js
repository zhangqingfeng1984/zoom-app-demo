"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/dashboard/top-nav.js":
/*!******************************************!*\
  !*** ./src/layouts/dashboard/top-nav.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopNav\": function() { return /* binding */ TopNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/solid/BellIcon */ \"./node_modules/@heroicons/react/24/solid/esm/BellIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid/UsersIcon */ \"./node_modules/@heroicons/react/24/solid/esm/UsersIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid/Bars3Icon */ \"./node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js\");\n/* harmony import */ var _heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid/MagnifyingGlassIcon */ \"./node_modules/@heroicons/react/24/solid/esm/MagnifyingGlassIcon.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/hooks/use-popover */ \"./src/hooks/use-popover.js\");\n/* harmony import */ var _account_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-popover */ \"./src/layouts/dashboard/account-popover.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SIDE_NAV_WIDTH = 280;\nconst TOP_NAV_HEIGHT = 64;\nconst TopNav = (props)=>{\n    _s();\n    const { onNavOpen  } = props;\n    const lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)((theme)=>theme.breakpoints.up(\"lg\"));\n    const accountPopover = (0,src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_1__.usePopover)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                component: \"header\",\n                sx: {\n                    backdropFilter: \"blur(6px)\",\n                    backgroundColor: (theme)=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.alpha)(theme.palette.background.default, 0.8),\n                    position: \"sticky\",\n                    left: {\n                        lg: \"\".concat(SIDE_NAV_WIDTH, \"px\")\n                    },\n                    top: 0,\n                    width: {\n                        lg: \"calc(100% - \".concat(SIDE_NAV_WIDTH, \"px)\")\n                    },\n                    zIndex: (theme)=>theme.zIndex.appBar\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    alignItems: \"center\",\n                    direction: \"row\",\n                    justifyContent: \"space-between\",\n                    spacing: 2,\n                    sx: {\n                        minHeight: TOP_NAV_HEIGHT,\n                        px: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                            alignItems: \"center\",\n                            direction: \"row\",\n                            spacing: 2,\n                            children: [\n                                !lgUp && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                    onClick: onNavOpen,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {\n                                        fontSize: \"small\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_Bars3Icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                                    title: \"Search\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {\n                                            fontSize: \"small\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_MagnifyingGlassIcon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                            alignItems: \"center\",\n                            direction: \"row\",\n                            spacing: 2,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                                    title: \"Contacts\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {\n                                            fontSize: \"small\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_UsersIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                                    title: \"Notifications\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Badge, {\n                                            badgeContent: 4,\n                                            color: \"success\",\n                                            variant: \"dot\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, {\n                                                fontSize: \"small\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid_BellIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                    onClick: accountPopover.handleOpen,\n                                    ref: accountPopover.anchorRef,\n                                    sx: {\n                                        cursor: \"pointer\",\n                                        height: 40,\n                                        width: 40\n                                    },\n                                    src: \"/assets/avatars/avatar-fran-perez.png\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_account_popover__WEBPACK_IMPORTED_MODULE_2__.AccountPopover, {\n                anchorEl: accountPopover.anchorRef.current,\n                open: accountPopover.open,\n                onClose: accountPopover.handleClose\n            }, void 0, false, {\n                fileName: \"D:\\\\js\\\\zoom-demo\\\\packages\\\\dashboard\\\\src\\\\layouts\\\\dashboard\\\\top-nav.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TopNav, \"TBT9c7mUm4Vvjb3DKe0yttAv+3Q=\", false, function() {\n    return [\n        _mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery,\n        src_hooks_use_popover__WEBPACK_IMPORTED_MODULE_1__.usePopover\n    ];\n});\n_c = TopNav;\nTopNav.propTypes = {\n    onNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func)\n};\nvar _c;\n$RefreshReg$(_c, \"TopNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvdG9wLW5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFDdUI7QUFDRTtBQUNBO0FBQ29CO0FBVXpEO0FBQ3NCO0FBQ007QUFDQTtBQUVuRCxNQUFNZ0IsaUJBQWlCO0FBQ3ZCLE1BQU1DLGlCQUFpQjtBQUVoQixNQUFNQyxTQUFTLENBQUNDLFFBQVU7O0lBQy9CLE1BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUdEO0lBQ3RCLE1BQU1FLE9BQU9ULDREQUFhQSxDQUFDLENBQUNVLFFBQVVBLE1BQU1DLFdBQVcsQ0FBQ0MsRUFBRSxDQUFDO0lBQzNELE1BQU1DLGlCQUFpQlgsaUVBQVVBO0lBRWpDLHFCQUNFOzswQkFDRSw4REFBQ1AsOENBQUdBO2dCQUNGbUIsV0FBVTtnQkFDVkMsSUFBSTtvQkFDRkMsZ0JBQWdCO29CQUNoQkMsaUJBQWlCLENBQUNQLFFBQVVULDJEQUFLQSxDQUFDUyxNQUFNUSxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTyxFQUFFO29CQUNwRUMsVUFBVTtvQkFDVkMsTUFBTTt3QkFDSkMsSUFBSSxHQUFrQixPQUFmbkIsZ0JBQWU7b0JBQ3hCO29CQUNBb0IsS0FBSztvQkFDTEMsT0FBTzt3QkFDTEYsSUFBSSxlQUE4QixPQUFmbkIsZ0JBQWU7b0JBQ3BDO29CQUNBc0IsUUFBUSxDQUFDaEIsUUFBVUEsTUFBTWdCLE1BQU0sQ0FBQ0MsTUFBTTtnQkFDeEM7MEJBRUEsNEVBQUM5QixnREFBS0E7b0JBQ0orQixZQUFXO29CQUNYQyxXQUFVO29CQUNWQyxnQkFBZTtvQkFDZkMsU0FBUztvQkFDVGhCLElBQUk7d0JBQ0ZpQixXQUFXM0I7d0JBQ1g0QixJQUFJO29CQUNOOztzQ0FFQSw4REFBQ3BDLGdEQUFLQTs0QkFDSitCLFlBQVc7NEJBQ1hDLFdBQVU7NEJBQ1ZFLFNBQVM7O2dDQUVSLENBQUN0QixzQkFDQSw4REFBQ2IscURBQVVBO29DQUFDc0MsU0FBUzFCOzhDQUNuQiw0RUFBQ1Ysa0RBQU9BO3dDQUFDcUMsVUFBUztrREFDaEIsNEVBQUM1QywyRUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJaEIsOERBQUNRLGtEQUFPQTtvQ0FBQ3FDLE9BQU07OENBQ2IsNEVBQUN4QyxxREFBVUE7a0RBQ1QsNEVBQUNFLGtEQUFPQTs0Q0FBQ3FDLFVBQVM7c0RBQ2hCLDRFQUFDM0MscUZBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSzVCLDhEQUFDSyxnREFBS0E7NEJBQ0orQixZQUFXOzRCQUNYQyxXQUFVOzRCQUNWRSxTQUFTOzs4Q0FFVCw4REFBQ2hDLGtEQUFPQTtvQ0FBQ3FDLE9BQU07OENBQ2IsNEVBQUN4QyxxREFBVUE7a0RBQ1QsNEVBQUNFLGtEQUFPQTs0Q0FBQ3FDLFVBQVM7c0RBQ2hCLDRFQUFDN0MsMkVBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJaEIsOERBQUNTLGtEQUFPQTtvQ0FBQ3FDLE9BQU07OENBQ2IsNEVBQUN4QyxxREFBVUE7a0RBQ1QsNEVBQUNGLGdEQUFLQTs0Q0FDSjJDLGNBQWM7NENBQ2RDLE9BQU07NENBQ05DLFNBQVE7c0RBRVIsNEVBQUN6QyxrREFBT0E7Z0RBQUNxQyxVQUFTOzBEQUNoQiw0RUFBQzlDLDBFQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLakIsOERBQUNJLGlEQUFNQTtvQ0FDTHlDLFNBQVNyQixlQUFlMkIsVUFBVTtvQ0FDbENDLEtBQUs1QixlQUFlNkIsU0FBUztvQ0FDN0IzQixJQUFJO3dDQUNGNEIsUUFBUTt3Q0FDUkMsUUFBUTt3Q0FDUm5CLE9BQU87b0NBQ1Q7b0NBQ0FvQixLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLWiw4REFBQzFDLDREQUFjQTtnQkFDYjJDLFVBQVVqQyxlQUFlNkIsU0FBUyxDQUFDSyxPQUFPO2dCQUMxQ0MsTUFBTW5DLGVBQWVtQyxJQUFJO2dCQUN6QkMsU0FBU3BDLGVBQWVxQyxXQUFXOzs7Ozs7OztBQUkzQyxFQUFFO0dBbEdXNUM7O1FBRUVOLHdEQUFhQTtRQUNIRSw2REFBVUE7OztLQUh0Qkk7QUFvR2JBLE9BQU82QyxTQUFTLEdBQUc7SUFDakIzQyxXQUFXcEIsd0RBQWM7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvZGFzaGJvYXJkL3RvcC1uYXYuanM/MmZiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJlbGxJY29uIGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQvQmVsbEljb24nO1xuaW1wb3J0IFVzZXJzSWNvbiBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkL1VzZXJzSWNvbic7XG5pbXBvcnQgQmFyczNJY29uIGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQvQmFyczNJY29uJztcbmltcG9ydCBNYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQvTWFnbmlmeWluZ0dsYXNzSWNvbic7XG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIEJhZGdlLFxuICBCb3gsXG4gIEljb25CdXR0b24sXG4gIFN0YWNrLFxuICBTdmdJY29uLFxuICBUb29sdGlwLFxuICB1c2VNZWRpYVF1ZXJ5XG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgYWxwaGEgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgeyB1c2VQb3BvdmVyIH0gZnJvbSAnc3JjL2hvb2tzL3VzZS1wb3BvdmVyJztcbmltcG9ydCB7IEFjY291bnRQb3BvdmVyIH0gZnJvbSAnLi9hY2NvdW50LXBvcG92ZXInO1xuXG5jb25zdCBTSURFX05BVl9XSURUSCA9IDI4MDtcbmNvbnN0IFRPUF9OQVZfSEVJR0hUID0gNjQ7XG5cbmV4cG9ydCBjb25zdCBUb3BOYXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbk5hdk9wZW4gfSA9IHByb3BzO1xuICBjb25zdCBsZ1VwID0gdXNlTWVkaWFRdWVyeSgodGhlbWUpID0+IHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpKTtcbiAgY29uc3QgYWNjb3VudFBvcG92ZXIgPSB1c2VQb3BvdmVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveFxuICAgICAgICBjb21wb25lbnQ9XCJoZWFkZXJcIlxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJhY2tkcm9wRmlsdGVyOiAnYmx1cig2cHgpJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT4gYWxwaGEodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsIDAuOCksXG4gICAgICAgICAgcG9zaXRpb246ICdzdGlja3knLFxuICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgIGxnOiBgJHtTSURFX05BVl9XSURUSH1weGBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgbGc6IGBjYWxjKDEwMCUgLSAke1NJREVfTkFWX1dJRFRIfXB4KWBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguYXBwQmFyXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFRPUF9OQVZfSEVJR0hULFxuICAgICAgICAgICAgcHg6IDJcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgIGRpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICBzcGFjaW5nPXsyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshbGdVcCAmJiAoXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e29uTmF2T3Blbn0+XG4gICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgPEJhcnMzSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiU2VhcmNoXCI+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxTdmdJY29uIGZvbnRTaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxNYWduaWZ5aW5nR2xhc3NJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9TdmdJY29uPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIHNwYWNpbmc9ezJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJDb250YWN0c1wiPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8U3ZnSWNvbiBmb250U2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8VXNlcnNJY29uIC8+XG4gICAgICAgICAgICAgICAgPC9TdmdJY29uPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIk5vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBiYWRnZUNvbnRlbnQ9ezR9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRvdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFN2Z0ljb24gZm9udFNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8QmVsbEljb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FjY291bnRQb3BvdmVyLmhhbmRsZU9wZW59XG4gICAgICAgICAgICAgIHJlZj17YWNjb3VudFBvcG92ZXIuYW5jaG9yUmVmfVxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvYXZhdGFycy9hdmF0YXItZnJhbi1wZXJlei5wbmdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9Cb3g+XG4gICAgICA8QWNjb3VudFBvcG92ZXJcbiAgICAgICAgYW5jaG9yRWw9e2FjY291bnRQb3BvdmVyLmFuY2hvclJlZi5jdXJyZW50fVxuICAgICAgICBvcGVuPXthY2NvdW50UG9wb3Zlci5vcGVufVxuICAgICAgICBvbkNsb3NlPXthY2NvdW50UG9wb3Zlci5oYW5kbGVDbG9zZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Ub3BOYXYucHJvcFR5cGVzID0ge1xuICBvbk5hdk9wZW46IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkJlbGxJY29uIiwiVXNlcnNJY29uIiwiQmFyczNJY29uIiwiTWFnbmlmeWluZ0dsYXNzSWNvbiIsIkF2YXRhciIsIkJhZGdlIiwiQm94IiwiSWNvbkJ1dHRvbiIsIlN0YWNrIiwiU3ZnSWNvbiIsIlRvb2x0aXAiLCJ1c2VNZWRpYVF1ZXJ5IiwiYWxwaGEiLCJ1c2VQb3BvdmVyIiwiQWNjb3VudFBvcG92ZXIiLCJTSURFX05BVl9XSURUSCIsIlRPUF9OQVZfSEVJR0hUIiwiVG9wTmF2IiwicHJvcHMiLCJvbk5hdk9wZW4iLCJsZ1VwIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwiYWNjb3VudFBvcG92ZXIiLCJjb21wb25lbnQiLCJzeCIsImJhY2tkcm9wRmlsdGVyIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicG9zaXRpb24iLCJsZWZ0IiwibGciLCJ0b3AiLCJ3aWR0aCIsInpJbmRleCIsImFwcEJhciIsImFsaWduSXRlbXMiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInNwYWNpbmciLCJtaW5IZWlnaHQiLCJweCIsIm9uQ2xpY2siLCJmb250U2l6ZSIsInRpdGxlIiwiYmFkZ2VDb250ZW50IiwiY29sb3IiLCJ2YXJpYW50IiwiaGFuZGxlT3BlbiIsInJlZiIsImFuY2hvclJlZiIsImN1cnNvciIsImhlaWdodCIsInNyYyIsImFuY2hvckVsIiwiY3VycmVudCIsIm9wZW4iLCJvbkNsb3NlIiwiaGFuZGxlQ2xvc2UiLCJwcm9wVHlwZXMiLCJmdW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/top-nav.js\n"));

/***/ })

});