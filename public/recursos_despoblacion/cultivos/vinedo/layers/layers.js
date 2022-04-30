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
var format_Hectreasdeviedo_1 = new ol.format.GeoJSON();
var features_Hectreasdeviedo_1 = format_Hectreasdeviedo_1.readFeatures(json_Hectreasdeviedo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdeviedo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdeviedo_1.addFeatures(features_Hectreasdeviedo_1);
var lyr_Hectreasdeviedo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdeviedo_1, 
                style: style_Hectreasdeviedo_1,
                interactive: true,
    title: 'Hectáreas de viñedo<br />\
    <img src="styles/legend/Hectreasdeviedo_1_0.png" /> 3 - 8555<br />\
    <img src="styles/legend/Hectreasdeviedo_1_1.png" /> 8555 - 21303<br />\
    <img src="styles/legend/Hectreasdeviedo_1_2.png" /> 21303 - 32684<br />\
    <img src="styles/legend/Hectreasdeviedo_1_3.png" /> 32684 - 65084<br />\
    <img src="styles/legend/Hectreasdeviedo_1_4.png" /> 65084 - 468029<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdeviedo_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdeviedo_1];
lyr_Hectreasdeviedo_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de viñedo': 'Hectáreas de viñedo', });
lyr_Hectreasdeviedo_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de viñedo': 'Range', });
lyr_Hectreasdeviedo_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de viñedo': 'inline label', });
lyr_Hectreasdeviedo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});