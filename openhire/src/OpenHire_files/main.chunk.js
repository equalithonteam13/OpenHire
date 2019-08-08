(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n\tbackground-color: #2d2d2a;\n}\n.App {\n\ttext-align: center;\n}\n\n.App-logo {\n\tanimation: App-logo-spin infinite 20s linear;\n\theight: 40vmin;\n\tpointer-events: none;\n}\n\n.App-header {\n\tbackground-color: #282c34;\n\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: calc(10px + 2vmin);\n\tcolor: white;\n}\n\n.App-link {\n\tcolor: #61dafb;\n}\n\n@keyframes App-logo-spin {\n\tfrom {\n\t\ttransform: rotate(0deg);\n\t}\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n.browse {\n\tdisplay: flex;\n\tjustify-content: center;\n\theight: 100vh;\n}\n\n.browseFilter {\n\tdisplay: flex;\n\tflex: 1 1;\n\tbackground-color: #2d2d2a;\n\tflex-direction: column;\n\tborder-radius: 10px;\n\tcolor: white;\n\ttext-decoration: underline;\n}\n\n.allLabels {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\tmargin-bottom: 10px;\n}\n.label {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\talign-items: center;\n}\n\n.browseResults {\n\tdisplay: flex;\n\tflex: 2 1;\n\tflex-direction: column;\n\tbackground-color: lightgray;\n\tborder-radius: 10px;\n}\n.results {\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\ttext-decoration: underline;\n}\n\n.results:hover {\n\tcursor: pointer;\n}\n\n.ui.menu {\n\tbackground-color: #2d2d2a;\n\tborder: #01ba98;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var drizzle_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-react */ "./node_modules/drizzle-react/dist/drizzle-react.js");
/* harmony import */ var drizzle_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(drizzle_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage */ "./src/HomePage.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/App.js";




/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(drizzle_react__WEBPACK_IMPORTED_MODULE_1__["DrizzleContext"].Consumer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, drizzleContext => {
  const drizzle = drizzleContext.drizzle,
        drizzleState = drizzleContext.drizzleState,
        initialized = drizzleContext.initialized;

  if (!initialized) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Loader"], {
      size: "massive",
      active: true,
      inline: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    drizzle: drizzle,
    drizzleState: drizzleState,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  });
}));

/***/ }),

/***/ "./src/Browse.js":
/*!***********************!*\
  !*** ./src/Browse.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Browse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/Browse.js";

 // Checkbox, Label, Icon

class Browse extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    this.handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleOnSubmit = async event => {
      event.preventDefault();
      const _this$state = this.state,
            allUsers = _this$state.allUsers,
            skillsToSearch = _this$state.skillsToSearch;
      let results = [];

      for (let i = 0; i < allUsers.length; i++) {
        const userSkills = allUsers[i][3];

        for (let j = 0; j < skillsToSearch.length; j++) {
          //if current user being checked does not have skill,
          if (!userSkills.includes(skillsToSearch[j])) {
            break;
          } //if current user contains all skills that is being searched, add user to results array


          if (j === skillsToSearch.length - 1) {
            results.push(allUsers[i]);
          }
        }
      }

      const numberOfSearches = this.state.numberOfSearches + 1;
      this.setState({
        numberOfSearches: numberOfSearches,
        searchResult: results,
        skillsToSearch: [],
        showAll: false
      });
    };

    this.addSkillToSearch = () => {
      let skillsToSearch = this.state.skillsToSearch;
      skillsToSearch.push(this.state.currentSkill);
      this.setState({
        currentSkill: "",
        skillsToSearch: skillsToSearch
      });
    };

    this.toggle = name => {
      this.setState({
        [name]: !this.state[name]
      });
    };

    this.state = {
      allUsers: [],
      currentSkill: "",
      skillsToSearch: [],
      searchResult: [],
      numberOfSearches: 0,
      loading: false,
      errorMessage: "",
      displayName: false,
      displayEmail: false,
      showAll: false
    };
  }

  async componentDidMount() {
    console.log("props", this.props);
    const drizzle = this.props.drizzle;
    let loop = true;
    let index = 0;
    let users = []; //loop through ALL users in our app

    while (loop) {
      try {
        //get userAddress at the current index
        let userAddress = await drizzle.contracts.OpenHire.methods.allUserAddresses(index).call(); //fetch user at current address

        let user = await drizzle.contracts.OpenHire.methods.getUserData(userAddress).call(); //number of skills current user has

        const skillLength = await drizzle.contracts.OpenHire.methods.getSkillListLength(userAddress).call();
        let userSkills = []; //get all the skills this user has

        for (let i = 0; i < skillLength; i++) {
          let skill = await drizzle.contracts.OpenHire.methods.getUserSkillData(userAddress, i).call(); //store only the name of the skill in userSkills array

          userSkills.push(skill[0]);
        } //attach all of userSkills to user object


        user[3] = userSkills; //attach userAddress to user object

        user[4] = userAddress;
        console.log(user);
        users.push(user);
        index++;
      } catch (error) {
        loop = false;
      }
    }

    this.setState({
      allUsers: users
    });
  }

  render() {
    const _this$state2 = this.state,
          skillsToSearch = _this$state2.skillsToSearch,
          searchResult = _this$state2.searchResult,
          allUsers = _this$state2.allUsers,
          numberOfSearches = _this$state2.numberOfSearches;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "browse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "browseFilter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, " Filters: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "allLabels",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Show All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      checked: this.state.showAll,
      onClick: () => this.toggle("showAll"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      checked: this.state.displayName,
      onClick: () => this.toggle("displayName"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      checked: this.state.displayEmail,
      onClick: () => this.toggle("displayEmail"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleOnSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      key: "currentSkill",
      name: "currentSkill",
      value: this.state.currentSkill,
      placeholder: "Add Skill to Search",
      onChange: this.handleOnChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "button",
      onClick: this.addSkillToSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Add Skill"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, skillsToSearch.map((skill, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Label"], {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, skill);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      disabled: this.state.loading,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Search"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "browseResults",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, numberOfSearches === 0 || this.state.showAll ? allUsers.map((user, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "results",
        key: index,
        onClick: () => this.props.props.history.push("/user/".concat(user[4])),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, " ", user[4]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, " ", this.state.displayName ? user[0] : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, " ", this.state.displayEmail ? user[1] : "", " "));
    }) : searchResult.map((user, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "results",
        key: index,
        onClick: () => this.props.props.history.push("/user/".concat(user[4])),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, " ", user[4]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, " ", this.state.displayName ? user[0] : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, " ", this.state.displayEmail ? user[1] : "", " "));
    })));
  }

}

/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignupForm */ "./src/SignupForm.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/Navbar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Browse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browse */ "./src/Browse.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _OrganizationComponents_OrgProfileComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OrganizationComponents/OrgProfileComponent */ "./src/OrganizationComponents/OrgProfileComponent.js");
/* harmony import */ var _UserComponents_SingleUserView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserComponents/SingleUserView */ "./src/UserComponents/SingleUserView.js");
/* harmony import */ var _SplashPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SplashPage */ "./src/SplashPage.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/HomePage.js";










class HomePage extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const _this$props = this.props,
          drizzle = _this$props.drizzle,
          drizzleState = _this$props.drizzleState;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      drizzle: drizzle,
      drizzleState: drizzleState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SplashPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          drizzle: drizzle,
          drizzleState: drizzleState,
          props: props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/browse",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Browse__WEBPACK_IMPORTED_MODULE_3__["default"], {
          drizzle: drizzle,
          drizzleState: drizzleState,
          props: props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/signup",
      render: () => {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SignupForm__WEBPACK_IMPORTED_MODULE_0__["default"], {
          drizzle: drizzle,
          drizzleState: drizzleState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/user/:address",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_UserComponents_SingleUserView__WEBPACK_IMPORTED_MODULE_8__["default"], {
          drizzle: drizzle,
          drizzleState: drizzleState,
          props: props,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/organization/:address",
      render: props => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_OrganizationComponents_OrgProfileComponent__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, props, {
        drizzle: drizzle,
        drizzleState: drizzleState,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/Navbar.js":
/*!***********************!*\
  !*** ./src/Navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar */ "./src/SearchBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/Navbar.js";





class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.handleItemClick = (e, {
      name
    }) => this.setState({
      activeItem: name
    });

    this.handleProfileClick = async (e, address) => {
      let orgData;
      let userData;

      try {
        orgData = await this.props.drizzle.contracts.OpenHire.methods.getOrganization(address).call();
        userData = await this.props.drizzle.contracts.OpenHire.methods.getUserData(address).call();

        if (orgData[2]) {
          this.setState({
            type: 'org'
          });
        } else if (userData[2]) {
          this.setState({
            type: 'user'
          });
        }

        return orgData;
      } catch (error) {
        console.log('ERROR');
      }
    };

    this.state = {
      activeItem: 'home',
      type: ''
    };
  }

  render() {
    const _this$state = this.state,
          activeItem = _this$state.activeItem,
          type = _this$state.type;
    const _this$props = this.props,
          drizzle = _this$props.drizzle,
          drizzleState = _this$props.drizzleState;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
      as: "h1",
      position: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "OpenHire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
      position: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "home",
      active: activeItem === 'home',
      onClick: () => {
        this.props.history.push('/');
        return this.handleItemClick;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "Browse",
      active: activeItem === 'button2',
      onClick: () => {
        this.props.history.push('/browse');
        return this.handleItemClick;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), drizzleState.accounts[0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "Profile",
      active: activeItem === 'button4',
      onClick: () => {
        this.handleProfileClick(drizzleState.accounts[0]);

        if (type === 'user') {
          this.props.history.push('/');
          this.props.history.push("/user/".concat(drizzleState.accounts[0]));
        } else if (type === 'org') {
          this.props.history.push('/');
          this.props.history.push("/organization/".concat(drizzleState.accounts[0]));
        }

        return this.handleItemClick;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      name: "Sign Up",
      active: activeItem === 'button3',
      onClick: () => {
        this.props.history.push('/signup');
        return this.handleItemClick;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      drizzle: drizzle,
      drizzleState: drizzleState,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(NavBar));

/***/ }),

/***/ "./src/OrganizationComponents/OrgProfileComponent.js":
/*!***********************************************************!*\
  !*** ./src/OrganizationComponents/OrgProfileComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrgProfileComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/OrganizationComponents/OrgProfileComponent.js";

class OrgProfileComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.fetchOrganizationStruct = async OrgAddress => {
      const orgStruct = await this.props.drizzle.contracts.OpenHire.methods.getOrganization(OrgAddress).call();
      this.setState({
        orgName: orgStruct[0],
        orgEmail: orgStruct[1],
        orgVerified: orgStruct[2]
      });
    };

    this.state = {
      orgName: null,
      orgEmail: null,
      orgVerified: null
    };
  }

  async componentDidMount() {
    // takes a org address as a prop/match.params from either searchbar or clicking on an org
    await this.fetchOrganizationStruct(this.props.match.params.address);
  }

  render() {
    if (this.state.orgName) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Organization Profile View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Name: ", this.state.orgName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Email Address: ", this.state.orgEmail));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.props.match.params.address, " address is not found!"));
  }

}

/***/ }),

/***/ "./src/OrganizationSearchBar.js":
/*!**************************************!*\
  !*** ./src/OrganizationSearchBar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrganizationSearchBar; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/OrganizationSearchBar.js";



const initialState = {
  isLoading: false,
  results: [],
  value: ''
};
const noResults = [{
  title: 'No results found.'
}];
class OrganizationSearchBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = initialState;

    this.handleSearchChange = (e, {
      value
    }) => {
      this.setState({
        isLoading: true,
        value
      });
      setTimeout(async () => {
        if (this.state.value.length < 1) return this.setState(initialState);

        if (this.state.value.length === 42) {
          const organizationData = await this.fetchOrganizationData(value);
          let results = [];

          if (organizationData) {
            results = [{
              title: organizationData[0],
              price: organizationData[1],
              description: this.state.value
            }];
          }

          this.setState({
            isLoading: false,
            results: results || noResults
          });
        }
      }, 300);
    };

    this.fetchOrganizationData = async address => {
      let data;

      try {
        data = await this.props.drizzle.contracts.OpenHire.methods.getOrganization(address).call();
        if (data[0] === '' || data === undefined) return undefined;
        return data;
      } catch (error) {}
    };
  }

  render() {
    const _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Organization Search"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Search"], {
      loading: isLoading,
      onResultSelect: this.props.handleResultSelect,
      onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(this.handleSearchChange, 500, {
        leading: true
      }),
      results: results,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/SearchBar.js":
/*!**************************!*\
  !*** ./src/SearchBar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/SearchBar.js";




const initialState = {
  isLoading: false,
  results: [],
  value: ''
};
const noResults = [{
  title: 'No results found.'
}];
const organizationNoResults = {
  organization: {
    name: 'Organization',
    results: noResults
  }
};
const userNoResults = {
  user: {
    name: 'User',
    results: noResults
  }
};

class SearchBar extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = initialState;

    this.handleResultSelect = (e, {
      result
    }) => {
      this.setState({
        value: result.title
      });
    };

    this.handleSearchChange = (e, {
      value
    }) => {
      this.setState({
        isLoading: true,
        value
      });
      setTimeout(async () => {
        if (this.state.value.length < 1) return this.setState(initialState);

        if (this.state.value.length === 42) {
          const organizationData = await this.fetchOrganizationData(value);
          const userData = await this.fetchUserData(value);
          let formattedData = '';

          if (organizationData) {
            formattedData = Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
              organization: {
                name: 'Organization',
                results: [{
                  title: organizationData[0],
                  description: organizationData[1]
                }]
              }
            }, userNoResults);
          } else if (userData) {
            formattedData = Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, organizationNoResults, {
              user: {
                name: 'User',
                results: [{
                  title: userData[0],
                  description: userData[1]
                }]
              }
            });
          }

          this.setState({
            isLoading: false,
            results: formattedData || Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, organizationNoResults, userNoResults)
          });
        }
      }, 300);
    };

    this.fetchOrganizationData = async address => {
      let data;

      try {
        data = await this.props.drizzle.contracts.OpenHire.methods.getOrganization(address).call();
        if (data[0] === '' || data === undefined) return undefined;
        return data;
      } catch (error) {}
    };

    this.fetchUserData = async address => {
      let data;

      try {
        data = await this.props.drizzle.contracts.OpenHire.methods.getUserData(address).call();
        if (data[0] === '' || data === undefined) return undefined;
        return data;
      } catch (error) {}
    };
  }

  render() {
    const _this$state = this.state,
          isLoading = _this$state.isLoading,
          value = _this$state.value,
          results = _this$state.results;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Search"], {
      category: true,
      placeholder: this.props.placeholder || 'Address',
      loading: isLoading,
      onResultSelect: (event, data) => {
        const user = data.results.user.results[0].title;
        const organization = data.results.organization.results[0].title;
        const noResults = 'No results found.';

        if (data.result.title !== noResults) {
          if (user === noResults) {
            this.props.history.push("/organization/".concat(this.state.value));
          } else if (organization === noResults) {
            this.props.history.push("/user/".concat(this.state.value));
          }
        }

        return this.handleResultSelect;
      },
      onSearchChange: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.debounce(this.handleSearchChange, 500, {
        leading: true
      }),
      results: results,
      value: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(SearchBar));

/***/ }),

/***/ "./src/SignupForm.js":
/*!***************************!*\
  !*** ./src/SignupForm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/SignupForm.js";



class SignupForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = async event => {
      event.preventDefault();
      this.setState({
        loading: true
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].info('Processing sign up...', {
        position: 'top-right',
        autoClose: 10000,
        transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__["Flip"]
      });

      try {
        if (this.state.organizationForm) {
          await this.props.drizzle.contracts.OpenHire.methods.createOrganization(this.state.name, this.state.email).send({
            from: this.state.currentAddress
          });
        } else {
          await this.props.drizzle.contracts.OpenHire.methods.createUser(this.state.name, this.state.email).send({
            from: this.state.currentAddress
          });
        }

        this.setState({
          errorMessage: ''
        });
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss();
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState({
        loading: false,
        name: '',
        email: ''
      });
    };

    this.toggleForm = option => {
      if (option !== undefined) {
        this.setState({
          organizationForm: option
        });
      } else {
        this.setState(prevState => ({
          organizationForm: !prevState.organizationForm
        }));
      }
    };

    this.state = {
      currentAddress: '',
      name: '',
      email: '',
      organizationForm: false,
      loading: false,
      errorMessage: ''
    };
  }

  async componentDidMount() {
    const currentAddress = await this.props.drizzle.web3.eth.getAccounts();
    this.setState({
      currentAddress: currentAddress[0]
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      as: "a",
      image: true,
      onClick: () => this.toggleForm(false),
      color: this.state.organizationForm ? 'grey' : 'blue',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), "User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      toggle: true,
      checked: this.state.organizationForm,
      onClick: () => this.toggleForm(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
      as: "a",
      onClick: () => this.toggleForm(true),
      color: this.state.organizationForm ? 'blue' : 'grey',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      name: "building",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), "Organization"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      key: "name",
      name: "name",
      value: this.state.name,
      placeholder: "Name",
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      key: "email",
      name: "email",
      value: this.state.email,
      placeholder: "Email Address",
      type: "email",
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      disabled: this.state.loading,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Submit")));
  }

}

/***/ }),

