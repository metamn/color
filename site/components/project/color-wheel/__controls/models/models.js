var colorModelChange = function(colorModelSelectorID) {
  var colorModelSelector = document.querySelector(colorModelSelectorID);

  colorModelSelector.addEventListener('change', click, false);

  function click() {
    // Remove existing wheels
    var wheelsContainer = document.querySelector('.color-wheel__wheels');
    wheelsContainer.innerHTML = '';

    // Draw new wheel
    colorWheel('.color-wheel');

    // Add click event to the new wheels
    for (var i = 0; i < wheels.length; i++) {
      clickOnColorSlice('.color-wheel .wheel .svg .slice');
    }
  }
}


colorModelChange('.color-wheel__controls .color-model');
