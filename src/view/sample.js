//const http = require('http');

//const hostname = 'localhost';
//const port = 3000;

/**const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
//install requestify http query xmldom xpath
var requestify = require('requestify');
var xpath = require('xpath');
var DOMParser = require('xmldom').DOMParser;
var sinahttps = "https://bd-hq.sinajs.cn/list=sz002709,sh600192,sh600834,sz000063";
requestify.get(sinahttps, {
	headers: {
		"Accept-Language": "zh-CN"
	}
}).then(function(response) {
	// Get the response body
	var s = response.getBody();
	eval(s);
	console.log(hq_str_sz002709.split(",")[3]);
	console.log(hq_str_sh600192.split(",")[3]);
	console.log(hq_str_sh600834.split(",")[3]);
	console.log(hq_str_sz000063.split(",")[3]);
	// console.log(s);

	/**var bodyStr = s.substring(s.indexOf("<body>"), s.indexOf("</body>") + 7);
	var parser = new DOMParser();
	var bodyDom = parser.parseFromString(bodyStr);
	console.log(bodyDom);
	
	var nodes = xpath.select("//tbody/tr", bodyDom);
	console.log(nodes.toString());
	console.log("Node: " + nodes[0].firstChild.data);
	*/


});



