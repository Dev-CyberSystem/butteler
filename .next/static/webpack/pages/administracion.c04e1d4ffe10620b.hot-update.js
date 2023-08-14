"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/administracion",{

/***/ "./src/components/FormUpdateProductos.js":
/*!***********************************************!*\
  !*** ./src/components/FormUpdateProductos.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst FormUpdateProductos = (param)=>{\n    let { editProduct , getProducts , setShow  } = param;\n    _s();\n    console.log(editProduct, \"producto de form update\");\n    const [producto, setProducto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(editProduct);\n    const updateProducts = async (producto)=>{\n        console.log(producto, \"producto de context\");\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"http://localhost:8080/api/productos/actualizar/\".concat(producto._id), producto);\n            await getProducts();\n        } catch (error) {\n            console.log(error, \"error de productos\");\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        updateProducts(producto);\n        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({\n            icon: \"success\",\n            title: \"Producto actualizado\",\n            showConfirmButton: false,\n            timer: 1500\n        });\n        setProducto({\n            nombre: \"\",\n            precio: \"\",\n            descripcion: \"\",\n            presentacion: \"\",\n            stock: \"\",\n            imagen: \"\"\n        });\n        setShow(false);\n    };\n    const handleChange = (e)=>{\n        setProducto({\n            ...producto,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Carga de productos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"nombre\",\n                                        className: \"form-label\",\n                                        children: \"Nombre\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: producto.nombre,\n                                        onChange: handleChange,\n                                        className: \"form-control\",\n                                        name: \"nombre\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"precio\",\n                                        className: \"form-label\",\n                                        children: \"Precio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: producto.precio,\n                                        onChange: handleChange,\n                                        className: \"form-control\",\n                                        name: \"precio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"descripcion\",\n                                        className: \"form-label\",\n                                        children: \"Descripcion\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"form-control\",\n                                        name: \"descripcion\",\n                                        value: producto.descripcion,\n                                        onChange: handleChange,\n                                        rows: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"presentacion\",\n                                        className: \"form-label\",\n                                        children: \"Presentacion\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: producto.presentacion,\n                                        onChange: handleChange,\n                                        className: \"form-control\",\n                                        name: \"presentacion\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"stock\",\n                                        className: \"form-label\",\n                                        children: \"stock\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: producto.stock,\n                                        onChange: handleChange,\n                                        className: \"form-control\",\n                                        name: \"stock\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"imagen\",\n                                        className: \"form-label\",\n                                        children: \"Imagen\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: producto.imagen,\n                                        onChange: handleChange,\n                                        className: \"form-control\",\n                                        name: \"imagen\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"outline-success\",\n                                    type: \"submit\",\n                                    children: \"Editar Producto\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                                lineNumber: 129,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\FormUpdateProductos.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormUpdateProductos, \"9SXgf9zkOFKLFYjKoFFQY/aM7As=\");\n_c = FormUpdateProductos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormUpdateProductos);\nvar _c;\n$RefreshReg$(_c, \"FormUpdateProductos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtVXBkYXRlUHJvZHVjdG9zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBQzdCO0FBQ0Y7QUFDTDtBQUUxQixNQUFNTyxzQkFBc0I7UUFBQyxFQUFFQyxZQUFXLEVBQUVDLFlBQVcsRUFBRUMsUUFBTyxFQUFFOztJQUM5REMsUUFBUUMsSUFBSUosYUFBYTtJQUMzQixNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUNJO0lBRXpDLE1BQU1PLGlCQUFpQixPQUFPRjtRQUM1QkYsUUFBUUMsSUFBSUMsVUFBVTtRQUN0QixJQUFJO1lBQ0YsTUFBTVAsaURBQVNVLENBQ2Isa0RBQStELE9BQWJILFNBQVNJLE1BQzNESjtZQUVGLE1BQU1KO1FBQ1IsRUFBRSxPQUFPUyxPQUFPO1lBQ2RQLFFBQVFDLElBQUlNLE9BQU87UUFDckI7SUFDRjtJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDO1FBQ0ZOLGVBQWVGO1FBQ2ZSLHVEQUFTaUIsQ0FBQztZQUNSQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsbUJBQW1CO1lBQ25CQyxPQUFPO1FBQ1Q7UUFDQVosWUFBWTtZQUNWYSxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsYUFBYTtZQUNiQyxjQUFjO1lBQ2RDLE9BQU87WUFDUEMsUUFBUTtRQUNWO1FBQ0F0QixRQUFRO0lBQ1Y7SUFFQSxNQUFNdUIsZUFBZSxDQUFDYjtRQUNwQk4sWUFBWTtZQUNWLEdBQUdELFFBQVE7WUFDWCxDQUFDTyxFQUFFYyxPQUFPQyxLQUFLLEVBQUVmLEVBQUVjLE9BQU9FO1FBQzVCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3BDLHNEQUFTQTtrQkFDUiw0RUFBQ0MsZ0RBQUdBO3NCQUNGLDRFQUFDQyxnREFBR0E7O2tDQUNGLDhEQUFDbUM7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUtDLFVBQVVwQjs7MENBQ2QsOERBQUNxQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFNQyxTQUFRO3dDQUFTRixXQUFVO2tEQUFhOzs7Ozs7a0RBRy9DLDhEQUFDRzt3Q0FDQ0MsTUFBSzt3Q0FDTFQsT0FBT3ZCLFNBQVNjO3dDQUNoQm1CLFVBQVViO3dDQUNWUSxXQUFVO3dDQUNWTixNQUFLOzs7Ozs7Ozs7Ozs7MENBSVQsOERBQUNLO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0M7d0NBQU1DLFNBQVE7d0NBQVNGLFdBQVU7a0RBQWE7Ozs7OztrREFHL0MsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMVCxPQUFPdkIsU0FBU2U7d0NBQ2hCa0IsVUFBVWI7d0NBQ1ZRLFdBQVU7d0NBQ1ZOLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ0s7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBTUMsU0FBUTt3Q0FBY0YsV0FBVTtrREFBYTs7Ozs7O2tEQUdwRCw4REFBQ007d0NBQ0NOLFdBQVU7d0NBQ1ZOLE1BQUs7d0NBQ0xDLE9BQU92QixTQUFTZ0I7d0NBQ2hCaUIsVUFBVWI7d0NBQ1ZlLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ1I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBTUMsU0FBUTt3Q0FBZUYsV0FBVTtrREFBYTs7Ozs7O2tEQUdyRCw4REFBQ0c7d0NBQ0NDLE1BQUs7d0NBQ0xULE9BQU92QixTQUFTaUI7d0NBQ2hCZ0IsVUFBVWI7d0NBQ1ZRLFdBQVU7d0NBQ1ZOLE1BQUs7Ozs7Ozs7Ozs7OzswQ0FHVCw4REFBQ0s7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBTUMsU0FBUTt3Q0FBUUYsV0FBVTtrREFBYTs7Ozs7O2tEQUc5Qyw4REFBQ0c7d0NBQ0NDLE1BQUs7d0NBQ0xULE9BQU92QixTQUFTa0I7d0NBQ2hCZSxVQUFVYjt3Q0FDVlEsV0FBVTt3Q0FDVk4sTUFBSzs7Ozs7Ozs7Ozs7OzBDQUdULDhEQUFDSztnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFNQyxTQUFRO3dDQUFTRixXQUFVO2tEQUFhOzs7Ozs7a0RBRy9DLDhEQUFDRzt3Q0FDQ0MsTUFBSzt3Q0FDTFQsT0FBT3ZCLFNBQVNtQjt3Q0FDaEJjLFVBQVViO3dDQUNWUSxXQUFVO3dDQUNWTixNQUFLOzs7Ozs7Ozs7Ozs7MENBR1QsOERBQUNLO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDdEMsbURBQU1BO29DQUFDOEMsU0FBUTtvQ0FBa0JKLE1BQUs7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM5RDtHQXJJTXRDO0tBQUFBO0FBdUlOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybVVwZGF0ZVByb2R1Y3Rvcy5qcz8xOWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEZvcm1VcGRhdGVQcm9kdWN0b3MgPSAoeyBlZGl0UHJvZHVjdCwgZ2V0UHJvZHVjdHMsIHNldFNob3cgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZWRpdFByb2R1Y3QsIFwicHJvZHVjdG8gZGUgZm9ybSB1cGRhdGVcIilcclxuICBjb25zdCBbcHJvZHVjdG8sIHNldFByb2R1Y3RvXSA9IHVzZVN0YXRlKGVkaXRQcm9kdWN0KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZHVjdHMgPSBhc3luYyAocHJvZHVjdG8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RvLCBcInByb2R1Y3RvIGRlIGNvbnRleHRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvcHJvZHVjdG9zL2FjdHVhbGl6YXIvJHtwcm9kdWN0by5faWR9YCxcclxuICAgICAgICBwcm9kdWN0b1xyXG4gICAgICApO1xyXG4gICAgICBhd2FpdCBnZXRQcm9kdWN0cygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IsIFwiZXJyb3IgZGUgcHJvZHVjdG9zXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB1cGRhdGVQcm9kdWN0cyhwcm9kdWN0byk7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgdGl0bGU6IFwiUHJvZHVjdG8gYWN0dWFsaXphZG9cIixcclxuICAgICAgc2hvd0NvbmZpcm1CdXR0b246IGZhbHNlLFxyXG4gICAgICB0aW1lcjogMTUwMCxcclxuICAgIH0pO1xyXG4gICAgc2V0UHJvZHVjdG8oe1xyXG4gICAgICBub21icmU6IFwiXCIsXHJcbiAgICAgIHByZWNpbzogXCJcIixcclxuICAgICAgZGVzY3JpcGNpb246IFwiXCIsXHJcbiAgICAgIHByZXNlbnRhY2lvbjogXCJcIixcclxuICAgICAgc3RvY2s6IFwiXCIsXHJcbiAgICAgIGltYWdlbjogXCJcIixcclxuICAgIH0pO1xyXG4gICAgc2V0U2hvdyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFByb2R1Y3RvKHtcclxuICAgICAgLi4ucHJvZHVjdG8sXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPGgxPkNhcmdhIGRlIHByb2R1Y3RvczwvaDE+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub21icmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RvLm5vbWJyZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByZWNpb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgIFByZWNpb1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0by5wcmVjaW99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVjaW9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBjaW9uXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgRGVzY3JpcGNpb25cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwY2lvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdG8uZGVzY3JpcGNpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcm93cz1cIjFcIlxyXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmVzZW50YWNpb25cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBQcmVzZW50YWNpb25cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RvLnByZXNlbnRhY2lvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInByZXNlbnRhY2lvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RvY2tcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBzdG9ja1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0by5zdG9ja31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0b2NrXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZW5cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICBJbWFnZW5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RvLmltYWdlbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgIEVkaXRhciBQcm9kdWN0b1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVVwZGF0ZVByb2R1Y3RvcztcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiU3dhbCIsImF4aW9zIiwiRm9ybVVwZGF0ZVByb2R1Y3RvcyIsImVkaXRQcm9kdWN0IiwiZ2V0UHJvZHVjdHMiLCJzZXRTaG93IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RvIiwic2V0UHJvZHVjdG8iLCJ1cGRhdGVQcm9kdWN0cyIsInB1dCIsIl9pZCIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJub21icmUiLCJwcmVjaW8iLCJkZXNjcmlwY2lvbiIsInByZXNlbnRhY2lvbiIsInN0b2NrIiwiaW1hZ2VuIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormUpdateProductos.js\n"));

/***/ })

});