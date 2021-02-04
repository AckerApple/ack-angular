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
    //look to apply last template as a specified templates[name]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVtcGxhdGVSZWFkZXIuY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVGVtcGxhdGVSZWFkZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBLE1BQU0sT0FBTyxjQUFjO0lBS3pCLFlBQVksT0FBZ0I7UUFKNUIsVUFBSyxHQUFTLEVBQUUsQ0FBQTtRQUNoQixjQUFTLEdBQWEsRUFBRSxDQUFBO1FBSXRCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxhQUFhLENBQUUsWUFBK0I7UUFDNUMsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQTtRQUM3QyxLQUFJLElBQUksQ0FBQyxHQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQztZQUM3QixJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtTQUMvQztRQUVELElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdGLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxZQUFZLENBQUUsQ0FBQTtTQUN4QztJQUNILENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsa0JBQWtCLENBQUUsWUFBK0I7UUFDakQsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUE7UUFDL0MsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFFLEtBQUssQ0FBRSxDQUFBO1FBRXRELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsT0FBTztRQUVwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFlBQVksQ0FBQTtTQUNyRDtJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUSxFQUFFLEdBQW9CO1FBQzVDLEtBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLEdBQUcsR0FBRyxDQUFBO2dCQUNyQyxPQUFPLElBQUksQ0FBQTthQUNaO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRlbXBsYXRlUmVmXG4gIC8vRWxlbWVudFJlZixcbiAgLy9Db250ZW50Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSB0eXBlc3tcbiAgW2luZGV4OnN0cmluZ106c3RyaW5nLy8gI3JlZiA6IHRoaXMubmFtZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIHRlbXBsYXRlc3tcbiAgW2luZGV4OnN0cmluZ106VGVtcGxhdGVSZWY8YW55PlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIG9wdGlvbnN7XG4gIHR5cGVzPzp0eXBlc1xuICBsYXN0VGVtcGxhdGVOYW1lPzpzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVhZGVye1xuICB0eXBlczp0eXBlcyA9IHt9XG4gIHRlbXBsYXRlczp0ZW1wbGF0ZXMgPSB7fVxuICBsYXN0VGVtcGxhdGVOYW1lOnN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/Om9wdGlvbnMpe1xuICAgIE9iamVjdC5hc3NpZ24odGhpcyxvcHRpb25zKVxuICB9XG5cbiAgcmVhZFRlbXBsYXRlcyggdGVtcGxhdGVSZWZzOlRlbXBsYXRlUmVmPGFueT5bXSApe1xuICAgIGNvbnN0IGNvdW50ID0gdGVtcGxhdGVSZWZzWydfcmVzdWx0cyddLmxlbmd0aFxuICAgIGZvcihsZXQgeD1jb3VudC0xOyB4ID49IDA7IC0teCl7XG4gICAgICBsZXQgcm93ID0gdGVtcGxhdGVSZWZzWydfcmVzdWx0cyddW3hdXG4gICAgICB0aGlzLmFwcGx5UmVmZXJlbmNlcyhyb3cuX2RlZi5yZWZlcmVuY2VzLCByb3cpXG4gICAgfVxuXG4gICAgaWYoIHRoaXMubGFzdFRlbXBsYXRlTmFtZSAmJiAoIXRoaXMudGVtcGxhdGVzW3RoaXMubGFzdFRlbXBsYXRlTmFtZV0gfHwgIXRlbXBsYXRlUmVmcy5sZW5ndGgpICl7XG4gICAgICB0aGlzLmFmdGVyUmVhZFRlbXBsYXRlcyggdGVtcGxhdGVSZWZzIClcbiAgICB9XG4gIH1cblxuICAvL2xvb2sgdG8gYXBwbHkgbGFzdCB0ZW1wbGF0ZSBhcyBhIHNwZWNpZmllZCB0ZW1wbGF0ZXNbbmFtZV1cbiAgYWZ0ZXJSZWFkVGVtcGxhdGVzKCB0ZW1wbGF0ZVJlZnM6VGVtcGxhdGVSZWY8YW55PltdICl7XG4gICAgY29uc3QgaW5kZXggPSB0ZW1wbGF0ZVJlZnNbJ19yZXN1bHRzJ10ubGVuZ3RoLTFcbiAgICBjb25zdCBsYXN0VGVtcGxhdGUgPSB0ZW1wbGF0ZVJlZnNbJ19yZXN1bHRzJ11bIGluZGV4IF1cblxuICAgIGlmKCAhbGFzdFRlbXBsYXRlIHx8ICF0aGlzLmxhc3RUZW1wbGF0ZU5hbWUgKXJldHVybjtcbiAgICBcbiAgICBjb25zdCBtYXRjaGVkID0gdGhpcy5hcHBseVJlZmVyZW5jZXMobGFzdFRlbXBsYXRlLl9kZWYucmVmZXJlbmNlcywgbGFzdFRlbXBsYXRlKVxuICAgIGlmKCAhbWF0Y2hlZCApe1xuICAgICAgdGhpcy50ZW1wbGF0ZXNbdGhpcy5sYXN0VGVtcGxhdGVOYW1lXSA9IGxhc3RUZW1wbGF0ZVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5UmVmZXJlbmNlcyhyZWZzOmFueSwgcm93OlRlbXBsYXRlUmVmPGFueT4pOmJvb2xlYW57XG4gICAgZm9yKGxldCB4IGluIHJlZnMpe1xuICAgICAgaWYoIHRoaXMudHlwZXNbeF0gKXtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZXNbIHRoaXMudHlwZXNbeF0gXSA9IHJvd1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59Il19