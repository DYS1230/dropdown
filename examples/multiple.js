webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _rcDropdown = __webpack_require__(2);
	
	var _rcDropdown2 = _interopRequireDefault(_rcDropdown);
	
	var _rcMenu = __webpack_require__(33);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	__webpack_require__(54);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    this.selected = [];
	    return {
	      visible: false
	    };
	  },
	
	  onVisibleChange: function onVisibleChange(visible) {
	    this.setState({
	      visible: visible
	    });
	  },
	
	  saveSelected: function saveSelected(_ref) {
	    var selectedKeys = _ref.selectedKeys;
	
	    this.selected = selectedKeys;
	  },
	
	  confirm: function confirm() {
	    console.log(this.selected);
	    this.setState({
	      visible: false
	    });
	  },
	
	  render: function render() {
	    var menu = React.createElement(
	      _rcMenu2['default'],
	      { style: { width: 140 }, multiple: true, onSelect: this.saveSelected, onDeselect: this.saveSelected },
	      React.createElement(
	        _rcMenu2['default'].Item,
	        { key: '1' },
	        'one'
	      ),
	      React.createElement(
	        _rcMenu2['default'].Item,
	        { key: '2' },
	        'two'
	      ),
	      React.createElement(_rcMenu2['default'].Divider, null),
	      React.createElement(
	        _rcMenu2['default'].Item,
	        { disabled: true },
	        React.createElement(
	          'button',
	          {
	            style: {
	              cursor: 'pointer',
	              color: '#000',
	              'pointerEvents': 'visible'
	            },
	            onClick: this.confirm },
	          '确定'
	        )
	      )
	    );
	
	    return React.createElement(
	      _rcDropdown2['default'],
	      { trigger: 'click',
	        onVisibleChange: this.onVisibleChange,
	        visible: this.state.visible,
	        closeOnSelect: false,
	        overlay: menu, animation: 'slide-up' },
	      React.createElement(
	        'button',
	        null,
	        'open'
	      )
	    );
	  }
	});
	
	React.render(React.createElement(
	  'div',
	  { style: { margin: 20 } },
	  React.createElement(Test, null)
	), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=multiple.js.map