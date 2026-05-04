// ╔══════════════════════════════════════════════════════════════╗
// ║              WEEKLY UPDATE ZONE — EDIT HERE ONLY            ║
// ║  Everything you need to update each week lives in this block ║
// ╚══════════════════════════════════════════════════════════════╝

// ── SITE-WIDE CONFIG ─────────────────────────────────────────────
const SITE_CONFIG = {
  name: "Majul Editorial",
  tagline: "Fashion Beyond The Runway · Culture · Context · Commentary",
  footerTagline: "Fashion beyond the runway.",
  footerDesc: "Handcrafted for visual storytelling, engaging reading, and a deeper exploration of fashion beyond surface-level expression.",
  instagramUrl: "https://www.instagram.com/majuleditorial/",
};

// ── HERO SECTION ─────────────────────────────────────────────────
// heroArticleId must match an id in the articles array below.
const HERO = {
  eyebrow: "New Editorial Platform",
  headline: "A polished digital home for <em>fashion,</em> culture, and commentary.",
  body: "Handcrafted for visual storytelling, engaging reading, and a deeper exploration of fashion beyond surface-level expression",
  heroArticleId: "Issue-12",
  heroImage: "Issue12.png",
  heroBadge: "Issue 12 · Featured",
};

// ── FEATURED ARTICLE (Lead Story) ────────────────────────────────
// featuredId must match an id in the articles array below.
const FEATURED = {
  featuredId: "Issue-12",
  sectionDesc: "Couth Studios reveals the fragility of speculative fashion, replacing overproduction with a model grounded in demand, restraint, and responsibility.",
  editorNote: "Intentional design challenges fashion's old logic: create less, listen more, and produce only what has reason to exist.",
};

