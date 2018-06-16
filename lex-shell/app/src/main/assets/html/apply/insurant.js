!function(e){var t={};function i(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}({6:function(e,t,i){"use strict";var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}();var l=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={orderId:common.param("orderId"),genderDict:{M:"男",F:"女"},nationDict:{},marriageDict:{},certTypeDict:{},relationDict:{"00":"本人","01":"夫妻"},index:0,mode:0,cust:[{}]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),a(t,[{key:"componentDidMount",value:function(){var e=this;MF.setTitle("被保险人"),APP.dict("cert,marriage,relation",function(t){e.setState({nationDict:t.nation,certTypeDict:t.cert,relationDict:t.relation,marriageDict:t.marriage})}),APP.apply.view(this.state.orderId,function(t){var i=t.detail?t.detail.insurants:null;e.setState({cust:i||[{}]})})}},{key:"save",value:function(){var e=this,t=this.state.cust[this.state.index];1==this.state.mode?(t.name=this.refs.name.value,t.certNo=this.refs.certNo.value,t.mode1=!0):2==this.state.mode?t.mode2=!0:3==this.state.mode?t.mode3=!0:4==this.state.mode&&(t.mode4=!0),this.state.cust[this.state.index]=t,APP.apply.save({id:this.state.orderId,detail:{insurants:this.state.cust}},function(t){e.setState({mode:0,cust:e.state.cust})})}},{key:"next",value:function(){this.save(),MF.navi("apply/plan.html?orderId="+this.state.orderId)}},{key:"newInsurant",value:function(){this.state.cust.push({}),this.setState({cust:this.state.cust})}},{key:"onInsurantSwitch",value:function(e){this.setState({mode:0,index:e})}},{key:"onValChange",value:function(e,t){this.state.cust[this.state.index][e]=t,this.setState({cust:this.state.cust})}},{key:"render",value:function(){var e=this,t=this.state.cust[this.state.index];return React.createElement("div",null,React.createElement("div",{style:{display:"flex",position:"fixed",zIndex:"50",top:"0",backgroundColor:"#e6e6e6"}},this.state.cust.map(function(t,i){return React.createElement("div",{className:"tab "+(i==e.state.index?"tab-focus":"tab-blur"),key:i,style:{width:"250px"},onClick:e.onInsurantSwitch.bind(e,i)},React.createElement("text",{className:"text18"},null==t.name||""==t.name?"被保险人"+(i+1):t.name))}),this.state.cust.length>=3?null:React.createElement("div",{style:{width:750-250*this.state.cust.length+"px",height:"80px",textAlign:"right"},onClick:this.newInsurant.bind(this)},React.createElement("img",{style:{width:"60px",height:"60px",margin:"10px",opacity:"0.7"},src:"../images/file-add.png"}))),React.createElement("div",{style:{height:"80px"}}),React.createElement("div",{className:"div bg-white",style:{height:"100px",textAlign:"center"},onClick:function(t){e.setState({mode:1})}},React.createElement("div",{className:"divx text18",style:{height:"60px",margin:"25px auto 0 auto",verticalAlign:"middle",lineHeight:"50px"}},React.createElement("img",{style:{width:"50px",height:"50px",marginRight:"20px"},src:"../images/add.png"}),"基本信息")),1!=this.state.mode?null:React.createElement("div",{className:"div bg-white"},React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"投保人姓名"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("input",{ref:"name",defaultValue:t.name,placeholder:"请输入投保人姓名"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"性别"),React.createElement("div",{style:{width:"370px",height:"60px"},onClick:function(t){APP.pick("select",e.state.genderDict,e.onValChange.bind(e,"gender"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.gender?"请选择性别":this.state.genderDict[t.gender])),React.createElement("img",{style:{width:"27px",height:"39px",marginTop:"10px"},src:"../images/right.png"})),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"国籍"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("select",e.state.nationDict,e.onValChange.bind(e,"nation"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.nation?"请选择国籍":t.nation))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"出生日期"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("date",{begin:"1900-01-01",end:new Date},e.onValChange.bind(e,"birthday"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.birthday?"请选择出生日期":t.birthday))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"婚姻状况"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("select",e.state.marriageDict,e.onValChange.bind(e,"marriage"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.marriage?"请选择婚姻状况":this.state.marriageDict[t.marriage]))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"证件类型"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("select",e.state.certTypeDict,e.onValChange.bind(e,"certType"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.certType?"请选择证件类型":this.state.certTypeDict[t.certType]))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"证件号码"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("input",{ref:"certNo",defaultValue:t.certNo,placeholder:"请输入证件号码"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"证件有效期"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("date",{begin:new Date},e.onValChange.bind(e,"certValidDate"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.certValidDate?"请选择证件有效期":t.certValidDate))),React.createElement("div",{className:"divx text16",style:{height:"80px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"700px",height:"65px",textAlign:"right"}},React.createElement("img",{style:{width:"100px",height:"50px",marginTop:"15px"},src:"../images/finish.png",onClick:this.save.bind(this)})))),React.createElement("div",{className:"div bg-white",style:{height:"100px",marginTop:"20px",textAlign:"center"},onClick:function(t){e.setState({mode:2})}},React.createElement("div",{className:"divx text18",style:{height:"60px",margin:"25px auto 0 auto",verticalAlign:"middle",lineHeight:"50px"}},React.createElement("img",{style:{width:"50px",height:"50px",marginRight:"20px"},src:"../images/add.png"}),"职业信息")),2!=this.state.mode?null:React.createElement("div",{className:"div bg-white"},React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"工作单位"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("input",{ref:"company",defaultValue:t.name,placeholder:"请输入工作单位"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"职务"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"workJob",defaultValue:t.name,placeholder:"请输入职务"})),React.createElement("img",{style:{width:"27px",height:"39px",marginTop:"10px"},src:"../images/right.png"})),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"职业大类"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("select",e.state.occupationDict1,e.onValChange.bind(e,"occupation1"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.occupation1?"请选择职业大类":t.occupation1))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"职业小类"),React.createElement("div",{style:{width:"410px",height:"60px"},onClick:function(t){APP.pick("select",e.state.occupationDict2,e.onValChange.bind(e,"occupation"))}},React.createElement("div",{className:"tc-gray text16 ml-1"},null==t.occupation?"请选择职业小类":t.occupation))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"职业代码"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("div",{className:"tc-gray text16 ml-1"},t.occupation))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"职业类别"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("div",{className:"tc-gray text16 ml-1"},t.occupationLevel))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"年收入（万元）"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("input",{ref:"income",defaultValue:t.income,placeholder:"请输入年收入"}))),React.createElement("div",{className:"divx text16",style:{height:"80px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"700px",height:"65px",textAlign:"right"}},React.createElement("img",{style:{width:"100px",height:"50px",marginTop:"15px"},src:"../images/finish.png",onClick:this.save.bind(this)})))),React.createElement("div",{className:"div bg-white",style:{height:"100px",marginTop:"20px",textAlign:"center"},onClick:function(t){e.setState({mode:3})}},React.createElement("div",{className:"divx text18",style:{height:"60px",margin:"25px auto 0 auto",verticalAlign:"middle",lineHeight:"50px"}},React.createElement("img",{style:{width:"50px",height:"50px",marginRight:"20px"},src:"../images/add.png"}),"联系方式")),3!=this.state.mode?null:React.createElement("div",{className:"div bg-white"},React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"联系地址"),React.createElement("div",{style:{width:"410px",height:"60px"}},React.createElement("input",{ref:"address",defaultValue:t.name,placeholder:"请输入联系地址"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"乡镇（街道）"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"address1",defaultValue:t.name,placeholder:"请输入乡镇（街道）"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"村（社区）"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"address2",defaultValue:t.name,placeholder:"请输入村（社区）"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"邮政编码"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"zipcode",defaultValue:t.name,placeholder:"请输入邮政编码"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"670px",height:"60px"}},"联系方式（手机或者电话二者选其一）")),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"电话"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"telephone",defaultValue:t.name,placeholder:"请输入电话 例：000-12345678"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"手机"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"mobile",defaultValue:t.name,placeholder:"请输入手机"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"电子邮箱"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"email",defaultValue:t.name,placeholder:"请输入电子邮箱"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"QQ号码"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"qq",defaultValue:t.name,placeholder:"请输入QQ号码"}))),React.createElement("div",{className:"divx text16",style:{padding:"10px 20px 10px 20px",height:"80px",lineHeight:"60px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"微信号码"),React.createElement("div",{style:{width:"370px",height:"60px"}},React.createElement("input",{ref:"wechat",defaultValue:t.name,placeholder:"请输入微信号码"}))),React.createElement("div",{className:"divx text16",style:{height:"80px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"700px",height:"65px",textAlign:"right"}},React.createElement("img",{style:{width:"100px",height:"50px",marginTop:"15px"},src:"../images/finish.png",onClick:this.save.bind(this)})))),React.createElement("div",{className:"div bg-white",style:{height:"100px",marginTop:"20px",textAlign:"center"},onClick:function(t){e.setState({mode:4})}},React.createElement("div",{className:"divx text18",style:{height:"60px",margin:"25px auto 0 auto",verticalAlign:"middle",lineHeight:"50px"}},React.createElement("img",{style:{width:"50px",height:"50px",marginRight:"20px"},src:"../images/add.png"}),"其他信息")),4!=this.state.mode?null:React.createElement("div",{className:"div bg-white"},React.createElement("div",{className:"divx text16",style:{height:"80px",borderTop:"#e6e6e6 solid 1px"}},React.createElement("div",{style:{width:"700px",height:"65px",textAlign:"right"}},React.createElement("img",{style:{width:"100px",height:"50px",marginTop:"15px"},src:"../images/finish.png",onClick:this.save.bind(this)})))),React.createElement("div",{className:"divx text16 tc-white bg-primary",style:{height:"100px",padding:"20px",lineHeight:"60px",marginTop:"20px"}},React.createElement("div",{style:{width:"300px",height:"60px"}},"与同投保人关系"),React.createElement("div",{style:{width:"370px",height:"60px",textAlign:"right"},onClick:function(t){APP.pick("select",e.state.relationDict,e.onValChange.bind(e,"relation"))}},React.createElement("div",{className:"mr-2"},this.state.relationDict[t.relation])),React.createElement("img",{style:{width:"27px",height:"39px",marginTop:"10px"},src:"../images/white-arrow-right.png"})),React.createElement("div",{style:{height:"120px"}}),React.createElement("div",{className:"bottom text18 tc-primary"},React.createElement("div",{style:{paddingLeft:"30px",width:"600px"}}),React.createElement("div",{style:{textAlign:"right",paddingRight:"30px",width:"150px"},onClick:this.next.bind(this)},"下一步")))}}]),t}();$(document).ready(function(){ReactDOM.render(React.createElement(l,null),document.getElementById("root"))})}});