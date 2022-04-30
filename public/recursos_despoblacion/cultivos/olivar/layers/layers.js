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
var format_Hectreasdeolivar_1 = new ol.format.GeoJSON();
var features_Hectreasdeolivar_1 = format_Hectreasdeolivar_1.readFeatures(json_Hectreasdeolivar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hectreasdeolivar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hectreasdeolivar_1.addFeatures(features_Hectreasdeolivar_1);
var lyr_Hectreasdeolivar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hectreasdeolivar_1, 
                style: style_Hectreasdeolivar_1,
                interactive: true,
    title: 'Hectáreas de olivar<br />\
    <img src="styles/legend/Hectreasdeolivar_1_0.png" /> 0 - 206561<br />\
    <img src="styles/legend/Hectreasdeolivar_1_1.png" /> 206561 - 413122<br />\
    <img src="styles/legend/Hectreasdeolivar_1_2.png" /> 413122 - 619683<br />\
    <img src="styles/legend/Hectreasdeolivar_1_3.png" /> 619683 - 826245<br />\
    <img src="styles/legend/Hectreasdeolivar_1_4.png" /> 826245 - 1032806<br />\
    <img src="styles/legend/Hectreasdeolivar_1_5.png" /> 1032806 - 1239367<br />\
    <img src="styles/legend/Hectreasdeolivar_1_6.png" /> 1239367 - 1445928<br />\
    <img src="styles/legend/Hectreasdeolivar_1_7.png" /> 1445928 - 1652489<br />'
        });

lyr_DarkMatternolabels_0.setVisible(true);lyr_Hectreasdeolivar_1.setVisible(true);
var layersList = [lyr_DarkMatternolabels_0,lyr_Hectreasdeolivar_1];
lyr_Hectreasdeolivar_1.set('fieldAliases', {'Comunidad autónoma': 'Comunidad autónoma', 'Hectáreas de olivar': 'Hectáreas de olivar', });
lyr_Hectreasdeolivar_1.set('fieldImages', {'Comunidad autónoma': 'TextEdit', 'Hectáreas de olivar': 'Range', });
lyr_Hectreasdeolivar_1.set('fieldLabels', {'Comunidad autónoma': 'inline label', 'Hectáreas de olivar': 'inline label', });
lyr_Hectreasdeolivar_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});