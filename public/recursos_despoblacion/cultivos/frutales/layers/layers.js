var wms_layers = [];


        var lyr_DarkMatternolabels_0 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_Hectreasdefrutales_1 = new ol.format.GeoJSON();
var features_Hectreasdefrutales_1 = format_Hectreasdefrutales_1.readFeatures(json_Hectreasdefrutales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdefrutales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdefrutales_1.addFeatures(features_Hectreasdefrutales_1);
var lyr_Hectreasdefrutales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdefrutales_1, 
                style: style_Hectreasdefrutales_1,
                interactive: true,
    title: 'Hectáreas de frutales<br />\
    <img src="styles/legend/Hectreasdefrutales_1_0.png" /> 0 - 32182<br />\
    <img src="styles/legend/Hectreasdefrutales_1_1.png" /> 32182 - 64365<br />\
    <img src="styles/legend/Hectreasdefrutales_1_2.png" /> 64365 - 96547<br />\
    <img src="styles/legend/Hectreasdefrutales_1_3.png" /> 96547 - 128730<br />\
    <img src="styles/legend/Hectreasdefrutales_1_4.png" /> 128730 - 160912<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdefrutales_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdefrutales_1];
lyr_Hectreasdefrutales_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de frutales': 'Hectáreas de frutales', });
lyr_Hectreasdefrutales_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de frutales': 'Range', });
lyr_Hectreasdefrutales_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de frutales': 'inline label', });
lyr_Hectreasdefrutales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});