var wms_layers = [];

var format_Matdodanso_binhphuoc_0 = new ol.format.GeoJSON();
var features_Matdodanso_binhphuoc_0 = format_Matdodanso_binhphuoc_0.readFeatures(json_Matdodanso_binhphuoc_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matdodanso_binhphuoc_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matdodanso_binhphuoc_0.addFeatures(features_Matdodanso_binhphuoc_0);
var lyr_Matdodanso_binhphuoc_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Matdodanso_binhphuoc_0, 
                style: style_Matdodanso_binhphuoc_0,
                interactive: true,
    title: 'Matdodanso_binhphuoc<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_0.png" /> 29 - 83<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_1.png" /> 83 - 101<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_2.png" /> 101 - 136<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_3.png" /> 136 - 192<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_4.png" /> 192 - 683<br />'
        });

lyr_Matdodanso_binhphuoc_0.setVisible(true);
var layersList = [lyr_Matdodanso_binhphuoc_0];
lyr_Matdodanso_binhphuoc_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'DANSO': 'DANSO', 'TEN HUYEN': 'TEN HUYEN', 'MATDODANSO': 'MATDODANSO', 'DIENTICH': 'DIENTICH', 'DT': 'DT', });
lyr_Matdodanso_binhphuoc_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'DANSO': 'TextEdit', 'TEN HUYEN': 'TextEdit', 'MATDODANSO': 'TextEdit', 'DIENTICH': 'TextEdit', 'DT': 'TextEdit', });
lyr_Matdodanso_binhphuoc_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'DANSO': 'no label', 'TEN HUYEN': 'no label', 'MATDODANSO': 'no label', 'DIENTICH': 'no label', 'DT': 'no label', });
lyr_Matdodanso_binhphuoc_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});