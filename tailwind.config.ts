import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './views/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        esporte: {
          purple: '#0597F2',
          'soft-purple': '#0597c1',
          blue: '#0597F2',
          green: {
            lightest: "#A5C7AF",
            lighter: "#77BD8B",
            light: "#4DB26A",
            default: "#32C585",
            dark: "#248B5F",
            darker: "#16603F",
          },
          orange: {
            lightest: "#FFE8CC",
            lighter: "#FFD1A3",
            light: "#FFBA7A",
            default: "#FFAC36",
            dark: "#CC862B",
            darker: "#995F20",
          },
          red: {
            lightest: "#e5a1a4",
            lighter: "#db6e72",
            light: "#d13f45",
            default: "#c8131b",
            dark: "#94090f",
            darker: "#610206",
          },
          neutral: {
            white: '#ffffff',
            lightest: '#f6f6f6',
            lighter: '#ededed',
            light: '#c6c6c6',
            default: '#7a7a7a',
            dark: '#545454',
            darker: '#222222',
            black: '#000000'
          },
          shadows: {
            lighter: '0px 0px 2px 0px #0000001F, 0px 1px 2px 0px #00000024;',
            light: '0px 0px 2px 0px #0000001F, 0px 2px 4px 0px #00000024;',
            default: '0px 0px 2px 0px #0000001F, 0px 4px 8px 0px #00000024;',
            dark: '0px 0px 2px 0px #0000001F, 0px 8px 16px 0px #00000024;',
            darker: '0px 0px 8px 0px #00000033, 0px 10px 25px 0px #00000024;'
          },
          typography: {
            family: {
              default: '"Poppins", sans-serif'
            },
            weights: {
              regular: '400',
              medium: '500',
              semibold: '600',
              bold: '700'
            }
          },
          spacing: {
            xxs: '4px',
            xs: '8px',
            s: '16px',
            m: '24px',
            l: '32px',
            xl: '40px',
            xxl: '48px'
          },
          radius: {
            s: '4px',
            m: '8px',
            l: '12px',
            xl: '16px',
            xxl: '24px'
          },
          components: {
            fieldInfo: {
              fontSize: {
                desktop: '12px',
                tablet: '14px',
                totem: '16px'
              }
            },
            input: {
              label: {
                fontSize: {
                  desktop: '16px',
                  tablet: '18px',
                  totem: '20px'
                }
              },
              input: {
                fontSize: {
                  desktop: '14px',
                  tablet: '16px',
                  totem: '18px'
                },
                height: {
                  desktop: '40px',
                  tablet: '48px',
                  totem: '56px'
                },
                borderRadius: {
                  desktop: '8px',
                  tablet: '12px',
                  totem: '16px'
                }
              }
            },
            button: {
              fontSize: {
                desktop: '14px',
                tablet: '16px',
                totem: '18px'
              },
              height: {
                desktop: '40px',
                tablet: '48px',
                totem: '56px'
              },
              padding: {
                desktop: '0 16px',
                tablet: '0 24px',
                totem: '0 32px'
              }
            }
          }
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config
