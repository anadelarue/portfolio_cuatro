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
var format_Hectrasdefrutosrojos_1 = new ol.format.GeoJSON();
var features_Hectrasdefrutosrojos_1 = format_Hectrasdefrutosrojos_1.readFeatures(json_Hectrasdefrutosrojos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectrasdefrutosrojos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectrasdefrutosrojos_1.addFeatures(features_Hectrasdefrutosrojos_1);
var lyr_Hectrasdefrutosrojos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectrasdefrutosrojos_1, 
                style: style_Hectrasdefrutosrojos_1,
                interactive: true,
    title: 'Hectáras de frutos rojos<br />\
    <img src="styles/legend/Hectrasdefrutosrojos_1_0.png" /> 0 - 2714<br />\
    <img src="styles/legend/Hectrasdefrutosrojos_1_1.png" /> 2714 - 5427<br />\
    <img src="styles/legend/Hectrasdefrutosrojos_1_2.png" /> 5427 - 8141<br />\
    <img src="styles/legend/Hectrasdefrutosrojos_1_3.png" /> 8141 - 10854<br />\
    <img src="styles/legend/Hectrasdefrutosrojos_1_4.png" /> 10854 - 13568<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectrasdefrutosrojos_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectrasdefrutosrojos_1];
lyr_Hectrasdefrutosrojos_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de frutos rojos': 'Hectáreas de frutos rojos', });
lyr_Hectrasdefrutosrojos_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de frutos rojos': 'Range', });
lyr_Hectrasdefrutosrojos_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de frutos rojos': 'inline label', });
lyr_Hectrasdefrutosrojos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});