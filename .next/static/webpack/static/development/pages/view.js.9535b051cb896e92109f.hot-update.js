webpackHotUpdate("static/development/pages/view.js",{

/***/ "./components/LiveTranscript/TextArea.jsx":
/*!************************************************!*\
  !*** ./components/LiveTranscript/TextArea.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_binding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react-binding */ "./components/LiveTranscript/react-binding.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/LiveTranscript/TextArea.jsx";




function TextArea(props) {
  var doc = props.doc,
      flag = props.flag;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var binding;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    doc.subscribe(function (err) {
      if (err) {
        setText('There was a connection error: ' + err);
      }
    }, []); // Load document and bind it to local snapshot.

    doc.on('load', function () {
      binding = new _react_binding__WEBPACK_IMPORTED_MODULE_2__["default"](doc.data, flag);
      setTimeout(function () {
        setText(binding.snapshot || 'Connection successful.');
      }, 0);
    }); // Apply remote ops to local snapshot.

    doc.on('op', function (op) {
      setTimeout(function () {
        setText(binding.applyOp(op));
      }, 0);
    }); // Destroy listeners.

    return function () {
      doc.unsubscribe();
      doc.destroy();
      binding = null;
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "transcript",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, text || '');
}

TextArea.propTypes = {
  doc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  flag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ })

})
//# sourceMappingURL=view.js.9535b051cb896e92109f.hot-update.js.map