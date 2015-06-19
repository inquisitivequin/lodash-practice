var _ = require("./node_modules/lodash/lodash");

// TODO: Erase this if statment before you start
if(_){
 console.log("lodash is defined!");
}

// ************* HELPER **************
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

var arr = ['orange', 'aranciata', 'potato', 'vodka'];

var rando = _.sample(arr);

var con = _.contains(arr, 'orange');

// var eachs = _.forEach(arr, function(n, key) {
// 	console.log(n, key);
// });

var arr2 = ["dr.seuss", "waldorf salad", "shel silverstein", "waldo"];



wheresWaldo = function(arr) {
	//._each if contains "waldo"
	console.log(arr);
	 var wald;
	_(arr).each(function(arr) {
		 if(_.contains(arr, "waldo")){
		 	wald = arr
		 	console.log(wald);
		 };
	});
	console.log(wald);
	return wald;

};

// wheresWaldo(arr2);

assert(wheresWaldo(["walls", "dr.seuss",
	"waldorf salad"]) === "waldorf salad", "waldo");


// console.log(rando);

// console.log(con);
