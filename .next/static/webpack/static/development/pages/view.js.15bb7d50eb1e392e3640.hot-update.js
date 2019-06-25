webpackHotUpdate("static/development/pages/view.js",{

/***/ "./components/Toasts/index.js":
/*!************************************!*\
  !*** ./components/Toasts/index.js ***!
  \************************************/
/*! exports provided: DisconnectedToast, FetchingToast, LoadedToast, ReconnectedToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisconnectedToast", function() { return DisconnectedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchingToast", function() { return FetchingToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedToast", function() { return LoadedToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReconnectedToast", function() { return ReconnectedToast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/stanleysakai/Developer/upwordly-local/components/Toasts/index.js";




 // Toast contents.

var Fetching = function Fetching() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg text-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRunning"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), "Fetching job!");
};

var Loaded = function Loaded() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "Live transcription is now active!");
};

var Disconnected = function Disconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamation"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Attempting to reconnect..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), "You can also try refreshing the page.");
};

var Reconnected = function Reconnected() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: "pr-2",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faWifi"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Connection Restored."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Whew! \uD83E\uDD84"));
}; // Toast components.


var toastId = null;

var FetchingToast = function FetchingToast() {
  return toastId = Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fetching, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), {
    autoClose: false,
    position: 'bottom-right',
    type: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.WARNING,
    closeOnClick: true,
    draggable: true
  });
};

var LoadedToast = function LoadedToast() {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
  Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loaded, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), {
    autoClose: 3000,
    type: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
    position: 'bottom-right',
    closeOnClick: true,
    draggable: false,
    className: 'rotateY animated'
  });
};

var DisconnectedToast = function DisconnectedToast() {
  if (react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].isActive(toastId)) return;
  return toastId = Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Disconnected, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), {
    autoClose: false,
    position: 'top-center',
    type: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.ERROR,
    closeOnClick: true,
    draggable: true,
    toastId: toastId
  });
};

var ReconnectedToast = function ReconnectedToast() {
  react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss(toastId);
  Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Reconnected, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), {
    autoClose: 1500,
    position: 'top-center',
    type: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS,
    closeOnClick: true,
    draggable: true
  });
};



/***/ })

})
//# sourceMappingURL=view.js.15bb7d50eb1e392e3640.hot-update.js.map