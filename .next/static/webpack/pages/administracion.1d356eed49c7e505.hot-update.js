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

/***/ "./src/components/TableProductos.js":
/*!******************************************!*\
  !*** ./src/components/TableProductos.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TableProductos = ()=>{\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getProducts = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://localhost:8080/api/productos\");\n            setProductos(response.data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const deleteProducts = async (_id)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://localhost:8080/api/productos/\".concat(_id));\n            console.log(response);\n            getProducts();\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    //   const [show, setShow] = useState(false);\n    //   const [editProduct, setEditProduct] = useState(null);\n    //   const handleClose = () => setShow(false);\n    const handleDelete = (_id)=>{\n        console.log(_id);\n        deleteProducts(_id);\n    };\n    const handleEdit = (producto)=>{\n    // setEditProduct(producto);\n    // setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Tabla Productos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            productos.length === 0 ? \"no hay productos en stock\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                    responsive: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                style: {\n                                    color: \"white\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Nombre\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Precio\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Descripci\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Presentaci\\xf3n\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Stock\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Acciones\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        productos.map((producto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: producto.nombre\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: producto.precio\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: producto.descripcion\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: producto.presentacion\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: producto.stock\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"warning\",\n                                                    className: \"m-1\",\n                                                    onClick: ()=>handleEdit(producto),\n                                                    children: \"Editar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                    variant: \"danger\",\n                                                    className: \"m-1\",\n                                                    onClick: ()=>handleDelete(producto._id),\n                                                    children: \"Eliminar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, producto._id, false, {\n                                fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USURIO\\\\Trabajos\\\\Butteler\\\\butteler\\\\src\\\\components\\\\TableProductos.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true);\n};\n_s(TableProductos, \"1DSHZPgX73L4Uszt4d22RALz2sY=\");\n_c = TableProductos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableProductos);\nvar _c;\n$RefreshReg$(_c, \"TableProductos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZVByb2R1Y3Rvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDVztBQUM3QjtBQUUxQixNQUFNTSxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDLE1BQU1RLGNBQWM7UUFDbEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUwsaURBQVNNLENBQUM7WUFFakNILGFBQWFFLFNBQVNFO1FBQ3hCLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxJQUFJRjtRQUNkO0lBQ0Y7SUFFQSxNQUFNRyxpQkFBaUIsT0FBT0M7UUFDNUIsSUFBSTtZQUNGLE1BQU1QLFdBQVcsTUFBTUwsdURBQVlhLENBQ2pDLHVDQUEyQyxPQUFKRDtZQUV6Q0gsUUFBUUMsSUFBSUw7WUFDWkQ7UUFDRixFQUFFLE9BQU9JLE9BQU87WUFDZEMsUUFBUUMsSUFBSUY7UUFDZDtJQUNGO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1JTO0lBQ0YsR0FBRyxFQUFFO0lBRUwsNkNBQTZDO0lBQzdDLDBEQUEwRDtJQUUxRCw4Q0FBOEM7SUFFOUMsTUFBTVUsZUFBZSxDQUFDRjtRQUNwQkgsUUFBUUMsSUFBSUU7UUFDWkQsZUFBZUM7SUFDakI7SUFFQSxNQUFNRyxhQUFhLENBQUNDO0lBQ2xCLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDbkI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7WUFFSGYsVUFBVWdCLFdBQVcsSUFDcEIsNENBRUE7MEJBQ0UsNEVBQUNyQixrREFBS0E7b0JBQUNzQixVQUFVOztzQ0FDZiw4REFBQ0M7c0NBQ0MsNEVBQUNDO2dDQUFHQyxPQUFPO29DQUFDQyxPQUFPO2dDQUFPOztrREFDeEIsOERBQUNDO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNBO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFHUHRCLFVBQVV1QixJQUFJLENBQUNULHlCQUNkLDhEQUFDVTswQ0FDQyw0RUFBQ0w7O3NEQUNDLDhEQUFDTTtzREFBSVgsU0FBU1k7Ozs7OztzREFDZCw4REFBQ0Q7c0RBQUlYLFNBQVNhOzs7Ozs7c0RBQ2QsOERBQUNGO3NEQUFJWCxTQUFTYzs7Ozs7O3NEQUNkLDhEQUFDSDtzREFBSVgsU0FBU2U7Ozs7OztzREFDZCw4REFBQ0o7c0RBQUlYLFNBQVNnQjs7Ozs7O3NEQUNkLDhEQUFDTDs7OERBQ0MsOERBQUM3QixtREFBTUE7b0RBQ0xtQyxTQUFRO29EQUNSQyxXQUFVO29EQUNWQyxTQUFTLElBQU1wQixXQUFXQzs4REFDM0I7Ozs7Ozs4REFHRCw4REFBQ2xCLG1EQUFNQTtvREFDTG1DLFNBQVE7b0RBQ1JDLFdBQVU7b0RBQ1ZDLFNBQVMsSUFBTXJCLGFBQWFFLFNBQVNKOzhEQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQW5CS0ksU0FBU0o7Ozs7Ozs7Ozs7Ozs7O0FBK0JuQztHQS9GTVg7S0FBQUE7QUFpR04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGVQcm9kdWN0b3MuanM/NzBiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24sIE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBUYWJsZVByb2R1Y3RvcyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0b3NcIik7XHJcblxyXG4gICAgICBzZXRQcm9kdWN0b3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvZHVjdHMgPSBhc3luYyAoX2lkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9wcm9kdWN0b3MvJHtfaWR9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyAgIGNvbnN0IFtlZGl0UHJvZHVjdCwgc2V0RWRpdFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIC8vICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRTaG93KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKF9pZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coX2lkKTtcclxuICAgIGRlbGV0ZVByb2R1Y3RzKF9pZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9IChwcm9kdWN0bykgPT4ge1xyXG4gICAgLy8gc2V0RWRpdFByb2R1Y3QocHJvZHVjdG8pO1xyXG4gICAgLy8gc2V0U2hvdyh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGg0PlRhYmxhIFByb2R1Y3RvczwvaDQ+XHJcblxyXG4gICAgICB7cHJvZHVjdG9zLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICBcIm5vIGhheSBwcm9kdWN0b3MgZW4gc3RvY2tcIlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0ciBzdHlsZT17e2NvbG9yOiBcIndoaXRlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDx0aD5Ob21icmU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPlByZWNpbzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcGNpw7NuPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5QcmVzZW50YWNpw7NuPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5TdG9jazwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+QWNjaW9uZXM8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0b3MubWFwKChwcm9kdWN0bykgPT4gKFxyXG4gICAgICAgICAgICAgIDx0Ym9keSBrZXk9e3Byb2R1Y3RvLl9pZH0+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG8ubm9tYnJlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG8ucHJlY2lvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdG8uZGVzY3JpcGNpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0by5wcmVzZW50YWNpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPntwcm9kdWN0by5zdG9ja308L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQocHJvZHVjdG8pfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwcm9kdWN0by5faWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEVsaW1pbmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVByb2R1Y3RvcztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGFibGUiLCJCdXR0b24iLCJNb2RhbCIsImF4aW9zIiwiVGFibGVQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJnZXRQcm9kdWN0cyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVByb2R1Y3RzIiwiX2lkIiwiZGVsZXRlIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlRWRpdCIsInByb2R1Y3RvIiwiaDQiLCJsZW5ndGgiLCJyZXNwb25zaXZlIiwidGhlYWQiLCJ0ciIsInN0eWxlIiwiY29sb3IiLCJ0aCIsIm1hcCIsInRib2R5IiwidGQiLCJub21icmUiLCJwcmVjaW8iLCJkZXNjcmlwY2lvbiIsInByZXNlbnRhY2lvbiIsInN0b2NrIiwidmFyaWFudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TableProductos.js\n"));

/***/ })

});