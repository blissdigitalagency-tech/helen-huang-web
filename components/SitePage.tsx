import type { Content } from "@/content/types";
import { LINKS, PHOTOS, photoSrc, SOCIALS, whatsappLink, type Photo } from "@/content/site";
import { AwardBadge } from "./AwardBadge";
import { SocialIcon, WhatsAppIcon } from "./icons";
import { Glints } from "./Glints";
import { Header } from "./Header";
import { HeroVideo } from "./HeroVideo";
import { Motion } from "./Motion";
import { Rich } from "./Rich";

const LOGO = "/media/logo/helen-huang-logo-cropped.webp";

// Hidden until Helen's real performance list is supplied. Set to true to show the section again.
export const SHOW_PERFORMANCES = false;

function Img({ photo, decorative }: { photo: Photo; decorative?: boolean }) {
  return (
    <img
      src={photoSrc(photo.id)}
      alt={decorative ? "" : photo.alt}
      width={photo.w}
      height={photo.h}
      loading="lazy"
      decoding="async"
    />
  );
}

/** WhatsApp button and social links. The button is inactive (no wa.me link) if the number is empty. */
function BookingCta({ c }: { c: Content["contact"] }) {
  const href = whatsappLink(c.message);
  return (
    <div className="booking-cta">
      {href ? (
        <a className="btn btn-lux booking-btn" href={href} target="_blank" rel="noopener">
          <WhatsAppIcon size={18} />
          {c.button}
        </a>
      ) : (
        <span className="btn btn-lux booking-btn is-inactive" aria-disabled="true">
          <WhatsAppIcon size={18} />
          {c.button}
          <small>{c.inactive}</small>
        </span>
      )}
      <ul className="booking-socials">
        {SOCIALS.map((s) => {
          const label = c.social.replace("{network}", s.network);
          return (
            <li key={s.network}>
              <a className="social-btn" href={s.href} target="_blank" rel="noopener" aria-label={label} title={label}>
                <SocialIcon network={s.network} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SitePage({ c }: { c: Content }) {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ===== Hero: video, logo, buttons ===== */}
      <section id="top" className="hero">
        <HeroVideo />
        <div className="hero-shade" aria-hidden="true" />
        <Glints seed={11} glints={14} dots={56} />
        <Header c={c} />
        <div className="hero-center">
          <h1 className="hero-logo">
            <img src={LOGO} alt="Helen Huang" width={889} height={514} fetchPriority="high" />
          </h1>
          <div className="btn-row center">
            <a className="btn btn-lux" href="#music">
              {c.hero.listen}
            </a>
            <a className="btn btn-ghost" href="#booking">
              {c.hero.book}
            </a>
          </div>
        </div>
      </section>

      <main>
        {/* ===== Music: player left, "Listen now" with stacked buttons right ===== */}
        <section id="music" className="section bg music-sec">
          <Glints seed={51} />
          <div className="wrap music-grid">
            <iframe
              className="reveal"
              title="Helen Huang on Spotify"
              src={LINKS.spotifyEmbed}
              width="100%"
              height={352}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
            <div className="listen-col">
              <p className="kicker">{c.music.label}</p>
              <h2 className="reveal">{c.music.title}</h2>
              <div className="listen-buttons reveal">
                <a className="btn btn-ghost" href={LINKS.spotify} target="_blank" rel="noopener">
                  Spotify
                </a>
                <a className="btn btn-ghost" href={LINKS.appleMusic} target="_blank" rel="noopener">
                  Apple Music
                </a>
                <a className="btn btn-ghost" href={LINKS.youtube} target="_blank" rel="noopener">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Discography: photo left fading into the dark, list right ===== */}
        <section id="discography" className="section bg-alt disco-sec">
          <div className="disco-photo">
            <Img photo={PHOTOS.discography} />
          </div>
          <Glints seed={31} />
          <div className="wrap">
            <div className="disco">
              <p className="kicker">{c.discography.label}</p>
              <Rich as="h2" className="reveal" html={c.discography.title} />
              <ul className="releases">
                {c.discography.releases.map((r) => (
                  <li key={r.title} className="reveal">
                    <span className="r-year">{r.year}</span>
                    <div>
                      {/* Pinyin title, then Hanzi title on its own line */}
                      <div className="r-title">{r.title}</div>
                      {r.zh && (
                        <div className="r-zh" lang="zh">
                          {r.zh}
                        </div>
                      )}
                      <div className="r-note">
                        {r.ordinal && <span className="r-ord">{r.ordinal}</span>}
                        {r.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Awards: compact list left, photo right fading into the dark ===== */}
        <section id="awards" className="section bg awards-sec">
          <div className="awards-photo">
            <Img photo={PHOTOS.awards} />
          </div>
          <Glints seed={41} />
          <div className="wrap">
            <div className="awards">
              <p className="kicker">{c.awards.label}</p>
              <Rich as="h2" className="reveal" html={c.awards.title} />
              {c.awards.groups.map((g) => (
                <div key={g.year} className="year-group reveal">
                  <div className="yg-year">{g.year}</div>
                  <div>
                    {g.event && <p className="yg-event">{g.event}</p>}
                    {g.items.map((a) => (
                      <div key={a.name} className="award">
                        <AwardBadge badge={a.badge} />
                        <div>
                          {a.zh && (
                            <div className="a-zh" lang="zh">
                              {a.zh}
                            </div>
                          )}
                          <Rich as="div" className="a-name" html={a.name} />
                          {a.from && <Rich as="p" className="a-from" html={a.from} />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Performances (hidden for now, see SHOW_PERFORMANCES) ===== */}
        {SHOW_PERFORMANCES && (
        <section id="performances" className="section bg-alt">
          <Glints seed={71} />
          <div className="wrap">
            <p className="kicker">{c.performances.label}</p>
            <Rich as="h2" className="reveal" html={c.performances.title} />
            <ul className="perf">
              {c.performances.items.map((p, i) => (
                <li key={i} className="reveal">
                  <span className="p-when">{p.when}</span>
                  <span className="p-what">{p.what}</span>
                  <span className="p-where">{p.where}</span>
                </li>
              ))}
            </ul>
            <div className="strip reveal">
              {PHOTOS.performances.map((ph) => (
                <Img key={ph.id} photo={ph} />
              ))}
            </div>
          </div>
        </section>
        )}

        {/* ===== Booking ===== */}
        <section id="booking" className="section bg-alt contact">
          <span className="contact-zh" lang="zh" aria-hidden="true">
            请
          </span>
          <Glints seed={81} glints={5} dots={20} />
          <div className="wrap contact-inner reveal">
            <Rich as="p" className="kicker" html={c.contact.eyebrow} />
            <Rich as="h2" html={c.contact.title} />
            <BookingCta c={c.contact} />
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
