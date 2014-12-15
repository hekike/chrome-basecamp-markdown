var $ = require('jquery');
var marked = require('marked');
var highlightsJS = require('highlight.js');

marked.setOptions({
  highlight: function (code) {
    return highlightsJS.highlightAuto(code).value;
  }
});

var link = document.createElement('link');
link.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.4/styles/default.min.css';
link.type = 'text/css';
link.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(link);

function format () {
  $('.formatted_content').each(function () {
    var contentElement = $(this);
    var text = contentElement.html();
    var name;
    var markdown;

    text = text.replace(/&nbsp;/g, '  ');
    text = text.split('<br>');

    // Remove name
    name = text.shift();

    text = text.join('  \n').trim();

    markdown = marked(text);
    contentElement.html(name + markdown);
  });
}

$(document)
  .ready(format);
