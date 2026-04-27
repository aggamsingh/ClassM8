export interface QAEntry {
  question: string;
  answer: string;
  chapterNum: number;
  chapter: string;
  section: string;
  keywords: string[];
}

export const QA_CACHE: QAEntry[] = [

  // â”€â”€â”€ CHAPTER 1: Chemical Reactions and Equations â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How do you write a chemical equation?",
    answer: "A chemical equation represents a chemical reaction using symbols and formulas. The reactants are written on the left side, products on the right, separated by an arrow (Ã¢â€ â€™). Conditions such as heat, light, or catalyst can be written above or below the arrow. Gas evolved is shown by an upward arrow (Ã¢â€ â€˜) and precipitate by a downward arrow (Ã¢â€ â€œ).",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Writing a Chemical Equation",
    keywords: ["chemical equation", "write", "reactants", "products", "arrow"]
  },
  {
    question: "What is a balanced chemical equation?",
    answer: "A balanced chemical equation has equal numbers of atoms of each element on both sides, satisfying the Law of Conservation of Mass. To balance an equation, we place coefficients in front of the chemical formulas. We must never change the subscripts of chemical formulas while balancing. An unbalanced equation is called a skeletal equation.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Balancing Chemical Equations",
    keywords: ["balanced", "balance", "equation", "conservation of mass", "skeletal"]
  },
  {
    question: "What is a chemical reaction?",
    answer: "A chemical reaction is a process in which one or more substances (called reactants) are converted into one or more different substances (called products). During a chemical reaction, atoms of reactants are rearranged to form new products. Signs of a chemical reaction include: change in colour, change in state, evolution of a gas, change in temperature, or formation of a precipitate.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "What is a Chemical Reaction?",
    keywords: ["chemical reaction", "reactants", "products", "signs"]
  },
  {
    question: "What is a combination reaction?",
    answer: "A combination reaction is one in which two or more reactants combine to give a single product. General form: A + B Ã¢â€ â€™ AB. Examples include burning of coal (C + OÃ¢â€šâ€š Ã¢â€ â€™ COÃ¢â€šâ€š) and calcium oxide reacting with water to form calcium hydroxide (CaO + HÃ¢â€šâ€šO Ã¢â€ â€™ Ca(OH)Ã¢â€šâ€š). Reactions that release energy as heat are called exothermic reactions.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Combination Reactions",
    keywords: ["combination reaction", "combine", "single product"]
  },
  {
    question: "What is a decomposition reaction?",
    answer: "A decomposition reaction is the opposite of a combination reaction Ã¢â‚¬â€ a single reactant breaks down into two or more simpler products. General form: AB Ã¢â€ â€™ A + B. Decomposition can be caused by heat (thermal), light (photolytic), or electricity (electrolytic). Example: CaCOÃ¢â€šÆ’ Ã¢â€ â€™ CaO + COÃ¢â€šâ€š on heating.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Decomposition Reactions",
    keywords: ["decomposition", "decompose", "breaks down", "thermal", "photolytic", "electrolytic"]
  },
  {
    question: "What is a displacement reaction?",
    answer: "In a displacement reaction, a more reactive element displaces a less reactive element from a compound. Example: Iron displaces copper from copper sulphate solution Ã¢â‚¬â€ Fe + CuSOÃ¢â€šâ€ž Ã¢â€ â€™ FeSOÃ¢â€šâ€ž + Cu. The iron nail becomes coated with copper and the blue colour of copper sulphate fades.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Displacement Reactions",
    keywords: ["displacement", "displaces", "more reactive", "less reactive"]
  },
  {
    question: "What is a double displacement reaction?",
    answer: "In a double displacement reaction, ions of two compounds exchange places in aqueous solution to form two new compounds. General form: AB + CD Ã¢â€ â€™ AD + CB. One product is usually an insoluble precipitate, a gas, or water. Example: NaÃ¢â€šâ€šSOÃ¢â€šâ€ž + BaClÃ¢â€šâ€š Ã¢â€ â€™ BaSOÃ¢â€šâ€žÃ¢â€ â€œ + 2NaCl.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Double Displacement Reactions",
    keywords: ["double displacement", "precipitation", "exchange", "precipitate"]
  },
  {
    question: "What is a precipitation reaction?",
    answer: "A precipitation reaction is one in which an insoluble solid (precipitate) is formed when two aqueous solutions react. Example: BaClÎ“Ã©Ã© + NaÎ“Ã©Ã©SOÎ“Ã©Ã¤ Î“Ã¥Ã† BaSOÎ“Ã©Ã¤Î“Ã¥Ã´ + 2NaCl.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Double Displacement",
    keywords: ["precipitation", "insoluble", "BaSO4"]
  },
  {
    question: "What is a redox reaction?",
    answer: "A redox reaction is one in which oxidation and reduction occur simultaneously. Oxidation is the gain of oxygen or loss of hydrogen; reduction is the loss of oxygen or gain of hydrogen. Example: CuO + HÃ¢â€šâ€š Ã¢â€ â€™ Cu + HÃ¢â€šâ€šO Ã¢â‚¬â€ copper oxide is reduced and hydrogen is oxidised. The substance oxidised is the reducing agent; the substance reduced is the oxidising agent.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Oxidation and Reduction",
    keywords: ["redox", "oxidation", "reduction", "oxidising agent", "reducing agent"]
  },
  {
    question: "What is an endothermic reaction?",
    answer: "An endothermic reaction is a chemical reaction that absorbs heat energy from the surroundings. Example: decomposition of calcium carbonate. These reactions cause a decrease in temperature.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Types of Reactions",
    keywords: ["endothermic", "heat absorption"]
  },
  {
    question: "What is an exothermic reaction?",
    answer: "An exothermic reaction is a chemical reaction that releases heat energy into the surroundings. Example: combustion of fuels. These reactions increase the temperature of the surroundings.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Types of Reactions",
    keywords: ["exothermic", "heat", "energy"]
  },
  {
    question: "What is corrosion?",
    answer: "Corrosion is the slow eating away of a metal surface due to reaction with air, moisture, or chemicals. The most common example is rusting of iron: 4Fe + 3OÃ¢â€šâ€š + 2HÃ¢â€šâ€šO Ã¢â€ â€™ 2FeÃ¢â€šâ€šOÃ¢â€šÆ’Ã‚Â·HÃ¢â€šâ€šO. Silver articles turn black due to formation of silver sulphide. Prevention methods include painting, oiling, galvanising, or alloying.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Corrosion and Rancidity",
    keywords: ["corrosion", "rusting", "rust", "iron", "silver"]
  },
  {
    question: "What is rancidity?",
    answer: "Rancidity is the oxidation of fats and oils in food, making it smell and taste bad. It is prevented by adding antioxidants, storing food in airtight containers, and using nitrogen gas packaging. Chips manufacturers flush bags with nitrogen to prevent rancidity.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Corrosion and Rancidity",
    keywords: ["rancidity", "rancid", "fats", "oils", "antioxidants", "nitrogen"]
  },
  {
    question: "What is the activity series used for?",
    answer: "The activity series helps predict whether a displacement reaction will occur. A metal higher in the series can displace a metal lower in the series from its compound.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Reactivity",
    keywords: ["activity series", "displacement"]
  },
  {
    question: "Why should a magnesium ribbon be cleaned before burning?",
    answer: "Magnesium ribbon is cleaned to remove the protective layer of magnesium oxide formed on its surface. This ensures proper burning and accurate observation of the reaction.",
    chapterNum: 1, chapter: "Chemical Reactions and Equations", section: "Practical Chemistry",
    keywords: ["magnesium", "oxide layer", "cleaning"]
  },

  // â”€â”€â”€ CHAPTER 2: Acids, Bases and Salts â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "What are indicators?",
    answer: "Indicators are substances that change color in acidic or basic solutions. Examples include litmus, phenolphthalein, and methyl orange.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Indicators",
    keywords: ["indicator", "litmus", "phenolphthalein"]
  },
  {
    question: "What are salts?",
    answer: "Salts are ionic compounds formed by neutralisation of an acid with a base. Common salt is sodium chloride (NaCl). Washing soda (NaÃ¢â€šâ€šCOÃ¢â€šÆ’Ã‚Â·10HÃ¢â€šâ€šO) is used as a cleaning agent. Baking soda (NaHCOÃ¢â€šÆ’) is used in cooking and as an antacid. Bleaching powder is used as a disinfectant. Plaster of Paris is used for casts.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Salts and Common Salt",
    keywords: ["salts", "sodium chloride", "washing soda", "baking soda", "plaster of paris"]
  },
  {
    question: "What are the properties of acids?",
    answer: "Acids taste sour, turn blue litmus red, and dissolve in water to release hydrogen ions (HÃ¢ÂÂº). Examples include HCl, HÃ¢â€šâ€šSOÃ¢â€šâ€ž, HNOÃ¢â€šÆ’, and acetic acid. Acids react with metals to produce hydrogen gas and with metal carbonates to produce COÃ¢â€šâ€š. Acids conduct electricity in aqueous solution due to free ions.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Properties of Acids",
    keywords: ["acids", "properties", "sour", "litmus", "hydrogen ion", "H+"]
  },
  {
    question: "What are the properties of bases?",
    answer: "Bases taste bitter, feel soapy, turn red litmus blue, and release hydroxide ions (OHÃ¢ÂÂ») in water. Bases soluble in water are called alkalis. Examples: NaOH, KOH, Ca(OH)Ã¢â€šâ€š. Bases react with acids in a neutralisation reaction to form salt and water.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Properties of Bases",
    keywords: ["bases", "properties", "bitter", "litmus", "hydroxide", "alkali"]
  },
  {
    question: "What is a neutralisation reaction?",
    answer: "When an acid and a base react, the products are salt and water. This is called a neutralisation reaction and it is always exothermic. General equation: Acid + Base Ã¢â€ â€™ Salt + Water. Example: HCl + NaOH Ã¢â€ â€™ NaCl + HÃ¢â€šâ€šO. The heat released is called the heat of neutralisation.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Neutralisation Reaction",
    keywords: ["neutralisation", "neutralization", "acid base", "salt water"]
  },
  {
    question: "What is bleaching powder used for?",
    answer: "Bleaching powder is used for disinfecting drinking water, bleaching cotton and linen, and as an oxidizing agent.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Important Chemicals",
    keywords: ["bleaching powder", "disinfectant"]
  },
  {
    question: "What is the importance of pH in daily life?",
    answer: "pH plays a vital role in everyday life. Our blood pH is 7.35Ã¢â‚¬â€œ7.45. Acid rain occurs when pH of rain falls below 5.6. Tooth decay occurs when pH in the mouth drops below 5.5. Antacids neutralise excess stomach acid. Soil pH affects crop growth Ã¢â‚¬â€ most crops grow best at pH 6Ã¢â‚¬â€œ7.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Importance of pH in Daily Life",
    keywords: ["pH daily life", "acid rain", "tooth decay", "antacid", "blood pH"]
  },
  {
    question: "What is the pH scale?",
    answer: "The pH scale measures the concentration of hydrogen ions in a solution. It ranges from 0 to 14. A pH of 7 is neutral (pure water). A pH below 7 indicates an acidic solution and above 7 indicates a basic solution. The lower the pH, the stronger the acid; the higher the pH, the stronger the base.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "pH Scale",
    keywords: ["pH", "pH scale", "acidic", "basic", "neutral"]
  },
  {
    question: "What is universal indicator?",
    answer: "A universal indicator is a mixture of several indicators that shows different colors across a wide pH range. It helps determine the approximate pH of a solution.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "pH Measurement",
    keywords: ["universal indicator", "pH colors"]
  },
  {
    question: "What is water of crystallization?",
    answer: "Water of crystallization is the fixed number of water molecules chemically bound to a salt. Example: CuSOÎ“Ã©Ã¤â”¬â•–5HÎ“Ã©Ã©O.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Salts",
    keywords: ["water of crystallization", "hydrated salt"]
  },
  {
    question: "Why do dry HCl gas not show acidic behavior?",
    answer: "Dry HCl gas does not release hydrogen ions in the absence of water. Acids show acidic properties only in aqueous solutions where they ionize.",
    chapterNum: 2, chapter: "Acids, Bases and Salts", section: "Acid Behavior",
    keywords: ["HCl gas", "aqueous", "ionization"]
  },

  // â”€â”€â”€ CHAPTER 3: Metals and Non-metals â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How are metals extracted?",
    answer: "Extraction of metals depends on their reactivity: highly reactive metals (Na, Ca, Al) are extracted by electrolysis; moderately reactive metals (Fe, Zn) by reduction with carbon; least reactive metals (Au, Ag) are found free in nature or as simple compounds.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Ionic Compounds and Extraction of Metals",
    keywords: ["extraction", "extract metals", "electrolysis", "reduction carbon"]
  },
  {
    question: "How can corrosion be prevented?",
    answer: "Corrosion is prevented by: (1) Painting or coating the metal surface, (2) Galvanisation Ã¢â‚¬â€ coating iron with zinc, (3) Electroplating with a less reactive metal, (4) Alloying Ã¢â‚¬â€ mixing metals (steel is iron alloyed with carbon), (5) Applying oil or grease. Copper develops verdigris; silver tarnishes to silver sulphide.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Corrosion and Its Prevention",
    keywords: ["corrosion prevention", "galvanisation", "electroplating", "alloying", "painting"]
  },
  {
    question: "How do metals react with oxygen?",
    answer: "Most metals react with oxygen to form metal oxides. Example: 2Mg + OÃ¢â€šâ€š Ã¢â€ â€™ 2MgO. Sodium and potassium react very vigorously with oxygen and must be stored in kerosene. Some metal oxides like aluminium are amphoteric Ã¢â‚¬â€ they react with both acids and bases. Gold and platinum do not react with oxygen.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Reaction of Metals with Oxygen",
    keywords: ["metals oxygen", "metal oxide", "react oxygen", "magnesium oxide"]
  },
  {
    question: "What are alloys?",
    answer: "Alloys are homogeneous mixtures of two or more metals or a metal and a non-metal. They are made to improve properties like strength and corrosion resistance.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Alloys",
    keywords: ["alloy", "mixture", "properties"]
  },
  {
    question: "What are ionic compounds?",
    answer: "Metals and non-metals combine by transfer of electrons to form ionic compounds. Metals lose electrons (become cations) and non-metals gain electrons (become anions). Ionic compounds have high melting and boiling points, are usually soluble in water, and conduct electricity in molten or dissolved state.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Ionic Compounds and Extraction of Metals",
    keywords: ["ionic compounds", "ions", "cation", "anion", "electron transfer"]
  },
  {
    question: "What are the physical properties of metals?",
    answer: "Metals are generally lustrous, hard, have high melting and boiling points, and are good conductors of heat and electricity. They are malleable (beaten into sheets) and ductile (drawn into wires). Exceptions: mercury is the only liquid metal; sodium and potassium are soft; tungsten has the highest melting point.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Physical Properties of Metals",
    keywords: ["metals", "properties", "lustrous", "malleable", "ductile", "conductor"]
  },
  {
    question: "What are the physical properties of non-metals?",
    answer: "Non-metals are generally brittle, non-lustrous, and poor conductors of heat and electricity, with lower melting and boiling points. Exceptions: graphite conducts electricity; diamond is the hardest natural substance; iodine is lustrous. Non-metals like oxygen, nitrogen, and carbon are essential for life.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Physical Properties of Non-metals",
    keywords: ["non-metals", "properties", "brittle", "non-lustrous", "poor conductor"]
  },
  {
    question: "What happens when metals react with water?",
    answer: "Metals react with water to form metal hydroxides or oxides and release hydrogen gas. Highly reactive metals react violently, while less reactive metals react slowly.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Chemical Properties",
    keywords: ["metals water", "hydrogen gas"]
  },
  {
    question: "What is galvanization?",
    answer: "Galvanization is the process of coating iron or steel with a layer of zinc to prevent rusting.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Corrosion Prevention",
    keywords: ["galvanization", "zinc coating"]
  },
  {
    question: "What is the reactivity series?",
    answer: "The reactivity series arranges metals in order of decreasing reactivity: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Hg > Ag > Au > Pt. Metals above hydrogen react with dilute acids to produce hydrogen gas. A more reactive metal can displace a less reactive one from its salt solution.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Reactivity Series",
    keywords: ["reactivity series", "activity series", "reactive", "reactivity order"]
  },
  {
    question: "Why are ionic compounds brittle?",
    answer: "Ionic compounds are brittle because shifting of layers brings like charges together, causing strong repulsion and breaking the structure.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Ionic Compounds",
    keywords: ["brittle", "ionic", "repulsion"]
  },
  {
    question: "Why are metals good conductors of electricity?",
    answer: "Metals have free electrons that can move easily through the lattice. This allows them to conduct electricity efficiently.",
    chapterNum: 3, chapter: "Metals and Non-metals", section: "Properties",
    keywords: ["conductivity", "free electrons"]
  },

  // â”€â”€â”€ CHAPTER 4: Carbon and its Compounds â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How does soap clean dirt?",
    answer: "Soap cleans by forming structures called micelles. A soap molecule has a hydrophilic (water-loving) head and a hydrophobic (water-fearing) hydrocarbon tail. The hydrophobic tails attach to the oily dirt, while the hydrophilic heads face outward towards the water. This forms an emulsion, allowing the dirt to be rinsed away with water.",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Soaps and Detergents",
    keywords: ["soap", "micelles", "hydrophilic", "hydrophobic", "cleansing action"]
  },
  {
    question: "What are covalent bonds?",
    answer: "Covalent bonds are chemical bonds formed by the sharing of electron pairs between non-metal atoms. This sharing allows both atoms to achieve a stable noble gas electron configuration. Carbon always forms covalent bonds because it is energetically unfavorable to gain four electrons (forming C4- anions) or lose four electrons (forming C4+ cations).",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Bonding in Carbon - The Covalent Bond",
    keywords: ["covalent bond", "sharing electrons", "noble gas configuration"]
  },
  {
    question: "What are detergents?",
    answer: "Detergents are cleaning agents that work in both soft and hard water. They do not form scum and are more effective than soaps.",
    chapterNum: 4, chapter: "Carbon and Its Compounds", section: "Soaps and Detergents",
    keywords: ["detergents", "cleaning agents"]
  },
  {
    question: "What are the allotropes of carbon?",
    answer: "Allotropes are different structural forms of the same element. The main allotropes of carbon are diamond, graphite, and fullerenes. In diamond, each carbon atom is bonded to four others in a rigid 3D structure. In graphite, carbon atoms form hexagonal arrays in layers that can slide over each other.",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Allotropes of Carbon",
    keywords: ["allotropes", "diamond", "graphite", "fullerene"]
  },
  {
    question: "What are the structural differences between saturated and unsaturated hydrocarbons?",
    answer: "Saturated hydrocarbons contain only single covalent bonds between carbon atoms and generally undergo substitution reactions (e.g., alkanes). Unsaturated hydrocarbons contain at least one double or triple bond between carbon atoms and undergo addition reactions (e.g., alkenes and alkynes).",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Saturated and Unsaturated Carbon Compounds",
    keywords: ["saturated", "unsaturated", "single bond", "double bond", "hydrocarbons"]
  },
  {
    question: "What is a homologous series?",
    answer: "A homologous series is a sequence of carbon compounds that have the same functional group and similar chemical properties. Successive members of the series differ by a -CHÎ“Ã©Ã©- unit and a mass of 14u. For example, the alkane series includes methane (CHÎ“Ã©Ã¤), ethane (CÎ“Ã©Ã©HÎ“Ã©Ã¥), and propane (CÎ“Ã©Ã¢HÎ“Ãªâ••).",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Homologous Series",
    keywords: ["homologous series", "functional group", "CH2 unit"]
  },
  {
    question: "What is a saturated hydrocarbon?",
    answer: "Saturated hydrocarbons are compounds in which carbon atoms are connected by single bonds only. They are called alkanes.",
    chapterNum: 4, chapter: "Carbon and Its Compounds", section: "Hydrocarbons",
    keywords: ["saturated", "alkanes"]
  },
  {
    question: "What is an ester?",
    answer: "An ester is a sweet-smelling compound formed by the reaction of an alcohol and a carboxylic acid. This process is called esterification.",
    chapterNum: 4, chapter: "Carbon and Its Compounds", section: "Functional Groups",
    keywords: ["ester", "esterification"]
  },
  {
    question: "What is an unsaturated hydrocarbon?",
    answer: "Unsaturated hydrocarbons contain double or triple bonds between carbon atoms. They include alkenes and alkynes.",
    chapterNum: 4, chapter: "Carbon and Its Compounds", section: "Hydrocarbons",
    keywords: ["unsaturated", "alkenes", "alkynes"]
  },
  {
    question: "What is esterification?",
    answer: "Esterification is a chemical reaction in which an alcohol reacts with a carboxylic acid in the presence of an acid catalyst to form a sweet-smelling substance called an ester. For example, ethanol reacts with ethanoic acid to produce ethyl ethanoate and water. Esters are used in making perfumes and flavoring agents.",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Properties of Ethanoic Acid",
    keywords: ["esterification", "ester", "carboxylic acid", "alcohol", "sweet-smelling"]
  },
  {
    question: "Why are detergents better than soaps in hard water?",
    answer: "Detergents are generally ammonium or sulphonate salts of long chain carboxylic acids. Unlike soaps, the charged ends of these compounds do not form insoluble precipitates (scum) with the calcium and magnesium ions present in hard water. Thus, detergents remain effective in hard water.",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Soaps and Detergents",
    keywords: ["detergents", "soaps", "hard water", "scum", "sulphonate salts"]
  },
  {
    question: "Why are soaps ineffective in hard water?",
    answer: "Soaps react with calcium and magnesium ions in hard water to form insoluble scum, reducing their cleaning efficiency.",
    chapterNum: 4, chapter: "Carbon and Its Compounds", section: "Soaps and Detergents",
    keywords: ["hard water", "soap", "scum"]
  },
  {
    question: "Why is carbon capable of forming a large number of compounds?",
    answer: "Carbon forms a vast number of compounds due to two main properties: catenation and tetravalency. Catenation is the unique ability of carbon atoms to form long chains, branches, or rings with other carbon atoms. Tetravalency means carbon has four valence electrons, allowing it to form stable covalent bonds with four other atoms, such as hydrogen, oxygen, or nitrogen.",
    chapterNum: 4, chapter: "Carbon and its Compounds", section: "Versatile Nature of Carbon",
    keywords: ["catenation", "tetravalency", "covalent bonds", "carbon compounds"]
  },

  // â”€â”€â”€ CHAPTER 5: Life Processes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How are the alveoli designed to maximize the exchange of gases?",
    answer: "Alveoli are balloon-like structures in the lungs that provide a massive surface area for gas exchange. Their walls are very thin, usually one cell thick, and are surrounded by an extensive network of blood capillaries. This thin membrane and rich blood supply facilitate rapid diffusion of oxygen into the blood and carbon dioxide out of it.",
    chapterNum: 5, chapter: "Life Processes", section: "Respiration",
    keywords: ["alveoli", "lungs", "gas exchange", "surface area", "capillaries"]
  },
  {
    question: "How is urine produced and eliminated in the human body?",
    answer: "Urine is produced in the kidneys by functional units called nephrons, which filter blood to remove nitrogenous wastes like urea and uric acid. Essential substances like glucose and water are reabsorbed. The urine then passes through the ureters into the urinary bladder, where it is stored until eliminated through the urethra.",
    chapterNum: 5, chapter: "Life Processes", section: "Excretion in Human Beings",
    keywords: ["urine", "kidneys", "nephrons", "urea", "filtration"]
  },
  {
    question: "What are life processes?",
    answer: "Life processes are the basic essential functions performed by living organisms to maintain their life on Earth. These include nutrition, respiration, transportation, and excretion. These maintenance processes are necessary to prevent damage and break-down, requiring energy typically obtained from outside the body.",
    chapterNum: 5, chapter: "Life Processes", section: "What are Life Processes?",
    keywords: ["life processes", "nutrition", "respiration", "transportation", "excretion"]
  },
  {
    question: "What are the components of the transport system in highly organized plants?",
    answer: "The transport system in highly organized plants consists of two main conducting tissues: xylem and phloem. Xylem transports water and dissolved minerals upwards from the roots to the rest of the plant. Phloem transports food (sucrose and amino acids) from the leaves, where it is synthesized, to other parts of the plant.",
    chapterNum: 5, chapter: "Life Processes", section: "Transportation in Plants",
    keywords: ["transport system", "xylem", "phloem", "plants", "water", "food"]
  },
  {
    question: "What are the main events of photosynthesis?",
    answer: "The main events of photosynthesis are: (1) Absorption of light energy by chlorophyll, (2) Conversion of light energy to chemical energy and splitting of water molecules into hydrogen and oxygen, and (3) Reduction of carbon dioxide to carbohydrates. These steps need not take place one after the other immediately.",
    chapterNum: 5, chapter: "Life Processes", section: "Autotrophic Nutrition",
    keywords: ["photosynthesis", "chlorophyll", "light energy", "carbon dioxide reduction"]
  },
  {
    question: "What is autotrophic nutrition?",
    answer: "Autotrophic nutrition is the mode of nutrition in which organisms make their own food using sunlight, carbon dioxide, and water. Example: plants.",
    chapterNum: 5, chapter: "Life Processes", section: "Nutrition",
    keywords: ["autotrophic", "photosynthesis"]
  },
  {
    question: "What is double circulation in humans?",
    answer: "Double circulation refers to the blood passing through the human heart twice during one complete cycle of the body. It consists of pulmonary circulation (blood flow between the heart and lungs for oxygenation) and systemic circulation (blood flow between the heart and the rest of the body). This prevents the mixing of oxygenated and deoxygenated blood.",
    chapterNum: 5, chapter: "Life Processes", section: "Transportation in Human Beings",
    keywords: ["double circulation", "heart", "pulmonary", "systemic", "oxygenated blood"]
  },
  {
    question: "What is excretion?",
    answer: "Excretion is the process of removing waste products from the body. In humans, it is carried out by the kidneys.",
    chapterNum: 5, chapter: "Life Processes", section: "Excretion",
    keywords: ["excretion", "waste removal"]
  },
  {
    question: "What is heterotrophic nutrition?",
    answer: "Heterotrophic nutrition is the mode of nutrition in which organisms depend on other organisms for food. Example: humans and animals.",
    chapterNum: 5, chapter: "Life Processes", section: "Nutrition",
    keywords: ["heterotrophic", "animals"]
  },
  {
    question: "What is life process?",
    answer: "Life processes are basic activities performed by living organisms to maintain life, such as nutrition, respiration, transport, and excretion.",
    chapterNum: 5, chapter: "Life Processes", section: "Introduction",
    keywords: ["life processes", "basic functions"]
  },
  {
    question: "What is respiration?",
    answer: "Respiration is the process of breaking down food to release energy. It can be aerobic (with oxygen) or anaerobic (without oxygen).",
    chapterNum: 5, chapter: "Life Processes", section: "Respiration",
    keywords: ["respiration", "energy"]
  },
  {
    question: "What is the difference between aerobic and anaerobic respiration?",
    answer: "Aerobic respiration takes place in the presence of oxygen, completely breaking down glucose into carbon dioxide, water, and a large amount of energy (ATP). Anaerobic respiration occurs in the absence of oxygen, partially breaking down glucose into ethanol and carbon dioxide (in yeast) or lactic acid (in muscles), releasing much less energy.",
    chapterNum: 5, chapter: "Life Processes", section: "Respiration",
    keywords: ["aerobic", "anaerobic", "respiration", "ATP", "oxygen"]
  },
  {
    question: "What is the role of saliva in the digestion of food?",
    answer: "Saliva contains an enzyme called salivary amylase that breaks down starch, which is a complex molecule, into simpler sugar (maltose). Saliva also acts as a lubricant, making the food wet and slippery, which helps in the smooth passage of the food bolus down the esophagus.",
    chapterNum: 5, chapter: "Life Processes", section: "Heterotrophic Nutrition",
    keywords: ["saliva", "salivary amylase", "starch", "digestion"]
  },

  // â”€â”€â”€ CHAPTER 6: Control and Coordination â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How do plants respond to stimuli if they lack a nervous system?",
    answer: "Plants respond to stimuli using chemical coordination through plant hormones (phytohormones) and cellular water pressure. They exhibit directional growth movements called tropisms (like phototropism toward light or geotropism toward gravity) and non-directional movements like the folding of mimosa leaves due to changes in turgor pressure.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Coordination in Plants",
    keywords: ["plant response", "phytohormones", "tropism", "turgor pressure"]
  },
  {
    question: "What are plant hormones?",
    answer: "Plant hormones are chemical substances that control growth and development in plants. Examples include auxins, gibberellins, cytokinins, ethylene, and abscisic acid.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Hormones",
    keywords: ["plant hormones", "auxin"]
  },
  {
    question: "What are plant hormones? Name a few.",
    answer: "Plant hormones are chemical compounds that help coordinate growth, development, and responses to the environment in plants. Examples include auxins (promote cell elongation), gibberellins (help in stem growth), cytokinins (promote cell division), and abscisic acid (inhibits growth and causes wilting of leaves).",
    chapterNum: 6, chapter: "Control and Coordination", section: "Coordination in Plants",
    keywords: ["plant hormones", "auxin", "gibberellin", "cytokinin", "abscisic acid"]
  },
  {
    question: "What are the main parts of the human brain and their functions?",
    answer: "The human brain is divided into the forebrain, midbrain, and hindbrain. The forebrain (cerebrum) controls voluntary actions, memory, and senses. The midbrain controls involuntary reflexes like pupil dilation. The hindbrain includes the cerebellum (posture and balance), pons (respiration), and medulla (involuntary actions like heartbeat and blood pressure).",
    chapterNum: 6, chapter: "Control and Coordination", section: "Human Brain",
    keywords: ["brain", "forebrain", "midbrain", "hindbrain", "cerebrum", "cerebellum"]
  },
  {
    question: "What is a reflex action?",
    answer: "A reflex action is a quick, automatic response to a stimulus without conscious thought. It is controlled by the spinal cord through a reflex arc.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Nervous System",
    keywords: ["reflex action", "spinal cord"]
  },
  {
    question: "What is a reflex arc?",
    answer: "A reflex arc is the neural pathway that controls a reflex action. It involves a sensory receptor detecting a stimulus, a sensory neuron carrying the signal to the spinal cord, a relay neuron processing it, a motor neuron transmitting the response, and an effector (muscle or gland) executing the action rapidly without conscious thought.",
    chapterNum: 6, chapter: "Control and Coordination", section: "What happens in Reflex Actions?",
    keywords: ["reflex arc", "reflex action", "spinal cord", "stimulus", "response"]
  },
  {
    question: "What is asexual reproduction?",
    answer: "Asexual reproduction is the process by which a single organism produces offspring identical to itself without the involvement of gametes. It results in genetically identical individuals called clones.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Reproduction Basics",
    keywords: ["asexual reproduction", "clones"]
  },
  {
    question: "What is coordination in organisms?",
    answer: "Coordination is the process by which different organs work together in a controlled manner to respond to stimuli. It is achieved through the nervous and hormonal systems.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Coordination",
    keywords: ["coordination", "nervous system"]
  },
  {
    question: "What is phototropism?",
    answer: "Phototropism is the directional growth of a plant in response to light. Shoots show positive phototropism by bending towards the light source, caused by the accumulation of the hormone auxin on the shaded side, making those cells elongate faster. Roots show negative phototropism by bending away from light.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Coordination in Plants",
    keywords: ["phototropism", "light response", "auxin", "directional growth"]
  },
  {
    question: "What is sexual reproduction?",
    answer: "Sexual reproduction involves two parents and the fusion of male and female gametes to form a zygote. It leads to genetic variation among offspring.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Reproduction Basics",
    keywords: ["sexual reproduction", "zygote"]
  },
  {
    question: "What is the role of adrenaline in the human body?",
    answer: "Adrenaline is an emergency hormone secreted by the adrenal glands during times of stress, fear, or anger. It prepares the body for a 'fight or flight' response by increasing the heart rate, raising blood pressure, dilating airways, and directing blood flow to the skeletal muscles, thus providing extra oxygen and glucose for rapid action.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Hormones in Animals",
    keywords: ["adrenaline", "emergency hormone", "fight or flight", "adrenal gland"]
  },
  {
    question: "What is the structure and function of a neuron?",
    answer: "A neuron is the fundamental unit of the nervous system, consisting of a cell body, dendrites, and an axon. Dendrites receive electrical impulses from other cells, the cell body processes them, and the axon transmits the impulse away to the next neuron or a muscle via a synapse. Neurons facilitate rapid communication within the body.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Animals - Nervous System",
    keywords: ["neuron", "dendrite", "axon", "synapse", "nervous system"]
  },
  {
    question: "Why is the use of iodized salt advisable?",
    answer: "Iodized salt provides iodine, which is essential for the thyroid gland to synthesize thyroxine hormone. Thyroxine regulates carbohydrate, protein, and fat metabolism in the body to provide the best balance for growth. A deficiency of iodine causes goiter, characterized by a swollen neck.",
    chapterNum: 6, chapter: "Control and Coordination", section: "Hormones in Animals",
    keywords: ["iodized salt", "iodine", "thyroxine", "thyroid gland", "goiter"]
  },

  // â”€â”€â”€ CHAPTER 7: How do Organisms Reproduce? â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "Explain the process of fertilization in flowering plants.",
    answer: "After pollination, the pollen grain lands on the stigma and grows a pollen tube down the style to the ovary. Male germ cells travel through this tube to reach the ovule. Fertilization occurs when the male germ cell fuses with the female egg cell inside the ovule, forming a zygote that eventually develops into a seed.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Sexual Reproduction in Flowering Plants",
    keywords: ["fertilization", "pollination", "pollen tube", "ovary", "zygote"]
  },
  {
    question: "What are the advantages of vegetative propagation?",
    answer: "Vegetative propagation allows plants to grow faster than those grown from seeds. It enables seedless plants like bananas and roses to reproduce. Since it is a form of asexual reproduction, all offspring are genetically identical to the parent, ensuring the preservation of desirable traits.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Vegetative Propagation",
    keywords: ["vegetative propagation", "asexual", "seedless plants", "genetically identical"]
  },
  {
    question: "What are the changes seen in girls at the time of puberty?",
    answer: "During puberty, girls experience an increase in breast size, the darkening of the skin of the nipples, and the beginning of menstruation. Hair grows in the pubic region and underarms. The body shape changes as hips widen, and there is increased activity of sebaceous and sweat glands, sometimes leading to acne.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Sexual Reproduction in Human Beings",
    keywords: ["puberty", "girls", "menstruation", "physical changes"]
  },
  {
    question: "What are the different methods of contraception?",
    answer: "Contraception methods prevent unwanted pregnancies and include: (1) Barrier methods like condoms which prevent sperm from meeting the egg, (2) Chemical methods like oral pills that prevent ovulation, (3) Intrauterine Devices (IUDs) like Copper-T which prevent implantation, and (4) Surgical methods like vasectomy in males and tubectomy in females.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Reproductive Health",
    keywords: ["contraception", "barrier method", "oral pills", "Copper-T", "vasectomy"]
  },
  {
    question: "What is binary fission?",
    answer: "Binary fission is a type of asexual reproduction in which a single cell divides into two equal daughter cells. It is seen in organisms like Amoeba.",
    chapterNum: 7, chapter: "How do Organisms Reproduce", section: "Asexual Reproduction",
    keywords: ["binary fission", "amoeba"]
  },
  {
    question: "What is budding?",
    answer: "Budding is a type of asexual reproduction in which a new organism develops as an outgrowth (bud) from the parent. Example: yeast.",
    chapterNum: 7, chapter: "How do Organisms Reproduce", section: "Asexual Reproduction",
    keywords: ["budding", "yeast"]
  },
  {
    question: "What is fertilization?",
    answer: "Fertilization is the fusion of male and female gametes to form a zygote. It can occur internally or externally depending on the organism.",
    chapterNum: 7, chapter: "How do Organisms Reproduce", section: "Sexual Reproduction",
    keywords: ["fertilization", "zygote"]
  },
  {
    question: "What is menstruation?",
    answer: "Menstruation is the monthly shedding of the thickened inner lining of the uterus, along with blood and mucus, through the vagina. This occurs if the egg released by the ovary is not fertilized. The cycle lasts for about 2 to 8 days and repeats approximately every 28 days in human females.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "What happens when the egg is not fertilized?",
    keywords: ["menstruation", "uterus lining", "unfertilized egg", "monthly cycle"]
  },
  {
    question: "What is puberty?",
    answer: "Puberty is the stage of life when a person attains sexual maturity and becomes capable of reproduction. It involves physical and hormonal changes.",
    chapterNum: 7, chapter: "How do Organisms Reproduce", section: "Human Reproduction",
    keywords: ["puberty", "sexual maturity"]
  },
  {
    question: "What is reproduction?",
    answer: "Reproduction is the biological process by which organisms produce new individuals of the same species. It ensures the continuity of life.",
    chapterNum: 7, chapter: "How do Organisms Reproduce", section: "Introduction",
    keywords: ["reproduction", "continuity"]
  },
  {
    question: "What is the difference between binary fission and multiple fission?",
    answer: "Binary fission is an asexual reproduction method where a single parent cell divides into two equal daughter cells (e.g., in Amoeba and Paramecium). Multiple fission is when a parent cell divides simultaneously into many daughter cells inside a protective cyst during unfavorable conditions (e.g., Plasmodium, the malaria parasite).",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Fission",
    keywords: ["binary fission", "multiple fission", "asexual reproduction", "amoeba", "plasmodium"]
  },
  {
    question: "What is the function of the placenta in human reproduction?",
    answer: "The placenta is a specialized tissue attached to the uterine wall that connects the mother to the developing embryo. It provides a large surface area for oxygen and nutrients to pass from the mother's blood to the embryo, and it also removes waste products generated by the embryo into the mother's blood for excretion.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Sexual Reproduction in Human Beings",
    keywords: ["placenta", "embryo", "nutrients", "oxygen", "waste removal"]
  },
  {
    question: "Why is DNA copying an essential part of the process of reproduction?",
    answer: "DNA copying (replication) ensures that traits are passed from the parent cell to the offspring cells. It provides the fundamental blueprint for cellular design and function. Slight inaccuracies during DNA copying introduce variations in the offspring, which is the basis for evolution and species survival in changing environments.",
    chapterNum: 7, chapter: "How do Organisms Reproduce?", section: "Do Organisms Create Exact Copies of Themselves?",
    keywords: ["DNA copying", "replication", "blueprint", "variation", "evolution"]
  },

  // â”€â”€â”€ CHAPTER 8: Heredity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How is the sex of a human child determined?",
    answer: "Sex determination in humans is strictly genetic. Females have a perfect pair of sex chromosomes (XX), while males have a mismatched pair (XY). All eggs contain an X chromosome. If a sperm carrying an X chromosome fertilizes the egg, the child will be female (XX). If a sperm carrying a Y chromosome fertilizes it, the child will be male (XY).",
    chapterNum: 8, chapter: "Heredity", section: "Sex Determination",
    keywords: ["sex determination", "chromosomes", "XX", "XY", "genetic"]
  },
  {
    question: "What are dominant and recessive traits?",
    answer: "A dominant trait is one that expresses itself physically even if only one copy of its allele is present (e.g., Tallness in pea plants, Tt). A recessive trait is one that is suppressed by a dominant allele and only expresses itself physically when two copies of its allele are present (e.g., Dwarfness in pea plants, tt).",
    chapterNum: 8, chapter: "Heredity", section: "Rules for the Inheritance of Traits - Mendel's Contributions",
    keywords: ["dominant", "recessive", "traits", "alleles", "expression"]
  },
  {
    question: "What are genes?",
    answer: "Genes are specific segments of DNA found on chromosomes that contain the instructions or codes for making specific proteins. These proteins ultimately determine the physical and biological characteristics (traits) of an organism. Genes are the basic physical and functional units of heredity.",
    chapterNum: 8, chapter: "Heredity", section: "How do these Traits get Expressed?",
    keywords: ["genes", "DNA", "chromosomes", "proteins", "heredity"]
  },
  {
    question: "What did Mendel's dihybrid cross experiment prove?",
    answer: "Mendel's dihybrid cross (using seeds that were round/yellow and wrinkled/green) proved the Law of Independent Assortment. It showed that the inheritance of one trait (like seed shape) is completely independent of the inheritance of another trait (like seed color), resulting in new combinations in the F2 generation with a 9:3:3:1 phenotypic ratio.",
    chapterNum: 8, chapter: "Heredity", section: "Rules for the Inheritance of Traits - Mendel's Contributions",
    keywords: ["dihybrid cross", "independent assortment", "traits", "9:3:3:1"]
  },
  {
    question: "What is evolution?",
    answer: "Evolution is the gradual change in characteristics of organisms over generations. It leads to the formation of new species.",
    chapterNum: 8, chapter: "Heredity and Evolution", section: "Evolution",
    keywords: ["evolution", "species"]
  },
  {
    question: "What is heredity?",
    answer: "Heredity is the transmission of genetic traits from parents to offspring. It ensures similarity between generations.",
    chapterNum: 8, chapter: "Heredity and Evolution", section: "Heredity",
    keywords: ["heredity", "traits"]
  },
  {
    question: "What is Mendel's Law of Segregation?",
    answer: "Mendel's Law of Segregation states that during the formation of gametes, the two alleles responsible for a specific trait separate from each other. Consequently, each gamete carries only one allele for each trait. When fertilization occurs, the offspring receives one allele from each parent, restoring the pair.",
    chapterNum: 8, chapter: "Heredity", section: "Inherited Traits",
    keywords: ["law of segregation", "Mendel", "alleles", "gametes", "traits"]
  },
  {
    question: "What is natural selection?",
    answer: "Natural selection is the process by which organisms with favorable traits survive and reproduce more successfully. It drives evolution.",
    chapterNum: 8, chapter: "Heredity and Evolution", section: "Evolution",
    keywords: ["natural selection", "evolution"]
  },
  {
    question: "What is the difference between acquired and inherited traits?",
    answer: "Inherited traits are controlled by genes passed from parents to offspring (e.g., eye color, blood group) and affect the DNA of germ cells. Acquired traits are characteristics developed during an individual's lifetime due to environmental influences or experiences (e.g., building muscle, learning a language) and cannot be passed to the next generation.",
    chapterNum: 8, chapter: "Heredity", section: "Inherited Traits",
    keywords: ["acquired traits", "inherited traits", "genes", "environment", "DNA"]
  },
  {
    question: "What is the role of DNA in heredity?",
    answer: "DNA (Deoxyribonucleic acid) is the genetic material that carries the hereditary information from one generation to the next. It stores the instructions needed for an organism to develop, survive, and reproduce. During cell division, DNA replicates so that each daughter cell receives a complete set of genetic instructions.",
    chapterNum: 8, chapter: "Heredity", section: "Accumulation of Variation During Reproduction",
    keywords: ["DNA", "heredity", "genetic material", "information storage"]
  },
  {
    question: "What is variation?",
    answer: "Variation refers to differences in traits among individuals of the same species. It is important for survival and evolution.",
    chapterNum: 8, chapter: "Heredity and Evolution", section: "Variation",
    keywords: ["variation", "differences"]
  },
  {
    question: "Why did Mendel choose pea plants for his experiments?",
    answer: "Mendel chose pea plants because they possess easily observable contrasting traits (like tall/short or green/yellow seeds). They have a short life span, allowing the study of multiple generations in a short time. Furthermore, pea plants usually self-pollinate but can be easily cross-pollinated artificially.",
    chapterNum: 8, chapter: "Heredity", section: "Rules for the Inheritance of Traits - Mendel's Contributions",
    keywords: ["Mendel", "pea plants", "contrasting traits", "short life span", "pollination"]
  },

  // â”€â”€â”€ CHAPTER 9: Light: Reflection and Refraction â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "How does a convex lens form images?",
    answer: "For a convex lens: object beyond 2F Ã¢â€ â€™ real, inverted, diminished image (camera). Object at 2F Ã¢â€ â€™ real, inverted, same size. Object between F and 2F Ã¢â€ â€™ real, inverted, magnified (projector). Object between lens and F Ã¢â€ â€™ virtual, erect, magnified (magnifying glass). For a concave lens the image is always virtual, erect, and diminished.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Image Formation by Lenses",
    keywords: ["image formation", "convex lens image", "lens image position", "real virtual image"]
  },
  {
    question: "What are the laws of reflection?",
    answer: "The two laws of reflection are: (1) The angle of incidence equals the angle of reflection, both measured from the normal at the point of incidence. (2) The incident ray, reflected ray, and normal all lie in the same plane. Regular reflection occurs on smooth surfaces; diffuse reflection on rough surfaces.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Reflection of Light",
    keywords: ["laws of reflection", "reflection", "angle of incidence", "angle of reflection"]
  },
  {
    question: "What is a concave lens?",
    answer: "A concave lens (diverging lens) is thinner at the centre and diverges light rays. It always forms a virtual, erect, and diminished image regardless of object position. It is used to correct myopia (short-sightedness). A concave lens has negative power.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Lenses: Concave and Convex",
    keywords: ["concave lens", "diverging lens", "myopia", "short-sightedness"]
  },
  {
    question: "What is a concave mirror?",
    answer: "A concave mirror (converging mirror) has its reflecting surface curved inward. It can form real and inverted images and is used in torches, headlights, shaving mirrors, and solar furnaces. Key terms include the centre of curvature (C), principal focus (F), and pole (P). The radius of curvature R = 2f.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Spherical Mirrors",
    keywords: ["concave mirror", "converging mirror", "spherical mirror"]
  },
  {
    question: "What is a convex lens?",
    answer: "A convex lens (converging lens) is thicker at the centre and converges light rays to a focal point. It is used in magnifying glasses, cameras, the human eye, and microscopes. The lens formula is 1/v Ã¢Ë†â€™ 1/u = 1/f. Power P = 1/f (dioptres). A convex lens has positive power.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Lenses: Concave and Convex",
    keywords: ["convex lens", "converging lens", "lens formula", "magnifying glass"]
  },
  {
    question: "What is a convex mirror?",
    answer: "A convex mirror (diverging mirror) has its reflecting surface curved outward. It always forms a virtual, erect, and diminished image regardless of object position. It is used as a rear-view mirror in vehicles because it gives a wider field of view.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Spherical Mirrors",
    keywords: ["convex mirror", "diverging mirror", "rear-view mirror"]
  },
  {
    question: "What is dispersion of light?",
    answer: "Dispersion is the splitting of white light into its component colors when it passes through a prism.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Optics",
    keywords: ["dispersion", "spectrum"]
  },
  {
    question: "What is light?",
    answer: "Light is a form of energy that enables us to see objects. It travels in straight lines and exhibits properties like reflection and refraction.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Basics",
    keywords: ["light", "energy"]
  },
  {
    question: "What is reflection of light?",
    answer: "Reflection is the bouncing back of light when it strikes a surface. It follows the laws of reflection.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Reflection",
    keywords: ["reflection", "bounce"]
  },
  {
    question: "What is refraction index?",
    answer: "Refractive index is the ratio of the speed of light in vacuum to its speed in a medium. It indicates how much light bends in a medium.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Refraction",
    keywords: ["refractive index", "light speed"]
  },
  {
    question: "What is refraction of light?",
    answer: "Refraction is the bending of light when it passes from one medium to another of different optical density, because the speed of light changes. When light goes from rarer to denser medium it bends toward the normal; from denser to rarer it bends away. Laws of refraction: rays are coplanar, and Snell's Law: nÃ¢â€šÂ sin ÃŽÂ¸Ã¢â€šÂ = nÃ¢â€šâ€š sin ÃŽÂ¸Ã¢â€šâ€š.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Refraction of Light",
    keywords: ["refraction", "bending of light", "medium", "snell's law"]
  },
  {
    question: "What is Snell's Law?",
    answer: "Snell's Law states: nÃ¢â€šÂ sin i = nÃ¢â€šâ€š sin r, where i is the angle of incidence and r is the angle of refraction. The refractive index n = c/v (speed of light in vacuum / speed in medium). Glass has refractive index ~1.5; water has ~1.33. This explains why objects in water appear shallower than they are.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Snell's Law and Refractive Index",
    keywords: ["snell's law", "refractive index", "refraction formula", "n=c/v"]
  },
  {
    question: "What is the mirror formula?",
    answer: "The mirror formula relates object distance (u), image distance (v), and focal length (f): 1/v + 1/u = 1/f. All distances are measured from the pole of the mirror. Sign convention: distances in the direction of incident light are positive; opposite are negative. Magnification m = -v/u.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Mirror Formula and Magnification",
    keywords: ["mirror formula", "mirror equation", "focal length", "magnification"]
  },
  {
    question: "What is total internal reflection?",
    answer: "Total internal reflection occurs when light traveling from a denser to a rarer medium reflects completely back into the denser medium at angles greater than the critical angle.",
    chapterNum: 9, chapter: "Light: Reflection and Refraction", section: "Refraction",
    keywords: ["TIR", "critical angle"]
  },

  // â”€â”€â”€ CHAPTER 10: The Human Eye and the Colourful World â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "What is accommodation?",
    answer: "Accommodation is the ability of the eye lens to change its focal length to focus on near and distant objects.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Vision",
    keywords: ["accommodation", "lens"]
  },
  {
    question: "What is dispersion of white light?",
    answer: "Dispersion is the splitting of white light into its component seven colors (VIBGYOR) when it passes through a transparent medium like a glass prism. This occurs because different colors of light bend through different angles relative to the incident ray. Red light bends the least, while violet light bends the most.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Refraction of Light Through a Prism",
    keywords: ["dispersion", "white light", "prism", "spectrum", "VIBGYOR"]
  },
  {
    question: "What is human eye?",
    answer: "The human eye is a sense organ that allows us to see by detecting light and forming images on the retina.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Eye Structure",
    keywords: ["eye", "retina"]
  },
  {
    question: "What is hypermetropia and how is it corrected?",
    answer: "Hypermetropia, or far-sightedness, is a vision defect where a person can see distant objects clearly but struggles with near objects. It happens because the eyeball is too short or the lens has low converging power, causing images of near objects to form behind the retina. It is corrected using a convex (converging) lens.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Defects of Vision and Their Correction",
    keywords: ["hypermetropia", "far-sightedness", "convex lens", "retina defect"]
  },
  {
    question: "What is hypermetropia?",
    answer: "Hypermetropia is a defect in which distant objects are seen clearly but nearby objects appear blurred. It is corrected using convex lenses.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Defects",
    keywords: ["hypermetropia", "long sightedness"]
  },
  {
    question: "What is myopia and how is it corrected?",
    answer: "Myopia, or near-sightedness, is a defect where a person can see nearby objects clearly but cannot focus on distant objects. It occurs if the eyeball elongates or the lens is too curved, causing images to form in front of the retina. It is corrected by using a concave (diverging) lens of appropriate power.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Defects of Vision and Their Correction",
    keywords: ["myopia", "near-sightedness", "concave lens", "retina defect"]
  },
  {
    question: "What is myopia?",
    answer: "Myopia is a defect of vision in which nearby objects are seen clearly but distant objects appear blurred. It is corrected using concave lenses.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Defects",
    keywords: ["myopia", "short sightedness"]
  },
  {
    question: "What is the power of accommodation of the eye?",
    answer: "The power of accommodation is the ability of the eye lens to adjust its focal length to clearly focus on objects at varying distances. The ciliary muscles contract to thicken the lens for near objects and relax to thin the lens for distant objects. In young adults, the normal range is from 25 cm to infinity.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Power of Accommodation",
    keywords: ["power of accommodation", "eye lens", "focal length", "ciliary muscles"]
  },
  {
    question: "Why do stars twinkle but planets do not?",
    answer: "Stars twinkle because their light undergoes atmospheric refraction as it passes through layers of varying optical density in Earth's atmosphere. Because stars are effectively point sources of light, this shifting refraction causes their apparent brightness to fluctuate. Planets are much closer and act as extended sources of light, canceling out the twinkling effect.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Atmospheric Refraction",
    keywords: ["twinkling", "stars", "planets", "atmospheric refraction", "point source"]
  },
  {
    question: "Why does the sky appear blue?",
    answer: "The sky appears blue due to the scattering of sunlight by earth's atmosphere. The fine particles and gas molecules in the air are smaller than the wavelength of visible light. They scatter shorter wavelengths (blue light) much more effectively than longer wavelengths (red light). This scattered blue light reaches our eyes.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Scattering of Light",
    keywords: ["blue sky", "scattering", "sunlight", "wavelength", "atmosphere"]
  },
  {
    question: "Why is the sky blue?",
    answer: "The sky appears blue due to scattering of shorter wavelengths of light by air molecules in the atmosphere. This is called Rayleigh scattering.",
    chapterNum: 10, chapter: "The Human Eye and the Colourful World", section: "Scattering",
    keywords: ["sky blue", "scattering"]
  },

  // â”€â”€â”€ CHAPTER 11: Electricity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "Define 1 volt potential difference.",
    answer: "One volt is defined as the potential difference between two points in a current-carrying conductor when 1 Joule of work is done to move a charge of 1 Coulomb from one point to the other. Mathematically, 1 V = 1 J / 1 C.",
    chapterNum: 11, chapter: "Electricity", section: "Electric Potential and Potential Difference",
    keywords: ["1 volt", "potential difference", "Joule", "Coulomb", "work done"]
  },
  {
    question: "On what factors does the resistance of a conductor depend?",
    answer: "The resistance of a conductor depends on four factors: (1) its length (resistance is directly proportional to length), (2) its cross-sectional area (inversely proportional to area), (3) the nature of its material (resistivity), and (4) its temperature. The formula is R = â•§Ã¼(L/A).",
    chapterNum: 11, chapter: "Electricity", section: "Factors on which the Resistance of a Conductor Depends",
    keywords: ["resistance factors", "length", "area", "resistivity", "temperature"]
  },
  {
    question: "State Ohm's Law.",
    answer: "Ohm's Law states that the potential difference (V) across the ends of a given metallic wire in an electric circuit is directly proportional to the current (I) flowing through it, provided its temperature remains the same. The mathematical expression is V = IR, where R is the resistance of the conductor.",
    chapterNum: 11, chapter: "Electricity", section: "Ohm's Law",
    keywords: ["Ohm's Law", "potential difference", "current", "resistance", "V=IR"]
  },
  {
    question: "What is electric power and its SI unit?",
    answer: "Electric power is the rate at which electrical energy is consumed or dissipated in an electric circuit. The formulas are P = VI, P = Iâ”¬â–“R, and P = Vâ”¬â–“/R. The SI unit of electric power is the Watt (W). 1 Watt is the power consumed by a device carrying 1 Ampere of current under a potential difference of 1 Volt.",
    chapterNum: 11, chapter: "Electricity", section: "Electric Power",
    keywords: ["electric power", "Watt", "P=VI", "rate of energy"]
  },
  {
    question: "What is Joule's Law of Heating?",
    answer: "Joule's Law of Heating states that the heat produced in a resistor is directly proportional to the square of the current (Iâ”¬â–“), proportional to the resistance (R), and proportional to the time (t) for which the current flows. The formula is H = Iâ”¬â–“Rt. This principle is used in electric heaters, irons, and toasters.",
    chapterNum: 11, chapter: "Electricity", section: "Heating Effect of Electric Current",
    keywords: ["Joule's Law", "heating effect", "H=I2Rt", "resistor"]
  },
  {
    question: "What is the equivalent resistance when resistors are connected in parallel?",
    answer: "In a parallel connection, the potential difference across all resistors is the same, but the total current splits among them. The reciprocal of the equivalent resistance (Rp) equals the sum of the reciprocals of individual resistances: 1/Rp = 1/R1 + 1/R2 + 1/R3 + ... The equivalent resistance is always less than the lowest individual resistance.",
    chapterNum: 11, chapter: "Electricity", section: "Resistors in Parallel",
    keywords: ["parallel connection", "equivalent resistance", "1/Rp", "voltage constant"]
  },
  {
    question: "What is the equivalent resistance when resistors are connected in series?",
    answer: "When resistors are connected in series, the same current flows through each resistor, and the total potential difference is the sum of the individual potential differences. The equivalent resistance (Rs) is simply the sum of their individual resistances: Rs = R1 + R2 + R3 + ... This total resistance is always greater than the highest individual resistance.",
    chapterNum: 11, chapter: "Electricity", section: "Resistors in Series",
    keywords: ["series connection", "equivalent resistance", "R1+R2", "current constant"]
  },
  {
    question: "Why are coils of electric toasters made of an alloy rather than a pure metal?",
    answer: "Coils of electric heating devices are made of alloys (like nichrome) because alloys generally have a much higher resistivity than their constituent pure metals. Furthermore, alloys do not oxidize (burn) readily at high temperatures, making them highly durable and ideal for heating elements.",
    chapterNum: 11, chapter: "Electricity", section: "Heating Effect of Electric Current",
    keywords: ["alloy", "resistivity", "oxidize", "heating devices", "nichrome"]
  },

  // â”€â”€â”€ CHAPTER 12: Magnetic Effects of Electric Current â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    question: "State Fleming's Left-Hand Rule.",
    answer: "Fleming's Left-Hand Rule determines the direction of the force acting on a current-carrying conductor placed in a magnetic field. Stretch the thumb, forefinger, and middle finger of your left hand mutually perpendicular. If the forefinger points to the magnetic field and the middle finger to the current, the thumb will point in the direction of motion or force.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Force on a Current-Carrying Conductor in a Magnetic Field",
    keywords: ["Fleming's Left-Hand Rule", "force", "magnetic field", "current", "motion"]
  },
  {
    question: "State the Right-Hand Thumb Rule.",
    answer: "The Right-Hand Thumb Rule is used to find the direction of the magnetic field associated with a current-carrying conductor. It states: Imagine holding a straight current-carrying conductor in your right hand such that the thumb points in the direction of the current. Then your wrapped fingers will show the direction of the magnetic field lines.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Magnetic Field due to a Current-Carrying Conductor",
    keywords: ["Right-Hand Thumb Rule", "magnetic field direction", "current", "conductor"]
  },
  {
    question: "What are the properties of magnetic field lines?",
    answer: "Magnetic field lines have several properties: (1) They emerge from the North pole and merge at the South pole outside the magnet. Inside, they go from South to North. (2) They form closed, continuous curves. (3) The closer the lines, the stronger the magnetic field. (4) No two field lines ever intersect each other.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Magnetic Field and Field Lines",
    keywords: ["magnetic field lines", "north pole", "south pole", "intersect", "closed curves"]
  },
  {
    question: "What causes an electric short circuit?",
    answer: "An electric short circuit occurs when the live wire (positive) and the neutral wire (negative) come into direct contact. This can happen if the insulation of the wires is damaged or if there is a fault in the appliance. It causes the resistance in the circuit to drop to almost zero, leading to an extremely high current flow and potential fire hazards.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Domestic Electric Circuits",
    keywords: ["short circuit", "live wire", "neutral wire", "low resistance", "fire hazard"]
  },
  {
    question: "What is a solenoid?",
    answer: "A solenoid is a coil of many circular turns of insulated copper wire wrapped closely in the shape of a cylinder. When an electric current is passed through it, it produces a magnetic field very similar to that of a bar magnet. The field inside the solenoid is uniform, represented by parallel straight lines.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Magnetic Field due to a Current in a Solenoid",
    keywords: ["solenoid", "coil", "magnetic field", "bar magnet", "uniform field"]
  },
  {
    question: "What is the function of an earth wire in domestic circuits?",
    answer: "The earth wire is a safety measure, especially for appliances with a metallic body (like a refrigerator or toaster). It provides a low-resistance conducting path for any leaked current to the earth. If there is a short circuit or leakage, the user is protected from severe electric shocks because the current flows into the ground.",
    chapterNum: 12, chapter: "Magnetic Effects of Electric Current", section: "Domestic Electric Circuits",
    keywords: ["earth wire", "safety", "leaked current", "electric shock", "grounding"]
  },

  // ─── CHAPTER 13: Our Environment ──────────────────────────────────
  {
    question: "What is an ecosystem?",
    answer: "An ecosystem is a self-sustaining unit that consists of all the living organisms (biotic components) and the non-living environment (abiotic components) in a given area, interacting with each other. Examples include a pond, a forest, or a grassland. Energy flows through an ecosystem via food chains and food webs.",
    chapterNum: 13, chapter: "Our Environment", section: "Ecosystem - What are its Components?",
    keywords: ["ecosystem", "biotic", "abiotic", "living", "non-living"]
  },
  {
    question: "What is a food chain?",
    answer: "A food chain is a linear sequence that shows the transfer of food energy from one organism to the next. It always begins with a producer (green plant) and ends with a top predator or decomposer. Example: Grass → Grasshopper → Frog → Snake → Eagle. Energy is lost at each step, limiting the chain to 3–4 trophic levels.",
    chapterNum: 13, chapter: "Our Environment", section: "Food Chains and Webs",
    keywords: ["food chain", "producer", "consumer", "energy transfer", "trophic level"]
  },
  {
    question: "What is a food web?",
    answer: "A food web is an interconnected network of multiple food chains in an ecosystem. It shows the complex feeding relationships among organisms and is a more realistic representation of energy flow than a single food chain. Removing one organism from a food web can affect many others.",
    chapterNum: 13, chapter: "Our Environment", section: "Food Chains and Webs",
    keywords: ["food web", "interconnected", "feeding relationships", "ecosystem"]
  },
  {
    question: "What are producers, consumers, and decomposers?",
    answer: "Producers are autotrophs (like green plants and algae) that synthesize their own food through photosynthesis. Consumers are heterotrophs that feed on other organisms — herbivores eat plants (primary consumers), carnivores eat animals (secondary/tertiary consumers). Decomposers (bacteria and fungi) break down dead organic matter and return nutrients to the soil.",
    chapterNum: 13, chapter: "Our Environment", section: "Ecosystem - What are its Components?",
    keywords: ["producers", "consumers", "decomposers", "autotrophs", "heterotrophs"]
  },
  {
    question: "What is the 10% energy law?",
    answer: "The 10% law, proposed by Lindemann, states that only about 10% of the energy at one trophic level is transferred to the next trophic level. The remaining 90% is lost as heat during metabolic processes. This is why food chains are limited to 3–4 levels and why it is more energy-efficient for humans to eat plants than animals.",
    chapterNum: 13, chapter: "Our Environment", section: "How do our Activities Affect the Environment?",
    keywords: ["10% law", "energy transfer", "trophic level", "Lindemann", "energy loss"]
  },
  {
    question: "What is biological magnification?",
    answer: "Biological magnification (biomagnification) is the progressive increase in the concentration of harmful chemicals (like pesticides such as DDT) at each successive trophic level of a food chain. Since these substances are not biodegradable, they accumulate in the fatty tissues of organisms and reach their highest concentrations in top predators, including humans.",
    chapterNum: 13, chapter: "Our Environment", section: "How do our Activities Affect the Environment?",
    keywords: ["biological magnification", "biomagnification", "DDT", "pesticides", "trophic level"]
  },
  {
    question: "What are biodegradable and non-biodegradable wastes?",
    answer: "Biodegradable wastes are substances that can be broken down by microorganisms (decomposers) into simpler, harmless substances. Examples include vegetable peels, paper, and animal dung. Non-biodegradable wastes cannot be broken down by decomposers and persist in the environment for a very long time. Examples include plastics, DDT, and glass.",
    chapterNum: 13, chapter: "Our Environment", section: "Eco-Friendly Activities",
    keywords: ["biodegradable", "non-biodegradable", "microorganisms", "decomposers", "plastic"]
  },
  {
    question: "What is the ozone layer and why is it important?",
    answer: "The ozone layer is a region of Earth's stratosphere that contains a high concentration of ozone (O₃) molecules. It acts as a shield, absorbing the majority of the Sun's harmful ultraviolet (UV) radiation. Depletion of the ozone layer by chemicals like CFCs (chlorofluorocarbons) leads to increased UV exposure, causing skin cancer, cataracts, and harm to ecosystems.",
    chapterNum: 13, chapter: "Our Environment", section: "Ozone Layer and How it is Getting Depleted",
    keywords: ["ozone layer", "UV radiation", "stratosphere", "CFCs", "ozone depletion"]
  },
  {
    question: "What causes ozone layer depletion?",
    answer: "The ozone layer is depleted mainly by synthetic chemicals called chlorofluorocarbons (CFCs), used in refrigerants and aerosol sprays. In the stratosphere, UV radiation breaks down CFCs to release chlorine atoms, which catalytically destroy ozone molecules. Other culprits include halons and nitrous oxide.",
    chapterNum: 13, chapter: "Our Environment", section: "Ozone Layer and How it is Getting Depleted",
    keywords: ["ozone depletion", "CFCs", "chlorofluorocarbons", "chlorine", "aerosol"]
  },
  {
    question: "What is environmental pollution?",
    answer: "Environmental pollution is the contamination of air, water, or soil by harmful substances (pollutants) introduced by human activities. Types include air pollution (from vehicle emissions and industries), water pollution (from sewage and industrial effluents), and soil pollution (from pesticides and plastics).",
    chapterNum: 13, chapter: "Our Environment", section: "How do our Activities Affect the Environment?",
    keywords: ["environmental pollution", "air pollution", "water pollution", "soil pollution", "pollutants"]
  },
  {
    question: "What is the role of decomposers in an ecosystem?",
    answer: "Decomposers such as bacteria and fungi break down dead plants and animals into simpler inorganic substances like carbon dioxide, water, and minerals. This process recycles nutrients back into the soil, making them available again for producers. Without decomposers, the Earth would be littered with dead matter and nutrients would not be recycled.",
    chapterNum: 13, chapter: "Our Environment", section: "Ecosystem - What are its Components?",
    keywords: ["decomposers", "bacteria", "fungi", "nutrient cycling", "recycle"]
  },
  {
    question: "What are trophic levels?",
    answer: "A trophic level is the position an organism occupies in a food chain based on its source of nutrition. Producers (plants) form the first trophic level. Primary consumers (herbivores) form the second. Secondary consumers (carnivores that eat herbivores) form the third, and so on. Energy decreases as you move up the trophic levels.",
    chapterNum: 13, chapter: "Our Environment", section: "Food Chains and Webs",
    keywords: ["trophic levels", "food chain", "producers", "primary consumer", "energy"]
  },
  {
    question: "How do human activities affect the environment?",
    answer: "Human activities like industrialization, deforestation, use of chemical fertilizers and pesticides, and burning of fossil fuels pollute the environment. They cause air, water, and soil pollution, deplete the ozone layer, and contribute to global warming and loss of biodiversity. Waste accumulation of non-biodegradable substances is a major concern.",
    chapterNum: 13, chapter: "Our Environment", section: "How do our Activities Affect the Environment?",
    keywords: ["human activities", "environment", "pollution", "deforestation", "fossil fuels"]
  },
  {
    question: "What is garbage management?",
    answer: "Garbage management involves collecting, segregating, and disposing of waste in an eco-friendly manner. Biodegradable waste can be composted. Non-biodegradable waste should be recycled or disposed of safely to minimize environmental harm. The 3R principle — Reduce, Reuse, Recycle — helps manage waste effectively.",
    chapterNum: 13, chapter: "Our Environment", section: "Eco-Friendly Activities",
    keywords: ["garbage management", "waste disposal", "compost", "recycle", "3R"]
  },
  {
    question: "Why should we use eco-friendly practices?",
    answer: "Eco-friendly practices reduce pollution, conserve resources, and protect biodiversity. Using cloth bags instead of plastic, carpooling, using renewable energy, and composting food waste all help reduce our environmental footprint. These practices help ensure a sustainable environment for future generations.",
    chapterNum: 13, chapter: "Our Environment", section: "Eco-Friendly Activities",
    keywords: ["eco-friendly", "sustainable", "pollution reduction", "renewable energy", "biodiversity"]
  },
];

// â”€â”€ MATCHING ENGINE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function similarity(a: string, b: string): number {
  const setA = new Set(a.split(' ').filter(w => w.length > 2));
  const setB = new Set(b.split(' ').filter(w => w.length > 2));
  let overlap = 0;
  setA.forEach(w => { if (setB.has(w)) overlap++; });
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : overlap / union;
}

export function findCachedAnswer(query: string): QAEntry | null {
  const nq = normalize(query);
  for (const entry of QA_CACHE) {
    const allMatch = entry.keywords.every ? entry.keywords.every((kw: string) => nq.includes(normalize(kw))) : false;
    if (allMatch) return entry;
  }
  let best: QAEntry | null = null;
  let bestScore = 0;
  for (const entry of QA_CACHE) {
    const score = similarity(nq, normalize(entry.question));
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return bestScore >= 0.55 ? best : null;
}

