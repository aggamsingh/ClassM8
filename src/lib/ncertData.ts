export interface NcertChunk {
  id: string;
  chapter: string;
  chapterNum: number;
  section: string;
  text: string;
  embedding?: number[];
}

export const CHAPTERS = [
  { num: 1,  title: 'Chemical Reactions & Equations', emoji: '⚗️' },
  { num: 2,  title: 'Acids, Bases and Salts',          emoji: '🧪' },
  { num: 3,  title: 'Metals and Non-metals',            emoji: '⚙️' },
  { num: 10, title: 'Light: Reflection & Refraction',  emoji: '💡' },
];

export const NCERT_CHUNKS: NcertChunk[] = [
  // ─── CHAPTER 1 ────────────────────────────────────────────────
  {
    id: 'ch1-1', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'What is a Chemical Reaction?',
    text: `A chemical reaction is a process in which one or more substances (called reactants) are converted into one or more different substances (called products). During a chemical reaction, atoms of reactants are rearranged to form new products. Signs of a chemical reaction include: change in colour, change in state, evolution of a gas, change in temperature, or formation of a precipitate. For example, burning of magnesium ribbon in air produces magnesium oxide with a brilliant white light — a classic chemical reaction.`,
  },
  {
    id: 'ch1-2', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Writing a Chemical Equation',
    text: `A chemical equation represents a chemical reaction using symbols and formulas. The reactants are written on the left side, products on the right, separated by an arrow (→). The arrow indicates the direction of the reaction. Example: Magnesium + Oxygen → Magnesium oxide, written symbolically as 2Mg + O₂ → 2MgO. Conditions such as heat, light, or catalyst can be written above or below the arrow. Gas evolved is shown by an upward arrow (↑) and precipitate formed by a downward arrow (↓).`,
  },
  {
    id: 'ch1-3', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Balancing Chemical Equations',
    text: `A balanced chemical equation has equal numbers of atoms of each element on both sides, satisfying the Law of Conservation of Mass — mass can neither be created nor destroyed in a chemical reaction. To balance an equation, we place coefficients in front of the chemical formulas. We must never change the subscripts of chemical formulas while balancing. An unbalanced equation is called a skeletal equation. For example, the unbalanced equation Fe + H₂O → Fe₃O₄ + H₂ becomes 3Fe + 4H₂O → Fe₃O₄ + 4H₂ when balanced.`,
  },
  {
    id: 'ch1-4', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Combination Reactions',
    text: `A combination reaction is one in which two or more reactants combine to give a single product. General form: A + B → AB. Examples: (1) Burning of coal — C + O₂ → CO₂; (2) Formation of water — 2H₂ + O₂ → 2H₂O; (3) Calcium oxide reacts with water to form calcium hydroxide — CaO + H₂O → Ca(OH)₂ (this reaction is exothermic, producing slaked lime). Reactions that release energy in the form of heat are called exothermic reactions.`,
  },
  {
    id: 'ch1-5', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Decomposition Reactions',
    text: `A decomposition reaction is the opposite of combination — a single reactant breaks down into two or more simpler products. General form: AB → A + B. Decomposition can be caused by heat (thermal decomposition), light (photolytic decomposition), or electricity (electrolytic decomposition). Example: Calcium carbonate decomposes on heating to give calcium oxide and carbon dioxide — CaCO₃ → CaO + CO₂. Silver chloride decomposes in sunlight: 2AgCl → 2Ag + Cl₂. Electrolysis of water: 2H₂O → 2H₂ + O₂.`,
  },
  {
    id: 'ch1-6', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Displacement Reactions',
    text: `In a displacement reaction, a more reactive element displaces a less reactive element from a compound. General form: A + BC → AC + B (where A is more reactive than B). Example: Iron displaces copper from copper sulphate solution — Fe + CuSO₄ → FeSO₄ + Cu. The iron nail becomes coated with copper and the blue colour of copper sulphate fades. Another example: Zinc displaces hydrogen from dilute sulphuric acid — Zn + H₂SO₄ → ZnSO₄ + H₂↑.`,
  },
  {
    id: 'ch1-7', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Double Displacement Reactions',
    text: `In a double displacement reaction, ions of two compounds exchange places in an aqueous solution to form two new compounds. General form: AB + CD → AD + CB. One of the products is usually an insoluble precipitate, a gas, or water. Example: Sodium sulphate reacts with barium chloride to form barium sulphate (white precipitate) and sodium chloride — Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl. This is also called a precipitation reaction because an insoluble product (precipitate) is formed.`,
  },
  {
    id: 'ch1-8', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Oxidation and Reduction',
    text: `Oxidation is the gain of oxygen or loss of hydrogen. Reduction is the loss of oxygen or gain of hydrogen. A reaction in which one substance is oxidised and another is simultaneously reduced is called a redox reaction. Example: CuO + H₂ → Cu + H₂O — here copper oxide is reduced to copper (loses oxygen) and hydrogen is oxidised to water (gains oxygen). The substance that is oxidised is the reducing agent; the substance that is reduced is the oxidising agent.`,
  },
  {
    id: 'ch1-9', chapterNum: 1,
    chapter: 'Chemical Reactions and Equations',
    section: 'Corrosion and Rancidity',
    text: `Corrosion is the slow eating away of a metal surface due to reaction with air, moisture, or chemicals. The most common example is rusting of iron: 4Fe + 3O₂ + 2H₂O → 2Fe₂O₃·H₂O (rust). Silver articles turn black due to formation of silver sulphide. Prevention methods include painting, oiling, galvanising, or alloying. Rancidity is the oxidation of fats and oils in food, making it smell and taste bad. It is prevented by adding antioxidants, storing food in airtight containers, and using nitrogen gas packaging.`,
  },

  // ─── CHAPTER 2 ────────────────────────────────────────────────
  {
    id: 'ch2-1', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'Properties of Acids',
    text: `Acids are substances that taste sour, turn blue litmus red, and dissolve in water to release hydrogen ions (H⁺). Examples: hydrochloric acid (HCl), sulphuric acid (H₂SO₄), nitric acid (HNO₃), acetic acid (CH₃COOH), and carbonic acid. Acids react with metals to produce hydrogen gas — Zn + H₂SO₄ → ZnSO₄ + H₂↑. Acids react with metal carbonates to produce CO₂ — Na₂CO₃ + H₂SO₄ → Na₂SO₄ + H₂O + CO₂↑. Acids conduct electricity in aqueous solution due to free ions.`,
  },
  {
    id: 'ch2-2', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'Properties of Bases',
    text: `Bases are substances that taste bitter, feel soapy, turn red litmus blue, and release hydroxide ions (OH⁻) in water. Bases that are soluble in water are called alkalis. Examples: sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂), and ammonia (NH₄OH). Bases react with acids in a neutralisation reaction to form salt and water: NaOH + HCl → NaCl + H₂O. Bases also react with certain metals to release hydrogen gas, for example aluminium reacts with NaOH solution.`,
  },
  {
    id: 'ch2-3', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'pH Scale',
    text: `The pH scale measures the concentration of hydrogen ions in a solution. It ranges from 0 to 14. A pH of 7 is neutral (pure water). A pH below 7 indicates an acidic solution (more H⁺ ions). A pH above 7 indicates a basic or alkaline solution (more OH⁻ ions). The lower the pH, the stronger the acid; the higher the pH, the stronger the base. pH indicators like litmus, phenolphthalein, or universal indicator are used to measure pH. Our blood has a pH of 7.4 and stomach acid has a pH around 2.`,
  },
  {
    id: 'ch2-4', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'Importance of pH in Daily Life',
    text: `pH plays a vital role in everyday life. Our body maintains a specific pH range for enzymes to function — blood pH is 7.35–7.45. Acid rain occurs when the pH of rain falls below 5.6 due to dissolved SO₂ and NO₂. Tooth decay occurs when the pH in the mouth drops below 5.5, as acids erode enamel. Antacids like milk of magnesia neutralise excess stomach acid. Soil pH affects crop growth — most crops grow best at pH 6–7. Bee stings are acidic (pH ~4) and are relieved by baking soda (a base).`,
  },
  {
    id: 'ch2-5', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'Salts and Common Salt',
    text: `Salts are ionic compounds formed by the neutralisation of an acid with a base. Common salt is sodium chloride (NaCl), formed when HCl reacts with NaOH. Salts can be acidic (pH < 7), basic (pH > 7), or neutral (pH = 7). Washing soda (Na₂CO₃·10H₂O) is used as a cleaning agent. Baking soda (NaHCO₃) is used in cooking and as an antacid. Bleaching powder (CaOCl₂) is used as a disinfectant. Plaster of Paris (CaSO₄·½H₂O) is used in making casts for broken bones.`,
  },
  {
    id: 'ch2-6', chapterNum: 2,
    chapter: 'Acids, Bases and Salts',
    section: 'Neutralisation Reaction',
    text: `When an acid and a base react with each other, the products are salt and water. This reaction is called a neutralisation reaction and it is always exothermic. General equation: Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. In terms of ions: H⁺ + OH⁻ → H₂O. The heat released during neutralisation is called the heat of neutralisation. Universal indicators or pH meters can confirm when complete neutralisation has occurred (pH = 7 for strong acid + strong base).`,
  },

  // ─── CHAPTER 3 ────────────────────────────────────────────────
  {
    id: 'ch3-1', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Physical Properties of Metals',
    text: `Metals generally have the following physical properties: they are lustrous (shiny), hard, have high melting and boiling points, are good conductors of heat and electricity, are malleable (can be beaten into thin sheets), and ductile (can be drawn into wires). Gold and silver are the most malleable metals. Copper and aluminium are good conductors of electricity. Exceptions: mercury is the only liquid metal at room temperature; sodium and potassium are soft metals; tungsten has the highest melting point.`,
  },
  {
    id: 'ch3-2', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Physical Properties of Non-metals',
    text: `Non-metals generally lack the typical metallic properties. They are usually brittle (when solid), non-lustrous (dull), poor conductors of heat and electricity, and have lower melting and boiling points than metals. Examples: carbon, sulphur, phosphorus, oxygen, nitrogen, chlorine. Exceptions: graphite (a form of carbon) is a good conductor of electricity; diamond (another form of carbon) is the hardest natural substance; iodine is a lustrous non-metal. Non-metals are essential for life — oxygen, nitrogen, and carbon are all non-metals.`,
  },
  {
    id: 'ch3-3', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Reactivity Series',
    text: `The reactivity series (or activity series) arranges metals in order of decreasing reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au > Pt. Metals above hydrogen in the series react with dilute acids to produce hydrogen gas. Metals lower in the series are less reactive and do not react with dilute acids. A more reactive metal can displace a less reactive one from its salt solution. This series helps predict displacement reactions and explains why gold and platinum do not tarnish.`,
  },
  {
    id: 'ch3-4', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Reaction of Metals with Oxygen',
    text: `Most metals react with oxygen to form metal oxides. The general equation is: Metal + Oxygen → Metal oxide. Example: 2Mg + O₂ → 2MgO (magnesium oxide, a basic oxide). 4Al + 3O₂ → 2Al₂O₃. Sodium and potassium react very vigorously with oxygen and must be stored in kerosene oil. Some metal oxides, like those of aluminium, are amphoteric — they react with both acids and bases. Noble metals like gold and platinum do not react with oxygen even at high temperatures.`,
  },
  {
    id: 'ch3-5', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Ionic Compounds and Extraction of Metals',
    text: `Metals and non-metals combine by transfer of electrons to form ionic compounds. In ionic compounds, metals lose electrons (become positive ions/cations) and non-metals gain electrons (become negative ions/anions). Ionic compounds have high melting and boiling points, are usually soluble in water, and conduct electricity in molten or dissolved state. Extraction of metals depends on their reactivity: highly reactive metals (Na, Ca, Al) are extracted by electrolysis; moderately reactive metals (Fe, Zn) by reduction with carbon; least reactive metals (Au, Ag) are found free in nature.`,
  },
  {
    id: 'ch3-6', chapterNum: 3,
    chapter: 'Metals and Non-metals',
    section: 'Corrosion and Its Prevention',
    text: `Corrosion is the deterioration of metals due to chemical reactions with their environment, especially oxygen and moisture. Iron rusts when exposed to air and water — the reddish-brown rust is iron(III) oxide (Fe₂O₃·xH₂O). Copper develops a green coating called verdigris (copper carbonate). Silver tarnishes to silver sulphide. Prevention methods include: (1) Painting or coating the metal surface, (2) Galvanisation — coating iron with zinc, (3) Electroplating with a less reactive metal, (4) Alloying — mixing metals (steel is iron alloyed with carbon), (5) Applying oil or grease.`,
  },

  // ─── CHAPTER 10 ───────────────────────────────────────────────
  {
    id: 'ch10-1', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Reflection of Light',
    text: `Light travels in a straight line (rectilinear propagation). When light falls on a polished or shiny surface, it bounces back — this is called reflection. The two laws of reflection are: (1) The angle of incidence (i) is equal to the angle of reflection (r), measured from the normal at the point of incidence; (2) The incident ray, reflected ray, and the normal at the point of incidence all lie in the same plane. Regular reflection occurs on smooth surfaces (mirror); diffuse reflection occurs on rough surfaces (wall, paper).`,
  },
  {
    id: 'ch10-2', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Spherical Mirrors',
    text: `Spherical mirrors are mirrors with curved reflecting surfaces. A concave mirror (converging mirror) has its reflecting surface curved inward — it can form real and inverted images, and is used in torches, headlights, shaving mirrors, and solar furnaces. A convex mirror (diverging mirror) has its reflecting surface curved outward — it always forms a virtual, erect, and diminished image, and is used as a rear-view mirror in vehicles. The centre of curvature (C), principal focus (F), and pole (P) are key terms. The radius of curvature = 2 × focal length (R = 2f).`,
  },
  {
    id: 'ch10-3', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Mirror Formula and Magnification',
    text: `The mirror formula relates the object distance (u), image distance (v), and focal length (f): 1/v + 1/u = 1/f. All distances are measured from the pole of the mirror. The sign convention: distances in the direction of incident light are positive; distances opposite to incident light are negative. Magnification (m) = height of image / height of object = −v/u. If m is positive, the image is virtual and erect. If m is negative, the image is real and inverted. A magnification of −2 means the image is real, inverted, and twice the size of the object.`,
  },
  {
    id: 'ch10-4', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Refraction of Light',
    text: `Refraction is the bending of light when it passes from one medium to another of different optical density. It occurs because the speed of light changes in different media. When light goes from a rarer medium (like air) to a denser medium (like glass), it bends toward the normal, and its speed decreases. When it goes from denser to rarer, it bends away from the normal and speeds up. The Laws of Refraction: (1) The incident ray, refracted ray, and normal are all in the same plane. (2) Snell's Law: n₁ sin θ₁ = n₂ sin θ₂ (the ratio of sines of angles is constant for two given media).`,
  },
  {
    id: 'ch10-5', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: "Snell's Law and Refractive Index",
    text: `The refractive index (n) of a medium is the ratio of the speed of light in vacuum to the speed of light in that medium: n = c/v. A higher refractive index means light travels slower in that medium. Snell's Law states: n₁ sin i = n₂ sin r, where i is the angle of incidence and r is the angle of refraction. The refractive index of glass is about 1.5, meaning light travels 1.5 times slower in glass than in air. The refractive index of water is 1.33. This explains why objects submerged in water appear shallower than they actually are.`,
  },
  {
    id: 'ch10-6', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Lenses: Concave and Convex',
    text: `A lens is a transparent object with two curved surfaces. A convex lens (converging lens) is thicker at the centre and converges light rays to a focal point — used in magnifying glasses, cameras, human eye, and microscopes. A concave lens (diverging lens) is thinner at the centre and diverges light rays — used to correct myopia (short-sightedness). The lens formula is: 1/v − 1/u = 1/f. Magnification: m = v/u. Power of a lens (P) = 1/f (in metres), measured in dioptres (D). A convex lens has positive power; a concave lens has negative power.`,
  },
  {
    id: 'ch10-7', chapterNum: 10,
    chapter: 'Light: Reflection and Refraction',
    section: 'Image Formation by Lenses',
    text: `For a convex lens: when the object is beyond 2F, the image is real, inverted, and diminished (camera). When the object is at 2F, the image is real, inverted, and same size. When the object is between F and 2F, the image is real, inverted, and magnified (projector). When the object is between the lens and F, the image is virtual, erect, and magnified (magnifying glass). For a concave lens: the image is always virtual, erect, and diminished regardless of where the object is placed. This is why concave lenses are used as rear-view mirrors for wide-angle viewing.`,
  },
];
