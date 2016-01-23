function test(){
  //lol = getDataTable("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
  //setDataTable("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", lol, "F2")
  
  //lol = getDataList("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
  //setDataList("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", lol, "J2")
  
  //lol = getDataTable_namedArray("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
  
  lol = getKeyValuePair("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B14")
}

function gmailTest(){
  sendSimpleEmail("example@gmail.com", "Yah", "<b>Test</b><br><i>This is just a test</i>")
}

function filesTest(){
  moveToFolder_byName("Test - 12358134","0B7nlwem4satzZXNlVTh6U0dUTWM")
}

function docsTest(){
  lol = [{yah:"bah"}, {ahs:"bdas", ssdas:1}]
  lol = {}
  lol['yah'] = 5
  lol['vddfsg'] = 'fasf'
  getPrettyJSON(lol)
  
  //template_replace_image('1M_tWb4Ki4Aiyb23KSK3rY5V73iZe_QuYS_xomV5hlTo', '{{image1}}', '0B7nlwem4satzRmU0djlzVDNfbG8', null, 'halfPage', null);
}

function jsonTest(){
  lol = [{yah:"bah"}, {ahs:"bdas", ssdas:1}]
  Logger.log(JSON.stringify(lol, null, '  '))
}

function nullTest(){
  yay = 1
  Logger.log(yay == null)
  Logger.log(yay != null)
}
