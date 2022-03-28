/* globals showdown */

let map = L.map('map').setView([39.95303901388685, -75.16341794003617], 13);
let layerGroup = L.layerGroup().addTo(map);
let fatalcollection = { features: [] };
var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
 subdomains: 'abcd',
 maxZoom: 20
}).addTo(map);

/*L.geoJSON(fatalincidents, {
    style: myStyle
}).addTo(map);*/



let currentSlideIndex = 0;

const slideTitleDiv = document.querySelector('.slide-controls');
const slideCountryDiv = document.querySelector('.slide-Country-json');
const slideFromDiv = document.querySelector('.slide-from');
const slideToDiv = document.querySelector('.slide-to');
const slideFlightDiv = document.querySelector('.slide-flght-json');
const slideTimeDiv = document.querySelector('.slide-time-json');
const slideCasualtyDiv = document.querySelector('.slide-casualty-json');
const slidePlanetypeDiv = document.querySelector('.slide-planetype-json');
const slideimgDiv = document.querySelector('.slide-img');
const slideSummaryDiv = document.querySelector('.slide-summary');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');
const slideJumpSelect = document.querySelector('#jump-to-slide');


function updateMap(incidents) {
  layerGroup.clearLayers();
  const geoJsonLayer = L.geoJSON(incidents, { style: myStyle })
    .bindTooltip(l => l.features.properties.Flight)
    .addTo(layerGroup);

  return geoJsonLayer;
}



function getIncidents(fatal) {
  return {
    type: 'FeatureCollection',
    features: fatalcollection.features.filter(f => f.FatalSurvival === fatal),
  };
}


/*
function updateMap(collection) {
  layerGroup.clearLayers();
  const geoJsonLayer = L.geoJSON(collection, { pointToLayer: (p, latlng) => L.marker(latlng) })
    .bindTooltip(l => l.feature.properties.label)
    .addTo(layerGroup);

  return geoJsonLayer;
}

function makeEraCollection(era) {
  return {
    type: 'FeatureCollection',
    features: lifeCollection.features.filter(f => f.properties.era === era),
  };
}

function showSlide(slide) {
  const converter = new showdown.Converter({ smartIndentationFix: true });

  slideTitleDiv.innerHTML = `<h2>${slide.title}</h2>`;
  slideContentDiv.innerHTML = converter.makeHtml(slide.content);

  const collection = slide.era ? makeEraCollection(slide.era) : lifeCollection;
  const layer = updateMap(collection);

  function handleFlyEnd() {
    if (slide.showpopups) {
      layer.eachLayer(l => {
        l.bindTooltip(l.feature.properties.label, { permanent: true });
        l.openTooltip();
      });
    }
    map.removeEventListener('moveend', handleFlyEnd);
  }

  map.addEventListener('moveend', handleFlyEnd);
  if (slide.bounds) {
    map.flyToBounds(slide.bounds);
  } else if (slide.era) {
    map.flyToBounds(layer.getBounds());
  }
}

function showCurrentSlide() {
  const slide = slides[currentSlideIndex];
  showSlide(slide);
}

function goNextSlide() {
  currentSlideIndex++;

  if (currentSlideIndex === slides.length) {
    currentSlideIndex = 0;
  }

  showCurrentSlide();
}

function goPrevSlide() {
  currentSlideIndex--;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  showCurrentSlide();
}

function jumpToSlide() {
  currentSlideIndex = parseInt(slideJumpSelect.value, 10);
  showCurrentSlide();
}

function initSlideSelect() {
  slideJumpSelect.innerHTML = '';
  for (const [index, slide] of slides.entries()) {
    const option = document.createElement('option');
    option.value = index;
    option.innerHTML = slide.title;
    slideJumpSelect.appendChild(option);
  }
}

function loadLifeData() {
  fetch('data/journey.json')
    .then(resp => resp.json())
    .then(data => {
      lifeCollection = data;
      showCurrentSlide();
    });
}

slidePrevButton.addEventListener('click', goPrevSlide);
slideNextButton.addEventListener('click', goNextSlide);
slideJumpSelect.addEventListener('click', jumpToSlide);

initSlideSelect();
showCurrentSlide();
loadLifeData();*/