// ── ARTICLES ─────────────────────────────────────────────────────
// Add, remove, or edit articles here each week.
//
// Fields:
//   id        — unique slug, no spaces (used in URLs)
//   category  — badge label on the card
//   issue     — e.g. "Issue 01"
//   title     — headline
//   subtitle  — short descriptor shown under the title
//   excerpt   — preview snippet shown on the card and article header
//   image     — full URL to the cover image
//   readTime  — e.g. "4 min read"
//   quote     — pull quote shown large inside the article page
//   body      — array of paragraph strings (the full article text)
const articles = [
  {
    id: "Issue-14",
    category: "Ethical",
    issue: "Issue 14",
    title: "Fur, Faux, and the Illusion of Ethics",
    subtitle: "By: Mahek Dharamsi | Date: 5/4/26",
    excerpt: "As fashion moralizes materials, fur remains one of its most contested symbols. This piece explores the uneasy space between ethics, culture, and consumption, where sustainability becomes aesthetic, and responsibility is far less clear than it appears.",
    image: "Issue14.png",
    readTime: "6 min read",
    quote: "Ethical fashion does not concern purity, but responsibility.",
    body: [
      "Winter arrives the same way it always has: quietly at first, then all at once. The air grows cold, the pavements are covered with ice, and we instinctively reach into our thick coats, knitwear, and the heaviest stuff we have in our wardrobe. Warmth existed long before man-made insulation and oversized puffers. Fur, pelt, and skin were not a style statement but were required. However, with time, need turned to prestige, and fur became a symbol of money, luxury, and privilege.",
      "Fur is at an inconvenient location in fashion today. To most people, it is a short word for cruelty, an industry that is premised on the commodification of animal life. To some, it is tradition, art, or legacy. Whether or not fur is ethical or unethical is not the question, but when, how, and to whom.",
      "Take the secondhand fur coat, the one in the back of the grandmother's closet, or in the racks of a vintage store. It is already made. The animal was killed long since. Will wearing it continue to do harm, or will it rebel against waste in the industry that is characterized by overproduction?",
      "There are also claims that the wearing of fur makes its use acceptable and natural and keeps the market going. Others respond by saying that not wearing the current clothes will do nothing to redress past violence and, in fact, promote the manufacture of new, intensive alternatives.",
      "This strain exposes another uneasiness in the ethical fashion discourse: the fact that we like to apply morality as an aesthetic. Fur is made a symbol of bad morality, and other kinds of destruction, like exploitation of labor, use of fossil fuel in textiles, and environmental destruction, are not seen and thus are not condemned.",
      "The second-hand fur coat is a perennial. A faux fur coat, which is usually composed of plastic fibers, can lose microplastics and degrade in ten years. The morals are not as obvious as they can be displayed on a mood board or in an Instagram caption.",
      "The faux fur often comes out as the ethical alternative: animal-free, affordable, and matching modern ideals. But the environmental price of it seldom has the industry in its spotlight. The faux furs are non-biodegradable, most of them are petroleum-based, and difficult to recycle.",
      "By trying to abandon the use of animals, we tend to further depend on those materials that destroy the ecosystems and disproportionately impact vulnerable communities by polluting and creating waste. Whether faux fur is better or not becomes irrelevant; it is whether it can help consumers feel better that appears to be the question.",
      "Ethics, by all means, are not universal. They are contextual. This becomes particularly visible when one speaks about the Indigenous communities and their relations to fur and pelts. To most of the Indigenous people, the harvesting of animals is associated with survival, tradition, and respect for the land.",
      "These are not excess practices controlled by systems of stewardship. It is reductive and colonial to apply identical moral standards that are applied to luxury fur fashion houses to the practice of Indigenous culture. It glosses over the past of land dispossession, forced assimilation, and the continued marginalization of Indigenous knowledge systems.",
      "In cases where fashion ethics do not consider power, they stand to erase rather than protect. Who is to determine what is ethical and whose practice is disparaged in the process? When people flail their hands at fur, their indictment is usually focused on Western, urban, and consumerist backgrounds and ignores non-fitting voices that cannot be easily incorporated into the modern sustainability discourse.",
      "This is not a call to blindly glorify and revive fur as a fad. It is the need to fight the temptation of simplifying. Ethical fashion does not concern purity, but responsibility. It challenges us to pose more difficult questions of production, longevity, labor, culture, and impact: questions that cannot be resolved by any one choice of fabric.",
      "Maybe even the fur coat in the closet of your grandmother is not a sin or a protest. Maybe it is a product of another era, another conception of luxury, a different intercourse of human beings with nature. It might be uncomfortable to wear. Failing to put it on can be a waste. Both reactions are valid.",
      "Intentionality is the most important issue. Are we wearing blindly, or puncturing our pasts into the fabric of our clothes? Are we giving more attention to appearances than results? Will we be content to sit with the inconvenience instead of finding a solution to it in trend-conscious methods?",
      "Winter will continue to arrive, without minding our arguments. The coats we wear, fur or faux or thrifted or inherited, are not as significant as the systems we support with them. Fashion ethics is not about seeking the right way. They are asking more questions and more questions, even when we are cold, and we are tempted to have something easy."
    ],
  },
  {
    id: "Issue-13",
    category: "Ethical",
    issue: "Issue 13",
    title: "Greenwashing in the Fashion Industry",
    subtitle: "By: Mahek Dharamsi | Date: 07/26/25",
    excerpt: "In an industry increasingly defined by sustainability, the absence of clear legal standards creates space for manipulation. This piece explores how greenwashing exposes the limits of fashion law, where vague claims, weak enforcement, and global supply chains complicate accountability.",
    image: "Issue13.png",
    readTime: "7 min read",
    quote: "Fashion must do good as well as look good, and the law makes sure it fulfills its commitments.",
    body: [
      "Sustainability appears to have gained more attention in the fashion industry. Brands are feeling more and more pressure to be \"green\" as consumers expect ethical production and environmental responsibility. Greenwashing, the practice of deceiving customers about a company's environmental policies or products, is a concerning phenomenon that has emerged as a result of this pressure. Although the sustainability movement in fashion may indicate advancement, the reality is frequently clouded by ambiguous statements, a lack of regulation, and legal gray areas.",
      "What Is Greenwashing, and Why Does It Matter?",
      "The practice of using marketing techniques to inflate or fake a company's environmental credentials is known as greenwashing. Words like \"sustainable,\" \"eco-friendly,\" and \"conscious collection\" are frequently used without any regulatory requirements or independent confirmation. This deceives customers, hides actual environmental damage, and hurts businesses that do make investments in sustainable processes.",
      "Over 42% of green claims in fashion ads were overstated or untrue, according to 2023 European Commission research. As fast fashion giants race to capture eco-conscious consumers, many prioritize appearance over genuine accountability.",
      "Legal Frameworks: The Gap Between Regulation and Reality",
      "In the realm of fashion, the majority of nations lack legally mandated definitions of \"sustainable\" or \"green.\" Because of this ambiguity, businesses can make use of marketing words without having to adhere to quantifiable standards. Much of the globe still uses voluntary guidelines, even if the EU Green Claims Directive and France's Duty of Vigilance Law have started to increase inspections.",
      "The goal of the Federal Trade Commission's Green Guides in the US is to stop misleading environmental advertising. These guidelines, which were last revised in 2012, are still nonbinding. In the absence of obligatory disclosures or enforcement mechanisms, greenwashing typically goes unchallenged.",
      "Furthermore, multinational fashion companies frequently conduct business in countries with lax regulations, which enables them to evade responsibility in international supply chains. This includes using terms like \"recycled\" or \"organic\" excessively without supporting documentation, evading labor audits, and avoiding emissions disclosures.",
      "Case in Point: H&M's Conscious Collection",
      "In 2022, H&M faced backlash after an independent watchdog accused the brand of providing misleading sustainability scores for its Conscious Collection. Despite being marketed as environmentally friendly, several of the clothes had more of an impact on the environment than their conventional equivalents.",
      "Numerous nations filed legal complaints in response to this issue, including Norway, which launched a consumer protection inquiry. However, the brand received no significant penalties, underscoring the shortcomings of the enforcement mechanisms in place at the moment.",
      "Consumer Rights and Transparency Requirements",
      "From the standpoint of fashion law, greenwashing is a consumer protection issue as well as a marketing one. False sustainability claims are against the concepts of choice, informed consent, and trade fairness. Customers ought to have the freedom to base their decisions about what to buy on factual, substantiated information.",
      "Mandatory disclosures, third-party certifications, and sanctions for misleading environmental advertising are all being called for by legal reforms. The EU's new Digital Services Act mandates greater transparency requirements for online marketplaces, while the UK's Competition and Markets Authority (CMA) now mandates that businesses support their green claims with verifiable data.",
      "Enforcement is still inconsistent, though. Greenwashing continues to be a low-risk, high-reward tactic in nations with weak consumer protection laws or environmental watchdogs.",
      "Conclusion: Using Fashion Law to Address Greenwashing",
      "Greenwashing undermines customer confidence, impedes real sustainability initiatives, and permits unethical behavior to continue under the guise of environmentally friendly advertising. Fashion law has the potential to be a potent instrument for safeguarding people and the environment through extensive legislative change, more openness, and corporate accountability.",
      "Fashion must do good as well as look good as the industry develops, and the law makes sure it fulfills its commitments."
    ],
  },
  {
    id: "Issue-12",
    category: "Made in Toronto",
    issue: "Issue 12",
    title: "Couth Studios and the End of Speculative Fashion",
    subtitle: "By: Mahek Dharamsi | Date: 5/4/2026",
    excerpt: "In an industry built on prediction, Couth Studios reveals the fragility of a system driven by excess. As production detaches from demand, the boundaries between creation, consumption, and responsibility begin to blur. This article examines how intentional design challenges the very logic fashion has long relied on.",
    image: "Issue12.png",
    readTime: "4 min read",
    quote: "If people don't buy it, we don't make it.",
    body: [
      "Designing with demand, not desire.",
      "Fashion has long operated on a quiet assumption: that desire can be manufactured at scale. Collections are produced in advance, trends are forecasted into existence, and garments enter the world before anyone has asked for them. The result is an industry optimized not for wear, but for output, one where excess is not an accident but a structural feature.",
      "Couth Studios begins from a refusal of that premise.",
      "\"Couth came from a tension I couldn't unsee,\" founder Sajna Massey explains. \"Fashion companies store so much data about what people like, and this is so disconnected from what actually gets produced.\" At the same time, the reality is stark: a significant portion of garments are never worn. The disconnect is not just inefficiency; it is design without consequence.",
      "Couth reframes this relationship entirely. Instead of producing first and searching for demand later, the brand operates on inversion: no demand, no production.",
      "\"We've built Couth as a direct response to overproduction. Traditional fashion creates first and hopes demand follows. We invert that. If people don't buy it, we don't make it.\"",
      "The model is deceptively simple, but its results are not. By grounding production in pre-orders and community validation, Couth challenges one of fashion's most entrenched habits: speculation. In doing so, it shifts waste from an inevitability to a decision.",
      "\"If people don't buy it, we don't make it.\"",
      "What emerges from this system is what Sajna describes as intentional fashion, a term often used but rarely operationalized.",
      "\"Intentional fashion is about alignment, between what's designed, what's produced, and what people actually want to wear. It means fewer, better decisions.\"",
      "In an industry defined by acceleration, intention becomes a form of resistance. It introduces friction into a system built on speed. But for Couth, that friction is not a flaw; it is the point.",
      "\"In a world optimized for speed, intention is a constraint, and that's exactly why it matters.\"",
      "This philosophy extends into the brand's use of artificial intelligence, an area where fashion has largely pursued scale over selectivity. Many companies deploy AI to generate more designs, more options, more cycles. Couth positions it differently.",
      "AI as an editor, not a generator.",
      "AI is not a tool for expansion but for refinement. It becomes a mechanism for understanding what resonates, what holds cultural weight, and what translates into actual wear rather than simply producing variation.",
      "\"When paired with human judgment and community input, it becomes a powerful tool for editing, not just creating.\"",
      "This reframing places Couth at the intersection of technology and restraint, where innovation is measured not by volume but by precision.",
      "And yet, the brand's most radical proposition may not be technological at all, it is relational.",
      "\"I want people to feel like they're part of something, not just buying into a brand, but shaping it.\"",
      "In a demand-driven system, the consumer is no longer a passive endpoint. Participation becomes embedded in the design process itself. A garment exists not because it was predicted, but because it was collectively chosen.",
      "\"There's a different kind of connection when you know a piece exists because people genuinely wanted it to exist.\"",
      "From consumer to co-creator.",
      "This raises a broader question: if demand can be measured in real time, and design can respond accordingly, what happens to the traditional fashion model?",
      "\"I don't think it disappears overnight,\" Sajna notes, \"but it is being challenged in a meaningful way.\"",
      "The legacy system, built in an era of slower information and centralized control, relied on brands dictating taste at scale. That authority is now fragmenting. Today's consumer is more informed, more selective, and less willing to participate in excess for its own sake.",
      "\"What replaces it isn't one single model. But demand-driven, community-informed approaches like ours will become a much bigger part of the landscape.\"",
      "Couth does not position itself as a total replacement but as a signal a shift toward a fashion system that is less speculative, more responsive, and ultimately more accountable.",
      "Because the future of fashion may not be about producing more.",
      "It may be about producing only what matters."
    ],
  },
  {
    id: "Issue-11",
    category: "Fashion",
    issue: "Issue 11",
    title: "The Met Gala as Cultural Storytelling",
    subtitle: "By: Majul Editorial | Date: 5/4/2026",
    excerpt: "The Met Gala has evolved beyond a traditional red carpet into a space where fashion acts as cultural storytelling. Centered around the 2026 theme of costume art, this piece explores how modern fashion is shifting toward self-expression, using the body as a canvas for identity and meaning.",
    image: "Issue11.jpg",
    readTime: "4 min read",
    quote: "Maybe the real shift is that the Met Gala is not just about what we see, but how it makes us think and feel.",
    body: [
      "When you think of the most historical fashion show ever, what comes to mind? The Met Gala.",
      "Each year, like clockwork, on the first Monday of May, the event delivers a spectacle. Dramatic silhouettes, timeless references, and moments that take over the world with conversation. What and why the stars wear goes beyond simple taste and typical formal attire. It reflects the deeper narrative of the exhibition itself. Every look becomes a part of history, and lives on for decades.",
      "The 2026 theme being 'costume art' feels very in touch with where modern fashion is right now across the globe, deeply rooted in self-expression and the idea of one's body living as a canvas. It reflects a very contemporary approach, where clothing serves purpose beyond function, turning into a conceptual performance.",
      "In many ways, it begs the question of where the line between fashion and art truly lies, and if there even is a line anymore. What makes this theme uniquely exciting is the potential for individuality. Each look becomes a direct reflection of a celebrity's sense of self.",
      "This theme is more than just dressing to impress. It shifts focus towards what each person is trying to say, and the message they choose to convey through their art across one of the most watched red carpets in the world.",
      "That's what makes the Met Gala so special, because are we really watching a fashion show, or are we witnessing a series of personal statements unfold in real time?",
      "I find myself wondering what message I would convey if I were given that same platform. Would I lean into identity, culture, or something more abstract?",
      "As viewers, we're not just looking anymore, we're interpreting, questioning, and connecting. Maybe that's the real shift: the Met Gala isn't just about what we see, but how it makes us think and feel, sparking conversations that continue long after the carpet ends."
    ],
  },
  
  {
    id: "Issue-10",
    category: "Culture",
    issue: "Issue 10",
    title: "When Luxury Gets Looted: The Louvre Heist and the Legal Fragility of Cultural Glamour",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026",
    excerpt: "A high-profile heist at the Louvre exposes more than just a security breach, it reveals a deeper legal fragility at the intersection of luxury, culture, and heritage.",
    image: "Issue10Image.png",
    readTime: "8 min read",
    quote: "The empty display case in the Louvre is a mirror for the brittleness of the laws meant to protect cultural glamour.",
    body: [
      "Paris wakes up on October 2025 to a scenario that is typically only found in movies. A group of robbers broke into the second floor early in the morning and took eight royal jewels that had once belonged to the House of Orléans, including sapphire pendants and diamond tiaras. Their value was believed to be around €88 million (Bennhold, 2025). These were shards of France's cultural essence, not merely indulgences.",
      "The heist, which took place in less than nine minutes, sparked both fascination and indignation. How could the most renowned museum in the world, an establishment created to preserve civilization's treasures, be the site of such a bold loss? However, what it indicates about the law's blind spot is what really shocks people, not the spectacle (Shamin, 2025). A structural weakness is revealed by the Louvre heist: legal protections for luxury frequently vanish into uncertainty when it combines with cultural heritage.",
      "The shortcomings of current institutions for heritage protection, self-insurance, and restitution are exposed by the theft, and this paper explores how these gaps represent a larger ambiguity at the nexus of fashion, art, and national identity (Weaver, 2025). By doing this, it poses a seemingly straightforward query: how is 'luxury' safeguarded as it fades into the past?",
      "The Theft and Its Significance",
      "The Louvre issued a brief press release confirming the theft and claiming an internal breach of security protocols (Shamin, 2025). According to reports, the burglars targeted display cases containing French court jewels from the 19th century and used a digital override to get around alarm systems. The pilfered objects were on display from the French state's history collection on a rotating basis. Notably, some of them were borrowed from the archives of Maison Chaumet, a partnership that honors 'the artistry of French luxury.'",
      "This crime's symbolism was what caused it to have an international resonance. These diamonds, which had once adorned monarchs and had withstood wars, revolutions, and shifting fashions to become beautiful remnants of contemporary luxury, represented not only artistry but also heritage (Scott, 2025). Their loss is both artistic and financial because they were at the intersection of commercial status and cultural heritage.",
      "Legal Vulnerabilities of Cultural Luxury",
      "A. Heritage Protection and the Limits of the Law",
      "In terms of cultural preservation, France is frequently seen as a world leader. The state's obligation to safeguard 'national treasures,' which are items of historical, cultural, or archaeological significance, is enshrined in the Code du patrimoine (Scott, 2025). However, when applied to items that fall in between art and decoration, this classification system becomes brittle, even though it is strong for paintings and monuments.",
      "Jewels, couture items, and fashion archives are examples of luxury objects that rarely fall easily into heritage categories. Their dual status as commodities and cultural symbols makes their legal status more complex, even when they are on exhibit in public facilities. For instance, the cultural heritage law protects the Louvre's collection of arts décoratifs, but it is unclear how to classify works that are borrowed from private maisons such as Chaumet or Cartier. Are they considered commercial products or national treasures if they are stolen?",
      "International frameworks are of limited assistance. Cultural artifacts are protected from cross-border trafficking by the 1970 UNESCO Convention on the Means of Prohibiting and Preventing the Illicit Import, Export, and Transfer of Ownership of Cultural Property, but only if the originating country formally recognizes them as such (Shamin, 2025). This protection does not apply to many luxury goods, particularly those in private collections, which are never properly registered. Although it provides some protections, the European Union's Regulation (EU) 2019/880 on cultural assets nonetheless gives fine art and archaeology precedence over applied arts.",
      "Put differently, cultural luxury exists in a legal indefinite state: too historical to be 'mere merchandise,' too ornamental to be 'heritage.'",
      "B. The Paradox of Insurance",
      "Like many large museums, the Louvre has a state-backed indemnity scheme for self-insurance. This approach shows faith in security protocols and an understanding that many pieces are, in reality, irreplaceable. However, self-insurance assumes the capacity to bear loss, a calculation that breaks down when the ownership and value of the item get muddled.",
      "Chaumet's heritage vault temporarily loaned many stolen pieces during the 2025 robbery. Despite being a part of LVMH, the maison is still a business, and its loan arrangements are based on private insurance plans that are different from state indemnity. This leads to a complex web of overlapping responsibilities: who is responsible for paying if private insurance does not cover damages brought on by governmental carelessness and public indemnification covers the display but not the ownership?",
      "This 'moral hazard of glamour' highlights a more general reality. Spectacle is essential to cultural luxury because things need to be seen to maintain their aura, but being visible also makes one vulnerable. Their risk is increased by the very display of such items, which is necessary for their symbolic use. This paradox has not yet been resolved by legal frameworks.",
      "Furthermore, the valuation of traditional art insurance models is problematic. What is the cultural value of a royal diadem that was previously captured on camera by Richard Avedon or featured in Vogue archives? Nostalgia, status, and communal identity are difficult for the market to measure, yet the law demands a figure on paper.",
      "C. International Ownership and Restitution Issues",
      "The recovery of the stolen jewels would rely on a patchwork of international tools in the event that they resurfaced on the illicit market, possibly dismantled and sold through underground networks. The UNESCO Convention, INTERPOL alerts, and bilateral restitution agreements are all available to France, but the procedure is still difficult, particularly for goods whose provenance trails conflate private and public ownership.",
      "Jewels don't have provenance records or unique serial markings as paintings have. It is possible to melt settings and recut diamonds. Historical items whose stones predate contemporary tracking systems receive minimal help from the Kimberley Process Certification Scheme, which was created to reduce conflict diamonds.",
      "This offers a philosophical and legal conundrum: who has the right to reclaim a cultural artifact that doubles as a luxury good—the country, the company, or the person whose heritage it symbolizes? Is recovering the stolen Chaumet tiara a question of criminal justice, intellectual property, or cultural diplomacy if it turns up at a Swiss auction? Every framework produces a different, incomplete response.",
      "Thus, the heist at the Louvre highlights a gap that international law has not yet addressed between material property and cultural belonging.",
      "Cultural Glamour's Legal Vulnerability",
      "Fundamentally, the Louvre robbery compels an examination of the concept of 'cultural glamour.' These are items whose appeal stems from their embeddedness in popular culture as well as their uniqueness or craftsmanship. A diamond diadem transforms from a decorative piece to a performative symbol of civilization and a storehouse of memory.",
      "However, glamour is not codified like heritage is. It doesn't have any legal validity. The safeguards for fashion, such as copyright, design patents, and trademark legislation, focus on innovation in manufacturing rather than reverence for preservation. An item loses its live aura and is treated by the law as static heritage if it becomes a part of the national identity.",
      "The legal brittleness of luxury's cultural legacy is exposed by this disjunction. Jewelry or fashion enters a jurisdictional void when it transcends its market origin to become a historical emblem. The tangible—fabric, metal, stone—is protected by law, but not the ethereal glitz that gives them life. And it's precisely that glitz that makes these items mythologized and so targets for theft.",
      "In a way, the Louvre heist highlighted a paradox at the core of contemporary luxury rather than merely revealing a security flaw. We perceive it as myth, but we also insure it as property and enshrine it as legacy. The legal system is unable to keep up with the cultural connotations that luxury currently conveys because it is still constrained by ownership and authenticity categories.",
      "Conclusion: When Glamour Becomes Precarious",
      "The theft of €88 million in royal jewels from the Louvre is more than an isolated crime; it is a parable of legal insufficiency. It reveals how the world’s most secure institutions depend on a patchwork of laws unfit for the hybrid realities of cultural luxury.",
      "The legislation needs to change as fashion houses and museums work together more and more, as couture archives become part of public history, and as luxury becomes a language of identity. In order to acknowledge these hybrid objects as shared legacies rather than merely as possessions, future frameworks must incorporate intellectual property, cultural policy, and heritage law.",
      "The empty display case in the Louvre serves as a metaphor for the time being, serving as a mirror that reflects the brittleness of the buildings designed to preserve beauty. Not only do gems disappear when luxury is looted, but the idea that beauty is secure once it is institutionalized also does."
    ],
  },

  {
    id: "Issue-09",
    category: "Trend Analysis",
    issue: "Issue 09",
    title: "Stitches in Time: Legal Protections for Vintage and Archive Fashion",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026",
    excerpt: "Vintage fashion is more than nostalgia, it is a living archive of design, culture, and identity. As rare garments move from closets to museums and resale markets, their value extends beyond aesthetics into questions of ownership, authenticity, and law.",
    image: "Issue09Image.jpg",
    readTime: "5 min read",
    quote: "As the appetite for vintage fashion grows, so too will the importance of legal protections.",
    body: [
      "The Value of the Archive – Why Vintage Collections Matter in Fashion History",
      "Although fashion is frequently characterized as fleeting, its legacy lives on in clothing, accessories, and fabrics with cultural, social, and financial value. Beyond just bringing back fond memories, vintage and historical fashion collections are a priceless resource for researching changes in design, material innovation, and cultural expression. Designers frequently rework historical silhouettes to influence current trends by consulting archives for inspiration. However, archives give organizations and academics concrete proof of fashion's place in larger social histories, ranging from post-war consumer culture to the liberation of women.",
      "These collections have become both commodities and cultural objects as their value has increased. Rare clothing by designers is in high demand among auction houses, private collectors, and museums. Therefore, the legal frameworks controlling ownership, preservation, and commerce are crucial to guaranteeing that vintage clothing is safeguarded as historical records as well as luxury items.",
      "Ownership and Provenance – Establishing Legal Rights over Historic Garments",
      "Ownership of vintage clothing is rarely easy. Establishing legal rights requires an understanding of provenance, or the recorded history of a garment's origin and ownership chain. In the absence of appropriate documentation, disagreements may surface regarding the authenticity, theft, or misattribution of a garment.",
      "Provenance-related legal concerns are similar to those encountered in the art sector. Clothes have been the subject of restitution claims, just like stolen artwork. Items that were stolen during a conflict or purchased without the permission of the creators' estates, for instance, could reappear on the market and raise concerns about who actually owns them. In these situations, courts may use expert authentication, contractual agreements, and documentary evidence to settle disagreements.",
      "Furthermore, fashion houses have been attempting to take more control of their archives by treating old clothing as a component of their brand identity and intellectual property. The moral rights of designers and fashion firms to regulate the way their legacy is exhibited, sold, or changed are still up for debate, even though the law may acknowledge a collector's physical ownership.",
      "Copyright in the Past – How Old Designs Gain or Lose Protection over Time",
      "The majority of fashion designs have historically lacked substantial copyright rights, in contrast to artwork. Clothing is regarded as a functional object in many jurisdictions, which restricts the scope of legal protections. Protections eventually expire in cases where copyright does apply, such as to prints, patterns, or extremely unique designs. When safeguards end, designs become public domain and can be freely reproduced, reinterpreted, or copied. For collectors and designers alike, this expiration has important ramifications. As evidenced by the resurrection of 1990s minimalism, it permits the resuscitation of archival silhouettes. However, fashion houses may find it challenging to stop quick fashion companies from stealing designs from the past without giving credit or payment.",
      "Restoration vs. Alteration – Legal and Ethical Debates in Preserving Vintage Pieces",
      "Vintage clothing's physical state presents challenging issues for alterations and repair. Strict conservation procedures are frequently used by museums in an effort to stabilize clothing without sacrificing authenticity. However, private collectors could have to decide whether to fix, straighten, or modify clothing so that it is wearable. These choices are both morally right and lawful. A garment's authenticity and provenance may be impacted by alteration, which could lower its value or make future ownership claims more difficult. In certain situations, if the clothing is deemed no longer \"original,\" significant alteration may even nullify insurance coverage.",
      "Additionally, for ethical reasons, estates and fashion houses may protest changes. For instance, it may be interpreted as insulting the designer's artistic vision to make changes to a couture gown. Although there are few legal options for enforcing such complaints, the ethical discussions surrounding change draw attention to the conflict between personalizing for one's own enjoyment and preservation for cultural memory.",
      "Museum Loans and Exhibitions – Contracts Behind Showcasing Historic Fashion",
      "Fashion exhibitions have become some of the most popular cultural events in recent years, from the Metropolitan Museum of Art’s Heavenly Bodies to the V&A’s retrospective on Alexander McQueen. Behind these spectacular showcases are complex legal agreements governing loans, insurance, and responsibilities for preservation.",
      "Loan agreements typically specify the conditions under which garments may be transported, displayed, and stored. They address everything from humidity levels to lighting exposure, recognizing that textiles are particularly vulnerable to deterioration. Insurance clauses ensure that lenders are compensated if damage or theft occurs, while indemnity provisions protect institutions from unforeseen liabilities.",
      "In addition, contracts may address intellectual property rights. For example, the use of archival photographs, sketches, or designer logos in exhibition catalogues may require permission from rights holders. These agreements illustrate the intersection of contract law, cultural heritage, and intellectual property in bringing historic fashion to the public.",
      "Resale Market Regulations – Counterfeit Prevention in the Booming Vintage Trade",
      "The explosion of the vintage resale market has created both opportunities and risks. Platforms like The RealReal, Vestiaire Collective, and Grailed have made it easier than ever for consumers to buy and sell archival pieces. However, the market has also been flooded with counterfeits, replicas, and misrepresented garments.",
      "Consumer protection laws, anti-counterfeiting regulations, and platform authentication services all play a role in policing the resale market. Companies often employ in-house experts to verify authenticity, but disputes still arise when buyers discover garments are misrepresented. In such cases, liability may fall on the seller, the platform, or both, depending on contractual terms and local laws.",
      "Governments have also begun scrutinizing resale platforms more closely, recognizing their growing economic impact. As vintage fashion becomes an increasingly lucrative industry, stricter regulation may be needed to protect consumers while ensuring that legitimate sellers can operate fairly.",
      "Conclusion",
      "Vintage and archival fashion sits at the intersection of culture, commerce, and law. The garments themselves are fragile, but the legal frameworks surrounding ownership, preservation, and trade must be strong enough to protect them. From provenance disputes to counterfeiting challenges, fashion law provides essential tools for safeguarding the legacy of design history. At the same time, gaps in protection, particularly in copyright, highlight the need for continued debate about how best to balance creativity, preservation, and access.",
      "As the appetite for vintage fashion grows, so too will the importance of legal protections. Fashion may move quickly, but its history is stitched in time, waiting to be preserved for future generations."
    ],
  },

  {
    id: "Issue-08",
    category: "Case Study",
    issue: "Issue 08",
    title: "Small Signs, Big Stakes: A Case Study of Levi Strauss & Co. v. Brunello Cucinelli USA",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026",
    excerpt: "A tiny denim tab sparks a major legal battle, revealing how even the smallest design details shape power, ownership, and creativity in fashion.",
    image: "Issue08Image.png",
    readTime: "6 min read",
    quote: "In modern fashion law, there is no such thing as a trivial design element.",
    body: [
      "This case study on the 2024 trademark case between Levi Strauss & Co. and Brunello Cucinelli USA offers an excellent lens through which to analyze the dynamic trends in trademark protection in the fashion industry. The center of the conflict is the pocket tab by Levi, a thin rectangular bit of cloth that has been attached to the denim pockets since 1938. The tab, which appears simple, is one of the most unique brand identifiers of Levi and a registered trademark (Reuters, 2024). Levi accuses Brunello Cucinelli, an Italian luxury brand specializing in understated, high-quality clothes, of adding a similar pocket tab on its higher-end trousers in a manner that was likely to confuse the consumer.",
      "Although the case itself can seem a humble matter, a minor textile attachment, the legal issues that the case brings about are not insignificant but rather serious. The case represents larger trends in the area of fashion law: the broadening of non-traditional trademark protection, the ongoing intensification of policing of minimal design elements, and the change in legal standards regarding what is considered to be a source-identifying element in the luxury market.",
      "The Levi pocket tab can be described as an unconventional trademark, a category that includes shapes, colors, configurations, stitching patterns, and other product features that serve as indicators of origin. The protectability of such marks has long existed in the courts, where the acquired distinctiveness of such marks has long been held to be protectable, meaning that consumers have learned to connect the element of design to a specific source.",
      "In the Levi case, decades of consistent use, advertising, and market presence bolster the argument that the tab is not merely decorative. Instead, it serves as an independent representation of authenticity. The argument behind the claim by Levi is based on the fact that the size and location of the tab, as well as the silhouette of the rectangular shape, are all indicative of the brand, despite there being no wordmarks on it as such.",
      "The legal standard of protection of such minimalist features has been slowly decreasing with the change of brands and courts becoming accustomed to an even more logo-averse luxury environment. Using micro-signifiers, the market bestows more communicative authority than conspicuous branding, which consumers now prefer to have, using less conspicuousness. In its turn, Trademark doctrine has also evolved to keep pace with those changes, which means that the brands are now able to interfere with such aspects and have a claim on proprietary rights.",
      "The case of the Levi-Cucinelli dispute also shows how crucial the strategy of trademark enforcement is in the fashion business (Reuters, 2024). Enforcement is not only about remedying confusion between brands, but it is also about exclusivity, discouragement of imitation, and brand integrity. In the case of Levi, the pocket tab has to be heavily patrolled in order to prevent genericide and watering down of the uniqueness of the mark. Their inability to act on such similar uses, especially on the part of the high-visibility luxury brands, might undermine the claim that Levi can have on exclusivity of the tab in any subsequent conflict.",
      "Moreover, old brands frequently litigate minor design elements to signal vigilance to the rest of the market. A tough enforcement stance will make competitors, both the fast-fashion producers and the luxury houses, understand that even the seemingly minor infringements will be met with opposition. It can influence the design behavior throughout the industry by disincentivizing features that are reminiscent of famous brand signatures.",
      "Lastly, violent application is normally used, not to achieve legal cases, but to settle cases. Several fashion trademark cases are settled by secret agreements where the trademark has to be redesigned or licensed on a narrow basis. The deterrent value of the verdict is worth it, not the verdict itself.",
      "Although enforcement can be justified considering the interests of the conventional brands, it can become problematic for other designers starting out with a lack of legal resources. The spread of enforceable non-traditional trademarks reduces the range of vocabulary that can be used in design. Minimalist fashion is increasingly becoming more common, which means that such design elements as tabs, stitching lines, the form of pockets, tags on the fabric, etc., can be subject to an infringement claim.",
      "Small designers usually do not have the ability to sustain expensive litigation, even when their use can be proven legally. Therefore, they can take the initiative of avoiding some forms or positions to reduce the risk of lawsuits. This self-censorship may obstruct creativity and support structural imbalances in the fashion sector, with massive companies having a significant IP portfolio plus the right to impose it violently.",
      "The Levi-Cucinelli example thus represents a conflict between the need to preserve brand identity and the need to have an open arena of creative expression. Designers are forced into a denser, more legally perilous design space as rights get more and more legitimized in courts concerning minor product characteristics.",
      "The Levi case itself can also be included in the larger trends in fashion IP, specifically the rise of the trade dress claims. Trade dress protects the “total image” of a product, including combinations of non-functional design features that, taken together, signal source identity (Reuters, 2024). While Levi’s tab is a registered trademark, disputes of this nature often involve overlapping trade-dress theories.",
      "Courts are, however, also wary of functionality. A design feature cannot be patented in case it plays a fundamental role in the use of the product or it influences the cost or quality of the product. With brands becoming more interested in ensuring that they safeguard minor and occasionally functional aspects, the courts have to strike a balance between the goal to avoid consumer confusion and the desire to avoid creating a monopoly on the common design practices.",
      "Although these are the complexities of the doctrines, the majority of fashion trademark disputes have never seen a trial. The practice of settlement is the rule, fueled by the prohibitive nature of litigation, the uncertainty attached to the evidence of the consumer surveys, and the wish of the luxury brands to keep things under wraps.",
      "The Levi Strauss & Co. v. Brunello Cucinelli USA dispute exemplifies the heightened importance of minimal design features in contemporary trademark law. As the luxury market shifts toward quieter forms of branding and consumers increasingly interpret small details as source identifiers, these elements acquire greater legal and commercial significance.",
      "For legacy brands, the enforcement of such features is central to maintaining heritage, distinctiveness, and market control. For emerging designers, the growing web of protected minimalist marks presents both creative and legal challenges. And for the legal field, the dispute highlights the need to reconsider how trademark and trade dress doctrines apply to fashion as aesthetic conventions evolve.",
      "Ultimately, the case demonstrates that in the current fashion ecosystem, there is no such thing as a trivial design element. The smallest features may hold the greatest legal weight, shaping not only brand identity but also the broader boundaries of creativity within the industry."
    ],
  },

  {
    id: "Issue-07",
    category: "Ethical",
    issue: "Issue 07",
    title: "Sustainable Fashion, Is It Even Possible?",
    subtitle: "By: Julie Reginato | Date: 3/29/2026",
    excerpt: "For decades the fashion world has thrived on constant renewal. New aesthetics, revived eras, and microtrends cycling faster than the seasons themselves. But beneath the surface of this constant evolution lies a silent but pressing matter. Sustainability in fashion is no longer a niche conversation. It has become a necessary response to an industry built on speed, excess, and disposability.",
    image: "Issue07Image.jpeg",
    readTime: "5 min read",
    quote: "Sustainability doesn’t mean being perfect. It just means being a little more conscious and letting that awareness shape the way we engage with fashion over time.",
    body: [
      "For decades the fashion world has thrived on constant renewal. New aesthetics, revived eras, and microtrends cycling faster than the seasons themselves. But beneath the surface of this constant evolution lies a silent but pressing matter. Sustainability in fashion is no longer a niche conversation. It has become a necessary response to an industry built on speed, excess, and disposability.",
      "As someone who’s passionate about exploring the science behind fashion, I’ve started to see the industry through a different lens. It’s no longer only about how something looks or how it fits into the trend cycle, but about everything that happens before it reaches us. The materials, the production, the number of people involved behind the scenes. It all amounts in ways that we don’t often notice or think about.",
      "According to the Geneva Environment Network, the fashion industry is responsible for significant environmental impacts, including major water consumption and contributing close to 10% of global carbon emissions. What once existed as idealized creative space now sits at the center of a growing environmental crisis.",
      "Fast fashion has been known to come at a huge environmental and social cost. With approximately 60% of all materials being made from plastic, the majority of the clothing we wear is directly connected to pollution and long-term environmental damage. (UNEP, 2019).",
      "But sustainability isn’t just about environmental damage. It’s about the systems behind them as well.",
      "The Forbes Technology Council highlights that sustainability in fashion incorporates systems like: ethical labor practices, supply chain transparency, and the use of technology to improve production while reducing waste. Behind every single article of clothing is a network of workers, materials, and decisions, all of which remain invisible to the consumer. The incorporation of sustainability within the fashion industry forces that visibility. It asks brands to take accountability not just for the final product, but for every step behind it.",
      "This up and coming shift is redefining what ‘value’ means in fashion. It is no longer enough for a piece to be visually compelling, it must also be consciously made. Since fashion has always been about ‘newness’ and ‘new eras’ sustainability challenges this idea by encouraging longevity over novelty. It asks consumers to slow down in a space that has historically rewarded speed.",
      "This contradiction is where the conversation becomes most interesting.",
      "Sustainability doesn’t mean the end of creativity, it just demands a more thoughtful version of it. Designers are now working within constraints, reimagining what can be done with fewer resources. Limitation acting as a catalyst for innovation.",
      "While this sustainable fashion conversation can feel heavy, the light is starting to show at the end of the tunnel. More people are rethinking how they shop and what they do with clothes they no longer wear. Stores like Value Village, Goodwill Industries International, and Plato’s Closet have made it easier to give clothing a second life.",
      "With thrifting turning into a trend, it isn’t just about saving money. It’s about slowing down, finding pieces that feel unique, and stepping outside of the constant pressure to keep up with trends. It changes the way you interact with fashion, making it feel more personal and less disposable.",
      "So where do we fit into all of this? Honestly. It doesn’t have to be overwhelming. Small changes actually matter more than we think. Shopping second-hand when you can, re-wearing pieces you already own, being a bit more intentional before buying something new are all ways to be part of the shift. Even just being aware of where your clothes come from is a step in the right direction.",
      "Sustainability doesn’t mean being perfect. It just means being a little more conscious and letting that awareness shape the way we engage with fashion over time."
    ],
  },

  {
    id: "Issue-06",
    category: "Culture",
    issue: "Issue 06",
    title: "Does Originality Even Matter Anymore? Nostalgia, Revival Culture, and the Limits of Fashion Law",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where autor and date go
    excerpt: "Originality in fashion is increasingly less about invention than reinterpretation, as revival culture turns past aesthetics into present currency and exposes the gap between legal definitions of originality and the industry’s recursive creative reality.",
    image: "Issue06Image.png",
    readTime: "6 min read",
    quote: "Everything that is new is actually an ingenious reworking of the already present",
    body: [
  "Plaid is back. Zebra print is back. Capri pants, thinner eyebrows, Y2K mini-bags, and even a Devil Wears Prada re-sequel are back. The 2025 fashion is a rebranded version of the same deja vu, the same cycle of aesthetic referrals and reminiscences. But as the runways, social feeds, and resale markets are dominated by nostalgia, it reveals a bigger legal and philosophical dilemma: what, in the eyes of the law, is considered originality?",
  "The article investigates the ways in which intellectual property principles, copyright, trade dress, and design protection find it difficult to survive in the era where newness is merely recontextualized memory (Hogan, 2024). Fashion is cyclical, but the pace and overload of the revival culture raises a more difficult question than ever: whether creativity can be safeguarded when creativity is founded on reproduction",
  "I. The Legal Problem: Fashion Has a Recycling Habit, the Law Isn’t Built For",
  "Fashion law encourages originality. Copyright involves original expression. Trade dress requires uniqueness. Design patents have novelty and non-obviousness. However, the fashion world lives by imitation. The trends recur every 20 years; silhouettes are reused with slight modifications, and complete collections are created from archives.",
  "In 2022, Fendi reused its ruffles from the 2000s. The 2025 Heaven campaign of Marc Jacobs was a direct pull from the film Thirteen. The Y2K resurgence has made low-rise denim and baby tees, which were viewed as outdated, the new bestsellers (Chokrane, 2025). Designers are not rewarded for creating new visual languages, but for reviving old ones and rebranding them with modern styling.",
  "This does not align with fashion law, which presupposes a sharp distinction between inspiration and imitation. Should a plaid pattern of 1997 be recycled on the runway in 2025, can it be considered original again? In case zebra print comes back after every ten years, who is the one to boast of uniqueness (Sarac, 2025)? Would it be protectable in law when what makes something appealing is that it is recognizable? The answers to the current legal doctrine do not align well with the creative reality of the industry.",
  "II. The Myth of Originality: Why Fashion Is Built on Recombination",
  "We pretend originality is a sacred currency, an individual genius moment, lightning pulled from the void. But that myth collapses under scrutiny. Shakespeare borrowed plots. Picasso borrowed aesthetics. Steve Jobs borrowed Xerox’s interface. TikTok culture is built on remixes of remixes.",
  "Everything that is new is actually an ingenious reworking of the already present.",
  "This is more so when it comes to fashion. Designers do not create out of nothing; they draw upon archives, films, subcultures, world references, and previous decades. Even the most celebrated of the original fashion events, such as bumsters by McQueen, deconstruction by Margiela, and historical couture by Galliano, were all based on recombination (Chawla, 2025).",
  "The industry knows this. Consumers know this. The law only feigns the opposite.",
  "IIII. The Revival Culture: The Surge - Why the 2020s Are More Referential Than Ever.",
  "The 2020s are more referential than ever, shaped by a cultural landscape where Hollywood’s business model depends on constantly recycling IP, and every week brings a reboot, remake, or prequel. Fashion is a direct reflection of this atmosphere, drawing inspiration from movies, catwalks, and celebrity images that collectively form a shared visual memory. Platforms now reward instant recognition; the faster something is read and referenced, the faster it spreads, making nostalgic aesthetics powerful precisely because they are legible at a glance. In an economy where creativity feels risky and nostalgia feels safe, reissued handbags and revived collections succeed because they come with built-in emotional appeal, often overriding the limited legal protections around them. Algorithms further amplify what resembles past successes, revising a default rather than a deviation from it. The result is a fashion environment in which the new is, in truth, what we have simply remembered.",
  "IV. The Law Tension: When It All Becomes a Reference, What?",
  "When a microbrand puts up a Y2K-inspired zebra mini-skirt, does it infringe on a print created in the 1990s? By doing the Baguette the fifth time, will it be a revival or a legal move of trying to revive the individuality (Chawla, 2025)? The legislation assumes linear creative development; fashion is recursive. It loops, mutates, and revives. The same silhouette of 2001 may be new again in 2025, just because culture has changed around it. However, judicial bodies find it difficult to deal with designs whose market value is based on being familiar, even anticipated.",
  "V. Does Originality Even Sell? Probably Not--But Meaning Does.",
  "Cultural exhaustion of nostalgia. Gen Z is making a growing joke that our generation has no aesthetic since there is nothing but a reference. But viewers prefer the already known. It is emotionally safe, economically predictable and algorithmically enhanced. Consumers do not desire originality, but they desire recognition in the form of innovation.",
  "Legally, this crowds out even the very works of which copyright doctrine is supposed to protect: daring, innovative designs. Nonetheless, the word unprecedented hardly became viral.",
  "\"Newness\" in the conventional sense is not necessary for fashion. It requires creativity, the capacity to reassemble, reinterpret, and revitalize in ways that are relevant today. However, the legal system still upholds a definition of originality that is out of step with how artists operate and how culture is consumed.",
  "Whether fashion law can transition from safeguarding originality to safeguarding significant reinterpretation will determine its future, as the objective is to perceive differently rather than to be first in a world based on references.",
  "And genuine creativity resides there."
  ],
  },

 {
    id: "Issue-05",
    category: "Culture",
    issue: "Issue 05",
    title: "The Rise of Conservative Aesthetics on the Runway",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where areticle author and date goes
    excerpt: "As luxury fashion turns toward restraint and “respectability,” the runway becomes more than an aesthetic space, it becomes a site of power. This piece examines how the rise of quiet luxury and conservative silhouettes reflects deeper cultural shifts, revealing how fashion not only mirrors social hierarchies but actively reinforces them through ideals of discipline, professionalism, and belonging.",
    image: "Issue05Image.png",
    readTime: "6 min read",
    quote: "Fashion is never apolitical; it encodes and enforces norms about whose bodies and identities belong",
    body: [
      "Luxury fashion has in recent seasons turned in the direction of restraint. Miu Miu, Prada, The Row, and Bottega Veneta are redefining glamour with longer hemlines, sleek contours, and muted colors. What started as a fashion change, such as quiet luxury, office-core and old money dressing, has become a cultural choice. This is evidenced by the fact that luxury has remained silent not due to fashion being devoid of creativity but because society was tired of being noisy (Stiegman, 2024). Beneath the surface of minimalism lies a deeper longing for structure, discipline, and the familiar order of respectability.",
  
     "Fashion’s current embrace of conservatism can be read as both rebellion and regression. On the one hand, it rejects the quick, ostentatious, and algorithmic in order to oppose the attention economy. Conversely, it resurrects gender- and class-based structures. The old money look, which was made popular by social media in 2023, subtly rebrands inherited wealth as classic style, aestheticizing status. It signals a nostalgic return to pre-digital elegance, where fashion once more becomes a language of exclusion (Chen, 2025), and reflects a broader reaffirmation of conservative standards across workplaces, institutions, and everyday life.",
  
     "Runways that used to be full of Y2K glitter and influencer extravagance now offer a muted palette and tailoring. Miu Miu pleated skirts bring to mind mid-century office style, while the grey wools and leather gloves of Prada suggest discipline and restraint. Quiet luxury emphasizes craftsmanship over logos, creating exclusivity through invisibility. In this context, restraint itself becomes a form of status.",
  
     "Although often interpreted as harmless chic, the resurgence of respectable dressing carries deeper implications. Angela McRobbie (2013) reminds us that fashion is never apolitical; it encodes and enforces norms about whose bodies and identities belong. By restoring the codes of conventional professionalism—modesty, homogeneity, and gender distinction—fashion actively establishes new standards of conformity.",
  
     "II. The Politics of Respectability, Law, and Dress Codes",
  
     "The conservative aesthetic on the runway parallels the return of respectability within workplace regulation and legal frameworks. Corporate dress codes have long functioned as tools of discipline, shaping how individuals present their culture, gender, and class. While fashion industries romanticize professional attire, many employees continue to experience its restrictive consequences.",
  
     "The current conservatism of fashion may be interpreted as both subversion and retrogression. It resists the attention economy while simultaneously reinforcing class and gender hierarchies. The aesthetic of old money popularized by social media aestheticizes privilege by presenting inherited wealth as understated elegance rather than outdated excess (Chen, 2025).",
  
     "Workplace clothing regulations frequently intersect with gender and race discrimination, particularly affecting women and gender-diverse individuals. Legal scholarship and cases such as EEOC v. Catastrophe Management Solutions (2016) illustrate how professionalism can operate as a tool of racialized control. The ideal of the neutral professional body—white, cisgender, and upper-class—is subtly reinforced by the quiet luxury aesthetic rooted in Eurocentric minimalism.",
  
      "From a legal perspective, clothing exists in a grey area between expression and regulation. While laws such as Title VII of the U.S. Civil Rights Act and the Canadian Human Rights Act prohibit discrimination, they do not clearly address how these protections apply to dress. Legal tensions continue to surface, particularly in disputes over gendered uniforms, as seen in policy changes like British Airways allowing non-binary presentations in 2023.",
  
     "The legal reality reveals a contradiction: what is celebrated as elegance on the runway often translates into restriction within the workplace. Luxury fashion’s portrayal of refined discipline echoes systems that continue to regulate bodies under the guise of professionalism.",
  
     "III. Conservatism's Commodification",
  
      "Beyond labor and legal frameworks, the commodification of conservative fashion raises questions of intellectual property and cultural ownership. The line between cultural appreciation and appropriation becomes blurred when classic silhouettes—pencil skirts, blazers, and modest cuts—are rebranded as luxury goods.",
  
     "Designers from modest fashion communities have observed that Western brands frequently reinterpret modesty as minimalism, stripping it of its cultural and religious origins. As Hafsa Lodi (2023) noted, features labeled as quiet luxury by major fashion houses may already exist as traditional expressions within other cultural contexts. This disparity highlights how intellectual property systems privilege Western creators while overlooking cultural innovators.",
  
     "Fashion law, primarily governed by copyright, trademarks, and trade dress, tends to protect brand identity rather than silhouettes or concepts. As a result, traditional aesthetics rooted in historical, religious, or working-class traditions can be commercialized without recognition or compensation. This creates a paradox in which conservatism, once associated with constraint, becomes a site of luxury innovation.",
  
     "This dynamic reveals that quiet luxury is not only an aesthetic but also a legal and cultural construct shaped by power. The ability to define and profit from restraint is closely tied to ownership and exclusionary systems (Chen, 2025).",
  
     "IV. Creating Identity and Legality",
  
     "The return of conservative aesthetics prompts a broader reflection on how fashion shapes societal norms and legal consciousness. By embracing long skirts, subdued palettes, and disciplined silhouettes, luxury fashion engages in cultural signaling that extends beyond style. It reflects a society negotiating tensions between visibility, identity, and control.",
  
     "At a time when diversity and self-expression remain contested, the promotion of restraint reinforces values of self-discipline and tradition. The resurgence of conservatism in fashion mirrors parallel shifts within legal and social structures, where respectability continues to shape perceptions of legitimacy and belonging.",
  
     "However, this shift also opens space for reinterpretation. Designers such as Grace Wales Bonner and Peter Do combine structure with subversion, redefining conservatism through inclusion. Their work demonstrates that structure can function as empowerment rather than restriction.",
  
     "The challenge for fashion law is to move beyond treating clothing solely as commercial property and to recognize it as a medium of personal and collective expression. Fashion operates at the intersection of visibility, identity, and self-worth—domains that legal systems both reflect and regulate."
  ],
  },
  {
    id: "Issue-04",
    category: "trend analysis",
    issue: "Issue 04",
    title: "The Rise of Counterfeit Culture: Fashion Law’s Ongoing Battle Against Knockoffs",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where author and date goes
    excerpt: "As counterfeit fashion floods digital marketplaces, the law struggles to keep pace with an industry built on speed, imitation, and global circulation. This piece explores how fashion law operates at the intersection of creativity and control, revealing the limits of intellectual property in protecting design, the growing responsibility of online platforms, and the ethical stakes behind what we wear.",
    image: "Issue04Image.png",
    readTime: "5 min read",
    quote: "Clothes occupy a grey area between speech and conduct, regulated enough to control, expressive enough to contest",
    body: [
     "The fashion business, centered on exclusivity, originality, and image, has long been a prime target for counterfeiting. From fake Louis Vuitton handbags sold on sidewalks to near-identical replicas of high-end sneakers flooding online marketplaces, counterfeit goods have evolved into a multi-billion-dollar global enterprise. A 2019 OECD survey states that over 60% of all counterfeit products seized worldwide are fashion items. How legal systems can keep up with the speed and scope of copycat culture in the internet age presents a unique challenge for fashion law.",
  
      "The interdisciplinary field of fashion law, which spans intellectual property, consumer protection, contract law, and international trade, has made progress in addressing counterfeit goods, yet enforcement remains difficult. Trademark law continues to be the most widely used legal tool for protecting brands, but it is often insufficient. The protection of designs, particularly clothing and accessories, is notoriously difficult, especially in jurisdictions with limited or slow-moving design patent or copyright systems.",
  
     "The online marketplace has become a central battleground. Platforms such as Instagram, Alibaba, and Amazon serve as major hubs for counterfeit goods. Although these companies attempt to monitor listings and remove infringing products, enforcement becomes a legal whack-a-mole due to the sheer volume of uploads and the adaptability of counterfeiters. Legislative efforts such as the 2020 U.S. SHOP SAFE Act aim to hold platforms more accountable through proactive screening and seller verification, though critics argue this could burden smaller sellers and legitimate resellers.",
  
     "The speed of fashion cycles further complicates enforcement. By the time a designer identifies a knockoff and initiates legal action, the trend may have already passed, leaving limited remedies and potential reputational harm. This disproportionately affects emerging designers, who often lack the financial and legal resources to protect their work, while larger fashion houses maintain a significant advantage through in-house legal teams.",
      
     "Not all imitation is illegal. Fashion thrives on reference and reinvention, blurring the line between inspiration and infringement. Brands such as Zara and Fashion Nova often operate within legal boundaries when producing affordable versions of high-end designs. Unless a trademark or registered design is clearly copied, the law frequently does not favor original creators. This ambiguity has led to calls for stronger design protections, particularly in countries like the United States, where unregistered fashion designs lack comprehensive legal coverage.",
  
     "In response, brands are turning toward technological solutions. Smart tags, blockchain-based supply chains, and digital authentication systems are being used to track products and verify authenticity. Consumer education campaigns are also playing a role, highlighting the ethical and legal consequences of purchasing counterfeit goods and aiming to reduce demand.",
  
      "The fight against counterfeiting extends beyond brand protection. It encompasses design integrity, consumer trust, and broader concerns such as labor rights and environmental impact. The unchecked production of counterfeit goods is often associated with exploitative labor practices and environmental harm, placing fashion law at the intersection of ethics, commerce, and creativity.",
  
     "As the fashion industry continues to evolve within a global, digital-first economy, the need for proactive, adaptable, and internationally coordinated legal frameworks becomes increasingly urgent. To preserve both the integrity of the industry and its creative output, fashion law must evolve alongside it."
  ],
  },
  {
    id: "Issue-03",
    category: "Ethical",
    issue: "Issue 03",
    title: "What a Devil Wears Now: Fashion Law, Power, and Ethics in a Sequel Era",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where author and date goes
    excerpt: "Released in 2006, The Devil Wears Prada depicted the fashion industry as a glamorous yet unforgiving environment defined by strict, image-focused authority. Nearly twenty years later, legal, social, and technological shifts have transformed the landscape.",
    image: "Issue03Image.png",
    readTime: "3 min read",
    quote: "A contemporary \"Devil\" must navigate these evolving legal and ethical demands alongside traditional notions of glamour.",
    body: [
     "Released in 2006, The Devil Wears Prada depicted the fashion industry as a glamorous yet unforgiving environment defined by strict, image-focused authority. Nearly twenty years later, legal, social, and technological shifts have transformed the landscape. The new sequel revisits the high-fashion world, now pressured by modern concerns such as labor law, intellectual property, digital ethics, sustainability, and AI regulation. A contemporary “Devil” must navigate these evolving legal and ethical demands alongside traditional notions of glamour.",
  
     "The once-authoritative figures, like Miranda Priestly, may not align with today's legal and cultural standards. Workplace policies now emphasize respect for workers' rights, equity, and dignity. For example, Canadian law, such as the Pay Equity Act, requires federally regulated employers to ensure that jobs predominantly done by women are compensated equally to those predominantly done by men. Employers are also increasingly required to have harassment and violence-prevention policies, conduct fair investigations into complaints, and provide training and clear resolution procedures. When creating a dress code or “corporate image” requirements, the Ontario Human Rights Commission emphasizes that such policies should not have a discriminatory impact based on gender, gender identity/expression, or other grounds of protection.",
  
      "A fashion-industry “Devil” today has to work under a legal framework where workplace equity, diversity, and respect are highly expected, a reality in sharp contrast with the old-school, because-I-said-so model of fashion leadership. A sequel that acknowledges this shift could explore how power relations, authority, and managerial style have been reformed under the law and social pressure.",
  
     "The safeguarding of creative design is one of the most thorny legal issues in fashion, both historically and today. Traditionally, the utility of clothes and other fashion products has meant that many jurisdictions have denied them the same copyright or design protection granted to other artistic works. Since fashion designs are useful articles, critics note that they typically fall outside the scope of copyright protection under most copyright laws.",
  
      "An example of this is in Canada, where the Copyright Act does not automatically grant protection to all new designs of apparel; copyright mainly safeguards original works, which generally excludes designs whose primary value is utilitarian. Although some protections exist through industrial or design-specific laws, like the Industrial Design Act, this protection applies only when the design is properly registered. This legal gap disadvantages independent or small designers who, due to a lack of resources, may be unable to register their designs or enforce their rights against fast-fashion companies that replicate and mass-produce their work.",
  
     "This structural imbalance raises questions about the conflict between creativity, commercial scale, and legal safeguarding, as well as the vulnerability of small designers. It also challenges whether fashion houses can or should be held accountable under intellectual property law for copying practices that may be ethically questionable but legally permissible.",
  
     "Technological transformation, particularly the emergence of generative AI, has reshaped the meaning of creating and copying fashion since 2006. However, the law has been slow to adapt. AI-generated designs are often trained on massive datasets of pre-existing works, some of which are still protected by copyright, raising questions about originality and ownership.",
  
      "The dilemma is clear: if AI-created fashion is too derivative of prior work, it may violate reproduction rights; if it is modified by humans, it may claim originality. This creates further concerns around ethics and transparency, including who owns the output and who is liable if AI reproduces culturally significant or protected designs from opaque training data.",
      
     "Existing intellectual property regimes were largely developed before the rise of AI and often lack clear provisions for authorship or attribution in this context. A contemporary sequel could explore these tensions through narratives centered on authenticity, ownership, and creative credit in a world where algorithmic design competes with human creativity.",
  
      "Ultimately, a modern reinterpretation of The Devil Wears Prada would not only revisit fashion’s aesthetic world but also engage with the legal and ethical complexities shaping the industry today, where power, creativity, and accountability intersect under evolving frameworks of law and technology."
  ],
  },
  {
    id: "Issue-02",
    category: "Emotion",
    issue: "Issue 02",
    title: "Fashion as Emotional Diplomacy: How Wardrobes Convey Empathy and Accessibility on the World Stage",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where author and date goes
    excerpt: "What we wear does more than just reflect style, it communicates. This piece explores fashion as emotional diplomacy, where clothing shapes perception, signals empathy, and connects people beyond language. From iconic figures to modern leaders, style becomes a quiet but powerful form of influence.",
    image: "Issue02Image.png",
    readTime: "4 min read",
    quote: "Fashion is no longer only about style but also a psychological tool that can help people feel attached, warm, and approachable.",
    body: [
      "In international relations, words and treaties often dominate discussions of diplomacy. Yet, another subtle form of communication wields equal power: the language of clothing. It is no secret to political figures and first ladies that fashion is no longer only about style but also a psychological tool that can help people feel attached, warm, and approachable, where rhetoric is not always able to accomplish the intended effect.",
  
      "One of the most iconic examples of this is Jacqueline Kennedy. In the remaining parts of the world, following the tragedy of the assassination of President John F. Kennedy, the limelight was on the First Lady. Kennedy wore an Oleg Cassini pillbox hat and corresponding coat during her visit to Paris in 1961 which projected connotations of elegance, charm, and tranquility amidst the tensions of the Cold War and also the personal defeat of the American president (Wright, 2016). Not only did her dresses reflect the fashion of those days, but they also served as a means of emotional attachment, meaning that she was stable, graceful, and approachable to her country.",
  
      "Kennedy was not only able to make a fashion impact on clothing but also on accessories, the most popular being the handbag that would be named after her, the Gucci Jackie bag. Invented in the 1960s and popularized by the easy use of the bag by Kennedy when she appeared in public, it was a symbol of discreet sophistication and initial style (Kim, 2024). Unlike ostentatious designer items, the Gucci Jackie was functional, polished, and timeless, a true reflection of Kennedy’s persona that made power feel accessible and relatable. The bag’s continued popularity demonstrates how a single accessory can carry emotional resonance decades later, signaling style, tact, and human connection without words (Kim, 2024).",
  
     "This legacy of emotional diplomacy has been carried on by Jill Biden decades later, in the form of her clothes. Wearing sets of accessible American designers on state visits and diplomatic missions, she sends the message of inclusivity and relatability and reminds the international audience that American leadership is rooted in accessibility and mutual values (Lakritz, 2022). Indicatively, in the presence of foreign dignitaries, her choice of practical but graceful outfits, which are carefully selected to be comfortable, in harmony with colors, and culturally sensitive, reaffirms an image of openness without the necessity of proclamation.",
  
     "Most remarkably, at the 2022 State of the Union, Jill Biden was wearing an indigo satin gown, designed as a midi-length dress by an American designer, Sally LaPointe, with a sunflower embroidered on the right sleeve (Lakritz, 2022). The national flower of Ukraine, the sunflower, had also become an icon of defiance since the invasion by Russia. With such a minor detail, the First Lady was able to convey her unity and compassion toward the Ukrainian people, transforming her wardrobe into an instrument of emotional diplomacy without uttering a word publicly (Lakritz, 2022).",
  
     "The rationale of such a wardrobe is in the sphere of psychology. Clothing can be an emotional trigger, a cue or a way to form perceptions that words cannot sometimes achieve. Pastel colors, cozy materials, and recognizable silhouettes may present the feeling of coziness and reliability, whereas custom-made silhouettes and plain designs relate to competence and esteem (Hagan, 2025). These decisions are frequently calculated, tactical, and subtle, tailored to a certain degree to appeal logically to other leaders and emotionally to the audience around the world (Hagan, 2025).",
      
     "In addition to personal style, fashion in diplomacy is a non-verbal medium of communication, especially when one is confused or faced with tension. The light color scheme of a First Lady in a delicate negotiation or the carefully chosen outfit of a humanitarian visit can help soften the political lines and make human figures appear closer and relatable, who they otherwise might have been considered as being in a different world. In this respect, fashion is like emotional intelligence, a way of crossing cultural boundaries and creating goodwill without the need to politicize (Ferere, 2025).",
  
     "A larger fact that this kind of diplomacy brings to light is that international relations are not done with the help of treaties or speeches alone. Each visual cue counts, and wardrobes are among the fastest and most ubiquitous means of expression of intent and feeling. Using fashion as a means of expression of emotion, the leaders and their allies may convey the feeling of empathy, solidarity, and respect, affecting the perception of the community and the mood in the environment where diplomatic negotiations should take place.",
  
     "From the diplomacy of Jackie Kennedy in Paris to the approachable grace of Jill Biden in modern global interactions, the development of fashion as emotional diplomacy is that style is not simply stylish but a firm but gentle tool of soft power in the international arena."
  ],
  },
  {
    id: "Issue-01",
    category: "Fashion",
    issue: "Issue 01",
    title: "The Jurisprudence of Color Ownership in Fashion, Trademark Law, and the Boundaries of Color Protection.",
    subtitle: "By: Mahek Dharamsi | Date: 3/29/2026", //this is where author and date goes
    excerpt: "From Hermès orange to Tiffany & Co. blue and Christian Louboutin red soles, color in fashion operates as both identity and power. This piece explores how trademark law attempts to regulate that power, balancing brand ownership with creative freedom, while asking a deeper question: can something as culturally embedded as color ever truly belong to one entity?",
    image: "Issue01Image.png",
    readTime: "7 min read",
    quote: "The law walks a fine line: it allows fashion houses to leverage chromatic exclusivity while resisting the temptation to privatize the spectrum itself",
    body: [
     "Fashion is about the narrative a piece conveys, not just about the fabric or cuts. There is a particular weight to color. Hermès' orange boxes evoke heritage leather goods, Tiffany’s blue signals luxury and jewelry, and the red soles of Louboutin shoes communicate status instantly. The difficult legal question is whether a company can truly claim a color as its own. Courts must balance protecting brand identity with preserving creative freedom (Scafidi 2005; Kawamura 2018).",
  
      "Trademark law provides the primary framework for addressing this issue, focusing on protecting symbols that identify the source of goods. However, color marks reveal tension between safeguarding brand value and ensuring that competition and innovation are not restricted.",
  
      "This article examines how trademark law approaches the ownership of color in fashion. It begins with foundational legal principles, then turns to key court cases shaping modern doctrine, and concludes with broader debates about fairness, cultural ownership, and international differences. Ultimately, trademark law operates as a double-edged system, enabling brand identity while preserving shared cultural expression (Scafidi 2005; Kawamura 2018).",
      
     "II. The Legal Framework of Color Trademarks",
  
     "Trademark law generally allows registration of words, logos, and symbols that identify product origin. Colors, however, require proof of “secondary meaning,” meaning consumers associate a specific color with a single brand. Under the U.S. Lanham Act, a color is not inherently distinctive; companies must demonstrate that consumers uniquely link that hue to their goods (Scafidi 2005; Thomas 2019).",
  
      "Another constraint is the functionality doctrine. If granting exclusive rights to a color would disadvantage competitors, the color cannot be trademarked. For example, allowing a single manufacturer to monopolize black for outboard motors would be unfair, as black serves practical and aesthetic functions beyond branding (Scafidi 2005).",
  
     "III. Case Studies in Fashion Color Ownership",
  
      "A. Qualitex Co. v. Jacobson Products Co.",
  
     "In Qualitex (1995), the U.S. Supreme Court confirmed that a single color can be trademarked if it has acquired secondary meaning and is not functional. The case involved a green-gold shade used on dry-cleaning press pads, which consumers had come to associate with the brand. The Court held that color should not be treated differently from other trademark forms.",
  
     "B. Christian Louboutin v. Yves Saint Laurent",
   
     "The Louboutin case tested the limits of color protection in fashion. The brand argued that its red soles were a recognizable trademark. The court ruled in its favor only when the red sole contrasted with the rest of the shoe. Fully red shoes did not qualify. This decision illustrates the balance courts maintain between protecting brand identity and preventing overreach.",
  
     "IV. The Jurisprudential Debate: Can a Color Belong to One Entity?",
  
     "Legal scholars question whether granting ownership of color undermines the shared cultural domain. Protection can prevent consumer confusion and reward brand investment, but excessive protection risks “color depletion,” limiting the availability of basic hues for designers.",
  
     "Color in fashion carries aesthetic, cultural, and emotional meaning beyond source identification. The legal distinction between functional and symbolic use reveals a deeper tension: whether courts should allow private ownership of something embedded in collective cultural expression.",
  
     "V. International Perspectives and Divergence",
  
     "Approaches to color trademarks vary globally. The European Union permits color marks but requires precise graphical representation, often through Pantone codes. Canada also requires distinctiveness but remains cautious where colors may be functional or overly broad. Jurisdictions such as Japan and China increasingly recognize color marks, though enforcement remains inconsistent.",
  
     "These differences complicate global fashion branding. A color protected in one jurisdiction may remain unprotected elsewhere, creating legal uncertainty in international markets.",
  
     "VI. The Limits of Chromatic Protection",
  
     "Legal systems impose limits to prevent monopolization of color. The functionality doctrine ensures practical or widely needed colors remain available. Courts also enforce strict distinctiveness requirements, granting protection only when strong consumer association exists.",
      
     "Other forms of intellectual property, such as design patents and copyright, offer temporary protection for aesthetic features without permanently restricting access. Concerns over color depletion remain central, as excessive privatization could restrict the creative palette available to designers.",
  
     "VII. Conclusion",

    "The legal treatment of color in fashion reflects both the flexibility and restraint of trademark law. Courts recognize the commercial and symbolic value of color while maintaining safeguards to preserve competition and cultural accessibility. Trademark law ultimately balances exclusivity and openness, allowing brands to claim identity without privatizing the full spectrum."
  ],
  },
];

