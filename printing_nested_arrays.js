const printItems = function (array) {
	for (let item of array) {
		if (Array.isArray(item)) {
			printItems(item);
			/**
       for (let i of item) {
           console.log(i);
         }
         Not the best Idea
       */
		} else {
			console.log(item);
		}
	}
};

const array = ["A", ["B", "C"], "D", "E"];
// const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array); //both the same output
