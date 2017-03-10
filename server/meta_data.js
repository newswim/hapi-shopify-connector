// The magic code:

// $('.listViewEntries').each(() => {}).map((a, b)=>console.log(b.attributes[1], b.attributes[2]))

// IN WHICH I PASSED A NOOP, WOOP!


const PRODUCTS = [
{ 'dataId': 9952, "data-name": "Display License" },
{ 'dataId': 9951, "data-name": "SAVI Server Pro" },
{ 'dataId': 9724, "data-name": "SAVI Backup Server" },
{ 'dataId': 8553, "data-name": "Single Room Server" },
{ 'dataId': 2648, "data-name": "SAVI Server w/10 Displays" },
{ 'dataId': 3564, "data-name": "SAVI Sled" },
{ 'dataId': 3559, "data-name": "SAVI Eclosure" },
{ 'dataId': 3560, "data-name": "Kona" },
{ 'dataId': 3561, "data-name": "Blank Plate" },
{ 'dataId': 3562, "data-name": "Egor Tabs - 100" },
{ 'dataId': 3435, "data-name": "Annual Support" },
{ 'dataId': 3433, "data-name": "Demo Server" },
{ 'dataId': 3432, "data-name": "Upgrade: Single Room" },
{ 'dataId': 3431, "data-name": "License for One Display" }]


const MORE_INFO_FOR_EACH_PRODUCT = [
{ "data-info": {
    "productname": "Display License",
    "productcode": "SDL-1",
    "unit_price": "60.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "9952" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=9952",
"id": "Quoter_popUpListView_row_1" },

{ "data-info": {
    "productname": "SAVI Server Pro",
    "productcode": "SSP-01",
    "unit_price": "1500.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "9951" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=9951",
"id": "Quoter_popUpListView_row_2",  },

{ "data-info": {
    "productname": "SAVI Backup Server",
    "productcode": "SBS-00",
    "unit_price": "1950.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "9724" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=9724",
"id": "Quoter_popUpListView_row_3" },

{ "data-info": {
    "productname": "Single Room Server",
    "productcode": "SRS-05",
    "unit_price": "2100.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "8553" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=8553",
"id": "Quoter_popUpListView_row_4" },

{ "data-info": {
    "productname": "SAVI Server w\/10 Displays",
    "productcode": "SSP-10",
    "unit_price": "3540.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "2648" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=2648",
"id": "Quoter_popUpListView_row_5" },

{ "data-info": {
    "productname": "SAVI Sled",
    "productcode": "SLD-01",
    "unit_price": "0.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3564" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3564",
"id": "Quoter_popUpListView_row_6" },

{ "data-info": {
    "productname": "SAVI Eclosure",
    "productcode": "SEN-01",
    "unit_price": "300.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3559" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3559",
"id": "Quoter_popUpListView_row_7" },

{ "data-info": {
    "productname": "Kona",
    "productcode": "SKA-01",
    "unit_price": "0.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3560" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3560",
"id": "Quoter_popUpListView_row_8" },

{ "data-info": {
    "productname": "Blank Plate",
    "productcode": "SBP-01",
    "unit_price": "0.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3561" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3561",
"id": "Quoter_popUpListView_row_9" },

{ "data-info": {
    "productname": "Egor Tabs - 100",
    "productcode": "SEG-100",
    "unit_price": "0.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3562" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3562",
"id": "Quoter_popUpListView_row_10" },

{ "data-info": {
    "productname": "Annual Support",
    "productcode": "SAS-20",
    "unit_price": "0.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3435" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3435",
"id": "Quoter_popUpListView_row_11" },

{ "data-info": {
    "productname": "Demo Server",
    "productcode": "SDS-10",
    "unit_price": "1000.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3433" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3433",
"id": "Quoter_popUpListView_row_12" },

{ "data-info": {
    "productname": "Upgrade: Single Room",
    "productcode": "SSU-10",
    "unit_price": "1800.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3432" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3432",
"id": "Quoter_popUpListView_row_13" },

{ "data-info": {
    "productname": "License for One Display",
    "productcode": "SDL-1",
    "unit_price": "60.00000000",
    "commissionrate": "0.000",
    "qty_per_unit": "0.00",
    "productid": "3431" },
"data-url": "index.php?module=Inventory&action=GetTaxes&record=3431",
"id": "Quoter_popUpListView_row_14" }
]
