import React, { ReactElement } from 'react'
import { vw, vh } from '../assets/stylesheet'
import { bestOfEcoBu, bestOfEcoMo, bestOfEcoSo, bestOfScBiIcon, bestOfScCoIcon, bestOfScMaIcon, ENFJicon, ENFPicon, ENTJicon, ENTPicon, ESFJicon, ESFPicon, ESTJicon, ESTPicon, INFJicon, INFPicon, INTJicon, INTPicon, ISFJicon, ISFPicon, ISTJicon, ISTPicon, majorDefault } from '../assets/svgXml';
import clrStyle from '../assets/componentStyleSheet';
import { formatNumber } from '../assets/component';

export interface UserInfo {
    userID: string;
    synced?: boolean;
    name?: string;
    age?: number;
    loginMethod?: string;
    email?: string;
    password?: string;
    dataCollect?: boolean;
    data?: {
        persona: string;
        interest: string[];
        favorite: string[];
        goal?: string;
    }
    createTime?: any;
}
export interface Banner {
    id: number,
    img: any,
    title: string,
    naviTo: string
}
export interface SuitableForYou {
    id: number,
    img: any,
    title: string,
    minScore: number,
    majorNum: number,
    minFee: number | string,
    maxFee: number | string,
    unitFee: string,
    yearOrSemForFee: string,
    location: string,
    capacity: number,
    // those above just for the home card, add more below
}
export interface BestOfSubject {
    icon?: any,
    description: string,
    title: string,
    navTo: string,
}
export interface MBTI {
    mbti: string,
    name: string,
    description: string,
    personality: string[],
    favJob: string[],
    icon: any,
}

export interface MBTIGroup {
    gr: string,
    clr: string,
    data: MBTI[],
    desc: string
}

export interface RecentSearch {
    indexNum: number,
    uniName: string,
    uniShortName: string,
    field: string,
}

export interface Major {
    majorName?: string,
    examGroup?: {
        name: string,
        lowestStandardScore?: number | null,
        highestStandardScore?: number | null,
    }[] | null,
    degreeType?: 'College' | 'Doctor' | 'Master' | 'College Advanced Program',
    description?: string,
    afterGraduation?: boolean,
    addmission?: number | null,
    majorFee?: number | null,
    icon?: any,
    field?: string,
}

export interface University {
    id?: number,
    name?: string,
    shortName?: string | null,
    description?: string[],
    field?: string[],
    city?: string,
    location?: string,
    img?: any,
    admission?: number,
    refURL?: string[],
    // major
    major?: Major[],
    mainMajor?: string[],
    specialProgram?: string[],
    // score
    lowestStandardScore?: number,
    highestStandardScore?: number,
    scoreRefYear?: number,
    // fee
    minFee?: number,
    maxFee?: number,
    avgFee?: number,
    unitFee?: string,
    yearOrSemForFee?: string,
}

export interface CompareMajorItem {
    uniItem: University,
    major: Major,
}

export let ListFavSubject: string[] = [`Math`, `Physics`, `Language`, `Biology`, `Geography`, `Literature`, `Music`, `History`, `Chemistry`];

export let listIntersts: string[] = [`Singing`, `Movie`, `Hangout`, `Cooking`, `Board game`, `Video game`, `Sports`, `Reading`, `Writing`]

export let bannerList: Banner[] = [
    { id: 1, img: require(`../assets/photos/2(1).jpg`), title: `The cost of tuition fees at Hue Law University in the school year 2023 - 2024`, naviTo: `https://mytour.vn/vi/blog/bai-viet/emstrongchi-phi-hoc-phi-dai-hoc-luat-hue-nam-hoc-2023-2024-strong-em.html` },
    { id: 2, img: require(`../assets/photos/2.webp`), title: `Benchmark of FOREIGN TRADE UNIVERSITY 2023`, naviTo: `https://xaydungchinhsach.chinhphu.vn/truong-dai-hoc-ngoai-thuong-cong-bo-diem-chuan-2023-119230822130248234.htm` },
    { id: 3, img: require(`../assets/photos/3.jpeg`), title: `Explore the Tuition Fees for Fine Arts University in Ho Chi Minh City for the Academic Year 2020-2021`, naviTo: `https://mytour.vn/en/blog/bai-viet/explore-the-tuition-fees-for-fine-arts-university-in-ho-chi-minh-city-for-the-academic-year-2020-2021.html` },
    { id: 4, img: require(`../assets/photos/4.jpeg`), title: `Hanoi Medical University - Information on introduction, enrollment, training, tuition fees, scholarships...`, naviTo: `https://ielts-fighter.com/tin-tuc/dai-hoc-y-ha-noi_mt1641797363.html` },
]

export let suitableForYou: SuitableForYou[] = [
    { id: 1, img: { uri: `https://vinhuni.edu.vn/pages/assets/images/macdinh/anh01.png` }, title: `Vinh University`, minScore: 17, majorNum: 57, minFee: formatNumber(12900000), maxFee: formatNumber(15000000), unitFee: `đ`, yearOrSemForFee: `year`, location: `Vinh`, capacity: 5050 },
    { id: 2, img: { uri: `https://env.vnuf.edu.vn/documents/436517/5682738/23.jpg?t=1513669084767` }, title: `Vietnam National Forestry University`, minScore: 15, majorNum: 22, minFee: formatNumber(10000000), maxFee: formatNumber(22000000), unitFee: `đ`, yearOrSemForFee: `year`, location: `Hanoi`, capacity: 2360 },
    { id: 3, img: { uri: 'https://congchungnguyenvietcuong.com/Uploaded/Others/2023/12/26/truong-dai-hoc-my-thuat-tphcm_2612163209.webp' }, title: `HCMC University of Fine Arts`, minScore: 17.21, majorNum: 15, minFee: formatNumber(11000000), maxFee: formatNumber(15000000), unitFee: `đ`, yearOrSemForFee: `year`, location: `Hanoi`, capacity: 1110 },
]

export let bestOfScience: BestOfSubject[] = [
    { icon: bestOfScCoIcon(vw(20), vw(20)), description: `Computer science`, title: `HUST`, navTo: `` },
    { icon: bestOfScBiIcon(vw(20), vw(20)), description: `Biology`, title: `HMU`, navTo: `` },
    { icon: bestOfScMaIcon(vw(20), vw(20)), description: `Mathematics`, title: `VNU`, navTo: `` },
]

export let bestOfEconomic: BestOfSubject[] = [
    { icon: bestOfEcoMo(vw(20), vw(20)), description: `Money analysis`, title: `FTU`, navTo: `` },
    { icon: bestOfEcoSo(vw(20), vw(20)), description: `Social marketing`, title: `AJC`, navTo: `` },
    { icon: bestOfEcoBu(vw(20), vw(20)), description: `Business analysis`, title: `NEU`, navTo: `` },
]

