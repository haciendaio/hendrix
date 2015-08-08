function savingStrategyConstructor(implementation) {
  return {
    start: implementation
  }
}

module.exports = {

  simple: function(editor) {
    return savingStrategyConstructor(function() {
        setInterval(function(){
          editor.save();
        }, 1000);
      })
  },

  onTextChange: function(editor, $panel) {
    return savingStrategyConstructor(function() {
        $panel.on('input', function(){
          editor.save();
        });
      });
  }
}
