import { css, type RemixNode } from 'remix/ui'

const APP_STORE_URL = 'https://apps.apple.com/us/app/snapop/id6756635978'
const ICON_URL = '/snapop-icon.png'
const ICON_WEBP_URL = '/snapop-icon-256.webp'
const OG_IMAGE_URL = 'https://snapop.app/og-image.png'
const OG_IMAGE_ALT =
  'SnaPOP screenshot editor preview with the headline Stop sending boring snaps.'

export function SnapopPage() {
  return () => (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <meta
          name="description"
          content="SnaPOP is a screenshot editor for social posts. Frame, crop, focus, blur, and annotate screenshots into polished poster-style marketing visuals in seconds."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://snapop.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snapop.app/" />
        <meta property="og:title" content="SnaPOP - Screenshot Editor for Social" />
        <meta
          property="og:description"
          content="Stop sending boring snaps. Turn screenshots into polished marketing visuals with bold frames, focus effects, blur, and callouts."
        />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={OG_IMAGE_ALT} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SnaPOP - Screenshot Editor for Social" />
        <meta
          name="twitter:description"
          content="Frame, crop, focus, blur, and annotate screenshots into poster-style visuals in seconds."
        />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
        <title>SnaPOP - Screenshot Editor for Social</title>
        <link rel="icon" href={ICON_URL} />
        <link
          rel="preload"
          as="image"
          href="/previews/01-stop-sending-boring-snaps.webp"
          type="image/webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SnaPOP',
            alternateName: 'Marketing Visuals - SnaPOP',
            applicationCategory: 'PhotoApplication',
            operatingSystem: 'iOS, iPadOS',
            description:
              'SnaPOP turns screenshots into polished poster-style marketing visuals with backgrounds, framing, focus effects, blur, and callouts.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            url: 'https://snapop.app/',
            downloadUrl: APP_STORE_URL,
          })}
        </script>
      </head>
      <body
        mix={css({
          '--red': '#ff3b30',
          '--red-deep': '#ff2b14',
          '--red-hot': '#ff4a18',
          '--ink': '#070707',
          '--muted': '#6a6a6a',
          '--paper': '#fff7f3',
          '--white': '#ffffff',
          margin: 0,
          minHeight: '100vh',
          color: 'var(--ink)',
          background:
            'linear-gradient(115deg, var(--red) 0%, var(--red-hot) 48%, var(--red-deep) 100%)',
          fontFamily:
            'ui-rounded, "SF Pro Display", "Avenir Next", Avenir, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          '& *, & *::before, & *::after': { boxSizing: 'border-box' },
          '& picture': { display: 'block', maxWidth: '100%' },
          '& img': { display: 'block', maxWidth: '100%' },
        })}
      >
        <main>
          <Hero />
          <PreviewGallery />
          <FeatureBand />
          <FinalCta />
        </main>
      </body>
    </html>
  )
}

function Hero() {
  return () => (
    <section
      aria-labelledby="snapop-title"
      mix={css({
        minHeight: '100vh',
        display: 'grid',
        alignItems: 'center',
        padding: '28px',
        '@media (max-width: 760px)': {
          padding: '14px',
        },
      })}
    >
      <div
        mix={css({
          width: 'min(100%, 1180px)',
          minHeight: 'calc(100vh - 56px)',
          margin: '0 auto',
          background: 'var(--white)',
          borderRadius: '44px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 0.95fr) minmax(340px, 0.85fr)',
          gap: '40px',
          alignItems: 'center',
          padding: 'clamp(28px, 6vw, 72px)',
          overflow: 'hidden',
          position: 'relative',
          '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr',
            gap: '32px',
          },
          '@media (max-width: 760px)': {
            minHeight: 'auto',
            borderRadius: '28px',
            padding: '30px 20px',
          },
        })}
      >
        <div
          mix={css({
            display: 'grid',
            gap: '26px',
            position: 'relative',
            zIndex: 1,
            '@media (max-width: 900px)': {
              justifyItems: 'center',
              textAlign: 'center',
            },
          })}
        >
          <picture>
            <source srcSet={ICON_WEBP_URL} type="image/webp" />
            <img
              src={ICON_URL}
              alt="SnaPOP app icon"
              width="1024"
              height="1024"
              decoding="async"
              mix={css({
                width: '112px',
                height: '112px',
                objectFit: 'contain',
                background: 'var(--white)',
                borderRadius: '24px',
                boxShadow: '0 20px 54px rgba(255, 59, 48, 0.24)',
              })}
            />
          </picture>
          <div mix={css({ display: 'grid', gap: '16px' })}>
            <p
              mix={css({
                margin: 0,
                color: 'var(--red)',
                fontWeight: 900,
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              })}
            >
              Screenshot Editor for Social
            </p>
            <h1
              id="snapop-title"
              mix={css({
                margin: 0,
                maxWidth: '680px',
                fontSize: 'clamp(3.35rem, 8.8vw, 7.25rem)',
                lineHeight: 0.9,
                letterSpacing: 0,
                fontWeight: 1000,
              })}
            >
              Stop sending boring snaps
            </h1>
            <p
              mix={css({
                margin: 0,
                maxWidth: '620px',
                color: 'var(--muted)',
                fontSize: 'clamp(1.12rem, 2vw, 1.45rem)',
                lineHeight: 1.5,
                fontWeight: 650,
              })}
            >
              Turn every screenshot into a poster-style visual. Frame, crop, focus, blur, and add
              callouts in seconds.
            </p>
          </div>
          <div
            mix={css({
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              '@media (max-width: 900px)': { justifyContent: 'center' },
            })}
          >
            <StoreButton />
            <span
              mix={css({
                color: 'var(--muted)',
                fontSize: '0.95rem',
                fontWeight: 750,
              })}
            >
              Free on iPhone and iPad
            </span>
          </div>
        </div>
        <div
          mix={css({
            minWidth: 0,
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '76%',
              aspectRatio: '1',
              borderRadius: '999px',
              background: 'rgba(255, 59, 48, 0.12)',
              filter: 'blur(26px)',
            },
          })}
        >
          <picture>
            <source srcSet="/previews/01-stop-sending-boring-snaps.webp" type="image/webp" />
            <img
              src="/previews/01-stop-sending-boring-snaps.png"
              alt="SnaPOP App Store preview showing a polished social screenshot result"
              width="473"
              height="1024"
              decoding="async"
              fetchPriority="high"
              mix={css({
                position: 'relative',
                width: 'min(72vw, 330px)',
                height: 'auto',
                aspectRatio: '473 / 1024',
                objectFit: 'contain',
                borderRadius: '18px',
                boxShadow: '0 34px 84px rgba(7, 7, 7, 0.24)',
                transform: 'rotate(2deg)',
                '@media (max-width: 900px)': {
                  width: 'min(70vw, 292px)',
                },
              })}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

