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
var format_Hectreasdealmendros_1 = new ol.format.GeoJSON();
var features_Hectreasdealmendros_1 = format_Hectreasdealmendros_1.readFeatures(json_Hectreasdealmendros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdealmendros_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdealmendros_1.addFeatures(features_Hectreasdealmendros_1);
var lyr_Hectreasdealmendros_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdealmendros_1, 
                style: style_Hectreasdealmendros_1,
                interactive: true,
    title: 'Hectáreas de almendros<br />\
    <img src="styles/legend/Hectreasdealmendros_1_0.png" /> 0 - 37117<br />\
    <img src="styles/legend/Hectreasdealmendros_1_1.png" /> 37117 - 74234<br />\
    <img src="styles/legend/Hectreasdealmendros_1_2.png" /> 74234 - 111352<br />\
    <img src="styles/legend/Hectreasdealmendros_1_3.png" /> 111352 - 148469<br />\
    <img src="styles/legend/Hectreasdealmendros_1_4.png" /> 148469 - 185586<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdealmendros_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdealmendros_1];
lyr_Hectreasdealmendros_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de almendros': 'Hectáreas de almendros', });
lyr_Hectreasdealmendros_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de almendros': 'Range', });
lyr_Hectreasdealmendros_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de almendros': 'inline label', });
lyr_Hectreasdealmendros_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});