'use strict';

var CommonExpedition = require('../../../expeditions/tests/e2e/common-expeditions.e2e.tests'),
  defaultMapCoordinates = CommonExpedition.defaultMapCoordinates,
  assertMapCoordinates = CommonExpedition.assertMapCoordinates;

var waterQuality1 = {
  depthOfWaterSampleM: 5,
  waterTemperature: {
    method: 2,
    methodText: 'Analog thermometer',
    units: 2,
    unitsText: 'C',
    results: [11.2, 13.2, 12.7],
    average: '12.37'
  },
  dissolvedOxygen: {
    method: 3,
    methodText: 'Winkler',
    units: 1,
    unitsText: 'mg/L (ppm)',
    results: [23.8, 21.0, 25.3],
    average: '23.37'
  },
  salinity: {
    method: 1,
    methodText: 'Hydrometer',
    units: 1,
    unitsText: 'PPT',
    results: [36.1, 33.6, 30.6],
    average: '33.43'
  },
  pH: {
    method: 2,
    methodText: 'Sensor (read only)',
    units: 1,
    unitsText: 'pH (logscale)',
    results: [44.0, 41.3, 42.7],
    average: '42.67'
  },
  turbidity: {
    method: 1,
    methodText: 'Turbidity tube',
    units: 1,
    unitsText: 'cm',
    results: [55.3, 51.1, 53.8],
    average: '53.4'
  },
  ammonia: {
    method: 2,
    methodText: 'Photometer',
    units: 1,
    unitsText: 'ppm',
    results: [61.4, 63.3, 67.5],
    average: '64.07'
  },
  nitrates: {
    method: 2,
    methodText: 'Photometer',
    units: 1,
    unitsText: 'ppm',
    results: [73.0, 72.6, 73.8],
    average: '73.13'
  },
  others: [{
    other1: {
      label: 'other1',
      method: 'method1',
      units: 'unit1',
      results: [88.5, 86.7, 84.9],
      average: '86.7'
    }
  }]
};

var waterQuality2 = {
  depthOfWaterSampleM: 4,
  waterTemperature: {
    method: 3,
    methodText: 'Sensor*',
    units: 1,
    unitsText: 'F',
    results: [13.5, 16.4, 10.9],
    average: '13.6'
  },
  dissolvedOxygen: {
    method: 1,
    methodText: 'Colormetric ampules',
    units: 2,
    unitsText: '% saturation',
    results: [22.4, 25.1, 24.9],
    average: '24.13'
  },
  salinity: {
    method: 2,
    methodText: 'Refractometer',
    units: 1,
    unitsText: 'PPT',
    results: [31.9, 33.1, 34.5],
    average: '33.17'
  },
  pH: {
    method: 1,
    methodText: 'Test strips',
    units: 1,
    unitsText: 'pH (logscale)',
    results: [41.3, 43.6, 42.0],
    average: '42.3'
  },
  turbidity: {
    method: 1,
    methodText: 'Turbidity tube',
    units: 1,
    unitsText: 'cm',
    results: [50.9, 52.4, 53.1],
    average: '52.13'
  },
  ammonia: {
    method: 1,
    methodText: 'Test strips',
    units: 1,
    unitsText: 'ppm',
    results: [60.3, 64.1, 63.4],
    average: '62.6'
  },
  nitrates: {
    method: 1,
    methodText: 'Test strips',
    units: 1,
    unitsText: 'ppm',
    results: [77.1, 74.4, 70.3],
    average: '73.93'
  },
  others: [{
    other1: {
      label: 'other2',
      method: 'method2',
      units: 'unit2',
      results: [86.2, 83.1, 82.2],
      average: '83.83'
    }
  }]
};

