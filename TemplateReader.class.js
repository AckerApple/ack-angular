"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateReader = void 0;
var TemplateReader = /** @class */ (function () {
    function TemplateReader(options) {
        this.types = {};
        this.templates = {};
        Object.assign(this, options);
    }
    TemplateReader.prototype.readTemplates = function (templateRefs) {
        var count = templateRefs['_results'].length;
        for (var x = count - 1; x >= 0; --x) {
            var row = templateRefs['_results'][x];
            this.applyReferences(row._def.references, row);
        }
        if (this.lastTemplateName && (!this.templates[this.lastTemplateName] || !templateRefs.length)) {
            this.afterReadTemplates(templateRefs);
        }
    };
    //look to apply last template as a specified templates[name]
    TemplateReader.prototype.afterReadTemplates = function (templateRefs) {
        var index = templateRefs['_results'].length - 1;
        var lastTemplate = templateRefs['_results'][index];
        if (!lastTemplate || !this.lastTemplateName)
            return;
        var matched = this.applyReferences(lastTemplate._def.references, lastTemplate);
        if (!matched) {
            this.templates[this.lastTemplateName] = lastTemplate;
        }
    };
    TemplateReader.prototype.applyReferences = function (refs, row) {
        for (var x in refs) {
            if (this.types[x]) {
                this.templates[this.types[x]] = row;
                return true;
            }
        }
        return false;
    };
    return TemplateReader;
}());
exports.TemplateReader = TemplateReader;
//# sourceMappingURL=TemplateReader.class.js.map