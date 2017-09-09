(function(){
    "use strict"
    require(["requirejs.config.js"], function() {
        var allTestFiles = [];
        Object.Keys(window.__karma__.files).forEach(function(file) {
            if(file.match(/(.+).spec\.js/)){
                allTestFiles.push(file);
            }
        }, this);
        require(allTestFiles, window.__karma__.start);
    })
})