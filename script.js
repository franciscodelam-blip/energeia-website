
const entries=[
{year:'2003',type:'history',title:'Energeia is founded in Mexico',short:'José Alberto Garibaldi and Manuel Estrada establish Energeia, connecting climate economics, development and international negotiations.',more:'Energeia was founded in Mexico in 2003 by José Alberto Garibaldi and Manuel Estrada. Its early work explored Latin American positions in climate negotiations and the relationship between domestic energy policy and international cooperation.'},
{year:'2005',type:'history',title:'London and the Gleneagles Dialogue',short:'Energeia establishes itself in London and participates in a broader conversation on climate, clean energy and sustainable development.',more:'Energeia was subsequently established in London in 2005. The Gleneagles Dialogue, launched under the UK G8 presidency, offered an early setting for linking climate change, development, finance and technology, including regional exchanges.'},
{year:'2007',type:'history',title:'Scaling up climate responses',short:'Regional discussions and a workshop in Mexico explore how to move from individual projects to larger national and sectoral programmes.',more:'Discussions in Santiago and Seoul and a Scaling Up Workshop in Mexico explored how policy, finance, technology and carbon mechanisms could support programmes of greater scale.'},
{year:'2009',type:'paper',title:'The Economics of Boldness',short:'A proposition about how cooperation can make ambitious climate action more advantageous for developing and middle-income countries.',more:'The Economics of Boldness explored how greater collective ambition, cooperation, finance and differentiated contributions could alter countries’ development choices and incentives for action. The work appeared in an Energeia paper in 2009 and was later published in Climate Policy in 2014.'},
{year:'2009',type:'paper',title:'Scaling Up Investment in Climate Change Mitigation Activities',short:'Research prepared for the World Bank Carbon Finance Unit develops a strategic, programme-based approach to investment.',more:'This January 2009 paper argued for beginning with the activities and institutional barriers to be addressed rather than with a preferred financing instrument. It discussed vertical and horizontal aggregation and a strategic programme approach.'},
{year:'2014',type:'history',title:'Quisqueya and the Dominican Republic',short:'Country-level work connects mitigation, adaptation, energy security, development planning and investment.',more:'The Dominican Republic work connected national development planning and climate responses, and considered strategic programmes and financing in a Dominican Republic–Haiti context.'},
{year:'2014',type:'paper',title:'A Middle Path / The Middle Is Beautiful',short:'Research develops the diplomatic, developmental and financial foundations for ambitious climate cooperation.',more:'These strands brought together mitigation and adaptation, development, finance, institutional risk and proactive coalition diplomacy.'},
{year:'2015',type:'paper',title:'Enhancing Bold Collective Action: Variable Geometry',short:'A proposal for universal but differentiated cooperation, nationally determined pathways, ambition cycles and voluntary coalitions.',more:'The variable-geometry paper proposed a universal but differentiated regime with nationally determined pathways, ambition cycles, common transparency, voluntary coalitions and selective incentives.'},
{year:'2015',type:'history',title:'The Paris Agreement',short:'The international climate regime adopts nationally determined contributions, progression and a recurring global stocktake.',more:'The Paris Agreement institutionalised universal NDCs, progression, a five-year stocktake, common transparency, adaptation, voluntary cooperation and facilitative compliance. The Energeia history compares these developments with its earlier proposals, distinguishing convergence from direct influence.'},
{year:'2016',type:'paper',title:'Raising the Bar / Making it Happen',short:'Two connected bodies of work address mitigation–adaptation synergies and society-wide implementation.',more:'Raising the Bar examined reinforcing relationships between mitigation and adaptation. Making it Happen connected national contributions to institutions, finance, sectors and implementation across society.'},
{year:'2020',type:'history',title:'Learning by Doing',short:'An international, multidisciplinary programme develops place-specific visions of climate-compatible futures and the Good Life.',more:'Learning by Doing developed visions in Mexico, the Dominican Republic, South Africa, Lebanon and Latin America, bringing together quantitative modelling, qualitative narratives, country-level experimentation and iterative learning.'},
{year:'2023',type:'history',title:'Good Life conversations at ECLAC',short:'A regional seminar in Santiago connects public philosophy, development, modelling, graphics and just transition.',more:'Energeia co-organised a March 2023 regional seminar with ECLAC, in coordination with the Spanish Office for Climate Change, placing Good Life narratives alongside macroeconomic analysis and country modelling.'},
{year:'2024',type:'history',title:'Cambridge: Political Economy and the Good Life',short:'Research exchanges connect climate-compatible ways of living with public philosophy and political economy.',more:'A December 2024 Cambridge Learning by Doing research seminar was followed by the co-organised Political Economy and the Good Life conference at Corpus Christi College.'},
{year:'2026',type:'history',title:'New forms of cooperation',short:'Middle is Beautiful / Alliances for Ambitious Action extends negotiation support, learning and coalition-building.',more:'The 2024–2026 programme developed strategy, country support, courses, fellows, elders and direct negotiation assistance, connecting domestic implementation and international climate diplomacy.'}
];
const root=document.getElementById('events');root.innerHTML=entries.map((e,i)=>`<article class="event ${e.type==='paper'?'paper':''}" data-type="${e.type}" ${i===0?'id="y2003"':(!entries.slice(0,i).some(p=>p.year===e.year)?`id="y${e.year}"`:'')}><div class="event-year">${e.year}</div><button class="event-card" data-index="${i}"><span class="tag">${e.type==='paper'?'Research paper':'History & projects'}</span><h3>${e.title}</h3><p>${e.short}</p><span class="read">Explore →</span></button></article>`).join('');
document.querySelectorAll('.event-card').forEach(btn=>btn.addEventListener('click',()=>{const e=entries[+btn.dataset.index];document.getElementById('detail-date').textContent=e.year+' · '+(e.type==='paper'?'Research paper':'History & projects');document.getElementById('detail-title').textContent=e.title;document.getElementById('detail-text').textContent=e.more;document.getElementById('detail').showModal()}));
function filter(v){document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===v));document.querySelectorAll('.event').forEach(el=>el.hidden=v!=='all'&&el.dataset.type!==v)}document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));document.querySelector('[data-filterlink]').addEventListener('click',()=>filter('paper'));


