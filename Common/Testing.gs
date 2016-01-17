function test(){
  //lol = getDataTable("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
  //setDataTable("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", lol, "F2")
  
  //lol = getDataList("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
  //setDataList("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", lol, "J2")
  
  lol = getDataTable_namedArray("1byb2E5xsgLaLza_Fgt4JGGn8QYfB-K7-Didi25iXNZE", "Sheet1", "B2")
}

function gmailTest(){
  sendSimpleEmail("test@example.com", "Yah", "hasdas")
}

function filesTest(){
  moveToFolder_byName("Test - 12358134","0B7nlwem4satzZXNlVTh6U0dUTWM")
}

function docsTest(){
  lol = [{yah:"bah"}, {ahs:"bdas", ssdas:1}]
  getPrettyJSON(lol)
}

function jsonTest(){
  lol = [{yah:"bah"}, {ahs:"bdas", ssdas:1}]
  Logger.log(JSON.stringify(lol, null, '  '))
}