export let mbti: MBTI[] = [
    {
        mbti: `ISTJ`,
        name: `Inspector`,
        description: `Reserved and practical, they tend to be loyal, orderly, and traditional.`,
        personality: [
            `These individuals tend to be serious, matter-of-fact, and reserved. They appreciate order and organization and pay a great deal of attention to detail.`,
            `They like to plan things out in advance and place an emphasis on tradition and law. They are responsible and realistic and can be described as dependable and trustworthy`],
        favJob: [`Accountant`, `Auditor`, `Lawyer`, `Police`, `Military`, `Manager`, `Teacher`],
        icon: ISTJicon()
    },
    {
        mbti: `ISTP`,
        name: `Crafter`,
        description: `Highly independent, they enjoy new experiences that provide first-hand learning.`,
        personality: [
            `People with this personality type are fearless and independent. They love adventure, new experiences, and risk-taking.`,
            `They tend to be quiet observers and are not well attuned to the emotional states of others, sometimes coming across as insensitive or stoic.`,
            `They are results- oriented, acting quickly to find workable solutions and understand the underlying cause of practical problems`
        ],
        favJob: [`Engineer`, `Mechanic`, `Athletes`, `Pilot`, `Detective`, `Special Forces`, `Police`, `Firefighter`],
        icon: ISTPicon()
    },
    {
        mbti: `ISFJ`,
        name: `Protector`,
        description: `Warm-hearted and dedicated, they are always ready to protect the people they care about.`,
        personality: [
            `These individuals are friendly, responsible, and reserved. They are service and work-oriented, committing to meeting their obligations and duties.`,
            `They are loyal, considerate, and place a lot of focus on the care of others. They are non-confrontational and value an orderly and harmonious environment.`
        ],
        favJob: [`Nurse`, `Doctor`, `Preschool Teacher`, `Customer Service Representative`, `Administrative Staff`, `Secretary`],
        icon: ISFJicon()
    },
    {
        mbti: `ISFP`,
        name: `Artist`,
        description: `Easy-going and flexible, they tend to be reserved and artistic.`,
        personality: [
            `These individuals are quiet, friendly, easy going, and sensitive. They have a strong need for personal space and time alone to recharge.`,
            `They value deep connection and prefer to spend time with smaller groups of close friends and family.`,
            `They are highly considerate and accepting, avoiding confrontation and committed to their values and to people who are important to them.`
        ],
        favJob: [`Artist`, `Designer`, `Musician`, `Photographer`, `Makeup Artist`, `Veterinarian`, `Music Teacher`],
        icon: ISFPicon()
    },
    {
        mbti: `INFJ`,
        name: `Advocate`,
        description: `Creative and analytical, they are considered one of the rarest Myers-Briggs types.`,
        personality: [
            `People with this personality type are serious, logical and hardworking. They are also compassionate, conscientious, and reserved.`,
            `They value close, deep connections and are sensitive to the needs of others, but also need time and space alone to recharge.`
        ],
        favJob: [`Psychologist`, `Writer`, `Diplomat`, `Consultant`, `Social Activist`],
        icon: INFJicon()
    },
    {
        mbti: `INFP`,
        name: `Mediator`,
        description: `Idealistic with high values, they strive to make the world a better place.`,
        personality: [
            `These people are creative, idealistic, caring, and loyal. They have high values and morals, and are constantly seeking out ways to understand people and to best serve humanity.`,
            `They are family and home-oriented and prefer to interact with a select group of close friends.`
        ],
        favJob: [`Artist`, `Designer`, `Writer`, `Poet`, `Journalist`, `Philosopher`],
        icon: INFPicon()
    },
    {
        mbti: `INTJ`,
        name: `Architect`,
        description: `High logical, they are both very creative and analytical.`,
        personality: [
            `These people are highly independent, self-confident and prefer to work alone. They are analytical, creative, logical, and driven.`,
            `They place an emphasis on logic and fact rather than emotion and can be viewed as perfectionists.`,
            `They tend to have high expectations of competence and performance for themselves and others.`
        ],
        favJob: [`Engineer`, `Scientist`, `Programmer`, `Strategic Manager`, `Educator`],
        icon: INTJicon()
    },
    {
        mbti: `INTP`,
        name: `Thinker`,
        description: `Quiet and introverted, they are known for having a rich inner world.`,
        personality: [
            `People with this personality type are described as quiet, contained, and analytical. They are highly focused on how things work and on solving problems, and tend to be good at logic and math.`,
            `They are more interested in ideas and theoretical concepts than in social interaction. They are loyal and affectionate to their closest friends and family, but tend to be difficult to get to know.`
        ],
        favJob: [`Mathematics`, `Physics`, `Computer Science`, `Philosophy`, `Natural Sciences`, `Analyst`, `University Lecturer`],
        icon: INTPicon()
    },
    {
        mbti: `ESTP`,
        name: `Persuader`,
        description: `Out-going and dramatic, they enjoy spending time with others and focusing on the here-and-now`,
        personality: [
            `These individuals are action-oriented, taking pragmatic approaches to obtain results and solve problems quickly. They are often sophisticated, charming, and spontaneous.`,
            `They are outgoing and energetic, and enjoy spending time with a wide circle of friends and acquaintances. They focus on the here and now and prefer the practical over the abstract.`
        ],
        favJob: [`Business`, `Sales`, `Advertising`, `Entertainment`, `Stocks`],
        icon: ESTPicon()
    },
    {
        mbti: `ESTJ`,
        name: `Director`,
        description: `Assertive and rule-oriented, they have high principles and a tendency to take charge.`,
        personality: [
            `These people are responsible, practical, and organized. They are assertive and like to take charge, focused on getting results in the most efficient way possible. They have clear standards and place a high value on tradition and rules.`,
            `They can be seen as rigid, stubborn, or bossy as they are forceful in implementing their plans. However, they tend to excel at putting plans into action because they are hardworking, self-confident, and dependable.`
        ],
        favJob: [`Project Management`, `Executive Director`, `Banking`, `Finance`, `Military`],
        icon: ESTJicon()
    },
    {
        mbti: `ESFP`,
        name: `Performer`,
        description: `Outgoing and spontaneous, they enjoy taking center stage.`,
        personality: [
            `These people tend to be outgoing, friendly, and impulsive, seizing energy from other people. They love to be the center of attention and enjoy working with others in new environments.`,
            `They can be described as easy going, fun, and optimistic. They are spontaneous and focused on the present moment, and enjoy learning through hands-on experiences with other people.`
        ],
        favJob: [`Designer`, `Model`, `Actor`, `Singer`, `MC`, `Veterinarian`, `Preschool Teacher`, `Tourist guide`],
        icon: ESFPicon()
    },
    {
        mbti: `ESFJ`,
        name: `Caregiver`,
        description: `Soft-hearted and outgoing, they tend to believe the best about other people.`,
        personality: [
            `These individuals are warmhearted, conscientious, and harmonious. They wear their hearts on their sleeves and tend to see the best in others.`,
            `They enjoy helping others and providing the care that people need, but want to be appreciated and noticed for their contributions. They are careful observers of others and excel in situations involving personal contact and community.`
        ],
        favJob: [`Teacher`, `Doctor`, `Nurse`, `Customer Service Representative`, `Hotel Manager`],
        icon: ESFJicon()
    },
    {
        mbti: `ENFP`,
        name: `Campaigner`,
        description: `Charismatic and energetic, they enjoy situations where they can put their creativity to work.`,
        personality: [
            `These individuals are enthusiastic, creative, energetic, and highly imaginative. They have excellent people and communication skills and are good at giving others appreciation and support.`,
            `They do, however, seek approval from others. They value emotions and expression. They dislike routine and might struggle with disorganization and procrastination.`
        ],
        favJob: [`Journalist`, `Writer`, `Producer`, `Human Resources Manager`, `Consultant`, `Press`, `Communications`, `Performing Arts`, `Education`],
        icon: ENFPicon()
    },
    {
        mbti: `ENFJ`,
        name: `Giver`,
        description: `Loyal and sensitive, they are known for being understanding and generous.`,
        personality: [
            `These people are responsible, warm, and loyal. They are highly attuned to the emotions of others and capable of forging friendships with essentially anybody.`,
            `They have a desire to help others fulfill their potential, and they derive personal satisfaction from helping others. They tend to make good leaders as they are highly capable of facilitating agreement among diverse groups of people.`
        ],
        favJob: [`Careers related to education`, `Counseling`, `Health service`, `Society and arts`],
        icon: ENFJicon()
    },
    {
        mbti: `ENTP`,
        name: `Debater`,
        description: `Highly inventive, they love being surrounded by ideas and tend to start many projects (but may struggle to finish them).`,
        personality: [
            `People with this personality type can be described as innovative, outspoken, and lively. They are idea-oriented and are more focused on the future rather than on the present moment.`,
            `They enjoy interacting with a wide variety of people and love to engage with others in debates. They tend to be easy to get along with, but also can be argumentative at times. They are great conversationalists and make good entrepreneurs.`
        ],
        favJob: [`Lawyer`, `Software Engineer`, `Inventor`, `Scientist`, `Journalist`, `Politician`, `University Lecturer`],
        icon: ENTPicon()
    },
    {
        mbti: `ENTJ`,
        name: `Commander`,
        description: `Outspoken and confident, they are great at making plans and organizing projects.`,
        personality: [
            `These individuals like to take charge. They value organization and structure and appreciate long-term planning and goal setting.`,
            `They have strong people skills and enjoy interacting with others, but they are not necessarily attuned to their own emotions or the emotions of others.`,
            `They have strong leadership skills and tend to make good executives, captains, and administrators.`
        ],
        favJob: [`CEO`, `Lawyer`, `Politician`,],
        icon: ENTJicon()
    },
]

