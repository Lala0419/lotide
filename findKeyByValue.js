// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");

// TEST CODE
const bestTVShowsByGenre = {
	sci_fi: "The Expanse",
	comedy: "Brooklyn Nine-Nine",
	drama: "The Wire",
};

const findKeyByValue = function (obj, value) {
	//const ganre = Object.keys(obj) //--> You cannot assin to a variable. It will return ganre[item] = undefined
	for (let key of Object.keys(obj)) {
		//console.log('item', item)
		//console.log('obj', obj)
		//console.log('obj[item]', obj[item]) //?? doesnt this obj[item] needs to be obj['item']?? ---> A(?) It is because item is a reference from the for og loop and it is already a string..?
		if (obj[key] === value) {
			return key;
		}
	}
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//gpt https://chat.openai.com/chat/6c0b3901-7b6d-4d45-bcd0-00d2b865c94a

// Thought
//Didn't know I cannot assign object.keys(obj) to a variable. obj at obj[item], I wasn't sure. [item] at obj[item], couldnt figure out why there can be no '' around item but it made sence since it is a reference and it is already quoted at the for of loop. ['aaa','bbb','ccc']

module.exports = findKeyByValue;
