window.onload = function listene() {
    console.log('hello world')
const data = [
    {
        "currencycode": "AED",
        "currencyname": "UAE Dirham",
        "Country": "United Arab Emirates"
    },
    {
        "currencycode": "AFN",
        "currencyname": "Afghan Afghani",
        "Country": "Afghanistan"
    },
    {
        "currencycode": "ALL",
        "currencyname": "Albanian Lek",
        "Country": "Albania"
    },
    {
        "currencycode": "AMD",
        "currencyname": "Armenian Dram",
        "Country": "Armenia"
    },
    {
        "currencycode": "ANG",
        "currencyname": "Netherlands Antillian Guilder",
        "Country": "Netherlands Antilles"
    },
    {
        "currencycode": "AOA",
        "currencyname": "Angolan Kwanza",
        "Country": "Angola"
    },
    {
        "currencycode": "ARS",
        "currencyname": "Argentine Peso",
        "Country": "Argentina"
    },
    {
        "currencycode": "AUD",
        "currencyname": "Australian Dollar",
        "Country": "Australia"
    },
    {
        "currencycode": "AWG",
        "currencyname": "Aruban Florin",
        "Country": "Aruba"
    },
    {
        "currencycode": "AZN",
        "currencyname": "Azerbaijani Manat",
        "Country": "Azerbaijan"
    },
    {
        "currencycode": "BAM",
        "currencyname": "Bosnia and Herzegovina Mark",
        "Country": "Bosnia and Herzegovina"
    },
    {
        "currencycode": "BBD",
        "currencyname": "Barbados Dollar",
        "Country": "Barbados"
    },
    {
        "currencycode": "BDT",
        "currencyname": "Bangladeshi Taka",
        "Country": "Bangladesh"
    },
    {
        "currencycode": "BGN",
        "currencyname": "Bulgarian Lev",
        "Country": "Bulgaria"
    },
    {
        "currencycode": "BHD",
        "currencyname": "Bahraini Dinar",
        "Country": "Bahrain"
    },
    {
        "currencycode": "BIF",
        "currencyname": "Burundian Franc",
        "Country": "Burundi"
    },
    {
        "currencycode": "BMD",
        "currencyname": "Bermudian Dollar",
        "Country": "Bermuda"
    },
    {
        "currencycode": "BND",
        "currencyname": "Brunei Dollar",
        "Country": "Brunei"
    },
    {
        "currencycode": "BOB",
        "currencyname": "Bolivian Boliviano",
        "Country": "Bolivia"
    },
    {
        "currencycode": "BRL",
        "currencyname": "Brazilian Real",
        "Country": "Brazil"
    },
    {
        "currencycode": "BSD",
        "currencyname": "Bahamian Dollar",
        "Country": "Bahamas"
    },
    {
        "currencycode": "BTN",
        "currencyname": "Bhutanese Ngultrum",
        "Country": "Bhutan"
    },
    {
        "currencycode": "BWP",
        "currencyname": "Botswana Pula",
        "Country": "Botswana"
    },
    {
        "currencycode": "BYN",
        "currencyname": "Belarusian Ruble",
        "Country": "Belarus"
    },
    {
        "currencycode": "BZD",
        "currencyname": "Belize Dollar",
        "Country": "Belize"
    },
    {
        "currencycode": "CAD",
        "currencyname": "Canadian Dollar",
        "Country": "Canada"
    },
    {
        "currencycode": "CDF",
        "currencyname": "Congolese Franc",
        "Country": "Democratic Republic of the Congo"
    },
    {
        "currencycode": "CHF",
        "currencyname": "Swiss Franc",
        "Country": "Switzerland"
    },
    {
        "currencycode": "CLP",
        "currencyname": "Chilean Peso",
        "Country": "Chile"
    },
    {
        "currencycode": "CNY",
        "currencyname": "Chinese Renminbi",
        "Country": "China"
    },
    {
        "currencycode": "COP",
        "currencyname": "Colombian Peso",
        "Country": "Colombia"
    },
    {
        "currencycode": "CRC",
        "currencyname": "Costa Rican Colon",
        "Country": "Costa Rica"
    },
    {
        "currencycode": "CUP",
        "currencyname": "Cuban Peso",
        "Country": "Cuba"
    },
    {
        "currencycode": "CVE",
        "currencyname": "Cape Verdean Escudo",
        "Country": "Cape Verde"
    },
    {
        "currencycode": "CZK",
        "currencyname": "Czech Koruna",
        "Country": "Czech Republic"
    },
    {
        "currencycode": "DJF",
        "currencyname": "Djiboutian Franc",
        "Country": "Djibouti"
    },
    {
        "currencycode": "DKK",
        "currencyname": "Danish Krone",
        "Country": "Denmark"
    },
    {
        "currencycode": "DOP",
        "currencyname": "Dominican Peso",
        "Country": "Dominican Republic"
    },
    {
        "currencycode": "DZD",
        "currencyname": "Algerian Dinar",
        "Country": "Algeria"
    },
    {
        "currencycode": "EGP",
        "currencyname": "Egyptian Pound",
        "Country": "Egypt"
    },
    {
        "currencycode": "ERN",
        "currencyname": "Eritrean Nakfa",
        "Country": "Eritrea"
    },
    {
        "currencycode": "ETB",
        "currencyname": "Ethiopian Birr",
        "Country": "Ethiopia"
    },
    {
        "currencycode": "EUR",
        "currencyname": "Euro",
        "Country": "European Union"
    },
    {
        "currencycode": "FJD",
        "currencyname": "Fiji Dollar",
        "Country": "Fiji"
    },
    {
        "currencycode": "FKP",
        "currencyname": "Falkland Islands Pound",
        "Country": "Falkland Islands"
    },
    {
        "currencycode": "FOK",
        "currencyname": "Faroese Króna",
        "Country": "Faroe Islands"
    },
    {
        "currencycode": "GBP",
        "currencyname": "Pound Sterling",
        "Country": "United Kingdom"
    },
    {
        "currencycode": "GEL",
        "currencyname": "Georgian Lari",
        "Country": "Georgia"
    },
    {
        "currencycode": "GGP",
        "currencyname": "Guernsey Pound",
        "Country": "Guernsey"
    },
    {
        "currencycode": "GHS",
        "currencyname": "Ghanaian Cedi",
        "Country": "Ghana"
    },
    {
        "currencycode": "GIP",
        "currencyname": "Gibraltar Pound",
        "Country": "Gibraltar"
    },
    {
        "currencycode": "GMD",
        "currencyname": "Gambian Dalasi",
        "Country": "The Gambia"
    },
    {
        "currencycode": "GNF",
        "currencyname": "Guinean Franc",
        "Country": "Guinea"
    },
    {
        "currencycode": "GTQ",
        "currencyname": "Guatemalan Quetzal",
        "Country": "Guatemala"
    },
    {
        "currencycode": "GYD",
        "currencyname": "Guyanese Dollar",
        "Country": "Guyana"
    },
    {
        "currencycode": "HKD",
        "currencyname": "Hong Kong Dollar",
        "Country": "Hong Kong"
    },
    {
        "currencycode": "HNL",
        "currencyname": "Honduran Lempira",
        "Country": "Honduras"
    },
    {
        "currencycode": "HRK",
        "currencyname": "Croatian Kuna",
        "Country": "Croatia"
    },
    {
        "currencycode": "HTG",
        "currencyname": "Haitian Gourde",
        "Country": "Haiti"
    },
    {
        "currencycode": "HUF",
        "currencyname": "Hungarian Forint",
        "Country": "Hungary"
    },
    {
        "currencycode": "IDR",
        "currencyname": "Indonesian Rupiah",
        "Country": "Indonesia"
    },
    {
        "currencycode": "ILS",
        "currencyname": "Israeli New Shekel",
        "Country": "Israel"
    },
    {
        "currencycode": "IMP",
        "currencyname": "Manx Pound",
        "Country": "Isle of Man"
    },
    {
        "currencycode": "INR",
        "currencyname": "Indian Rupee",
        "Country": "India"
    },
    {
        "currencycode": "IQD",
        "currencyname": "Iraqi Dinar",
        "Country": "Iraq"
    },
    {
        "currencycode": "IRR",
        "currencyname": "Iranian Rial",
        "Country": "Iran"
    },
    {
        "currencycode": "ISK",
        "currencyname": "Icelandic Króna",
        "Country": "Iceland"
    },
    {
        "currencycode": "JEP",
        "currencyname": "Jersey Pound",
        "Country": "Jersey"
    },
    {
        "currencycode": "JMD",
        "currencyname": "Jamaican Dollar",
        "Country": "Jamaica"
    },
    {
        "currencycode": "JOD",
        "currencyname": "Jordanian Dinar",
        "Country": "Jordan"
    },
    {
        "currencycode": "JPY",
        "currencyname": "Japanese Yen",
        "Country": "Japan"
    },
    {
        "currencycode": "KES",
        "currencyname": "Kenyan Shilling",
        "Country": "Kenya"
    },
    {
        "currencycode": "KGS",
        "currencyname": "Kyrgyzstani Som",
        "Country": "Kyrgyzstan"
    },
    {
        "currencycode": "KHR",
        "currencyname": "Cambodian Riel",
        "Country": "Cambodia"
    },
    {
        "currencycode": "KID",
        "currencyname": "Kiribati Dollar",
        "Country": "Kiribati"
    },
    {
        "currencycode": "KMF",
        "currencyname": "Comorian Franc",
        "Country": "Comoros"
    },
    {
        "currencycode": "KRW",
        "currencyname": "South Korean Won",
        "Country": "South Korea"
    },
    {
        "currencycode": "KWD",
        "currencyname": "Kuwaiti Dinar",
        "Country": "Kuwait"
    },
    {
        "currencycode": "KYD",
        "currencyname": "Cayman Islands Dollar",
        "Country": "Cayman Islands"
    },
    {
        "currencycode": "KZT",
        "currencyname": "Kazakhstani Tenge",
        "Country": "Kazakhstan"
    },
    {
        "currencycode": "LAK",
        "currencyname": "Lao Kip",
        "Country": "Laos"
    },
    {
        "currencycode": "LBP",
        "currencyname": "Lebanese Pound",
        "Country": "Lebanon"
    },
    {
        "currencycode": "LKR",
        "currencyname": "Sri Lanka Rupee",
        "Country": "Sri Lanka"
    },
    {
        "currencycode": "LRD",
        "currencyname": "Liberian Dollar",
        "Country": "Liberia"
    },
    {
        "currencycode": "LSL",
        "currencyname": "Lesotho Loti",
        "Country": "Lesotho"
    },
    {
        "currencycode": "LYD",
        "currencyname": "Libyan Dinar",
        "Country": "Libya"
    },
    {
        "currencycode": "MAD",
        "currencyname": "Moroccan Dirham",
        "Country": "Morocco"
    },
    {
        "currencycode": "MDL",
        "currencyname": "Moldovan Leu",
        "Country": "Moldova"
    },
    {
        "currencycode": "MGA",
        "currencyname": "Malagasy Ariary",
        "Country": "Madagascar"
    },
    {
        "currencycode": "MKD",
        "currencyname": "Macedonian Denar",
        "Country": "North Macedonia"
    },
    {
        "currencycode": "MMK",
        "currencyname": "Burmese Kyat",
        "Country": "Myanmar"
    },
    {
        "currencycode": "MNT",
        "currencyname": "Mongolian Tögrög",
        "Country": "Mongolia"
    },
    {
        "currencycode": "MOP",
        "currencyname": "Macanese Pataca",
        "Country": "Macau"
    },
    {
        "currencycode": "MRU",
        "currencyname": "Mauritanian Ouguiya",
        "Country": "Mauritania"
    },
    {
        "currencycode": "MUR",
        "currencyname": "Mauritian Rupee",
        "Country": "Mauritius"
    },
    {
        "currencycode": "MVR",
        "currencyname": "Maldivian Rufiyaa",
        "Country": "Maldives"
    },
    {
        "currencycode": "MWK",
        "currencyname": "Malawian Kwacha",
        "Country": "Malawi"
    },
    {
        "currencycode": "MXN",
        "currencyname": "Mexican Peso",
        "Country": "Mexico"
    },
    {
        "currencycode": "MYR",
        "currencyname": "Malaysian Ringgit",
        "Country": "Malaysia"
    },
    {
        "currencycode": "MZN",
        "currencyname": "Mozambican Metical",
        "Country": "Mozambique"
    },
    {
        "currencycode": "NAD",
        "currencyname": "Namibian Dollar",
        "Country": "Namibia"
    },
    {
        "currencycode": "NGN",
        "currencyname": "Nigerian Naira",
        "Country": "Nigeria"
    },
    {
        "currencycode": "NIO",
        "currencyname": "Nicaraguan Córdoba",
        "Country": "Nicaragua"
    },
    {
        "currencycode": "NOK",
        "currencyname": "Norwegian Krone",
        "Country": "Norway"
    },
    {
        "currencycode": "NPR",
        "currencyname": "Nepalese Rupee",
        "Country": "Nepal"
    },
    {
        "currencycode": "NZD",
        "currencyname": "New Zealand Dollar",
        "Country": "New Zealand"
    },
    {
        "currencycode": "OMR",
        "currencyname": "Omani Rial",
        "Country": "Oman"
    },
    {
        "currencycode": "PAB",
        "currencyname": "Panamanian Balboa",
        "Country": "Panama"
    },
    {
        "currencycode": "PEN",
        "currencyname": "Peruvian Sol",
        "Country": "Peru"
    },
    {
        "currencycode": "PGK",
        "currencyname": "Papua New Guinean Kina",
        "Country": "Papua New Guinea"
    },
    {
        "currencycode": "PHP",
        "currencyname": "Philippine Peso",
        "Country": "Philippines"
    },
    {
        "currencycode": "PKR",
        "currencyname": "Pakistani Rupee",
        "Country": "Pakistan"
    },
    {
        "currencycode": "PLN",
        "currencyname": "Polish Złoty",
        "Country": "Poland"
    },
    {
        "currencycode": "PYG",
        "currencyname": "Paraguayan Guaraní",
        "Country": "Paraguay"
    },
    {
        "currencycode": "QAR",
        "currencyname": "Qatari Riyal",
        "Country": "Qatar"
    },
    {
        "currencycode": "RON",
        "currencyname": "Romanian Leu",
        "Country": "Romania"
    },
    {
        "currencycode": "RSD",
        "currencyname": "Serbian Dinar",
        "Country": "Serbia"
    },
    {
        "currencycode": "RUB",
        "currencyname": "Russian Ruble",
        "Country": "Russia"
    },
    {
        "currencycode": "RWF",
        "currencyname": "Rwandan Franc",
        "Country": "Rwanda"
    },
    {
        "currencycode": "SAR",
        "currencyname": "Saudi Riyal",
        "Country": "Saudi Arabia"
    },
    {
        "currencycode": "SBD",
        "currencyname": "Solomon Islands Dollar",
        "Country": "Solomon Islands"
    },
    {
        "currencycode": "SCR",
        "currencyname": "Seychellois Rupee",
        "Country": "Seychelles"
    },
    {
        "currencycode": "SDG",
        "currencyname": "Sudanese Pound",
        "Country": "Sudan"
    },
    {
        "currencycode": "SEK",
        "currencyname": "Swedish Krona",
        "Country": "Sweden"
    },
    {
        "currencycode": "SGD",
        "currencyname": "Singapore Dollar",
        "Country": "Singapore"
    },
    {
        "currencycode": "SHP",
        "currencyname": "Saint Helena Pound",
        "Country": "Saint Helena"
    },
    {
        "currencycode": "SLE",
        "currencyname": "Sierra Leonean Leone",
        "Country": "Sierra Leone"
    },
    {
        "currencycode": "SOS",
        "currencyname": "Somali Shilling",
        "Country": "Somalia"
    },
    {
        "currencycode": "SRD",
        "currencyname": "Surinamese Dollar",
        "Country": "Suriname"
    },
    {
        "currencycode": "SSP",
        "currencyname": "South Sudanese Pound",
        "Country": "South Sudan"
    },
    {
        "currencycode": "STN",
        "currencyname": "São Tomé and Príncipe Dobra",
        "Country": "São Tomé and Príncipe"
    },
    {
        "currencycode": "SYP",
        "currencyname": "Syrian Pound",
        "Country": "Syria"
    },
    {
        "currencycode": "SZL",
        "currencyname": "Eswatini Lilangeni",
        "Country": "Eswatini"
    },
    {
        "currencycode": "THB",
        "currencyname": "Thai Baht",
        "Country": "Thailand"
    },
    {
        "currencycode": "TJS",
        "currencyname": "Tajikistani Somoni",
        "Country": "Tajikistan"
    },
    {
        "currencycode": "TMT",
        "currencyname": "Turkmenistan Manat",
        "Country": "Turkmenistan"
    },
    {
        "currencycode": "TND",
        "currencyname": "Tunisian Dinar",
        "Country": "Tunisia"
    },
    {
        "currencycode": "TOP",
        "currencyname": "Tongan Paʻanga",
        "Country": "Tonga"
    },
    {
        "currencycode": "TRY",
        "currencyname": "Turkish Lira",
        "Country": "Turkey"
    },
    {
        "currencycode": "TTD",
        "currencyname": "Trinidad and Tobago Dollar",
        "Country": "Trinidad and Tobago"
    },
    {
        "currencycode": "TVD",
        "currencyname": "Tuvaluan Dollar",
        "Country": "Tuvalu"
    },
    {
        "currencycode": "TWD",
        "currencyname": "New Taiwan Dollar",
        "Country": "Taiwan"
    },
    {
        "currencycode": "TZS",
        "currencyname": "Tanzanian Shilling",
        "Country": "Tanzania"
    },
    {
        "currencycode": "UAH",
        "currencyname": "Ukrainian Hryvnia",
        "Country": "Ukraine"
    },
    {
        "currencycode": "UGX",
        "currencyname": "Ugandan Shilling",
        "Country": "Uganda"
    },
    {
        "currencycode": "USD",
        "currencyname": "United States Dollar",
        "Country": "United States"
    },
    {
        "currencycode": "UYU",
        "currencyname": "Uruguayan Peso",
        "Country": "Uruguay"
    },
    {
        "currencycode": "UZS",
        "currencyname": "Uzbekistani So'm",
        "Country": "Uzbekistan"
    },
    {
        "currencycode": "VES",
        "currencyname": "Venezuelan Bolívar Soberano",
        "Country": "Venezuela"
    },
    {
        "currencycode": "VND",
        "currencyname": "Vietnamese Đồng",
        "Country": "Vietnam"
    },
    {
        "currencycode": "VUV",
        "currencyname": "Vanuatu Vatu",
        "Country": "Vanuatu"
    },
    {
        "currencycode": "WST",
        "currencyname": "Samoan Tālā",
        "Country": "Samoa"
    },
    {
        "currencycode": "XAF",
        "currencyname": "Central African CFA Franc",
        "Country": "CEMAC"
    },
    {
        "currencycode": "XCD",
        "currencyname": "East Caribbean Dollar",
        "Country": "Organisation of Eastern Caribbean States"
    },
    {
        "currencycode": "XDR",
        "currencyname": "Special Drawing Rights",
        "Country": "International Monetary Fund"
    },
    {
        "currencycode": "XOF",
        "currencyname": "West African CFA franc",
        "Country": "CFA"
    },
    {
        "currencycode": "XPF",
        "currencyname": "CFP Franc",
        "Country": "Collectivités d'Outre-Mer"
    },
    {
        "currencycode": "YER",
        "currencyname": "Yemeni Rial",
        "Country": "Yemen"
    },
    {
        "currencycode": "ZAR",
        "currencyname": "South African Rand",
        "Country": "South Africa"
    },
    {
        "currencycode": "ZMW",
        "currencyname": "Zambian Kwacha",
        "Country": "Zambia"
    },
    {
        "currencycode": "ZWL",
        "currencyname": "Zimbabwean Dollar",
        "Country": "Zimbabwe"
    }
]

const select = document.getElementById("input_currency");


data.forEach(item => {
    const option = document.createElement("option");
    option.value = item.currencycode;
    option.innerHTML = item.currencycode;
    if (item.currencycode === "NGN") {
        option.selected = true;
      }
    select.appendChild(option);
  });
  


const select2 = document.getElementById("output_currency");


data.forEach(item => {
    const option2 = document.createElement("option");
    option2.value = item.currencycode;
    option2.innerHTML = item.currencycode;
    select2.appendChild(option2);
  });
  


}

