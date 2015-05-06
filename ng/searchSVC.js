/**
 * Created by eli on 3/23/15.
 */
angular.module('salaryGuide')
.service('searchSVC', function ($http) {
        // This sends a post request to the backend with the name/department/campus attached
        this.search = function (item) {
            return $http.post('/api/search', item);
        };
        // This sends a post request to the details page with the person obj attached
        this.details = function (item) {
            return $http.post('/api/details', item);
        };
        this.cache = null;
        this.setCache = function(search){
            this.cache = search;
        };
        // This preloads the options for search by department
        this.preload = function() {
            return [
                {
                    "code": "PK_446",
                    "name": "Library Administration"
                },
                {
                    "code": "FZ_490",
                    "name": "Bioengineering-Medicine"
                },
                {
                    "code": "PF_939",
                    "name": "Pub Affair & Admin General Exp"
                },
                {
                    "code": "KV_430",
                    "name": "Astronomy"
                },
                {
                    "code": "AE_412",
                    "name": "Chief Information Officer"
                },
                {
                    "code": "LB_986",
                    "name": "Medical Molec Integrative Phys"
                },
                {
                    "code": "AD_848",
                    "name": "Office of University Audits"
                },
                {
                    "code": "KR_495",
                    "name": "Music"
                },
                {
                    "code": "JC_850",
                    "name": "VC for Administrative Services"
                },
                {
                    "code": "GP_918",
                    "name": "Urban Transportation Center"
                },
                {
                    "code": "KV_895",
                    "name": "Spurlock Museum"
                },
                {
                    "code": "FW_591",
                    "name": "Nursing Administration"
                },
                {
                    "code": "AF_499",
                    "name": "Utilities - UA"
                },
                {
                    "code": "KV_377",
                    "name": "Plant Biology"
                },
                {
                    "code": "NQ_270",
                    "name": "Housing Division"
                },
                {
                    "code": "KL_888",
                    "name": "Veterinary Prog in Agr"
                },
                {
                    "code": "KV_441",
                    "name": "Appl Technol Learning A & S"
                },
                {
                    "code": "KY_582",
                    "name": "Motorcycle Rider Program"
                },
                {
                    "code": "SB_504",
                    "name": "Internships & Prior Learn Svcs"
                },
                {
                    "code": "SB_849",
                    "name": "Office of International Prgrms"
                },
                {
                    "code": "KL_875",
                    "name": "Natural Res & Env Sci"
                },
                {
                    "code": "NQ_389",
                    "name": "Illini Union"
                },
                {
                    "code": "NA_664",
                    "name": "Division of Public Safety"
                },
                {
                    "code": "FZ_509",
                    "name": "Biochem & Molecular Genetics"
                },
                {
                    "code": "JF_824",
                    "name": "Office for the Pro of Res Subj"
                },
                {
                    "code": "AR_727",
                    "name": "Treasury Operations"
                },
                {
                    "code": "FX_324",
                    "name": "Ofc of Professionl Development"
                },
                {
                    "code": "PH_543",
                    "name": "Sociology/Anthropology"
                },
                {
                    "code": "GA_649",
                    "name": "Administration"
                },
                {
                    "code": "KP_727",
                    "name": "Information Trust Institute"
                },
                {
                    "code": "KV_771",
                    "name": "Comparative & World Literature"
                },
                {
                    "code": "JJ_739",
                    "name": "Native American Support Progrm"
                },
                {
                    "code": "JJ_778",
                    "name": "Career Services"
                },
                {
                    "code": "GC_889",
                    "name": "Administration & General"
                },
                {
                    "code": "GP_694",
                    "name": "Public Administration"
                },
                {
                    "code": "FP_783",
                    "name": "Curriculum and Instruction"
                },
                {
                    "code": "GA_994",
                    "name": "Cancer Center"
                },
                {
                    "code": "AJ_757",
                    "name": "Vice President for Research"
                },
                {
                    "code": "NA_658",
                    "name": "Office of Corporate Relations"
                },
                {
                    "code": "GC_506",
                    "name": "Neurosurgery"
                },
                {
                    "code": "AG_904",
                    "name": "Univ Ofc for Human Resources"
                },
                {
                    "code": "FT_363",
                    "name": "African American Studies"
                },
                {
                    "code": "JP_406",
                    "name": "Pavilion"
                },
                {
                    "code": "KN_570",
                    "name": "Special Education"
                },
                {
                    "code": "NP_740",
                    "name": "IL State Water Survey"
                },
                {
                    "code": "AA_391",
                    "name": "Secr Ofc/Board of Trustees"
                },
                {
                    "code": "AJ_453",
                    "name": "Illinois Ventures"
                },
                {
                    "code": "KL_741",
                    "name": "Agricultural & Biological Engr"
                },
                {
                    "code": "FT_750",
                    "name": "Language and Cultural Lrng Ctr"
                },
                {
                    "code": "KW_736",
                    "name": "Center Advising & Acad Svcs"
                },
                {
                    "code": "SE_209",
                    "name": "Day Care Center"
                },
                {
                    "code": "KP_973",
                    "name": "Nuclear, Plasma, & Rad Engr"
                },
                {
                    "code": "FN_800",
                    "name": "Restorative Dentistry"
                },
                {
                    "code": "PF_777",
                    "name": "Public Administration"
                },
                {
                    "code": "GE_555",
                    "name": "Physical Plant Operations"
                },
                {
                    "code": "JK_336",
                    "name": "Children's Centers"
                },
                {
                    "code": "JM_721",
                    "name": "Mail Services"
                },
                {
                    "code": "FZ_857",
                    "name": "Medical Education"
                },
                {
                    "code": "AF_582",
                    "name": "OBFS - Administrative Services"
                },
                {
                    "code": "KR_569",
                    "name": "Landscape Architecture"
                },
                {
                    "code": "JP_814",
                    "name": "Campus Programs"
                },
                {
                    "code": "FN_628",
                    "name": "Pediatric Dentistry"
                },
                {
                    "code": "AN_370",
                    "name": "University Ethics Office"
                },
                {
                    "code": "GS_954",
                    "name": "Healthy Cities Collaborative"
                },
                {
                    "code": "KR_607",
                    "name": "Krannert Art Museum"
                },
                {
                    "code": "AA_868",
                    "name": "Ofc for University Relations"
                },
                {
                    "code": "GC_519",
                    "name": "Neurology"
                },
                {
                    "code": "KV_499",
                    "name": "English"
                },
                {
                    "code": "LQ_631",
                    "name": "International Pgms and Studies"
                },
                {
                    "code": "LC_598",
                    "name": "Vet Clinical Medicine"
                },
                {
                    "code": "GH_856",
                    "name": "University Health Service"
                },
                {
                    "code": "JB_575",
                    "name": "Ofc of High School Development"
                },
                {
                    "code": "JM_681",
                    "name": "Building Maintenance"
                },
                {
                    "code": "KR_447",
                    "name": "Fine & Applied Arts Admin"
                },
                {
                    "code": "JP_652",
                    "name": "Student Centers Retail"
                },
                {
                    "code": "NJ_743",
                    "name": "Minority Student Affairs"
                },
                {
                    "code": "FQ_699",
                    "name": "Computer Science"
                },
                {
                    "code": "GF_485",
                    "name": "Applied Health Sciences-UHP"
                },
                {
                    "code": "NN_701",
                    "name": "Facilities and Services"
                },
                {
                    "code": "SF_913",
                    "name": "Grounds"
                },
                {
                    "code": "PE_441",
                    "name": "Business & Management Admin"
                },
                {
                    "code": "KL_483",
                    "name": "Agr, Consumer, & Env Sci Admn"
                },
                {
                    "code": "JJ_939",
                    "name": "Ofc Vice Chanc Student Affrs"
                },
                {
                    "code": "GN_345",
                    "name": "External Education"
                },
                {
                    "code": "KN_335",
                    "name": "Education Administration"
                },
                {
                    "code": "PE_846",
                    "name": "Business Administration"
                },
                {
                    "code": "FN_338",
                    "name": "Dental Clinics"
                },
                {
                    "code": "KV_438",
                    "name": "Biochemistry"
                },
                {
                    "code": "GA_498",
                    "name": "Emergency Medicine"
                },
                {
                    "code": "JD_792",
                    "name": "Mile Square Health Center"
                },
                {
                    "code": "LB_945",
                    "name": "Pediatrics"
                },
                {
                    "code": "LC_282",
                    "name": "Pathobiology"
                },
                {
                    "code": "PF_635",
                    "name": "Public Affairs Reporting"
                },
                {
                    "code": "GA_879",
                    "name": "Surgical Oncology"
                },
                {
                    "code": "GP_727",
                    "name": "Urban Planning and Policy"
                },
                {
                    "code": "JM_312",
                    "name": "Campus Parking"
                },
                {
                    "code": "NB_746",
                    "name": "Academic Human Resources"
                },
                {
                    "code": "LB_684",
                    "name": "Internal Medicine"
                },
                {
                    "code": "AF_850",
                    "name": "OBFS - UIUC Government Costing"
                },
                {
                    "code": "FM_413",
                    "name": "Medicaid Support Services"
                },
                {
                    "code": "LC_726",
                    "name": "Veterinary Diagnostic Lab"
                },
                {
                    "code": "JA_779",
                    "name": "Office for Access and Equity"
                },
                {
                    "code": "FT_493",
                    "name": "Communication"
                },
                {
                    "code": "FY_372",
                    "name": "Commty Outreach Intervent Proj"
                },
                {
                    "code": "GA_539",
                    "name": "Ophthalmology & Visual Sci"
                },
                {
                    "code": "PE_975",
                    "name": "Management Information Systems"
                },
                {
                    "code": "JJ_908",
                    "name": "Dean of Student Affairs"
                },
                {
                    "code": "SF_903",
                    "name": "Janitorial"
                },
                {
                    "code": "FN_758",
                    "name": "Dentistry Administration"
                },
                {
                    "code": "FW_704",
                    "name": "Reg Nursing Program: Rockford"
                },
                {
                    "code": "SA_877",
                    "name": "Development"
                },
                {
                    "code": "GE_532",
                    "name": "Med & Medical Specialties"
                },
                {
                    "code": "SA_496",
                    "name": "Office of Affirmative Action"
                },
                {
                    "code": "KV_954",
                    "name": "Ctr S. Asian & MidEast Studies"
                },
                {
                    "code": "NC_566",
                    "name": "C Stores, Mail, & Receiving"
                },
                {
                    "code": "JF_449",
                    "name": "Research Services"
                },
                {
                    "code": "KV_729",
                    "name": "Latin American & Carib Studies"
                },
                {
                    "code": "NP_332",
                    "name": "Prairie Research Institute"
                },
                {
                    "code": "FY_892",
                    "name": "Inst for Hlth Research&Policy"
                },
                {
                    "code": "PG_364",
                    "name": "Educ & Human Services Gen Exp"
                },
                {
                    "code": "PG_383",
                    "name": "EHS Special Programs"
                },
                {
                    "code": "KP_855",
                    "name": "Technology Entrepreneur Ctr"
                },
                {
                    "code": "GP_635",
                    "name": "Inst for Res on Race & Pub Pol"
                },
                {
                    "code": "AA_615",
                    "name": "President's Office"
                },
                {
                    "code": "NE_520",
                    "name": "Interdis Health Sci Initiative"
                },
                {
                    "code": "KT_953",
                    "name": "IPM Broadcasting"
                },
                {
                    "code": "LC_692",
                    "name": "Chicago Center for Vet Med"
                },
                {
                    "code": "GA_225",
                    "name": "Obstetrics & Gynecology"
                },
                {
                    "code": "FT_714",
                    "name": "Linguistics"
                },
                {
                    "code": "NJ_825",
                    "name": "VC Student Affairs"
                },
                {
                    "code": "KT_238",
                    "name": "Inst of Communications Rsch"
                },
                {
                    "code": "FT_217",
                    "name": "Learning Sciences Res Inst"
                },
                {
                    "code": "KV_925",
                    "name": "Unit For Criticism"
                },
                {
                    "code": "KP_220",
                    "name": "Materials Research Lab"
                },
                {
                    "code": "LC_255",
                    "name": "Veterinary Teaching Hospital"
                },
                {
                    "code": "JM_409",
                    "name": "Trucks & Cars"
                },
                {
                    "code": "KV_625",
                    "name": "Sch Lit, Cultures, Ling Adm"
                },
                {
                    "code": "GC_848",
                    "name": "Surgery"
                },
                {
                    "code": "KL_538",
                    "name": "Animal Sciences"
                },
                {
                    "code": "JT_389",
                    "name": "Intercollegiate Athletics"
                },
                {
                    "code": "JB_627",
                    "name": "Ofc of Student Systems Svcs"
                },
                {
                    "code": "SA_540",
                    "name": "Human Resources"
                },
                {
                    "code": "FX_438",
                    "name": "Chicago Drug Discover & Devpt"
                },
                {
                    "code": "SA_469",
                    "name": "Campus Police"
                },
                {
                    "code": "GA_675",
                    "name": "Family Medicine"
                },
                {
                    "code": "PF_571",
                    "name": "Criminal Justice"
                },
                {
                    "code": "FT_772",
                    "name": "Sociology"
                },
                {
                    "code": "LL_783",
                    "name": "School of Social Work"
                },
                {
                    "code": "KT_564",
                    "name": "IPM New Media"
                },
                {
                    "code": "NE_298",
                    "name": "Division of Animal Resources"
                },
                {
                    "code": "JU_641",
                    "name": "Marketing & Brand Management"
                },
                {
                    "code": "KP_239",
                    "name": "Coordinated Science Lab"
                },
                {
                    "code": "JJ_638",
                    "name": "TRIO"
                },
                {
                    "code": "SE_491",
                    "name": "VC Student Affairs General Exp"
                },
                {
                    "code": "FX_440",
                    "name": "Medicinal Chem & Pharmacognosy"
                },
                {
                    "code": "PF_480",
                    "name": "Political Science"
                },
                {
                    "code": "NJ_695",
                    "name": "Counseling Center"
                },
                {
                    "code": "AG_212",
                    "name": "UA Employee Relations and HR"
                },
                {
                    "code": "NC_426",
                    "name": "Eng & Transp Serv Admin"
                },
                {
                    "code": "AP_666",
                    "name": "VP Chief Financial Officer"
                },
                {
                    "code": "NS_280",
                    "name": "Ofc VC Inst Advancement"
                },
                {
                    "code": "KV_292",
                    "name": "Animal Biology"
                },
                {
                    "code": "JB_776",
                    "name": "Gender & Sexuality Center"
                },
                {
                    "code": "SB_728",
                    "name": "Advising Services"
                },
                {
                    "code": "FY_891",
                    "name": "Epidemiology and Biostatistics"
                },
                {
                    "code": "PF_827",
                    "name": "Pub Affair &Administration Adm"
                },
                {
                    "code": "AH_512",
                    "name": "University Press"
                },
                {
                    "code": "FW_511",
                    "name": "Reg Nursing Program: Peoria"
                },
                {
                    "code": "KV_327",
                    "name": "Pgm for Res in the Humanities"
                },
                {
                    "code": "LN_641",
                    "name": "Center Innov in Teach Learn"
                },
                {
                    "code": "JB_631",
                    "name": "Vice Provost Undergrad Affairs"
                },
                {
                    "code": "KL_342",
                    "name": "Agricultural Education Program"
                },
                {
                    "code": "FW_662",
                    "name": "Health Systems Science"
                },
                {
                    "code": "SB_305",
                    "name": "Information Technology Svcs"
                },
                {
                    "code": "JF_983",
                    "name": "Inst/Environmntl Sci & Policy"
                },
                {
                    "code": "KL_802",
                    "name": "Crop Sciences"
                },
                {
                    "code": "AF_820",
                    "name": "OBFS - SAVP Bus & Finance"
                },
                {
                    "code": "KR_526",
                    "name": "Art & Design"
                },
                {
                    "code": "KL_612",
                    "name": "Agr Animal Care & Use Program"
                },
                {
                    "code": "PH_802",
                    "name": "English and Modern Languages"
                },
                {
                    "code": "JJ_977",
                    "name": "Student Aff-Counseling Sv"
                },
                {
                    "code": "AH_229",
                    "name": "Instit of Govt & Pub Affs"
                },
                {
                    "code": "FR_680",
                    "name": "Music"
                },
                {
                    "code": "LB_881",
                    "name": "Med UC Basic Sciences Adm"
                },
                {
                    "code": "FT_382",
                    "name": "Slavic & Baltic Lang & Lit"
                },
                {
                    "code": "SB_286",
                    "name": "VC Academic Affairs"
                },
                {
                    "code": "FN_216",
                    "name": "Endodontics"
                },
                {
                    "code": "FP_742",
                    "name": "Ctr for Urban Educ Rsrch & Dev"
                },
                {
                    "code": "NE_681",
                    "name": "Office of Sponsored Programs"
                },
                {
                    "code": "FW_557",
                    "name": "Reg Nursing Program: Quad City"
                },
                {
                    "code": "FQ_437",
                    "name": "Bioengineering-Engineering"
                },
                {
                    "code": "FW_462",
                    "name": "Biobehavioral Health Science"
                },
                {
                    "code": "LR_668",
                    "name": "Library"
                },
                {
                    "code": "SE_239",
                    "name": "Records and Registration"
                },
                {
                    "code": "KV_680",
                    "name": "Gender and Women's Studies"
                },
                {
                    "code": "PG_519",
                    "name": "Education & Human Services Adm"
                },
                {
                    "code": "FP_689",
                    "name": "CHANCE Program"
                },
                {
                    "code": "AF_253",
                    "name": "OBFS - UIC Purchasing"
                },
                {
                    "code": "SE_766",
                    "name": "Diversity Center"
                },
                {
                    "code": "JM_582",
                    "name": "Building Operations & Laundry"
                },
                {
                    "code": "SA_654",
                    "name": "Campus Relations"
                },
                {
                    "code": "NJ_459",
                    "name": "Office of Dean of Students"
                },
                {
                    "code": "GP_305",
                    "name": "Urban & Public Affairs Program"
                },
                {
                    "code": "AR_835",
                    "name": "I-Card"
                },
                {
                    "code": "KV_253",
                    "name": "Atmospheric Sciences"
                },
                {
                    "code": "JL_407",
                    "name": "UIC Human Resources"
                },
                {
                    "code": "NB_504",
                    "name": "Ctr for Training & Profl Dvlpt"
                },
                {
                    "code": "KP_919",
                    "name": "Materials Science & Engineerng"
                },
                {
                    "code": "KM_902",
                    "name": "Business Administration"
                },
                {
                    "code": "KT_934",
                    "name": "College of Media Admin"
                },
                {
                    "code": "KP_487",
                    "name": "Micro and Nanotechnology Lab"
                },
                {
                    "code": "PH_495",
                    "name": "Communication"
                },
                {
                    "code": "LQ_411",
                    "name": "ACDIS"
                },
                {
                    "code": "LD_762",
                    "name": "Air Force Aerospace Studies"
                },
                {
                    "code": "GA_963",
                    "name": "Center for Global Health"
                },
                {
                    "code": "JJ_796",
                    "name": "Student Development Services"
                },
                {
                    "code": "GC_565",
                    "name": "Cancer Biology & Pharmacology"
                },
                {
                    "code": "KT_642",
                    "name": "Journalism"
                },
                {
                    "code": "NB_980",
                    "name": "Faculty & Staff Assistance Pgm"
                },
                {
                    "code": "SC_907",
                    "name": "Administrative Affairs"
                },
                {
                    "code": "NB_431",
                    "name": "Provost & VC Academic Affairs"
                },
                {
                    "code": "FT_492",
                    "name": "English"
                },
                {
                    "code": "GQ_280",
                    "name": "University Library"
                },
                {
                    "code": "FN_978",
                    "name": "Orthodontics"
                },
                {
                    "code": "GN_974",
                    "name": "Sch of Continuing Studies Adm"
                },
                {
                    "code": "JF_250",
                    "name": "Vice Chancellor for Research"
                },
                {
                    "code": "FS_480",
                    "name": "Graduate Admin"
                },
                {
                    "code": "FW_643",
                    "name": "Reg Nursing Program: Urbana"
                },
                {
                    "code": "PH_740",
                    "name": "Liberal & Integrative Studies"
                },
                {
                    "code": "KR_801",
                    "name": "Dance"
                },
                {
                    "code": "JJ_347",
                    "name": "Testing Services"
                },
                {
                    "code": "PG_442",
                    "name": "Educational Leadership"
                },
                {
                    "code": "AJ_460",
                    "name": "OTM Urbana-Champaign"
                },
                {
                    "code": "FX_296",
                    "name": "Student Affairs"
                },
                {
                    "code": "KT_417",
                    "name": "IPM Administration"
                },
                {
                    "code": "FN_757",
                    "name": "Oral and Maxillofacial Surgery"
                },
                {
                    "code": "FX_392",
                    "name": "Pharmacy Advancement"
                },
                {
                    "code": "FY_592",
                    "name": "School of Public Health"
                },
                {
                    "code": "PL_900",
                    "name": "Papers of Abraham Lincoln"
                },
                {
                    "code": "PL_676",
                    "name": "Radio Station WUIS"
                },
                {
                    "code": "LP_992",
                    "name": "Library & Information Science"
                },
                {
                    "code": "GF_725",
                    "name": "Occupational Therapy"
                },
                {
                    "code": "KR_262",
                    "name": "Krannert Center"
                },
                {
                    "code": "NB_269",
                    "name": "Principal's Scholars Pgm"
                },
                {
                    "code": "NQ_279",
                    "name": "Student Services Building"
                },
                {
                    "code": "JU_435",
                    "name": "Ofc of International Affairs"
                },
                {
                    "code": "KP_251",
                    "name": "Civil & Environmental Eng"
                },
                {
                    "code": "KM_330",
                    "name": "Coll of Business Development"
                },
                {
                    "code": "JF_473",
                    "name": "Research Resources Center"
                },
                {
                    "code": "FY_687",
                    "name": "Public Health Undergrad Prog"
                },
                {
                    "code": "GA_219",
                    "name": "Pathology"
                },
                {
                    "code": "NA_550",
                    "name": "Allerton Park & Retreat Center"
                },
                {
                    "code": "FT_507",
                    "name": "Religious Studies"
                },
                {
                    "code": "PF_417",
                    "name": "Public Health"
                },
                {
                    "code": "FT_525",
                    "name": "Economics"
                },
                {
                    "code": "SE_674",
                    "name": "International Student Services"
                },
                {
                    "code": "KV_932",
                    "name": "E Asian & Pacific Studies Cntr"
                },
                {
                    "code": "GL_612",
                    "name": "Ctr for Social Policy & Rsrch"
                },
                {
                    "code": "JU_710",
                    "name": "Digital Communications"
                },
                {
                    "code": "AM_637",
                    "name": "Alumni Association"
                },
                {
                    "code": "FR_585",
                    "name": "Theatre & Music Administration"
                },
                {
                    "code": "FY_399",
                    "name": "Health Policy & Administration"
                },
                {
                    "code": "KV_982",
                    "name": "Latina/Latino Studies"
                },
                {
                    "code": "LD_558",
                    "name": "Naval Science"
                },
                {
                    "code": "GP_533",
                    "name": "GC Urban Data Vis Prog & Lab"
                },
                {
                    "code": "FZ_387",
                    "name": "Anatomy and Cell Biology"
                },
                {
                    "code": "KN_541",
                    "name": "Council Teacher Ed Admin"
                },
                {
                    "code": "FY_706",
                    "name": "School of Public Health Admin"
                },
                {
                    "code": "NB_611",
                    "name": "Illini Center"
                },
                {
                    "code": "KV_577",
                    "name": "American Indian Studies Prgrm"
                },
                {
                    "code": "KT_647",
                    "name": "IPM Development"
                },
                {
                    "code": "GC_554",
                    "name": "Internal Medicine"
                },
                {
                    "code": "FR_935",
                    "name": "Hull House Museum"
                },
                {
                    "code": "SE_767",
                    "name": "Career Development Center"
                },
                {
                    "code": "FP_621",
                    "name": "Educational Psychology"
                },
                {
                    "code": "SE_577",
                    "name": "Admissions"
                },
                {
                    "code": "SA_678",
                    "name": "Office of the Chancellor"
                },
                {
                    "code": "KP_512",
                    "name": "Intl Research Relations"
                },
                {
                    "code": "AF_374",
                    "name": "OBFS - Univ Payroll & Benefits"
                },
                {
                    "code": "GH_780",
                    "name": "Graduate Medical Education"
                },
                {
                    "code": "GA_916",
                    "name": "Otolaryngology"
                },
                {
                    "code": "JP_448",
                    "name": "Housing"
                },
                {
                    "code": "KT_436",
                    "name": "Media and Cinema Studies"
                },
                {
                    "code": "MY_862",
                    "name": "Energy Services Administration"
                },
                {
                    "code": "AA_693",
                    "name": "Ofc of Governmental Relations"
                },
                {
                    "code": "PJ_967",
                    "name": "Facilities Scheduling Svcs"
                },
                {
                    "code": "AJ_915",
                    "name": "EnterpriseWorks Chicago"
                },
                {
                    "code": "AF_770",
                    "name": "Procurement Diversity"
                },
                {
                    "code": "KP_933",
                    "name": "Electrical & Computer Eng"
                },
                {
                    "code": "JP_231",
                    "name": "CAS Administration"
                },
                {
                    "code": "AR_732",
                    "name": "University Tax"
                },
                {
                    "code": "JB_886",
                    "name": "Women's Leadership & Res Ctr"
                },
                {
                    "code": "LC_249",
                    "name": "Vet Med College-Wide Programs"
                },
                {
                    "code": "FN_989",
                    "name": "Oral Biology"
                },
                {
                    "code": "LB_201",
                    "name": "Medical Biochemistry"
                },
                {
                    "code": "JB_411",
                    "name": "Disability Resource Center"
                },
                {
                    "code": "FQ_709",
                    "name": "Chemical Engrg"
                },
                {
                    "code": "NB_759",
                    "name": "Campus Honors Program"
                },
                {
                    "code": "PH_398",
                    "name": "African-American Studies"
                },
                {
                    "code": "SB_840",
                    "name": "COLRS Ctr Online Lrng Resch Sv"
                },
                {
                    "code": "KM_747",
                    "name": "External & Alumni Affairs"
                },
                {
                    "code": "FR_745",
                    "name": "Art and Art History Admin"
                },
                {
                    "code": "GF_334",
                    "name": "Inst on Disability & Human Dev"
                },
                {
                    "code": "GC_981",
                    "name": "Ctr Health Outcomes Research"
                },
                {
                    "code": "KP_422",
                    "name": "Industrial&Enterprise Sys Eng"
                },
                {
                    "code": "FV_455",
                    "name": "Ctr Clinical Translational Sci"
                },
                {
                    "code": "JJ_488",
                    "name": "African American Academic Netw"
                },
                {
                    "code": "FW_842",
                    "name": "Women, Child,& Family Hlth Sci"
                },
                {
                    "code": "FW_829",
                    "name": "Ofc Research Facilitation"
                },
                {
                    "code": "GF_871",
                    "name": "Disability & Human Development"
                },
                {
                    "code": "GT_685",
                    "name": "Ofc Special Scholarship Prgms"
                },
                {
                    "code": "FY_731",
                    "name": "Environmtl & Occuptnl Hlth Sci"
                },
                {
                    "code": "NH_234",
                    "name": "Office of Web Services"
                },
                {
                    "code": "SE_626",
                    "name": "Student Services"
                },
                {
                    "code": "NE_626",
                    "name": "Center for Advanced Study"
                },
                {
                    "code": "KT_408",
                    "name": "Advertising"
                },
                {
                    "code": "KV_490",
                    "name": "Religion"
                },
                {
                    "code": "KV_510",
                    "name": "School of Chemical Sciences"
                },
                {
                    "code": "FQ_284",
                    "name": "Engineering Admin"
                },
                {
                    "code": "JM_849",
                    "name": "Capital Programs - Chicago"
                },
                {
                    "code": "AF_888",
                    "name": "OBFS - Strategic Procurement"
                },
                {
                    "code": "KP_244",
                    "name": "Physics"
                },
                {
                    "code": "KP_434",
                    "name": "Computer Science"
                },
                {
                    "code": "KV_872",
                    "name": "Geography & Geographic InfoSci"
                },
                {
                    "code": "NB_317",
                    "name": "Enrollment Mgmt Shared Svcs"
                },
                {
                    "code": "PH_895",
                    "name": "Philosophy"
                },
                {
                    "code": "KV_489",
                    "name": "Communication"
                },
                {
                    "code": "JM_426",
                    "name": "Heat, Light & Power Operating"
                },
                {
                    "code": "NE_696",
                    "name": "Office of Proposal Development"
                },
                {
                    "code": "FT_349",
                    "name": "Classics & Mediterran Studies"
                },
                {
                    "code": "JA_752",
                    "name": "Ofc of the Chancellor"
                },
                {
                    "code": "SB_485",
                    "name": "Student Learning Services"
                },
                {
                    "code": "FL_542",
                    "name": "CBA - Undergraduate Programs"
                },
                {
                    "code": "NB_630",
                    "name": "Staff Human Resources"
                },
                {
                    "code": "KM_979",
                    "name": "Business Career Services"
                },
                {
                    "code": "AF_970",
                    "name": "OBFS - UIUC AVP Business & Finance"
                },
                {
                    "code": "JB_890",
                    "name": "UHP - Early Outreach"
                },
                {
                    "code": "FY_245",
                    "name": "Community Health Sciences"
                },
                {
                    "code": "GF_960",
                    "name": "Kinesiology and Nutrition"
                },
                {
                    "code": "LC_819",
                    "name": "Center for Zoonoses Research"
                },
                {
                    "code": "AM_813",
                    "name": "U of I Foundation"
                },
                {
                    "code": "AF_738",
                    "name": "OBFS - Enterprise Risk Mgmt"
                },
                {
                    "code": "GA_828",
                    "name": "Ctr for Magnetic Resonance Rsc"
                },
                {
                    "code": "GA_258",
                    "name": "Anesthesiology"
                },
                {
                    "code": "FX_295",
                    "name": "Biopharmaceutical Sciences"
                },
                {
                    "code": "GH_467",
                    "name": "Administration Services"
                },
                {
                    "code": "KV_583",
                    "name": "Statistics"
                },
                {
                    "code": "KV_710",
                    "name": "Political Science"
                },
                {
                    "code": "JB_600",
                    "name": "VP Academic & Enrollment Svcs"
                },
                {
                    "code": "JA_277",
                    "name": "Faculty Senate"
                },
                {
                    "code": "SF_652",
                    "name": "Building Maintenance"
                },
                {
                    "code": "AF_271",
                    "name": "OBFS - Stu Fin Serv & Cash Ops"
                },
                {
                    "code": "KV_362",
                    "name": "E. Asian Languages & Cultures"
                },
                {
                    "code": "FT_410",
                    "name": "LAS Administration"
                },
                {
                    "code": "KV_655",
                    "name": "Geology"
                },
                {
                    "code": "KV_404",
                    "name": "Asian American Studies"
                },
                {
                    "code": "GE_636",
                    "name": "Family and Community Medicine"
                },
                {
                    "code": "JM_577",
                    "name": "Facilities Management Admin"
                },
                {
                    "code": "NA_700",
                    "name": "Office of the Chancellor"
                },
                {
                    "code": "KV_257",
                    "name": "Mathematics"
                },
                {
                    "code": "FX_360",
                    "name": "Pharmacy Syst,Outcomes &Policy"
                },
                {
                    "code": "NA_433",
                    "name": "Diversity, Equity and Access"
                },
                {
                    "code": "GA_650",
                    "name": "Urology"
                },
                {
                    "code": "KV_265",
                    "name": "Sch Earth, Soc, Environ Admin"
                },
                {
                    "code": "KP_602",
                    "name": "Engineering General Expen"
                },
                {
                    "code": "FQ_323",
                    "name": "Mechanical & Industrial Engr"
                },
                {
                    "code": "FX_484",
                    "name": "Pharmacy-UHP"
                },
                {
                    "code": "FX_279",
                    "name": "Ambulatory Pharmacy Services"
                },
                {
                    "code": "AC_723",
                    "name": "Univ Ofc Planning & Budgeting"
                },
                {
                    "code": "GA_722",
                    "name": "Psychiatry"
                },
                {
                    "code": "GH_466",
                    "name": "Support and General Services"
                },
                {
                    "code": "KV_580",
                    "name": "LAS Administration"
                },
                {
                    "code": "PL_752",
                    "name": "Survey Research Office"
                },
                {
                    "code": "NB_962",
                    "name": "Div of Management Information"
                },
                {
                    "code": "SE_468",
                    "name": "Business Manager"
                },
                {
                    "code": "GC_500",
                    "name": "Psychiatry & Behavioral Med"
                },
                {
                    "code": "LB_353",
                    "name": "Obstetrics and Gynecology"
                },
                {
                    "code": "FZ_386",
                    "name": "Physiology and Biophysics"
                },
                {
                    "code": "GA_586",
                    "name": "Medicine"
                },
                {
                    "code": "FT_830",
                    "name": "Institute for the Humanities"
                },
                {
                    "code": "JE_651",
                    "name": "Office of Admissions & Records"
                },
                {
                    "code": "FV_718",
                    "name": "Administration"
                },
                {
                    "code": "KV_584",
                    "name": "Cell & Developmental Biology"
                },
                {
                    "code": "KM_952",
                    "name": "College of Business"
                },
                {
                    "code": "GA_924",
                    "name": "Ctr for Cardiovascular Res"
                },
                {
                    "code": "FV_536",
                    "name": "Medicine-UHP"
                },
                {
                    "code": "NE_531",
                    "name": "Biotechnology Center"
                },
                {
                    "code": "JJ_923",
                    "name": "Academic Center for Excellence"
                },
                {
                    "code": "GH_456",
                    "name": "Ambulatory Clinical Services"
                },
                {
                    "code": "JS_587",
                    "name": "Ofc Institutional Advancement"
                },
                {
                    "code": "SB_247",
                    "name": "Capital Scholars Program"
                },
                {
                    "code": "KL_470",
                    "name": "Agr & Consumer Economics"
                },
                {
                    "code": "LF_575",
                    "name": "Police Training Institute"
                },
                {
                    "code": "KV_241",
                    "name": "Anthropology"
                },
                {
                    "code": "KV_553",
                    "name": "Russian,E European,Eurasn Ctr"
                },
                {
                    "code": "KP_615",
                    "name": "Aerospace Engineering"
                },
                {
                    "code": "KL_348",
                    "name": "ACES Info Tech & Cmc Svcs"
                },
                {
                    "code": "LB_816",
                    "name": "Pharmacology"
                },
                {
                    "code": "SE_660",
                    "name": "Health Services"
                },
                {
                    "code": "KY_963",
                    "name": "Community Health"
                },
                {
                    "code": "LB_475",
                    "name": "Med at UC Clinical Sci Adm"
                },
                {
                    "code": "PH_484",
                    "name": "History"
                },
                {
                    "code": "KM_938",
                    "name": "Executive MBA Program"
                },
                {
                    "code": "KT_708",
                    "name": "IPM Engagement"
                },
                {
                    "code": "KN_418",
                    "name": "Bureau Educational Research"
                },
                {
                    "code": "FR_894",
                    "name": "Arch, Design, & the Arts Admin"
                },
                {
                    "code": "FP_208",
                    "name": "Education"
                },
                {
                    "code": "FR_489",
                    "name": "Theatre"
                },
                {
                    "code": "FT_458",
                    "name": "Chemistry"
                },
                {
                    "code": "PL_538",
                    "name": "CSPL Ofc of Executive Director"
                },
                {
                    "code": "GE_339",
                    "name": "Pediatrics"
                },
                {
                    "code": "AH_292",
                    "name": "CARLI"
                },
                {
                    "code": "LD_914",
                    "name": "Military Science"
                },
                {
                    "code": "JP_207",
                    "name": "Campus Recreation"
                },
                {
                    "code": "FX_791",
                    "name": "Ctr for Pharmaceutical Biotech"
                },
                {
                    "code": "LB_761",
                    "name": "Medicine at UC Admin"
                },
                {
                    "code": "JM_876",
                    "name": "Materials Distr/Central Supply"
                },
                {
                    "code": "GG_589",
                    "name": "Armed Forces Military Science"
                },
                {
                    "code": "LP_560",
                    "name": "Center for Children's Books"
                },
                {
                    "code": "PH_353",
                    "name": "Art, Music, and Theatre"
                },
                {
                    "code": "KV_383",
                    "name": "School of Integrative Biology"
                },
                {
                    "code": "LB_549",
                    "name": "Psychiatry"
                },
                {
                    "code": "KP_227",
                    "name": "Engineering Administration"
                },
                {
                    "code": "FZ_494",
                    "name": "Pharmacology"
                },
                {
                    "code": "AF_879",
                    "name": "OBFS - UIUC Grants & Contracts"
                },
                {
                    "code": "AE_699",
                    "name": "Admin Info Technology Services"
                },
                {
                    "code": "GF_797",
                    "name": "Applied Health Sciences Admin"
                },
                {
                    "code": "JV_424",
                    "name": "Academic Computing & Comm Ctr"
                },
                {
                    "code": "FL_846",
                    "name": "Managerial Studies"
                },
                {
                    "code": "GF_318",
                    "name": "Biomed & Health Info Sciences"
                },
                {
                    "code": "KV_984",
                    "name": "Intensive English Institute"
                },
                {
                    "code": "AF_204",
                    "name": "OBFS - Business Info Systems"
                },
                {
                    "code": "LC_873",
                    "name": "Comparative Biosciences"
                },
                {
                    "code": "GP_429",
                    "name": "Survey Research Laboratory"
                },
                {
                    "code": "KV_276",
                    "name": "Center for Writing Studies"
                },
                {
                    "code": "PL_950",
                    "name": "Office of Electronic Media"
                },
                {
                    "code": "LQ_533",
                    "name": "St International Acad Affairs"
                },
                {
                    "code": "AF_962",
                    "name": "OBFS - UIC Grants & Contracts"
                },
                {
                    "code": "JF_653",
                    "name": "Ctr for Rsch on Women & Gender"
                },
                {
                    "code": "JP_505",
                    "name": "Student Centers Administration"
                },
                {
                    "code": "FT_988",
                    "name": "Latin American &Latino Studies"
                },
                {
                    "code": "PE_830",
                    "name": "Business & Management Gen Exp"
                },
                {
                    "code": "FT_734",
                    "name": "Political Science"
                },
                {
                    "code": "JE_667",
                    "name": "V Pro Acad & Enroll Svcs Admin"
                },
                {
                    "code": "AR_521",
                    "name": "Risk Management"
                },
                {
                    "code": "PH_272",
                    "name": "LAS Administration"
                },
                {
                    "code": "KR_733",
                    "name": "Urban & Regional Planning"
                },
                {
                    "code": "SE_831",
                    "name": "Financial Assistance"
                },
                {
                    "code": "FR_910",
                    "name": "Art History"
                },
                {
                    "code": "GP_568",
                    "name": "Inst Policy & Civic Engagement"
                },
                {
                    "code": "FY_443",
                    "name": "Ctr for Adv Dist Educ Pub Hlth"
                },
                {
                    "code": "SF_955",
                    "name": "Waste Disposal"
                },
                {
                    "code": "PG_694",
                    "name": "Teacher Education"
                },
                {
                    "code": "KV_604",
                    "name": "Molecular & Integrative Physl"
                },
                {
                    "code": "AA_550",
                    "name": "University Counsel"
                },
                {
                    "code": "NK_551",
                    "name": "McKinley Health Center"
                },
                {
                    "code": "KP_273",
                    "name": "Engr Shared Admin Services"
                },
                {
                    "code": "FT_909",
                    "name": "Criminology, Law, and Justice"
                },
                {
                    "code": "FP_835",
                    "name": "Educational Policy Studies"
                },
                {
                    "code": "FT_316",
                    "name": "History"
                },
                {
                    "code": "FY_252",
                    "name": "Cure Violence"
                },
                {
                    "code": "FT_841",
                    "name": "Anthropology"
                },
                {
                    "code": "NP_502",
                    "name": "IL State Archaeological Survey"
                },
                {
                    "code": "PH_331",
                    "name": "English as a 2nd Lng Courses"
                },
                {
                    "code": "AF_979",
                    "name": "OBFS - UIS Business Services"
                },
                {
                    "code": "AJ_959",
                    "name": "UIUC Research Park Complex"
                },
                {
                    "code": "LR_540",
                    "name": "Library Admin"
                },
                {
                    "code": "LG_568",
                    "name": "School of Labor & Empl. Rel."
                },
                {
                    "code": "JC_744",
                    "name": "Facility and Space Planning"
                },
                {
                    "code": "KV_324",
                    "name": "Sociology"
                },
                {
                    "code": "FT_637",
                    "name": "Philosophy"
                },
                {
                    "code": "PH_387",
                    "name": "Clinical Lab Science"
                },
                {
                    "code": "JB_992",
                    "name": "Asian Amer Res/Cultural Center"
                },
                {
                    "code": "KS_486",
                    "name": "Graduate Admin"
                },
                {
                    "code": "GP_736",
                    "name": "Urban Planning &Public Affairs"
                },
                {
                    "code": "JJ_820",
                    "name": "Fin Aids Ofc"
                },
                {
                    "code": "AF_515",
                    "name": "OBFS - UIC EAVP Business & Fin"
                },
                {
                    "code": "FY_786",
                    "name": "Public Health-UHP"
                },
                {
                    "code": "JB_548",
                    "name": "African-American Cultural Cntr"
                },
                {
                    "code": "NB_593",
                    "name": "Undergraduate Admissions"
                },
                {
                    "code": "GA_773",
                    "name": "Orthopaedic Surgery"
                },
                {
                    "code": "NN_814",
                    "name": "Capital Planning & Space Mgmt"
                },
                {
                    "code": "GT_310",
                    "name": "Honors College"
                },
                {
                    "code": "SE_396",
                    "name": "Counseling Center"
                },
                {
                    "code": "LD_974",
                    "name": "Armed Forces Coordinator"
                },
                {
                    "code": "JB_373",
                    "name": "LARES"
                },
                {
                    "code": "GA_809",
                    "name": "Ctr for Craniofacial Anomalies"
                },
                {
                    "code": "GH_795",
                    "name": "Ambulatory Off-Site Services"
                },
                {
                    "code": "GC_806",
                    "name": "Radiology"
                },
                {
                    "code": "FT_354",
                    "name": "Physics"
                },
                {
                    "code": "JB_359",
                    "name": "Vice Provost Planning & Prgms"
                },
                {
                    "code": "KV_299",
                    "name": "Psychology"
                },
                {
                    "code": "FT_369",
                    "name": "Gender and Women's Studies"
                },
                {
                    "code": "FT_291",
                    "name": "Germanic Studies"
                },
                {
                    "code": "FP_817",
                    "name": "Ofc of Instr Resource Develop"
                },
                {
                    "code": "GA_732",
                    "name": "Dermatology"
                },
                {
                    "code": "GP_255",
                    "name": "Great Cities Institute"
                },
                {
                    "code": "KR_481",
                    "name": "Action Research Illinois"
                },
                {
                    "code": "PH_864",
                    "name": "Biology"
                },
                {
                    "code": "NB_429",
                    "name": "Osher Lifelong Learning Inst"
                },
                {
                    "code": "GE_614",
                    "name": "Biomedical Science"
                },
                {
                    "code": "FT_206",
                    "name": "James Woodworth Prairie Presv"
                },
                {
                    "code": "JB_414",
                    "name": "Study Abroad"
                },
                {
                    "code": "SB_819",
                    "name": "English Language Support Svcs"
                },
                {
                    "code": "NQ_571",
                    "name": "Division of Campus Recreation"
                },
                {
                    "code": "KP_454",
                    "name": "Applied Research Institute"
                },
                {
                    "code": "PE_611",
                    "name": "Management"
                },
                {
                    "code": "NE_370",
                    "name": "Vice Chancellor-Research"
                },
                {
                    "code": "NP_375",
                    "name": "IL Natural History Survey"
                },
                {
                    "code": "PG_714",
                    "name": "Human Services"
                },
                {
                    "code": "GN_692",
                    "name": "Tutorium in Intensive English"
                },
                {
                    "code": "KY_918",
                    "name": "Ctr Health, Aging, Disability"
                },
                {
                    "code": "AF_226",
                    "name": "OBFS - Business Devlp Srvcs"
                },
                {
                    "code": "FT_865",
                    "name": "Ctr for Rsch-Law/Crim Justice"
                },
                {
                    "code": "FP_588",
                    "name": "Special Education"
                },
                {
                    "code": "NA_380",
                    "name": "Business Innovation Services"
                },
                {
                    "code": "PF_358",
                    "name": "Environmental Studies"
                },
                {
                    "code": "KP_246",
                    "name": "Computational Science & Engr"
                },
                {
                    "code": "AF_698",
                    "name": "OBFS - University Payables"
                },
                {
                    "code": "NP_231",
                    "name": "Institute for Genomic Biology"
                },
                {
                    "code": "KM_260",
                    "name": "Finance"
                },
                {
                    "code": "LE_707",
                    "name": "Institute of Aviation"
                },
                {
                    "code": "JF_717",
                    "name": "Softech"
                },
                {
                    "code": "SE_307",
                    "name": "Campus Recreation"
                },
                {
                    "code": "FT_762",
                    "name": "Literature, Cult & Ling Admin"
                },
                {
                    "code": "GC_529",
                    "name": "Physical Plant Oper"
                },
                {
                    "code": "NE_409",
                    "name": "Inst Animal Care & Use Cmte"
                },
                {
                    "code": "KP_661",
                    "name": "Engineering IT Shared Services"
                },
                {
                    "code": "FM_496",
                    "name": "Div of Specializ Care for Chil"
                },
                {
                    "code": "PG_825",
                    "name": "Social Work"
                },
                {
                    "code": "NE_344",
                    "name": "Protection of Research Subject"
                },
                {
                    "code": "FN_735",
                    "name": "Periodontics"
                },
                {
                    "code": "FR_583",
                    "name": "Art"
                },
                {
                    "code": "FW_775",
                    "name": "Nursing-UHP"
                },
                {
                    "code": "GH_815",
                    "name": "Ambulatory Administration"
                },
                {
                    "code": "FN_319",
                    "name": "Oral Medicine and Diag Sci"
                },
                {
                    "code": "KU_853",
                    "name": "Law"
                },
                {
                    "code": "NJ_635",
                    "name": "Illinois Leadership Center"
                },
                {
                    "code": "GE_307",
                    "name": "Psychiatry"
                },
                {
                    "code": "PL_583",
                    "name": "Inst Legal, Legis & Policy Sty"
                },
                {
                    "code": "NB_898",
                    "name": "Office of the Registrar"
                },
                {
                    "code": "JB_510",
                    "name": "Social Justice Initiative"
                },
                {
                    "code": "JB_558",
                    "name": "Campus Learning Environments"
                },
                {
                    "code": "FT_610",
                    "name": "Math, Statistics, & Comp Scnc"
                },
                {
                    "code": "FT_845",
                    "name": "LAS Social Science Research"
                },
                {
                    "code": "FX_270",
                    "name": "Academic Affairs"
                },
                {
                    "code": "KY_981",
                    "name": "Disability Research Institute"
                },
                {
                    "code": "JB_670",
                    "name": "UIC Innovation Center"
                },
                {
                    "code": "JB_457",
                    "name": "Latino Cultural Center"
                },
                {
                    "code": "SF_255",
                    "name": "Facilities & Services Admin"
                },
                {
                    "code": "LB_620",
                    "name": "Medical Microbiology"
                },
                {
                    "code": "JB_668",
                    "name": "Vice Provost Faculty Affairs"
                },
                {
                    "code": "FQ_737",
                    "name": "Civil & Materials Engineering"
                },
                {
                    "code": "NB_970",
                    "name": "Comm on Instit Cooperation"
                },
                {
                    "code": "KV_968",
                    "name": "Neuroscience Program"
                },
                {
                    "code": "KY_714",
                    "name": "Recreation, Sport and Tourism"
                },
                {
                    "code": "KL_793",
                    "name": "Human & Community Development"
                },
                {
                    "code": "KN_616",
                    "name": "Educational Psychology"
                },
                {
                    "code": "GE_351",
                    "name": "Natl Ctr for Rural Health Prof"
                },
                {
                    "code": "FT_606",
                    "name": "Hispanic and Italian Studies"
                },
                {
                    "code": "GL_630",
                    "name": "Jane Addams Social Work"
                },
                {
                    "code": "JK_518",
                    "name": "Publications Services"
                },
                {
                    "code": "FX_838",
                    "name": "Coll Pharmacy Ofc of the Dean"
                },
                {
                    "code": "AH_709",
                    "name": "Vice Pres for Academic Affairs"
                },
                {
                    "code": "GE_285",
                    "name": "Surg/Surgical Specialties"
                },
                {
                    "code": "GN_468",
                    "name": "Office of Continuing Education"
                },
                {
                    "code": "KL_698",
                    "name": "Food Science & Human Nutrition"
                },
                {
                    "code": "HY_951",
                    "name": "Utilities - UIC"
                },
                {
                    "code": "PF_670",
                    "name": "Legal Studies"
                },
                {
                    "code": "JE_811",
                    "name": "Office of the Registrar"
                },
                {
                    "code": "FL_656",
                    "name": "Accounting"
                },
                {
                    "code": "FT_578",
                    "name": "LAS Student Affairs"
                },
                {
                    "code": "FZ_301",
                    "name": "Microbiology and Immunology"
                },
                {
                    "code": "FP_784",
                    "name": "Education Admin"
                },
                {
                    "code": "LB_609",
                    "name": "Medical Cell & Structural Biol"
                },
                {
                    "code": "FT_885",
                    "name": "Psychology"
                },
                {
                    "code": "NB_711",
                    "name": "I-STEM Education Initiative"
                },
                {
                    "code": "KY_679",
                    "name": "Speech & Hearing Science"
                },
                {
                    "code": "KM_230",
                    "name": "MBA Program Administration"
                },
                {
                    "code": "KR_209",
                    "name": "U of I Bands"
                },
                {
                    "code": "KU_694",
                    "name": "Law Library"
                },
                {
                    "code": "GC_415",
                    "name": "Emergency Medicine"
                },
                {
                    "code": "FW_929",
                    "name": "Practice, Policy &Partnerships"
                },
                {
                    "code": "NT_798",
                    "name": "CITES"
                },
                {
                    "code": "JC_562",
                    "name": "Office of Sustainability"
                },
                {
                    "code": "NH_395",
                    "name": "News Bureau"
                },
                {
                    "code": "SA_483",
                    "name": "Office of Web Services"
                },
                {
                    "code": "NJ_391",
                    "name": "The Career Center"
                },
                {
                    "code": "AR_722",
                    "name": "Agricultural Property Services"
                },
                {
                    "code": "LB_515",
                    "name": "Surgery"
                },
                {
                    "code": "AF_791",
                    "name": "OBFS - Controller"
                },
                {
                    "code": "AH_360",
                    "name": "Academic Programs and Services"
                },
                {
                    "code": "FL_673",
                    "name": "Research Centers"
                },
                {
                    "code": "KV_864",
                    "name": "Linguistics"
                },
                {
                    "code": "NP_320",
                    "name": "Supercomputing Applications"
                },
                {
                    "code": "NP_392",
                    "name": "Beckman Institute"
                },
                {
                    "code": "FL_785",
                    "name": "Business Administration Admini"
                },
                {
                    "code": "KT_659",
                    "name": "IPM Created Content"
                },
                {
                    "code": "KV_985",
                    "name": "French"
                },
                {
                    "code": "KV_723",
                    "name": "Prg in Jewish Culture &Society"
                },
                {
                    "code": "NC_293",
                    "name": "Campus Parking"
                },
                {
                    "code": "KR_883",
                    "name": "Theatre"
                },
                {
                    "code": "LB_491",
                    "name": "Family Medicine"
                },
                {
                    "code": "LN_371",
                    "name": "Center for Teaching Excellence"
                },
                {
                    "code": "FL_672",
                    "name": "Information/Decision Sciences"
                },
                {
                    "code": "NB_860",
                    "name": "Provost Office Shared Services"
                },
                {
                    "code": "GE_677",
                    "name": "Obstetrics & Gynecology"
                },
                {
                    "code": "LC_444",
                    "name": "Vet Medicine Administration"
                },
                {
                    "code": "NC_763",
                    "name": "F&S Document Services"
                },
                {
                    "code": "FX_770",
                    "name": "Ctr Pharm Epi Pharm Econ"
                },
                {
                    "code": "JB_390",
                    "name": "VP Budget & Resource Planning"
                },
                {
                    "code": "FX_967",
                    "name": "Pharmacy Practice"
                },
                {
                    "code": "KY_682",
                    "name": "Applied Health Sciences Admin"
                },
                {
                    "code": "NA_665",
                    "name": "Office of Public Engagement"
                },
                {
                    "code": "LQ_794",
                    "name": "Intl Student and Scholar Svcs"
                },
                {
                    "code": "KV_958",
                    "name": "Slavic Languages & Literature"
                },
                {
                    "code": "FT_943",
                    "name": "French and Francophone Studies"
                },
                {
                    "code": "LR_600",
                    "name": "Library Research & Publication"
                },
                {
                    "code": "KL_416",
                    "name": "Agricultural Buildings, O & M"
                },
                {
                    "code": "PH_465",
                    "name": "Modern Languages"
                },
                {
                    "code": "KV_303",
                    "name": "African American Studies"
                },
                {
                    "code": "KV_927",
                    "name": "Germanic Languages & Lit"
                },
                {
                    "code": "PH_882",
                    "name": "Women and Gender Studies"
                },
                {
                    "code": "FT_903",
                    "name": "Humanities"
                },
                {
                    "code": "JU_326",
                    "name": "Office of Public Affairs"
                },
                {
                    "code": "PG_858",
                    "name": "Human Development Counseling"
                },
                {
                    "code": "GA_271",
                    "name": "Surgery"
                },
                {
                    "code": "KV_415",
                    "name": "School of Molecular & Cell Bio"
                },
                {
                    "code": "JA_249",
                    "name": "Special Projects"
                },
                {
                    "code": "FT_873",
                    "name": "Prog in Asian American Studies"
                },
                {
                    "code": "KN_613",
                    "name": "Curriculum and Instruction"
                },
                {
                    "code": "GF_827",
                    "name": "Physical Therapy"
                },
                {
                    "code": "KY_943",
                    "name": "Disability Res & Educ Svcs"
                },
                {
                    "code": "NH_611",
                    "name": "Illini Center"
                },
                {
                    "code": "AJ_368",
                    "name": "OTM Chicago"
                },
                {
                    "code": "SA_807",
                    "name": "Service Enterprises"
                },
                {
                    "code": "JJ_836",
                    "name": "International Services"
                },
                {
                    "code": "GN_855",
                    "name": "Summer Session Program"
                },
                {
                    "code": "PH_780",
                    "name": "LAS General Expense"
                },
                {
                    "code": "NE_877",
                    "name": "Division of Research Safety"
                },
                {
                    "code": "FN_228",
                    "name": "Dentistry-UHP"
                },
                {
                    "code": "JB_887",
                    "name": "Urban Health Program"
                },
                {
                    "code": "NB_678",
                    "name": "Student Financial Aid"
                },
                {
                    "code": "SG_762",
                    "name": "Residence Life"
                },
                {
                    "code": "KV_413",
                    "name": "Chemistry"
                },
                {
                    "code": "KV_948",
                    "name": "Microbiology"
                },
                {
                    "code": "LR_795",
                    "name": "Library Collections/Support"
                },
                {
                    "code": "GH_766",
                    "name": "Physician Support"
                },
                {
                    "code": "GC_264",
                    "name": "Obstetrics & Gynecology"
                },
                {
                    "code": "JC_366",
                    "name": "Envir Health & Safety"
                },
                {
                    "code": "NJ_573",
                    "name": "Student Conflict Resolution"
                },
                {
                    "code": "PH_739",
                    "name": "Chemistry"
                },
                {
                    "code": "LQ_345",
                    "name": "European Union Center"
                },
                {
                    "code": "FQ_949",
                    "name": "Electrical & Computer Engr"
                },
                {
                    "code": "AQ_548",
                    "name": "Vice Pres for Health Affairs"
                },
                {
                    "code": "AF_261",
                    "name": "OBFS - Train Perf Dev & Comm"
                },
                {
                    "code": "GC_821",
                    "name": "Pediatrics"
                },
                {
                    "code": "KM_346",
                    "name": "Accountancy"
                },
                {
                    "code": "FT_453",
                    "name": "Biological Sciences"
                },
                {
                    "code": "NU_336",
                    "name": "Intercollegiate Athletics"
                },
                {
                    "code": "FL_691",
                    "name": "Finance"
                },
                {
                    "code": "FW_564",
                    "name": "Ofc Global Health Leadership"
                },
                {
                    "code": "JU_540",
                    "name": "Public & Government Affairs"
                },
                {
                    "code": "NU_296",
                    "name": "State Farm Center"
                },
                {
                    "code": "KP_343",
                    "name": "Bioengineering"
                },
                {
                    "code": "JF_969",
                    "name": "Biologic Resources Laboratory"
                },
                {
                    "code": "GA_232",
                    "name": "Neurological Surgery"
                },
                {
                    "code": "JF_896",
                    "name": "Center for Structural Biology"
                },
                {
                    "code": "PE_365",
                    "name": "Economics"
                },
                {
                    "code": "GH_987",
                    "name": "Ancillary Services"
                },
                {
                    "code": "NH_645",
                    "name": "Creative Services"
                },
                {
                    "code": "FN_237",
                    "name": "Ctr for Molec Biol of Oral Dis"
                },
                {
                    "code": "GE_352",
                    "name": "Pathology"
                },
                {
                    "code": "KV_461",
                    "name": "Center for African Studies"
                },
                {
                    "code": "NP_807",
                    "name": "IL Sustainable Technology Ctr"
                },
                {
                    "code": "JB_560",
                    "name": "US/Asia Executive Dev Prgm"
                },
                {
                    "code": "PH_297",
                    "name": "Mathematical Sciences"
                },
                {
                    "code": "JF_897",
                    "name": "Ctr for Adv Desgn, Res &Explor"
                },
                {
                    "code": "LB_516",
                    "name": "Medical Information Science"
                },
                {
                    "code": "PE_845",
                    "name": "Accountancy"
                },
                {
                    "code": "KM_446",
                    "name": "Bureau Economic & Business Res"
                },
                {
                    "code": "AJ_928",
                    "name": "OVPR Security Management Ofc"
                },
                {
                    "code": "GA_843",
                    "name": "Neurology and Rehab Medicine"
                },
                {
                    "code": "KL_971",
                    "name": "Nutritional Sciences"
                },
                {
                    "code": "NH_243",
                    "name": "Public Affairs"
                },
                {
                    "code": "LF_305",
                    "name": "Fire Service Institute"
                },
                {
                    "code": "FX_275",
                    "name": "Institute for Tuberculosis Research"
                },
                {
                    "code": "NB_223",
                    "name": "University Laboratory HS"
                },
                {
                    "code": "JU_756",
                    "name": "Community Relations"
                },
                {
                    "code": "KV_715",
                    "name": "Philosophy"
                },
                {
                    "code": "JB_501",
                    "name": "Vice Chanc for Academic Affair"
                },
                {
                    "code": "KV_361",
                    "name": "Entomology"
                },
                {
                    "code": "AF_832",
                    "name": "OBFS - Cap Prgm/Real Est Svc"
                },
                {
                    "code": "SE_290",
                    "name": "VC Student Affairs"
                },
                {
                    "code": "PH_696",
                    "name": "Computer Science"
                },
                {
                    "code": "GC_254",
                    "name": "Family and Community Medicine"
                },
                {
                    "code": "FT_474",
                    "name": "Earth & Environmental Sciences"
                },
                {
                    "code": "JC_957",
                    "name": "University Police"
                },
                {
                    "code": "KV_405",
                    "name": "Economics"
                },
                {
                    "code": "KV_514",
                    "name": "Classics"
                },
                {
                    "code": "KV_652",
                    "name": "Program in Medieval Studies"
                },
                {
                    "code": "LR_396",
                    "name": "Mortenson Cntr Int'l Lib Prgms"
                },
                {
                    "code": "KR_767",
                    "name": "Architecture"
                },
                {
                    "code": "NT_618",
                    "name": "Ofc of the Chief Info Officer"
                },
                {
                    "code": "GP_682",
                    "name": "Nathalie P. Voorhees Program"
                },
                {
                    "code": "AF_641",
                    "name": "OBFS - Univ Acct & Fin Report"
                },
                {
                    "code": "KV_451",
                    "name": "History"
                },
                {
                    "code": "KN_760",
                    "name": "Educ Policy, Orgzn & Leadrshp"
                },
                {
                    "code": "NP_508",
                    "name": "Inst for Sustain, Enrgy, & Env"
                },
                {
                    "code": "GH_398",
                    "name": "Nursing"
                },
                {
                    "code": "KV_687",
                    "name": "Chemical & Biomolecular Engr"
                },
                {
                    "code": "KV_585",
                    "name": "Spanish, Italian & Portuguese"
                },
                {
                    "code": "FX_624",
                    "name": "Reg Pharmacy Program: Rockford"
                },
                {
                    "code": "KP_917",
                    "name": "Mechanical Sci & Engineering"
                },
                {
                    "code": "KM_847",
                    "name": "Ofc for Information Management"
                },
                {
                    "code": "FR_911",
                    "name": "School of Architecture"
                },
                {
                    "code": "KY_581",
                    "name": "Kinesiology & Community Health"
                },
                {
                    "code": "NJ_822",
                    "name": "Inclusion & Intercultural Rels"
                },
                {
                    "code": "LB_552",
                    "name": "Pathology"
                },
                {
                    "code": "GC_261",
                    "name": "Pathology"
                },
                {
                    "code": "JB_914",
                    "name": "Office of Diversity"
                },
                {
                    "code": "FW_995",
                    "name": "Ofc of Academic Programs-Nurs"
                },
                {
                    "code": "PL_268",
                    "name": "Grad Public Service Internship"
                },
                {
                    "code": "PH_404",
                    "name": "Psychology"
                },
                {
                    "code": "JE_226",
                    "name": "Office of Classroom Scheduling"
                },
                {
                    "code": "KM_826",
                    "name": "Ctr Business & Public Policy"
                },
                {
                    "code": "JS_242",
                    "name": "Office of Development"
                },
                {
                    "code": "FR_895",
                    "name": "School of Design"
                },
                {
                    "code": "GP_311",
                    "name": "Ctr for Urban Economic Devel"
                },
                {
                    "code": "GE_445",
                    "name": "Administration & Gen Exp"
                },
                {
                    "code": "SA_881",
                    "name": "Athletics"
                },
                {
                    "code": "NP_547",
                    "name": "IL State Geological Survey"
                },
                {
                    "code": "GA_905",
                    "name": "Pediatrics"
                },
                {
                    "code": "LM_468",
                    "name": "Illinois Informatics Institute"
                },
                {
                    "code": "GA_713",
                    "name": "Radiology"
                },
                {
                    "code": "NA_693",
                    "name": "Willard Airport Commercial Op"
                },
                {
                    "code": "SB_390",
                    "name": "Auditorium"
                },
                {
                    "code": "KL_384",
                    "name": "Cooperative Extension"
                },
                {
                    "code": "LP_812",
                    "name": "Center for Digital Inclusion"
                },
                {
                    "code": "GC_313",
                    "name": "COM-Peoria Academic Affairs"
                },
                {
                    "code": "AF_980",
                    "name": "OBFS - UIUC Purchasing"
                }
            ]
        }
});