export const mbtiGroup = [
    { gr: 'Analyst', clr: clrStyle.main7, data: mbti.filter((item) => item.mbti.includes('N') && item.mbti.includes('T')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Intuitive (N) and Thinking (T) personality types, known for their rationality, impartiality, and intellectual excellence.` },
    { gr: 'Diplomats', clr: clrStyle.main3, data: mbti.filter((item) => item.mbti.includes('N') && item.mbti.includes('F')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Intuitive (N) and Feeling (F) personality types, known for their empathy, diplomatic skills, and passionate idealism.` },
    { gr: 'Sentinels', clr: clrStyle.main1, data: mbti.filter((item) => item.mbti.includes('S') && item.mbti.includes('J')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Observant (S) and Judging (J) personality types, known for their practicality and focus on order, security, and stability.` },
    { gr: 'Explorers', clr: clrStyle.main9, data: mbti.filter((item) => item.mbti.includes('S') && item.mbti.includes('P')).sort((a, b) => a.mbti.localeCompare(b.mbti)), desc: `Observant (S) and Prospecting (P) personality types, known for their spontaneity, ingenuity, and flexibility.` },
]

export const examGroupList: any = {
    A00: [`Math`, `Physics`, `Chemistry`,],
    A01: [`Math`, `Physics`, `English`,],
    A02: [`Math`, `Physics`, `Biology`,],
    A03: [`Math`, `Physics`, `History`,],
    A04: [`Math`, `Physics`, `Geography`,],
    A05: [`Math`, `Chemistry`, `History`,],
    A06: [`Math`, `Chemistry`, `Geography`,],
    A07: [`Math`, `History`, `Geography`,],
    A08: [`Math`, `History`, `Civic Education`,],
    A09: [`Math`, `Geography`, `Civic Education`,],
    A10: [`Math`, `Physics`, `Civic Education`,],
    A11: [`Math`, `Chemistry`, `Civic Education`,],
    A12: [`Math`, `Natural Science`, `Social Science`,],
    A14: [`Math`, `Natural Science`, `Geography`,],
    A15: [`Math`, `Natural Science`, `Civic Education`,],
    A16: [`Math`, `Natural Science`, `Literature`,],
    A17: [`Math`, `Physics`, `Social Science`,],
    A18: [`Math`, `Chemistry`, `Social Science`,],
    B00: [`Math`, `Chemistry`, `Biology`,],
    B01: [`Math`, `Biology`, `History`,],
    B02: [`Math`, `Biology`, `Geography`,],
    B03: [`Math`, `Biology`, `Literature`,],
    B04: [`Math`, `Biology`, `Civic Education`,],
    B05: [`Math`, `Biology`, `Social Science`,],
    B08: [`Math`, `Biology`, `English`,],
    C00: [`Literature`, `History`, `Geography`,],
    C01: [`Literature`, `Math`, `Physics`,],
    C02: [`Literature`, `Math`, `Chemistry`,],
    C03: [`Literature`, `Math`, `History`,],
    C04: [`Literature`, `Math`, `Geography`,],
    C05: [`Literature`, `Physics`, `Chemistry`,],
    C06: [`Literature`, `Physics`, `Biology`,],
    C07: [`Literature`, `Physics`, `History`,],
    C08: [`Literature`, `Chemistry`, `Biology`,],
    C09: [`Literature`, `Physics`, `Geography`,],
    C10: [`Literature`, `Chemistry`, `History`,],
    C12: [`Literature`, `Biology`, `History`,],
    C13: [`Literature`, `Biology`, `Geography`,],
    C14: [`Literature`, `Math`, `Civic Education`,],
    C15: [`Literature`, `Math`, `Social Science`,],
    C16: [`Literature`, `Physics`, `Civic Education`,],
    C17: [`Literature`, `Chemistry`, `Civic Education`,],
    C19: [`Literature`, `History`, `Civic Education`,],
    C20: [`Literature`, `Geography`, `Civic Education`,],
    D01: [`Literature`, `Math`, `English`,],
    D02: [`Literature`, `Math`, `Russian`,],
    D03: [`Literature`, `Math`, `French`,],
    D04: [`Literature`, `Math`, `Chinese`,],
    D05: [`Literature`, `Math`, `German`,],
    D06: [`Literature`, `Math`, `Japanese`,],
    D07: [`Math`, `Chemistry`, `English`,],
    D08: [`Math`, `Biology`, `English`,],
    D09: [`Math`, `History`, `English`,],
    D10: [`Math`, `Geography`, `English`,],
    D11: [`Literature`, `Physics`, `English`,],
    D12: [`Literature`, `Chemistry`, `English`,],
    D13: [`Literature`, `Biology`, `English`,],
    D14: [`Literature`, `History`, `English`,],
    D15: [`Literature`, `Geography`, `English`,],
    D16: [`Math`, `Geography`, `German`,],
    D17: [`Math`, `Geography`, `Russian`,],
    D18: [`Math`, `Geography`, `Japanese`,],
    D19: [`Math`, `Geography`, `French`,],
    D20: [`Math`, `Geography`, `Chinese`,],
    D21: [`Math`, `Chemistry`, `German`,],
    D22: [`Math`, `Chemistry`, `Russian`,],
    D23: [`Math`, `Chemistry`, `Japanese`,],
    D24: [`Math`, `Chemistry`, `French`,],
    D25: [`Math`, `Chemistry`, `Chinese`,],
    D26: [`Math`, `Physics`, `German`,],
    D27: [`Math`, `Physics`, `Russian`,],
    D28: [`Math`, `Physics`, `Japanese`,],
    D29: [`Math`, `Physics`, `French`,],
    D30: [`Math`, `Physics`, `Chinese`,],
    D31: [`Math`, `Biology`, `German`,],
    D32: [`Math`, `Biology`, `Russian`,],
    D33: [`Math`, `Biology`, `Japanese`,],
    D34: [`Math`, `Biology`, `French`,],
    D35: [`Math`, `Biology`, `Chinese`,],
    D41: [`Literature`, `Geography`, `German`,],
    D42: [`Literature`, `Geography`, `Russian`,],
    D43: [`Literature`, `Geography`, `Japanese`,],
    D44: [`Literature`, `Geography`, `French`,],
    D45: [`Literature`, `Geography`, `Chinese`,],
    D52: [`Literature`, `Physics`, `Russian`,],
    D54: [`Literature`, `Physics`, `French`,],
    D55: [`Literature`, `Physics`, `Chinese`,],
    D61: [`Literature`, `History`, `German`,],
    D62: [`Literature`, `History`, `Russian`,],
    D63: [`Literature`, `History`, `Japanese`,],
    D64: [`Literature`, `History`, `French`,],
    D65: [`Literature`, `History`, `Chinese`,],
    D66: [`Literature`, `Civic Education`, `English`,],
    D68: [`Literature`, `Civic Education`, `Russian`,],
    D69: [`Literature`, `Civic Education`, `Japanese`,],
    D70: [`Literature`, `Civic Education`, `French`,],
    D72: [`Literature`, `Natural Science`, `English`,],
    D73: [`Literature`, `Natural Science`, `German`,],
    D74: [`Literature`, `Natural Science`, `Russian`,],
    D75: [`Literature`, `Natural Science`, `Japanese`,],
    D76: [`Literature`, `Natural Science`, `French`,],
    D77: [`Literature`, `Natural Science`, `Chinese`,],
    D78: [`Literature`, `Social Science`, `English`,],
    D79: [`Literature`, `Social Science`, `German`,],
    D80: [`Literature`, `Social Science`, `Russian`,],
    D81: [`Literature`, `Social Science`, `Japanese`,],
    D82: [`Literature`, `Social Science`, `French`,],
    D83: [`Literature`, `Social Science`, `Chinese`,],
    D84: [`Math`, `Civic Education`, `English`,],
    D85: [`Math`, `Civic Education`, `German`,],
    D86: [`Math`, `Civic Education`, `Russian`,],
    D87: [`Math`, `Civic Education`, `French`,],
    D88: [`Math`, `Civic Education`, `Japanese`,],
    D90: [`Math`, `Natural Science`, `English`,],
    D91: [`Math`, `Natural Science`, `French`,],
    D92: [`Math`, `Natural Science`, `German`,],
    D93: [`Math`, `Natural Science`, `Russian`,],
    D94: [`Math`, `Natural Science`, `Japanese`,],
    D95: [`Math`, `Natural Science`, `Chinese`,],
    D96: [`Math`, `Social Science`, `English`,],
    D97: [`Math`, `Social Science`, `French`,],
    D98: [`Math`, `Social Science`, `German`,],
    D99: [`Math`, `Social Science`, `Russian`,],
    H00: [`Literature`, `Art Ability 1`, `Art Ability 2`,],
    H01: [`Math`, `Literature`, `Drawing`,],
    H02: [`Math`, `Drawing`, `Decorative Painting`,],
    H03: [`Math`, `Natural Science`, `Art Ability`,],
    H04: [`Math`, `English`, `Art Ability`,],
    H05: [`Literature`, `Social Science`, `Art Ability`,],
    H06: [`Literature`, `English`, `Art`,],
    H07: [`Math`, `Drawing`, `Decoration`,],
    H08: [`Literature`, `History`, `Art`,],
    K01: [`Math`, `English`, `Informatics`,],
    M00: [`Literature`, `Math`, `Elocution`, `Singing`,],
    M01: [`Literature`, `History`, `Ability`,],
    M02: [`Math`, `Ability 1`, `Ability 2`,],
    M03: [`Literature`, `Ability 1`, `Ability 2`,],
    M04: [`Math`, `Elocution`, `Singing and Dancing`,],
    M09: [`Math`, `Early Childhood Education Ability 1(storytelling, reading, expression)`, `Early Childhood Education Ability 2(Singing)`],
    M10: [`Math`, `English`, `Ability 1`],
    M11: [`Literature`, `Journalism Ability`, `English`],
    M13: [`Math`, `Biology`, `Ability`],
    M14: [`Literature`, `Journalism Ability`, `Math`],
    M15: [`Literature`, `Journalism Ability`, `English`],
    M16: [`Literature`, `Journalism Ability`, `Physics`],
    M17: [`Literature`, `Journalism Ability`, `History`],
    M18: [`Literature`, `Photojournalism Ability`, `Math`],
    M19: [`Literature`, `Photojournalism Ability`, `English`],
    M20: [`Literature`, `Photojournalism Ability`, `Physics`],
    M21: [`Literature`, `Photojournalism Ability`, `History`],
    M22: [`Literature`, `Television and Film Ability`, `Math`],
    M23: [`Literature`, `Television and Film Ability`, `English`],
    M24: [`Literature`, `Television and Film Ability`, `Physics`],
    M25: [`Literature`, `Television and Film Ability`, `History`],
    N00: [`Literature`, `Music Ability 1`, `Music Ability 2`],
    N01: [`Literature`, `Solfeggio`, `Performing Arts`],
    N02: [`Literature`, `Solfeggio`, `Singing or Playing an Instrument`],
    N03: [`Literature`, `Recording - Solfeggio`, `Specialization`],
    N04: [`Literature`, `Presentation Ability`, `Ability`],
    N05: [`Literature`, `Event Scripting`, `Ability`],
    N06: [`Literature`, `Recording, Solfeggio`, `Specialization`],
    N07: [`Literature`, `Recording, Solfeggio`, `Specialization`],
    N08: [`Literature`, `Harmony`, `Developing Themes and Popularizing Poetry`],
    N09: [`Literature`, `Harmony`, `Drawing Lots Conducting on the Spot`],
    R00: [`Literature`, `History`, `Journalism Ability`],
    R01: [`Literature`, `Geography`, `Performing Arts Ability`],
    R02: [`Literature`, `Math`, `Performing Arts Ability`],
    R03: [`Literature`, `English`, `Performing Arts Ability`],
    R04: [`Literature`, `Performing Arts Ability`, `Cultural - Social - Arts Knowledge Ability`],
    R05: [`Literature`, `English`, `Media Knowledge Ability`],
    S00: [`Literature`, `Stage and Cinema Ability 1`, `Stage and Cinema Ability 2`],
    S01: [`Math`, `Ability 1`, `Ability 2`],
    T00: [`Math`, `Biology`, `Sports Ability`],
    T01: [`Math`, `Literature`, `Sports Ability`],
    T02: [`Literature`, `Biology`, `Sports Ability`],
    T03: [`Literature`, `Geography`, `Sports Ability`],
    T04: [`Math`, `Physics`, `Sports Ability`],
    T05: [`Literature`, `Civic Education`, `Ability`],
    V00: [`Math`, `Physics`, `Drawing`],
    V01: [`Math`, `Literature`, `Drawing`],
    V02: [`Art`, `Math`, `English`],
    V03: [`Art`, `Math`, `Chemistry`],
    V05: [`Literature`, `Physics`, `Drawing`],
    V06: [`Math`, `Geography`, `Drawing`],
    V07: [`Math`, `German`, `Drawing`],
    V08: [`Math`, `Russian`, `Drawing`],
    V09: [`Math`, `Japanese`, `Drawing`],
    V10: [`Math`, `French`, `Drawing`],
    V11: [`Math`, `Chinese`, `Drawing`],
}

export const universityList: University[] = [
    {
        id: 1,
        name: `Hanoi Medical University`,
        shortName: `HMU`,
        description: [
            `Hanoi Medical University, which was established in 1902 under the name: Indochina Medico-Pharmaceutical University, was the first university of Indochina. Hanoi Medical University has been known as the leading education entity in the country in training and providing highly qualified human resources for the health sector in Vietnam.`,
            `Hanoi Medical University, one of the leading Universities in Vietnam with a history of more than one hundred Years, strives continuously to improve human health by reaching excellence in health worker training, science and technology, and providing senior experts for the health sector.`
        ],
        city: `Hanoi`,
        location: `No.1, Ton That Tung Street, Trung Tu Ward, Dong Da District, Hanoi`,
        img: { uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Hanoi_dhyk.jpg/450px-Hanoi_dhyk.jpg` },
        admission: 1720,
        lowestStandardScore: 19,
        highestStandardScore: 27.73,
        scoreRefYear: 2023,
        minFee: 21000000,
        maxFee: 55000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://ielts-fighter.com/tin-tuc/dai-hoc-y-ha-noi_mt1641797363.html`,
            `https://www.healthcarestudies.com/institutions/hanoi-medical-university`,
            `https://image.tienphong.vn/Uploaded/2024/wpqrnvqdn/2024_06_09/de-an-tuyen-sinh-truong-dh-y-ha-noi-7826.pdf`,
            `https://hmu.edu.vn/p/dce06f92-b824-4f38-97b5-cb72a9fdd796/co-hoi-nghe-nghiep`,
            `https://sdh.hmu.edu.vn/images/2024/TUY%E1%BB%82N%20SINH/%C4%90%E1%BB%80%20%C3%81N%20TSS%C4%90H/2024_QD_776%20Q%C4%90%20ban%20h%C3%A0nh%20%C4%91%E1%BB%81%20%C3%A1n%20tuy%E1%BB%83n%20sinh%202024.pdf`,
            `https://sdh.hmu.edu.vn/images/2024/TUY%E1%BB%82N%20SINH/%C4%90%E1%BB%80%20%C3%81N%20TSS%C4%90H/2024_QD_776%20Q%C4%90%20ban%20h%C3%A0nh%20%C4%91%E1%BB%81%20%C3%A1n%20tuy%E1%BB%83n%20sinh%202024.pdf`,
        ],
        major: [
            {
                majorName: `General Medicine`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.25,
                    highestStandardScore: 27.73,
                }
                ],
            },
            {
                majorName: `Traditional Medicine`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.77,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Dentistry`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 25.5,
                    highestStandardScore: 27.5,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Preventive Medicine`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 22.3,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Nutrition`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 23.19,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Optometry`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 25.4,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Medical Laboratory Technology`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 24.85,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Rehabilitation Techniques`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 22.7,
                }
                ],
            },
            {
                majorName: `Nursing (Advanced Program)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 21,
                    highestStandardScore: 24,
                }
                ],
                degreeType: `College Advanced Program`,
            },
            {
                majorName: `Public Health`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 20.7,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Psychology`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `C00`,
                    lowestStandardScore: 0,
                },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Birthing (Midwife)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 0,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Dental restoration techniques`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `General Medical (at Thanh Hoa Branch)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                }, {
                    name: `B08`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Nursing (at Thanh Hoa Branch)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Rehabilitation Techniques (at Thanh Hoa Branch)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },
            {
                majorName: `Medical Laboratory Technology (at Thanh Hoa Branch)`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                }
                ],
                afterGraduation: true,
            },

        ],
        mainMajor: [
            `General Medicine`,
            `Dentistry`,
            `Preventive Medicine`,
            `Traditional Medicine`,
            `Nursing`,
            `Bachelor of Medical Technology`,
            `Bachelor of Public Health`,
            `Bachelor of Nutrition`,
            `Bachelor of Optometry`,
        ],
    },
    {
        id: 2,
        name: `Vinh University`,
        shortName: null,
        description: [
            `Established in 1959, Vinh University was one of the first universities of the Vietnamese education system after the August Revolution. The school is situated on the hometown of Former President Ho Chi Minh - the land of talented people with thirsts for knowledge, bursts of nationalism and revolution.`
        ],
        city: `Vinh`,
        location: `182 Le Duan Street, Ben Thuy Ward, Vinh City, Nghe An Province`,
        img: { uri: `https://vinhuni.edu.vn/pages/assets/images/macdinh/anh01.png` },
        admission: 5050,
        lowestStandardScore: 17,
        highestStandardScore: 28.12,
        scoreRefYear: 2023,
        avgFee: 12900000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://www.facebook.com/daihocvinh182leduan/?locale=vi_VN`,
            `https://www.thongtintuyensinh.vn/Truong-Dai-hoc-Vinh_C93_D688.htm`
        ],
        mainMajor: [],
        major: [
            {
                majorName: `Social Studies Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 0,
                }, {
                    name: `C19`,
                    lowestStandardScore: 0,
                }, {
                    name: `C20`,
                    lowestStandardScore: 0,
                }, {
                    name: `D14`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,
            },
            {
                majorName: `Natural Sciences Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A02`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,

            },
            {
                majorName: `Educational Psychology`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A01`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 50,

            },
            {
                majorName: `Architecture`,
                icon: majorDefault,
                examGroup: [{
                    name: `V00`,
                    lowestStandardScore: 0,
                }, {
                    name: `V02`,
                    lowestStandardScore: 0,
                }, {
                    name: `H01`,
                    lowestStandardScore: 0,
                }, {
                    name: `H02`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 60,

            },
            {
                majorName: `Digital Economics`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `A01`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                },
                ],
                addmission: 80,
            },
            {
                majorName: `International Relations`,
                icon: majorDefault,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `D14`,
                    lowestStandardScore: 0,
                }, {
                    name: `D15`,
                    lowestStandardScore: 0,
                }, {
                    name: `D66`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 66,
            },
            {
                majorName: `Crop Sciences`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B08`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 80,
            },
            {
                majorName: `Veterinary Science`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 0,
                }, {
                    name: `B00`,
                    lowestStandardScore: 0,
                }, {
                    name: `D01`,
                    lowestStandardScore: 0,
                }, {
                    name: `B08`,
                    lowestStandardScore: 0,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Early Childhood Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `M00`,
                    lowestStandardScore: 21,
                }, {
                    name: `M01`,
                    lowestStandardScore: 21,
                }, {
                    name: `M10`,
                    lowestStandardScore: 21,
                }, {
                    name: `M13`,
                    lowestStandardScore: 21,
                }
                ],
                addmission: 170,
            },
            {
                majorName: `Primary Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `A00`,
                    lowestStandardScore: 25.65,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.65,
                }
                ],
                addmission: 200,
            },
            {
                majorName: `Education Management`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `A00`,
                    lowestStandardScore: 23.25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 23.25,
                }
                ],
                addmission: 43,
            },
            {
                majorName: `Math Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25,
                }, {
                    name: `B00`,
                    lowestStandardScore: 25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25,
                },
                ],
                addmission: 100,
            },
            {
                majorName: `Math Education (advanced)`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `B00`,
                    lowestStandardScore: 25.5,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.5,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Informational Technology Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `A01`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `D01`,
                    lowestStandardScore: 22.25,
                }, {
                    name: `D07`,
                    lowestStandardScore: 22.25,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Physics Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `A01`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `B00`,
                    lowestStandardScore: 24.4,
                }, {
                    name: `D07`,
                    lowestStandardScore: 24.4,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Chemistry Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `B00`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `D07`,
                    lowestStandardScore: 24.8,
                }, {
                    name: `C02`,
                    lowestStandardScore: 24.8,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Biology Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `B03`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `B08`,
                    lowestStandardScore: 23.55,
                }, {
                    name: `A02`,
                    lowestStandardScore: 23.55,
                }
                ],
                addmission: 23,
            },
            {
                majorName: `Vietnamese Language Arts Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `D01`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `D15`,
                    lowestStandardScore: 26.7,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.7,
                }
                ],
                addmission: 120,
            },
            {
                majorName: `History Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `C19`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `C20`,
                    lowestStandardScore: 28.12,
                }, {
                    name: `D14`,
                    lowestStandardScore: 28.12,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Geography Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `C04`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.55,
                }, {
                    name: `D15`,
                    lowestStandardScore: 26.55,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Political Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `D66`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `C19`,
                    lowestStandardScore: 26.5,
                }, {
                    name: `C20`,
                    lowestStandardScore: 26.5,
                }
                ],
                addmission: 18,
            },
            {
                majorName: `Physical Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `T00`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T01`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T02`,
                    lowestStandardScore: 24.75,
                }, {
                    name: `T05`,
                    lowestStandardScore: 24.75,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `Defense and Security Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `D01`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `A00`,
                    lowestStandardScore: 25.7,
                }, {
                    name: `C19`,
                    lowestStandardScore: 25.7,
                }
                ],
                addmission: 20,
            },
            {
                majorName: `English Education (advanced)`,
                icon: majorDefault,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 27,
                }, {
                    name: `D14`,
                    lowestStandardScore: 27,
                }, {
                    name: `D15`,
                    lowestStandardScore: 27,
                }, {
                    name: `A01`,
                    lowestStandardScore: 27,
                }
                ],
                addmission: 30,
            },
            {
                majorName: `English Education`,
                icon: majorDefault,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `D14`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `D15`,
                    lowestStandardScore: 25.3,
                }, {
                    name: `A01`,
                    lowestStandardScore: 25.3,
                }
                ],
                addmission: 140,
            },
            {
                majorName: `English as a Language`,
                icon: majorDefault,
                examGroup: [{
                    name: `D01`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `D14`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `D15`,
                    lowestStandardScore: 23.75,
                }, {
                    name: `A01`,
                    lowestStandardScore: 23.75,
                }
                ],
                addmission: 250,
            },
            {
                majorName: `Accounting`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 500,
            },
            {
                majorName: `Business Administration`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 270,
            },
            {
                majorName: `Business Administration (advanced)`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 20,
                }, {
                    name: `A01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D07`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Finance and Banking`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D07`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 155,
            },
            {
                majorName: `Economics`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 150,
            },
            {
                majorName: `Law`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 120,
            },
            {
                majorName: `Economic Law`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 115,
            },
            {
                majorName: `Government Management`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Cultural Management`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Political Science`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `C19`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Public Relations`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Vietnamese Studies`,
                icon: majorDefault,
                examGroup: [{
                    name: `C00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Biotechnology`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }, {
                    name: `A02`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 50,
            },
            {
                majorName: `Food and Technology`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `A01`,
                    lowestStandardScore: 18,
                }, {
                    name: `D07`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 70,
            },
            {
                majorName: `Nursing`,
                icon: majorDefault,
                examGroup: [{
                    name: `B00`,
                    lowestStandardScore: 20,
                }, {
                    name: `C08`,
                    lowestStandardScore: 20,
                }, {
                    name: `D08`,
                    lowestStandardScore: 20,
                }, {
                    name: `D13`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 85,
            },
            {
                majorName: `Construction Economics`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Construction Technology`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 110,
            },
            {
                majorName: `Transportation Engineering`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 65,
            },
            {
                majorName: `Electrical engineering technology`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 110,
            },
            {
                majorName: `Thermal Engineering`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 26,
                }, {
                    name: `B00`,
                    lowestStandardScore: 26,
                }, {
                    name: `D01`,
                    lowestStandardScore: 26,
                }, {
                    name: `A01`,
                    lowestStandardScore: 26,
                }
                ],
                addmission: 45,
            },
            {
                majorName: `Automobile Engineering`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 155,
            },
            {
                majorName: `Electronics and Telecommunication`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `A01`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Control and Automation Engineering`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 19,
                }, {
                    name: `B00`,
                    lowestStandardScore: 19,
                }, {
                    name: `D01`,
                    lowestStandardScore: 19,
                }, {
                    name: `A01`,
                    lowestStandardScore: 19,
                }
                ],
                addmission: 105,
            },
            {
                majorName: `Information Technology`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 20,
                }, {
                    name: `A01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D01`,
                    lowestStandardScore: 20,
                }, {
                    name: `D07`,
                    lowestStandardScore: 20,
                }
                ],
                addmission: 270,
            },
            {
                majorName: `Information Technology (advanced)`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 21,
                }, {
                    name: `A01`,
                    lowestStandardScore: 21,
                }, {
                    name: `D01`,
                    lowestStandardScore: 21,
                }, {
                    name: `D07`,
                    lowestStandardScore: 21,
                }
                ],
                addmission: 35,
            },
            {
                majorName: `Computer Science`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Farming`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Agriculture`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 45,
            },
            {
                majorName: `Aquaculture`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 18,
                }, {
                    name: `B00`,
                    lowestStandardScore: 18,
                }, {
                    name: `D01`,
                    lowestStandardScore: 18,
                }, {
                    name: `B08`,
                    lowestStandardScore: 18,
                }
                ],
                addmission: 55,
            },
            {
                majorName: `Land Management`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Natural Resource Management`,
                icon: majorDefault,
                examGroup: [{
                    name: `A00`,
                    lowestStandardScore: 17,
                }, {
                    name: `B00`,
                    lowestStandardScore: 17,
                }, {
                    name: `D01`,
                    lowestStandardScore: 17,
                }, {
                    name: `B08`,
                    lowestStandardScore: 17,
                }
                ],
                addmission: 40,
            },
            {
                majorName: `Doctorate - Calculus`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Algebra and Number Theory`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Topology`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Mathematics Education`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - The Theory of Probability and Mathematical Statistics`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Optics`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Physics Education`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Organic Chemistry`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Chemistry Education`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Botany`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Vietnamese as a Language`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - Vietnamese Literature`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: null,
            },
            {
                majorName: `Doctorate - World History`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Vietnamese History`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 2,
            },
            {
                majorName: `Doctorate - Education Management`,
                icon: majorDefault,
                degreeType: `Doctor`,
                examGroup: null,
                addmission: 6,
            },
            {
                majorName: `Master - Calculus`,
                icon: majorDefault,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Algebra and Number Theory`,
                icon: majorDefault,
                addmission: 17,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese`,
                icon: majorDefault,
                addmission: 19,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Mathematics Education`,
                icon: majorDefault,
                addmission: 5,
                degreeType: `Master`,
            },
            {
                majorName: `Master - The Theory of Probability and Mathematical Statistics`,
                icon: majorDefault,
                addmission: 16,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Optics`,
                icon: majorDefault,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Physics Education`,
                icon: majorDefault,
                addmission: 9,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Organic Chemistry`,
                icon: majorDefault,
                addmission: 29,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Inorganic Chemistry`,
                icon: majorDefault,
                addmission: 19,
                degreeType: `Master`,
            },
            {
                majorName: `Analytical Chemistry`,
                icon: majorDefault,
                addmission: 11,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Chemistry Education`,
                icon: majorDefault,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `Zoology`,
                icon: majorDefault,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Botany`,
                icon: majorDefault,
                addmission: 20,
                degreeType: `Master`,
            },
            {
                majorName: `Experimental Biology`,
                icon: majorDefault,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Biology Education`,
                icon: majorDefault,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `Information Technology`,
                icon: majorDefault,
                addmission: 8,
                degreeType: `Master`,
            },
            {
                majorName: `Poltical Economy`,
                icon: majorDefault,
                addmission: 30,
                degreeType: `Master`,
            },
            {
                majorName: `Aquaculture`,
                icon: majorDefault,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Crop Sciences`,
                icon: majorDefault,
                addmission: 55,
                degreeType: `Master`,
            },
            {
                majorName: `Finance Management`,
                icon: majorDefault,
                addmission: 32,
                degreeType: `Master`,
            },
            {
                majorName: `Literature Education`,
                icon: majorDefault,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese Language of Arts`,
                icon: majorDefault,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Construction Engineering`,
                icon: majorDefault,
                addmission: 57,
                degreeType: `Master`,
            },
            {
                majorName: `World History`,
                icon: majorDefault,
                addmission: 18,
                degreeType: `Master`,
            },
            {
                majorName: `Vietnamese History`,
                icon: majorDefault,
                addmission: 20,
                degreeType: `Master`,
            },
            {
                majorName: `Business Management`,
                icon: majorDefault,
                addmission: 5,
                degreeType: `Master`,
            },
            {
                majorName: `Geography`,
                icon: majorDefault,
                addmission: 15,
                degreeType: `Master`,
            },
            {
                majorName: `Political Science`,
                icon: majorDefault,
                addmission: 24,
                degreeType: `Master`,
            },
            {
                majorName: `Politics Education`,
                icon: majorDefault,
                addmission: 25,
                degreeType: `Master`,
            },
            {
                majorName: `English Education`,
                icon: majorDefault,
                addmission: null,
                degreeType: `Master`,
            },
            {
                majorName: `Government and Law History Education`,
                icon: majorDefault,
                addmission: 93,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Primary Education`,
                icon: majorDefault,
                addmission: 34,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Early Childhood Education`,
                icon: majorDefault,
                addmission: 18,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Education Management`,
                icon: majorDefault,
                addmission: 41,
                degreeType: `Master`,
            },
            {
                majorName: `Master - Physical Education`,
                icon: majorDefault,
                addmission: 9,
                degreeType: `Master`,

            },
        ],
    },
    {
        id: 3,
        name: `Hanoi Law University`,
        shortName: `HLU`,
        description: [
            `Hanoi Law University, established in 1979, is a prestigious institution located in Hanoi, Vietnam. The university is dedicated to providing high-quality legal education and producing competent legal professionals. It is a government-owned institution and is recognized for its comprehensive curriculum that focuses on both theoretical and practical aspects of law.`
        ],
        city: `Hanoi`,
        location: `No. 87, Nguyen Chi Thanh Street, Lang Thuong Ward, Dong Da District, Ha Noi`,
        img: { uri: `https://xdcs.cdnchinhphu.vn/446259493575335936/2024/3/19/hlu-1710805405392702001628.jpg` },
        admission: 2500,
        lowestStandardScore: 24,
        highestStandardScore: 27.36,
        scoreRefYear: 2023,
        minFee: 25000000,
        maxFee: 50000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://hlu.edu.vn/News/Details/26992?zoneid=zone2`,
            `https://laodong.vn/tuyen-sinh/diem-san-xet-tuyen-som-truong-dai-hoc-luat-dai-hoc-quoc-gia-ha-noi-2024-1339242.ldo#:~:text=N%C4%83m%202024%2C%20Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Lu%E1%BA%ADt%20%2D%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Qu%E1%BB%91c%20gia,Lu%E1%BA%ADt%20Th%C6%B0%C6%A1ng%20m%E1%BA%A1i%20Qu%E1%BB%91c%20t%E1%BA%BF.`,
            `https://hlu.edu.vn/News/Details/26992?zoneid=zone2`,
            `https://tuyensinh.hlu.edu.vn/Images/Post/files/Tuyensinh/SDH/CH/TBTSCH_Dot1_2023%20(2).pdf`
        ],
        mainMajor: [
            `Law`,
            `Economic Law`,
            `English language major`,
            `Commercial Law`
        ],
        major: [
            {
                majorName: `Law`,
                icon: majorDefault,
                examGroup: [
                    {
                        name: `A00`,
                        lowestStandardScore: 24
                    },
                    {
                        name: `A01`,
                        lowestStandardScore: 24
                    },
                    {
                        name: `C00`,
                        lowestStandardScore: 26.5
                    },
                    {
                        name: `D01`,
                        lowestStandardScore: 25.75
                    },
                    {
                        name: `D06`,
                        lowestStandardScore: 25.75
                    },
                ],
                afterGraduation: true
            },
            {
                majorName: `Commercial Law`,
                icon: majorDefault,
                examGroup: [
                    {
                        name: `A01`,
                        lowestStandardScore: 24.8
                    },
                    {
                        name: `D01`,
                        lowestStandardScore: 25.75
                    },
                ]
            },
            {
                majorName: `Economic Law`,
                icon: majorDefault,
                examGroup: [
                    {
                        name: `A00`,
                        lowestStandardScore: 25.5
                    },
                    {
                        name: `A01`,
                        lowestStandardScore: 25.5
                    },
                    {
                        name: `C00`,
                        lowestStandardScore: 27.36
                    },
                    {
                        name: `D01`,
                        lowestStandardScore: 26.5
                    },
                    {
                        name: `D06`,
                        lowestStandardScore: 26.5
                    },
                ]
            },
            {
                majorName: `English Language`,
                icon: majorDefault,
                examGroup: [
                    {
                        name: `A01`,
                        lowestStandardScore: 24
                    },
                    {
                        name: `D01`,
                        lowestStandardScore: 24.5
                    },
                ]
            },
            {
                majorName: `Constitutional law and administrative law in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `Civil law and civil procedure in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `Criminal law and criminal procedure in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `Criminology and crime prevention in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `Theory and history of state and law in the research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `Economic law in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
            {
                majorName: `International law in the applied research direction`,
                icon: majorDefault,
                afterGraduation: true
            },
        ],
    },
    {
        id: 4,
        name: `Hanoi Open University`,
        shortName: `HOU`,
        description: [
            `On November 3, 1993, the Prime Minister signed Decision No. 535/TTg to establish Hanoi Open University on the basis of Open Training Institute 1 (a unit of the Ministry of Education and Training), with The function and mission is to be a public university that provides undergraduate training and research in various types of open training, distance learning, and on-the-job training to meet the diverse needs of society, contributing to increasing the potential of society. scientific and technical staff for the country. Hanoi Open University has been renamed Hanoi Open University according to Decision No. 960/QD-TTg dated August 6, 2018 of the Prime Minister on issuance of a list of public service units under the Ministry of Education and Training.`
        ],
        city: `Hanoi`,
        location: `B101, Nguyen Hien Ward, Bach Khoa, Hai Ba Trung, Hanoi`,
        img: { uri: `https://xdcs.cdnchinhphu.vn/446259493575335936/2023/8/22/dai-hoc-mo-ha-noi-1-1690030006276458638690-0-0-600-960-crop-1690030012831554965422-16927060768562092355521.jpg` },
        admission: 3500,
        lowestStandardScore: 16.5,
        highestStandardScore: 31.77,
        scoreRefYear: 2023,
        avgFee: 20000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://vuihoc.vn/tin/thpt-diem-chuan-truong-dai-hoc-mo-ha-noi-2084.html`,
            `https://mytour.vn/en/blog/bai-viet/admission-quotas-for-hanoi-open-university-2022.html`,
            `https://muaban.net/blog/hoc-phi-dai-hoc-mo-ha-noi-355730/`,
        ],
        mainMajor: [
            `E-commerce`,
            `Chinese Language`,
            `English Language`,
            `Hotel Management`,
            `Law`,
        ],
        major: [
            {
                majorName: `Industrial Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `A1`, lowestStandardScore: 17.5 }
                ]
            },
            {
                majorName: `Accounting`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 23.8 },
                    { name: `A01`, lowestStandardScore: 23.8 },
                    { name: `D01`, lowestStandardScore: 23.8 },
                ]
            },
            {
                majorName: `Finance-Banking`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 23.6 },
                    { name: `A01`, lowestStandardScore: 23.6 },
                    { name: `D01`, lowestStandardScore: 23.6 }
                ]
            },
            {
                majorName: `Business Administration`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 23.9 },
                    { name: `A01`, lowestStandardScore: 23.9 },
                    { name: `D01`, lowestStandardScore: 23.9 }
                ]
            },
            {
                majorName: `E-commerce`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 25.25 },
                    { name: `A01`, lowestStandardScore: 25.25 },
                    { name: `D01`, lowestStandardScore: 25.25 }
                ]
            },
            {
                majorName: `Law`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 26.25 }, { name: `A01`, lowestStandardScore: 26.25 }, { name: `D01`, lowestStandardScore: 26.25 }
                ]
            },
            {
                majorName: `Finance Law`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 26.75 }, { name: `A01`, lowestStandardScore: 26.75 }, { name: `D01`, lowestStandardScore: 26.75 }
                ]
            },
            {
                majorName: `Biotechnology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A01`, lowestStandardScore: 16.5 }
                ]
            },
            {
                majorName: `Food technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A01`, lowestStandardScore: 16.6 }
                ]
            },
            {
                majorName: `Information Technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 24.55 }, { name: `A01`, lowestStandardScore: 24.55 }, { name: `D01`, lowestStandardScore: 24.55 }
                ]
            },
            {
                majorName: `Electronics and Telecommunication`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.5 }, { name: `A01`, lowestStandardScore: 22.5 }, { name: `D01`, lowestStandardScore: 22.5 }, { name: `C01`, lowestStandardScore: 22.5 }
                ]
            },
            {
                majorName: `Control Technology and Automatic Engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.65 }, { name: `A01`, lowestStandardScore: 22.65 }, { name: `D01`, lowestStandardScore: 22.65 }, { name: `C01`, lowestStandardScore: 22.65 }
                ]
            },
            {
                majorName: `Architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `A01`, lowestStandardScore: 24 }
                ]
            },
            {
                majorName: `Tourism and Hospitality Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 30.35 }
                ]
            },
            {
                majorName: `Hotel Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 27.05 }
                ]
            },
            {
                majorName: `English Language`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 31 }
                ]
            },
            {
                majorName: `Chinese Language`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 31.77 }, { name: `D04`, lowestStandardScore: 31.77 }
                ]
            },
        ]
    },
    {
        id: 5,
        name: `Vietnam National Forestry University`,
        shortName: `VNFU`,
        description: [
            `Vietnam National University of Forestry is a multi-disciplinary and multi-field public university offering 32 undergraduate majors, 12 master's majors, and 6 doctoral majors. The university provides education in various fields such as Economics, Finance, Logistics, Landscape and Interior Design, Automotive Industry, Information Technology, Forest Product Processing, Forest Resource Management and Environment, and Rural Development. It has two campuses located in Dong Nai and Gia Lai, and one high school in Hanoi and Dong Nai.`
        ],
        city: `Hanoi`,
        location: `QL21, TT. Xuân Mai, Chương Mỹ, Hà Nội`,
        img: { uri: `https://env.vnuf.edu.vn/documents/436517/5682738/23.jpg?t=1513669084767` },
        admission: 2360,
        lowestStandardScore: 15,
        scoreRefYear: 2023,
        minFee: 10000000,
        maxFee: 22000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://xaydungchinhsach.chinhphu.vn/diem-chuan-truong-dai-hoc-lam-nghiep-nam-2023-119230823174659534.htm`,
            `https://vnuf.edu.vn/dao-tao/dao-tao-thac-si`,
            `https://tapchicongthuong.vn/truong-dai-hoc-lam-nghiep--du-kien-tuyen-sinh-2-360-chi-tieu-nam-2023-107251.htm#:~:text=Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20L%C3%A2m%20nghi%E1%BB%87p,2.360%20ch%E1%BB%89%20ti%C3%AAu%20n%C4%83m%202023`,
        ],
        mainMajor: [
            `Breeding`,
            `Veterinary`,
            `Crop Science`,
            `Plant Protection`,
        ],
        major: [
            {
                majorName: `Natural Resources Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `B08`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                    { name: `D07`, lowestStandardScore: 15 },
                    { name: `D10`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Silviculture`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Forest Resources Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Management of Resources and Environment`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Ecotourism`,
                icon: majorDefault,
                examGroup: [
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `C00`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Interior Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                    { name: `H00`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Forest Products Technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                    { name: `D07`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Information System`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A01`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Accounting`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Business Administration`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Economics`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Finance-banking`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Logistics and Supply Chain Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Real estate`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Land Administrative Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Community service`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `C00`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Tourism and Hospitality Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `C00`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Landscape architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                    { name: `C15`, lowestStandardScore: 15 },
                    { name: `V01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `construction engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A01`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Crop Science`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Automotive Engineering Technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A01`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Mechatronics`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A01`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
            },
            {
                majorName: `Mechanical engineer`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A01`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `D01`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Biotechnology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `B08`, lowestStandardScore: 15 },
                ],
                afterGraduation: true,
            },
            {
                majorName: `Veterinary Medicine`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 15 },
                    { name: `A16`, lowestStandardScore: 15 },
                    { name: `B00`, lowestStandardScore: 15 },
                    { name: `B08`, lowestStandardScore: 15 },
                ],
            },
        ]
    },
    {
        id: 6,
        name: `University of Industrial Arts`,
        shortName: `UAD`,
        description: [
            `The Industrial Fine Arts University was established in 1949, originally known as the National School of Fine Arts. In 1984, the school was renamed the Industrial Fine Arts University. Currently, the university offers three main training systems: regular undergraduate programs, bridging undergraduate programs, and postgraduate programs.`
        ],
        city: `Hanoi`,
        location: `360 Đ. La Thành, Chợ Dừa, Đống Đa, Hà Nội`,
        img: { uri: `https://weart.vn/wp-content/uploads/2021/10/unnamed-1-1.jpg` },
        admission: 2000,
        lowestStandardScore: 21.15,
        highestStandardScore: 23.75,
        scoreRefYear: 2023,
        avgFee: 10000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://vov.vn/xa-hoi/dai-hoc-my-thuat-cong-nghiep-cong-bo-diem-chuan-post1041184.vov`,
            `https://jobtest.vn/hrblog/dai-hoc-my-thuat-cong-nghep-hoc-phi#:~:text=IV.-,H%E1%BB%8Dc%20ph%C3%AD%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20M%E1%BB%B9%20thu%E1%BA%ADt%20C%C3%B4ng%20nghi%E1%BB%87p%20(UIFA)%20n%C4%83m,d%C3%A0nh%20cho%20t%E1%BB%ABng%20sinh%20vi%C3%AAn.`,
            `https://giaoduc.net.vn/da-so-gv-trinh-do-cao-cua-truong-dh-my-thuat-cong-nghiep-deu-la-thinh-giang-post237881.gd#:~:text=Theo%20B%C3%A1o%20c%C3%A1o%203%20c%C3%B4ng%20khai%20n%C4%83m%20h%E1%BB%8Dc%202021%2D2022,V%20l%C3%A0%20523%20sinh%20vi%C3%AAn.`,
        ],
        mainMajor: [
            `Art`,
            `Sculpture`,
            `Pottery`,
        ],
        major: [
            {
                majorName: `Monumental`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 22.3 },
                    { name: `H07`, lowestStandardScore: 22.3 },
                ]
            },
            {
                majorName: `Lacquer`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 22.3 },
                    { name: `H07`, lowestStandardScore: 22.3 },
                ]
            },
            {
                majorName: `Sculpture`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.15 },
                    { name: `H07`, lowestStandardScore: 21.15 },
                ]
            },
            {
                majorName: `Ceramic`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.4 },
                    { name: `H07`, lowestStandardScore: 21.4 },
                ]
            },
            {
                majorName: `Industrial Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Decorative Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Metal Decoration Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Glass Decoration Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Weaving Decoration Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Toy Design & Sport Development`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Art Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 23.75 },
                    { name: `H07`, lowestStandardScore: 23.75 },
                ]
            },
            {
                majorName: `Fashion Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 21.65 },
                    { name: `H07`, lowestStandardScore: 21.65 },
                ]
            },
            {
                majorName: `Interior Design`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 22.25 },
                    { name: `H07`, lowestStandardScore: 22.25 },
                ]
            },
        ]
    },
    {
        id: 7,
        name: `Hanoi University of Civil Engineering`,
        shortName: `HUCE`,
        description: [
            `The Hanoi University of Civil Engineering (HUCE; Vietnamese: Trường Đại học Xây dựng Hà Nội), formerly known as the National University of Civil Engineering (NUCE), is a public higher education institution in Vietnam. The university is one of the leading universities and among the top seven engineering universities in Vietnam. HUCE is one of four universities participating in educating high-qualified engineers of Vietnamese–French courses. The university also has French-language civil engineering courses supported by AUPELF – a global network of French-speaking higher-education and research institutions.`
        ],
        city: `Hanoi`,
        location: `55 Giai Phong, Dong Tam, Hai Ba Trung, Hanoi`,
        img: { uri: `https://en.huce.edu.vn/images57/Files/%E1%BA%A2nh%20Chung/254687890_4570777726339377_8724442524879063050_n.jpg` },
        admission: 3000,
        lowestStandardScore: 17,
        highestStandardScore: 25,
        scoreRefYear: 2023,
        minFee: 15000000,
        maxFee: 22000000,
        unitFee: `VND`,
        yearOrSemForFee: `Year`,
        refURL: [
            `https://en.wikipedia.org/wiki/Hanoi_University_of_Civil_Engineering`,
            `https://xaydungchinhsach.chinhphu.vn/diem-chuan-truong-dai-hoc-xay-dung-ha-noi-2923-119230823073118738.htm`,
            `https://tuyensinh.huce.edu.vn/thong-bao-tuyen-sinh-dao-tao-trinh-do-thac-si-dot-thang-12-2023-thong-1--1`,
            `https://tuyensinh.huce.edu.vn/thong-bao-tuyen-sinh-dao-tao-trinh-do-tien-si-dot-thang-6-nam-2023-thong-bao-so-1-`,
            `https://huce.edu.vn/khoa-kinh-te-quan-ly-xay-dung#:~:text=S%E1%BB%91%20l%C6%B0%E1%BB%A3ng%20sinh%20vi%C3%AAn%20tuy%E1%BB%83n,sinh%20vi%C3%AAn%20c%E1%BB%A7a%20to%C3%A0n%20tr%C6%B0%E1%BB%9Dng.`,
        ],
        mainMajor: [
            `Architecture`,
            `Interior Architecture`,
            `Environmental Architecture`,
        ],
        major: [
            {
                majorName: `Architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `V00`, lowestStandardScore: 21.05 },
                    { name: `V02`, lowestStandardScore: 21.05 },
                    { name: `V10`, lowestStandardScore: 21.05 },
                ]
            },
            {
                majorName: `Technology Architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `V00`, lowestStandardScore: 20.64 },
                    { name: `V02`, lowestStandardScore: 20.64 },
                    { name: `V06`, lowestStandardScore: 20.64 },
                ]
            },
            {
                majorName: `Interior Architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `V00`, lowestStandardScore: 21.53 },
                    { name: `V02`, lowestStandardScore: 21.53 },
                    { name: `V06`, lowestStandardScore: 21.53 },
                ]
            },
            {
                majorName: `Landscape Architecture`,
                icon: majorDefault,
                examGroup: [
                    { name: `V00`, lowestStandardScore: 19.23 },
                    { name: `V02`, lowestStandardScore: 19.23 },
                    { name: `V06`, lowestStandardScore: 19.23 },
                ]
            },
            {
                majorName: `Regional and Urban Planning`,
                icon: majorDefault,
                examGroup: [
                    { name: `V00`, lowestStandardScore: 17 },
                    { name: `V01`, lowestStandardScore: 17 },
                    { name: `V02`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Construction Engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `D01`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Civil and industrial of Construction Engineering.`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 20 },
                    { name: `A01`, lowestStandardScore: 20 },
                    { name: `D07`, lowestStandardScore: 20 },
                    { name: `D24`, lowestStandardScore: 20 },
                    { name: `D29`, lowestStandardScore: 20 }
                    ,]
            },
            {
                majorName: `Technical System`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 20 },
                    { name: `A01`, lowestStandardScore: 20 },
                    { name: `D07`, lowestStandardScore: 20 },
                ]
            },
            {
                majorName: `Construction informatics`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 21.2 },
                    { name: `A01`, lowestStandardScore: 21.2 },
                    { name: `D01`, lowestStandardScore: 21.2 },
                    { name: `D07`, lowestStandardScore: 21.2 },
                ]
            },
            {
                majorName: `Transportation Construction Engineerin`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 18 },
                    { name: `A01`, lowestStandardScore: 18 },
                    { name: `D01`, lowestStandardScore: 18 },
                    { name: `D07`, lowestStandardScore: 18 },
                ]
            },
            {
                majorName: `water supply and drainage engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `B00`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Environmental Engineer`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `B00`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Material Engineer`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `B00`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Construction materials engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `B00`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Information Technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 24.25 },
                    { name: `A01`, lowestStandardScore: 24.25 },
                    { name: `B00`, lowestStandardScore: 24.25 },
                    { name: `D07`, lowestStandardScore: 24.25 },
                ]
            },
            {
                majorName: `Computer Science`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 23.91 },
                    { name: `A01`, lowestStandardScore: 23.91 },
                    { name: `D01`, lowestStandardScore: 23.91 },
                    { name: `D07`, lowestStandardScore: 23.91 },
                ]
            },
            {
                majorName: `Mechanical engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.65 },
                    { name: `A01`, lowestStandardScore: 22.65 },
                    { name: `D07`, lowestStandardScore: 22.65 },
                ]
            },
            {
                majorName: `Tractor engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Mechatronics`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.4 },
                    { name: `A01`, lowestStandardScore: 22.4 },
                    { name: `D07`, lowestStandardScore: 22.4 },
                ]
            },
            {
                majorName: `Automobile engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 23.37 },
                    { name: `A01`, lowestStandardScore: 23.37 },
                    { name: `D07`, lowestStandardScore: 23.37 },
                ]
            },
            {
                majorName: `Electric engineering`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 19.2 },
                    { name: `A01`, lowestStandardScore: 19.2 },
                    { name: `D07`, lowestStandardScore: 19.2 }
                ]
            },
            {
                majorName: `Construction Economics`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.4 },
                    { name: `A01`, lowestStandardScore: 22.4 },
                    { name: `D01`, lowestStandardScore: 22.4 },
                    { name: `D07`, lowestStandardScore: 22.4 },
                ]
            },
            {
                majorName: `Economics and Urban Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 21.25 },
                    { name: `A01`, lowestStandardScore: 21.25 },
                    { name: `D01`, lowestStandardScore: 21.25 },
                    { name: `D07`, lowestStandardScore: 21.25 },
                ]
            },
            {
                majorName: `Economics and Property Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 21.5 },
                    { name: `A01`, lowestStandardScore: 21.5 },
                    { name: `D01`, lowestStandardScore: 21.5 },
                    { name: `D07`, lowestStandardScore: 21.5 },
                ]
            },
            {
                majorName: `Land Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 19.4 },
                    { name: `A01`, lowestStandardScore: 19.4 },
                    { name: `D01`, lowestStandardScore: 19.4 },
                    { name: `D07`, lowestStandardScore: 19.4 },
                ]
            },
            {
                majorName: `Logistics and Supply chain Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 24.49 },
                    { name: `A01`, lowestStandardScore: 24.49 },
                    { name: `D01`, lowestStandardScore: 24.49 },
                    { name: `D07`, lowestStandardScore: 24.49 },
                ]
            },
            {
                majorName: `Construction Engineering (with Mississipi University)`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 17 },
                    { name: `A01`, lowestStandardScore: 17 },
                    { name: `D01`, lowestStandardScore: 17 },
                    { name: `D07`, lowestStandardScore: 17 },
                ]
            },
            {
                majorName: `Computer Science (with Mississipi University)`,
                icon: majorDefault,
                examGroup: [
                    { name: `A00`, lowestStandardScore: 22.9 },
                    { name: `A01`, lowestStandardScore: 22.9 },
                    { name: `D01`, lowestStandardScore: 22.9 },
                    { name: `D07`, lowestStandardScore: 22.9 },
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'HCMC University of Fine Arts',
        shortName: 'UFA',
        description: [
            `Ho Chi Minh City University of Fine Arts is a university in Bình Thạnh District, Ho Chi Minh City, Vietnam. The predecessor of this school was the École des Dessins, founded by André Joyeux in 1913, which became the École des Arts appliqués de Gia Đinh from 1940 to 1971`
        ],
        city: 'Ho Chi Minh City',
        location: '5 Phan Đăng Lưu St, Phường 3, Bình Thạnh, Hồ Chí Minh city',
        img: { uri: 'https://congchungnguyenvietcuong.com/Uploaded/Others/2023/12/26/truong-dai-hoc-my-thuat-tphcm_2612163209.webp' },
        admission: 300,
        lowestStandardScore: 17.21,
        highestStandardScore: 21.38,
        scoreRefYear: 2023,
        avgFee: 11000000,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            "https://www.vietjack.com/diem-chuan-dai-hoc/dai-hoc-my-thuat-tp-ho-chi-minh.jsp",
            "https://mytour.vn/en/blog/bai-viet/explore-the-tuition-fees-for-fine-arts-university-in-ho-chi-minh-city-for-the-academic-year-2020-2021.html"
        ],
        mainMajor: [
            'Art Design',
            'Fashion Design',
            'Interior Design',
        ],
        major: [
            {
                majorName: `Monumental`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 18.17 },
                    { name: 'H07', lowestStandardScore: 18.17 }
                ]
            },
            {
                majorName: `Lacquer`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 17.5 },
                    { name: 'H07', lowestStandardScore: 17.5 }
                ]
            },
            {
                majorName: `Sculpture`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 17.1 },
                    { name: 'H07', lowestStandardScore: 17.1 }
                ]
            },
            {
                majorName: `Ceramic`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 17 },
                    { name: 'H07', lowestStandardScore: 17 }
                ]
            },
            {
                majorName: `Industrial Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 17 },
                    { name: 'H07', lowestStandardScore: 17 }
                ]
            },
            {
                majorName: `Decorative Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 18 },
                    { name: 'H07', lowestStandardScore: 18 }
                ]
            },
            {
                majorName: `Art Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 21.38 },
                    { name: 'H07', lowestStandardScore: 21.38 }
                ]
            },
            {
                majorName: `Fashion Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 20 },
                    { name: 'H07', lowestStandardScore: 20 }
                ]
            },
            {
                majorName: `Interior Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'H00', lowestStandardScore: 19.32 },
                    { name: 'H07', lowestStandardScore: 19.32 }
                ]
            },
        ]
    },
    {
        id: 9,
        name: 'National University of Art Education',
        shortName: 'NUAE',
        description: [
            `The Central University of Art Education (CUAE) is an institution dedicated to training and fostering human resources at the undergraduate and postgraduate levels, conducting scientific research, and transferring technology in the fields of Culture and Art Education. The university aims to meet the developmental needs of the country's socio-economic landscape and facilitate international integration.`
        ],
        city: 'Hanoi',
        location: '18 Ng. 55 Đ. Trần Phú, Trần Phú, Hà Đông, Hà Nội',
        img: { uri: 'https://dean1665.vn/uploads/school/avt-spnttw.jpg' },
        admission: 1800,
        lowestStandardScore: 18,
        highestStandardScore: 33,
        scoreRefYear: 2023,
        minFee: 24000000,
        maxFee: 32000000,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            'http://www.spnttw.edu.vn/',
            'https://tuyensinhso.vn/school/dai-hoc-su-pham-nghe-thuat-trung-uong-ha-noi.html',
            'http://tuyensinh.spnttw.edu.vn/content.aspx?sitepageid=1730',
            'http://www.spnttw.edu.vn/articledetail.aspx?articleid=47847&sitepageid=699',
        ],
        mainMajor: [
            'Music Education',
            'Piano',
            'Fashion Design',
        ],
        major: [
            {
                majorName: `Music production`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 32 }
                ]
            },
            {
                majorName: `Kindergarten music production`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 32 }
                ]
            },
            {
                majorName: `Art production`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 33 }
                ]
            },
            {
                majorName: `Kindergarten art production`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 33 }
                ]
            },
            {
                majorName: `Culture Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `N00`, lowestStandardScore: 30 }, { name: `H00`, lowestStandardScore: 30 }, { name: `C00`, lowestStandardScore: 18 }
                ]
            },
            {
                majorName: `Fashion Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 35.5 }
                ]
            },
            {
                majorName: `Knitting technology`,
                icon: majorDefault,
                examGroup: [
                    { name: `H00`, lowestStandardScore: 30 }, { name: `A01`, lowestStandardScore: 18 }, { name: `D01`, lowestStandardScore: 18 }
                ]
            },
            {
                majorName: `Graphic Design`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 38 }
                ]
            },
            {
                majorName: `Art `,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 36 }
                ]
            },
            {
                majorName: `Music `,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 36 }
                ]
            },
            {
                majorName: `Piano`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 37 }
                ]
            },
            {
                majorName: `Acting`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 28 }
                ]
            },
            {
                majorName: `Community service`,
                icon: majorDefault,
                examGroup: [
                    { name: 'A01', lowestStandardScore: 18 }
                ]
            },
        ]
    },
    {
        id: 10,
        name: 'Hanoi University of Physical Education and Sports',
        shortName: 'HUPES',
        description: [
            `Hanoi University of Physical Education and Sports is a public university established in 1961, originally known as the School of Physical Education and Sports, under the Ministry of Education and Training. It is the first institution in Vietnam tasked with training physical education teachers at the undergraduate and postgraduate levels. The university also focuses on professional development for physical education teachers, conducting research and applying physical education science, and providing national defense and security education for students of universities, colleges, and vocational schools in the Hanoi area.`
        ],
        city: 'Hanoi',
        location: 'WPP6+PJJ, Phượng Bãi, Chương Mỹ, Hà Nội',
        img: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-52Ok7NEGN32qzxea6P_1YxUURkEPbdUMQ&s' },
        admission: 400,
        lowestStandardScore: 26,
        highestStandardScore: 28,
        scoreRefYear: 2023,
        avgFee: 0,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            'https://hupes.edu.vn/danh-muc-tin/gioi-thieu.html',
            'https://hupes.edu.vn/thong-bao-ve-viec-cong-bo-diem-chuan-trung-tuyen-dai-hoc-chinh-quy-dot-1-nam-2022.html',
            'https://hupes.edu.vn/tan-sinh-vien-hupes-hao-hung-phan-khoi-trong-ngay-nhap-hoc.html',
            'https://hupes.edu.vn/co-hoi-duoc-hoc-tap-va-nhan-ho-tro-chi-phi-sinh-hoat-cho-thi-sinh-dang-ky-nguyen-vong-1-vao-truong-dhsp-tdtt-ha-noi.html#:~:text=Theo%20Ngh%E1%BB%8B%20%C4%91%E1%BB%8Bnh%20s%E1%BB%91%20116,kh%C3%B4ng%20ph%E1%BA%A3i%20%C4%91%C3%B3ng%20h%E1%BB%8Dc%20ph%C3%AD.',
            'https://vietjack.com/thong-tin-tuyen-sinh/truong-dai-hoc-su-pham-the-duc-the-thao-ha-noi.jsp',
        ],
        mainMajor: [
            'Physical Education',
        ],
        major: [
            {
                majorName: `Physical Education`,
                icon: majorDefault,
                examGroup: [
                    { name: 'T00', lowestStandardScore: 26 }, { name: 'T02', lowestStandardScore: 26 }, { name: 'T05', lowestStandardScore: 26 }, { name: 'T08', lowestStandardScore: 26 }
                ]
            },
            {
                majorName: `Defense and security education`,
                icon: majorDefault,
                examGroup: [
                    { name: 'C00', lowestStandardScore: 28 }, { name: 'C19', lowestStandardScore: 28 }, { name: 'C20', lowestStandardScore: 28 }, { name: 'D66', lowestStandardScore: 28 }
                ]
            },
        ]
    },
    {
        id: 11,
        name: 'Hanoi University of Culture',
        shortName: 'HUC',
        description: [
            `Hanoi University of Culture (VHHHN), formerly known as the School of Cultural Officers, was established on March 26, 1959 under Decision No. 134/VH-QD of the Ministry of Culture (now the Ministry of Culture and Sports). and travel). During the process of development over the past 60 years, Hanoi University of Science and Technology has received many Certificates of Merit and Labor Medals from the Party, State and Government: Third-class Labor Medal (1984); Second Class Labor Medal (1989); First Class Labor Medal (1994); Third-class Independence Medal (2004) and Second-class Independence Medal (2014), the University has gradually asserted its brand as an academic center as well as a prestigious undergraduate and postgraduate training facility. leading in Vietnam in the field of culture`
        ],
        city: 'Hanoi',
        location: '418 Đ. La Thành, Chợ Dừa, Đống Đa, Hà Nội',
        img: { uri: 'https://i3.connections.vn/huc.edu.vn/userfiles/assets/HUC%207.jpg' },
        admission: 1550,
        lowestStandardScore: 20.7,
        highestStandardScore: 32.93,
        scoreRefYear: 2023,
        avgFee: 12000000,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            'https://xaydungchinhsach.chinhphu.vn/diem-chuan-truong-dai-hoc-van-hoa-ha-noi-2023-119230822231741975.htm',
            'https://edureview.vn/hoc-phi-truong-dai-hoc-van-hoa-ha-noi#:~:text=%C4%91%E1%BB%93ng%2Fn%C4%83m).-,H%E1%BB%8Dc%20ph%C3%AD%20n%C4%83m%202021%20%E2%80%93%202022%20c%E1%BB%A7a%20Tr%C6%B0%E1%BB%9Dng,H%E1%BB%8Dc%20V%C4%83n%20H%C3%B3a%20H%C3%A0%20N%E1%BB%99i&text=C%E1%BB%A5%20th%E1%BB%83%2C%20h%E1%BB%8Dc%20ph%C3%AD%20HUC,ph%E1%BA%A3i%20%C4%91%C3%B3ng%2010.000.000%20VN%C4%90.',
            'https://xaydungchinhsach.chinhphu.vn/truong-dai-hoc-van-hoa-ha-noi-tuyen-sinh-dai-hoc-nam-2023-119230308231916383.htm',
        ],
        mainMajor: [
            'English language',
            'International Tourism',
            'Journalism',
            'Cultural Study',
        ],
        major: [
            {
                majorName: `Cultural organization and management of ethnic minority areas`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 20.7 }, { name: `D78`, lowestStandardScore: 20.7 }, { name: `D96`, lowestStandardScore: 20.7 }, { name: `A16`, lowestStandardScore: 20.7 }, { name: `A00`, lowestStandardScore: 20.7 },
                ]
            },
            {
                majorName: `Tourism organization and management of ethnic minority areas`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 21.9 }, { name: `D78`, lowestStandardScore: 21.9 }, { name: `D96`, lowestStandardScore: 21.9 }, { name: `A16`, lowestStandardScore: 21.9 }, { name: `A00`, lowestStandardScore: 21.9 },
                ]
            },
            {
                majorName: `English language`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 32.93 }, { name: `D78`, lowestStandardScore: 32.93 }, { name: `D96`, lowestStandardScore: 32.93 }, { name: `A16`, lowestStandardScore: 32.93 }, { name: `A00`, lowestStandardScore: 32.93 },
                ]
            },
            {
                majorName: `Cultural study`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 23.63 }, { name: `D78`, lowestStandardScore: 23.63 }, { name: `D96`, lowestStandardScore: 23.63 }, { name: `A16`, lowestStandardScore: 23.63 }, { name: `A00`, lowestStandardScore: 23.63 },
                ],
                afterGraduation: true
            },
            {
                majorName: `Traditional culture`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 25.18 }, { name: `D78`, lowestStandardScore: 25.18 }, { name: `D96`, lowestStandardScore: 25.18 }, { name: `A16`, lowestStandardScore: 25.18 }, { name: `A00`, lowestStandardScore: 25.18 },
                ]
            },
            {
                majorName: `Overseas culture`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 23.68 }, { name: `D78`, lowestStandardScore: 23.68 }, { name: `D96`, lowestStandardScore: 23.68 }, { name: `A16`, lowestStandardScore: 23.68 }, { name: `A00`, lowestStandardScore: 23.68 },
                ]
            },
            {
                majorName: `Cultural policy and arts management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 22.96 }, { name: `D78`, lowestStandardScore: 22.96 }, { name: `D96`, lowestStandardScore: 22.96 }, { name: `A16`, lowestStandardScore: 22.96 }, { name: `A00`, lowestStandardScore: 22.96 },
                ]
            },
            {
                majorName: `Cultural heritage management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 22.23 }, { name: `D78`, lowestStandardScore: 22.23 }, { name: `D96`, lowestStandardScore: 22.23 }, { name: `A16`, lowestStandardScore: 22.23 }, { name: `A00`, lowestStandardScore: 22.23 },
                ],
                afterGraduation: true
            },
            {
                majorName: `Organize cultural events`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 25.13 }, { name: `D78`, lowestStandardScore: 25.13 }, { name: `D96`, lowestStandardScore: 25.13 }, { name: `A16`, lowestStandardScore: 25.13 }, { name: `A00`, lowestStandardScore: 25.13 },
                ]
            },
            {
                majorName: `Journalism`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 25.85 }, { name: `D78`, lowestStandardScore: 25.85 }, { name: `D96`, lowestStandardScore: 25.85 }, { name: `A16`, lowestStandardScore: 25.85 }, { name: `A00`, lowestStandardScore: 25.85 },
                ]
            },
            {
                majorName: `Information-Library`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 20.75 }, { name: `D78`, lowestStandardScore: 20.75 }, { name: `D96`, lowestStandardScore: 20.75 }, { name: `A16`, lowestStandardScore: 20.75 }, { name: `A00`, lowestStandardScore: 20.75 },
                ]
            },
            {
                majorName: `Information Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 22.4 }, { name: `D78`, lowestStandardScore: 22.4 }, { name: `D96`, lowestStandardScore: 22.4 }, { name: `A16`, lowestStandardScore: 22.4 }, { name: `A00`, lowestStandardScore: 22.4 },
                ],
                afterGraduation: true
            },
            {
                majorName: `Museology`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 21.83 }, { name: `D78`, lowestStandardScore: 21.83 }, { name: `D96`, lowestStandardScore: 21.83 }, { name: `A16`, lowestStandardScore: 21.83 }, { name: `A00`, lowestStandardScore: 21.83 },
                ]
            },
            {
                majorName: `Publication business`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 22 }, { name: `D78`, lowestStandardScore: 22 }, { name: `D96`, lowestStandardScore: 22 }, { name: `A16`, lowestStandardScore: 22 }, { name: `A00`, lowestStandardScore: 22 },
                ]
            },
            {
                majorName: `Law`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 24.17 }, { name: `D78`, lowestStandardScore: 24.17 }, { name: `D96`, lowestStandardScore: 24.17 }, { name: `A16`, lowestStandardScore: 24.17 }, { name: `A00`, lowestStandardScore: 24.17 },
                ]
            },
            {
                majorName: `Tourism culture`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 24.41 }, { name: `D78`, lowestStandardScore: 24.41 }, { name: `D96`, lowestStandardScore: 24.41 }, { name: `A16`, lowestStandardScore: 24.41 }, { name: `A00`, lowestStandardScore: 24.41 },
                ]
            },
            {
                majorName: `Tourism guide`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 24.8 }, { name: `D78`, lowestStandardScore: 24.8 }, { name: `D96`, lowestStandardScore: 24.8 }, { name: `A16`, lowestStandardScore: 24.8 }, { name: `A00`, lowestStandardScore: 24.8 },
                ]
            },
            {
                majorName: `International Tourism guide`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 31.4 }, { name: `D78`, lowestStandardScore: 31.4 }, { name: `D96`, lowestStandardScore: 31.4 }, { name: `A16`, lowestStandardScore: 31.4 }, { name: `A00`, lowestStandardScore: 31.4 },
                ]
            },
            {
                majorName: `Tourism Management`,
                icon: majorDefault,
                examGroup: [
                    { name: `D01`, lowestStandardScore: 25.5 }, { name: `D78`, lowestStandardScore: 25.5 }, { name: `D96`, lowestStandardScore: 25.5 }, { name: `A16`, lowestStandardScore: 25.5 }, { name: `A00`, lowestStandardScore: 25.5 },
                ]
            },
        ]
    },
    {
        id: 12,
        name: 'Electric Power University',
        shortName: 'EPU',
        description: [
            `The predecessor of the University of Electricity was the School of Practical Engineering established in 1898. Then the School was separated into Technical School I and Technical School II. In August 1962, Technical School I changed its name to Electromechanical High School and on February 8, 1966, the Ministry of Heavy Industry decided to separate Electromechanical High School into Electrical Technical High School and Mechanical High School. gas. In July 1997, the Ministry of Industry decided to change its name to Electric High School 1. In April 2000, the Ministry of Industry decided to merge Electric High School 1 and In-Service Training School into Electric High School 1 under Vietnam Electricity Corporation (now Vietnam Electricity Group). On October 26, 2001, the Minister of Education and Training signed a decision to establish Electricity College on the basis of Electricity High School 1; After 5 years of construction and development, on May 19, 2006, the Prime Minister signed a decision to establish Electricity University on the basis of Electricity College. Implement Resolution 77 NQ-CP of the Government on innovating training mechanisms, based on many years of continuous financial autonomy in the School's activities; On September 1, 2015, the Prime Minister signed Decision No. 1508/QD-TTg approving the pilot project to innovate the operating mechanism of Electricity University for the period 2015 - 2017; On September 24, 2015, the Minister of Industry and Trade signed Decision No. 10268/QD-BCT on transferring Electricity University under Vietnam Electricity Group to the Ministry of Industry and Trade. Electricity University is a multi-level, multi-disciplinary public university whose main mission is to train high-quality human resources to supply the Industry and serve socio-economic needs and at the same time be a center The industry's leading scientific and technological research center.`
        ],
        city: 'Hanoi',
        location: '235 Hoang Quoc Viet, Co Nhue, Bac Tu Liem, Hanoi',
        img: { uri: 'https://media.licdn.com/dms/image/C511BAQFyZ2KYGtwniQ/company-background_1536_768/0/1584301319628?e=2147483647&v=beta&t=kcjJWCPFPe3HRZEPGxWL4PtZqROK_Ay8wERoYlg1b0s' },
        admission: 3930,
        lowestStandardScore: 18,
        highestStandardScore: 24,
        scoreRefYear: 2023,
        minFee: 16000000,
        maxFee: 20000000,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            'https://xaydungchinhsach.chinhphu.vn/diem-chuan-truong-dai-hoc-dien-luc-nam-2023-119230822175351904.html',
            'https://epu.edu.vn/trang/thac-si-2225.html',
            'https://laodong.vn/tuyen-sinh/hoc-phi-cac-truong-dai-hoc-tren-ca-nuoc-nam-hoc-2023-2024-1200827.ldo#:~:text=N%C4%83m%20h%E1%BB%8Dc%202023%20%2D%202024%2C%20Tr%C6%B0%E1%BB%9Dng,t%E1%BA%BF%20353.300%20%C4%91%E1%BB%93ng%2Ft%C3%ADn%20ch%E1%BB%89.',
            'https://xaydungchinhsach.chinhphu.vn/tuyen-sinh-2024-chi-tieu-phuong-thuc-tuyen-sinh-truong-dai-hoc-dien-luc-119240228063312779.htm',
        ],
        mainMajor: [
            'Electricity',
            'Electronics',
            'Telecommunication',
        ],
        major: [
            {
                majorName: 'Business administration',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.5 }],
                afterGraduation: true
            },
            {
                majorName: 'E-commerce',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 24 }],
            },
            {
                majorName: 'Finance-banking',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.5 }],
                afterGraduation: true
            },
            {
                majorName: 'Accounting',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.35 }],
            },
            {
                majorName: 'Audit',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.5 }],
            },
            {
                majorName: 'Information Technology',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 23.25 }],
                afterGraduation: true
            },
            {
                majorName: 'construction engineering',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 20.5 }],
            },
            {
                majorName: 'Mechanical engineering ',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.3 }],
                afterGraduation: true
            },
            {
                majorName: 'Mechatronics',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 23.25 }],
                afterGraduation: true
            },
            {
                majorName: 'Electrical engineering',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.75 }],
                afterGraduation: true
            },
            {
                majorName: 'Electronics and Telecommunication',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22.75 }],
            },
            {
                majorName: 'Automation',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 23 }],
                afterGraduation: true
            },
            {
                majorName: 'Energy engineering',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 20 }],
                afterGraduation: true
            },
            {
                majorName: 'Environmental engineering',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 18 }],
            },
            {
                majorName: 'Industrial management',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 23.5 }],
                afterGraduation: true
            },
            {
                majorName: 'Energy management',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 22 }],
                afterGraduation: true
            },
            {
                majorName: 'Logistics and supply chain management',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 23.25 }],
            },
            {
                majorName: 'Heat engineering',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 21.3 }],
            },
            {
                majorName: 'Tourism management',
                icon: majorDefault,
                examGroup: [{ name: 'A01', lowestStandardScore: 21.5 }],
            },
        ]
    },
    {
        id: 13,
        name: 'Foreign Trade University',
        shortName: 'FTU',
        description: [
            `Foreign Trade University (FTU; Vietnamese: Trường Đại học Ngoại thương) is a public university established in 1960, located in Hanoi, Vietnam, with satellite campuses in Ho Chi Minh City and Quảng Ninh.`,
            `FTU is regarded as one of the most prestigious universities in Vietnam,[1] offering a wide range of business courses - from economics, business administration, and finance to economic law and business languages. The annual admission to FTU is the most competitive in Vietnam and applicants are required to have very high test scores. The core major of the university is International Business Economics, which attracts the most elite students in the country.`
        ],
        city: 'Hanoi',
        location: '91 Chua Lang, Dong Da, Hanoi',
        img: { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/FTU_2011.jpg/1200px-FTU_2011.jpg' },
        admission: 4130,
        lowestStandardScore: 26.2,
        highestStandardScore: 28.5,
        scoreRefYear: 2023,
        avgFee: 22000000,
        unitFee: 'VND',
        yearOrSemForFee: 'Year',
        refURL: [
            'https://xaydungchinhsach.chinhphu.vn/truong-dai-hoc-ngoai-thuong-cong-bo-diem-chuan-2023-119230822130248234.htm',
            'https://mytour.vn/en/blog/bai-viet/foreign-trade-university-2022-admission-scores.html',
        ],
        mainMajor: [
            'Economics',
            'Law',
            'Business Management',
            'Marketing',
            'Finance and Accounting',
            'Language',
        ],
        major: [
            
        ]
    }
]