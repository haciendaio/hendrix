var $ = require("jquery");
var _ = require("underscore");

var hendrix = hendrix || {};

hendrix.editor = function($panel) {
  function save() {
    if (history[history.length - 1] !== $panel.text()) {
      history.push($panel.text());
    }
    console.log(history);
  }

  var history = [];
  save();

  return {
    save: save
  }

}

hendrix.controller = function() {
  var editor = hendrix.editor($(".panel"));

  setInterval(function(){
    editor.save();
  }, 10000);
}

hendrix.controller();