/***/ "./src/SplashPage.js":
/*!***************************!*\
  !*** ./src/SplashPage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ "./src/SearchBar.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/SplashPage.js";





const SplashPage = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    placeholder: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    columns: 2,
    stackable: true,
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), "Find Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    drizzle: props.drizzle,
    drizzleState: props.drizzleState,
    placeholder: 'Search profiles...',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    icon: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "building",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Create New Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    onClick: () => {
      props.history.push('/signup');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Sign Up"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SplashPage));

/***/ }),

/***/ "./src/UserComponents/ExperienceForm.js":
/*!**********************************************!*\
  !*** ./src/UserComponents/ExperienceForm.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExperienceForm; });
/* harmony import */ var _Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _OrganizationSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OrganizationSearchBar */ "./src/OrganizationSearchBar.js");

var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/UserComponents/ExperienceForm.js";




const defaultForm = {
  address: '',
  organization: '',
  expertise: '',
  duration: 0,
  employer: false,
  displayExperienceForm: false
};
class ExperienceForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = async () => {
      this.updatePage();
    };

    this.componentDidUpdate = prevProps => {
      if (this.props.pageAddress !== prevProps.pageAddress) {
        this.setState(Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          pageAddress: this.props.pageAddress
        }, defaultForm), () => {
          this.updatePage();
        });
      }
    };

    this.updatePage = async () => {
      const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];
      let ownPage = false;

      if (userAddress === this.props.pageAddress) {
        ownPage = true;
      }

      this.setState({
        userAddress,
        ownPage
      });
    };

    this.handleResultSelect = (e, {
      result
    }) => {
      this.setState({
        organization: result.title,
        address: result.description
      });
    };

    this.handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.addExperience = async event => {
      const _this$state = this.state,
            address = _this$state.address,
            organization = _this$state.organization,
            expertise = _this$state.expertise,
            duration = _this$state.duration,
            employer = _this$state.employer;
      event.preventDefault();
      this.setState({
        loading: true
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info('Processing sign up...', {
        position: 'top-right',
        autoClose: 10000,
        transition: react_toastify__WEBPACK_IMPORTED_MODULE_2__["Flip"]
      });

      try {
        await this.props.drizzle.contracts.OpenHire.methods.addExperience(address, organization, expertise, duration, employer).send({
          from: this.state.userAddress
        });
        this.setState({
          errorMessage: ''
        });
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].dismiss();
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState(Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        loading: false
      }, defaultForm));
    };

    this.toggleForm = option => {
      if (option !== undefined) {
        this.setState({
          employer: option
        });
      } else {
        this.setState(prevState => ({
          employer: !prevState.employer
        }));
      }
    };

    this.state = Object(_Users_sofia_equalithon_DappLinkedIn_openhire_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultForm, {
      ownPage: false,
      userAddress: '',
      loading: false
    });
  }

  render() {
    const _this$state2 = this.state,
          displayExperienceForm = _this$state2.displayExperienceForm,
          ownPage = _this$state2.ownPage,
          employer = _this$state2.employer;
    const _this$props = this.props,
          drizzle = _this$props.drizzle,
          drizzleState = _this$props.drizzleState;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Experience", ' ', ownPage ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      link: true,
      name: "plus",
      onClick: () => this.setState({
        displayExperienceForm: !displayExperienceForm
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }) : ''), displayExperienceForm ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_OrganizationSearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drizzle: drizzle,
      drizzleState: drizzleState,
      handleResultSelect: this.handleResultSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      onSubmit: this.addExperience,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      as: "a",
      image: true,
      onClick: () => this.toggleForm(false),
      color: employer ? 'grey' : 'blue',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }), "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
      toggle: true,
      checked: employer,
      onClick: () => this.toggleForm(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      as: "a",
      onClick: () => this.toggleForm(true),
      color: employer ? 'blue' : 'grey',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "building",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), "Employer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
      required: true,
      label: employer ? 'Employer Address' : 'Education Address',
      key: "address",
      name: "address",
      value: this.state.address,
      placeholder: "Address",
      onChange: this.handleInputChange,
      width: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
      required: true,
      label: employer ? 'Employer Name' : 'Education Name',
      key: "organization",
      name: "organization",
      value: this.state.organization,
      placeholder: "Organization",
      onChange: this.handleInputChange,
      width: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
      required: true,
      label: employer ? 'Role' : 'Field of Study',
      key: "expertise",
      name: "expertise",
      value: this.state.expertise,
      placeholder: "Expertise",
      onChange: this.handleInputChange,
      width: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, {
      label: employer ? 'Year Worked' : 'Graduation Year',
      type: "number",
      min: "0",
      key: "duration",
      name: "duration",
      value: this.state.duration,
      onChange: this.handleInputChange,
      width: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "submit",
      disabled: this.state.loading,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Submit"))) : '');
  }

}

/***/ }),

/***/ "./src/UserComponents/SingleUserView.js":
/*!**********************************************!*\
  !*** ./src/UserComponents/SingleUserView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleUserView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Skills */ "./src/UserComponents/Skills.js");
/* harmony import */ var _ExperienceForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExperienceForm */ "./src/UserComponents/ExperienceForm.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/UserComponents/SingleUserView.js";




class SingleUserView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    this.componentDidUpdate = prevProps => {
      if (this.props.props.match.params.address !== prevProps.props.match.params.address) {
        this.setState({
          pageAddress: this.props.props.match.params.address
        }, () => {
          this.updatePage();
        });
      }
    };

    this.updatePage = async () => {
      const pageAddress = this.props.props.match.params.address;
      const drizzle = this.props.drizzle;
      const userAddress = (await drizzle.web3.eth.getAccounts())[0];
      this.setState({
        userAddress,
        pageAddress
      });
      let ownPage = false;

      if (userAddress === pageAddress) {
        ownPage = true;
      }

      this.fetchUserData(pageAddress, ownPage);
    };

    this.updateExperience = () => {
      const drizzleState = this.props.drizzleState;
      const keys = Object.keys(drizzleState.contracts.OpenHire.getUserData);
      let identifier;

      if (keys.length) {
        for (let i = 0; i < keys.length; i++) {
          if (drizzleState.contracts.OpenHire.getUserData[keys[i]].args[0] === this.state.pageAddress) {
            identifier = keys[i];
            break;
          }
        }
      }

      let updatedUserData = drizzleState.contracts.OpenHire.getUserData[identifier];

      if (updatedUserData !== undefined) {
        const updatedExperienceCount = updatedUserData.value[2];

        if (updatedExperienceCount !== this.state.experienceCount) {
          this.fetchExperienceData(updatedExperienceCount);
        }
      }
    };

    this.fetchExperienceData = async updatedCount => {
      const _this$state = this.state,
            experienceCount = _this$state.experienceCount,
            pageAddress = _this$state.pageAddress;
      let experienceNumber = updatedCount || experienceCount;
      const experienceDataArray = [];

      for (let i = 0; i < experienceNumber; i++) {
        let experienceData = await this.props.drizzle.contracts.OpenHire.methods.getExperience(pageAddress, i).call();
        experienceDataArray.push(experienceData);
      }

      this.setState({
        experienceCount: updatedCount,
        experienceData: experienceDataArray
      });
    };

    this.state = {
      userAddress: '',
      pageAddress: '',
      name: '',
      email: '',
      experienceData: [],
      ownPage: false,
      skillsListLength: 0,
      skills: []
    };
  }

  async componentDidMount() {
    this.updatePage();
  }

  async fetchUserData(address, ownPage) {
    const userData = await this.props.drizzle.contracts.OpenHire.methods.getUserData(address).call();
    this.props.drizzle.contracts.OpenHire.methods.getUserData.cacheCall(address);
    this.setState({
      name: userData[0],
      email: userData[1],
      experienceCount: userData[2],
      ownPage: ownPage
    }, () => this.fetchExperienceData());
  }

  render() {
    const _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          experienceData = _this$state2.experienceData,
          skills = _this$state2.skills;
    const _this$props = this.props,
          drizzle = _this$props.drizzle,
          drizzleState = _this$props.drizzleState;
    const pageAddress = this.props.props.match.params.address;
    this.updateExperience();
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Single User View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Address:", pageAddress), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Name:", name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Email:", email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Skills__WEBPACK_IMPORTED_MODULE_1__["default"], {
      skills: skills,
      drizzle: drizzle,
      drizzleState: drizzleState,
      pageAddress: pageAddress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExperienceForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      drizzle: drizzle,
      drizzleState: drizzleState,
      pageAddress: pageAddress,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Education"), experienceData.length ? experienceData.filter(experience => experience[5] === false).map((experience, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"].Group, {
        key: index,
        horizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, experience[1], " from ", experience[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Graduated in: ", experience[2]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Verfied:", "".concat(experience[3])));
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "No experience")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"].Group, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Experience"), experienceData.length ? experienceData.filter(experience => experience[5] === true).map((experience, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"].Group, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, experience[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"].Group, {
        horizontal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, experience[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, experience[2] === '2019' ? 'Currently Employed' : "Worked in: ".concat(experience[2])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Verfied:", "".concat(experience[3]))));
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "No experience")));
  }

}

/***/ }),

