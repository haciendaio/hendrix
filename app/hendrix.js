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

hendrix.onChangeSavingStrategy = function(editor, $panel) {
  return {
    start: function() {
      $panel.on('input', function(){
        editor.save();
      });
    }
  }
}

hendrix.controller = function() {
  var $panel = $(".panel");
  var $undoButton = $("#undo");

  var editor = hendrix.editor($panel);

  $undoButton.click(function(){
    editor.undo();
  });

  hendrix.onChangeSavingStrategy(editor, $panel).start();
}

hendrix.controller();
