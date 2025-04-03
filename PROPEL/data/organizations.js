
const ords=['https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S-WEB-Goal-04.png',
            'https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2019/09/S-WEB-Goal-03.png'
];

const organizations = [
    {
        id: 1,
        name: "Kantaya",
        logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAMFBMVEVHcEz/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTv/aTsIxS4xAAAAD3RSTlMAxu4PHpyLU92vL0JicGvNJCYxAAAAsElEQVQokXXSVw6AMAgAUMBOF/e/rdIlVuTHxJeWVYAe0SMxE/oIU7jMKrLT5nkKP2ih2e7rl2ZfkqhqnJNAsWDbTuFG2+LJDHCYtsmZA9CyFXLJapXjwMmHrJR3E/W+L0r7G9sn09N6mrFY6yBMWMbS/61vzHpH+B5QXZQbDWkMdUttLPE12rNabYN30NifDrViNG7NTpXgKRt6RtzHAxqVWVFssU2Qfkgw/Rok/LcLQDsbdoyhiaMAAAAASUVORK5CYII=",
        description: "We are a non-profit organization seeking to transform and impact the lives of vulnerable Peruvian children via quality education.",
        tags: ["Peru", "Education", "Fellowship"],
        overview: {
                    country: "Peru",
                    yearFounded: 2010,
                    orgSize: "Medium",
                    cause: "Education",
                    programs: ["After School"],
                    population: ["Children","Adults"],
                    training: "Fellowship Cohort 4",
                    ods: [ords[0],ords[1]]
        },
        impact: {
                    beneficiaries: ["5k - 10k direct","10k - 100k indirect"],
                    report: "Not yet",
                    digitalizacion_level:[1,2,3,1]
        },
        financial: {
                    revenue: "76,297",
                    expenses: "39,881",
                    fundingSources: {
                                    own: 0.1,
                                    companies: 0.2,
                                    grants: 0.1,
                                    government: 0.35,
                                    clients: 0.25
                    },
                    grantsAwarded: ["Ruralia", "Impulso BCP"]
        }
    },
    {
        id: 2,
        name: "Teach For All",
        logo:"https://static.wixstatic.com/media/b5a381_f2462d0b6ff34165845f5e87ce227c6a~mv2.png/v1/fit/w_2500,h_1330,al_c/b5a381_f2462d0b6ff34165845f5e87ce227c6a~mv2.png",
        description: "Global network developing collective leadership to ensure all children fulfill their potential.",
        tags: ["Global", "Education", "Leadership"],
        overview: {
                    country: "International",
                    yearFounded: 2007,
                    orgSize: "Large",
                    cause: "Education Equity",
                    programs: ["Teacher Leadership"],
                    population: ["Children","Youth"],
                    training: "Global Network",
                    ods: [ords[0]]
        },
        impact: {
                    beneficiaries: ["100k+ direct","Millions indirect"],
                    report: "Annual Impact Report 2022",
                    digitalizacion_level:[2,3,1,3]
        },
        financial: {
                    revenue: "25,000,000",
                    expenses: "23,500,000",
                    fundingSources: {
                                    own: 0.05,
                                    companies: 0.3,
                                    grants: 0.4,
                                    government: 0.15,
                                    clients: 0.1
                    },
                    grantsAwarded: ["MacArthur Foundation", "Google.org"]
        }
    },
    {
        id: 3,
        name: "Fe y Alegría",
        logo:"https://img.freepik.com/premium-vector/beautiful-unique-logo-design-ecommerce-retail-company_1287271-14561.jpg",
        description: "International movement for popular education and social promotion in marginalized areas.",
        tags: ["Latin America", "Education", "Marginalized"],
        overview: {
                    country: "Multiple",
                    yearFounded: 1955,
                    orgSize: "Very Large",
                    cause: "Inclusive Education",
                    programs: ["Formal Schools", "Vocational Training"],
                    population: ["Children","Youth","Adults"],
                    training: "Teacher Development",
                    ods: [ords[0],ords[1]]
        },
        impact: {
                    beneficiaries: ["1M+ direct","5M+ indirect"],
                    report: "2021 Global Report",
                    digitalizacion_level:[2,3,3,2]
        },
        financial: {
                    revenue: "150,000,000",
                    expenses: "145,000,000",
                    fundingSources: {
                                    own: 0.2,
                                    companies: 0.1,
                                    grants: 0.25,
                                    government: 0.35,
                                    clients: 0.1
                    },
                    grantsAwarded: ["European Union", "UNICEF", "IDB"]
        }
    },
    {
        id: 4,
        name: "Enseña Perú",
        logo:"https://static-cse.canva.com/blob/951786/1750logotiposqueteinspiraran.jpg",
        description: "Works to transform education in Peru by recruiting and training talented professionals as teachers.",
        tags: ["Peru", "Education", "Leadership"],
        overview: {
                    country: "Peru",
                    yearFounded: 2009,
                    orgSize: "Medium",
                    cause: "Educational Leadership",
                    programs: ["Teaching Fellowship"],
                    population: ["Children","Youth"],
                    training: "2-Year Fellowship",
                    ods: [ords[1]]
        },
        impact: {
                    beneficiaries: ["10k - 50k direct","100k - 500k indirect"],
                    report: "2022 Impact Evaluation",
                    digitalizacion_level:[2,3,2,3]
        },
        financial: {
                    revenue: "3,500,000",
                    expenses: "3,200,000",
                    fundingSources: {
                                    own: 0.15,
                                    companies: 0.4,
                                    grants: 0.3,
                                    government: 0.1,
                                    clients: 0.05
                    },
                    grantsAwarded: ["Minera Antamina", "US Embassy"]
        }
    },
    {
        id: 5,
        name: "Solaris",
        logo:"https://www.seoptimer.com/storage/images/2016/04/Coca-Cola3.jpg",
        description: "Promotes environmental education and sustainable development in rural communities.",
        tags: ["Environment", "Sustainability", "Rural"],
        overview: {
                    country: "Peru",
                    yearFounded: 2015,
                    orgSize: "Small",
                    cause: "Environmental Education",
                    programs: ["School Workshops", "Community Projects"],
                    population: ["Children","Rural Communities"],
                    training: "Environmental Leaders",
                    ods: [ords[0],ords[1]]
        },
        impact: {
                    beneficiaries: ["1k - 5k direct","5k - 10k indirect"],
                    report: "2020-2022 Impact Summary",
                    digitalizacion_level:[2,2,1,3]
        },
        financial: {
                    revenue: "120,000",
                    expenses: "115,000",
                    fundingSources: {
                                    own: 0.25,
                                    companies: 0.15,
                                    grants: 0.5,
                                    government: 0.05,
                                    clients: 0.05
                    },
                    grantsAwarded: ["Ministry of Environment", "GIZ"]
        }
    }
];