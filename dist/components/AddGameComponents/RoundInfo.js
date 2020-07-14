"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var RoundInfo=/*#__PURE__*/function(_React$Component){_inherits(RoundInfo,_React$Component);var _super=_createSuper(RoundInfo);function RoundInfo(props){var _this;_classCallCheck(this,RoundInfo);_this=_super.call(this,props);_this.houses=["lannister","greyjoy",,"stark",,"arryn",,"baratheon",,"targaryen",,"dorn",,"tyrell"];return _this;}_createClass(RoundInfo,[{key:"setGreenBackground",value:function setGreenBackground(event){if(event.target.nodeName==="INPUT"){}else{event.target.setAttribute("style"," background-color: lightgreen; width:4em; float:right; display:inline; margin:0px; padding:0px;border:0px;");}}},{key:"returnButton",value:function returnButton(){if(this.props.round>1){return/*#__PURE__*/_react["default"].createElement("div",{style:{width:"13em",textAlign:"center"}},/*#__PURE__*/_react["default"].createElement("button",{onClick:this.props.loadFromPrevious,style:{textAlign:"center",display:"inline"}},"Load From Previous Round"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("br",null));}}},{key:"takeFocus",value:function takeFocus(event){event.target.focus();}},{key:"indicatePlayerOrVassal",value:function indicatePlayerOrVassal(houseName){if(this.props.houseAssignments[houseName]==-1){return"Vassal";}else if(this.props.houseAssignments[houseName]==-2){return"DEAD";}else{return"Player";}}},{key:"componentDidMount",value:function componentDidMount(){}},{key:"componentWillMount",value:function componentWillMount(){}},{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/_react["default"].createElement("div",{onChange:this.setGreenBackground,id:"round"+this.props.round+"_start"},this.returnButton(),this.houses.map(function(house){return/*#__PURE__*/_react["default"].createElement("div",{key:house,id:house,style:{width:"13em"}},/*#__PURE__*/_react["default"].createElement("h4",{style:{margin:"0px",padding:"0px",border:"0px",textDecoration:"underline"}},house.toUpperCase()," : ",_this2.indicatePlayerOrVassal(house)),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Iron Throne"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_throne_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"throne"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number+1},number+1);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Fiefdoms (Sword)"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_sword_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"sword"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number+1},number+1);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"King's Court (Raven)"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_raven_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"raven"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number+1},number+1);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Money"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_money_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"money"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(21).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Supply"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_supply_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"supply"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{backgroundColor:"white",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px",textAlign:"center",textDecoration:"underline",fontSize:12}},"Ending"),/*#__PURE__*/_react["default"].createElement("div",{style:{backgroundColor:"white",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px",textAlign:"center",textDecoration:"underline",fontSize:12}},"Starting"),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"\xA0\xA0\xA0Boats"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_boats_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"boats_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_boats_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"boats_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(7).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"\xA0\xA0\xA0Footmen"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_footmen_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"footmen_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(11).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_footmen_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+ +"_footmen_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(11).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"\xA0\xA0\xA0Knights"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_knights_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"knights_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(6).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_knights_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"knights_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(6).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"\xA0\xA0\xA0Siege"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_siege_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"siege_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(3).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_siege_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"siege_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(3).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Strongholds"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_strongholds_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"strongholds_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(8).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_strongholds_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"strongholds_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(8).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Castles"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_castles_end_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"castles_end"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(8).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("div",{style:{"float":"right",display:"inline"}},"||"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_castles_start_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"castles_start"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(8).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Land Territories"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_landTerritories_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"landTerritories"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(15).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Sea Territories"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_seaTerritories_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"seaTerritories"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(10).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("div",{style:{margin:"0px",display:"inline"}},"Forced Muster (Value)"),/*#__PURE__*/_react["default"].createElement("select",{className:"fieldSelect",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_forcedMuster_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"forcedMuster"],style:{backgroundColor:"lightlightgray",width:"4em","float":"right",display:"inline",margin:"0px",padding:"0px",border:"0px"}},_toConsumableArray(Array(3).keys()).map(function(number){return/*#__PURE__*/_react["default"].createElement("option",{key:number,value:number},number);})),/*#__PURE__*/_react["default"].createElement("input",{type:"text",onMouseEnter:_this2.takeFocus,id:"round"+_this2.props.round+"_playerNotes_"+house,value:_this2.props.saved["round"+_this2.props.round+"_"+house+"_"+"playerNotes"],placeholder:"Player Notes",maxLength:"50",style:{backgroundColor:"lightlightgray",width:"100%",height:"2em",display:"inline",margin:"1px",padding:"1px",border:"1px",borderColor:"black",borderStyle:"solid",borderWidth:"1px"}}),/*#__PURE__*/_react["default"].createElement("br",null),/*#__PURE__*/_react["default"].createElement("br",null));}));}}]);return RoundInfo;}(_react["default"].Component);exports["default"]=RoundInfo;