var assertWaterQualitySample = function(sample, index, measurements) {
  expect(sample.element(by.model('sample.depthOfWaterSampleM')).getAttribute('value')).toEqual(measurements.depthOfWaterSampleM.toString());
  assertMapCoordinates('modal-map-sample'+index);
  // Water Temperature
  expect(sample.element(by.name('waterTemperatureMethod')).$('option:checked').getText()).toEqual(measurements.waterTemperature.methodText);
  expect(sample.element(by.name('waterTemperatureUnits')).$('option:checked').getText()).toEqual(measurements.waterTemperature.unitsText);
  expect(sample.element(by.name('waterTemperatureResult1')).getAttribute('value')).toEqual(measurements.waterTemperature.results[0].toString());
  expect(sample.element(by.name('waterTemperatureResult2')).getAttribute('value')).toEqual(measurements.waterTemperature.results[1].toString());
  expect(sample.element(by.name('waterTemperatureResult3')).getAttribute('value')).toEqual(measurements.waterTemperature.results[2].toString());
  expect(sample.element(by.name('waterTemperatureAverage')).getAttribute('value')).toEqual(measurements.waterTemperature.average.toString());

  // Dissolved Oxygen
  expect(sample.element(by.name('dissolvedOxygenMethod')).$('option:checked').getText()).toEqual(measurements.dissolvedOxygen.methodText);
  expect(sample.element(by.name('dissolvedOxygenUnits')).$('option:checked').getText()).toEqual(measurements.dissolvedOxygen.unitsText);
  expect(sample.element(by.name('dissolvedOxygenResult1')).getAttribute('value')).toEqual(measurements.dissolvedOxygen.results[0].toString());
  expect(sample.element(by.name('dissolvedOxygenResult2')).getAttribute('value')).toEqual(measurements.dissolvedOxygen.results[1].toString());
  expect(sample.element(by.name('dissolvedOxygenResult3')).getAttribute('value')).toEqual(measurements.dissolvedOxygen.results[2].toString());
  expect(sample.element(by.name('dissolvedOxygenAverage')).getAttribute('value')).toEqual(measurements.dissolvedOxygen.average.toString());

  // Salinity
  expect(sample.element(by.name('salinityMethod')).$('option:checked').getText()).toEqual(measurements.salinity.methodText);
  expect(sample.element(by.name('salinityUnits')).$('option:checked').getText()).toEqual(measurements.salinity.unitsText);
  expect(sample.element(by.name('salinityResult1')).getAttribute('value')).toEqual(measurements.salinity.results[0].toString());
  expect(sample.element(by.name('salinityResult2')).getAttribute('value')).toEqual(measurements.salinity.results[1].toString());
  expect(sample.element(by.name('salinityResult3')).getAttribute('value')).toEqual(measurements.salinity.results[2].toString());
  expect(sample.element(by.name('salinityAverage')).getAttribute('value')).toEqual(measurements.salinity.average.toString());

  // pH
  expect(sample.element(by.name('pHmethod')).$('option:checked').getText()).toEqual(measurements.pH.methodText);
  expect(sample.element(by.name('pHunits')).$('option:checked').getText()).toEqual(measurements.pH.unitsText);
  expect(sample.element(by.name('pHresult1')).getAttribute('value')).toEqual(measurements.pH.results[0].toString());
  expect(sample.element(by.name('pHresult2')).getAttribute('value')).toEqual(measurements.pH.results[1].toString());
  expect(sample.element(by.name('pHresult3')).getAttribute('value')).toEqual(measurements.pH.results[2].toString());
  expect(sample.element(by.name('pHaverage')).getAttribute('value')).toEqual(measurements.pH.average.toString());

  // Turbidity
  expect(sample.element(by.name('turbidityMethod')).$('option:checked').getText()).toEqual(measurements.turbidity.methodText);
  expect(sample.element(by.name('turbidityUnits')).$('option:checked').getText()).toEqual(measurements.turbidity.unitsText);
  expect(sample.element(by.name('turbidityResult1')).getAttribute('value')).toEqual(measurements.turbidity.results[0].toString());
  expect(sample.element(by.name('turbidityResult2')).getAttribute('value')).toEqual(measurements.turbidity.results[1].toString());
  expect(sample.element(by.name('turbidityResult3')).getAttribute('value')).toEqual(measurements.turbidity.results[2].toString());
  expect(sample.element(by.name('turbidityAverage')).getAttribute('value')).toEqual(measurements.turbidity.average.toString());

  // Ammonia
  expect(sample.element(by.name('ammoniaMethod')).$('option:checked').getText()).toEqual(measurements.ammonia.methodText);
  expect(sample.element(by.name('ammoniaUnits')).$('option:checked').getText()).toEqual(measurements.ammonia.unitsText);
  expect(sample.element(by.name('ammoniaResult1')).getAttribute('value')).toEqual(measurements.ammonia.results[0].toString());
  expect(sample.element(by.name('ammoniaResult2')).getAttribute('value')).toEqual(measurements.ammonia.results[1].toString());
  expect(sample.element(by.name('ammoniaResult3')).getAttribute('value')).toEqual(measurements.ammonia.results[2].toString());
  expect(sample.element(by.name('ammoniaAverage')).getAttribute('value')).toEqual(measurements.ammonia.average.toString());

  // Nitrates
  expect(sample.element(by.name('nitratesMethod')).$('option:checked').getText()).toEqual(measurements.nitrates.methodText);
  expect(sample.element(by.name('nitratesUnits')).$('option:checked').getText()).toEqual(measurements.nitrates.unitsText);
  expect(sample.element(by.name('nitratesResult1')).getAttribute('value')).toEqual(measurements.nitrates.results[0].toString());
  expect(sample.element(by.name('nitratesResult2')).getAttribute('value')).toEqual(measurements.nitrates.results[1].toString());
  expect(sample.element(by.name('nitratesResult3')).getAttribute('value')).toEqual(measurements.nitrates.results[2].toString());
  expect(sample.element(by.name('nitratesAverage')).getAttribute('value')).toEqual(measurements.nitrates.average.toString());

  // Other
  //var other = sample.element(by.repeater('other in sample.others')).get(0);
  expect(sample.element(by.name('otherLabel')).getAttribute('value')).toEqual(measurements.others[0].other1.label);
  expect(sample.element(by.name('otherMethod')).getAttribute('value')).toEqual(measurements.others[0].other1.method);
  expect(sample.element(by.name('otherUnits')).getAttribute('value')).toEqual(measurements.others[0].other1.units);
  expect(sample.element(by.name('otherResult1')).getAttribute('value')).toEqual(measurements.others[0].other1.results[0].toString());
  expect(sample.element(by.name('otherResult2')).getAttribute('value')).toEqual(measurements.others[0].other1.results[1].toString());
  expect(sample.element(by.name('otherResult3')).getAttribute('value')).toEqual(measurements.others[0].other1.results[2].toString());
  expect(sample.element(by.name('otherAverage')).getAttribute('value')).toEqual(measurements.others[0].other1.average.toString());
};

