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
var format_Hectreasdepistacho_1 = new ol.format.GeoJSON();
var features_Hectreasdepistacho_1 = format_Hectreasdepistacho_1.readFeatures(json_Hectreasdepistacho_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdepistacho_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdepistacho_1.addFeatures(features_Hectreasdepistacho_1);
var lyr_Hectreasdepistacho_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdepistacho_1, 
                style: style_Hectreasdepistacho_1,
                interactive: true,
    title: 'Hectáreas de pistacho<br />\
    <img src="styles/legend/Hectreasdepistacho_1_0.png" /> 0 - 4984<br />\
    <img src="styles/legend/Hectreasdepistacho_1_1.png" /> 4984 - 9968<br />\
    <img src="styles/legend/Hectreasdepistacho_1_2.png" /> 9968 - 14951<br />\
    <img src="styles/legend/Hectreasdepistacho_1_3.png" /> 14951 - 19935<br />\
    <img src="styles/legend/Hectreasdepistacho_1_4.png" /> 19935 - 24919<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdepistacho_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdepistacho_1];
lyr_Hectreasdepistacho_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de pistacho': 'Hectáreas de pistacho', });
lyr_Hectreasdepistacho_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de pistacho': 'Range', });
lyr_Hectreasdepistacho_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de pistacho': 'inline label', });
lyr_Hectreasdepistacho_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});