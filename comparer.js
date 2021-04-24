let html1 = 
`<!DOCTYPE html> 
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<h2> Hello2 </h2>
	<h1>Hello</h1>
	<div><h3>hello</h3></div>
	<script src="index.js"></script>
</body>
</html>`;

let html2 = 
`<!DOCTYPE html> 
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body style="font-size:32px;">
	<h1 style="font-size: 40px;">Hello</h1>
	<div><h3 style="font-size: 39px;">hello2</h3></div>
	<script src="index.js"></script>
</body>
</html>`;


function getTextFromNode(node){
	if (!node.childNodes[0] 
		|| node.childNodes[0].nodeName !== "#text")
		return "";
	return node.childNodes[0].nodeValue;
}


function compareContentNodes(node1, node2){
	let changes = {
		"nodes": [node1, node2]
	};
	BLACKLIST_PROPERTIES = ['__proto__'];

	let node1Text = getTextFromNode(node1);
	let node2Text = getTextFromNode(node2);
	// Text content
	if (node1Text != node2Text)
		changes['textContent'] = [node1Text, node2Text];

	// Styles
	for (const key of Object.keys(node1.style)){
		if (key in BLACKLIST_PROPERTIES)
			continue;

		if (node1.style[key] != node2.style[key]){
			if (!('styles' in changes))
				changes['styles'] = [{}, {}];
			changes['styles'][0][key] = node1.style[key];
			changes['styles'][1][key] = node2.style[key];
		}
	}

	return changes;
}

function isMatchingPair(node1, node2){
	return node1.tagName === node2.tagName;
}

function compareNodeChilds(node1, node2){
	let pairsMatchedOfNode2 = new Set();
	let pairsToCompare = [];
	let changes = {"newElements": []};

	for(const childNode1 of node1.children){
		let matchingPair = null;

		for(const childNode2 of node2.children){
			if (childNode2 in pairsMatchedOfNode2)
				continue;

			if (isMatchingPair(childNode1, childNode2)){
				matchingPair = childNode2;
				pairsMatchedOfNode2.add(childNode2);
				break;
			}
		}

		if (matchingPair){
			pairsToCompare.push([childNode1, matchingPair]);
		} else {
			changes["newElements"].push([childNode1, null]);
		}
	}

	for (const childNode2 of node2.children){
		if (pairsMatchedOfNode2.has(childNode2))
			continue;
		changes["newElements"].push([null, childNode2]);
	}

	return {
		"pairsToCompare": pairsToCompare,
		"newElements": changes["newElements"]
	};
}


function getDOMObject(htmlContent){
	let parser = new DOMParser();
	return parser.parseFromString(htmlContent, "text/html");
}


function getDifferences(node1, node2, differences){
	let contentChanges = compareContentNodes(node1, node2);
	let childChanges = compareNodeChilds(node1, node2);
	let pairsToCompare = childChanges['pairsToCompare'];
	let newElems = childChanges['newElements'];

	if (Object.keys(contentChanges).length > 1){
		differences.push(contentChanges);
	}

	if (newElems.length > 0)
		differences.push({'newElems': newElems});

	for(const pair of pairsToCompare)
		getDifferences(pair[0], pair[1], differences);
}


function comparePages(html1, html2){
	let result = [];
	let html1DOM = getDOMObject(html1);
	let html2DOM = getDOMObject(html2);
	getDifferences(html1DOM.body, html2DOM.body, result);

	return result;
}

console.log(comparePages(html1, html2));
