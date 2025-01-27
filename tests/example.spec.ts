import { expect, test } from 'utils/fixtures';

test.describe('Playwright docs tests', { tag: '@regression' }, () => {
	test.beforeEach(async ({ homepage }) => {
		await homepage.goto();
	});

	test('Search for Best Practices and open the page', async ({
		page,
		homepage,
	}) => {
		await homepage.searchForDocumentation('Best Practise');
		await expect(
			page.getByRole('link', { name: 'Best Practices', exact: true }),
		).toBeVisible();
	});
});
