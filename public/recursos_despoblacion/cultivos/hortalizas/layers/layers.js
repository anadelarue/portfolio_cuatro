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
var format_Hectreasdehortalizas_1 = new ol.format.GeoJSON();
var features_Hectreasdehortalizas_1 = format_Hectreasdehortalizas_1.readFeatures(json_Hectreasdehortalizas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdehortalizas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdehortalizas_1.addFeatures(features_Hectreasdehortalizas_1);
var lyr_Hectreasdehortalizas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdehortalizas_1, 
                style: style_Hectreasdehortalizas_1,
                interactive: true,
    title: 'Hectáreas de hortalizas<br />\
    <img src="styles/legend/Hectreasdehortalizas_1_0.png" /> 30 - 11312<br />\
    <img src="styles/legend/Hectreasdehortalizas_1_1.png" /> 11312 - 22594<br />\
    <img src="styles/legend/Hectreasdehortalizas_1_2.png" /> 22594 - 33877<br />\
    <img src="styles/legend/Hectreasdehortalizas_1_3.png" /> 33877 - 45159<br />\
    <img src="styles/legend/Hectreasdehortalizas_1_4.png" /> 45159 - 56441<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdehortalizas_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdehortalizas_1];
lyr_Hectreasdehortalizas_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de hortalizas': 'Hectáreas de hortalizas', });
lyr_Hectreasdehortalizas_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de hortalizas': 'Range', });
lyr_Hectreasdehortalizas_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de hortalizas': 'inline label', });
lyr_Hectreasdehortalizas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});