/***/ "./src/UserComponents/Skills.js":
/*!**************************************!*\
  !*** ./src/UserComponents/Skills.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/UserComponents/Skills.js";



class Skills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.updatePage();
    };

    this.componentDidUpdate = prevProps => {
      if (this.props.pageAddress !== prevProps.pageAddress) {
        this.setState({
          pageAddress: this.props.pageAddress,
          displaySkillForm: false,
          skill: ''
        }, () => {
          this.updatePage();
        });
      }
    };

    this.updatePage = async () => {
      const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];
      let ownPage = false; //props.pageAddress is passing in as all lowercase

      if (userAddress === this.props.pageAddress) {
        ownPage = true;
      }

      this.setState({
        userAddress,
        ownPage
      });
      this.getSkillCount();
    };

    this.handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.addSkill = async event => {
      event.preventDefault();
      this.setState({
        loading: true
      });
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].info('Processing sign up...', {
        position: 'top-right',
        autoClose: 10000,
        transition: react_toastify__WEBPACK_IMPORTED_MODULE_1__["Flip"]
      });

      try {
        await this.props.drizzle.contracts.OpenHire.methods.addSkill(this.state.skill).send({
          from: this.state.userAddress
        });
        this.setState({
          errorMessage: ''
        });
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].dismiss();
        this.setState({
          errorMessage: error.message
        });
      }

      this.setState({
        loading: false,
        skill: ''
      });
    };

    this.getSkillCount = async () => {
      const skillsCount = await this.props.drizzle.contracts.OpenHire.methods.getSkillListLength(this.state.pageAddress).call();
      this.props.drizzle.contracts.OpenHire.methods.getSkillListLength.cacheCall(this.state.pageAddress);
      this.setState({
        skillsCount
      });
    };

    this.updateSkillCount = () => {
      const drizzleState = this.props.drizzleState;
      const keys = Object.keys(drizzleState.contracts.OpenHire.getSkillListLength);
      let identifier;

      if (keys.length) {
        for (let i = 0; i < keys.length; i++) {
          if (drizzleState.contracts.OpenHire.getSkillListLength[keys[i]].args[0] === this.state.pageAddress) {
            identifier = keys[i];
            break;
          }
        }
      }

      if (identifier) {
        let sll = drizzleState.contracts.OpenHire.getSkillListLength[identifier];
        return sll.value;
      } else {
        return 0;
      }
    };

    this.fetchSkillData = async skillsCount => {
      if (+skillsCount !== this.state.skillsArray.length) {
        const skillsArray = [];

        for (let i = 0; i < skillsCount; i++) {
          let skillData = await this.props.drizzle.contracts.OpenHire.methods.getUserSkillData(this.state.pageAddress, i).call();
          skillsArray.push(skillData);
        }

        this.setState({
          skillsArray
        });
      }
    };

    this.endorseSkill = async (endorseeAddress, index) => {
      await this.props.drizzle.contracts.OpenHire.methods.endorseSkill(endorseeAddress, index).send({
        from: this.state.userAddress
      });
    };

    this.state = {
      userAddress: '',
      pageAddress: props.pageAddress,
      ownPage: false,
      displaySkillForm: false,
      skillsArray: [],
      skillsCount: 0,
      loading: false,
      skill: ''
    };
  }

  render() {
    const _this$state = this.state,
          displaySkillForm = _this$state.displaySkillForm,
          skillsArray = _this$state.skillsArray,
          ownPage = _this$state.ownPage;
    const skillsCount = this.updateSkillCount();
    this.fetchSkillData(skillsCount); // console.log(this.state);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Skills", ' ', ownPage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      link: true,
      name: "plus",
      onClick: () => this.setState({
        displaySkillForm: !displaySkillForm
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }) : ''), displaySkillForm ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      onSubmit: this.addSkill,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
      required: true,
      label: "Skill Name",
      width: 6,
      key: "skill",
      name: "skill",
      value: this.state.skill,
      placeholder: "Skill",
      onChange: this.handleInputChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      type: "submit",
      disabled: this.state.loading,
      loading: this.state.loading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Submit")) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
      compact: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, skillsArray.map((skill, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, skill[0], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Label"], {
          as: "a",
          circular: true,
          className: "modal-trigger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, skill[1].length),
        closeIcon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, skill[0], " (", skill[1].length, ")"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "Endorsers"), skill[1].map((address, index) => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, address);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"].Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, skill[1].includes(this.state.userAddress) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        disabled: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "check",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), " Endorsed") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: () => this.endorseSkill(this.state.userAddress, index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, "Endorse"))));
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/contracts/Migrations.json":
/*!***************************************!*\
  !*** ./src/contracts/Migrations.json ***!
  \***************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Migrations","abi":[{"constant":true,"inputs":[],"name":"last_completed_migration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":false,"inputs":[{"name":"completed","type":"uint256"}],"name":"setCompleted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"new_address","type":"address"}],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"new_address\",\"type\":\"address\"}],\"name\":\"upgrade\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"last_completed_migration\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"completed\",\"type\":\"uint256\"}],\"name\":\"setCompleted\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/sofia/equalithon/DappLinkedIn/contracts/Migrations.sol\":\"Migrations\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/sofia/equalithon/DappLinkedIn/contracts/Migrations.sol\":{\"keccak256\":\"0xfdb731592344e2a2890faf03baec7b4bee7057ffba18ba6dbb6eec8db85f8f4c\",\"urls\":[\"bzzr://ddc8801d0a2a7220c2c9bf3881b4921817e72fdd96827ec8be4428fa009ace07\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102ae806100606000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100955780638da5cb5b146100b3578063fdacd576146100fd575b600080fd5b6100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061012b565b005b61009d6101f7565b6040518082815260200191505060405180910390f35b6100bb6101fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101296004803603602081101561011357600080fd5b8101908080359060200190929190505050610222565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101f45760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b50505050505b50565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561027f57806001819055505b5056fea165627a7a723058202c8c1fbe9bdb704cab66d45b29fe049208e8da276f43c865627bc25b62e6c6480029","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80630900f01014610051578063445df0ac146100955780638da5cb5b146100b3578063fdacd576146100fd575b600080fd5b6100936004803603602081101561006757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061012b565b005b61009d6101f7565b6040518082815260200191505060405180910390f35b6100bb6101fd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101296004803603602081101561011357600080fd5b8101908080359060200190929190505050610222565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101f45760008190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156101da57600080fd5b505af11580156101ee573d6000803e3d6000fd5b50505050505b50565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561027f57806001819055505b5056fea165627a7a723058202c8c1fbe9bdb704cab66d45b29fe049208e8da276f43c865627bc25b62e6c6480029","sourceMap":"34:480:0:-;;;123:50;8:9:-1;5:2;;;30:1;27;20:12;5:2;123:50:0;158:10;150:5;;:18;;;;;;;;;;;;;;;;;;34:480;;;;;;","deployedSourceMap":"34:480:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;34:480:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;347:165:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;82:36;;;:::i;:::-;;;;;;;;;;;;;;;;;;;58:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;240:103;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;240:103:0;;;;;;;;;;;;;;;;;:::i;:::-;;347:165;223:5;;;;;;;;;;;209:19;;:10;:19;;;205:26;;;409:19;442:11;409:45;;460:8;:21;;;482:24;;460:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;460:47:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;460:47:0;;;;230:1;205:26;347:165;:::o;82:36::-;;;;:::o;58:20::-;;;;;;;;;;;;;:::o;240:103::-;223:5;;;;;;;;;;;209:19;;:10;:19;;;205:26;;;329:9;302:24;:36;;;;205:26;240:103;:::o","source":"pragma solidity >=0.4.21 <0.6.0;\n\ncontract Migrations {\n  address public owner;\n  uint public last_completed_migration;\n\n  constructor() public {\n    owner = msg.sender;\n  }\n\n  modifier restricted() {\n    if (msg.sender == owner) _;\n  }\n\n  function setCompleted(uint completed) public restricted {\n    last_completed_migration = completed;\n  }\n\n  function upgrade(address new_address) public restricted {\n    Migrations upgraded = Migrations(new_address);\n    upgraded.setCompleted(last_completed_migration);\n  }\n}\n","sourcePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/Migrations.sol","ast":{"absolutePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/Migrations.sol","exportedSymbols":{"Migrations":[56]},"id":57,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.4",".21","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:32:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":56,"linearizedBaseContracts":[56],"name":"Migrations","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":3,"name":"owner","nodeType":"VariableDeclaration","scope":56,"src":"58:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"58:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":5,"name":"last_completed_migration","nodeType":"VariableDeclaration","scope":56,"src":"82:36:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"82:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"body":{"id":13,"nodeType":"Block","src":"144:29:0","statements":[{"expression":{"argumentTypes":null,"id":11,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":8,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"150:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":9,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"158:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":10,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"158:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"150:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":12,"nodeType":"ExpressionStatement","src":"150:18:0"}]},"documentation":null,"id":14,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":6,"nodeType":"ParameterList","parameters":[],"src":"134:2:0"},"returnParameters":{"id":7,"nodeType":"ParameterList","parameters":[],"src":"144:0:0"},"scope":56,"src":"123:50:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":22,"nodeType":"Block","src":"199:37:0","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":19,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":16,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"209:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"209:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":18,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"223:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"209:19:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":21,"nodeType":"IfStatement","src":"205:26:0","trueBody":{"id":20,"nodeType":"PlaceholderStatement","src":"230:1:0"}}]},"documentation":null,"id":23,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":15,"nodeType":"ParameterList","parameters":[],"src":"196:2:0"},"src":"177:59:0","visibility":"internal"},{"body":{"id":34,"nodeType":"Block","src":"296:47:0","statements":[{"expression":{"argumentTypes":null,"id":32,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":30,"name":"last_completed_migration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"302:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":31,"name":"completed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"329:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"302:36:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":33,"nodeType":"ExpressionStatement","src":"302:36:0"}]},"documentation":null,"id":35,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":28,"modifierName":{"argumentTypes":null,"id":27,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"285:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"285:10:0"}],"name":"setCompleted","nodeType":"FunctionDefinition","parameters":{"id":26,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"name":"completed","nodeType":"VariableDeclaration","scope":35,"src":"262:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":24,"name":"uint","nodeType":"ElementaryTypeName","src":"262:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"261:16:0"},"returnParameters":{"id":29,"nodeType":"ParameterList","parameters":[],"src":"296:0:0"},"scope":56,"src":"240:103:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":54,"nodeType":"Block","src":"403:109:0","statements":[{"assignments":[43],"declarations":[{"constant":false,"id":43,"name":"upgraded","nodeType":"VariableDeclaration","scope":54,"src":"409:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"},"typeName":{"contractScope":null,"id":42,"name":"Migrations","nodeType":"UserDefinedTypeName","referencedDeclaration":56,"src":"409:10:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"value":null,"visibility":"internal"}],"id":47,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":45,"name":"new_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"442:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":44,"name":"Migrations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":56,"src":"431:10:0","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_Migrations_$56_$","typeString":"type(contract Migrations)"}},"id":46,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"431:23:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"nodeType":"VariableDeclarationStatement","src":"409:45:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":51,"name":"last_completed_migration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"482:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":48,"name":"upgraded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":43,"src":"460:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setCompleted","nodeType":"MemberAccess","referencedDeclaration":35,"src":"460:21:0","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":52,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"460:47:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":53,"nodeType":"ExpressionStatement","src":"460:47:0"}]},"documentation":null,"id":55,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":40,"modifierName":{"argumentTypes":null,"id":39,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"392:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"392:10:0"}],"name":"upgrade","nodeType":"FunctionDefinition","parameters":{"id":38,"nodeType":"ParameterList","parameters":[{"constant":false,"id":37,"name":"new_address","nodeType":"VariableDeclaration","scope":55,"src":"364:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":36,"name":"address","nodeType":"ElementaryTypeName","src":"364:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"363:21:0"},"returnParameters":{"id":41,"nodeType":"ParameterList","parameters":[],"src":"403:0:0"},"scope":56,"src":"347:165:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":57,"src":"34:480:0"}],"src":"0:515:0"},"legacyAST":{"absolutePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/Migrations.sol","exportedSymbols":{"Migrations":[56]},"id":57,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.4",".21","<","0.6",".0"],"nodeType":"PragmaDirective","src":"0:32:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":56,"linearizedBaseContracts":[56],"name":"Migrations","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":3,"name":"owner","nodeType":"VariableDeclaration","scope":56,"src":"58:20:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":2,"name":"address","nodeType":"ElementaryTypeName","src":"58:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"public"},{"constant":false,"id":5,"name":"last_completed_migration","nodeType":"VariableDeclaration","scope":56,"src":"82:36:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"82:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"public"},{"body":{"id":13,"nodeType":"Block","src":"144:29:0","statements":[{"expression":{"argumentTypes":null,"id":11,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":8,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"150:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":9,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"158:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":10,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"158:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"150:18:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":12,"nodeType":"ExpressionStatement","src":"150:18:0"}]},"documentation":null,"id":14,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":6,"nodeType":"ParameterList","parameters":[],"src":"134:2:0"},"returnParameters":{"id":7,"nodeType":"ParameterList","parameters":[],"src":"144:0:0"},"scope":56,"src":"123:50:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":22,"nodeType":"Block","src":"199:37:0","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":19,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":16,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"209:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":17,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"209:10:0","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":18,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"223:5:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"209:19:0","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":21,"nodeType":"IfStatement","src":"205:26:0","trueBody":{"id":20,"nodeType":"PlaceholderStatement","src":"230:1:0"}}]},"documentation":null,"id":23,"name":"restricted","nodeType":"ModifierDefinition","parameters":{"id":15,"nodeType":"ParameterList","parameters":[],"src":"196:2:0"},"src":"177:59:0","visibility":"internal"},{"body":{"id":34,"nodeType":"Block","src":"296:47:0","statements":[{"expression":{"argumentTypes":null,"id":32,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":30,"name":"last_completed_migration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"302:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":31,"name":"completed","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"329:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"302:36:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":33,"nodeType":"ExpressionStatement","src":"302:36:0"}]},"documentation":null,"id":35,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":28,"modifierName":{"argumentTypes":null,"id":27,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"285:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"285:10:0"}],"name":"setCompleted","nodeType":"FunctionDefinition","parameters":{"id":26,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"name":"completed","nodeType":"VariableDeclaration","scope":35,"src":"262:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":24,"name":"uint","nodeType":"ElementaryTypeName","src":"262:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"261:16:0"},"returnParameters":{"id":29,"nodeType":"ParameterList","parameters":[],"src":"296:0:0"},"scope":56,"src":"240:103:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":54,"nodeType":"Block","src":"403:109:0","statements":[{"assignments":[43],"declarations":[{"constant":false,"id":43,"name":"upgraded","nodeType":"VariableDeclaration","scope":54,"src":"409:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"},"typeName":{"contractScope":null,"id":42,"name":"Migrations","nodeType":"UserDefinedTypeName","referencedDeclaration":56,"src":"409:10:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"value":null,"visibility":"internal"}],"id":47,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":45,"name":"new_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":37,"src":"442:11:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":44,"name":"Migrations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":56,"src":"431:10:0","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_Migrations_$56_$","typeString":"type(contract Migrations)"}},"id":46,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"431:23:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"nodeType":"VariableDeclarationStatement","src":"409:45:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":51,"name":"last_completed_migration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":5,"src":"482:24:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"expression":{"argumentTypes":null,"id":48,"name":"upgraded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":43,"src":"460:8:0","typeDescriptions":{"typeIdentifier":"t_contract$_Migrations_$56","typeString":"contract Migrations"}},"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"setCompleted","nodeType":"MemberAccess","referencedDeclaration":35,"src":"460:21:0","typeDescriptions":{"typeIdentifier":"t_function_external_nonpayable$_t_uint256_$returns$__$","typeString":"function (uint256) external"}},"id":52,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"460:47:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":53,"nodeType":"ExpressionStatement","src":"460:47:0"}]},"documentation":null,"id":55,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":40,"modifierName":{"argumentTypes":null,"id":39,"name":"restricted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"392:10:0","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"392:10:0"}],"name":"upgrade","nodeType":"FunctionDefinition","parameters":{"id":38,"nodeType":"ParameterList","parameters":[{"constant":false,"id":37,"name":"new_address","nodeType":"VariableDeclaration","scope":55,"src":"364:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":36,"name":"address","nodeType":"ElementaryTypeName","src":"364:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"363:21:0"},"returnParameters":{"id":41,"nodeType":"ParameterList","parameters":[],"src":"403:0:0"},"scope":56,"src":"347:165:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"}],"scope":57,"src":"34:480:0"}],"src":"0:515:0"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x5429d6d9075fF9524fe4a8ff7bA01ae6E2e8DB20","transactionHash":"0x56c28496386a5845d5a19d8cf7c54386516996039e62090cf0789ee3c55363fd"}},"schemaVersion":"3.0.11","updatedAt":"2019-08-07T15:42:02.980Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./src/contracts/OpenHire.json":
/*!*************************************!*\
  !*** ./src/contracts/OpenHire.json ***!
  \*************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"OpenHire","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allUserAddresses","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"emailAddress","type":"string"}],"name":"createOrganization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"searchAddress","type":"address"}],"name":"getOrganization","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"organizationAddress","type":"address"}],"name":"verifyOrganization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"emailAddress","type":"string"}],"name":"createUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"organizationAddress","type":"address"},{"name":"organizationName","type":"string"},{"name":"expertise","type":"string"},{"name":"duration","type":"uint256"}],"name":"addExperience","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"verifyExperience","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"skillName","type":"string"}],"name":"addSkill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getSkillListLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"endorseeAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"endorseSkill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserData","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"skillIndex","type":"uint256"}],"name":"getUserSkillData","outputs":[{"name":"","type":"string"},{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getExperience","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.8+commit.23d335f2\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"getSkillListLength\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"allUserAddresses\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"endorseeAddress\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"endorseSkill\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"skillName\",\"type\":\"string\"}],\"name\":\"addSkill\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"userAddress\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getExperience\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"userAddress\",\"type\":\"address\"},{\"name\":\"skillIndex\",\"type\":\"uint256\"}],\"name\":\"getUserSkillData\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"organizationAddress\",\"type\":\"address\"}],\"name\":\"verifyOrganization\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"organizationAddress\",\"type\":\"address\"},{\"name\":\"organizationName\",\"type\":\"string\"},{\"name\":\"expertise\",\"type\":\"string\"},{\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"addExperience\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"userAddress\",\"type\":\"address\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"verifyExperience\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"emailAddress\",\"type\":\"string\"}],\"name\":\"createUser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"emailAddress\",\"type\":\"string\"}],\"name\":\"createOrganization\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"searchAddress\",\"type\":\"address\"}],\"name\":\"getOrganization\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"userAddress\",\"type\":\"address\"}],\"name\":\"getUserData\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/sofia/equalithon/DappLinkedIn/contracts/OpenHire.sol\":\"OpenHire\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/sofia/equalithon/DappLinkedIn/contracts/OpenHire.sol\":{\"keccak256\":\"0x68fbfd81f10c53dde2295461b64e1fac3c179d1422efebd7153283e00dc6d9f0\",\"urls\":[\"bzzr://54fad05baafb1a4a1f8563bd7cf93b08340f25f7d7c037d37008d904161f9389\"]}},\"version\":1}","bytecode":"0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506120e4806100536000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636e3057781161008c5780638da5cb5b116100665780638da5cb5b14610872578063a411ef20146108bc578063d2c30a6d14610a0e578063ffc9896b14610b42576100ea565b80636e305778146105565780637d95bd9e146106d257806387b162b514610720576100ea565b80631e324990116100c85780631e324990146102035780634027b297146102be5780634f9dfc74146104035780636d567acd14610512576100ea565b806311a6adcd146100ef57806312f8a6ab146101475780631ad3ef98146101b5575b600080fd5b6101316004803603602081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb3565b6040518082815260200191505060405180910390f35b6101736004803603602081101561015d57600080fd5b8101908080359060200190929190505050610cff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610201600480360360408110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d3b565b005b6102bc6004803603602081101561021957600080fd5b810190808035906020019064010000000081111561023657600080fd5b82018360208201111561024857600080fd5b8035906020019184600183028401116401000000008311171561026a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e01565b005b61030a600480360360408110156102d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f51565b60405180806020018060200185815260200184151515158152602001838103835287818151815260200191508051906020019080838360005b8381101561035e578082015181840152602081019050610343565b50505050905090810190601f16801561038b5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156103c45780820151818401526020810190506103a9565b50505050905090810190601f1680156103f15780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61044f6004803603604081101561041957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611227565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610493578082015181840152602081019050610478565b50505050905090810190601f1680156104c05780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019060200280838360005b838110156104fc5780820151818401526020810190506104e1565b5050505090500194505050505060405180910390f35b6105546004803603602081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b005b6106d06004803603608081101561056c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156105a957600080fd5b8201836020820111156105bb57600080fd5b803590602001918460018302840111640100000000831117156105dd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561064057600080fd5b82018360208201111561065257600080fd5b8035906020019184600183028401116401000000008311171561067457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506114cb565b005b61071e600480360360408110156106e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116de565b005b6108706004803603604081101561073657600080fd5b810190808035906020019064010000000081111561075357600080fd5b82018360208201111561076557600080fd5b8035906020019184600183028401116401000000008311171561078757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107ea57600080fd5b8201836020820111156107fc57600080fd5b8035906020019184600183028401116401000000008311171561081e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506117b9565b005b61087a611899565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a0c600480360360408110156108d257600080fd5b81019080803590602001906401000000008111156108ef57600080fd5b82018360208201111561090157600080fd5b8035906020019184600183028401116401000000008311171561092357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561098657600080fd5b82018360208201111561099857600080fd5b803590602001918460018302840111640100000000831117156109ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118c2565b005b610a5060048036036020811015610a2457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061198c565b60405180806020018060200184151515158152602001838103835286818151815260200191508051906020019080838360005b83811015610a9e578082015181840152602081019050610a83565b50505050905090810190601f168015610acb5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610b04578082015181840152602081019050610ae9565b50505050905090810190601f168015610b315780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b610b8460048036036020811015610b5857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611baa565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610bcc578082015181840152602081019050610bb1565b50505050905090810190601f168015610bf95780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610c32578082015181840152602081019050610c17565b50505050905090810190601f168015610c5f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b83811015610c9b578082015181840152602081019050610c80565b50505050905001965050505050505060405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050919050565b60038181548110610d0c57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018181548110610d8857fe5b90600052602060002090600202016001013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b610e09611e42565b60405180604001604052808381526020016000604051908082528060200260200182016040528015610e4a5781602001602082028038833980820191505090505b508152509050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040181908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019080519060200190610eda929190611e5c565b506020820151816001019080519060200190610ef7929190611edc565b50505050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501600081548092919060010191905055505050565b606080600080600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018581548110610fa457fe5b9060005260206000209060050201600101600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301868154811061100257fe5b9060005260206000209060050201600201600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301878154811061106057fe5b906000526020600020906005020160030154600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030188815481106110bf57fe5b906000526020600020906005020160040160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111735780601f1061114857610100808354040283529160200191611173565b820191906000526020600020905b81548152906001019060200180831161115657829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561120f5780601f106111e45761010080835404028352916020019161120f565b820191906000526020600020905b8154815290600101906020018083116111f257829003601f168201915b50505050509250935093509350935092959194509250565b606080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401838154811061127757fe5b9060005260206000209060020201600001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040184815481106112d557fe5b9060005260206000209060020201600101818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137b5780601f106113505761010080835404028352916020019161137b565b820191906000526020600020905b81548152906001019060200180831161135e57829003601f168201915b505050505091508080548060200260200160405190810160405280929190818152602001828054801561140357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116113b9575b50505050509050915091509250929050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461146e57600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690831515021790555050565b6114d3611f66565b6040518060a001604052808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600015158152509050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018590806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061168c929190611e5c565b5060408201518160020190805190602001906116a9929190611e5c565b506060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055505050505050505050565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615151461173e57600080fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301828154811061178d57fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905082816000019080519060200190611814929190611fad565b508181600101908051906020019061182d929190611fad565b5060033390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6118ca61202d565b604051806060016040528084815260200183815260200160001515815250905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190611946929190611e5c565b506020820151816001019080519060200190611963929190611e5c565b5060408201518160020160006101000a81548160ff021916908315150217905550905050505050565b6060806000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611afa5780601f10611acf57610100808354040283529160200191611afa565b820191906000526020600020905b815481529060010190602001808311611add57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b965780601f10611b6b57610100808354040283529160200191611b96565b820191906000526020600020905b815481529060010190602001808311611b7957829003601f168201915b505050505091509250925092509193909250565b6060806060600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d0a5780601f10611cdf57610100808354040283529160200191611d0a565b820191906000526020600020905b815481529060010190602001808311611ced57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da65780601f10611d7b57610100808354040283529160200191611da6565b820191906000526020600020905b815481529060010190602001808311611d8957829003601f168201915b5050505050915080805480602002602001604051908101604052809291908181526020018280548015611e2e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611de4575b505050505090509250925092509193909250565b604051806040016040528060608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e9d57805160ff1916838001178555611ecb565b82800160010185558215611ecb579182015b82811115611eca578251825591602001919060010190611eaf565b5b509050611ed89190612050565b5090565b828054828255906000526020600020908101928215611f55579160200282015b82811115611f545782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611efc565b5b509050611f629190612075565b5090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001600081526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611fee57805160ff191683800117855561201c565b8280016001018555821561201c579182015b8281111561201b578251825591602001919060010190612000565b5b5090506120299190612050565b5090565b604051806060016040528060608152602001606081526020016000151581525090565b61207291905b8082111561206e576000816000905550600101612056565b5090565b90565b6120b591905b808211156120b157600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010161207b565b5090565b9056fea165627a7a723058209bbaa57d57a9d3390dceba68acb245c8fe467028a080a6c2c2d25b5bbbe1f05c0029","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636e3057781161008c5780638da5cb5b116100665780638da5cb5b14610872578063a411ef20146108bc578063d2c30a6d14610a0e578063ffc9896b14610b42576100ea565b80636e305778146105565780637d95bd9e146106d257806387b162b514610720576100ea565b80631e324990116100c85780631e324990146102035780634027b297146102be5780634f9dfc74146104035780636d567acd14610512576100ea565b806311a6adcd146100ef57806312f8a6ab146101475780631ad3ef98146101b5575b600080fd5b6101316004803603602081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cb3565b6040518082815260200191505060405180910390f35b6101736004803603602081101561015d57600080fd5b8101908080359060200190929190505050610cff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610201600480360360408110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d3b565b005b6102bc6004803603602081101561021957600080fd5b810190808035906020019064010000000081111561023657600080fd5b82018360208201111561024857600080fd5b8035906020019184600183028401116401000000008311171561026a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e01565b005b61030a600480360360408110156102d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f51565b60405180806020018060200185815260200184151515158152602001838103835287818151815260200191508051906020019080838360005b8381101561035e578082015181840152602081019050610343565b50505050905090810190601f16801561038b5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156103c45780820151818401526020810190506103a9565b50505050905090810190601f1680156103f15780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b61044f6004803603604081101561041957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611227565b604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610493578082015181840152602081019050610478565b50505050905090810190601f1680156104c05780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019060200280838360005b838110156104fc5780820151818401526020810190506104e1565b5050505090500194505050505060405180910390f35b6105546004803603602081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611415565b005b6106d06004803603608081101561056c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156105a957600080fd5b8201836020820111156105bb57600080fd5b803590602001918460018302840111640100000000831117156105dd57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561064057600080fd5b82018360208201111561065257600080fd5b8035906020019184600183028401116401000000008311171561067457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506114cb565b005b61071e600480360360408110156106e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116de565b005b6108706004803603604081101561073657600080fd5b810190808035906020019064010000000081111561075357600080fd5b82018360208201111561076557600080fd5b8035906020019184600183028401116401000000008311171561078757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156107ea57600080fd5b8201836020820111156107fc57600080fd5b8035906020019184600183028401116401000000008311171561081e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506117b9565b005b61087a611899565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a0c600480360360408110156108d257600080fd5b81019080803590602001906401000000008111156108ef57600080fd5b82018360208201111561090157600080fd5b8035906020019184600183028401116401000000008311171561092357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561098657600080fd5b82018360208201111561099857600080fd5b803590602001918460018302840111640100000000831117156109ba57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118c2565b005b610a5060048036036020811015610a2457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061198c565b60405180806020018060200184151515158152602001838103835286818151815260200191508051906020019080838360005b83811015610a9e578082015181840152602081019050610a83565b50505050905090810190601f168015610acb5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b83811015610b04578082015181840152602081019050610ae9565b50505050905090810190601f168015610b315780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b610b8460048036036020811015610b5857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611baa565b60405180806020018060200180602001848103845287818151815260200191508051906020019080838360005b83811015610bcc578082015181840152602081019050610bb1565b50505050905090810190601f168015610bf95780820380516001836020036101000a031916815260200191505b50848103835286818151815260200191508051906020019080838360005b83811015610c32578082015181840152602081019050610c17565b50505050905090810190601f168015610c5f5780820380516001836020036101000a031916815260200191505b50848103825285818151815260200191508051906020019060200280838360005b83811015610c9b578082015181840152602081019050610c80565b50505050905001965050505050505060405180910390f35b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050919050565b60038181548110610d0c57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018181548110610d8857fe5b90600052602060002090600202016001013390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b610e09611e42565b60405180604001604052808381526020016000604051908082528060200260200182016040528015610e4a5781602001602082028038833980820191505090505b508152509050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040181908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019080519060200190610eda929190611e5c565b506020820151816001019080519060200190610ef7929190611edc565b50505050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501600081548092919060010191905055505050565b606080600080600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018581548110610fa457fe5b9060005260206000209060050201600101600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301868154811061100257fe5b9060005260206000209060050201600201600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301878154811061106057fe5b906000526020600020906005020160030154600260008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030188815481106110bf57fe5b906000526020600020906005020160040160009054906101000a900460ff16838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111735780601f1061114857610100808354040283529160200191611173565b820191906000526020600020905b81548152906001019060200180831161115657829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561120f5780601f106111e45761010080835404028352916020019161120f565b820191906000526020600020905b8154815290600101906020018083116111f257829003601f168201915b50505050509250935093509350935092959194509250565b606080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401838154811061127757fe5b9060005260206000209060020201600001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040184815481106112d557fe5b9060005260206000209060020201600101818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561137b5780601f106113505761010080835404028352916020019161137b565b820191906000526020600020905b81548152906001019060200180831161135e57829003601f168201915b505050505091508080548060200260200160405190810160405280929190818152602001828054801561140357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116113b9575b50505050509050915091509250929050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461146e57600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160006101000a81548160ff02191690831515021790555050565b6114d3611f66565b6040518060a001604052808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001838152602001600015158152509050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018590806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061168c929190611e5c565b5060408201518160020190805190602001906116a9929190611e5c565b506060820151816003015560808201518160040160006101000a81548160ff0219169083151502179055505050505050505050565b60011515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff1615151461173e57600080fd5b6001600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301828154811061178d57fe5b906000526020600020906005020160040160006101000a81548160ff0219169083151502179055505050565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905082816000019080519060200190611814929190611fad565b508181600101908051906020019061182d929190611fad565b5060033390806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6118ca61202d565b604051806060016040528084815260200183815260200160001515815250905080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190611946929190611e5c565b506020820151816001019080519060200190611963929190611e5c565b5060408201518160020160006101000a81548160ff021916908315150217905550905050505050565b6060806000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020160009054906101000a900460ff16828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611afa5780601f10611acf57610100808354040283529160200191611afa565b820191906000526020600020905b815481529060010190602001808311611add57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b965780601f10611b6b57610100808354040283529160200191611b96565b820191906000526020600020905b815481529060010190602001808311611b7957829003601f168201915b505050505091509250925092509193909250565b6060806060600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611d0a5780601f10611cdf57610100808354040283529160200191611d0a565b820191906000526020600020905b815481529060010190602001808311611ced57829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611da65780601f10611d7b57610100808354040283529160200191611da6565b820191906000526020600020905b815481529060010190602001808311611d8957829003601f168201915b5050505050915080805480602002602001604051908101604052809291908181526020018280548015611e2e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611de4575b505050505090509250925092509193909250565b604051806040016040528060608152602001606081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e9d57805160ff1916838001178555611ecb565b82800160010185558215611ecb579182015b82811115611eca578251825591602001919060010190611eaf565b5b509050611ed89190612050565b5090565b828054828255906000526020600020908101928215611f55579160200282015b82811115611f545782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611efc565b5b509050611f629190612075565b5090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160608152602001600081526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611fee57805160ff191683800117855561201c565b8280016001018555821561201c579182015b8281111561201b578251825591602001919060010190612000565b5b5090506120299190612050565b5090565b604051806060016040528060608152602001606081526020016000151581525090565b61207291905b8082111561206e576000816000905550600101612056565b5090565b90565b6120b591905b808211156120b157600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010161207b565b5090565b9056fea165627a7a723058209bbaa57d57a9d3390dceba68acb245c8fe467028a080a6c2c2d25b5bbbe1f05c0029","sourceMap":"338:4285:1:-;;;137:10;122:12;;:25;;;;;;;;;;;;;;;;;;338:4285;;;;;;","deployedSourceMap":"338:4285:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;338:4285:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3460:138;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3460:138:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;473:33;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;473:33:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3604:153;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3604:153:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3171:283;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3171:283:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;3171:283:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;3171:283:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;3171:283:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;3171:283:1;;;;;;;;;;;;;;;:::i;:::-;;4260:361;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4260:361:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4260:361:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4260:361:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4006:248;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4006:248:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4006:248:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4006:248:1;;;;;;;;;;;;;;;;;;;1901:144;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1901:144:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;2385:525;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;2385:525:1;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2385:525:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2385:525:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2385:525:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2385:525:1;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2385:525:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2385:525:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2385:525:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2385:525:1;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2959:206;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2959:206:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2126:253;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2126:253:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2126:253:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2126:253:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2126:253:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2126:253:1;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2126:253:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2126:253:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2126:253:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2126:253:1;;;;;;;;;;;;;;;:::i;:::-;;160:83;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1326:309;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1326:309:1;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1326:309:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1326:309:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1326:309:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1326:309:1;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1326:309:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1326:309:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1326:309:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1326:309:1;;;;;;;;;;;;;;;:::i;:::-;;1641:254;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1641:254:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1641:254:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1641:254:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3763:237;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3763:237:1;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3763:237:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3763:237:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3763:237:1;;;;;;;;;;;;;;;;;;;;;3460:138;3530:4;3553:8;:21;3562:11;3553:21;;;;;;;;;;;;;;;:38;;;3546:45;;3460:138;;;:::o;473:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3604:153::-;3680:8;:25;3689:15;3680:25;;;;;;;;;;;;;;;:36;;3717:5;3680:43;;;;;;;;;;;;;;;;;;:53;;3739:10;3680:70;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3680:70:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3604:153;;:::o;3171:283::-;3231:21;;:::i;:::-;3255:87;;;;;;;;3281:9;3255:87;;;;3329:1;3315:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;3315:16:1;;;;3255:87;;;3231:111;;3352:8;:20;3361:10;3352:20;;;;;;;;;;;;;;;:31;;3389:8;3352:46;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3352:46:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;3408:8;:20;3417:10;3408:20;;;;;;;;;;;;;;;:37;;;:39;;;;;;;;;;;;;3171:283;;:::o;4260:361::-;4337:13;4352;4367:4;4373;4397:8;:21;4406:11;4397:21;;;;;;;;;;;;;;;:36;;4434:5;4397:43;;;;;;;;;;;;;;;;;;:56;;4454:8;:21;4463:11;4454:21;;;;;;;;;;;;;;;:36;;4491:5;4454:43;;;;;;;;;;;;;;;;;;:53;;4508:8;:21;4517:11;4508:21;;;;;;;;;;;;;;;:36;;4545:5;4508:43;;;;;;;;;;;;;;;;;;:52;;;4561:8;:21;4570:11;4561:21;;;;;;;;;;;;;;;:36;;4598:5;4561:43;;;;;;;;;;;;;;;;;;:52;;;;;;;;;;;;4389:225;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4260:361;;;;;;;:::o;4006:248::-;4091:13;4106:16;4142:8;:21;4151:11;4142:21;;;;;;;;;;;;;;;:32;;4175:10;4142:44;;;;;;;;;;;;;;;;;;:49;;4192:8;:21;4201:11;4192:21;;;;;;;;;;;;;;;:32;;4225:10;4192:44;;;;;;;;;;;;;;;;;;:54;;4134:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4006:248;;;;;:::o;1901:144::-;302:12;;;;;;;;;;;288:26;;:10;:26;;;280:35;;;;;;2034:4;1985:16;:37;2002:19;1985:37;;;;;;;;;;;;;;;:46;;;:53;;;;;;;;;;;;;;;;;;1901:144;:::o;2385:525::-;2526:31;;:::i;:::-;2560:206;;;;;;;;2597:19;2560:206;;;;;;2644:16;2560:206;;;;2685:9;2560:206;;;;2718:8;2560:206;;;;2750:5;2560:206;;;;;2526:240;;2777:8;:20;2786:10;2777:20;;;;;;;;;;;;;;;:35;;2818:19;2777:61;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2777:61:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2848:8;:20;2857:10;2848:20;;;;;;;;;;;;;;;:35;;2889:13;2848:55;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2848:55:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2385:525;;;;;:::o;2959:206::-;3084:4;3043:45;;:16;:28;3060:10;3043:28;;;;;;;;;;;;;;;:37;;;;;;;;;;;;:45;;;3035:54;;;;;;3154:4;3099:8;:21;3108:11;3099:21;;;;;;;;;;;;;;;:36;;3136:5;3099:43;;;;;;;;;;;;;;;;;;:52;;;:59;;;;;;;;;;;;;;;;;;2959:206;;:::o;2126:253::-;2211:20;2234:8;:20;2243:10;2234:20;;;;;;;;;;;;;;;2211:43;;2279:4;2264:7;:12;;:19;;;;;;;;;;;;:::i;:::-;;2316:12;2293:7;:20;;:35;;;;;;;;;;;;:::i;:::-;;2339:16;2361:10;2339:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2339:33:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2126:253;;;:::o;160:83::-;198:7;224:12;;;;;;;;;;;217:19;;160:83;:::o;1326:309::-;1419:35;;:::i;:::-;1457:114;;;;;;;;1489:4;1457:114;;;;1520:12;1457:114;;;;1555:5;1457:114;;;;;1419:152;;1613:15;1582:16;:28;1599:10;1582:28;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1326:309;;;:::o;1641:254::-;1710:13;1725;1740:4;1763:16;:31;1780:13;1763:31;;;;;;;;;;;;;;;:36;;1801:16;:31;1818:13;1801:31;;;;;;;;;;;;;;;:44;;1847:16;:31;1864:13;1847:31;;;;;;;;;;;;;;;:40;;;;;;;;;;;;1755:133;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1641:254;;;;;:::o;3763:237::-;3826:13;3841;3856:16;3892:8;:21;3901:11;3892:21;;;;;;;;;;;;;;;:26;;3920:8;:21;3929:11;3920:21;;;;;;;;;;;;;;;:34;;3956:8;:21;3965:11;3956:21;;;;;;;;;;;;;;;:36;;3884:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3763:237;;;;;:::o;338:4285::-;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"pragma solidity ^0.5.8;\n\ncontract Administrator {\n    address private adminAddress;\n\n    constructor() internal {\n        adminAddress = msg.sender;\n    }\n\n    function owner() public view returns (address) {\n        return adminAddress;\n    }\n\n    modifier onlyAdmin() {\n        require(msg.sender == adminAddress);\n        _;\n    }\n\n}\n\ncontract OpenHire is Administrator {\n    mapping(address => Organization) allOrganizations;\n    mapping(address => User) allUsers;\n    address[] public allUserAddresses;\n\n\n    struct Organization {\n        string name;\n        string emailAddress;\n        bool verified;\n    }\n\n    //Can not return structs with mappings\n    struct User {\n        string name;\n        string emailAddress;\n        address[] experienceKeys;\n        //mapping so that organizations can look themselves up and approve\n        // mapping(address => Experience) experience;\n        Experience[] experienceList;\n\n        //Can have either array of structs or mapping skill name to array + array with keys\n        Skill[] skillsList;\n        uint skillsListLength;\n    }\n\n    struct Experience {\n        address orgAddress;\n        string organization;\n        string expertise;\n        uint duration;\n        bool verified;\n    }\n\n    struct Skill {\n        string name;\n        address[] endorsers;\n    }\n\n    function createOrganization(string memory name, string memory emailAddress) public {\n        Organization memory newOrganization = Organization({\n           name: name,\n           emailAddress: emailAddress,\n           verified: false\n        });\n\n        allOrganizations[msg.sender] = newOrganization;\n    }\n\n    function getOrganization(address searchAddress) public view returns (string memory, string memory, bool){\n        return (allOrganizations[searchAddress].name, allOrganizations[searchAddress].emailAddress, allOrganizations[searchAddress].verified);\n    }\n\n    function verifyOrganization(address organizationAddress) public onlyAdmin {\n        allOrganizations[organizationAddress].verified = true;\n    }\n\n    //Differentiate user from organization while creating on the front end\n    function createUser(string memory name, string memory emailAddress) public {\n        User storage newUser = allUsers[msg.sender];\n        newUser.name = name;\n        newUser.emailAddress = emailAddress;\n\n        allUserAddresses.push(msg.sender);\n    }\n\n    function addExperience(address organizationAddress, string memory organizationName, string memory expertise, uint duration) public {\n        Experience memory newExperience = Experience({\n            orgAddress: organizationAddress,\n            organization: organizationName,\n            expertise: expertise,\n            duration: duration,\n            verified: false\n        });\n\n        allUsers[msg.sender].experienceKeys.push(organizationAddress);\n        allUsers[msg.sender].experienceList.push(newExperience);\n    }\n\n    //Organizations verify User experience\n    function verifyExperience(address userAddress, uint index) public {\n        require(allOrganizations[msg.sender].verified == true);\n        allUsers[userAddress].experienceList[index].verified = true;\n    }\n\n    function addSkill(string memory skillName) public {\n        Skill memory newSkill = Skill({\n            name: skillName,\n            endorsers: new address[](0)\n        });\n        allUsers[msg.sender].skillsList.push(newSkill);\n        allUsers[msg.sender].skillsListLength++;\n    }\n\n    function getSkillListLength(address userAddress) public view returns (uint) {\n        return allUsers[userAddress].skillsListLength;\n    }\n\n    function endorseSkill(address endorseeAddress, uint index) public {\n        allUsers[endorseeAddress].skillsList[index].endorsers.push(msg.sender);\n    }\n\n    function getUserData(address userAddress) public view returns (string memory, string memory, address[] memory) {\n        return (allUsers[userAddress].name, allUsers[userAddress].emailAddress, allUsers[userAddress].experienceKeys);\n    }\n\n    function getUserSkillData(address userAddress, uint skillIndex) public view returns (string memory, address[] memory) {\n        return (allUsers[userAddress].skillsList[skillIndex].name,allUsers[userAddress].skillsList[skillIndex].endorsers);\n    }\n\n    function getExperience(address userAddress, uint index) public view returns (string memory, string memory, uint, bool) {\n        return (allUsers[userAddress].experienceList[index].organization,allUsers[userAddress].experienceList[index].expertise,allUsers[userAddress].experienceList[index].duration,allUsers[userAddress].experienceList[index].verified);\n    }\n}\n","sourcePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/OpenHire.sol","ast":{"absolutePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/OpenHire.sol","exportedSymbols":{"Administrator":[89],"OpenHire":[477]},"id":478,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.5",".8"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Administrator","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"adminAddress","nodeType":"VariableDeclaration","scope":89,"src":"54:28:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"54:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"private"},{"body":{"id":68,"nodeType":"Block","src":"112:42:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"122:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"137:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"137:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"122:25:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"122:25:1"}]},"documentation":null,"id":69,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"100:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"112:0:1"},"scope":89,"src":"89:65:1","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"},{"body":{"id":76,"nodeType":"Block","src":"207:36:1","statements":[{"expression":{"argumentTypes":null,"id":74,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"224:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":73,"id":75,"nodeType":"Return","src":"217:19:1"}]},"documentation":null,"id":77,"implemented":true,"kind":"function","modifiers":[],"name":"owner","nodeType":"FunctionDefinition","parameters":{"id":70,"nodeType":"ParameterList","parameters":[],"src":"174:2:1"},"returnParameters":{"id":73,"nodeType":"ParameterList","parameters":[{"constant":false,"id":72,"name":"","nodeType":"VariableDeclaration","scope":77,"src":"198:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":71,"name":"address","nodeType":"ElementaryTypeName","src":"198:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"197:9:1"},"scope":89,"src":"160:83:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"270:63:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":83,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":80,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"288:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":81,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"288:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":82,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"302:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"288:26:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":79,"name":"require","nodeType":"Identifier","overloadedDeclarations":[495,496],"referencedDeclaration":495,"src":"280:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"280:35:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":85,"nodeType":"ExpressionStatement","src":"280:35:1"},{"id":86,"nodeType":"PlaceholderStatement","src":"325:1:1"}]},"documentation":null,"id":88,"name":"onlyAdmin","nodeType":"ModifierDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[],"src":"267:2:1"},"src":"249:84:1","visibility":"internal"}],"scope":478,"src":"25:311:1"},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":90,"name":"Administrator","nodeType":"UserDefinedTypeName","referencedDeclaration":89,"src":"359:13:1","typeDescriptions":{"typeIdentifier":"t_contract$_Administrator_$89","typeString":"contract Administrator"}},"id":91,"nodeType":"InheritanceSpecifier","src":"359:13:1"}],"contractDependencies":[89],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":477,"linearizedBaseContracts":[477,89],"name":"OpenHire","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":95,"name":"allOrganizations","nodeType":"VariableDeclaration","scope":477,"src":"379:49:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization)"},"typeName":{"id":94,"keyType":{"id":92,"name":"address","nodeType":"ElementaryTypeName","src":"387:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"379:32:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization)"},"valueType":{"contractScope":null,"id":93,"name":"Organization","nodeType":"UserDefinedTypeName","referencedDeclaration":109,"src":"398:12:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage_ptr","typeString":"struct OpenHire.Organization"}}},"value":null,"visibility":"internal"},{"constant":false,"id":99,"name":"allUsers","nodeType":"VariableDeclaration","scope":477,"src":"434:33:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User)"},"typeName":{"id":98,"keyType":{"id":96,"name":"address","nodeType":"ElementaryTypeName","src":"442:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"434:24:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User)"},"valueType":{"contractScope":null,"id":97,"name":"User","nodeType":"UserDefinedTypeName","referencedDeclaration":125,"src":"453:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"}}},"value":null,"visibility":"internal"},{"constant":false,"id":102,"name":"allUserAddresses","nodeType":"VariableDeclaration","scope":477,"src":"473:33:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"473:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":101,"length":null,"nodeType":"ArrayTypeName","src":"473:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"canonicalName":"OpenHire.Organization","id":109,"members":[{"constant":false,"id":104,"name":"name","nodeType":"VariableDeclaration","scope":109,"src":"544:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":103,"name":"string","nodeType":"ElementaryTypeName","src":"544:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":106,"name":"emailAddress","nodeType":"VariableDeclaration","scope":109,"src":"565:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":105,"name":"string","nodeType":"ElementaryTypeName","src":"565:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":108,"name":"verified","nodeType":"VariableDeclaration","scope":109,"src":"594:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":107,"name":"bool","nodeType":"ElementaryTypeName","src":"594:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Organization","nodeType":"StructDefinition","scope":477,"src":"514:100:1","visibility":"public"},{"canonicalName":"OpenHire.User","id":125,"members":[{"constant":false,"id":111,"name":"name","nodeType":"VariableDeclaration","scope":125,"src":"685:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":110,"name":"string","nodeType":"ElementaryTypeName","src":"685:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":113,"name":"emailAddress","nodeType":"VariableDeclaration","scope":125,"src":"706:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":112,"name":"string","nodeType":"ElementaryTypeName","src":"706:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":116,"name":"experienceKeys","nodeType":"VariableDeclaration","scope":125,"src":"735:24:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":114,"name":"address","nodeType":"ElementaryTypeName","src":"735:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":115,"length":null,"nodeType":"ArrayTypeName","src":"735:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":119,"name":"experienceList","nodeType":"VariableDeclaration","scope":125,"src":"898:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Experience[]"},"typeName":{"baseType":{"contractScope":null,"id":117,"name":"Experience","nodeType":"UserDefinedTypeName","referencedDeclaration":136,"src":"898:10:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage_ptr","typeString":"struct OpenHire.Experience"}},"id":118,"length":null,"nodeType":"ArrayTypeName","src":"898:12:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Experience[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":122,"name":"skillsList","nodeType":"VariableDeclaration","scope":125,"src":"1028:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Skill[]"},"typeName":{"baseType":{"contractScope":null,"id":120,"name":"Skill","nodeType":"UserDefinedTypeName","referencedDeclaration":142,"src":"1028:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage_ptr","typeString":"struct OpenHire.Skill"}},"id":121,"length":null,"nodeType":"ArrayTypeName","src":"1028:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Skill[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":124,"name":"skillsListLength","nodeType":"VariableDeclaration","scope":125,"src":"1056:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":123,"name":"uint","nodeType":"ElementaryTypeName","src":"1056:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"User","nodeType":"StructDefinition","scope":477,"src":"663:421:1","visibility":"public"},{"canonicalName":"OpenHire.Experience","id":136,"members":[{"constant":false,"id":127,"name":"orgAddress","nodeType":"VariableDeclaration","scope":136,"src":"1118:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":126,"name":"address","nodeType":"ElementaryTypeName","src":"1118:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":129,"name":"organization","nodeType":"VariableDeclaration","scope":136,"src":"1146:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":128,"name":"string","nodeType":"ElementaryTypeName","src":"1146:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":131,"name":"expertise","nodeType":"VariableDeclaration","scope":136,"src":"1175:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":130,"name":"string","nodeType":"ElementaryTypeName","src":"1175:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":133,"name":"duration","nodeType":"VariableDeclaration","scope":136,"src":"1201:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":132,"name":"uint","nodeType":"ElementaryTypeName","src":"1201:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":135,"name":"verified","nodeType":"VariableDeclaration","scope":136,"src":"1224:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":134,"name":"bool","nodeType":"ElementaryTypeName","src":"1224:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Experience","nodeType":"StructDefinition","scope":477,"src":"1090:154:1","visibility":"public"},{"canonicalName":"OpenHire.Skill","id":142,"members":[{"constant":false,"id":138,"name":"name","nodeType":"VariableDeclaration","scope":142,"src":"1273:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":137,"name":"string","nodeType":"ElementaryTypeName","src":"1273:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":141,"name":"endorsers","nodeType":"VariableDeclaration","scope":142,"src":"1294:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":139,"name":"address","nodeType":"ElementaryTypeName","src":"1294:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":140,"length":null,"nodeType":"ArrayTypeName","src":"1294:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"name":"Skill","nodeType":"StructDefinition","scope":477,"src":"1250:70:1","visibility":"public"},{"body":{"id":164,"nodeType":"Block","src":"1409:226:1","statements":[{"assignments":[150],"declarations":[{"constant":false,"id":150,"name":"newOrganization","nodeType":"VariableDeclaration","scope":164,"src":"1419:35:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory_ptr","typeString":"struct OpenHire.Organization"},"typeName":{"contractScope":null,"id":149,"name":"Organization","nodeType":"UserDefinedTypeName","referencedDeclaration":109,"src":"1419:12:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage_ptr","typeString":"struct OpenHire.Organization"}},"value":null,"visibility":"internal"}],"id":156,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":152,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1489:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":153,"name":"emailAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":146,"src":"1520:12:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"hexValue":"66616c7365","id":154,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1555:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_bool","typeString":"bool"}],"id":151,"name":"Organization","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":109,"src":"1457:12:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Organization_$109_storage_ptr_$","typeString":"type(struct OpenHire.Organization storage pointer)"}},"id":155,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","emailAddress","verified"],"nodeType":"FunctionCall","src":"1457:114:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory","typeString":"struct OpenHire.Organization memory"}},"nodeType":"VariableDeclarationStatement","src":"1419:152:1"},{"expression":{"argumentTypes":null,"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":157,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1582:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":160,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":158,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"1599:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":159,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1599:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1582:28:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":161,"name":"newOrganization","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":150,"src":"1613:15:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory_ptr","typeString":"struct OpenHire.Organization memory"}},"src":"1582:46:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":163,"nodeType":"ExpressionStatement","src":"1582:46:1"}]},"documentation":null,"id":165,"implemented":true,"kind":"function","modifiers":[],"name":"createOrganization","nodeType":"FunctionDefinition","parameters":{"id":147,"nodeType":"ParameterList","parameters":[{"constant":false,"id":144,"name":"name","nodeType":"VariableDeclaration","scope":165,"src":"1354:18:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":143,"name":"string","nodeType":"ElementaryTypeName","src":"1354:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":146,"name":"emailAddress","nodeType":"VariableDeclaration","scope":165,"src":"1374:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":145,"name":"string","nodeType":"ElementaryTypeName","src":"1374:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1353:48:1"},"returnParameters":{"id":148,"nodeType":"ParameterList","parameters":[],"src":"1409:0:1"},"scope":477,"src":"1326:309:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":190,"nodeType":"Block","src":"1745:150:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":176,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1763:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":178,"indexExpression":{"argumentTypes":null,"id":177,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1780:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1763:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":179,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":104,"src":"1763:36:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":180,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1801:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":182,"indexExpression":{"argumentTypes":null,"id":181,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1818:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1801:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":183,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":106,"src":"1801:44:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":184,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1847:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":186,"indexExpression":{"argumentTypes":null,"id":185,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1864:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1847:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":187,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"1847:40:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":188,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1762:126:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_bool_$","typeString":"tuple(string storage ref,string storage ref,bool)"}},"functionReturnParameters":175,"id":189,"nodeType":"Return","src":"1755:133:1"}]},"documentation":null,"id":191,"implemented":true,"kind":"function","modifiers":[],"name":"getOrganization","nodeType":"FunctionDefinition","parameters":{"id":168,"nodeType":"ParameterList","parameters":[{"constant":false,"id":167,"name":"searchAddress","nodeType":"VariableDeclaration","scope":191,"src":"1666:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":166,"name":"address","nodeType":"ElementaryTypeName","src":"1666:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1665:23:1"},"returnParameters":{"id":175,"nodeType":"ParameterList","parameters":[{"constant":false,"id":170,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1710:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":169,"name":"string","nodeType":"ElementaryTypeName","src":"1710:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":172,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1725:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":171,"name":"string","nodeType":"ElementaryTypeName","src":"1725:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":174,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1740:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":173,"name":"bool","nodeType":"ElementaryTypeName","src":"1740:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1709:36:1"},"scope":477,"src":"1641:254:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":205,"nodeType":"Block","src":"1975:70:1","statements":[{"expression":{"argumentTypes":null,"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":198,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1985:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":200,"indexExpression":{"argumentTypes":null,"id":199,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"2002:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1985:37:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":201,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"1985:46:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2034:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1985:53:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":204,"nodeType":"ExpressionStatement","src":"1985:53:1"}]},"documentation":null,"id":206,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":196,"modifierName":{"argumentTypes":null,"id":195,"name":"onlyAdmin","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1965:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1965:9:1"}],"name":"verifyOrganization","nodeType":"FunctionDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[{"constant":false,"id":193,"name":"organizationAddress","nodeType":"VariableDeclaration","scope":206,"src":"1929:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":192,"name":"address","nodeType":"ElementaryTypeName","src":"1929:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1928:29:1"},"returnParameters":{"id":197,"nodeType":"ParameterList","parameters":[],"src":"1975:0:1"},"scope":477,"src":"1901:144:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":239,"nodeType":"Block","src":"2201:178:1","statements":[{"assignments":[214],"declarations":[{"constant":false,"id":214,"name":"newUser","nodeType":"VariableDeclaration","scope":239,"src":"2211:20:1","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"},"typeName":{"contractScope":null,"id":213,"name":"User","nodeType":"UserDefinedTypeName","referencedDeclaration":125,"src":"2211:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"}},"value":null,"visibility":"internal"}],"id":219,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":215,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2234:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":218,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":216,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2243:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":217,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2243:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2234:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2211:43:1"},{"expression":{"argumentTypes":null,"id":224,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":220,"name":"newUser","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":214,"src":"2264:7:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User storage pointer"}},"id":222,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":111,"src":"2264:12:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":223,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":208,"src":"2279:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2264:19:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":225,"nodeType":"ExpressionStatement","src":"2264:19:1"},{"expression":{"argumentTypes":null,"id":230,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":226,"name":"newUser","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":214,"src":"2293:7:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User storage pointer"}},"id":228,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":113,"src":"2293:20:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":229,"name":"emailAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":210,"src":"2316:12:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2293:35:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":231,"nodeType":"ExpressionStatement","src":"2293:35:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":235,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2361:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":236,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2361:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"id":232,"name":"allUserAddresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":102,"src":"2339:16:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":234,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2339:21:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":237,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2339:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":238,"nodeType":"ExpressionStatement","src":"2339:33:1"}]},"documentation":null,"id":240,"implemented":true,"kind":"function","modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":211,"nodeType":"ParameterList","parameters":[{"constant":false,"id":208,"name":"name","nodeType":"VariableDeclaration","scope":240,"src":"2146:18:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":207,"name":"string","nodeType":"ElementaryTypeName","src":"2146:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":210,"name":"emailAddress","nodeType":"VariableDeclaration","scope":240,"src":"2166:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":209,"name":"string","nodeType":"ElementaryTypeName","src":"2166:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2145:48:1"},"returnParameters":{"id":212,"nodeType":"ParameterList","parameters":[],"src":"2201:0:1"},"scope":477,"src":"2126:253:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":279,"nodeType":"Block","src":"2516:394:1","statements":[{"assignments":[252],"declarations":[{"constant":false,"id":252,"name":"newExperience","nodeType":"VariableDeclaration","scope":279,"src":"2526:31:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience"},"typeName":{"contractScope":null,"id":251,"name":"Experience","nodeType":"UserDefinedTypeName","referencedDeclaration":136,"src":"2526:10:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage_ptr","typeString":"struct OpenHire.Experience"}},"value":null,"visibility":"internal"}],"id":260,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":254,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":242,"src":"2597:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":255,"name":"organizationName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"2644:16:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":256,"name":"expertise","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"2685:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":257,"name":"duration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"2718:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"66616c7365","id":258,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2750:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_bool","typeString":"bool"}],"id":253,"name":"Experience","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":136,"src":"2560:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Experience_$136_storage_ptr_$","typeString":"type(struct OpenHire.Experience storage pointer)"}},"id":259,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["orgAddress","organization","expertise","duration","verified"],"nodeType":"FunctionCall","src":"2560:206:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory","typeString":"struct OpenHire.Experience memory"}},"nodeType":"VariableDeclarationStatement","src":"2526:240:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":267,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":242,"src":"2818:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":261,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2777:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":264,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":262,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2786:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":263,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2786:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2777:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":265,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceKeys","nodeType":"MemberAccess","referencedDeclaration":116,"src":"2777:35:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":266,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2777:40:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":268,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2777:61:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":269,"nodeType":"ExpressionStatement","src":"2777:61:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":276,"name":"newExperience","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"2889:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience memory"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":270,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2848:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":273,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":271,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2857:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":272,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2857:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2848:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":274,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"2848:35:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2848:40:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Experience_$136_storage_$returns$_t_uint256_$","typeString":"function (struct OpenHire.Experience storage ref) returns (uint256)"}},"id":277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2848:55:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"2848:55:1"}]},"documentation":null,"id":280,"implemented":true,"kind":"function","modifiers":[],"name":"addExperience","nodeType":"FunctionDefinition","parameters":{"id":249,"nodeType":"ParameterList","parameters":[{"constant":false,"id":242,"name":"organizationAddress","nodeType":"VariableDeclaration","scope":280,"src":"2408:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":241,"name":"address","nodeType":"ElementaryTypeName","src":"2408:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":244,"name":"organizationName","nodeType":"VariableDeclaration","scope":280,"src":"2437:30:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":243,"name":"string","nodeType":"ElementaryTypeName","src":"2437:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":246,"name":"expertise","nodeType":"VariableDeclaration","scope":280,"src":"2469:23:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":245,"name":"string","nodeType":"ElementaryTypeName","src":"2469:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":248,"name":"duration","nodeType":"VariableDeclaration","scope":280,"src":"2494:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":247,"name":"uint","nodeType":"ElementaryTypeName","src":"2494:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2407:101:1"},"returnParameters":{"id":250,"nodeType":"ParameterList","parameters":[],"src":"2516:0:1"},"scope":477,"src":"2385:525:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":307,"nodeType":"Block","src":"3025:140:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":294,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":288,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"3043:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":291,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":289,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3060:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":290,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3060:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3043:28:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":292,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"3043:37:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":293,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3084:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"3043:45:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":287,"name":"require","nodeType":"Identifier","overloadedDeclarations":[495,496],"referencedDeclaration":495,"src":"3035:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":295,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3035:54:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":296,"nodeType":"ExpressionStatement","src":"3035:54:1"},{"expression":{"argumentTypes":null,"id":305,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":297,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3099:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":299,"indexExpression":{"argumentTypes":null,"id":298,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":282,"src":"3108:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3099:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":300,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"3099:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":302,"indexExpression":{"argumentTypes":null,"id":301,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":284,"src":"3136:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3099:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":303,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":135,"src":"3099:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":304,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3154:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"3099:59:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":306,"nodeType":"ExpressionStatement","src":"3099:59:1"}]},"documentation":null,"id":308,"implemented":true,"kind":"function","modifiers":[],"name":"verifyExperience","nodeType":"FunctionDefinition","parameters":{"id":285,"nodeType":"ParameterList","parameters":[{"constant":false,"id":282,"name":"userAddress","nodeType":"VariableDeclaration","scope":308,"src":"2985:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":281,"name":"address","nodeType":"ElementaryTypeName","src":"2985:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":284,"name":"index","nodeType":"VariableDeclaration","scope":308,"src":"3006:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":283,"name":"uint","nodeType":"ElementaryTypeName","src":"3006:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2984:33:1"},"returnParameters":{"id":286,"nodeType":"ParameterList","parameters":[],"src":"3025:0:1"},"scope":477,"src":"2959:206:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":340,"nodeType":"Block","src":"3221:233:1","statements":[{"assignments":[314],"declarations":[{"constant":false,"id":314,"name":"newSkill","nodeType":"VariableDeclaration","scope":340,"src":"3231:21:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill"},"typeName":{"contractScope":null,"id":313,"name":"Skill","nodeType":"UserDefinedTypeName","referencedDeclaration":142,"src":"3231:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage_ptr","typeString":"struct OpenHire.Skill"}},"value":null,"visibility":"internal"}],"id":323,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":316,"name":"skillName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":310,"src":"3281:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":320,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"3329:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":319,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"NewExpression","src":"3315:13:1","typeDescriptions":{"typeIdentifier":"t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$","typeString":"function (uint256) pure returns (address[] memory)"},"typeName":{"baseType":{"id":317,"name":"address","nodeType":"ElementaryTypeName","src":"3319:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":318,"length":null,"nodeType":"ArrayTypeName","src":"3319:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}}},"id":321,"isConstant":false,"isLValue":false,"isPure":true,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3315:16:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory","typeString":"address[] memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_array$_t_address_$dyn_memory","typeString":"address[] memory"}],"id":315,"name":"Skill","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":142,"src":"3255:5:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Skill_$142_storage_ptr_$","typeString":"type(struct OpenHire.Skill storage pointer)"}},"id":322,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","endorsers"],"nodeType":"FunctionCall","src":"3255:87:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory","typeString":"struct OpenHire.Skill memory"}},"nodeType":"VariableDeclarationStatement","src":"3231:111:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":330,"name":"newSkill","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":314,"src":"3389:8:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill memory"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":324,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3352:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":327,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":325,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3361:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":326,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3361:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3352:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":328,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"3352:31:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3352:36:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Skill_$142_storage_$returns$_t_uint256_$","typeString":"function (struct OpenHire.Skill storage ref) returns (uint256)"}},"id":331,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3352:46:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":332,"nodeType":"ExpressionStatement","src":"3352:46:1"},{"expression":{"argumentTypes":null,"id":338,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"3408:39:1","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":333,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3408:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":336,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":334,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3417:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":335,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3417:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3408:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":337,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"skillsListLength","nodeType":"MemberAccess","referencedDeclaration":124,"src":"3408:37:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":339,"nodeType":"ExpressionStatement","src":"3408:39:1"}]},"documentation":null,"id":341,"implemented":true,"kind":"function","modifiers":[],"name":"addSkill","nodeType":"FunctionDefinition","parameters":{"id":311,"nodeType":"ParameterList","parameters":[{"constant":false,"id":310,"name":"skillName","nodeType":"VariableDeclaration","scope":341,"src":"3189:23:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":309,"name":"string","nodeType":"ElementaryTypeName","src":"3189:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3188:25:1"},"returnParameters":{"id":312,"nodeType":"ParameterList","parameters":[],"src":"3221:0:1"},"scope":477,"src":"3171:283:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":353,"nodeType":"Block","src":"3536:62:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":348,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3553:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":350,"indexExpression":{"argumentTypes":null,"id":349,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":343,"src":"3562:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3553:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":351,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsListLength","nodeType":"MemberAccess","referencedDeclaration":124,"src":"3553:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":347,"id":352,"nodeType":"Return","src":"3546:45:1"}]},"documentation":null,"id":354,"implemented":true,"kind":"function","modifiers":[],"name":"getSkillListLength","nodeType":"FunctionDefinition","parameters":{"id":344,"nodeType":"ParameterList","parameters":[{"constant":false,"id":343,"name":"userAddress","nodeType":"VariableDeclaration","scope":354,"src":"3488:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":342,"name":"address","nodeType":"ElementaryTypeName","src":"3488:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3487:21:1"},"returnParameters":{"id":347,"nodeType":"ParameterList","parameters":[{"constant":false,"id":346,"name":"","nodeType":"VariableDeclaration","scope":354,"src":"3530:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":345,"name":"uint","nodeType":"ElementaryTypeName","src":"3530:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3529:6:1"},"scope":477,"src":"3460:138:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":373,"nodeType":"Block","src":"3670:87:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":369,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3739:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":370,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3739:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":361,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3680:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":363,"indexExpression":{"argumentTypes":null,"id":362,"name":"endorseeAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":356,"src":"3689:15:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3680:25:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":364,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"3680:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":366,"indexExpression":{"argumentTypes":null,"id":365,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":358,"src":"3717:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3680:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":367,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"endorsers","nodeType":"MemberAccess","referencedDeclaration":141,"src":"3680:53:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3680:58:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":371,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3680:70:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":372,"nodeType":"ExpressionStatement","src":"3680:70:1"}]},"documentation":null,"id":374,"implemented":true,"kind":"function","modifiers":[],"name":"endorseSkill","nodeType":"FunctionDefinition","parameters":{"id":359,"nodeType":"ParameterList","parameters":[{"constant":false,"id":356,"name":"endorseeAddress","nodeType":"VariableDeclaration","scope":374,"src":"3626:23:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":355,"name":"address","nodeType":"ElementaryTypeName","src":"3626:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":358,"name":"index","nodeType":"VariableDeclaration","scope":374,"src":"3651:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":357,"name":"uint","nodeType":"ElementaryTypeName","src":"3651:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3625:37:1"},"returnParameters":{"id":360,"nodeType":"ParameterList","parameters":[],"src":"3670:0:1"},"scope":477,"src":"3604:153:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":400,"nodeType":"Block","src":"3874:126:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":386,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3892:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":388,"indexExpression":{"argumentTypes":null,"id":387,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3901:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3892:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":389,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":111,"src":"3892:26:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":390,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3920:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":392,"indexExpression":{"argumentTypes":null,"id":391,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3929:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3920:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":393,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":113,"src":"3920:34:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":394,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3956:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":396,"indexExpression":{"argumentTypes":null,"id":395,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3965:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3956:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":397,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceKeys","nodeType":"MemberAccess","referencedDeclaration":116,"src":"3956:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}}],"id":398,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"3891:102:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_address_$dyn_storage_$","typeString":"tuple(string storage ref,string storage ref,address[] storage ref)"}},"functionReturnParameters":385,"id":399,"nodeType":"Return","src":"3884:109:1"}]},"documentation":null,"id":401,"implemented":true,"kind":"function","modifiers":[],"name":"getUserData","nodeType":"FunctionDefinition","parameters":{"id":377,"nodeType":"ParameterList","parameters":[{"constant":false,"id":376,"name":"userAddress","nodeType":"VariableDeclaration","scope":401,"src":"3784:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":375,"name":"address","nodeType":"ElementaryTypeName","src":"3784:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3783:21:1"},"returnParameters":{"id":385,"nodeType":"ParameterList","parameters":[{"constant":false,"id":379,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3826:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":378,"name":"string","nodeType":"ElementaryTypeName","src":"3826:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":381,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3841:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":380,"name":"string","nodeType":"ElementaryTypeName","src":"3841:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":384,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3856:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":382,"name":"address","nodeType":"ElementaryTypeName","src":"3856:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":383,"length":null,"nodeType":"ArrayTypeName","src":"3856:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"3825:48:1"},"scope":477,"src":"3763:237:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":429,"nodeType":"Block","src":"4124:130:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":413,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4142:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":415,"indexExpression":{"argumentTypes":null,"id":414,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"4151:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4142:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":416,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"4142:32:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":418,"indexExpression":{"argumentTypes":null,"id":417,"name":"skillIndex","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"4175:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4142:44:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":419,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":138,"src":"4142:49:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":420,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4192:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":422,"indexExpression":{"argumentTypes":null,"id":421,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"4201:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4192:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":423,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"4192:32:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":425,"indexExpression":{"argumentTypes":null,"id":424,"name":"skillIndex","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"4225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4192:44:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":426,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"endorsers","nodeType":"MemberAccess","referencedDeclaration":141,"src":"4192:54:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}}],"id":427,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"4141:106:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_array$_t_address_$dyn_storage_$","typeString":"tuple(string storage ref,address[] storage ref)"}},"functionReturnParameters":412,"id":428,"nodeType":"Return","src":"4134:113:1"}]},"documentation":null,"id":430,"implemented":true,"kind":"function","modifiers":[],"name":"getUserSkillData","nodeType":"FunctionDefinition","parameters":{"id":406,"nodeType":"ParameterList","parameters":[{"constant":false,"id":403,"name":"userAddress","nodeType":"VariableDeclaration","scope":430,"src":"4032:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":402,"name":"address","nodeType":"ElementaryTypeName","src":"4032:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":405,"name":"skillIndex","nodeType":"VariableDeclaration","scope":430,"src":"4053:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":404,"name":"uint","nodeType":"ElementaryTypeName","src":"4053:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4031:38:1"},"returnParameters":{"id":412,"nodeType":"ParameterList","parameters":[{"constant":false,"id":408,"name":"","nodeType":"VariableDeclaration","scope":430,"src":"4091:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":407,"name":"string","nodeType":"ElementaryTypeName","src":"4091:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":411,"name":"","nodeType":"VariableDeclaration","scope":430,"src":"4106:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":409,"name":"address","nodeType":"ElementaryTypeName","src":"4106:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":410,"length":null,"nodeType":"ArrayTypeName","src":"4106:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"4090:33:1"},"scope":477,"src":"4006:248:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":475,"nodeType":"Block","src":"4379:242:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":445,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4397:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":447,"indexExpression":{"argumentTypes":null,"id":446,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4406:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4397:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":448,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4397:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":450,"indexExpression":{"argumentTypes":null,"id":449,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4434:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4397:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":451,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"organization","nodeType":"MemberAccess","referencedDeclaration":129,"src":"4397:56:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":452,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4454:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":454,"indexExpression":{"argumentTypes":null,"id":453,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4463:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4454:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":455,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4454:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":457,"indexExpression":{"argumentTypes":null,"id":456,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4491:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4454:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":458,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"expertise","nodeType":"MemberAccess","referencedDeclaration":131,"src":"4454:53:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":459,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4508:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":461,"indexExpression":{"argumentTypes":null,"id":460,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4517:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4508:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":462,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4508:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":464,"indexExpression":{"argumentTypes":null,"id":463,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4545:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4508:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":465,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"duration","nodeType":"MemberAccess","referencedDeclaration":133,"src":"4508:52:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":466,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4561:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":468,"indexExpression":{"argumentTypes":null,"id":467,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4570:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4561:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":469,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4561:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":471,"indexExpression":{"argumentTypes":null,"id":470,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4598:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4561:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":472,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":135,"src":"4561:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":473,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"4396:218:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_uint256_$_t_bool_$","typeString":"tuple(string storage ref,string storage ref,uint256,bool)"}},"functionReturnParameters":444,"id":474,"nodeType":"Return","src":"4389:225:1"}]},"documentation":null,"id":476,"implemented":true,"kind":"function","modifiers":[],"name":"getExperience","nodeType":"FunctionDefinition","parameters":{"id":435,"nodeType":"ParameterList","parameters":[{"constant":false,"id":432,"name":"userAddress","nodeType":"VariableDeclaration","scope":476,"src":"4283:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":431,"name":"address","nodeType":"ElementaryTypeName","src":"4283:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":434,"name":"index","nodeType":"VariableDeclaration","scope":476,"src":"4304:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":433,"name":"uint","nodeType":"ElementaryTypeName","src":"4304:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4282:33:1"},"returnParameters":{"id":444,"nodeType":"ParameterList","parameters":[{"constant":false,"id":437,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4337:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":436,"name":"string","nodeType":"ElementaryTypeName","src":"4337:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":439,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4352:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":438,"name":"string","nodeType":"ElementaryTypeName","src":"4352:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":441,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4367:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":440,"name":"uint","nodeType":"ElementaryTypeName","src":"4367:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":443,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4373:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":442,"name":"bool","nodeType":"ElementaryTypeName","src":"4373:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4336:42:1"},"scope":477,"src":"4260:361:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":478,"src":"338:4285:1"}],"src":"0:4624:1"},"legacyAST":{"absolutePath":"/Users/sofia/equalithon/DappLinkedIn/contracts/OpenHire.sol","exportedSymbols":{"Administrator":[89],"OpenHire":[477]},"id":478,"nodeType":"SourceUnit","nodes":[{"id":58,"literals":["solidity","^","0.5",".8"],"nodeType":"PragmaDirective","src":"0:23:1"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Administrator","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":60,"name":"adminAddress","nodeType":"VariableDeclaration","scope":89,"src":"54:28:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":59,"name":"address","nodeType":"ElementaryTypeName","src":"54:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"private"},{"body":{"id":68,"nodeType":"Block","src":"112:42:1","statements":[{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":63,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"122:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":64,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"137:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"137:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"122:25:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":67,"nodeType":"ExpressionStatement","src":"122:25:1"}]},"documentation":null,"id":69,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":61,"nodeType":"ParameterList","parameters":[],"src":"100:2:1"},"returnParameters":{"id":62,"nodeType":"ParameterList","parameters":[],"src":"112:0:1"},"scope":89,"src":"89:65:1","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"},{"body":{"id":76,"nodeType":"Block","src":"207:36:1","statements":[{"expression":{"argumentTypes":null,"id":74,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"224:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"functionReturnParameters":73,"id":75,"nodeType":"Return","src":"217:19:1"}]},"documentation":null,"id":77,"implemented":true,"kind":"function","modifiers":[],"name":"owner","nodeType":"FunctionDefinition","parameters":{"id":70,"nodeType":"ParameterList","parameters":[],"src":"174:2:1"},"returnParameters":{"id":73,"nodeType":"ParameterList","parameters":[{"constant":false,"id":72,"name":"","nodeType":"VariableDeclaration","scope":77,"src":"198:7:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":71,"name":"address","nodeType":"ElementaryTypeName","src":"198:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"197:9:1"},"scope":89,"src":"160:83:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"270:63:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_address","typeString":"address"},"id":83,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":80,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"288:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":81,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"288:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"id":82,"name":"adminAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"302:12:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"288:26:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":79,"name":"require","nodeType":"Identifier","overloadedDeclarations":[495,496],"referencedDeclaration":495,"src":"280:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":84,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"280:35:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":85,"nodeType":"ExpressionStatement","src":"280:35:1"},{"id":86,"nodeType":"PlaceholderStatement","src":"325:1:1"}]},"documentation":null,"id":88,"name":"onlyAdmin","nodeType":"ModifierDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[],"src":"267:2:1"},"src":"249:84:1","visibility":"internal"}],"scope":478,"src":"25:311:1"},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":90,"name":"Administrator","nodeType":"UserDefinedTypeName","referencedDeclaration":89,"src":"359:13:1","typeDescriptions":{"typeIdentifier":"t_contract$_Administrator_$89","typeString":"contract Administrator"}},"id":91,"nodeType":"InheritanceSpecifier","src":"359:13:1"}],"contractDependencies":[89],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":477,"linearizedBaseContracts":[477,89],"name":"OpenHire","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":95,"name":"allOrganizations","nodeType":"VariableDeclaration","scope":477,"src":"379:49:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization)"},"typeName":{"id":94,"keyType":{"id":92,"name":"address","nodeType":"ElementaryTypeName","src":"387:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"379:32:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization)"},"valueType":{"contractScope":null,"id":93,"name":"Organization","nodeType":"UserDefinedTypeName","referencedDeclaration":109,"src":"398:12:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage_ptr","typeString":"struct OpenHire.Organization"}}},"value":null,"visibility":"internal"},{"constant":false,"id":99,"name":"allUsers","nodeType":"VariableDeclaration","scope":477,"src":"434:33:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User)"},"typeName":{"id":98,"keyType":{"id":96,"name":"address","nodeType":"ElementaryTypeName","src":"442:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"434:24:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User)"},"valueType":{"contractScope":null,"id":97,"name":"User","nodeType":"UserDefinedTypeName","referencedDeclaration":125,"src":"453:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"}}},"value":null,"visibility":"internal"},{"constant":false,"id":102,"name":"allUserAddresses","nodeType":"VariableDeclaration","scope":477,"src":"473:33:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"473:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":101,"length":null,"nodeType":"ArrayTypeName","src":"473:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"canonicalName":"OpenHire.Organization","id":109,"members":[{"constant":false,"id":104,"name":"name","nodeType":"VariableDeclaration","scope":109,"src":"544:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":103,"name":"string","nodeType":"ElementaryTypeName","src":"544:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":106,"name":"emailAddress","nodeType":"VariableDeclaration","scope":109,"src":"565:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":105,"name":"string","nodeType":"ElementaryTypeName","src":"565:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":108,"name":"verified","nodeType":"VariableDeclaration","scope":109,"src":"594:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":107,"name":"bool","nodeType":"ElementaryTypeName","src":"594:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Organization","nodeType":"StructDefinition","scope":477,"src":"514:100:1","visibility":"public"},{"canonicalName":"OpenHire.User","id":125,"members":[{"constant":false,"id":111,"name":"name","nodeType":"VariableDeclaration","scope":125,"src":"685:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":110,"name":"string","nodeType":"ElementaryTypeName","src":"685:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":113,"name":"emailAddress","nodeType":"VariableDeclaration","scope":125,"src":"706:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":112,"name":"string","nodeType":"ElementaryTypeName","src":"706:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":116,"name":"experienceKeys","nodeType":"VariableDeclaration","scope":125,"src":"735:24:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":114,"name":"address","nodeType":"ElementaryTypeName","src":"735:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":115,"length":null,"nodeType":"ArrayTypeName","src":"735:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":119,"name":"experienceList","nodeType":"VariableDeclaration","scope":125,"src":"898:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Experience[]"},"typeName":{"baseType":{"contractScope":null,"id":117,"name":"Experience","nodeType":"UserDefinedTypeName","referencedDeclaration":136,"src":"898:10:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage_ptr","typeString":"struct OpenHire.Experience"}},"id":118,"length":null,"nodeType":"ArrayTypeName","src":"898:12:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Experience[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":122,"name":"skillsList","nodeType":"VariableDeclaration","scope":125,"src":"1028:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Skill[]"},"typeName":{"baseType":{"contractScope":null,"id":120,"name":"Skill","nodeType":"UserDefinedTypeName","referencedDeclaration":142,"src":"1028:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage_ptr","typeString":"struct OpenHire.Skill"}},"id":121,"length":null,"nodeType":"ArrayTypeName","src":"1028:7:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage_ptr","typeString":"struct OpenHire.Skill[]"}},"value":null,"visibility":"internal"},{"constant":false,"id":124,"name":"skillsListLength","nodeType":"VariableDeclaration","scope":125,"src":"1056:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":123,"name":"uint","nodeType":"ElementaryTypeName","src":"1056:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"User","nodeType":"StructDefinition","scope":477,"src":"663:421:1","visibility":"public"},{"canonicalName":"OpenHire.Experience","id":136,"members":[{"constant":false,"id":127,"name":"orgAddress","nodeType":"VariableDeclaration","scope":136,"src":"1118:18:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":126,"name":"address","nodeType":"ElementaryTypeName","src":"1118:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":129,"name":"organization","nodeType":"VariableDeclaration","scope":136,"src":"1146:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":128,"name":"string","nodeType":"ElementaryTypeName","src":"1146:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":131,"name":"expertise","nodeType":"VariableDeclaration","scope":136,"src":"1175:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":130,"name":"string","nodeType":"ElementaryTypeName","src":"1175:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":133,"name":"duration","nodeType":"VariableDeclaration","scope":136,"src":"1201:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":132,"name":"uint","nodeType":"ElementaryTypeName","src":"1201:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":135,"name":"verified","nodeType":"VariableDeclaration","scope":136,"src":"1224:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":134,"name":"bool","nodeType":"ElementaryTypeName","src":"1224:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"name":"Experience","nodeType":"StructDefinition","scope":477,"src":"1090:154:1","visibility":"public"},{"canonicalName":"OpenHire.Skill","id":142,"members":[{"constant":false,"id":138,"name":"name","nodeType":"VariableDeclaration","scope":142,"src":"1273:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":137,"name":"string","nodeType":"ElementaryTypeName","src":"1273:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":141,"name":"endorsers","nodeType":"VariableDeclaration","scope":142,"src":"1294:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":139,"name":"address","nodeType":"ElementaryTypeName","src":"1294:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":140,"length":null,"nodeType":"ArrayTypeName","src":"1294:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"name":"Skill","nodeType":"StructDefinition","scope":477,"src":"1250:70:1","visibility":"public"},{"body":{"id":164,"nodeType":"Block","src":"1409:226:1","statements":[{"assignments":[150],"declarations":[{"constant":false,"id":150,"name":"newOrganization","nodeType":"VariableDeclaration","scope":164,"src":"1419:35:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory_ptr","typeString":"struct OpenHire.Organization"},"typeName":{"contractScope":null,"id":149,"name":"Organization","nodeType":"UserDefinedTypeName","referencedDeclaration":109,"src":"1419:12:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage_ptr","typeString":"struct OpenHire.Organization"}},"value":null,"visibility":"internal"}],"id":156,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":152,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":144,"src":"1489:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":153,"name":"emailAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":146,"src":"1520:12:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"hexValue":"66616c7365","id":154,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"1555:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_bool","typeString":"bool"}],"id":151,"name":"Organization","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":109,"src":"1457:12:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Organization_$109_storage_ptr_$","typeString":"type(struct OpenHire.Organization storage pointer)"}},"id":155,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","emailAddress","verified"],"nodeType":"FunctionCall","src":"1457:114:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory","typeString":"struct OpenHire.Organization memory"}},"nodeType":"VariableDeclarationStatement","src":"1419:152:1"},{"expression":{"argumentTypes":null,"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":157,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1582:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":160,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":158,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"1599:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":159,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1599:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1582:28:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":161,"name":"newOrganization","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":150,"src":"1613:15:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_memory_ptr","typeString":"struct OpenHire.Organization memory"}},"src":"1582:46:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":163,"nodeType":"ExpressionStatement","src":"1582:46:1"}]},"documentation":null,"id":165,"implemented":true,"kind":"function","modifiers":[],"name":"createOrganization","nodeType":"FunctionDefinition","parameters":{"id":147,"nodeType":"ParameterList","parameters":[{"constant":false,"id":144,"name":"name","nodeType":"VariableDeclaration","scope":165,"src":"1354:18:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":143,"name":"string","nodeType":"ElementaryTypeName","src":"1354:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":146,"name":"emailAddress","nodeType":"VariableDeclaration","scope":165,"src":"1374:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":145,"name":"string","nodeType":"ElementaryTypeName","src":"1374:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"1353:48:1"},"returnParameters":{"id":148,"nodeType":"ParameterList","parameters":[],"src":"1409:0:1"},"scope":477,"src":"1326:309:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":190,"nodeType":"Block","src":"1745:150:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":176,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1763:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":178,"indexExpression":{"argumentTypes":null,"id":177,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1780:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1763:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":179,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":104,"src":"1763:36:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":180,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1801:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":182,"indexExpression":{"argumentTypes":null,"id":181,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1818:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1801:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":183,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":106,"src":"1801:44:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":184,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1847:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":186,"indexExpression":{"argumentTypes":null,"id":185,"name":"searchAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":167,"src":"1864:13:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1847:31:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":187,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"1847:40:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":188,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"1762:126:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_bool_$","typeString":"tuple(string storage ref,string storage ref,bool)"}},"functionReturnParameters":175,"id":189,"nodeType":"Return","src":"1755:133:1"}]},"documentation":null,"id":191,"implemented":true,"kind":"function","modifiers":[],"name":"getOrganization","nodeType":"FunctionDefinition","parameters":{"id":168,"nodeType":"ParameterList","parameters":[{"constant":false,"id":167,"name":"searchAddress","nodeType":"VariableDeclaration","scope":191,"src":"1666:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":166,"name":"address","nodeType":"ElementaryTypeName","src":"1666:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1665:23:1"},"returnParameters":{"id":175,"nodeType":"ParameterList","parameters":[{"constant":false,"id":170,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1710:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":169,"name":"string","nodeType":"ElementaryTypeName","src":"1710:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":172,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1725:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":171,"name":"string","nodeType":"ElementaryTypeName","src":"1725:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":174,"name":"","nodeType":"VariableDeclaration","scope":191,"src":"1740:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":173,"name":"bool","nodeType":"ElementaryTypeName","src":"1740:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"1709:36:1"},"scope":477,"src":"1641:254:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":205,"nodeType":"Block","src":"1975:70:1","statements":[{"expression":{"argumentTypes":null,"id":203,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":198,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"1985:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":200,"indexExpression":{"argumentTypes":null,"id":199,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":193,"src":"2002:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1985:37:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":201,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"1985:46:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":202,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2034:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"1985:53:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":204,"nodeType":"ExpressionStatement","src":"1985:53:1"}]},"documentation":null,"id":206,"implemented":true,"kind":"function","modifiers":[{"arguments":null,"id":196,"modifierName":{"argumentTypes":null,"id":195,"name":"onlyAdmin","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":88,"src":"1965:9:1","typeDescriptions":{"typeIdentifier":"t_modifier$__$","typeString":"modifier ()"}},"nodeType":"ModifierInvocation","src":"1965:9:1"}],"name":"verifyOrganization","nodeType":"FunctionDefinition","parameters":{"id":194,"nodeType":"ParameterList","parameters":[{"constant":false,"id":193,"name":"organizationAddress","nodeType":"VariableDeclaration","scope":206,"src":"1929:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":192,"name":"address","nodeType":"ElementaryTypeName","src":"1929:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"1928:29:1"},"returnParameters":{"id":197,"nodeType":"ParameterList","parameters":[],"src":"1975:0:1"},"scope":477,"src":"1901:144:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":239,"nodeType":"Block","src":"2201:178:1","statements":[{"assignments":[214],"declarations":[{"constant":false,"id":214,"name":"newUser","nodeType":"VariableDeclaration","scope":239,"src":"2211:20:1","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"},"typeName":{"contractScope":null,"id":213,"name":"User","nodeType":"UserDefinedTypeName","referencedDeclaration":125,"src":"2211:4:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User"}},"value":null,"visibility":"internal"}],"id":219,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":215,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2234:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":218,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":216,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2243:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":217,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2243:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2234:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"nodeType":"VariableDeclarationStatement","src":"2211:43:1"},{"expression":{"argumentTypes":null,"id":224,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":220,"name":"newUser","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":214,"src":"2264:7:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User storage pointer"}},"id":222,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":111,"src":"2264:12:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":223,"name":"name","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":208,"src":"2279:4:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2264:19:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":225,"nodeType":"ExpressionStatement","src":"2264:19:1"},{"expression":{"argumentTypes":null,"id":230,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":226,"name":"newUser","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":214,"src":"2293:7:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage_ptr","typeString":"struct OpenHire.User storage pointer"}},"id":228,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":113,"src":"2293:20:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":229,"name":"emailAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":210,"src":"2316:12:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"2293:35:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":231,"nodeType":"ExpressionStatement","src":"2293:35:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":235,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2361:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":236,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2361:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"id":232,"name":"allUserAddresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":102,"src":"2339:16:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":234,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2339:21:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":237,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2339:33:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":238,"nodeType":"ExpressionStatement","src":"2339:33:1"}]},"documentation":null,"id":240,"implemented":true,"kind":"function","modifiers":[],"name":"createUser","nodeType":"FunctionDefinition","parameters":{"id":211,"nodeType":"ParameterList","parameters":[{"constant":false,"id":208,"name":"name","nodeType":"VariableDeclaration","scope":240,"src":"2146:18:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":207,"name":"string","nodeType":"ElementaryTypeName","src":"2146:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":210,"name":"emailAddress","nodeType":"VariableDeclaration","scope":240,"src":"2166:26:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":209,"name":"string","nodeType":"ElementaryTypeName","src":"2166:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"2145:48:1"},"returnParameters":{"id":212,"nodeType":"ParameterList","parameters":[],"src":"2201:0:1"},"scope":477,"src":"2126:253:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":279,"nodeType":"Block","src":"2516:394:1","statements":[{"assignments":[252],"declarations":[{"constant":false,"id":252,"name":"newExperience","nodeType":"VariableDeclaration","scope":279,"src":"2526:31:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience"},"typeName":{"contractScope":null,"id":251,"name":"Experience","nodeType":"UserDefinedTypeName","referencedDeclaration":136,"src":"2526:10:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage_ptr","typeString":"struct OpenHire.Experience"}},"value":null,"visibility":"internal"}],"id":260,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":254,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":242,"src":"2597:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":255,"name":"organizationName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":244,"src":"2644:16:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":256,"name":"expertise","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":246,"src":"2685:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":257,"name":"duration","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":248,"src":"2718:8:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"66616c7365","id":258,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"2750:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_bool","typeString":"bool"}],"id":253,"name":"Experience","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":136,"src":"2560:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Experience_$136_storage_ptr_$","typeString":"type(struct OpenHire.Experience storage pointer)"}},"id":259,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["orgAddress","organization","expertise","duration","verified"],"nodeType":"FunctionCall","src":"2560:206:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory","typeString":"struct OpenHire.Experience memory"}},"nodeType":"VariableDeclarationStatement","src":"2526:240:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":267,"name":"organizationAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":242,"src":"2818:19:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":261,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2777:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":264,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":262,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2786:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":263,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2786:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2777:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":265,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceKeys","nodeType":"MemberAccess","referencedDeclaration":116,"src":"2777:35:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":266,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2777:40:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":268,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2777:61:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":269,"nodeType":"ExpressionStatement","src":"2777:61:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":276,"name":"newExperience","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":252,"src":"2889:13:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Experience_$136_memory_ptr","typeString":"struct OpenHire.Experience memory"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":270,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"2848:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":273,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":271,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"2857:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":272,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2857:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"2848:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":274,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"2848:35:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":275,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"2848:40:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Experience_$136_storage_$returns$_t_uint256_$","typeString":"function (struct OpenHire.Experience storage ref) returns (uint256)"}},"id":277,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"2848:55:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":278,"nodeType":"ExpressionStatement","src":"2848:55:1"}]},"documentation":null,"id":280,"implemented":true,"kind":"function","modifiers":[],"name":"addExperience","nodeType":"FunctionDefinition","parameters":{"id":249,"nodeType":"ParameterList","parameters":[{"constant":false,"id":242,"name":"organizationAddress","nodeType":"VariableDeclaration","scope":280,"src":"2408:27:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":241,"name":"address","nodeType":"ElementaryTypeName","src":"2408:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":244,"name":"organizationName","nodeType":"VariableDeclaration","scope":280,"src":"2437:30:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":243,"name":"string","nodeType":"ElementaryTypeName","src":"2437:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":246,"name":"expertise","nodeType":"VariableDeclaration","scope":280,"src":"2469:23:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":245,"name":"string","nodeType":"ElementaryTypeName","src":"2469:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":248,"name":"duration","nodeType":"VariableDeclaration","scope":280,"src":"2494:13:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":247,"name":"uint","nodeType":"ElementaryTypeName","src":"2494:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2407:101:1"},"returnParameters":{"id":250,"nodeType":"ParameterList","parameters":[],"src":"2516:0:1"},"scope":477,"src":"2385:525:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":307,"nodeType":"Block","src":"3025:140:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"commonType":{"typeIdentifier":"t_bool","typeString":"bool"},"id":294,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":288,"name":"allOrganizations","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":95,"src":"3043:16:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_Organization_$109_storage_$","typeString":"mapping(address => struct OpenHire.Organization storage ref)"}},"id":291,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":289,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3060:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":290,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3060:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3043:28:1","typeDescriptions":{"typeIdentifier":"t_struct$_Organization_$109_storage","typeString":"struct OpenHire.Organization storage ref"}},"id":292,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":108,"src":"3043:37:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"BinaryOperation","operator":"==","rightExpression":{"argumentTypes":null,"hexValue":"74727565","id":293,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3084:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"3043:45:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"}],"id":287,"name":"require","nodeType":"Identifier","overloadedDeclarations":[495,496],"referencedDeclaration":495,"src":"3035:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$returns$__$","typeString":"function (bool) pure"}},"id":295,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3035:54:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":296,"nodeType":"ExpressionStatement","src":"3035:54:1"},{"expression":{"argumentTypes":null,"id":305,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":297,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3099:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":299,"indexExpression":{"argumentTypes":null,"id":298,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":282,"src":"3108:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3099:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":300,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"3099:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":302,"indexExpression":{"argumentTypes":null,"id":301,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":284,"src":"3136:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3099:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":303,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":135,"src":"3099:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":304,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"3154:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"3099:59:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":306,"nodeType":"ExpressionStatement","src":"3099:59:1"}]},"documentation":null,"id":308,"implemented":true,"kind":"function","modifiers":[],"name":"verifyExperience","nodeType":"FunctionDefinition","parameters":{"id":285,"nodeType":"ParameterList","parameters":[{"constant":false,"id":282,"name":"userAddress","nodeType":"VariableDeclaration","scope":308,"src":"2985:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":281,"name":"address","nodeType":"ElementaryTypeName","src":"2985:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":284,"name":"index","nodeType":"VariableDeclaration","scope":308,"src":"3006:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":283,"name":"uint","nodeType":"ElementaryTypeName","src":"3006:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"2984:33:1"},"returnParameters":{"id":286,"nodeType":"ParameterList","parameters":[],"src":"3025:0:1"},"scope":477,"src":"2959:206:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":340,"nodeType":"Block","src":"3221:233:1","statements":[{"assignments":[314],"declarations":[{"constant":false,"id":314,"name":"newSkill","nodeType":"VariableDeclaration","scope":340,"src":"3231:21:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill"},"typeName":{"contractScope":null,"id":313,"name":"Skill","nodeType":"UserDefinedTypeName","referencedDeclaration":142,"src":"3231:5:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage_ptr","typeString":"struct OpenHire.Skill"}},"value":null,"visibility":"internal"}],"id":323,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":316,"name":"skillName","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":310,"src":"3281:9:1","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"arguments":[{"argumentTypes":null,"hexValue":"30","id":320,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"3329:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"},"value":"0"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_rational_0_by_1","typeString":"int_const 0"}],"id":319,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"NewExpression","src":"3315:13:1","typeDescriptions":{"typeIdentifier":"t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$","typeString":"function (uint256) pure returns (address[] memory)"},"typeName":{"baseType":{"id":317,"name":"address","nodeType":"ElementaryTypeName","src":"3319:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":318,"length":null,"nodeType":"ArrayTypeName","src":"3319:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}}},"id":321,"isConstant":false,"isLValue":false,"isPure":true,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3315:16:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory","typeString":"address[] memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_array$_t_address_$dyn_memory","typeString":"address[] memory"}],"id":315,"name":"Skill","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":142,"src":"3255:5:1","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Skill_$142_storage_ptr_$","typeString":"type(struct OpenHire.Skill storage pointer)"}},"id":322,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["name","endorsers"],"nodeType":"FunctionCall","src":"3255:87:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory","typeString":"struct OpenHire.Skill memory"}},"nodeType":"VariableDeclarationStatement","src":"3231:111:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":330,"name":"newSkill","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":314,"src":"3389:8:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Skill_$142_memory_ptr","typeString":"struct OpenHire.Skill memory"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":324,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3352:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":327,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":325,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3361:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":326,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3361:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3352:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":328,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"3352:31:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":329,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3352:36:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Skill_$142_storage_$returns$_t_uint256_$","typeString":"function (struct OpenHire.Skill storage ref) returns (uint256)"}},"id":331,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3352:46:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":332,"nodeType":"ExpressionStatement","src":"3352:46:1"},{"expression":{"argumentTypes":null,"id":338,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"3408:39:1","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":333,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3408:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":336,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":334,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3417:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":335,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3417:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3408:20:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":337,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"skillsListLength","nodeType":"MemberAccess","referencedDeclaration":124,"src":"3408:37:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":339,"nodeType":"ExpressionStatement","src":"3408:39:1"}]},"documentation":null,"id":341,"implemented":true,"kind":"function","modifiers":[],"name":"addSkill","nodeType":"FunctionDefinition","parameters":{"id":311,"nodeType":"ParameterList","parameters":[{"constant":false,"id":310,"name":"skillName","nodeType":"VariableDeclaration","scope":341,"src":"3189:23:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":309,"name":"string","nodeType":"ElementaryTypeName","src":"3189:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"3188:25:1"},"returnParameters":{"id":312,"nodeType":"ParameterList","parameters":[],"src":"3221:0:1"},"scope":477,"src":"3171:283:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":353,"nodeType":"Block","src":"3536:62:1","statements":[{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":348,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3553:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":350,"indexExpression":{"argumentTypes":null,"id":349,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":343,"src":"3562:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3553:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":351,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsListLength","nodeType":"MemberAccess","referencedDeclaration":124,"src":"3553:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":347,"id":352,"nodeType":"Return","src":"3546:45:1"}]},"documentation":null,"id":354,"implemented":true,"kind":"function","modifiers":[],"name":"getSkillListLength","nodeType":"FunctionDefinition","parameters":{"id":344,"nodeType":"ParameterList","parameters":[{"constant":false,"id":343,"name":"userAddress","nodeType":"VariableDeclaration","scope":354,"src":"3488:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":342,"name":"address","nodeType":"ElementaryTypeName","src":"3488:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3487:21:1"},"returnParameters":{"id":347,"nodeType":"ParameterList","parameters":[{"constant":false,"id":346,"name":"","nodeType":"VariableDeclaration","scope":354,"src":"3530:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":345,"name":"uint","nodeType":"ElementaryTypeName","src":"3530:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3529:6:1"},"scope":477,"src":"3460:138:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":373,"nodeType":"Block","src":"3670:87:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":369,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":492,"src":"3739:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":370,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3739:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":361,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3680:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":363,"indexExpression":{"argumentTypes":null,"id":362,"name":"endorseeAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":356,"src":"3689:15:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3680:25:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":364,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"3680:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":366,"indexExpression":{"argumentTypes":null,"id":365,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":358,"src":"3717:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3680:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":367,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"endorsers","nodeType":"MemberAccess","referencedDeclaration":141,"src":"3680:53:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":368,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"3680:58:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$","typeString":"function (address) returns (uint256)"}},"id":371,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"3680:70:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":372,"nodeType":"ExpressionStatement","src":"3680:70:1"}]},"documentation":null,"id":374,"implemented":true,"kind":"function","modifiers":[],"name":"endorseSkill","nodeType":"FunctionDefinition","parameters":{"id":359,"nodeType":"ParameterList","parameters":[{"constant":false,"id":356,"name":"endorseeAddress","nodeType":"VariableDeclaration","scope":374,"src":"3626:23:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":355,"name":"address","nodeType":"ElementaryTypeName","src":"3626:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":358,"name":"index","nodeType":"VariableDeclaration","scope":374,"src":"3651:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":357,"name":"uint","nodeType":"ElementaryTypeName","src":"3651:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"3625:37:1"},"returnParameters":{"id":360,"nodeType":"ParameterList","parameters":[],"src":"3670:0:1"},"scope":477,"src":"3604:153:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":400,"nodeType":"Block","src":"3874:126:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":386,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3892:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":388,"indexExpression":{"argumentTypes":null,"id":387,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3901:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3892:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":389,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":111,"src":"3892:26:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":390,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3920:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":392,"indexExpression":{"argumentTypes":null,"id":391,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3929:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3920:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":393,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"emailAddress","nodeType":"MemberAccess","referencedDeclaration":113,"src":"3920:34:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":394,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"3956:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":396,"indexExpression":{"argumentTypes":null,"id":395,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":376,"src":"3965:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"3956:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":397,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceKeys","nodeType":"MemberAccess","referencedDeclaration":116,"src":"3956:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}}],"id":398,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"3891:102:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_array$_t_address_$dyn_storage_$","typeString":"tuple(string storage ref,string storage ref,address[] storage ref)"}},"functionReturnParameters":385,"id":399,"nodeType":"Return","src":"3884:109:1"}]},"documentation":null,"id":401,"implemented":true,"kind":"function","modifiers":[],"name":"getUserData","nodeType":"FunctionDefinition","parameters":{"id":377,"nodeType":"ParameterList","parameters":[{"constant":false,"id":376,"name":"userAddress","nodeType":"VariableDeclaration","scope":401,"src":"3784:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":375,"name":"address","nodeType":"ElementaryTypeName","src":"3784:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"3783:21:1"},"returnParameters":{"id":385,"nodeType":"ParameterList","parameters":[{"constant":false,"id":379,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3826:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":378,"name":"string","nodeType":"ElementaryTypeName","src":"3826:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":381,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3841:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":380,"name":"string","nodeType":"ElementaryTypeName","src":"3841:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":384,"name":"","nodeType":"VariableDeclaration","scope":401,"src":"3856:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":382,"name":"address","nodeType":"ElementaryTypeName","src":"3856:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":383,"length":null,"nodeType":"ArrayTypeName","src":"3856:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"3825:48:1"},"scope":477,"src":"3763:237:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":429,"nodeType":"Block","src":"4124:130:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":413,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4142:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":415,"indexExpression":{"argumentTypes":null,"id":414,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"4151:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4142:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":416,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"4142:32:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":418,"indexExpression":{"argumentTypes":null,"id":417,"name":"skillIndex","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"4175:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4142:44:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":419,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"name","nodeType":"MemberAccess","referencedDeclaration":138,"src":"4142:49:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":420,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4192:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":422,"indexExpression":{"argumentTypes":null,"id":421,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":403,"src":"4201:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4192:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":423,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"skillsList","nodeType":"MemberAccess","referencedDeclaration":122,"src":"4192:32:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Skill_$142_storage_$dyn_storage","typeString":"struct OpenHire.Skill storage ref[] storage ref"}},"id":425,"indexExpression":{"argumentTypes":null,"id":424,"name":"skillIndex","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":405,"src":"4225:10:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4192:44:1","typeDescriptions":{"typeIdentifier":"t_struct$_Skill_$142_storage","typeString":"struct OpenHire.Skill storage ref"}},"id":426,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"endorsers","nodeType":"MemberAccess","referencedDeclaration":141,"src":"4192:54:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}}],"id":427,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"4141:106:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_array$_t_address_$dyn_storage_$","typeString":"tuple(string storage ref,address[] storage ref)"}},"functionReturnParameters":412,"id":428,"nodeType":"Return","src":"4134:113:1"}]},"documentation":null,"id":430,"implemented":true,"kind":"function","modifiers":[],"name":"getUserSkillData","nodeType":"FunctionDefinition","parameters":{"id":406,"nodeType":"ParameterList","parameters":[{"constant":false,"id":403,"name":"userAddress","nodeType":"VariableDeclaration","scope":430,"src":"4032:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":402,"name":"address","nodeType":"ElementaryTypeName","src":"4032:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":405,"name":"skillIndex","nodeType":"VariableDeclaration","scope":430,"src":"4053:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":404,"name":"uint","nodeType":"ElementaryTypeName","src":"4053:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4031:38:1"},"returnParameters":{"id":412,"nodeType":"ParameterList","parameters":[{"constant":false,"id":408,"name":"","nodeType":"VariableDeclaration","scope":430,"src":"4091:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":407,"name":"string","nodeType":"ElementaryTypeName","src":"4091:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":411,"name":"","nodeType":"VariableDeclaration","scope":430,"src":"4106:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":409,"name":"address","nodeType":"ElementaryTypeName","src":"4106:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":410,"length":null,"nodeType":"ArrayTypeName","src":"4106:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"4090:33:1"},"scope":477,"src":"4006:248:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":475,"nodeType":"Block","src":"4379:242:1","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":445,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4397:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":447,"indexExpression":{"argumentTypes":null,"id":446,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4406:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4397:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":448,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4397:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":450,"indexExpression":{"argumentTypes":null,"id":449,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4434:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4397:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":451,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"organization","nodeType":"MemberAccess","referencedDeclaration":129,"src":"4397:56:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":452,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4454:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":454,"indexExpression":{"argumentTypes":null,"id":453,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4463:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4454:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":455,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4454:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":457,"indexExpression":{"argumentTypes":null,"id":456,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4491:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4454:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":458,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"expertise","nodeType":"MemberAccess","referencedDeclaration":131,"src":"4454:53:1","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":459,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4508:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":461,"indexExpression":{"argumentTypes":null,"id":460,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4517:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4508:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":462,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4508:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":464,"indexExpression":{"argumentTypes":null,"id":463,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4545:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4508:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":465,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"duration","nodeType":"MemberAccess","referencedDeclaration":133,"src":"4508:52:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":466,"name":"allUsers","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":99,"src":"4561:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_struct$_User_$125_storage_$","typeString":"mapping(address => struct OpenHire.User storage ref)"}},"id":468,"indexExpression":{"argumentTypes":null,"id":467,"name":"userAddress","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":432,"src":"4570:11:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4561:21:1","typeDescriptions":{"typeIdentifier":"t_struct$_User_$125_storage","typeString":"struct OpenHire.User storage ref"}},"id":469,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"experienceList","nodeType":"MemberAccess","referencedDeclaration":119,"src":"4561:36:1","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Experience_$136_storage_$dyn_storage","typeString":"struct OpenHire.Experience storage ref[] storage ref"}},"id":471,"indexExpression":{"argumentTypes":null,"id":470,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":434,"src":"4598:5:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"4561:43:1","typeDescriptions":{"typeIdentifier":"t_struct$_Experience_$136_storage","typeString":"struct OpenHire.Experience storage ref"}},"id":472,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"verified","nodeType":"MemberAccess","referencedDeclaration":135,"src":"4561:52:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}],"id":473,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"4396:218:1","typeDescriptions":{"typeIdentifier":"t_tuple$_t_string_storage_$_t_string_storage_$_t_uint256_$_t_bool_$","typeString":"tuple(string storage ref,string storage ref,uint256,bool)"}},"functionReturnParameters":444,"id":474,"nodeType":"Return","src":"4389:225:1"}]},"documentation":null,"id":476,"implemented":true,"kind":"function","modifiers":[],"name":"getExperience","nodeType":"FunctionDefinition","parameters":{"id":435,"nodeType":"ParameterList","parameters":[{"constant":false,"id":432,"name":"userAddress","nodeType":"VariableDeclaration","scope":476,"src":"4283:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":431,"name":"address","nodeType":"ElementaryTypeName","src":"4283:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":434,"name":"index","nodeType":"VariableDeclaration","scope":476,"src":"4304:10:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":433,"name":"uint","nodeType":"ElementaryTypeName","src":"4304:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"4282:33:1"},"returnParameters":{"id":444,"nodeType":"ParameterList","parameters":[{"constant":false,"id":437,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4337:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":436,"name":"string","nodeType":"ElementaryTypeName","src":"4337:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":439,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4352:13:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":438,"name":"string","nodeType":"ElementaryTypeName","src":"4352:6:1","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":441,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4367:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":440,"name":"uint","nodeType":"ElementaryTypeName","src":"4367:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":443,"name":"","nodeType":"VariableDeclaration","scope":476,"src":"4373:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":442,"name":"bool","nodeType":"ElementaryTypeName","src":"4373:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"4336:42:1"},"scope":477,"src":"4260:361:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":478,"src":"338:4285:1"}],"src":"0:4624:1"},"compiler":{"name":"solc","version":"0.5.8+commit.23d335f2.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0xe0a9Fa945dcB8a4e6835dEC035B116847d17D210","transactionHash":"0x4146f33ba1a1ad1d9d9e92849e02b12007e24714d15258c31ff6cf699cafb00b"}},"schemaVersion":"3.0.11","updatedAt":"2019-08-07T15:42:02.970Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./src/drizzleOptions.js":
/*!*******************************!*\
  !*** ./src/drizzleOptions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contracts/Migrations.json */ "./src/contracts/Migrations.json");