// ╔══════════════════════════════════════════════════════════════╗
// ║            END OF WEEKLY UPDATE ZONE                        ║
// ║  Do not edit below this line unless changing site structure  ║
// ╚══════════════════════════════════════════════════════════════╝


// ── APPLY CONFIG TO DOM ──────────────────────────────────────────
function applyConfig() {
  document.querySelector('.hero-headline').innerHTML = HERO.headline;
  document.querySelector('.hero-body').textContent = HERO.body;
  document.querySelector('#hero .label').textContent = HERO.eyebrow;

  const heroWrap = document.querySelector('.hero-image-wrap');
  heroWrap.setAttribute('data-article-id', HERO.heroArticleId);
  heroWrap.onclick = () => openArticle(HERO.heroArticleId);
  heroWrap.querySelector('img').src = HERO.heroImage;
  heroWrap.querySelector('.hero-image-badge').textContent = HERO.heroBadge;

  const featuredArticle = articles.find(a => a.id === FEATURED.featuredId);
  if (featuredArticle) {
    const fc = document.querySelector('.featured-card');
    fc.onclick = () => openArticle(FEATURED.featuredId);
    fc.querySelector('.featured-image-wrap img').src = featuredArticle.image;
    fc.querySelector('.featured-image-wrap img').alt = featuredArticle.title;
    fc.querySelector('.featured-meta').innerHTML =`<span class="label">${featuredArticle.issue}</span><span class="label">${featuredArticle.readTime}</span>`;
    fc.querySelector('.featured-title').textContent = featuredArticle.title;
    fc.querySelector('.featured-subtitle').textContent = featuredArticle.subtitle;
    fc.querySelector('#featured-excerpt-text').textContent = featuredArticle.excerpt;
    fc.querySelector('.read-btn').onclick = (e) => { e.stopPropagation(); openArticle(FEATURED.featuredId); };
    fc.querySelector('.editor-note-text').textContent = FEATURED.editorNote;
  }
  document.querySelector('.section-desc').textContent = FEATURED.sectionDesc;

  document.querySelector('.footer-tagline').textContent = SITE_CONFIG.footerTagline;
  document.querySelector('.footer-desc').textContent = SITE_CONFIG.footerDesc;
  document.querySelector('footer a.footer-icon-btn').href = SITE_CONFIG.instagramUrl;
}


