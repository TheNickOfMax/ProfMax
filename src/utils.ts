export
    /**
	 * Converts raw paths from object returned by import.meta.glob() into hrefs
	 * @param pths object returned by import.meta.glob()
	 * @param cur current URL ( better use $page.url.toString() )
	 */
	function pathsToHrefs (pths: any, cur:string): string[] {
		cur = cur.split('/')[3];

		return Object.keys(pths)
			.map((path) => path
				// Transform raw paths into links
				.replace('/+page.svelte', '')
				.replace('../routes', '')) 

				// Only leave links that are relevant for the current page
				.filter((path) => path.includes(cur));
	}