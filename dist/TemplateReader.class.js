export class TemplateReader {
    constructor(options) {
        this.types = {};
        this.templates = {};
        Object.assign(this, options);
    }
    readTemplates(templateRefs) {
        const count = templateRefs['_results'].length;
        for (let x = count - 1; x >= 0; --x) {
            let row = templateRefs['_results'][x];
            this.applyReferences(row._def.references, row);
        }
        if (this.lastTemplateName && (!this.templates[this.lastTemplateName] || !templateRefs.length)) {
            this.afterReadTemplates(templateRefs);
        }
    }
    afterReadTemplates(templateRefs) {
        const index = templateRefs['_results'].length - 1;
        const lastTemplate = templateRefs['_results'][index];
        if (!lastTemplate || !this.lastTemplateName)
            return;
        const matched = this.applyReferences(lastTemplate._def.references, lastTemplate);
        if (!matched) {
            this.templates[this.lastTemplateName] = lastTemplate;
        }
    }
    applyReferences(refs, row) {
        for (let x in refs) {
            if (this.types[x]) {
                this.templates[this.types[x]] = row;
                return true;
            }
        }
        return false;
    }
}