function PreviewGallery() {
  return () => (
    <section
      aria-labelledby="preview-title"
      mix={css({
        padding: '20px 28px 88px',
        '@media (max-width: 760px)': {
          padding: '14px 14px 58px',
        },
      })}
    >
      <div
        mix={css({
          width: 'min(100%, 1180px)',
          margin: '0 auto',
          display: 'grid',
          gap: '24px',
        })}
      >
        <div
          mix={css({
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'space-between',
            gap: '24px',
            color: 'var(--white)',
            '@media (max-width: 760px)': {
              display: 'grid',
            },
          })}
        >
          <div mix={css({ display: 'grid', gap: '10px' })}>
            <h2
              id="preview-title"
              mix={css({
                margin: 0,
                fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
                lineHeight: 0.95,
                letterSpacing: 0,
                fontWeight: 1000,
              })}
            >
              Built for the shots you actually share
            </h2>
            <p
              mix={css({
                margin: 0,
                maxWidth: '680px',
                fontSize: '1.08rem',
                lineHeight: 1.5,
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.84)',
              })}
            >
              These are the actual preview designs: fast framing, sharp ratios, attention control,
              and focus or blur for cleaning up clutter.
            </p>
          </div>
        </div>
        <div
          mix={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '22px',
            alignItems: 'start',
            '@media (max-width: 980px)': {
              overflowX: 'auto',
              gridTemplateColumns: 'repeat(3, minmax(220px, 1fr))',
              paddingBottom: '8px',
              scrollSnapType: 'x mandatory',
            },
          })}
        >
          <PreviewCard
            src="/previews/02-frame-crop-aspect-ratio.png"
            webpSrc="/previews/02-frame-crop-aspect-ratio.webp"
            alt="Frame, crop, aspect ratio in seconds App Store preview"
            label="Ultimate control at your fingertip"
          />
          <PreviewCard
            src="/previews/03-center-audience-attention.png"
            webpSrc="/previews/03-center-audience-attention.webp"
            alt="Center your audience's attention App Store preview"
            label="Callouts, focus, and emphasis"
          />
          <PreviewCard
            src="/previews/04-focus-or-blur.png"
            webpSrc="/previews/04-focus-or-blur.webp"
            alt="Focus or blur with a switch App Store preview"
            label="Delete the clutter"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureBand() {
  return () => (
    <section
      aria-labelledby="features-title"
      mix={css({
        background: 'var(--white)',
        padding: '82px 28px',
        '@media (max-width: 760px)': {
          padding: '56px 20px',
        },
      })}
    >
      <div
        mix={css({
          width: 'min(100%, 1080px)',
          margin: '0 auto',
          display: 'grid',
          gap: '36px',
        })}
      >
        <div mix={css({ display: 'grid', gap: '12px', maxWidth: '780px' })}>
          <h2
            id="features-title"
            mix={css({
              margin: 0,
              fontSize: 'clamp(2.5rem, 5.6vw, 5rem)',
              lineHeight: 0.94,
              letterSpacing: 0,
              fontWeight: 1000,
            })}
          >
            Make screenshots look as sharp as the product
          </h2>
          <p
            mix={css({
              margin: 0,
              color: 'var(--muted)',
              fontSize: '1.13rem',
              lineHeight: 1.55,
              fontWeight: 650,
            })}
          >
            Snapop turns plain screenshots into polished marketing visuals for creators, founders,
            marketers, support teams, and anyone shipping updates worth noticing.
          </p>
        </div>
        <div
          mix={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '14px',
            '@media (max-width: 900px)': {
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            },
            '@media (max-width: 560px)': {
              gridTemplateColumns: '1fr',
            },
          })}
        >
          <Feature title="Frame fast">Bold backgrounds, padding, borders, and shadows for poster-style screenshots.</Feature>
          <Feature title="Crop clean">Lock ratios and trim noise so every share fits the channel.</Feature>
          <Feature title="Guide attention">Use callouts, labels, arrows, and focus effects to show exactly what matters.</Feature>
          <Feature title="Blur clutter">Hide sensitive details or de-emphasize everything around the important part.</Feature>
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return () => (
    <section
      aria-labelledby="download-title"
      mix={css({
        padding: '82px 28px',
        '@media (max-width: 760px)': {
          padding: '58px 20px',
        },
      })}
    >
      <div
        mix={css({
          width: 'min(100%, 960px)',
          margin: '0 auto',
          minHeight: '360px',
          background: 'var(--white)',
          borderRadius: '44px',
          padding: 'clamp(32px, 7vw, 78px)',
          display: 'grid',
          justifyItems: 'center',
          textAlign: 'center',
          gap: '24px',
        })}
      >
        <picture>
          <source srcSet={ICON_WEBP_URL} type="image/webp" />
          <img
            src={ICON_URL}
            alt=""
            width="1024"
            height="1024"
            loading="lazy"
            decoding="async"
            mix={css({
              width: '96px',
              height: '96px',
              objectFit: 'contain',
              background: 'var(--white)',
              borderRadius: '20px',
              boxShadow: '0 18px 48px rgba(255, 59, 48, 0.22)',
            })}
          />
        </picture>
        <div mix={css({ display: 'grid', gap: '14px', justifyItems: 'center' })}>
          <h2
            id="download-title"
            mix={css({
              margin: 0,
              maxWidth: '760px',
              fontSize: 'clamp(2.2rem, 5.2vw, 4.5rem)',
              lineHeight: 0.96,
              letterSpacing: 0,
              fontWeight: 1000,
            })}
          >
            Ready to make your screenshots pop?
          </h2>
          <p
            mix={css({
              margin: 0,
              maxWidth: '620px',
              color: 'var(--muted)',
              fontSize: '1.12rem',
              lineHeight: 1.55,
              fontWeight: 650,
            })}
          >
            Download SnaPOP on the App Store and turn your next screenshot into a statement.
          </p>
        </div>
        <StoreButton />
      </div>
    </section>
  )
}

