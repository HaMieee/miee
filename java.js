// HTML
// 1. Element : ID (select qua id) , class(select qua class) , tag name(seelct qua ten the) , css selector (seelct query)
// 2 . Attribute 
// 3 . Text

// 1. get ElementById
// 2. get ElementsByClassName
// 3. get ElementsByTagName
// 4. querySelector
// 5 . querySelectorAll
// 6. HTML collection
// 7. document .write


var headingNode = document.getElementById('heading')
console.log ({
    Element: headingNode
});

var heading1 = document.getElementsByClassName('heading2')
console.log(heading1)

var heading2 = document.getElementsByTagName('h1')
console.log(heading2[0])


var heading3 = document.querySelector('.box.headingg')

// console.log(heading3[0])

var listitemnode = document.querySelectorAll('.box-1 li');
console.log(listitemnode)


var boxnode = document.querySelector('.box-2');
console.log(boxnode.getElementsByTagName('li'));
console.log(boxnode.querySelector('p'));

