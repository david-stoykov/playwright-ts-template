import { type Locator, type Page } from '@playwright/test';

export class PlaywrightHomePage {
	readonly page: Page;
	readonly search: Locator;
	readonly searchBox: Locator;
	readonly bestPracticesResult: Locator;

	constructor(page: Page) {
		this.page = page;
		this.search = this.page.getByRole('button', { name: 'Search' });
		this.searchBox = this.page.getByRole('searchbox', { name: 'Search' });
		this.bestPracticesResult = this.page.getByRole('link', {
			name: 'Best Practices',
			exact: true,
		});
	}

	async goto() {
		await this.page.goto(process.env.URL as string);
	}

	async searchForDocumentation(searchWord: string) {
		await this.search.click();
		await this.searchBox.fill(searchWord);
	}
}
