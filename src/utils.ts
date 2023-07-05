export function loadPaths(modules:any) :string[]{
    
    let moduleNames: string[] = [];
    let curUrl = window.location.href.split('/')[3]
	for (let path in modules) {
		path = path.replace('.', curUrl).replace('+page.svelte', '');
		moduleNames.push(path);
    }
    return moduleNames
}