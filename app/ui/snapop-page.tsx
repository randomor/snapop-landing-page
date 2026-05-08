import { css } from 'remix/ui'

import { routes } from '../routes.ts'

const APP_STORE_URL = 'https://apps.apple.com/us/app/snapop/id6756635978'
const ICON_URL = '/snapop-icon.png'

export function SnapopPage() {
  return () => (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <meta
          name="description"
          content="SnaPOP turns screenshots into polished marketing visuals."
        />
        <meta property="og:title" content="SnaPOP" />
        <meta
          property="og:description"
          content="Make screenshots pop fast. Get SnaPOP on the App Store."
        />
        <meta property="og:image" content={ICON_URL} />
        <title>SnaPOP</title>
        <link rel="icon" href={ICON_URL} />
      </head>
      <body
        mix={css({
          '--paper': '#f7f8f5',
          '--ink': '#161b1d',
          '--muted': '#596164',
          '--snap-red': '#e84836',
          '--snap-blue': '#155f8f',
          '--snap-green': '#2f755f',
          '--snap-yellow': '#f0c84b',
          margin: 0,
          minHeight: '100vh',
          background:
            'linear-gradient(145deg, var(--paper) 0%, #eef5f2 44%, #f9f0ea 100%)',
          color: 'var(--ink)',
          fontFamily:
            'Avenir Next, Avenir, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          '& *, & *::before, & *::after': { boxSizing: 'border-box' },
        })}
      >
        <main
          mix={css({
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '40px 20px',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 'min(76vw, 760px)',
              aspectRatio: '1',
              top: '-22%',
              right: '-18%',
              background: 'var(--snap-red)',
              borderRadius: '42% 58% 49% 51%',
              transform: 'rotate(-14deg)',
              opacity: 0.95,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: 'min(46vw, 420px)',
              aspectRatio: '1',
              bottom: '-20%',
              left: '-12%',
              background: 'var(--snap-yellow)',
              borderRadius: '56% 44% 50% 50%',
              transform: 'rotate(20deg)',
            },
          })}
        >
          <section
            aria-labelledby="snapop-title"
            mix={css({
              position: 'relative',
              zIndex: 1,
              width: 'min(100%, 920px)',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              alignItems: 'center',
              gap: '48px',
              '@media (max-width: 760px)': {
                gridTemplateColumns: '1fr',
                gap: '36px',
                textAlign: 'center',
              },
            })}
          >
            <div
              mix={css({
                display: 'grid',
                justifyItems: 'start',
                gap: '24px',
                '@media (max-width: 760px)': {
                  justifyItems: 'center',
                },
              })}
            >
              <img
                src={ICON_URL}
                alt="SnaPOP app icon"
                width="132"
                height="88"
                mix={css({
                  width: '132px',
                  height: '88px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 24px 70px rgba(22, 27, 29, 0.24)',
                })}
              />
              <div mix={css({ display: 'grid', gap: '14px', maxWidth: '620px' })}>
                <h1
                  id="snapop-title"
                  mix={css({
                    margin: 0,
                    fontSize: '5.5rem',
                    lineHeight: 0.9,
                    letterSpacing: 0,
                    fontWeight: 800,
                    '@media (max-width: 760px)': {
                      fontSize: '4.25rem',
                    },
                    '@media (max-width: 420px)': {
                      fontSize: '3.3rem',
                    },
                  })}
                >
                  SnaPOP
                </h1>
                <p
                  mix={css({
                    margin: 0,
                    maxWidth: '520px',
                    color: 'var(--muted)',
                    fontSize: '1.18rem',
                    lineHeight: 1.55,
                    fontWeight: 500,
                  })}
                >
                  Make screenshots pop fast.
                </p>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="View SnaPOP on the App Store"
                mix={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '56px',
                  padding: '0 24px',
                  borderRadius: '999px',
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  fontSize: '1rem',
                  fontWeight: 750,
                  textDecoration: 'none',
                  boxShadow: '0 18px 44px rgba(22, 27, 29, 0.2)',
                  transition: 'transform 180ms ease, box-shadow 180ms ease, background 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 24px 52px rgba(22, 27, 29, 0.26)',
                    background: 'var(--snap-blue)',
                  },
                  '&:focus-visible': {
                    outline: '4px solid var(--snap-green)',
                    outlineOffset: '4px',
                  },
                })}
              >
                View on the App Store
              </a>
            </div>
            <div
              aria-hidden="true"
              mix={css({
                width: '220px',
                aspectRatio: '0.72',
                border: '10px solid var(--ink)',
                borderRadius: '34px',
                background:
                  'linear-gradient(160deg, var(--snap-red) 0 44%, var(--paper) 44% 58%, var(--snap-green) 58% 100%)',
                boxShadow: '28px 30px 0 var(--snap-blue), 0 34px 86px rgba(22, 27, 29, 0.28)',
                transform: 'rotate(6deg)',
                display: 'grid',
                placeItems: 'center',
                '@media (max-width: 760px)': {
                  width: '154px',
                  justifySelf: 'center',
                  order: '-1',
                  boxShadow:
                    '18px 20px 0 var(--snap-blue), 0 24px 60px rgba(22, 27, 29, 0.22)',
                },
              })}
            >
              <div
                mix={css({
                  width: '70%',
                  aspectRatio: '1.18',
                  borderRadius: '18px',
                  background: 'var(--paper)',
                  border: '6px solid var(--ink)',
                  boxShadow: '10px 10px 0 rgba(22, 27, 29, 0.22)',
                })}
              />
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
