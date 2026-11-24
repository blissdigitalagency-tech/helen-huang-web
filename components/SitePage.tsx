import type { Content } from "@/content/types";
import { LINKS } from "@/content/site";
import { Gallery } from "./Gallery";
import { Glints } from "./Glints";
import { Header } from "./Header";
import { HeroVideo } from "./HeroVideo";
import { Motion } from "./Motion";
import { Rich } from "./Rich";
import { SectionLabel } from "./SectionLabel";
import { Star } from "./icons";

const LOGO = "/media/logo/helen-huang-logo-cropped.webp";

export function SitePage({ c }: { c: Content }) {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ===== Hero ===== */}
      <section id="top" className="hero">
        <HeroVideo />
        <div className="hero-shade" aria-hidden="true" />
        <Glints seed={11} glints={14} dots={56} />
        <Header c={c} />

        <div className="hero-center">
          <p className="hero-eyebrow">{c.hero.eyebrow}</p>
          <h1 className="hero-logo">
            <img src={LOGO} alt="Helen Huang" width={889} height={514} fetchPriority="high" />
          </h1>
          <p className="hero-lead">{c.hero.lead}</p>
          <div className="btn-row center">
            <a className="btn btn-foil" href="#listen">
              {c.hero.listen}
            </a>
            <a className="btn btn-ghost" href="#contact">
              {c.hero.book}
            </a>
          </div>
        </div>

        <div className="seal" role="img" aria-label={`MURI ${c.hero.sealRecord} 2025`}>
          <span className="seal-ring" aria-hidden="true" />
          <span className="seal-disc" aria-hidden="true">
            <Star size={14} />
            <b>MURI</b>
            <small>{c.hero.sealRecord}</small>
            <i>2025</i>
          </span>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) =>
              c.ribbon.map((item, i) => (
                <span key={`${copy}-${i}`} className="marquee-item" aria-hidden={copy === 1 ? "true" : undefined}>
                  <span>{item}</span>
                  <Star />
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      <main>
        {/* ===== About ===== */}
        <section id="about" className="section bg">
          <Glints seed={21} />
          <div className="wrap about">
            <figure className="about-photo reveal">
              <span className="about-h" aria-hidden="true">
                H
              </span>
              <div className="arch">
                <img src="/media/photos/p41.webp" alt={c.about.photoAlt} width={933} height={1400} loading="lazy" />
              </div>
              <Star className="about-star" size={30} />
            </figure>
            <div className="about-body">
              <SectionLabel num="01" text={c.about.label} />
              <figure className="about-quote reveal">
                <Rich as="h2" html={c.about.title} />
                <figcaption>— Helen Huang</figcaption>
              </figure>
              <p className="drop reveal">{c.about.p1}</p>
              <p className="reveal">{c.about.p2}</p>
              <Rich as="blockquote" className="reveal" html={c.about.quote} />
            </div>
          </div>
        </section>

        {/* ===== Journey ===== */}
        <section id="journey" className="section bg-alt">
          <Glints seed={31} />
          <div className="wrap">
            <SectionLabel num="02" />
            <h2 className="reveal">{c.journey.title}</h2>
            <ol className="timeline">
              {c.journey.items.map((item) => (
                <li key={item.year} className={`reveal${item.highlight ? " highlight" : ""}`}>
                  <span className="t-year">{item.year}</span>
                  <Rich as="h3" html={item.title} />
                  <Rich as="p" html={item.text} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== Two languages ===== */}
        <section id="bridge" className="section bg">
          <Glints seed={41} />
          <div className="wrap bridge">
            <div>
              <SectionLabel num="03" />
              <Rich as="h2" className="reveal" html={c.bridge.title} />
              <Rich as="p" className="body reveal" html={c.bridge.text} />
              <ul className="chips reveal" aria-label="Mandarin, Indonesia, English">
                <li lang="zh" className="chip-solid">
                  中文
                </li>
                <li lang="id">Bahasa Indonesia</li>
                <li lang="en">English</li>
              </ul>
            </div>
            <figure className="bridge-card reveal">
              <div className="bv">
                <span className="bv-label">{c.bridge.from}</span>
                <span className="bv-title">Sing Sing So</span>
              </div>
              <div className="bv-arrow" aria-hidden="true">
                <span />
              </div>
              <div className="bv bv-to">
                <span className="bv-label">{c.bridge.to}</span>
                <span className="bv-title">Chuan Ge</span>
              </div>
            </figure>
          </div>
        </section>

        {/* ===== Music ===== */}
        <section id="music" className="section bg-alt">
          <Glints seed={51} />
          <div className="wrap">
            <SectionLabel num="04" />
            <h2 className="reveal">{c.music.title}</h2>

            <div id="listen" className="listen reveal">
              <div>
                <p className="kicker">{c.music.listenLabel}</p>
                <h3>{c.music.listenTitle}</h3>
                <div className="btn-row">
                  <a className="btn btn-foil btn-sm" href={LINKS.spotify} target="_blank" rel="noopener">
                    Spotify
                  </a>
                  <a className="btn btn-foil btn-sm" href={LINKS.appleMusic} target="_blank" rel="noopener">
                    Apple Music
                  </a>
                  <a className="btn btn-foil btn-sm" href={LINKS.youtube} target="_blank" rel="noopener">
                    YouTube
                  </a>
                </div>
              </div>
              <iframe
                title="Helen Huang on Spotify"
                src={LINKS.spotifyEmbed}
                width="100%"
                height={352}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>

            <div className="music-grid">
              <article className="album reveal">
                {/* TODO: replace the CSS tile with real album artwork when supplied */}
                <div className="album-cover">
                  <span className="album-frame" aria-hidden="true" />
                  <span className="album-zh" lang="zh">
                    付出
                  </span>
                  <Star className="album-star" size={22} />
                </div>
                <p className="kicker">Album · 2024</p>
                <h3 className="album-title">
                  Fu Chu <span lang="zh">付出</span>
                </h3>
                <p className="muted">{c.music.albumMeta}</p>
                <a className="text-link" href={LINKS.appleMusicAlbum} target="_blank" rel="noopener">
                  {c.music.albumLink}
                </a>
              </article>

              <ul className="tracks">
                {c.music.tracks.map((t) => (
                  <li key={t.title} className="reveal">
                    {t.zh ? (
                      <span className="track-zh" lang="zh">
                        {t.zh}
                      </span>
                    ) : (
                      <span className="track-zh track-mark" aria-hidden="true">
                        <Star size={16} />
                      </span>
                    )}
                    <div>
                      <h4>{t.title}</h4>
                      <p>{t.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="videos reveal">
              {/* TODO: YouTube embeds */}
              <div className="video-ph">
                <span>Video</span>
              </div>
              <div className="video-ph">
                <span>Video</span>
              </div>
              <a className="video-more" href={LINKS.youtube} target="_blank" rel="noopener">
                <Rich html={c.music.videoMore} />
              </a>
            </div>
          </div>
        </section>

        {/* ===== Gallery ===== */}
        <section id="gallery" className="section bg gallery">
          <div className="gallery-outline" aria-hidden="true">
            HELEN HUANG
          </div>
          <Glints seed={61} />
          <div className="wrap wide">
            <div className="gallery-head">
              <SectionLabel num="05" center />
              <h2 className="reveal">{c.gallery.title}</h2>
            </div>
            <Gallery c={c.gallery} />
          </div>
        </section>

        {/* ===== Stage ===== */}
        <section id="stage" className="section bg-alt">
          <Glints seed={71} />
          <div className="wrap stage">
            <div className="stage-intro">
              <SectionLabel num="06" />
              <h2 className="reveal">{c.stage.title}</h2>
              <p className="body reveal">{c.stage.lead}</p>
              <div className="chips reveal">
                {c.stage.places.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
            <div className="stage-col reveal">
              <p className="kicker">{c.stage.sharedLabel}</p>
              <ul className="shared">
                <li>Judika</li>
                <li>Rossa</li>
                <li>Cakra Khan</li>
                <li>Lyodra</li>
              </ul>
            </div>
            <div className="stage-col reveal">
              <p className="kicker">{c.stage.honoursLabel}</p>
              <ul className="honours">
                {c.stage.honours.map((h) => (
                  <Rich as="li" key={h} html={h} />
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section id="contact" className="section bg contact">
          <span className="contact-zh" lang="zh" aria-hidden="true">
            请
          </span>
          <Glints seed={81} glints={5} dots={20} />
          <div className="wrap contact-inner reveal">
            <Rich as="p" className="kicker" html={c.contact.eyebrow} />
            <Rich as="h2" html={c.contact.title} />
            {/* TODO: official booking contact (email / WhatsApp / manager) */}
            <p className="muted">{c.contact.note}</p>
            <div className="btn-row center">
              <a className="btn btn-foil" href={LINKS.youtube} target="_blank" rel="noopener">
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Glints seed={91} glints={3} dots={12} />
        <img className="footer-logo" src={LOGO} alt="Helen Huang" width={889} height={514} loading="lazy" />
        <p>© {year} Helen Huang Enterprise</p>
      </footer>

      <Motion />
    </>
  );
}
