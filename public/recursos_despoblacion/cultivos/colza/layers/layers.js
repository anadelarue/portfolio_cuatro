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
var format_Hectreasdecolza_1 = new ol.format.GeoJSON();
var features_Hectreasdecolza_1 = format_Hectreasdecolza_1.readFeatures(json_Hectreasdecolza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdecolza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdecolza_1.addFeatures(features_Hectreasdecolza_1);
var lyr_Hectreasdecolza_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdecolza_1, 
                style: style_Hectreasdecolza_1,
                interactive: true,
    title: 'Hectáreas de colza<br />\
    <img src="styles/legend/Hectreasdecolza_1_0.png" /> 0 - 4040<br />\
    <img src="styles/legend/Hectreasdecolza_1_1.png" /> 4040 - 8081<br />\
    <img src="styles/legend/Hectreasdecolza_1_2.png" /> 8081 - 12121<br />\
    <img src="styles/legend/Hectreasdecolza_1_3.png" /> 12121 - 16162<br />\
    <img src="styles/legend/Hectreasdecolza_1_4.png" /> 16162 - 20202<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdecolza_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdecolza_1];
lyr_Hectreasdecolza_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de colza': 'Hectáreas de colza', });
lyr_Hectreasdecolza_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de colza': 'Range', });
lyr_Hectreasdecolza_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de colza': 'inline label', });
lyr_Hectreasdecolza_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});