var startItem = document.getElementById('two');
var prevItem = getPreviosElement(startItem) 
var nextItem = startItem.nextSibling;


// var startItem = document.getElementsByTagName('ul')[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;
console.log(prevItem)

prevItem.className = 'complete';
nextItem.className = 'cool';


function getPreviosElement(item) {
    while(!(item instanceof Element)){
      item = item.previousSibling
    }
    return item
}