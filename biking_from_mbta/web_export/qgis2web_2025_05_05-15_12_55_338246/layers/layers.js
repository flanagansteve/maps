var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bikefrombus_1 = new ol.format.GeoJSON();
var features_Bikefrombus_1 = format_Bikefrombus_1.readFeatures(json_Bikefrombus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikefrombus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikefrombus_1.addFeatures(features_Bikefrombus_1);
var lyr_Bikefrombus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikefrombus_1, 
                style: style_Bikefrombus_1,
                popuplayertitle: 'Bike from bus',
                interactive: true,
                title: '<img src="styles/legend/Bikefrombus_1.png" /> Bike from bus'
            });
var format_Bikefromsubway_2 = new ol.format.GeoJSON();
var features_Bikefromsubway_2 = format_Bikefromsubway_2.readFeatures(json_Bikefromsubway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikefromsubway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikefromsubway_2.addFeatures(features_Bikefromsubway_2);
var lyr_Bikefromsubway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikefromsubway_2, 
                style: style_Bikefromsubway_2,
                popuplayertitle: 'Bike from subway',
                interactive: true,
                title: '<img src="styles/legend/Bikefromsubway_2.png" /> Bike from subway'
            });
var format_Bikefromcommuterrail_3 = new ol.format.GeoJSON();
var features_Bikefromcommuterrail_3 = format_Bikefromcommuterrail_3.readFeatures(json_Bikefromcommuterrail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikefromcommuterrail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikefromcommuterrail_3.addFeatures(features_Bikefromcommuterrail_3);
var lyr_Bikefromcommuterrail_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikefromcommuterrail_3, 
                style: style_Bikefromcommuterrail_3,
                popuplayertitle: 'Bike from commuter rail',
                interactive: true,
                title: '<img src="styles/legend/Bikefromcommuterrail_3.png" /> Bike from commuter rail'
            });
var format_MBTABUSSTOPS_PT_4 = new ol.format.GeoJSON();
var features_MBTABUSSTOPS_PT_4 = format_MBTABUSSTOPS_PT_4.readFeatures(json_MBTABUSSTOPS_PT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBTABUSSTOPS_PT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBTABUSSTOPS_PT_4.addFeatures(features_MBTABUSSTOPS_PT_4);
var lyr_MBTABUSSTOPS_PT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBTABUSSTOPS_PT_4, 
                style: style_MBTABUSSTOPS_PT_4,
                popuplayertitle: 'MBTABUSSTOPS_PT',
                interactive: true,
                title: '<img src="styles/legend/MBTABUSSTOPS_PT_4.png" /> MBTABUSSTOPS_PT'
            });
var format_MBTABUSROUTES_ARC_5 = new ol.format.GeoJSON();
var features_MBTABUSROUTES_ARC_5 = format_MBTABUSROUTES_ARC_5.readFeatures(json_MBTABUSROUTES_ARC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBTABUSROUTES_ARC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBTABUSROUTES_ARC_5.addFeatures(features_MBTABUSROUTES_ARC_5);
var lyr_MBTABUSROUTES_ARC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBTABUSROUTES_ARC_5, 
                style: style_MBTABUSROUTES_ARC_5,
                popuplayertitle: 'MBTABUSROUTES_ARC',
                interactive: true,
                title: '<img src="styles/legend/MBTABUSROUTES_ARC_5.png" /> MBTABUSROUTES_ARC'
            });
var format_commuter_rail_nodestrains_node_6 = new ol.format.GeoJSON();
var features_commuter_rail_nodestrains_node_6 = format_commuter_rail_nodestrains_node_6.readFeatures(json_commuter_rail_nodestrains_node_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_commuter_rail_nodestrains_node_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commuter_rail_nodestrains_node_6.addFeatures(features_commuter_rail_nodestrains_node_6);
var lyr_commuter_rail_nodestrains_node_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commuter_rail_nodestrains_node_6, 
                style: style_commuter_rail_nodestrains_node_6,
                popuplayertitle: 'commuter_rail_nodes — trains_node',
                interactive: true,
                title: '<img src="styles/legend/commuter_rail_nodestrains_node_6.png" /> commuter_rail_nodes — trains_node'
            });
var format_TRAINS_RTE_TRAIN_7 = new ol.format.GeoJSON();
var features_TRAINS_RTE_TRAIN_7 = format_TRAINS_RTE_TRAIN_7.readFeatures(json_TRAINS_RTE_TRAIN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAINS_RTE_TRAIN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAINS_RTE_TRAIN_7.addFeatures(features_TRAINS_RTE_TRAIN_7);
var lyr_TRAINS_RTE_TRAIN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRAINS_RTE_TRAIN_7, 
                style: style_TRAINS_RTE_TRAIN_7,
                popuplayertitle: 'TRAINS_RTE_TRAIN',
                interactive: true,
                title: '<img src="styles/legend/TRAINS_RTE_TRAIN_7.png" /> TRAINS_RTE_TRAIN'
            });
