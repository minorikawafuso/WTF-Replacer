window.addEventListener("load", function() {
  function replaceTextInHTML() {
    var allElements = document.getElementsByTagName("*");
    for (var i = 0; i < allElements.length; i++) {
      var element = allElements[i];
      for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === Node.TEXT_NODE) {
          var text = node.textContent;
          var replacedText = text.replace(/What is happening\?!/g, "WTF is happening?!?!?!?!?!?!");
          if (replacedText !== text) {
            node.textContent = replacedText;
          }
        }
      }
    }
  }

  replaceTextInHTML();

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      replaceTextInHTML();
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});