// ── RENDER ARTICLE CARDS ─────────────────────────────────────────
function renderCards(list) {
  const grid = document.getElementById('articles-grid');
  if (!list.length) {
    grid.innerHTML = '<p class="no-results">No articles found.</p>';
    return;
  }
  grid.innerHTML = list.map(a => `
    <article class="article-card" onclick="openArticle('${a.id}')">
      <div class="card-img-wrap">
        <img src="${a.image}" alt="${a.title}" loading="lazy" />
        <div class="card-img-overlay"></div>
        <span class="card-cat-badge">${a.category}</span>
      </div>
      <div class="card-content">
        <div class="card-meta">
          <span>${a.issue}</span>
          <span>${a.readTime}</span>
        </div>
        <h3 class="card-title">${a.title}</h3>
        <p class="card-subtitle">${a.subtitle}</p>
        <div class="card-excerpt">${a.excerpt}</div>
        <span class="card-read-btn">
          Open Article
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </article>
  `).join('');
}


// ── SEARCH ───────────────────────────────────────────────────────
function filterArticles(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderCards(articles); return; }
  const filtered = articles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.subtitle.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.issue.toLowerCase().includes(q)
  );
  renderCards(filtered);
}

function focusSearch() {
  document.getElementById('journal').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => document.getElementById('search-input').focus(), 600);
}


