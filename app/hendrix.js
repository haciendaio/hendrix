var $ = require("jquery");
var _ = require("underscore");

var hendrix = hendrix || {};

hendrix.editor = function($panel) {
  function save() {
    var textToBeSaved = $panel.text();
    if (_.last(history) !== textToBeSaved) {
      history.push(textToBeSaved);
    }
    console.log(history);
  }

  function undo() {
    var currentText = $panel.text();
    if (_.last(history) === currentText) {
      history.pop();
    }
    $panel.text(history.pop())
  }

  var history = [];
  save();

  return {
    save: save,
    undo: undo
  }

}

hendrix.simpleSavingStrategy = function(editor) {
  return {
    start: function() {
      setInterval(function(){
        editor.save();
      }, 5000);
    }
  }
}

hendrix.controller = function() {
  var editor = hendrix.editor($(".panel"));
  var $undoButton = $("#undo");

  $undoButton.click(function(){
    editor.undo();
  });

  hendrix.simpleSavingStrategy(editor).start();
}

hendrix.controller();
