var format_is_grd_region = new ol.format.GeoJSON();
var features_is_grd_region = format_is_grd_region.readFeatures(geojson_is_grd_region, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_is_grd_region = new ol.source.Vector();
jsonSource_is_grd_region.addFeatures(features_is_grd_region);var lyr_is_grd_region = new ol.layer.Vector({
                source:jsonSource_is_grd_region, 
                style: style_is_grd_region,
                title: "is_grd_region"
            });var format_is_sea_region = new ol.format.GeoJSON();
var features_is_sea_region = format_is_sea_region.readFeatures(geojson_is_sea_region, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_is_sea_region = new ol.source.Vector();
jsonSource_is_sea_region.addFeatures(features_is_sea_region);var lyr_is_sea_region = new ol.layer.Vector({
                source:jsonSource_is_sea_region, 
                style: style_is_sea_region,
                title: "is_sea_region"
            });var format_streetsTEST = new ol.format.GeoJSON();
var features_streetsTEST = format_streetsTEST.readFeatures(geojson_streetsTEST, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streetsTEST = new ol.source.Vector();
jsonSource_streetsTEST.addFeatures(features_streetsTEST);var lyr_streetsTEST = new ol.layer.Vector({
                source:jsonSource_streetsTEST, 
                style: style_streetsTEST,
                title: "streetsTEST"
            });

lyr_is_grd_region.setVisible(true);lyr_is_sea_region.setVisible(true);lyr_streetsTEST.setVisible(true);
var layersList = [lyr_is_grd_region,lyr_is_sea_region,lyr_streetsTEST];
lyr_is_grd_region.set('fieldAliases', {'objid': 'objid', 'userid': 'userid', 'gardenname': 'gardenname', 'grdcode': 'grdcode', 'gardentype': 'gardentype', 'area': 'area', 'perimeter': 'perimeter', 'cityname': 'cityname', 'citycode': 'citycode', });
lyr_is_sea_region.set('fieldAliases', {'objid': 'objid', 'userid': 'userid', 'lakename': 'lakename', 'laketype': 'laketype', 'area': 'area', 'perimeter': 'perimeter', });
lyr_streetsTEST.set('fieldAliases', {'STREET': 'STREET', 'FROMLEFT': 'FROMLEFT', 'TOLEFT': 'TOLEFT', 'FROMRIGHT': 'FROMRIGHT', 'TORIGHT': 'TORIGHT', 'STREETCODE': 'STREETCODE', 'OBJID': 'OBJID', 'USERID': 'USERID', 'FJUNCTION': 'FJUNCTION', 'TJUNCTION': 'TJUNCTION', 'LENGTH': 'LENGTH', 'ROADTYPE': 'ROADTYPE', 'ONEWAY': 'ONEWAY', 'F_ZLEV': 'F_ZLEV', 'T_ZLEV': 'T_ZLEV', 'FLANES': 'FLANES', 'TLANES': 'TLANES', 'INTENDED': 'INTENDED', 'CITYNAME': 'CITYNAME', 'CITYCODE': 'CITYCODE', 'AUTONOMY': 'AUTONOMY', 'REGULATION': 'REGULATION', 'ROADNAMEMZ': 'ROADNAMEMZ', 'DIRECTIONM': 'DIRECTIONM', 'STATUS': 'STATUS', 'ROADFUNCTI': 'ROADFUNCTI', 'FLAG': 'FLAG', 'IDENTIFIER': 'IDENTIFIER', 'ROADDIRECT': 'ROADDIRECT', 'CLEARSTREE': 'CLEARSTREE', 'REVERSTREE': 'REVERSTREE', 'CLEARCITYN': 'CLEARCITYN', 'REVERCITYN': 'REVERCITYN', });
lyr_is_grd_region.set('fieldImages', {'objid': 'TextEdit', 'userid': 'TextEdit', 'gardenname': 'TextEdit', 'grdcode': 'TextEdit', 'gardentype': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'cityname': 'TextEdit', 'citycode': 'TextEdit', });
lyr_is_sea_region.set('fieldImages', {'objid': 'TextEdit', 'userid': 'TextEdit', 'lakename': 'TextEdit', 'laketype': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_streetsTEST.set('fieldImages', {'STREET': 'TextEdit', 'FROMLEFT': 'TextEdit', 'TOLEFT': 'TextEdit', 'FROMRIGHT': 'TextEdit', 'TORIGHT': 'TextEdit', 'STREETCODE': 'TextEdit', 'OBJID': 'TextEdit', 'USERID': 'TextEdit', 'FJUNCTION': 'TextEdit', 'TJUNCTION': 'TextEdit', 'LENGTH': 'TextEdit', 'ROADTYPE': 'TextEdit', 'ONEWAY': 'TextEdit', 'F_ZLEV': 'TextEdit', 'T_ZLEV': 'TextEdit', 'FLANES': 'TextEdit', 'TLANES': 'TextEdit', 'INTENDED': 'TextEdit', 'CITYNAME': 'TextEdit', 'CITYCODE': 'TextEdit', 'AUTONOMY': 'TextEdit', 'REGULATION': 'TextEdit', 'ROADNAMEMZ': 'TextEdit', 'DIRECTIONM': 'TextEdit', 'STATUS': 'TextEdit', 'ROADFUNCTI': 'TextEdit', 'FLAG': 'TextEdit', 'IDENTIFIER': 'TextEdit', 'ROADDIRECT': 'TextEdit', 'CLEARSTREE': 'TextEdit', 'REVERSTREE': 'TextEdit', 'CLEARCITYN': 'TextEdit', 'REVERCITYN': 'TextEdit', });
lyr_is_grd_region.set('fieldLabels', {'objid': 'no label', 'userid': 'no label', 'gardenname': 'no label', 'grdcode': 'no label', 'gardentype': 'no label', 'area': 'no label', 'perimeter': 'no label', 'cityname': 'no label', 'citycode': 'no label', });
lyr_is_sea_region.set('fieldLabels', {'objid': 'no label', 'userid': 'no label', 'lakename': 'no label', 'laketype': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_streetsTEST.set('fieldLabels', {'STREET': 'no label', 'FROMLEFT': 'no label', 'TOLEFT': 'no label', 'FROMRIGHT': 'no label', 'TORIGHT': 'no label', 'STREETCODE': 'no label', 'OBJID': 'no label', 'USERID': 'no label', 'FJUNCTION': 'no label', 'TJUNCTION': 'no label', 'LENGTH': 'no label', 'ROADTYPE': 'no label', 'ONEWAY': 'no label', 'F_ZLEV': 'no label', 'T_ZLEV': 'no label', 'FLANES': 'no label', 'TLANES': 'no label', 'INTENDED': 'no label', 'CITYNAME': 'no label', 'CITYCODE': 'no label', 'AUTONOMY': 'no label', 'REGULATION': 'no label', 'ROADNAMEMZ': 'no label', 'DIRECTIONM': 'no label', 'STATUS': 'no label', 'ROADFUNCTI': 'no label', 'FLAG': 'no label', 'IDENTIFIER': 'no label', 'ROADDIRECT': 'no label', 'CLEARSTREE': 'no label', 'REVERSTREE': 'no label', 'CLEARCITYN': 'no label', 'REVERCITYN': 'no label', });
