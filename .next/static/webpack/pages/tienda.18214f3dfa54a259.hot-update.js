"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tienda",{

/***/ "./pages/tienda.jsx":
/*!**************************!*\
  !*** ./pages/tienda.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/layouts/Layouts */ \"./src/layouts/Layouts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Tienda = ()=>{\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const traerProductos = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8080/api/productos\");\n        setProductos(res.data);\n    };\n    traerProductos();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tienda\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            productos.map((producto)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                        style: {\n                            width: \"18rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Img, {\n                                variant: \"top\",\n                                src: producto.imagen\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Body, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Title, {\n                                        children: producto.nombre\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Text, {\n                                        children: producto.descripcion\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        variant: \"primary\",\n                                        children: \"Go somewhere\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\pages\\\\tienda.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tienda, \"r2cj6HNyyQq5ItXn62Ge8oqTQGA=\");\n_c = Tienda;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tienda);\nvar _c;\n$RefreshReg$(_c, \"Tienda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aWVuZGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNXO0FBQ2Y7QUFDa0I7QUFDckI7QUFDMUIsTUFBTU0sU0FBUzs7SUFDYixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBO0lBRTFDLE1BQU1TLGlCQUFpQjtRQUNyQixNQUFNQyxNQUFNLE1BQU1MLGlEQUFTTSxDQUFDO1FBQzVCSCxhQUFhRSxJQUFJRTtJQUNuQjtJQUVBSDtJQUVBLHFCQUNFLDhEQUFDUiw0REFBT0E7OzBCQUNOLDhEQUFDWTswQkFBRzs7Ozs7O1lBRUhOLFVBQVVPLElBQUksQ0FBQ0M7OEJBQ2Q7OEJBQ0UsNEVBQUNaLGlEQUFJQTt3QkFBQ2EsT0FBTzs0QkFBRUMsT0FBTzt3QkFBUTs7MENBQzVCLDhEQUFDZCxxREFBUWU7Z0NBQUNDLFNBQVE7Z0NBQU1DLEtBQUtMLFNBQVNNOzs7Ozs7MENBQ3RDLDhEQUFDbEIsc0RBQVNtQjs7a0RBQ1IsOERBQUNuQix1REFBVW9CO2tEQUFFUixTQUFTUzs7Ozs7O2tEQUN0Qiw4REFBQ3JCLHNEQUFTc0I7a0RBQUVWLFNBQVNXOzs7Ozs7a0RBQ3JCLDhEQUFDdEIsbURBQU1BO3dDQUFDZSxTQUFRO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWxDOzs7Ozs7O0FBR047R0E1Qk1iO0tBQUFBO0FBNkJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RpZW5kYS5qc3g/OGQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tIFwiQC9zcmMvbGF5b3V0cy9MYXlvdXRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IFRpZW5kYSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgdHJhZXJQcm9kdWN0b3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Byb2R1Y3Rvc1wiKTtcclxuICAgIHNldFByb2R1Y3RvcyhyZXMuZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdHJhZXJQcm9kdWN0b3MoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRzPlxyXG4gICAgICA8aDE+VGllbmRhPC9oMT5cclxuXHJcbiAgICAgIHtwcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4ge1xyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogXCIxOHJlbVwiIH19PlxyXG4gICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz17cHJvZHVjdG8uaW1hZ2VufSAvPlxyXG4gICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDxDYXJkLlRpdGxlPntwcm9kdWN0by5ub21icmV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgIDxDYXJkLlRleHQ+e3Byb2R1Y3RvLmRlc2NyaXBjaW9ufTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5HbyBzb21ld2hlcmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH0pfVxyXG4gICAgPC9MYXlvdXRzPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRpZW5kYTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0cyIsIkxpbmsiLCJDYXJkIiwiQnV0dG9uIiwiYXhpb3MiLCJUaWVuZGEiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJ0cmFlclByb2R1Y3RvcyIsInJlcyIsImdldCIsImRhdGEiLCJoMSIsIm1hcCIsInByb2R1Y3RvIiwic3R5bGUiLCJ3aWR0aCIsIkltZyIsInZhcmlhbnQiLCJzcmMiLCJpbWFnZW4iLCJCb2R5IiwiVGl0bGUiLCJub21icmUiLCJUZXh0IiwiZGVzY3JpcGNpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tienda.jsx\n"));

/***/ })

});