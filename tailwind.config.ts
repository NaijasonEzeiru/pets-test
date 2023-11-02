import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-phone-number-input/commonjs/PhoneInputWithCountry.js',
    './node_modules/react-phone-number-input/commonjs/CountrySelect.js'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      },
      colors: {
        primaryBg: 'var(--primary-bg-color)',
        secondaryBg: 'var(--secondary-bg-color)',
        primaryText: 'var(--primary-text-color)',
        ctaColor: 'var(--primary-cta-color)'
      }
    }
  },
  plugins: []
};
export default config;
