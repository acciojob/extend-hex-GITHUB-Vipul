const extendHex = (shortHex) => {
  // write your code here
	let i=shothex.length-3;
	let ans="#";
	let isCapital=false;
	while(i<shortHex.length)
		{
			
			let ascii=shortHex[i].charCodeAt(0);
			if(ascii>=65&&ascii<=90) isCpaital=true;
			ans+=(shortHex[i]+shortHex[i]);
			i++;
		}

	return isCapital?ans.toUpperCase():ans.toLowerCase();
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
