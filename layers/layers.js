var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_provincekechsafi_1 = new ol.format.GeoJSON();
var features_provincekechsafi_1 = format_provincekechsafi_1.readFeatures(json_provincekechsafi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_provincekechsafi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincekechsafi_1.addFeatures(features_provincekechsafi_1);
var lyr_provincekechsafi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincekechsafi_1, 
                style: style_provincekechsafi_1,
                popuplayertitle: "province kech safi",
                interactive: true,
    title: 'province kech safi<br />\
    <img src="styles/legend/provincekechsafi_1_0.png" /> 246098<br />\
    <img src="styles/legend/provincekechsafi_1_1.png" /> 345772<br />\
    <img src="styles/legend/provincekechsafi_1_2.png" /> 378932<br />\
    <img src="styles/legend/provincekechsafi_1_3.png" /> 425449<br />\
    <img src="styles/legend/provincekechsafi_1_4.png" /> 560075<br />\
    <img src="styles/legend/provincekechsafi_1_5.png" /> 642171<br />\
    <img src="styles/legend/provincekechsafi_1_6.png" /> 719299<br />\
    <img src="styles/legend/provincekechsafi_1_7.png" /> 1560704<br />'
        });
var format_cheflieu_2 = new ol.format.GeoJSON();
var features_cheflieu_2 = format_cheflieu_2.readFeatures(json_cheflieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheflieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheflieu_2.addFeatures(features_cheflieu_2);
var lyr_cheflieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cheflieu_2, 
                style: style_cheflieu_2,
                popuplayertitle: "cheflieu",
                interactive: true,
                title: 'cheflieu'
            });
var format_frontieredumaroc_3 = new ol.format.GeoJSON();
var features_frontieredumaroc_3 = format_frontieredumaroc_3.readFeatures(json_frontieredumaroc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frontieredumaroc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frontieredumaroc_3.addFeatures(features_frontieredumaroc_3);
var lyr_frontieredumaroc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frontieredumaroc_3, 
                style: style_frontieredumaroc_3,
                popuplayertitle: " frontiere du maroc",
                interactive: true,
                title: '<img src="styles/legend/frontieredumaroc_3.png" />  frontiere du maroc'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_provincekechsafi_1.setVisible(true);lyr_cheflieu_2.setVisible(true);lyr_frontieredumaroc_3.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_provincekechsafi_1,lyr_cheflieu_2,lyr_frontieredumaroc_3];
lyr_provincekechsafi_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi': 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi', 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin': 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin', 'Data_Devoir_Carte_Thematique — cheflieu_Area': 'Data_Devoir_Carte_Thematique — cheflieu_Area', 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024': 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024', 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu': 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu', 'Data_Devoir_Carte_Thematique — cheflieu_lat': 'Data_Devoir_Carte_Thematique — cheflieu_lat', 'Data_Devoir_Carte_Thematique — cheflieu_long': 'Data_Devoir_Carte_Thematique — cheflieu_long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_cheflieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_frontieredumaroc_3.set('fieldAliases', {'fid': 'fid', });
lyr_provincekechsafi_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_Area': 'JsonEdit', 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024': 'JsonEdit', 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu': 'JsonEdit', 'Data_Devoir_Carte_Thematique — cheflieu_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — cheflieu_long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'Hidden', 'auxiliary_storage_labeling_lineanchorclipping': 'Hidden', 'auxiliary_storage_labeling_lineanchortype': 'Hidden', 'auxiliary_storage_labeling_lineanchortextpoint': 'Hidden', });
lyr_cheflieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'JsonEdit', 'Area': 'Hidden', 'Population_2024': 'Hidden', 'Chef lieu': 'JsonEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_frontieredumaroc_3.set('fieldImages', {'fid': 'Hidden', });
lyr_provincekechsafi_1.set('fieldLabels', {'Data_Devoir_Carte_Thematique — cheflieu_Area': 'no label', 'Data_Devoir_Carte_Thematique — cheflieu_Population_2024': 'no label', 'Data_Devoir_Carte_Thematique — cheflieu_Chef lieu': 'no label', });
lyr_cheflieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_frontieredumaroc_3.set('fieldLabels', {});
lyr_frontieredumaroc_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});