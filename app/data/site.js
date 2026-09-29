/**
 * Site-level links. Contact details deliberately stop at profiles: AGENTS.md
 * forbids raw email addresses in HTML, so there is no mailto here.
 *
 * The CV download that used to live here is removed for now, along with the
 * footer link that read `cvPath`. The PDF claimed AI work was in production
 * while the site's own AI section states that none of it ran against live
 * traffic, so publishing the two side by side had the page contradicting the
 * document a visitor was about to download from it.
 *
 * The file went with the link: `public/Murugesh_Aravind_CV.pdf` is no longer
 * part of the repository, so it is not served either. The superseded copy is
 * kept locally at `reviews/archive/`, which git ignores, and git history still
 * holds it. Restore `cvPath`, `cvFileName`, the footer link and the file
 * together, once the PDF has been regenerated without those claims.
 */

export const site = {
  name: "Murugesh Aravind",
  role: "Senior Frontend Engineer",
  links: [
    { label: "GitHub", href: "https://github.com/MurugeshAravind" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/murugesh-aravind-0ab64847",
    },
  ],
};
