import { IAssetToImport } from './IAssetToImport';

const assetsToImport = [
  {
    name: 'Vale',
    b3_ticket: 'VALE3',
    api_ticket: 'VALE3.SA',
    logo: '',
  },
  {
    name: 'Petrobras',
    b3_ticket: 'PETR3',
    api_ticket: 'PETR3.SA',
    logo: '',
  },
  {
    name: 'Ambev',
    b3_ticket: 'ABEV3',
    api_ticket: 'ABEV3.SA',
    logo: '',
  },
  {
    name: 'Banco Itaú',
    b3_ticket: 'ITUB3',
    api_ticket: 'ITUB3.SA',
    logo: '',
  },
  {
    name: 'Banco Bradesco',
    b3_ticket: 'BBDC3',
    api_ticket: 'BBDC3.SA',
    logo: '',
  },
  {
    name: 'Weg',
    b3_ticket: 'WEGE3',
    api_ticket: 'WEGE3.SA',
    logo: '',
  },
  {
    name: 'Santander',
    b3_ticket: 'SANB3',
    api_ticket: 'SANB3.SA',
    logo: '',
  },
  {
    name: 'JBS',
    b3_ticket: 'JBSS3',
    api_ticket: 'JBSS3.SA',
    logo: '',
  },
  {
    name: 'BTG Pactual',
    b3_ticket: 'BPAC3',
    api_ticket: 'BPAC3.SA',
    logo: '',
  },
  {
    name: 'Banco do Brasil',
    b3_ticket: 'BBAS3',
    api_ticket: 'BBAS3.SA',
    logo: '',
  },
  {
    name: 'Susazo Papel',
    b3_ticket: 'SUZB3',
    api_ticket: 'SUZB3.SA',
    logo: '',
  },
  {
    name: "Rede D'Or",
    b3_ticket: 'RDOR3',
    api_ticket: 'RDOR3.SA',
    logo: '',
  },
  {
    name: 'Telefônica Brasil',
    b3_ticket: 'VIVT3',
    api_ticket: 'VIVT3.SA',
    logo: '',
  },
  {
    name: 'Itaúsa',
    b3_ticket: 'ITSA3',
    api_ticket: 'ITSA3.SA',
    logo: '',
  },
  {
    name: 'B3',
    b3_ticket: 'B3SA3',
    api_ticket: 'B3SA3.SA',
    logo: '',
  },
  {
    name: 'Raízen',
    b3_ticket: 'RAIZ4',
    api_ticket: 'RAIZ4.SA',
    logo: '',
  },
  {
    name: 'Gol',
    b3_ticket: 'GOLL4',
    api_ticket: 'GOLL4.SA',
    logo: '',
  },
  {
    name: 'Eletrobas',
    b3_ticket: 'ELET3',
    api_ticket: 'ELET3.SA',
    logo: '',
  },
  {
    name: 'Gerdau',
    b3_ticket: 'GGBR3',
    api_ticket: 'GGBR3.SA',
    logo: '',
  },
  {
    name: 'Braskem',
    b3_ticket: 'BRKM3',
    api_ticket: 'BRKM3.SA',
    logo: '',
  },
  {
    name: 'Magazine Luiza',
    b3_ticket: 'MGLU3',
    api_ticket: 'MGLU3.SA',
    logo: '',
  },
  {
    name: 'Cosan',
    b3_ticket: 'CSAN3',
    api_ticket: 'CSAN3.SA',
    logo: '',
  },
  {
    name: 'Hapvida',
    b3_ticket: 'HAPV3',
    api_ticket: 'HAPV3.SA',
    logo: '',
  },
  {
    name: 'CSN Mineração',
    b3_ticket: 'CMIN3',
    api_ticket: 'CMIN3.SA',
    logo: '',
  },
  {
    name: 'BB Seguridade',
    b3_ticket: 'BBSE3',
    api_ticket: 'BBSE3.SA',
    logo: '',
  },
  {
    name: 'Notre Dame Intermédica',
    b3_ticket: 'GNDI3',
    api_ticket: 'GNDI3.SA',
    logo: '',
  },
  {
    name: 'Localiza',
    b3_ticket: 'RENT3',
    api_ticket: 'RENT3.SA',
    logo: '',
  },
  {
    name: 'RaiaDrogasil',
    b3_ticket: 'RADL3',
    api_ticket: 'RADL3.SA',
    logo: '',
  },
  {
    name: 'CSN',
    b3_ticket: 'CSNA3',
    api_ticket: 'CSNA3.SA',
    logo: '',
  },
  {
    name: 'Azul',
    b3_ticket: 'AZUL4',
    api_ticket: 'AZUL4.SA',
    logo: '',
  },
  {
    name: 'Natura',
    b3_ticket: 'NTCO3',
    api_ticket: 'NTCO3.SA',
    logo: '',
  },
  {
    name: 'Engie',
    b3_ticket: 'EGIE3',
    api_ticket: 'EGIE3.SA',
    logo: '',
  },
  {
    name: 'CPFL Energia',
    b3_ticket: 'CPFE3',
    api_ticket: 'CPFE3.SA',
    logo: '',
  },
  {
    name: 'Rumo Log',
    b3_ticket: 'RAIL3',
    api_ticket: 'RAIL3.SA',
    logo: '',
  },
  {
    name: 'TIM',
    b3_ticket: 'TIMS3',
    api_ticket: 'TIMS3.SA',
    logo: '',
  },
  {
    name: 'Carrefour',
    b3_ticket: 'CRFB3',
    api_ticket: 'CRFB3.SA',
    logo: '',
  },
  {
    name: 'Americanas',
    b3_ticket: 'AMER3',
    api_ticket: 'AMER3.SA',
    logo: '',
  },
  {
    name: 'Klabin',
    b3_ticket: 'KLBN3',
    api_ticket: 'KLBN3.SA',
    logo: '',
  },
  {
    name: 'Sabesp',
    b3_ticket: 'SBSP3',
    api_ticket: 'SBSP3.SA',
    logo: '',
  },
  {
    name: 'Lojas Renner',
    b3_ticket: 'LREN3',
    api_ticket: 'LREN3.SA',
    logo: '',
  },
  {
    name: 'Cemig',
    b3_ticket: 'CMIG3',
    api_ticket: 'CMIG3.SA',
    logo: '',
  },
  {
    name: 'Vibra Energia',
    b3_ticket: 'VBBR3',
    api_ticket: 'VBBR3.SA',
    logo: '',
  },
  {
    name: 'CCR',
    b3_ticket: 'CCRO3',
    api_ticket: 'CCRO3.SA',
    logo: '',
  },
  {
    name: 'Equatorial',
    b3_ticket: 'EQTL3',
    api_ticket: 'EQTL3.SA',
    logo: '',
  },
  {
    name: 'Caixa Seguridade',
    b3_ticket: 'CXSE3',
    api_ticket: 'CXSE3.SA',
    logo: '',
  },
  {
    name: 'Banco Inter',
    b3_ticket: 'BIDI3',
    api_ticket: 'BIDI3.SA',
    logo: '',
  },
  {
    name: 'Comgás',
    b3_ticket: 'CGAS3',
    api_ticket: 'CGAS3.SA',
    logo: '',
  },
  {
    name: 'BRF',
    b3_ticket: 'BRFS3',
    api_ticket: 'BRFS3.SA',
    logo: '',
  },
  {
    name: 'Usiminas',
    b3_ticket: 'USIM3',
    api_ticket: 'USIM3.SA',
    logo: '',
  },
  {
    name: 'Neoenergia',
    b3_ticket: 'NEOE3',
    api_ticket: 'NEOE3.SA',
    logo: '',
  },
  {
    name: 'PetroRio',
    b3_ticket: 'PRIO3',
    api_ticket: 'PRIO3.SA',
    logo: '',
  },
  {
    name: 'Alpargatas',
    b3_ticket: 'ALPA3',
    api_ticket: 'ALPA3.SA',
    logo: '',
  },
  {
    name: 'Energisa MT',
    b3_ticket: 'ENMT3',
    api_ticket: 'ENMT3.SA',
    logo: '',
  },
  {
    name: 'Trans Paulista',
    b3_ticket: 'TRPL3',
    api_ticket: 'TRPL3.SA',
    logo: '',
  },
  {
    name: 'Embraer',
    b3_ticket: 'EMBR3',
    api_ticket: 'EMBR3.SA',
    logo: '',
  },
  {
    name: 'Dasa',
    b3_ticket: 'DASA3',
    api_ticket: 'DASA3.SA',
    logo: '',
  },
  {
    name: 'Hypera Pharma',
    b3_ticket: 'HYPE3',
    api_ticket: 'HYPE3.SA',
    logo: '',
  },
  {
    name: 'Energisa',
    b3_ticket: 'ENGI3',
    api_ticket: 'ENGI3.SA',
    logo: '',
  },
  {
    name: 'Copel',
    b3_ticket: 'CPLE3',
    api_ticket: 'CPLE3.SA',
    logo: '',
  },
  {
    name: 'Totvs',
    b3_ticket: 'TOTS3',
    api_ticket: 'TOTS3.SA',
    logo: '',
  },
  {
    name: 'Eneva',
    b3_ticket: 'ENEV3',
    api_ticket: 'ENEV3.SA',
    logo: '',
  },
  {
    name: 'Assaí',
    b3_ticket: 'ASAI3',
    api_ticket: 'ASAI3.SA',
    logo: '',
  },
  {
    name: 'Ceg',
    b3_ticket: 'CEGR3',
    api_ticket: 'CEGR3.SA',
    logo: '',
  },
  {
    name: 'Marfrig',
    b3_ticket: 'MRFG3',
    api_ticket: 'MRFG3.SA',
    logo: '',
  },
  {
    name: 'Ultra',
    b3_ticket: 'UGPA3',
    api_ticket: 'UGPA3.SA',
    logo: '',
  },
  {
    name: 'Rede Energia',
    b3_ticket: 'REDE3',
    api_ticket: 'REDE3.SA',
    logo: '',
  },
  {
    name: 'Taesa',
    b3_ticket: 'TAEE3',
    api_ticket: 'TAEE3.SA',
    logo: '',
  },
  {
    name: 'Metalúrgica Gerdau',
    b3_ticket: 'GOAU3',
    api_ticket: 'GOAU3.SA',
    logo: '',
  },
  {
    name: 'Porto Seguro',
    b3_ticket: 'PSSA3',
    api_ticket: 'PSSA3.SA',
    logo: '',
  },
  {
    name: 'EDP Energias do Brasil',
    b3_ticket: 'ENBR3',
    api_ticket: 'ENBR3.SA',
    logo: '',
  },
  {
    name: 'São Martinho',
    b3_ticket: 'SMTO3',
    api_ticket: 'SMTO3.SA',
    logo: '',
  },
  {
    name: 'Unidas',
    b3_ticket: 'LCAM3',
    api_ticket: 'LCAM3.SA',
    logo: '',
  },
  {
    name: 'JBS',
    b3_ticket: 'JBSS3',
    api_ticket: 'JBSS3.SA',
    logo: '',
  },
  {
    name: 'JBS',
    b3_ticket: 'JBSS3',
    api_ticket: 'JBSS3.SA',
    logo: '',
  },
  {
    name: 'Grupo Mateus',
    b3_ticket: 'GMAT3',
    api_ticket: 'GMAT3.SA',
    logo: '',
  },
  {
    name: 'Banco Pan',
    b3_ticket: 'BPAN4',
    api_ticket: 'BPAN4.SA',
    logo: '',
  },
  {
    name: 'Track Field',
    b3_ticket: 'TFCO4',
    api_ticket: 'TFCO4.SA',
    logo: '',
  },
  {
    name: 'Bradespar',
    b3_ticket: 'BRAP3',
    api_ticket: 'BRAP3.SA',
    logo: '',
  },
  {
    name: 'Multiplan',
    b3_ticket: 'MULT3',
    api_ticket: 'MULT3.SA',
    logo: '',
  },
  {
    name: 'Dexco',
    b3_ticket: 'DXCO3',
    api_ticket: 'DXCO3.SA',
    logo: '',
  },
  {
    name: 'Vamos',
    b3_ticket: 'VAMO3',
    api_ticket: 'VAMO3.SA',
    logo: '',
  },
  {
    name: 'Banco de Brasília',
    b3_ticket: 'BSLI3',
    api_ticket: 'BSLI3.SA',
    logo: '',
  },
  {
    name: 'Whirlpool',
    b3_ticket: 'WHRL3',
    api_ticket: 'WHRL3.SA',
    logo: '',
  },
  {
    name: 'Lojas Americanas',
    b3_ticket: 'LAME3',
    api_ticket: 'LAME3.SA',
    logo: '',
  },
  {
    name: 'Gruo GPS',
    b3_ticket: 'GGPS3',
    api_ticket: 'GGPS3.SA',
    logo: '',
  },
  {
    name: 'Coelba',
    b3_ticket: 'CEEB3',
    api_ticket: 'CEEB3.SA',
    logo: '',
  },
  {
    name: 'Schulz',
    b3_ticket: 'SHUL3',
    api_ticket: 'SHUL3.SA',
    logo: '',
  },
  {
    name: 'Unipar',
    b3_ticket: 'UNIP3',
    api_ticket: 'UNIP3.SA',
    logo: '',
  },
  {
    name: 'Sulamaerica',
    b3_ticket: 'SULA3',
    api_ticket: 'SULA3.SA',
    logo: '',
  },
  {
    name: 'Equatorial Pará',
    b3_ticket: 'EQPA3',
    api_ticket: 'EQPA3.SA',
    logo: '',
  },
  {
    name: 'Smart FIt',
    b3_ticket: 'SMFT3',
    api_ticket: 'SMFT3.SA',
    logo: '',
  },
  {
    name: 'Grupo Soma',
    b3_ticket: 'SOMA3',
    api_ticket: 'SOMA3.SA',
    logo: '',
  },
  {
    name: 'SLC Agrícola',
    b3_ticket: 'SLCE3',
    api_ticket: 'SLCE3.SA',
    logo: '',
  },
  {
    name: 'Celpe',
    b3_ticket: 'CEPE3',
    api_ticket: 'CEPE3.SA',
    logo: '',
  },
  {
    name: 'CBA',
    b3_ticket: 'CBAV3',
    api_ticket: 'CBAV3.SA',
    logo: '',
  },
  {
    name: 'Casan',
    b3_ticket: 'CASN3',
    api_ticket: 'CASN3.SA',
    logo: '',
  },
  {
    name: 'Intelbras',
    b3_ticket: 'INTB3',
    api_ticket: 'INTB3.SA',
    logo: '',
  },
  {
    name: 'M.Dias Branco',
    b3_ticket: 'MDIA3',
    api_ticket: 'MDIA3.SA',
    logo: '',
  },
  {
    name: 'Cesp',
    b3_ticket: 'CESP3',
    api_ticket: 'CESP3.SA',
    logo: '',
  },
  {
    name: '3R Petroleum',
    b3_ticket: 'RRRP3',
    api_ticket: 'RRRP3.SA',
    logo: '',
  },
  {
    name: 'Armac',
    b3_ticket: 'ARML3',
    api_ticket: 'ARML3.SA',
    logo: '',
  },
  {
    name: 'Grendene',
    b3_ticket: 'GRND3',
    api_ticket: 'GRND3.SA',
    logo: '',
  },
  {
    name: 'Simpar',
    b3_ticket: 'SIMH3',
    api_ticket: 'SIMH3.SA',
    logo: '',
  },
  {
    name: 'Petz',
    b3_ticket: 'PETZ3',
    api_ticket: 'PETZ3.SA',
    logo: '',
  },
  {
    name: 'Arezzo',
    b3_ticket: 'ARZZ3',
    api_ticket: 'ARZZ3.SA',
    logo: '',
  },
  {
    name: 'Omega Energia',
    b3_ticket: 'MEGA3',
    api_ticket: 'MEGA3.SA',
    logo: '',
  },
  {
    name: 'Via',
    b3_ticket: 'VIIA3',
    api_ticket: 'VIIA3.SA',
    logo: '',
  },
  {
    name: 'Odontoprev',
    b3_ticket: 'ODPV3',
    api_ticket: 'ODPV3.SA',
    logo: '',
  },
  {
    name: 'Banco do Nordest',
    b3_ticket: 'BNBR3',
    api_ticket: 'BNBR3.SA',
    logo: '',
  },
  {
    name: 'Alupar',
    b3_ticket: 'ALUP3',
    api_ticket: 'ALUP3.SA',
    logo: '',
  },
  {
    name: 'BR Malls',
    b3_ticket: 'BRML3',
    api_ticket: 'BRML3.SA',
    logo: '',
  },
  {
    name: 'Blau',
    b3_ticket: 'BLAU3',
    api_ticket: 'BLAU3.SA',
    logo: '',
  },
  {
    name: 'Fleury',
    b3_ticket: 'FLRY3',
    api_ticket: 'FLRY3.SA',
    logo: '',
  },
  {
    name: 'Multilaser',
    b3_ticket: 'MLAS3',
    api_ticket: 'MLAS3.SA',
    logo: '',
  },
  {
    name: 'Elektro',
    b3_ticket: 'EKTR3',
    api_ticket: 'EKTR3.SA',
    logo: '',
  },
  {
    name: 'YDUQS',
    b3_ticket: 'YDUQ3',
    api_ticket: 'YDUQ3.SA',
    logo: '',
  },
  {
    name: 'AES Brasil',
    b3_ticket: 'AESB3',
    api_ticket: 'AESB3.SA',
    logo: '',
  },
  {
    name: 'Cielo',
    b3_ticket: 'CIEL3',
    api_ticket: 'CIEL3.SA',
    logo: '',
  },
  {
    name: 'GPA',
    b3_ticket: 'PCAR3',
    api_ticket: 'PCAR3.SA',
    logo: '',
  },
  {
    name: 'Cyrela Realty',
    b3_ticket: 'CYRE3',
    api_ticket: 'CYRE3.SA',
    logo: '',
  },
  {
    name: 'Locaweb',
    b3_ticket: 'LWSA3',
    api_ticket: 'LWSA3.SA',
    logo: '',
  },
  {
    name: 'Vivara',
    b3_ticket: 'VIVA3',
    api_ticket: 'VIVA3.SA',
    logo: '',
  },
  {
    name: 'Minerva',
    b3_ticket: 'BEEF3',
    api_ticket: 'BEEF3.SA',
    logo: '',
  },
  {
    name: 'Grupo SBF',
    b3_ticket: 'SBFG3',
    api_ticket: 'SBFG3.SA',
    logo: '',
  },
  {
    name: 'Aliansce Sonae',
    b3_ticket: 'ALSO3',
    api_ticket: 'ALSO3.SA',
    logo: '',
  },
  {
    name: 'Ecorodovias',
    b3_ticket: 'ECOR3',
    api_ticket: 'ECOR3.SA',
    logo: '',
  },
  {
    name: 'MRV Engenharia',
    b3_ticket: 'MRVE3',
    api_ticket: 'MRVE3.SA',
    logo: '',
  },
  {
    name: 'Monteiro Aranha',
    b3_ticket: 'MOAR3',
    api_ticket: 'MOAR3.SA',
    logo: '',
  },
  {
    name: 'Movida',
    b3_ticket: 'MOVI3',
    api_ticket: 'MOVI3.SA',
    logo: '',
  },
  {
    name: 'Infracommerce',
    b3_ticket: 'IFCM3',
    api_ticket: 'IFCM3.SA',
    logo: '',
  },
  {
    name: 'Aeris',
    b3_ticket: 'AERI3',
    api_ticket: 'AERI3.SA',
    logo: '',
  },
  {
    name: 'Sanepar',
    b3_ticket: 'SAPR3',
    api_ticket: 'SAPR3.SA',
    logo: '',
  },
  {
    name: 'Guararapes',
    b3_ticket: 'GUAR3',
    api_ticket: 'GUAR3.SA',
    logo: '',
  },
  {
    name: 'PetroReconcavo',
    b3_ticket: 'RECV3',
    api_ticket: 'RECV3.SA',
    logo: '',
  },
  {
    name: 'Coelce',
    b3_ticket: 'COCE3',
    api_ticket: 'COCE3.SA',
    logo: '',
  },
  {
    name: 'Santos Brasil',
    b3_ticket: 'STBP3',
    api_ticket: 'STBP3.SA',
    logo: '',
  },
  {
    name: 'Mafra Hospitalar',
    b3_ticket: 'VVEO3',
    api_ticket: 'VVEO3.SA',
    logo: '',
  },
  {
    name: 'Ferbasa',
    b3_ticket: 'FESA3',
    api_ticket: 'FESA3.SA',
    logo: '',
  },
  {
    name: 'Hospital Mater Dei',
    b3_ticket: 'MATD3',
    api_ticket: 'MATD3.SA',
    logo: '',
  },
  {
    name: 'Oncoclínicas',
    b3_ticket: 'ONCO3',
    api_ticket: 'ONCO3.SA',
    logo: '',
  },
  {
    name: 'Ambipar',
    b3_ticket: 'AMBP3',
    api_ticket: 'AMBP3.SA',
    logo: '',
  },
  {
    name: 'Copasa',
    b3_ticket: 'CSMG3',
    api_ticket: 'CSMG3.SA',
    logo: '',
  },
  {
    name: 'Qualicorp',
    b3_ticket: 'QUAL3',
    api_ticket: 'QUAL3.SA',
    logo: '',
  },
  {
    name: 'Mahle Metal Leve',
    b3_ticket: 'LEVE3',
    api_ticket: 'LEVE3.SA',
    logo: '',
  },
  {
    name: 'Banrisul',
    b3_ticket: 'BRSR3',
    api_ticket: 'BRSR3.SA',
    logo: '',
  },
  {
    name: 'Eztec',
    b3_ticket: 'EZTC3',
    api_ticket: 'EZTC3.SA',
    logo: '',
  },
  {
    name: 'Ampla Energia',
    b3_ticket: 'CBEE3',
    api_ticket: 'CBEE3.SA',
    logo: '',
  },
  {
    name: 'Wilson Sons',
    b3_ticket: 'PORT3',
    api_ticket: 'PORT3.SA',
    logo: '',
  },
  {
    name: 'CEEE-GT',
    b3_ticket: 'EEEL3',
    api_ticket: 'EEEL3.SA',
    logo: '',
  },
  {
    name: 'IRB Brasil',
    b3_ticket: 'IRBR3',
    api_ticket: 'IRBR3.SA',
    logo: '',
  },
  {
    name: 'Cogna',
    b3_ticket: 'COGN3',
    api_ticket: 'COGN3.SA',
    logo: '',
  },
  {
    name: 'Light',
    b3_ticket: 'LIGT3',
    api_ticket: 'LIGT3.SA',
    logo: '',
  },
  {
    name: 'Camil',
    b3_ticket: 'CAML3',
    api_ticket: 'CAML3.SA',
    logo: '',
  },
  {
    name: 'Pague Menos',
    b3_ticket: 'PGMN3',
    api_ticket: 'PGMN3.SA',
    logo: '',
  },
  {
    name: 'Randon',
    b3_ticket: 'RAPT3',
    api_ticket: 'RAPT3.SA',
    logo: '',
  },
  {
    name: 'Enauta',
    b3_ticket: 'ENAT3',
    api_ticket: 'ENAT3.SA',
    logo: '',
  },
  {
    name: 'Celg',
    b3_ticket: 'GPAR3',
    api_ticket: 'GPAR3.SA',
    logo: '',
  },
  {
    name: 'Três Tentos Agro',
    b3_ticket: 'TTEN3',
    api_ticket: 'TTEN3.SA',
    logo: '',
  },
  {
    name: 'Paranapanena Energia',
    b3_ticket: 'GEPA3',
    api_ticket: 'GEPA3.SA',
    logo: '',
  },
  {
    name: 'Banco Modal',
    b3_ticket: 'MODL3',
    api_ticket: 'MODL3.SA',
    logo: '',
  },
  {
    name: 'Tupy',
    b3_ticket: 'TUPY3',
    api_ticket: 'TUPY3.SA',
    logo: '',
  },
  {
    name: 'BRProperties',
    b3_ticket: 'BRPR3',
    api_ticket: 'BRPR3.SA',
    logo: '',
  },
  {
    name: 'JHSF',
    b3_ticket: 'JHSF3',
    api_ticket: 'JHSF3.SA',
    logo: '',
  },
  {
    name: 'BrasilAgro',
    b3_ticket: 'AGRO3',
    api_ticket: 'AGRO3.SA',
    logo: '',
  },
  {
    name: 'Boa Vista',
    b3_ticket: 'BOAS3',
    api_ticket: 'BOAS3.SA',
    logo: '',
  },
  {
    name: 'Taurus Armas',
    b3_ticket: 'TASA3',
    api_ticket: 'TASA3.SA',
    logo: '',
  },
  {
    name: 'Jalles Machado',
    b3_ticket: 'JALL3',
    api_ticket: 'JALL3.SA',
    logo: '',
  },
  {
    name: 'Kora Saúde',
    b3_ticket: 'KRSA3',
    api_ticket: 'KRSA3.SA',
    logo: '',
  },
  {
    name: 'Fras-le',
    b3_ticket: 'FRAS3',
    api_ticket: 'FRAS3.SA',
    logo: '',
  },
  {
    name: 'Cosern',
    b3_ticket: 'CSRN3',
    api_ticket: 'CSRN3.SA',
    logo: '',
  },
  {
    name: 'Log-in',
    b3_ticket: 'LOGN3',
    api_ticket: 'LOGN3.SA',
    logo: '',
  },
  {
    name: 'Marcopolo',
    b3_ticket: 'POMO3',
    api_ticket: 'POMO3.SA',
    logo: '',
  },
  {
    name: 'CVC',
    b3_ticket: 'CVCB3',
    api_ticket: 'CVCB3.SA',
    logo: '',
  },
  {
    name: 'Hermes Pardini',
    b3_ticket: 'PARD3',
    api_ticket: 'PARD3.SA',
    logo: '',
  },
  {
    name: 'Celesc',
    b3_ticket: 'CLSC3',
    api_ticket: 'CLSC3.SA',
    logo: '',
  },
  {
    name: 'Anima',
    b3_ticket: 'ANIM3',
    api_ticket: 'ANIM3.SA',
    logo: '',
  },
  {
    name: 'Log CP',
    b3_ticket: 'LOGG3',
    api_ticket: 'LOGG3.SA',
    logo: '',
  },
  {
    name: 'Cruzeiro do Sul Educacional',
    b3_ticket: 'CSED3',
    api_ticket: 'CSED3.SA',
    logo: '',
  },
  {
    name: 'Telebrás',
    b3_ticket: 'TELB3',
    api_ticket: 'TELB3.SA',
    logo: '',
  },
  {
    name: 'Lochpe-Maxion',
    b3_ticket: 'MYPK3',
    api_ticket: 'MYPK3.SA',
    logo: '',
  },
  {
    name: 'São Carlos',
    b3_ticket: 'SCAR3',
    api_ticket: 'SCAR3.SA',
    logo: '',
  },
  {
    name: 'Vulcabras',
    b3_ticket: 'VULC3',
    api_ticket: 'VULC3.SA',
    logo: '',
  },
  {
    name: 'Terra Santa',
    b3_ticket: 'LAND3',
    api_ticket: 'LAND3.SA',
    logo: '',
  },
  {
    name: 'Tronox',
    b3_ticket: 'CRPG3',
    api_ticket: 'CRPG3.SA',
    logo: '',
  },
  {
    name: 'Getnet',
    b3_ticket: 'GETT3',
    api_ticket: 'GETT3.SA',
    logo: '',
  },
  {
    name: 'Unifique',
    b3_ticket: 'FIQE3',
    api_ticket: 'FIQE3.SA',
    logo: '',
  },
  {
    name: 'Brisanet',
    b3_ticket: 'BRIT3',
    api_ticket: 'BRIT3.SA',
    logo: '',
  },
  {
    name: 'Dimed',
    b3_ticket: 'PNVL3',
    api_ticket: 'PNVL3.SA',
    logo: '',
  },
  {
    name: 'Cury Construtora',
    b3_ticket: 'CURY3',
    api_ticket: 'CURY3.SA',
    logo: '',
  },
  {
    name: 'Banco BMG',
    b3_ticket: 'BMGB4',
    api_ticket: 'BMGB4.SA',
    logo: '',
  },
  {
    name: 'Vittia',
    b3_ticket: 'VITT3',
    api_ticket: 'VITT3.SA',
    logo: '',
  },
  {
    name: 'Orizon',
    b3_ticket: 'ORVR3',
    api_ticket: 'ORVR3.SA',
    logo: '',
  },
  {
    name: 'JSL',
    b3_ticket: 'JSLG3',
    api_ticket: 'JSLG3.SA',
    logo: '',
  },
  {
    name: 'ClearSale',
    b3_ticket: 'CLSA3',
    api_ticket: 'CLSA3.SA',
    logo: '',
  },
  {
    name: 'Lojas Quero-Quero',
    b3_ticket: 'LJQQ3',
    api_ticket: 'LJQQ3.SA',
    logo: '',
  },
  {
    name: 'AgroGalaxy',
    b3_ticket: 'AGXY3',
    api_ticket: 'AGXY3.SA',
    logo: '',
  },
  {
    name: 'Sequoia',
    b3_ticket: 'SEQL3',
    api_ticket: 'SEQL3.SA',
    logo: '',
  },
  {
    name: 'Panatlântica',
    b3_ticket: 'PATI3',
    api_ticket: 'PATI3.SA',
    logo: '',
  },
  {
    name: 'Alliar',
    b3_ticket: 'AALR3',
    api_ticket: 'AALR3.SA',
    logo: '',
  },
  {
    name: 'Boa Safra',
    b3_ticket: 'SOJA3',
    api_ticket: 'SOJA3.SA',
    logo: '',
  },
  {
    name: 'Méliuz',
    b3_ticket: 'CASH3',
    api_ticket: 'CASH3.SA',
    logo: '',
  },
  {
    name: 'C&A',
    b3_ticket: 'CEAB3',
    api_ticket: 'CEAB3.SA',
    logo: '',
  },
  {
    name: 'Celulosa Irani',
    b3_ticket: 'RANI3',
    api_ticket: 'RANI3.SA',
    logo: '',
  },
  {
    name: 'Hidrovias do Brasil',
    b3_ticket: 'HBSA3',
    api_ticket: 'HBSA3.SA',
    logo: '',
  },
  {
    name: 'Emae',
    b3_ticket: 'EMAE3',
    api_ticket: 'EMAE3.SA',
    logo: '',
  },
  {
    name: 'Allied Tecnologia',
    b3_ticket: 'ALLD3',
    api_ticket: 'ALLD3.SA',
    logo: '',
  },
  {
    name: 'Espaçolaser',
    b3_ticket: 'ESPA3',
    api_ticket: 'ESPA3.SA',
    logo: '',
  },
  {
    name: 'Direcional',
    b3_ticket: 'DIRR3',
    api_ticket: 'DIRR3.SA',
    logo: '',
  },
  {
    name: 'Eletromidia',
    b3_ticket: 'ELMD3',
    api_ticket: 'ELMD3.SA',
    logo: '',
  },
  {
    name: 'Burger King',
    b3_ticket: 'BKBR3',
    api_ticket: 'BKBR3.SA',
    logo: '',
  },
  {
    name: 'Banestes',
    b3_ticket: 'BEES3',
    api_ticket: 'BEES3.SA',
    logo: '',
  },
  {
    name: 'Tenda',
    b3_ticket: 'TEND3',
    api_ticket: 'TEND3.SA',
    logo: '',
  },
  {
    name: 'Desktop',
    b3_ticket: 'DESK3',
    api_ticket: 'DESK3.SA',
    logo: '',
  },
  {
    name: 'WLM',
    b3_ticket: 'WLMM3',
    api_ticket: 'WLMM3.SA',
    logo: '',
  },
  {
    name: 'Ouro Fino',
    b3_ticket: 'OFSA3',
    api_ticket: 'OFSA3.SA',
    logo: '',
  },
  {
    name: 'Mills',
    b3_ticket: 'MILS3',
    api_ticket: 'MILS3.SA',
    logo: '',
  },
  {
    name: 'Even',
    b3_ticket: 'EVEN3',
    api_ticket: 'EVEN3.SA',
    logo: '',
  },
  {
    name: 'Indústrias Romi',
    b3_ticket: 'ROMI3',
    api_ticket: 'ROMI3.SA',
    logo: '',
  },
  {
    name: 'Bemobi',
    b3_ticket: 'BMOB3',
    api_ticket: 'BMOB3.SA',
    logo: '',
  },
  {
    name: 'SER Educacional',
    b3_ticket: 'SEER3',
    api_ticket: 'SEER3.SA',
    logo: '',
  },
  {
    name: 'Banco da Amazônia',
    b3_ticket: 'BAZA3',
    api_ticket: 'BAZA3.SA',
    logo: '',
  },
  {
    name: 'Dohler',
    b3_ticket: 'DOHL3',
    api_ticket: 'DOHL3.SA',
    logo: '',
  },
  {
    name: 'TC Traders Club',
    b3_ticket: 'TRAD3',
    api_ticket: 'TRAD3.SA',
    logo: '',
  },
  {
    name: 'WIZ Soluções',
    b3_ticket: 'WIZS3',
    api_ticket: 'WIZS3.SA',
    logo: '',
  },
  {
    name: 'Sinqia',
    b3_ticket: 'SQIA3',
    api_ticket: 'SQIA3.SA',
    logo: '',
  },
  {
    name: 'Cia Energética de Brasília',
    b3_ticket: 'CEBR3',
    api_ticket: 'CEBR3.SA',
    logo: '',
  },
  {
    name: 'Helbor',
    b3_ticket: 'HBOR3',
    api_ticket: 'HBOR3.SA',
    logo: '',
  },
  {
    name: 'Eternit',
    b3_ticket: 'ETER3',
    api_ticket: 'ETER3.SA',
    logo: '',
  },
  {
    name: 'Portobello',
    b3_ticket: 'PTBL3',
    api_ticket: 'PTBL3.SA',
    logo: '',
  },
  {
    name: 'Kepler',
    b3_ticket: 'KEPL3',
    api_ticket: 'KEPL3.SA',
    logo: '',
  },
  {
    name: 'Trisul',
    b3_ticket: 'TRIS3',
    api_ticket: 'TRIS3.SA',
    logo: '',
  },
  {
    name: 'SYN',
    b3_ticket: 'SYNE3',
    api_ticket: 'SYNE3.SA',
    logo: '',
  },
  {
    name: 'Heringer',
    b3_ticket: 'FHER3',
    api_ticket: 'FHER3.SA',
    logo: '',
  },
  {
    name: 'WDC Livetech da Bahia',
    b3_ticket: 'LVTC3',
    api_ticket: 'LVTC3.SA',
    logo: '',
  },
  {
    name: 'Focus Energia',
    b3_ticket: 'POWE3',
    api_ticket: 'POWE3.SA',
    logo: '',
  },
  {
    name: 'Mosaico',
    b3_ticket: 'MOSI3',
    api_ticket: 'MOSI3.SA',
    logo: '',
  },
  {
    name: 'Biomm',
    b3_ticket: 'BIOM3',
    api_ticket: 'BIOM3.SA',
    logo: '',
  },
  {
    name: 'Eucatex',
    b3_ticket: 'EUCA3',
    api_ticket: 'EUCA3.SA',
    logo: '',
  },
  {
    name: 'Lavvi',
    b3_ticket: 'LAVV3',
    api_ticket: 'LAVV3.SA',
    logo: '',
  },
  {
    name: 'Tegma',
    b3_ticket: 'TGMA3',
    api_ticket: 'TGMA3.SA',
    logo: '',
  },
  {
    name: 'Eletropar',
    b3_ticket: 'LIPR3',
    api_ticket: 'LIPR3.SA',
    logo: '',
  },
  {
    name: 'Dexxos',
    b3_ticket: 'DEXP3',
    api_ticket: 'DEXP3.SA',
    logo: '',
  },
  {
    name: 'Participações Aliança',
    b3_ticket: 'PEAB3',
    api_ticket: 'PEAB3.SA',
    logo: '',
  },
  {
    name: 'Lojas Marisa',
    b3_ticket: 'AMAR3',
    api_ticket: 'AMAR3.SA',
    logo: '',
  },
  {
    name: 'Grazziotin',
    b3_ticket: 'CGRA3',
    api_ticket: 'CGRA3.SA',
    logo: '',
  },
  {
    name: 'HBR Realty',
    b3_ticket: 'HBRE3',
    api_ticket: 'HBRE3.SA',
    logo: '',
  },
  {
    name: 'Positivo',
    b3_ticket: 'POSI3',
    api_ticket: 'POSI3.SA',
    logo: '',
  },
  {
    name: 'Mitre Realty',
    b3_ticket: 'MTRE3',
    api_ticket: 'MTRE3.SA',
    logo: '',
  },
  {
    name: 'Alphaville Urbanisto',
    b3_ticket: 'AVLL3',
    api_ticket: 'AVLL3.SA',
    logo: '',
  },
  {
    name: 'Banco alfa',
    b3_ticket: 'BRIV3',
    api_ticket: 'BRIV3.SA',
    logo: '',
  },
  {
    name: 'Plano&Plano',
    b3_ticket: 'PLPL3',
    api_ticket: 'PLPL3.SA',
    logo: '',
  },
  {
    name: 'Melnick',
    b3_ticket: 'MELK3',
    api_ticket: 'MELK3.SA',
    logo: '',
  },
  {
    name: 'Alfa Consórcio',
    b3_ticket: 'BRGE3',
    api_ticket: 'BRGE3.SA',
    logo: '',
  },
  {
    name: 'International Meal',
    b3_ticket: 'MEAL3',
    api_ticket: 'MEAL3.SA',
    logo: '',
  },
  {
    name: 'Valid',
    b3_ticket: 'VLID3',
    api_ticket: 'VLID3.SA',
    logo: '',
  },
  {
    name: 'Banco Mercantil',
    b3_ticket: 'BMEB3',
    api_ticket: 'BMEB3.SA',
    logo: '',
  },
  {
    name: 'Alfa Holdings',
    b3_ticket: 'RPAD3',
    api_ticket: 'RPAD3.SA',
    logo: '',
  },
  {
    name: 'Alfa Financeira',
    b3_ticket: 'CRIV3',
    api_ticket: 'CRIV3.SA',
    logo: '',
  },
  {
    name: 'Afluente T',
    b3_ticket: 'AFLT3',
    api_ticket: 'AFLT3.SA',
    logo: '',
  },
  {
    name: 'CSU Cardsystem',
    b3_ticket: 'CARD3',
    api_ticket: 'CARD3.SA',
    logo: '',
  },
  {
    name: 'Profarma',
    b3_ticket: 'PFRM3',
    api_ticket: 'PFRM3.SA',
    logo: '',
  },
  {
    name: 'Neogrid',
    b3_ticket: 'NGRD3',
    api_ticket: 'NGRD3.SA',
    logo: '',
  },
  {
    name: 'Padtec',
    b3_ticket: 'PDTC3',
    api_ticket: 'PDTC3.SA',
    logo: '',
  },
  {
    name: 'Metisa',
    b3_ticket: 'MTSA3',
    api_ticket: 'MTSA3.SA',
    logo: '',
  },
  {
    name: 'Banese',
    b3_ticket: 'BGIP3',
    api_ticket: 'BGIP3.SA',
    logo: '',
  },
  {
    name: 'Alper Seguros',
    b3_ticket: 'APER3',
    api_ticket: 'APER3.SA',
    logo: '',
  },
  {
    name: 'Mobly',
    b3_ticket: 'MBLY3',
    api_ticket: 'MBLY3.SA',
    logo: '',
  },
  {
    name: 'RNI',
    b3_ticket: 'RDNI3',
    api_ticket: 'RDNI3.SA',
    logo: '',
  },
  {
    name: 'Seguros Aliança da Bahia',
    b3_ticket: 'CSAB3',
    api_ticket: 'CSAB3.SA',
    logo: '',
  },
  {
    name: 'Oceanpact',
    b3_ticket: 'OPCT3',
    api_ticket: 'OPCT3.SA',
    logo: '',
  },
  {
    name: 'Enjoei',
    b3_ticket: 'ENJU3',
    api_ticket: 'ENJU3.SA',
    logo: '',
  },
  {
    name: 'Saraiva',
    b3_ticket: 'SLED3',
    api_ticket: 'SLED3.SA',
    logo: '',
  },
  {
    name: 'Dotz',
    b3_ticket: 'DOTZ3',
    api_ticket: 'DOTZ3.SA',
    logo: '',
  },
  {
    name: 'Paranapanema',
    b3_ticket: 'PMAM3',
    api_ticket: 'PMAM3.SA',
    logo: '',
  },
  {
    name: 'CEEE',
    b3_ticket: 'CEED3',
    api_ticket: 'CEED3.SA',
    logo: '',
  },
  {
    name: 'Pettenati',
    b3_ticket: 'PTNT3',
    api_ticket: 'PTNT3.SA',
    logo: '',
  },
  {
    name: 'Moura Dubeux',
    b3_ticket: 'MDNE3',
    api_ticket: 'MDNE3.SA',
    logo: '',
  },
  {
    name: 'Gafisa',
    b3_ticket: 'GFSA3',
    api_ticket: 'GFSA3.SA',
    logo: '',
  },
  {
    name: 'Mercantil Financeira',
    b3_ticket: 'MERC3',
    api_ticket: 'MERC3.SA',
    logo: '',
  },
  {
    name: 'Melhoramentos SP',
    b3_ticket: 'MSPA3',
    api_ticket: 'MSPA3.SA',
    logo: '',
  },
  {
    name: 'Josapar',
    b3_ticket: 'JOPA3',
    api_ticket: 'JOPA3.SA',
    logo: '',
  },
  {
    name: 'Lopes Brasil',
    b3_ticket: 'LPSB3',
    api_ticket: 'LPSB3.SA',
    logo: '',
  },
  {
    name: 'Unicasa',
    b3_ticket: 'UCAS3',
    api_ticket: 'UCAS3.SA',
    logo: '',
  },
  {
    name: 'Bombril',
    b3_ticket: 'BOBR3',
    api_ticket: 'BOBR3.SA',
    logo: '',
  },
  {
    name: 'Springs Global',
    b3_ticket: 'SGPS3',
    api_ticket: 'SGPS3.SA',
    logo: '',
  },
  {
    name: 'Priner',
    b3_ticket: 'PRNR3',
    api_ticket: 'PRNR3.SA',
    logo: '',
  },
  {
    name: 'Westwing',
    b3_ticket: 'WEST3',
    api_ticket: 'WEST3.SA',
    logo: '',
  },
  {
    name: 'Renova',
    b3_ticket: 'RNEW3',
    api_ticket: 'RNEW3.SA',
    logo: '',
  },
  {
    name: 'Bahema',
    b3_ticket: 'BAHI3',
    api_ticket: 'BAHI3.SA',
    logo: '',
  },
  {
    name: 'Metalfrio',
    b3_ticket: 'FRIO3',
    api_ticket: 'FRIO3.SA',
    logo: '',
  },
  {
    name: 'D1000 Varejo Farma',
    b3_ticket: 'DMVF3',
    api_ticket: 'DMVF3.SA',
    logo: '',
  },
  {
    name: 'GetNinjas',
    b3_ticket: 'NINJ3',
    api_ticket: 'NINJ3.SA',
    logo: '',
  },
  {
    name: 'IGB Eletrônica',
    b3_ticket: 'IGBR3',
    api_ticket: 'IGBR3.SA',
    logo: '',
  },
  {
    name: 'Battistella',
    b3_ticket: 'EPAR3',
    api_ticket: 'EPAR3.SA',
    logo: '',
  },
  {
    name: 'Azevedo e Travassos',
    b3_ticket: 'AZEV3',
    api_ticket: 'AZEV3.SA',
    logo: '',
  },
  {
    name: 'Coteminas',
    b3_ticket: 'CTNM3',
    api_ticket: 'CTNM3.SA',
    logo: '',
  },
  {
    name: 'Triunfo',
    b3_ticket: 'TPIS3',
    api_ticket: 'TPIS3.SA',
    logo: '',
  },
  {
    name: 'Cambuci',
    b3_ticket: 'CAMB3',
    api_ticket: 'CAMB3.SA',
    logo: '',
  },
  {
    name: 'Inepar',
    b3_ticket: 'INEP3',
    api_ticket: 'INEP3.SA',
    logo: '',
  },
  {
    name: 'Jereissati',
    b3_ticket: 'IGTI3',
    api_ticket: 'IGTI3.SA',
    logo: '',
  },
  {
    name: 'Oi',
    b3_ticket: 'OIBR3',
    api_ticket: 'OIBR3.SA',
    logo: '',
  },
  {
    name: 'Encorpar',
    b3_ticket: 'ECPR3',
    api_ticket: 'ECPR3.SA',
    logo: '',
  },
  {
    name: 'Technos',
    b3_ticket: 'TECN3',
    api_ticket: 'TECN3.SA',
    logo: '',
  },
  {
    name: 'Tecnisa',
    b3_ticket: 'TCSA3',
    api_ticket: 'TCSA3.SA',
    logo: '',
  },
  {
    name: 'Lupatech',
    b3_ticket: 'LUPA3',
    api_ticket: 'LUPA3.SA',
    logo: '',
  },
  {
    name: 'Viver',
    b3_ticket: 'VIVR3',
    api_ticket: 'VIVR3.SA',
    logo: '',
  },
  {
    name: 'São Paulo Turismo',
    b3_ticket: 'AHEB3',
    api_ticket: 'AHEB3.SA',
    logo: '',
  },
  {
    name: 'Refit',
    b3_ticket: 'RPMG3',
    api_ticket: 'RPMG3.SA',
    logo: '',
  },
  {
    name: 'Rossi',
    b3_ticket: 'RSID3',
    api_ticket: 'RSID3.SA',
    logo: '',
  },
  {
    name: 'Time For Fun',
    b3_ticket: 'SHOW3',
    api_ticket: 'SHOW3.SA',
    logo: '',
  },
  {
    name: 'Baumer',
    b3_ticket: 'BALM3',
    api_ticket: 'BALM3.SA',
    logo: '',
  },
  {
    name: 'Plascar',
    b3_ticket: 'PLAS3',
    api_ticket: 'PLAS3.SA',
    logo: '',
  },
  {
    name: 'Karsten',
    b3_ticket: 'CTKA3',
    api_ticket: 'CTKA3.SA',
    logo: '',
  },
  {
    name: 'Santanense',
    b3_ticket: 'CTSA3',
    api_ticket: 'CTSA3.SA',
    logo: '',
  },
  {
    name: 'Mercantil Investimentos',
    b3_ticket: 'BMIN3',
    api_ticket: 'BMIN3.SA',
    logo: '',
  },
  {
    name: 'Monark',
    b3_ticket: 'BMKS3',
    api_ticket: 'BMKS3.SA',
    logo: '',
  },
  {
    name: 'João Fortes',
    b3_ticket: 'JFEN3',
    api_ticket: 'JFEN3.SA',
    logo: '',
  },
  {
    name: 'Sondatécnica',
    b3_ticket: 'SOND3',
    api_ticket: 'SOND3.SA',
    logo: '',
  },
  {
    name: 'MMX Mineração',
    b3_ticket: 'MMXM3',
    api_ticket: 'MMXM3.SA',
    logo: '',
  },
  {
    name: 'Mundial',
    b3_ticket: 'MNDL3',
    api_ticket: 'MNDL3.SA',
    logo: '',
  },
  {
    name: 'Brasil Brokers',
    b3_ticket: 'BBRK3',
    api_ticket: 'BBRK3.SA',
    logo: '',
  },
  {
    name: 'DTCOM',
    b3_ticket: 'DTCY3',
    api_ticket: 'DTCY3.SA',
    logo: '',
  },
  {
    name: 'Liq',
    b3_ticket: 'ATMP3',
    api_ticket: 'ATMP3.SA',
    logo: '',
  },
  {
    name: 'Nordon',
    b3_ticket: 'NORD3',
    api_ticket: 'NORD3.SA',
    logo: '',
  },
  {
    name: 'Renauxview',
    b3_ticket: 'TXRX3',
    api_ticket: 'TXRX3.SA',
    logo: '',
  },
  {
    name: 'Le Lis Blanc',
    b3_ticket: 'LLIS3',
    api_ticket: 'LLIS3.SA',
    logo: '',
  },
  {
    name: 'Atompar',
    b3_ticket: 'ATOM3',
    api_ticket: 'ATOM3.SA',
    logo: '',
  },
  {
    name: 'Cedro Têxtil',
    b3_ticket: 'CEDO3',
    api_ticket: 'CEDO3.SA',
    logo: '',
  },
  {
    name: 'Recrusul',
    b3_ticket: 'RCSL3',
    api_ticket: 'RCSL3.SA',
    logo: '',
  },
  {
    name: 'General Shopping',
    b3_ticket: 'GSHP3',
    api_ticket: 'GSHP3.SA',
    logo: '',
  },
  {
    name: 'PDG Realty',
    b3_ticket: 'PDGR3',
    api_ticket: 'PDGR3.SA',
    logo: '',
  },
  {
    name: 'Estrela',
    b3_ticket: 'ESTR3',
    api_ticket: 'ESTR3.SA',
    logo: '',
  },
  {
    name: 'Minupar',
    b3_ticket: 'MNPR3',
    api_ticket: 'MNPR3.SA',
    logo: '',
  },
  {
    name: 'Sansuy',
    b3_ticket: 'SNSY3',
    api_ticket: 'SNSY3.SA',
    logo: '',
  },
  {
    name: 'CR2',
    b3_ticket: 'CRDE3',
    api_ticket: 'CRDE3.SA',
    logo: '',
  },
  {
    name: 'Haga',
    b3_ticket: 'HAGA3',
    api_ticket: 'HAGA3.SA',
    logo: '',
  },
  {
    name: 'Hercules',
    b3_ticket: 'HETA3',
    api_ticket: 'HETA3.SA',
    logo: '',
  },
  {
    name: 'Nutriplant',
    b3_ticket: 'NUTR3',
    api_ticket: 'NUTR3.SA',
    logo: '',
  },
  {
    name: 'Cemepe Investimentos',
    b3_ticket: 'MAPT3',
    api_ticket: 'MAPT3.SA',
    logo: '',
  },
  {
    name: 'Electro Aço Altona',
    b3_ticket: 'EALT3',
    api_ticket: 'EALT3.SA',
    logo: '',
  },
  {
    name: 'OSX Brasil',
    b3_ticket: 'OSXB3',
    api_ticket: 'OSXB3.SA',
    logo: '',
  },
  {
    name: 'Bardella',
    b3_ticket: 'BDLL3',
    api_ticket: 'BDLL3.SA',
    logo: '',
  },
  {
    name: 'Finansinos',
    b3_ticket: 'FNCN3',
    api_ticket: 'FNCN3.SA',
    logo: '',
  },
  {
    name: 'Pomi Frutas',
    b3_ticket: 'FRTA3',
    api_ticket: 'FRTA3.SA',
    logo: '',
  },
  {
    name: 'Blue Tech Solutions',
    b3_ticket: 'BLUT3',
    api_ticket: 'BLUT3.SA',
    logo: '',
  },
] as IAssetToImport[];

export { assetsToImport };
