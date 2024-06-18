function gerarCodigo() {
  var htmlCode = document.getElementById('htmlCode').value;
  var cssCode = document.getElementById('cssCode').value;
  var jsCode = document.getElementById('jsCode').value;
  
  var resultado = '<!DOCTYPE html>\n<html lang="pt-BR">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>IDE de Programação - Resultado</title>\n<style>\n' + cssCode + '\n</style>\n</head>\n<body>\n' + htmlCode + '\n<script>\n' + jsCode + '\n</script>\n</body>\n</html>';
  
  document.getElementById('codigoGerado').value = resultado;
  
  var resultadoFrame = document.getElementById('resultadoFrame').contentWindow.document;
  resultadoFrame.open();
  resultadoFrame.write(resultado);
  resultadoFrame.close();
}