var format_MBTA_ARC_8 = new ol.format.GeoJSON();
var features_MBTA_ARC_8 = format_MBTA_ARC_8.readFeatures(json_MBTA_ARC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBTA_ARC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBTA_ARC_8.addFeatures(features_MBTA_ARC_8);
var lyr_MBTA_ARC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBTA_ARC_8, 
                style: style_MBTA_ARC_8,
                popuplayertitle: 'MBTA_ARC',
                interactive: true,
                title: '<img src="styles/legend/MBTA_ARC_8.png" /> MBTA_ARC'
            });
var format_MBTA_NODE_9 = new ol.format.GeoJSON();
var features_MBTA_NODE_9 = format_MBTA_NODE_9.readFeatures(json_MBTA_NODE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBTA_NODE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBTA_NODE_9.addFeatures(features_MBTA_NODE_9);
var lyr_MBTA_NODE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBTA_NODE_9, 
                style: style_MBTA_NODE_9,
                popuplayertitle: 'MBTA_NODE',
                interactive: true,
                title: '<img src="styles/legend/MBTA_NODE_9.png" /> MBTA_NODE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bikefrombus_1.setVisible(true);lyr_Bikefromsubway_2.setVisible(true);lyr_Bikefromcommuterrail_3.setVisible(true);lyr_MBTABUSSTOPS_PT_4.setVisible(true);lyr_MBTABUSROUTES_ARC_5.setVisible(true);lyr_commuter_rail_nodestrains_node_6.setVisible(true);lyr_TRAINS_RTE_TRAIN_7.setVisible(true);lyr_MBTA_ARC_8.setVisible(true);lyr_MBTA_NODE_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bikefrombus_1,lyr_Bikefromsubway_2,lyr_Bikefromcommuterrail_3,lyr_MBTABUSSTOPS_PT_4,lyr_MBTABUSROUTES_ARC_5,lyr_commuter_rail_nodestrains_node_6,lyr_TRAINS_RTE_TRAIN_7,lyr_MBTA_ARC_8,lyr_MBTA_NODE_9];
lyr_Bikefrombus_1.set('fieldAliases', {'fid': 'fid', 'STOP_ID': 'STOP_ID', 'STOP_NAME': 'STOP_NAME', 'TOWN': 'TOWN', 'TOWN_ID': 'TOWN_ID', });
lyr_Bikefromsubway_2.set('fieldAliases', {'fid': 'fid', 'STATION': 'STATION', 'LINE': 'LINE', 'TERMINUS': 'TERMINUS', 'ROUTE': 'ROUTE', });
lyr_Bikefromcommuterrail_3.set('fieldAliases', {'fid': 'fid', 'STATION': 'STATION', 'C_RAILSTAT': 'C_RAILSTAT', 'AMTRAK': 'AMTRAK', 'MAP_STA': 'MAP_STA', 'LINE_BRNCH': 'LINE_BRNCH', 'STATE': 'STATE', });
lyr_MBTABUSSTOPS_PT_4.set('fieldAliases', {'STOP_ID': 'STOP_ID', 'STOP_NAME': 'STOP_NAME', 'TOWN': 'TOWN', 'TOWN_ID': 'TOWN_ID', });
lyr_MBTABUSROUTES_ARC_5.set('fieldAliases', {'SHAPE_ID': 'SHAPE_ID', 'MBTA_ROUTE': 'MBTA_ROUTE', 'MBTA_VARIA': 'MBTA_VARIA', 'MBTA_ROU_1': 'MBTA_ROU_1', 'CTPS_ROUTE': 'CTPS_ROUTE', 'CTPS_ROU_1': 'CTPS_ROU_1', 'DIRECTION': 'DIRECTION', 'ROUTE_DESC': 'ROUTE_DESC', 'TRIP_HEADS': 'TRIP_HEADS', 'CTPS_ROU_2': 'CTPS_ROU_2', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_commuter_rail_nodestrains_node_6.set('fieldAliases', {'fid': 'fid', 'STATION': 'STATION', 'C_RAILSTAT': 'C_RAILSTAT', 'AMTRAK': 'AMTRAK', 'MAP_STA': 'MAP_STA', 'LINE_BRNCH': 'LINE_BRNCH', 'STATE': 'STATE', });
lyr_TRAINS_RTE_TRAIN_7.set('fieldAliases', {'COMM_LINE': 'COMM_LINE', 'COMMRAIL': 'COMMRAIL', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_MBTA_ARC_8.set('fieldAliases', {'LINE': 'LINE', 'ROUTE': 'ROUTE', 'GRADE': 'GRADE', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_MBTA_NODE_9.set('fieldAliases', {'STATION': 'STATION', 'LINE': 'LINE', 'TERMINUS': 'TERMINUS', 'ROUTE': 'ROUTE', });
lyr_Bikefrombus_1.set('fieldImages', {'fid': '', 'STOP_ID': 'TextEdit', 'STOP_NAME': 'TextEdit', 'TOWN': 'TextEdit', 'TOWN_ID': 'Range', });
lyr_Bikefromsubway_2.set('fieldImages', {'fid': '', 'STATION': 'TextEdit', 'LINE': 'TextEdit', 'TERMINUS': 'TextEdit', 'ROUTE': 'TextEdit', });
lyr_Bikefromcommuterrail_3.set('fieldImages', {'fid': '', 'STATION': 'TextEdit', 'C_RAILSTAT': 'TextEdit', 'AMTRAK': 'TextEdit', 'MAP_STA': 'TextEdit', 'LINE_BRNCH': 'TextEdit', 'STATE': 'TextEdit', });
lyr_MBTABUSSTOPS_PT_4.set('fieldImages', {'STOP_ID': '', 'STOP_NAME': '', 'TOWN': '', 'TOWN_ID': '', });
lyr_MBTABUSROUTES_ARC_5.set('fieldImages', {'SHAPE_ID': '', 'MBTA_ROUTE': '', 'MBTA_VARIA': '', 'MBTA_ROU_1': '', 'CTPS_ROUTE': '', 'CTPS_ROU_1': '', 'DIRECTION': '', 'ROUTE_DESC': '', 'TRIP_HEADS': '', 'CTPS_ROU_2': '', 'SHAPE_LEN': '', });
lyr_commuter_rail_nodestrains_node_6.set('fieldImages', {'fid': 'TextEdit', 'STATION': 'TextEdit', 'C_RAILSTAT': 'TextEdit', 'AMTRAK': 'TextEdit', 'MAP_STA': 'TextEdit', 'LINE_BRNCH': 'TextEdit', 'STATE': 'TextEdit', });
lyr_TRAINS_RTE_TRAIN_7.set('fieldImages', {'COMM_LINE': 'TextEdit', 'COMMRAIL': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_MBTA_ARC_8.set('fieldImages', {'LINE': '', 'ROUTE': '', 'GRADE': '', 'SHAPE_LEN': '', });
lyr_MBTA_NODE_9.set('fieldImages', {'STATION': '', 'LINE': '', 'TERMINUS': '', 'ROUTE': '', });
lyr_Bikefrombus_1.set('fieldLabels', {'fid': 'no label', 'STOP_ID': 'no label', 'STOP_NAME': 'no label', 'TOWN': 'no label', 'TOWN_ID': 'no label', });
lyr_Bikefromsubway_2.set('fieldLabels', {'fid': 'no label', 'STATION': 'no label', 'LINE': 'no label', 'TERMINUS': 'no label', 'ROUTE': 'no label', });
lyr_Bikefromcommuterrail_3.set('fieldLabels', {'fid': 'no label', 'STATION': 'no label', 'C_RAILSTAT': 'no label', 'AMTRAK': 'no label', 'MAP_STA': 'no label', 'LINE_BRNCH': 'no label', 'STATE': 'no label', });
lyr_MBTABUSSTOPS_PT_4.set('fieldLabels', {'STOP_ID': 'no label', 'STOP_NAME': 'no label', 'TOWN': 'no label', 'TOWN_ID': 'no label', });
lyr_MBTABUSROUTES_ARC_5.set('fieldLabels', {'SHAPE_ID': 'no label', 'MBTA_ROUTE': 'no label', 'MBTA_VARIA': 'no label', 'MBTA_ROU_1': 'no label', 'CTPS_ROUTE': 'no label', 'CTPS_ROU_1': 'no label', 'DIRECTION': 'no label', 'ROUTE_DESC': 'no label', 'TRIP_HEADS': 'no label', 'CTPS_ROU_2': 'no label', 'SHAPE_LEN': 'no label', });
lyr_commuter_rail_nodestrains_node_6.set('fieldLabels', {'fid': 'no label', 'STATION': 'no label', 'C_RAILSTAT': 'no label', 'AMTRAK': 'no label', 'MAP_STA': 'no label', 'LINE_BRNCH': 'no label', 'STATE': 'no label', });
lyr_TRAINS_RTE_TRAIN_7.set('fieldLabels', {'COMM_LINE': 'no label', 'COMMRAIL': 'no label', 'SHAPE_LEN': 'no label', });
lyr_MBTA_ARC_8.set('fieldLabels', {'LINE': 'no label', 'ROUTE': 'no label', 'GRADE': 'no label', 'SHAPE_LEN': 'no label', });
lyr_MBTA_NODE_9.set('fieldLabels', {'STATION': 'no label', 'LINE': 'no label', 'TERMINUS': 'no label', 'ROUTE': 'no label', });
lyr_MBTA_NODE_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});