var _contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/Migrations.json */ "./src/contracts/Migrations.json", 1);
/* harmony import */ var _contracts_OpenHire_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts/OpenHire.json */ "./src/contracts/OpenHire.json");
var _contracts_OpenHire_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/OpenHire.json */ "./src/contracts/OpenHire.json", 1);


const options = {
  // web3: {
  //   block: false,
  //   fallback: {
  //     type: "ws",
  //     url: "ws://127.0.0.1:9545",
  //   },
  // },
  contracts: [_contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_0__, _contracts_OpenHire_json__WEBPACK_IMPORTED_MODULE_1__] // events: {
  //   DappChat: ["Tweet"],
  // },
  // polls: {
  //   // set polling interval to 30secs so we don't get buried in poll events
  //   accounts: 30000,
  // },

};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle */ "./node_modules/drizzle/dist/drizzle.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(drizzle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var drizzle_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! drizzle-react */ "./node_modules/drizzle-react/dist/drizzle-react.js");
/* harmony import */ var drizzle_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(drizzle_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contracts/Migrations.json */ "./src/contracts/Migrations.json");
var _contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/Migrations.json */ "./src/contracts/Migrations.json", 1);
/* harmony import */ var _contracts_OpenHire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contracts/OpenHire */ "./src/contracts/OpenHire.json");
var _contracts_OpenHire__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contracts/OpenHire */ "./src/contracts/OpenHire.json", 1);
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middleware */ "./src/middleware/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/sofia/equalithon/DappLinkedIn/openhire/src/index.js";












