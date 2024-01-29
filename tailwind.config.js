/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        custom: ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        primary50: '##EEFFF1',
        primary100: '#D7FFE0',
        primary200: '#B2FFC3',
        primary300: '#53FF7A',
        primary400: '#33F560',
        primary500: '#09DE3A',
        primary600: '#01B82B',
        primary700: '#059026',
        primary800: '#0A7123',
        primary900: '#0A5D20',
        primary950: '#00340E',

        secondary50: '#F2FBFA',
        secondary100: '#D2F5F0',
        secondary200: '#A4EBE2',
        secondary300: '#6FD9D0',
        secondary400: '#41C0B9',
        secondary500: '#28A49F',
        secondary600: '#1E8381',
        secondary700: '#1C6968',
        secondary800: '#1A5555',
        secondary900: '#1A4747',
        secondary950: '#0C3436',

        neutral50: '#F7F7F7',
        neutral100: '#EDEDED',
        neutral200: '#DADADA',
        neutral300: '#C8C8C8',
        neutral400: '#ADADAD',
        neutral500: '#999999',
        neutral600: '#888888',
        neutral700: '#7B7B7B',
        neutral800: '#676767',
        neutral900: '#545454',
        neutral950: '#363636',

        backgroundWhite: '#F7F7F7',
        backgroundOffWhite: '#F9F9F9',

        success50: '#ECFDF4',
        success200: '#9AF4C3',
        success800: '#03623F',

        info100: '#E2EBFD',
        info200: '#CAD9FB',
        info800: '#373C9C',

        warning200: '#FADFA8',
        warning300: '#F7CB7A',
        warning800: '#944818',

        error200: '#F7C3C0',
        error500: '#DE5C55',
        error800: '#8D2D27',
      },
      fontSize: {
        h1: [
          '4rem',
          {
            lineHeight: '4.75rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        h2: [
          '2.5rem',
          {
            lineHeight: '3rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        h3: [
          '2rem',
          {
            lineHeight: '2.375rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        h4: [
          '1.5rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        h5: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        h6: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        label16: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        bold16: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        regular16: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
            letterSpacing: '0.5px',
          },
        ],
        light16: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '300',
            letterSpacing: '0.5px',
          },
        ],
        label14: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        bold14: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        regular14: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '400',
            letterSpacing: '0.5px',
          },
        ],
        light14: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '300',
            letterSpacing: '0.5px',
          },
        ],
        labelCaption: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        boldCaption: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '700',
            letterSpacing: '0.5px',
          },
        ],
        regularCaption: [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            fontWeight: '400',
            letterSpacing: '0.5px',
          },
        ],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
}
