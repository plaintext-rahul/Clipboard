function doGet() {

  // Automatically use the current Google Doc
  const doc = DocumentApp.getActiveDocument();

  const template = HtmlService.createTemplateFromFile('Index');

  template.docTitle = doc.getName();
  template.docContent = doc.getBody().getText();

  return template.evaluate()
    .setTitle(doc.getName())
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );
}