const options = {
  contracts: [_contracts_Migrations_json__WEBPACK_IMPORTED_MODULE_8__, _contracts_OpenHire__WEBPACK_IMPORTED_MODULE_9__]
};
const drizzle = new drizzle__WEBPACK_IMPORTED_MODULE_5__["Drizzle"](options, _middleware__WEBPACK_IMPORTED_MODULE_10__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(drizzle_react__WEBPACK_IMPORTED_MODULE_6__["DrizzleContext"].Provider, {
  drizzle: drizzle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}))), document.getElementById("root"));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/middleware/index.js":
/*!*********************************!*\
  !*** ./src/middleware/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle */ "./node_modules/drizzle/dist/drizzle.js");
/* harmony import */ var drizzle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(drizzle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _drizzleOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drizzleOptions */ "./src/drizzleOptions.js");




const contractEventNotifier = store => next => action => {
  //BLOCK_RECEIVED
  if (action.type === 'CONTRACT_SYNCED') {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].dismiss();
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success('Success! ✔️', {
      autoclose: 5000
    });
  }

  return next(action);
};

const appMiddlewares = [contractEventNotifier];
const store = Object(drizzle__WEBPACK_IMPORTED_MODULE_1__["generateStore"])({
  drizzleOptions: _drizzleOptions__WEBPACK_IMPORTED_MODULE_2__["default"],
  appMiddlewares,
  disableReduxDevTools: false // enable ReduxDevTools!

}); // Use the store with DrizzleProvider

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sofia/equalithon/DappLinkedIn/openhire/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/sofia/equalithon/DappLinkedIn/openhire/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map