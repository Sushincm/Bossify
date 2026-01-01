// Price range (0 to 100000)
const slider = document.getElementById('bossifyPriceSlider');
const minOut = document.getElementById('bossifyMinPrice');
const maxOut = document.getElementById('bossifyMaxPrice');

noUiSlider.create(slider, {
  start: [0, 100000],
  connect: true,
  step: 500,
  range: {
    min: 0,
    max: 100000
  }
});

slider.noUiSlider.on('update', (values) => {
  const minVal = Math.round(values[0]);
  const maxVal = Math.round(values[1]);
  minOut.textContent = minVal;
  maxOut.textContent = maxVal;
});
