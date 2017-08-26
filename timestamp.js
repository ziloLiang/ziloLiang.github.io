/**
 * @file 时间戳处理
 */

var replace = require('replace');

var time = Date.now();

replace({
    regex: /timestamp=(.*)"/g,
    replacement: 'timestamp=' + time + '"',
    paths: ['./index.html'],
    recursive: true,
    silent: true
});