// ── OPEN / CLOSE ARTICLE ─────────────────────────────────────────
function openArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  document.getElementById('a-category').textContent = article.category;
  document.getElementById('a-issue').textContent = article.issue;
  document.getElementById('a-readtime').textContent = article.readTime;
  document.getElementById('a-title').textContent = article.title;
  document.getElementById('a-subtitle').textContent = article.subtitle;
  document.getElementById('a-excerpt').textContent = article.excerpt;
  document.getElementById('a-image').src = article.image;
  document.getElementById('a-image').alt = article.title;
  document.getElementById('d-category').textContent = article.category;
  document.getElementById('d-issue').textContent = article.issue;
  document.getElementById('d-readtime').textContent = article.readTime;

  document.querySelector('.article-quote-block blockquote').textContent = article.quote || '';

  const bodyBlock = document.querySelector('.article-body-block');

  bodyBlock.querySelectorAll('p:not(.label), h2').forEach(el => el.remove());

  const subtitlePattern = /^(I|II|III|IIII|IV|V|VI|VII|VIII|IX|X)\.\s/;

  (article.body || []).forEach(item => {
    const el = document.createElement(subtitlePattern.test(item) ? 'h2' : 'p');
    el.textContent = item;
    bodyBlock.appendChild(el);
  });

  const related = articles.filter(a => a.id !== id).slice(0, 3);
  document.getElementById('related-items').innerHTML = related.map(r => `
    <div class="related-item" onclick="openArticle('${r.id}')">
      <div class="related-cat">${r.category}</div>
      <div class="related-title">${r.title}</div>
    </div>
  `).join('');

  document.getElementById('homepage').style.display = 'none';
  document.getElementById('article-page').classList.add('visible');
  window.scrollTo(0, 0);
  history.pushState({ articleId: id }, '', '#' + id);
}

function closeArticle() {
  document.getElementById('article-page').classList.remove('visible');
  document.getElementById('homepage').style.display = 'block';
  window.scrollTo(0, 0);
  history.pushState({}, '', window.location.pathname);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('popstate', (e) => {
  if (e.state && e.state.articleId) {
    openArticle(e.state.articleId);
  } else {
    closeArticle();
  }
});


// ── INIT ─────────────────────────────────────────────────────────
applyConfig();
renderCards(articles);
