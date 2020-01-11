import { addParameters, configure } from '@storybook/react';
import { themes } from "@storybook/theming";
// import { withA11y } from "@storybook/addon-a11y";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

// export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap';
addParameters({
	showRoots: true,
	options: {
		theme: themes.dark,
		// theme: themes.normal,
	},
	docs: {
		container: DocsContainer,
		page: DocsPage,
	},
});

// addDecorator(withA11y);

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);