function PreviewCard() {
  return ({
    src,
    webpSrc,
    alt,
    label,
  }: {
    src: string
    webpSrc: string
    alt: string
    label: string
  }) => (
    <figure
      mix={css({
        margin: 0,
        scrollSnapAlign: 'center',
        display: 'grid',
        gap: '12px',
      })}
    >
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          width="473"
          height="1024"
          loading="lazy"
          decoding="async"
          mix={css({
            width: '100%',
            height: 'auto',
            aspectRatio: '473 / 1024',
            objectFit: 'contain',
            borderRadius: '18px',
            boxShadow: '0 24px 54px rgba(7, 7, 7, 0.28)',
            background: 'var(--red)',
          })}
        />
      </picture>
      <figcaption
        mix={css({
          color: 'rgba(255, 255, 255, 0.88)',
          fontSize: '0.95rem',
          fontWeight: 850,
          lineHeight: 1.35,
        })}
      >
        {label}
      </figcaption>
    </figure>
  )
}

function Feature() {
  return ({ title, children }: { title: string; children: RemixNode }) => (
    <article
      mix={css({
        border: '2px solid rgba(7, 7, 7, 0.08)',
        borderRadius: '22px',
        padding: '22px',
        display: 'grid',
        gap: '10px',
        background: '#fffaf7',
      })}
    >
      <h3
        mix={css({
          margin: 0,
          color: 'var(--red)',
          fontSize: '1.24rem',
          lineHeight: 1.05,
          fontWeight: 950,
        })}
      >
        {title}
      </h3>
      <p
        mix={css({
          margin: 0,
          color: 'var(--muted)',
          fontSize: '1rem',
          lineHeight: 1.45,
          fontWeight: 620,
        })}
      >
        {children}
      </p>
    </article>
  )
}

function StoreButton() {
  return () => (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="View SnaPOP on the App Store"
      mix={css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '58px',
        padding: '0 26px',
        borderRadius: '999px',
        background: 'var(--ink)',
        color: 'var(--white)',
        fontSize: '1rem',
        fontWeight: 900,
        textDecoration: 'none',
        boxShadow: '0 18px 44px rgba(7, 7, 7, 0.18)',
        transition: 'transform 180ms ease, box-shadow 180ms ease, background 180ms ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 24px 52px rgba(7, 7, 7, 0.24)',
          background: 'var(--red)',
        },
        '&:focus-visible': {
          outline: '4px solid rgba(255, 59, 48, 0.34)',
          outlineOffset: '4px',
        },
      })}
    >
      View on the App Store
    </a>
  )
}
