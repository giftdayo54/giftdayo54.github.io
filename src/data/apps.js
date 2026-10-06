// Add a new app = add one object. type: 'internal' (route /data-lab/<id>) | 'external' (url).
// internal apps must also be registered in src/pages/internalApps.js
export const categories = ['Data Analysis','Machine Learning','Remote Sensing','GIS','Agriculture','Irrigation','Climate','Engineering','AI','Dashboards'];
export const apps = [
  { id:'yield-explorer', title:'Agricultural Yield Analysis Explorer', description:'Explore yield, NDVI, EVI and NDRE by field with time-series and regression views (demo data).', category:'Dashboards', technologies:['JavaScript','SVG'], type:'internal', status:'Live', github:'', featured:true },
  { id:'irrigation-calculator', title:'Irrigation Water Requirement Calculator', description:'ET-based crop water requirement and scheduling.', category:'Irrigation', technologies:['JavaScript','FAO-56'], type:'internal', status:'Coming Soon', github:'' },
  { id:'ndvi-analyser', title:'NDVI / NDRE Explorer', description:'Interactive Sentinel-2 crop indicators.', category:'Remote Sensing', technologies:['Leaflet','Sentinel-2'], type:'internal', status:'In Development', github:'' },
  { id:'sugarcane-yield', title:'Sugarcane Yield Predictor', description:'Machine-learning yield prediction from satellite indices and field data.', category:'Machine Learning', technologies:['Python','Scikit-learn'], type:'external', url:'https://example.com', github:'https://github.com/example/project', embed:false, status:'In Development', featured:true },
  { id:'anomaly-detection', title:'Agricultural Anomaly Detection', description:'Isolation Forest and statistical anomaly detection on field data.', category:'AI', technologies:['Python','Streamlit'], type:'external', url:'https://example.com', embed:true, status:'Coming Soon' },
  { id:'water-productivity', title:'Water Productivity Dashboard', description:'Irrigation water applied versus yield output.', category:'Agriculture', technologies:['Python','Plotly'], type:'external', url:'https://example.com', embed:false, status:'Coming Soon' },
];
