'use strict';

// New Template Processor Class
function TemplateProcessor(template){
  this.template = template;
}

// Create the fillin method
TemplateProcessor.prototype.fillIn = function (dictionary){
  // Match string in form {{property}}
  const property = /{{(.*?)}}/g;
// Preforming a replacement option on this.template string
// if it does not follow the form {{property}} template.
  const templateFill = this.template.replace(property, function (match, prop) {

// Check if dictionary object exist, if not, replace with empty string
  if (Object.hasOwnProperty.call(dictionary, prop)) {
		return dictionary[prop];
	} else {
		return '';
	}
  });
  // Returns the replaced dictionary word with form {{property}}
  return templateFill;
};
