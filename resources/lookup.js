(function(window, undefined) {
  var dictionary = {
    "wiefunktioniertes": "Fold5",
    "unterstutzen": "Fold4",
    "vorteile": "Fold2v1",
    "exportfinanzierung": "Fold1v2",
    "templateone": "960 grid - 16 columns",
    "templatethree": "960 grid - 12 columns",
    "templatetwo": "Template 1",
    "scenarioone": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);