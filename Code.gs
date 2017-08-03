function doGet(request){
  var html = HtmlService.createTemplateFromFile('index').evaluate();
      html.setTitle('mi primer ejercicio web app');
      html.setFaviconUrl('https://community.grupobbva.com/KSNI/mult/css/favicon.ico');
  return html;
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
                    .setSandboxMode(HtmlService.SandboxMode.NATIVE)
                    .getContent();
}

function session_getEmailUser(){
  var activeSession = Session.getActiveUser().getEmail();
  Logger.log(activeSession);
  return activeSession;
}
