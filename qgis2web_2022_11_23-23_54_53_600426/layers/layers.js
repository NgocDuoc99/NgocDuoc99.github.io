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
    <img src="styles/legend/Matdodanso_binhphuoc_0_0.png" /> 1466 - 5384<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_1.png" /> 5384 - 7334<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_2.png" /> 7334 - 9929<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_3.png" /> 9929 - 12299<br />\
    <img src="styles/legend/Matdodanso_binhphuoc_0_4.png" /> 12299 - 34746<br />'
        });
var format_Giaothongbinhphuoc_1 = new ol.format.GeoJSON();
var features_Giaothongbinhphuoc_1 = format_Giaothongbinhphuoc_1.readFeatures(json_Giaothongbinhphuoc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Giaothongbinhphuoc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Giaothongbinhphuoc_1.addFeatures(features_Giaothongbinhphuoc_1);
var lyr_Giaothongbinhphuoc_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Giaothongbinhphuoc_1, 
                style: style_Giaothongbinhphuoc_1,
                interactive: true,
    title: 'Giaothongbinhphuoc<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_0.png" /> DT741<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_1.png" /> QL14<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_2.png" /> DT751<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_3.png" /> DT752<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_4.png" /> DT753<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_5.png" /> DT757<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_6.png" /> DT759<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_7.png" /> DT759B<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_8.png" /> KDC<br />\
    <img src="styles/legend/Giaothongbinhphuoc_1_9.png" /> QL13<br />'
        });
var format_Thuyvan_binhphuoc_2 = new ol.format.GeoJSON();
var features_Thuyvan_binhphuoc_2 = format_Thuyvan_binhphuoc_2.readFeatures(json_Thuyvan_binhphuoc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thuyvan_binhphuoc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thuyvan_binhphuoc_2.addFeatures(features_Thuyvan_binhphuoc_2);
var lyr_Thuyvan_binhphuoc_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Thuyvan_binhphuoc_2, 
                style: style_Thuyvan_binhphuoc_2,
                interactive: true,
    title: 'Thuyvan_binhphuoc<br />\
    <img src="styles/legend/Thuyvan_binhphuoc_2_0.png" /> DAK GLUN<br />\
    <img src="styles/legend/Thuyvan_binhphuoc_2_1.png" /> SONG BE<br />\
    <img src="styles/legend/Thuyvan_binhphuoc_2_2.png" /> SONG DONG NAI<br />\
    <img src="styles/legend/Thuyvan_binhphuoc_2_3.png" /> UKN<br />\
    <img src="styles/legend/Thuyvan_binhphuoc_2_4.png" /> <br />'
        });

lyr_Matdodanso_binhphuoc_0.setVisible(true);lyr_Giaothongbinhphuoc_1.setVisible(true);lyr_Thuyvan_binhphuoc_2.setVisible(true);
var layersList = [lyr_Matdodanso_binhphuoc_0,lyr_Giaothongbinhphuoc_1,lyr_Thuyvan_binhphuoc_2];
lyr_Matdodanso_binhphuoc_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'DANSO': 'DANSO', 'TEN HUYEN': 'TEN HUYEN', 'MATDODANSO': 'MATDODANSO', 'DIENTICH': 'DIENTICH', });
lyr_Giaothongbinhphuoc_1.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', 'TENDUONG': 'TENDUONG', });
lyr_Thuyvan_binhphuoc_2.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_Matdodanso_binhphuoc_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'DANSO': 'TextEdit', 'TEN HUYEN': 'TextEdit', 'MATDODANSO': 'TextEdit', 'DIENTICH': 'TextEdit', });
lyr_Giaothongbinhphuoc_1.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', 'TENDUONG': 'Range', });
lyr_Thuyvan_binhphuoc_2.set('fieldImages', {'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAM': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', });
lyr_Matdodanso_binhphuoc_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'DANSO': 'no label', 'TEN HUYEN': 'no label', 'MATDODANSO': 'no label', 'DIENTICH': 'no label', });
lyr_Giaothongbinhphuoc_1.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', 'TENDUONG': 'no label', });
lyr_Thuyvan_binhphuoc_2.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_Thuyvan_binhphuoc_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});