const mapSelection=document.getElementById('map-selection');
document.querySelectorAll('.map-dot').forEach(dot=>{
 function selectCountry(){document.querySelectorAll('.map-dot').forEach(d=>d.classList.remove('selected'));dot.classList.add('selected');const name=dot.dataset.country;mapSelection.innerHTML='<strong></strong><p>Energeia lists this location among the countries where it has worked. A detailed project profile is not yet available in this prototype.</p>';mapSelection.querySelector('strong').textContent=name;}
 dot.addEventListener('click',selectCountry);
 dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCountry()}});
});


// Areas of Work — independent of timeline and map
const workAreas = [
  {
    "title": "Climate Finance & Cooperation",
    "overview": "Energeia connects governments, financial institutions, civil society and the private sector to develop low-carbon and climate-resilient initiatives.",
    "projects": [
      [
        "2025",
        "Middle is Beautiful — private-sector cooperation",
        "Initiatives in Costa Rica and the Dominican Republic, exchanges in Panama and cooperation on coastal agroforestry."
      ],
      [
        "2020–2023",
        "Learning by Doing",
        "IKI-funded initiative supporting civil society in developing low-carbon pathways in Mexico, Lebanon, South Africa and the Dominican Republic."
      ],
      [
        "2017–2019",
        "International project development",
        "Coordination of a nine-organisation consortium supporting low-carbon and climate-resilient projects across Africa, Asia, Latin America and the Caribbean."
      ],
      [
        "2017–2018",
        "Public–private cooperation in energy",
        "Initiative involving Mexico’s Energy Sectoral Fund, the World Economic Forum and Mission Innovation."
      ],
      [
        "2016–2017",
        "Financing climate action",
        "Research for UN ECLAC and Euroclima on financing mitigation and adaptation under NDCs."
      ],
      [
        "2008",
        "Strategic Programme Approaches",
        "Approach combining carbon markets and national contributions for the World Bank Carbon Partnership and UNFCCC Expert Group on Technology Transfer."
      ],
      [
        "2008",
        "Finanzas Carbono",
        "Concept note leading to the IDB platform."
      ],
      [
        "2007–2009",
        "Scaling up climate finance",
        "Regional meetings and policy exchanges in Asia and Latin America with UN ESCAP and UN ECLAC."
      ],
      [
        "",
        "NDC Invest Platform",
        "Coordination of a ten-company consortium providing NDC and financial support for the IDB."
      ],
      [
        "",
        "Food security and sustainable finance",
        "Advice for the Prince of Wales’s International Sustainability Unit in connection with the Mexico G20 Summit."
      ],
      [
        "",
        "Multilateral climate funds",
        "Advice to UK government departments on climate development funds and the SECCI framework."
      ],
      [
        "",
        "Climate finance for development banks",
        "Climate finance framework for Nacional Financiera and BANOBRAS under the IDB."
      ],
      [
        "",
        "International climate finance advisory",
        "Advice for the Club de Madrid and coordination of regional climate economics projects and funding."
      ],
      [
        "",
        "Gleneagles Dialogue",
        "Support for the dialogue on low-carbon economy, regional outreach and climate finance."
      ]
    ]
  },
  {
    "title": "Energy & Climate Policy",
    "overview": "Energeia connects national energy priorities with international climate commitments through policy analysis, innovation and cooperation.",
    "projects": [
      [
        "2022–2023",
        "Energy policy and climate negotiations",
        "Support for Costa Rica and the Dominican Republic ahead of COP28, and Dominican domestic energy policy advice ahead of COP27."
      ],
      [
        "2020",
        "G20 Energy Stewardship",
        "Co-organisation and leadership of discussions on accelerating energy research and investment."
      ],
      [
        "2020",
        "Mitigation, adaptation and energy",
        "G20 discussions on mitigation and adaptation synergies, nature-based services and energy."
      ],
      [
        "2019–2020",
        "Circular Carbon Economy",
        "Advice to the G20 presidency on the concept and emissions management."
      ],
      [
        "2019–2020",
        "International energy cooperation",
        "Support for Mission Innovation and Clean Energy Ministerial secretariats in developing 2020 plans."
      ],
      [
        "2019–2020",
        "Energy and climate advisory in the Middle East",
        "Specialist advice for consulting firms including Oliver Wyman, Huxley and AT Kearney."
      ],
      [
        "2018",
        "Chile’s transition towards net zero",
        "Advice to the Ministry of Finance on economic costs and sectoral measures for net zero by 2050."
      ],
      [
        "2018",
        "Sovereign green bonds",
        "Advice to Chile’s Ministry of Finance on sovereign green bond options."
      ],
      [
        "2017–2018",
        "Climate and energy financial strategy",
        "Collaboration with the IDB on a financial strategy."
      ],
      [
        "2017–2018",
        "Energy access and innovation",
        "Project for GIZ on energy access and democratisation, and work with Green Momentum on innovation prizes."
      ]
    ]
  },
  {
    "title": "NDC Implementation",
    "overview": "Energeia connects Nationally Determined Contributions (NDCs) with public policy, financing, institutional capacity and stakeholder participation.",
    "projects": [
      [
        "2025",
        "Indigenous peoples and local communities",
        "Consultations in Caribbean Costa Rica and Madre de Dios, Peru, connecting national climate action with UNFCCC negotiations."
      ],
      [
        "2024–2025",
        "National climate commitments in Latin America",
        "Fellows participating in national NDC teams in Costa Rica and the Dominican Republic, with exchanges in Panama."
      ],
      [
        "2023",
        "Renewing the Dominican Republic’s NDC",
        "Support for government proposals with the NDC Partnership."
      ],
      [
        "2015–2016",
        "International INDC support",
        "Collaboration with Ricardo AEA and CDKN on Intended Nationally Determined Contributions in the Dominican Republic, Mexico, Bangladesh and Kenya."
      ],
      [
        "2015",
        "Global NDC Conference",
        "Advice to Germany’s BMUB and GIZ for the Berlin conference."
      ],
      [
        "2015",
        "Mitigation and MRV capacity building",
        "Contributions to the Summer School on Mitigation and Measurement, Reporting and Verification in Cuernavaca."
      ],
      [
        "2015",
        "Co-benefits and synergies in national commitments",
        "Research project for CDKN on incorporating co-benefits and synergies into INDCs."
      ],
      [
        "2014–2015",
        "Mitigation, adaptation and capacity-building synergies",
        "Research on relationships subsequently reflected in the Lima Call for Climate Action and Paris negotiation text."
      ],
      [
        "2012",
        "Quisqueya Platform",
        "Programme for CDKN integrating mitigation, adaptation and climate finance."
      ],
      [
        "",
        "Regional cooperation on national climate commitments",
        "Preparatory programmes connecting Latin American and Caribbean countries with Least Developed Countries and Small Island Developing States."
      ]
    ]
  },
  {
    "title": "Climate Economics & Research",
    "overview": "Energeia combines economics, climate science, philosophy and public policy to explore low-carbon development and human well-being.",
    "projects": [
      [
        "2025",
        "Low-carbon transport in the Dominican Republic",
        "Update of the energy and transport assessment supporting the Low Carbon Transport Initiative."
      ],
      [
        "2025",
        "HOPE: A graphic novel",
        "Publication presenting research on economics and the good life by Fondo de Cultura Económica."
      ],
      [
        "2024–2025",
        "Climate Action Negotiator Trackers",
        "Analytical trackers covering UNFCCC negotiation tracks."
      ],
      [
        "2024",
        "Post-liberal approaches to politics, ecology and climate",
        "Interdisciplinary discussions at Corpus Christi College, Cambridge, involving experts from more than twenty countries."
      ],
      [
        "2023",
        "A low-carbon good life in Latin America",
        "Meeting at UN ECLAC involving twenty Latin American parties, negotiators and economists."
      ],
      [
        "2023",
        "Energy and transport policy in the Dominican Republic",
        "Assessment of energy expansion and transport policy coherence towards net zero."
      ],
      [
        "2023",
        "Long-term transport modelling in South Africa",
        "Sectoral modelling in response to a government request."
      ],
      [
        "2023",
        "Economic modelling in Mexico",
        "Long-term general equilibrium models of welfare effects of low-carbon policies."
      ],
      [
        "2022",
        "Interdisciplinary research in Scotland",
        "Week-long meeting at Craiganour Estate as part of Learning by Doing."
      ],
      [
        "2008–2010",
        "The Economics of Boldness",
        "Integrated climate and economic modelling of mitigation, adaptation, investment and risk reduction."
      ],
      [
        "2006–2009",
        "Low-carbon societies",
        "Research steering committee with Japan and the UK involving scientists from twenty major emitting countries."
      ],
      [
        "",
        "International interdisciplinary dialogue",
        "Panel in New York with Our Common Home and the Telos Institute."
      ],
      [
        "",
        "ACT2015 Consortium",
        "International consortium of nine organisations producing a draft Paris climate treaty and supporting research."
      ],
      [
        "",
        "Low-carbon development and the good life",
        "Long-term development plans, visual interfaces and graphic novels connecting economics, philosophy, climate science and collective action."
      ]
    ]
  },
  {
    "title": "Multilateral Climate Negotiations",
    "overview": "Energeia provides strategic, technical and analytical support to governments and international negotiation groups.",
    "projects": [
      [
        "2025",
        "Middle is Beautiful — COP30 negotiation support",
        "Support for more than twenty fellows negotiating for AILAC and AOSIS parties."
      ],
      [
        "2024–2025",
        "International negotiation coordination",
        "Coordination ahead of SB62 and COP30, and expert support at COP29 in Baku."
      ],
      [
        "2023–2025",
        "Climate Ambition Support Alliance (CASA)",
        "Strategic advice to DAI on the alliance’s direction, including links between NDC implementation and negotiation support."
      ],
      [
        "2023",
        "AILAC negotiation support at COP28",
        "Preparatory meetings, analysis of submissions and positions, strategic advice and on-site assistance."
      ],
      [
        "2022–2023",
        "Strengthening AILAC’s negotiating capacity",
        "Funding proposals and direct financial support following the loss of the advisory unit."
      ],
      [
        "2022",
        "COP27 side events",
        "Preparation of side events for UN ECLAC and the Dominican Republic."
      ],
      [
        "2014–2017",
        "Because the Oceans",
        "Advice on incorporating ocean issues into IPCC and UNFCCC agendas and securing funding."
      ],
      [
        "2014",
        "COP20 presidency support",
        "Participation in the High-Level Opinion Leaders Group supporting strategy and international engagement."
      ],
      [
        "2011–2014",
        "Acting Together for Bold Outcomes (ATBO)",
        "CDKN negotiation support project involving representatives of more than fifty countries."
      ],
      [
        "2010–2011",
        "UNFCCC transparency framework",
        "Negotiation capacity support and contributions to drafting key elements of the framework."
      ],
      [
        "2010",
        "Cartagena Dialogue",
        "Contributions to its establishment and subsequent international meetings."
      ],
      [
        "2007–2013",
        "Latin American regional climate cooperation",
        "Thirteen regional workshops contributing to the emergence of AILAC."
      ],
      [
        "Since 2012",
        "OECD Climate Change Expert Group",
        "Membership and participation as reported in the activity report."
      ],
      [
        "",
        "International delegation and negotiation group support",
        "Support for delegations from Chile, Costa Rica, the Dominican Republic, Mexico, Peru, Panama, the Marshall Islands, the UK and EU presidency, and groups including AILAC, AOSIS, GRULAC and the High Ambition Coalition."
      ]
    ]
  }
];
const areaDialog = document.getElementById('area-detail');
function openArea(index){
 const area=workAreas[index];
 document.getElementById('area-title').textContent=area.title;
 document.getElementById('area-overview').textContent=area.overview;
 const list=document.getElementById('area-projects'); list.replaceChildren();
 area.projects.forEach(([date,title,description])=>{
  const item=document.createElement('article'); item.className='area-project';
  if(date){const d=document.createElement('div');d.className='area-date';d.textContent=date;item.append(d);}
  const heading=document.createElement('h4');heading.textContent=title;
  const p=document.createElement('p');p.textContent=description;item.append(heading,p);list.append(item);
 });
 if(index===2){const link=document.createElement('button');link.type='button';link.className='area-cross';link.textContent='Related project: Climate Ambition Support Alliance →';link.addEventListener('click',()=>openArea(4));list.append(link);}
 if(!areaDialog.open)areaDialog.showModal();
 areaDialog.querySelector('.area-dialog-body').scrollTop=0;
}
document.querySelectorAll('.area-open').forEach(button=>button.addEventListener('click',()=>openArea(Number(button.dataset.area))));
areaDialog.querySelector('.area-close').addEventListener('click',()=>areaDialog.close());
