(self.webpackChunktag_by_tag=self.webpackChunktag_by_tag||[]).push([[62],{"./src/stories/Page.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:function(){return LoggedIn},LoggedOut:function(){return LoggedOut},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Page_stories}});var _LoggedOut$parameters,_LoggedOut$parameters2,_LoggedOut$parameters3,_LoggedIn$parameters,_LoggedIn$parameters2,_LoggedIn$parameters3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Header=__webpack_require__("./src/stories/Header.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Page=function Page(){var _React$useState=react.useState(),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),user=_React$useState2[0],setUser=_React$useState2[1];return(0,jsx_runtime.jsxs)("article",{children:[(0,jsx_runtime.jsx)(Header.h,{user:user,onLogin:function onLogin(){return setUser({name:"Jane Doe"})},onLogout:function onLogout(){return setUser(void 0)},onCreateAccount:function onCreateAccount(){return setUser({name:"Jane Doe"})}}),(0,jsx_runtime.jsxs)("section",{className:"storybook-page",children:[(0,jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),(0,jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",(0,jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:(0,jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),(0,jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),(0,jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),(0,jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",(0,jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),(0,jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",(0,jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};Page.__docgenInfo={description:"",methods:[],displayName:"Page"};var _play,Page_stories={title:"Example/Page",component:Page,parameters:{layout:"fullscreen"}},LoggedOut={},LoggedIn={play:(_play=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(_ref){var canvasElement,canvas,loginButton;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return canvasElement=_ref.canvasElement,canvas=(0,esm.uh)(canvasElement),_context.next=4,canvas.getByRole("button",{name:/Log in/i});case 4:return loginButton=_context.sent,_context.next=7,esm.mV.click(loginButton);case 7:case"end":return _context.stop()}}),_callee)}))),function play(_x){return _play.apply(this,arguments)})};LoggedOut.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LoggedOut.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LoggedOut$parameters=LoggedOut.parameters)||void 0===_LoggedOut$parameters?void 0:_LoggedOut$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_LoggedOut$parameters2=LoggedOut.parameters)||void 0===_LoggedOut$parameters2||null===(_LoggedOut$parameters3=_LoggedOut$parameters2.docs)||void 0===_LoggedOut$parameters3?void 0:_LoggedOut$parameters3.source)})}),LoggedIn.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LoggedIn.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LoggedIn$parameters=LoggedIn.parameters)||void 0===_LoggedIn$parameters?void 0:_LoggedIn$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = await canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await userEvent.click(loginButton);\n  }\n}"},null===(_LoggedIn$parameters2=LoggedIn.parameters)||void 0===_LoggedIn$parameters2||null===(_LoggedIn$parameters3=_LoggedIn$parameters2.docs)||void 0===_LoggedIn$parameters3?void 0:_LoggedIn$parameters3.source)})});var __namedExportsOrder=["LoggedOut","LoggedIn"]},"./src/stories/Button.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),_excluded=["primary","backgroundColor","size","label"],Button=function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}},"./src/stories/Header.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{h:function(){return Header}});__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./src/stories/Button.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsxs)("div",{className:"storybook-header",children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,jsx_runtime.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),(0,jsx_runtime.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),(0,jsx_runtime.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),(0,jsx_runtime.jsx)("h1",{children:"Acme"})]}),(0,jsx_runtime.jsx)("div",{children:user?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"welcome",children:["Welcome, ",(0,jsx_runtime.jsx)("b",{children:user.name}),"!"]}),(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogout,label:"Log out"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{size:"small",onClick:onLogin,label:"Log in"}),(0,jsx_runtime.jsx)(Button.z,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.defaultProps={user:null},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"shape",value:{name:{name:"string",required:!0}}},required:!1},onLogin:{description:"",type:{name:"func"},required:!0},onLogout:{description:"",type:{name:"func"},required:!0},onCreateAccount:{description:"",type:{name:"func"},required:!0}}}},"?4f7e":function(){}}]);