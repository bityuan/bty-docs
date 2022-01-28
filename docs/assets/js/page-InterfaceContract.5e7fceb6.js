(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{504:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"interface-contract"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interface-contract"}},[t._v("#")]),t._v(" Interface Contract")]),t._v(" "),r("blockquote",[r("p",[t._v("This article introduces some convention rules for the JSON-RPC interface, as well as the request and return structure formats.")])]),t._v(" "),r("h2",{attrs:{id:"require"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[t._v("#")]),t._v(" Require")]),t._v(" "),r("ul",[r("li",[t._v("All RPC interfaces are HTTP protocols.")]),t._v(" "),r("li",[t._v("All the data transmitted by the message are in JSON format.")]),t._v(" "),r("li",[t._v("The RPC interfaces of this system are all POST method requests.")])]),t._v(" "),r("h2",{attrs:{id:"request-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-format"}},[t._v("#")]),t._v(" Request Format")]),t._v(" "),r("p",[t._v("Request message structure:")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('{\n    "jsonrpc":"2.0",\n    "id":int32,\n    "method":"Chain33.Method",\n    "params":[]\n}\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("If Necessary")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("id")]),t._v(" "),r("td",[t._v("int32")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("interface id temporarily out of use.")])]),t._v(" "),r("tr",[r("td",[t._v("method")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("yes")]),t._v(" "),r("td",[t._v("requested method name of RPC.")])]),t._v(" "),r("tr",[r("td",[t._v("params")]),t._v(" "),r("td",[t._v("array")]),t._v(" "),r("td",[t._v("no")]),t._v(" "),r("td",[t._v("additional parameter, default to null.")])])])]),t._v(" "),r("h2",{attrs:{id:"response-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#response-format"}},[t._v("#")]),t._v(" Response Format")]),t._v(" "),r("p",[t._v("Response message structure:")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('{\n    "id":int32,\n    "result":{},\n    "error":null\n}\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("id")]),t._v(" "),r("td",[t._v("int32")]),t._v(" "),r("td",[t._v("correspond to the request id.")])]),t._v(" "),r("tr",[r("td",[t._v("result")]),t._v(" "),r("td",[t._v("returned data ,different format returned by different methods,pure string or data in json format.")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("error")]),t._v(" "),r("td",[t._v("string")]),t._v(" "),r("td",[t._v("fill in error information on error, empty when there is no error.")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);