var assertWaterQuality = function() {
  var samples = element.all(by.repeater('sample in waterQuality.samples'));
  assertWaterQualitySample(samples.get(0), 0, waterQuality1);
  assertWaterQualitySample(samples.get(1), 1, waterQuality2);
};

var fillOutWaterQualitySample = function(sample, index, measurements) {
  sample.element(by.model('sample.depthOfWaterSampleM')).sendKeys(measurements.depthOfWaterSampleM);
  defaultMapCoordinates('modal-map-sample'+index);
  // Water Temperature
  sample.element(by.name('waterTemperatureMethod')).all(by.tagName('option')).get(measurements.waterTemperature.method).click();
  sample.element(by.name('waterTemperatureUnits')).all(by.tagName('option')).get(measurements.waterTemperature.units).click();
  sample.element(by.name('waterTemperatureResult1')).sendKeys(measurements.waterTemperature.results[0]);
  sample.element(by.name('waterTemperatureResult2')).sendKeys(measurements.waterTemperature.results[1]);
  sample.element(by.name('waterTemperatureResult3')).sendKeys(measurements.waterTemperature.results[2]);
  sample.element(by.name('waterTemperatureAverage')).sendKeys();
  sample.element(by.name('waterTemperatureAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.waterTemperature.average);
  });
  // Dissolved Oxygen
  sample.element(by.name('dissolvedOxygenMethod')).all(by.tagName('option')).get(measurements.dissolvedOxygen.method).click();
  sample.element(by.name('dissolvedOxygenUnits')).all(by.tagName('option')).get(measurements.dissolvedOxygen.units).click();
  sample.element(by.name('dissolvedOxygenResult1')).sendKeys(measurements.dissolvedOxygen.results[0]);
  sample.element(by.name('dissolvedOxygenResult2')).sendKeys(measurements.dissolvedOxygen.results[1]);
  sample.element(by.name('dissolvedOxygenResult3')).sendKeys(measurements.dissolvedOxygen.results[2]);
  sample.element(by.name('dissolvedOxygenAverage')).sendKeys();
  sample.element(by.name('dissolvedOxygenAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.dissolvedOxygen.average);
  });
  // Salinity
  sample.element(by.name('salinityMethod')).all(by.tagName('option')).get(measurements.salinity.method).click();
  sample.element(by.name('salinityUnits')).all(by.tagName('option')).get(measurements.salinity.units).click();
  sample.element(by.name('salinityResult1')).sendKeys(measurements.salinity.results[0]);
  sample.element(by.name('salinityResult2')).sendKeys(measurements.salinity.results[1]);
  sample.element(by.name('salinityResult3')).sendKeys(measurements.salinity.results[2]);
  sample.element(by.name('salinityAverage')).sendKeys();
  sample.element(by.name('salinityAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.salinity.average);
  });
  // pH
  sample.element(by.name('pHmethod')).all(by.tagName('option')).get(measurements.pH.method).click();
  sample.element(by.name('pHunits')).all(by.tagName('option')).get(measurements.pH.units).click();
  sample.element(by.name('pHresult1')).sendKeys(measurements.pH.results[0]);
  sample.element(by.name('pHresult2')).sendKeys(measurements.pH.results[1]);
  sample.element(by.name('pHresult3')).sendKeys(measurements.pH.results[2]);
  sample.element(by.name('pHaverage')).sendKeys();
  sample.element(by.name('pHaverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.pH.average);
  });
  // Turbidity
  sample.element(by.name('turbidityMethod')).all(by.tagName('option')).get(measurements.turbidity.method).click();
  sample.element(by.name('turbidityUnits')).all(by.tagName('option')).get(measurements.turbidity.units).click();
  sample.element(by.name('turbidityResult1')).sendKeys(measurements.turbidity.results[0]);
  sample.element(by.name('turbidityResult2')).sendKeys(measurements.turbidity.results[1]);
  sample.element(by.name('turbidityResult3')).sendKeys(measurements.turbidity.results[2]);
  sample.element(by.name('turbidityAverage')).sendKeys();
  sample.element(by.name('turbidityAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.turbidity.average);
  });
  // Ammonia
  sample.element(by.name('ammoniaMethod')).all(by.tagName('option')).get(measurements.ammonia.method).click();
  sample.element(by.name('ammoniaUnits')).all(by.tagName('option')).get(measurements.ammonia.units).click();
  sample.element(by.name('ammoniaResult1')).sendKeys(measurements.ammonia.results[0]);
  sample.element(by.name('ammoniaResult2')).sendKeys(measurements.ammonia.results[1]);
  sample.element(by.name('ammoniaResult3')).sendKeys(measurements.ammonia.results[2]);
  sample.element(by.name('ammoniaAverage')).sendKeys();
  sample.element(by.name('ammoniaAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.ammonia.average);
  });
  // Nitrates
  sample.element(by.name('nitratesMethod')).all(by.tagName('option')).get(measurements.nitrates.method).click();
  sample.element(by.name('nitratesUnits')).all(by.tagName('option')).get(measurements.nitrates.units).click();
  sample.element(by.name('nitratesResult1')).sendKeys(measurements.nitrates.results[0]);
  sample.element(by.name('nitratesResult2')).sendKeys(measurements.nitrates.results[1]);
  sample.element(by.name('nitratesResult3')).sendKeys(measurements.nitrates.results[2]);
  sample.element(by.name('nitratesAverage')).sendKeys();
  sample.element(by.name('nitratesAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.nitrates.average);
  });
  // Other
  //var other = sample.element(by.repeater('other in sample.others')).get(0);
  sample.element(by.name('otherLabel')).sendKeys(measurements.others[0].other1.label);
  sample.element(by.name('otherMethod')).sendKeys(measurements.others[0].other1.method);
  sample.element(by.name('otherUnits')).sendKeys(measurements.others[0].other1.units);
  sample.element(by.name('otherResult1')).sendKeys(measurements.others[0].other1.results[0]);
  sample.element(by.name('otherResult2')).sendKeys(measurements.others[0].other1.results[1]);
  sample.element(by.name('otherResult3')).sendKeys(measurements.others[0].other1.results[2]);
  sample.element(by.name('otherAverage')).sendKeys();
  sample.element(by.name('otherAverage')).getAttribute('value').then(function(value) {
    expect(value).toEqual(measurements.others[0].other1.average);
  });
};

var fillOutWaterQuality = function() {
  // Fill in values
  var samples = element.all(by.repeater('sample in waterQuality.samples'));
  var sample1 = samples.get(0);
  fillOutWaterQualitySample(sample1, 0, waterQuality1);

  element(by.css('a[ng-click="addSampleForm()"]')).click();
  samples = element.all(by.repeater('sample in waterQuality.samples'));
  var sample2 = samples.get(1);
  fillOutWaterQualitySample(sample2, 1, waterQuality2);
};

module.exports = {
  waterQuality1: waterQuality1,
  waterQuality2: waterQuality2,
  assertWaterQualitySample: assertWaterQualitySample,
  assertWaterQuality: assertWaterQuality,
  fillOutWaterQualitySample: fillOutWaterQualitySample,
  fillOutWaterQuality: fillOutWaterQuality
};
