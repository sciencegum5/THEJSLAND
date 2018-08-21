//create an arry of adjectives or adverbs
var adjective =[
'attractive',
'bald',
'beautiful',
'chubby',
'clean',
'dazzling',
'drab',
'elegant',
'fancy',
'fit',
'flabby',
'glamorous',
'gorgeous',
'handsome',
'long',
'magnificent',
'muscular',
'plain',
'plump',
'quaint',
'scruffy',
'shapely',
'short',
'skinny',
'stocky',
'ugly',
'unkempt',
'unsightly'
]
//ask 4 name
var name = prompt('enter a first name please');
//generat randumb number
var e = Math.floor(Math.random() * adjective.length);
//let the user know what the outcome is
window.alert(adjective[e] + ' ' + name);