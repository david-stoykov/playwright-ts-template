import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from 'pages/homepage';

type Fixtures = {
	homepage: PlaywrightHomePage;
};

export const test = base.extend<Fixtures>({
	homepage: async ({ page }, use) => {
		await use(new PlaywrightHomePage(page));
	},
});

export { expect } from '@playwright/test';
