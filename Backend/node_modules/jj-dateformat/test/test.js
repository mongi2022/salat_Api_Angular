var JJDateformat = require('../index.js');

var now = new Date();
var dateformat = new JJDateformat("yyyy/MM/dd HH:hh:mm a");
var d = dateformat.format(now);
console.log("JJ:", d); //  2019/12/19 13:01:28 PM

var dateformat_ = new JJDateformat("yyyy/MM/dd HH:hh:mm A");
var D_ = dateformat_.format(now);
console.log("JJ:", D_); //  2019/12/19 13:01:28 pm


var D_s = dateformat_.format("1576732710444");
console.log("JJ:", D_s); //  2019/12/19 13:01:18 pm


var D_n = dateformat_.format(1576732710444);
console.log("JJ:", D_n); //  2019/12/19 13:01:18 pm
