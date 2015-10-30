var fs = require("fs");

function mergeValues(values, content) {
  //Cycle over the keys and return merged content
  for(var key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }
  return content;
}

function view(templateName, values, reponse) {
  //Read from the template file, insert contents, and write out contents to the response
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  fileContents = mergeValues(values, fileContents);
  reponse.write(fileContents);
}

module.exports.view = view;