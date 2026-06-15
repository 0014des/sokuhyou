// ==========================================================================
// ELECTION BULLETIN GENERATOR - CORE SCRIPT
// ==========================================================================

// --- SVG Avatar Database (Procedural Vector Avatars) ---
const AVATARS = {
    'man-old': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-man-old" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e293b"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-man-old)" rx="6"/>
            <!-- Shoulders / Suit -->
            <path d="M 15 95 C 15 80, 25 72, 50 72 C 75 72, 85 80, 85 95 Z" fill="#1e2640"/>
            <path d="M 35 72 L 50 90 L 65 72 Z" fill="#ffffff"/> <!-- White Shirt -->
            <path d="M 47 72 L 50 95 L 53 72 Z" fill="#dc2626"/> <!-- Red Tie -->
            <path d="M 28 73 L 50 95 L 35 95 Z" fill="#111625"/> <!-- Suit Lapel Left -->
            <path d="M 72 73 L 50 95 L 65 95 Z" fill="#111625"/> <!-- Suit Lapel Right -->
            <!-- Neck -->
            <rect x="42" y="60" width="16" height="15" fill="#fbcfe8" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="48" rx="20" ry="22" fill="#fde2e4"/>
            <!-- Wrinkles / Details -->
            <path d="M 44 42 Q 50 44 56 42" stroke="#e5b3b3" stroke-width="1.2" fill="none"/>
            <path d="M 45 54 Q 50 56 55 54" stroke="#e5b3b3" stroke-width="1.2" fill="none"/>
            <!-- Eyes -->
            <circle cx="43" cy="46" r="2.5" fill="#1e293b"/>
            <circle cx="57" cy="46" r="2.5" fill="#1e293b"/>
            <path d="M 40 41 C 42 39, 46 40, 47 41" stroke="#475569" stroke-width="1.5" fill="none"/>
            <path d="M 60 41 C 58 39, 54 40, 53 41" stroke="#475569" stroke-width="1.5" fill="none"/>
            <!-- Glasses -->
            <rect x="37" y="42" width="11" height="9" rx="2" fill="none" stroke="#d97706" stroke-width="1.5"/>
            <rect x="52" y="42" width="11" height="9" rx="2" fill="none" stroke="#d97706" stroke-width="1.5"/>
            <line x1="48" y1="46" x2="52" y2="46" stroke="#d97706" stroke-width="1.5"/>
            <!-- Nose & Mouth -->
            <path d="M 50 47 L 49 53 L 51 53 Z" fill="#e5b3b3"/>
            <path d="M 46 60 Q 50 63 54 60" stroke="#e5b3b3" stroke-width="1.5" fill="none"/>
            <!-- Grey Hair -->
            <path d="M 30 40 C 26 30, 32 20, 50 18 C 68 20, 74 30, 70 40 C 73 35, 71 26, 68 25 C 65 24, 62 26, 50 24 C 38 26, 35 24, 32 25 C 29 26, 27 35, 30 40 Z" fill="#cbd5e1"/>
            <!-- Sideburns -->
            <path d="M 30 38 L 32 46 L 30 46 Z" fill="#cbd5e1"/>
            <path d="M 70 38 L 68 46 L 70 46 Z" fill="#cbd5e1"/>
        </svg>
    `,
    'man-middle': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-man-mid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#0f172a"/>
                    <stop offset="100%" stop-color="#1e1b4b"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-man-mid)" rx="6"/>
            <!-- Shoulders / Suit -->
            <path d="M 15 95 C 15 80, 25 72, 50 72 C 75 72, 85 80, 85 95 Z" fill="#1e293b"/>
            <path d="M 35 72 L 50 90 L 65 72 Z" fill="#ffffff"/> <!-- Shirt -->
            <path d="M 47 72 L 50 95 L 53 72 Z" fill="#2563eb"/> <!-- Blue Tie -->
            <path d="M 28 73 L 50 95 L 35 95 Z" fill="#0f172a"/> <!-- Lapel L -->
            <path d="M 72 73 L 50 95 L 65 95 Z" fill="#0f172a"/> <!-- Lapel R -->
            <!-- Neck -->
            <rect x="42" y="60" width="16" height="15" fill="#fed7aa" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="48" rx="19" ry="21" fill="#ffedd5"/>
            <!-- Eyes -->
            <circle cx="43" cy="46" r="2.5" fill="#1e293b"/>
            <circle cx="57" cy="46" r="2.5" fill="#1e293b"/>
            <path d="M 39 41 Q 43 39 47 41" stroke="#1e293b" stroke-width="1.5" fill="none"/>
            <path d="M 61 41 Q 57 39 53 41" stroke="#1e293b" stroke-width="1.5" fill="none"/>
            <!-- Black Glasses -->
            <rect x="36" y="42" width="12" height="9" rx="1" fill="none" stroke="#000000" stroke-width="2"/>
            <rect x="52" y="42" width="12" height="9" rx="1" fill="none" stroke="#000000" stroke-width="2"/>
            <line x1="48" y1="46" x2="52" y2="46" stroke="#000000" stroke-width="2"/>
            <!-- Nose & Mouth -->
            <path d="M 50 47 L 49 53 L 51 53 Z" fill="#fdbb2d" opacity="0.3"/>
            <path d="M 46 60 Q 50 64 54 60" stroke="#f97316" stroke-width="1.5" fill="none"/>
            <!-- Dark Hair -->
            <path d="M 30 38 C 28 22, 36 18, 50 18 C 64 18, 72 22, 70 38 C 72 32, 68 22, 62 22 C 56 22, 53 25, 50 24 C 47 25, 44 22, 38 22 C 32 22, 28 32, 30 38 Z" fill="#1e293b"/>
        </svg>
    `,
    'man-young': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-man-young" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#111827"/>
                    <stop offset="100%" stop-color="#3b82f6"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-man-young)" rx="6"/>
            <!-- Shoulders -->
            <path d="M 15 95 C 15 80, 25 72, 50 72 C 75 72, 85 80, 85 95 Z" fill="#0f172a"/>
            <path d="M 35 72 L 50 90 L 65 72 Z" fill="#ffffff"/> <!-- Shirt -->
            <path d="M 47 72 L 50 95 L 53 72 Z" fill="#eab308"/> <!-- Yellow Tie -->
            <path d="M 28 73 L 50 95 L 35 95 Z" fill="#1e293b"/>
            <path d="M 72 73 L 50 95 L 65 95 Z" fill="#1e293b"/>
            <!-- Neck -->
            <rect x="42" y="60" width="16" height="15" fill="#ffedd5" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="46" rx="18" ry="20" fill="#ffedd5"/>
            <!-- Eyes -->
            <circle cx="44" cy="44" r="2" fill="#000"/>
            <circle cx="56" cy="44" r="2" fill="#000"/>
            <path d="M 40 39 Q 44 37 47 39" stroke="#000" stroke-width="2" fill="none"/>
            <path d="M 60 39 Q 56 37 53 39" stroke="#000" stroke-width="2" fill="none"/>
            <!-- Nose & Mouth -->
            <path d="M 50 45 L 49 51 L 51 51 Z" fill="#ea580c" opacity="0.3"/>
            <path d="M 45 56 Q 50 60 55 56" stroke="#ea580c" stroke-width="1.5" fill="none"/>
            <!-- Stylish Hair -->
            <path d="M 29 38 C 26 22, 38 14, 50 16 C 62 14, 74 22, 71 38 C 73 30, 68 20, 60 20 C 55 20, 52 24, 50 23 C 48 24, 45 20, 40 20 C 32 20, 27 30, 29 38 Z" fill="#111827"/>
            <path d="M 30 30 Q 40 22 46 28" stroke="#111827" stroke-width="4" stroke-linecap="round" fill="none"/>
        </svg>
    `,
    'woman-middle': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-woman-mid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#312e81"/>
                    <stop offset="100%" stop-color="#0f172a"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-woman-mid)" rx="6"/>
            <!-- Shoulders -->
            <path d="M 15 95 C 15 80, 25 74, 50 74 C 75 74, 85 80, 85 95 Z" fill="#1e3a8a"/>
            <path d="M 38 74 L 50 93 L 62 74 Z" fill="#edf2f7"/> <!-- Inner V-neck -->
            <circle cx="50" cy="80" r="3" fill="#fbbf24"/> <!-- Necklace Pearl -->
            <!-- Neck -->
            <rect x="43" y="60" width="14" height="15" fill="#fbcfe8" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="46" rx="17" ry="19" fill="#fde2e4"/>
            <!-- Eyes -->
            <circle cx="43" cy="45" r="2" fill="#000"/>
            <circle cx="57" cy="45" r="2" fill="#000"/>
            <path d="M 40 40 C 42 38, 45 38, 47 40" stroke="#000" stroke-width="1.5" fill="none"/>
            <path d="M 60 40 C 58 38, 55 38, 53 40" stroke="#000" stroke-width="1.5" fill="none"/>
            <!-- Nose & Mouth -->
            <path d="M 50 46 L 49 51 L 51 51 Z" fill="#e5b3b3"/>
            <path d="M 46 56 Q 50 61 54 56" stroke="#db2777" stroke-width="2" fill="none"/>
            <!-- Bob Haircut -->
            <path d="M 30 45 C 28 35, 29 20, 50 16 C 71 20, 72 35, 70 45 C 74 38, 73 22, 65 20 C 58 18, 53 22, 50 22 C 47 22, 42 18, 35 20 C 27 22, 26 38, 30 45 Z" fill="#451a03"/>
            <path d="M 29 35 L 32 50 L 35 50 L 32 35 Z" fill="#451a03"/>
            <path d="M 71 35 L 68 50 L 65 50 L 68 35 Z" fill="#451a03"/>
        </svg>
    `,
    'woman-young': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-woman-young" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1e1b4b"/>
                    <stop offset="100%" stop-color="#4c1d95"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-woman-young)" rx="6"/>
            <!-- Shoulders -->
            <path d="M 15 95 C 15 80, 25 74, 50 74 C 75 74, 85 80, 85 95 Z" fill="#475569"/>
            <path d="M 38 74 L 50 93 L 62 74 Z" fill="#fae8ff"/> <!-- Inner Shirt -->
            <!-- Neck -->
            <rect x="43" y="60" width="14" height="15" fill="#fed7aa" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="46" rx="17" ry="18" fill="#ffd5cc"/>
            <!-- Eyes -->
            <circle cx="44" cy="44" r="2" fill="#000"/>
            <circle cx="56" cy="44" r="2" fill="#000"/>
            <path d="M 40 39 Q 44 36 48 39" stroke="#000" stroke-width="1.5" fill="none"/>
            <path d="M 60 39 Q 56 36 52 39" stroke="#000" stroke-width="1.5" fill="none"/>
            <!-- Nose & Mouth -->
            <path d="M 50 45 L 49 50 L 51 50 Z" fill="#f43f5e" opacity="0.3"/>
            <path d="M 46 55 Q 50 59 54 55" stroke="#f43f5e" stroke-width="2" fill="none"/>
            <!-- Long Hair -->
            <path d="M 28 50 C 26 30, 32 16, 50 15 C 68 16, 74 30, 72 50 C 76 30, 68 18, 60 18 C 55 18, 52 22, 50 21 C 48 22, 45 18, 40 18 C 32 18, 24 30, 28 50 Z" fill="#1e1b4b"/>
            <!-- Hair extensions flowing to shoulders -->
            <path d="M 27 48 Q 25 70 30 85 Q 32 75 30 50 Z" fill="#1e1b4b"/>
            <path d="M 73 48 Q 75 70 70 85 Q 68 75 70 50 Z" fill="#1e1b4b"/>
        </svg>
    `,
    'caster-man': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-caster-man" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="100%" stop-color="#1e293b"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-caster-man)"/>
            <!-- Shoulders -->
            <path d="M 10 95 C 10 75, 22 68, 50 68 C 78 68, 90 75, 90 95 Z" fill="#0f172a"/>
            <path d="M 32 68 L 50 90 L 68 68 Z" fill="#ffffff"/> <!-- White Shirt -->
            <path d="M 46 68 L 50 95 L 54 68 Z" fill="#0284c7"/> <!-- Blue Tie -->
            <path d="M 22 70 L 50 95 L 30 95 Z" fill="#1e293b"/> <!-- Left Lapel -->
            <path d="M 78 70 L 50 95 L 70 95 Z" fill="#1e293b"/> <!-- Right Lapel -->
            <!-- Mic Pin -->
            <circle cx="34" cy="78" r="1.5" fill="#94a3b8"/>
            <line x1="34" y1="78" x2="34" y2="82" stroke="#475569" stroke-width="1"/>
            <!-- Neck -->
            <rect x="41" y="55" width="18" height="15" fill="#fed7aa" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="42" rx="18" ry="20" fill="#ffedd5"/>
            <!-- Eyes -->
            <circle cx="43" cy="40" r="2" fill="#000"/>
            <circle cx="57" cy="40" r="2" fill="#000"/>
            <path d="M 39 35 Q 43 33 47 35" stroke="#000" stroke-width="1.5" fill="none"/>
            <path d="M 61 35 Q 57 33 53 35" stroke="#000" stroke-width="1.5" fill="none"/>
            <!-- Nose & Mouth -->
            <path d="M 50 41 L 49 46 L 51 46 Z" fill="#ea580c" opacity="0.3"/>
            <path d="M 45 51 Q 50 55 55 51" stroke="#ea580c" stroke-width="1.5" fill="none"/>
            <!-- Anchorman Hair -->
            <path d="M 29 32 C 26 18, 38 12, 50 14 C 62 12, 74 18, 71 32 C 73 25, 68 16, 60 16 C 55 16, 52 20, 50 19 C 48 20, 45 16, 40 16 C 32 16, 27 25, 29 32 Z" fill="#0f172a"/>
        </svg>
    `,
    'caster-woman': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg-caster-woman" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#020617"/>
                    <stop offset="100%" stop-color="#1e293b"/>
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#bg-caster-woman)"/>
            <!-- Shoulders -->
            <path d="M 10 95 C 10 75, 22 68, 50 68 C 78 68, 90 75, 90 95 Z" fill="#be185d"/> <!-- Dark Pink suit -->
            <path d="M 34 68 L 50 90 L 66 68 Z" fill="#fdf2f8"/> <!-- Soft white blouse -->
            <!-- Neck -->
            <rect x="42" y="55" width="16" height="15" fill="#fbcfe8" rx="2"/>
            <!-- Face -->
            <ellipse cx="50" cy="42" rx="17" ry="19" fill="#fde2e4"/>
            <!-- Eyes -->
            <circle cx="43" cy="40" r="2" fill="#000"/>
            <circle cx="57" cy="40" r="2" fill="#000"/>
            <path d="M 39 35 C 41 33, 44 33, 47 35" stroke="#000" stroke-width="1.5" fill="none"/>
            <path d="M 61 35 C 59 33, 56 33, 53 35" stroke="#000" stroke-width="1.5" fill="none"/>
            <!-- Nose & Mouth -->
            <path d="M 50 42 L 49 47 L 51 47 Z" fill="#e5b3b3"/>
            <path d="M 46 51 Q 50 56 54 51" stroke="#be185d" stroke-width="2" fill="none"/>
            <!-- Headset -->
            <path d="M 30 38 Q 30 18 50 18 Q 70 18 70 38" stroke="#334155" stroke-width="2.5" fill="none"/>
            <rect x="68" y="34" width="4" height="8" rx="1" fill="#1e293b"/>
            <path d="M 70 38 Q 65 48 56 46" stroke="#334155" stroke-width="1.5" fill="none"/> <!-- Headset Mic line -->
            <circle cx="55" cy="46" r="1.5" fill="#000"/>
            <!-- Hair -->
            <path d="M 30 42 C 28 28, 32 18, 50 16 C 68 18, 72 28, 70 42 C 73 35, 71 22, 65 20 C 58 18, 53 22, 50 22 C 47 22, 42 18, 35 20 C 27 22, 26 35, 30 42 Z" fill="#7c2d12"/>
        </svg>
    `
};

// --- Initial App State (Default values) ---
const state = {
    tickerTitle: "衆院選",
    tickerLine1: "自民・公明の過半数獲得が確実",
    tickerLine2: "自民 単独過半数はギリギリの情勢",
    
    card1: {
        party: "立民",
        desc: "議席増の勢い",
        theme: "party-ritumin",
        avatar: "man-old"
    },
    card2: {
        party: "維新",
        desc: "3倍以上見通し",
        theme: "party-ishin",
        avatar: "man-middle"
    },

    boardMode: "mode-news",
    featured: {
        district: "東京1区",
        status: "接戦激突！",
        cand1: { party: "自民", name: "山田 太郎", votes: 85200, avatar: "man-young" },
        cand2: { party: "立民", name: "佐藤 花子", votes: 78900, avatar: "woman-young" }
    },

    bgStyle: "bg-studio-dark",
    ambientAnim: true,
    scanlines: true,
    soundOn: true,

    showCandidate: true,
    candidate: {
        badge: "確",
        wins: "5回目",
        district: "神奈川11区",
        title: "元環境大臣",
        name: "小泉 進次郎",
        age: 40,
        party: "自・前",
        rawParty: "自",
        rawStatus: "前"
    },
    casterAvatar: "caster-man",

    // Party Seats configuration
    parties: [
        { name: "自民", seats: 27, active: true },
        { name: "立民", seats: 0, active: true },
        { name: "公明", seats: 0, active: true },
        { name: "共産", seats: 0, active: true },
        { name: "維新", seats: 0, active: true },
        { name: "国民", seats: 0, active: true },
        { name: "れ新", seats: 0, active: true },
        { name: "社民", seats: 0, active: true },
        { name: "N党", seats: 0, active: true },
        { name: "無・他", seats: 0, active: true }
    ],
    maxSeats: 465
};

// --- Presets Definition ---
const PRESETS = {
    'preset-nhk': {
        tickerTitle: "衆院選",
        badgeYear: "2021",
        tickerLine1: "自民・公明の過半数獲得が確実",
        tickerLine2: "自民 単独過半数はギリギリの情勢",
        card1: {
            party: "立民",
            desc: "議席増の勢い",
            theme: "party-ritumin",
            avatar: "man-old"
        },
        card2: {
            party: "維新",
            desc: "3倍以上見通し",
            theme: "party-ishin",
            avatar: "man-middle"
        },
        bgStyle: "bg-studio-dark",
        showCandidate: true,
        candidate: {
            badge: "確",
            wins: "5回目",
            district: "神奈川11区",
            title: "元環境大臣",
            name: "小泉 進次郎",
            age: 40,
            party: "自・前",
            rawParty: "自",
            rawStatus: "前"
        },
        casterAvatar: "caster-man",
        parties: [
            { name: "自民", seats: 27 },
            { name: "立民", seats: 0 },
            { name: "公明", seats: 0 },
            { name: "共産", seats: 0 },
            { name: "維新", seats: 0 },
            { name: "国民", seats: 0 },
            { name: "れ新", seats: 0 },
            { name: "社民", seats: 0 },
            { name: "N党", seats: 0 },
            { name: "無・他", seats: 0 }
        ],
        maxSeats: 465,
        featured: {
            district: "東京1区",
            status: "接戦激突！",
            cand1: { party: "自民", name: "山田 太郎", votes: 85200, avatar: "man-young" },
            cand2: { party: "立民", name: "佐藤 花子", votes: 78900, avatar: "woman-young" }
        }
    },
    'preset-sangiin': {
        tickerTitle: "参院選",
        badgeYear: "2025",
        tickerLine1: "改選過半数をめぐる与野党の攻防激化",
        tickerLine2: "深夜にかけて大勢判明の見通し",
        card1: {
            party: "自民",
            desc: "単独過半数を維持か",
            theme: "party-jimin",
            avatar: "man-young"
        },
        card2: {
            party: "公明",
            desc: "全員当選へ向け堅調",
            theme: "party-komei",
            avatar: "woman-middle"
        },
        bgStyle: "bg-studio-cyber",
        showCandidate: true,
        candidate: {
            badge: "当",
            wins: "2回目",
            district: "東京選挙区",
            title: "元宇宙飛行士",
            name: "蓮舫 太郎",
            age: 38,
            party: "無・新",
            rawParty: "無",
            rawStatus: "新"
        },
        casterAvatar: "caster-woman",
        parties: [
            { name: "自民", seats: 54 },
            { name: "立民", seats: 32 },
            { name: "公明", seats: 12 },
            { name: "共産", seats: 6 },
            { name: "維新", seats: 15 },
            { name: "国民", seats: 5 },
            { name: "れ新", seats: 3 },
            { name: "社民", seats: 1 },
            { name: "N党", seats: 0 },
            { name: "無・他", seats: 8 }
        ],
        maxSeats: 248,
        featured: {
            district: "東京選挙区",
            status: "改選大激戦",
            cand1: { party: "自民", name: "丸川 珠代", votes: 128000, avatar: "woman-middle" },
            cand2: { party: "無・他", name: "蓮舫 太郎", votes: 119800, avatar: "man-middle" }
        }
    },
    'preset-game': {
        tickerTitle: "速報",
        badgeYear: "2026",
        tickerLine1: "AG CUP 2026 決勝！白熱の最終マップ",
        tickerLine2: "チームアルファがマッチポイント獲得",
        card1: {
            party: "ALPHA",
            desc: "マッチポイント！王手",
            theme: "party-ritumin",
            avatar: "man-young"
        },
        card2: {
            party: "BETA",
            desc: "奇跡の逆転劇なるか",
            theme: "party-ishin",
            avatar: "woman-young"
        },
        bgStyle: "bg-studio-cyber",
        showCandidate: true,
        candidate: {
            badge: "確",
            wins: "初V",
            district: "MVP候補",
            title: "プロゲーマー",
            name: "Antigravity",
            age: 21,
            party: "AP・前",
            rawParty: "AP",
            rawStatus: "前"
        },
        casterAvatar: "caster-woman",
        parties: [
            { name: "ALPHA", seats: 12 },
            { name: "BETA", seats: 11 },
            { name: "残", seats: 1 }
        ],
        maxSeats: 25,
        featured: {
            district: "Grand Final",
            status: "MATCH POINT！",
            cand1: { party: "ALPHA", name: "AG Shadow", votes: 24, avatar: "man-young" },
            cand2: { party: "BETA", name: "Neo Blaze", votes: 22, avatar: "woman-young" }
        }
    },
    'preset-company': {
        tickerTitle: "決算",
        badgeYear: "2026",
        tickerLine1: "第2四半期 過去最高益を達成！",
        tickerLine2: "AI事業の伸長が大きく寄与",
        card1: {
            party: "開発部",
            desc: "リリース計画前倒し完了",
            theme: "party-ritumin",
            avatar: "man-middle"
        },
        card2: {
            party: "営業部",
            desc: "目標150%の超達成見通し",
            theme: "party-ishin",
            avatar: "woman-middle"
        },
        bgStyle: "bg-studio-gold",
        showCandidate: true,
        candidate: {
            badge: "内定",
            wins: "社長賞",
            district: "全社表彰",
            title: "プロジェクトリーダー",
            name: "佐藤 結衣",
            age: 29,
            party: "技・新",
            rawParty: "技",
            rawStatus: "新"
        },
        casterAvatar: "caster-man",
        parties: [
            { name: "第1営業", seats: 120 },
            { name: "第2営業", seats: 98 },
            { name: "AI開発", seats: 150 },
            { name: "クラウド", seats: 80 },
            { name: "人事・総", seats: 17 }
        ],
        maxSeats: 500,
        featured: {
            district: "AI開発 vs 第1営業",
            status: "部門激突！",
            cand1: { party: "AI開発", name: "鈴木 AI", votes: 150, avatar: "man-young" },
            cand2: { party: "第1営業", name: "田中 太郎", votes: 120, avatar: "man-middle" }
        }
    },
    'preset-51shuin': {
        tickerTitle: "衆院選",
        badgeYear: "2024",
        tickerLine1: "第51回衆議院選挙 (2024年史実結果)",
        tickerLine2: "自民・公明過半数割れ、立憲・国民が大幅躍進",
        card1: {
            party: "自民",
            desc: "191議席に大幅減",
            theme: "party-jimin",
            avatar: "man-old"
        },
        card2: {
            party: "立民",
            desc: "148議席で躍進",
            theme: "party-ritumin",
            avatar: "man-middle"
        },
        bgStyle: "bg-studio-dark",
        showCandidate: true,
        candidate: {
            badge: "確",
            wins: "当選",
            district: "全国代表",
            title: "与野党激突の開票結果",
            name: "史実データ反映",
            age: 50,
            party: "各・前",
            rawParty: "各",
            rawStatus: "前"
        },
        casterAvatar: "caster-man",
        parties: [
            { name: "自民", seats: 191 },
            { name: "立民", seats: 148 },
            { name: "維新", seats: 38 },
            { name: "国民", seats: 28 },
            { name: "公明", seats: 24 },
            { name: "れ新", seats: 9 },
            { name: "共産", seats: 8 },
            { name: "参政", seats: 3 },
            { name: "保守", seats: 3 },
            { name: "社民", seats: 1 },
            { name: "無・他", seats: 12 }
        ],
        maxSeats: 465,
        featured: {
            district: "東京15区",
            status: "混戦！5候補乱立",
            cand1: { party: "自民", name: "柿沢 未途", votes: 42500, avatar: "man-old" },
            cand2: { party: "立民", name: "酒井 菜摘", votes: 49200, avatar: "woman-young" }
        }
    }
};

// --- Sound Synthesizer (Web Audio API) ---
class AudioController {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    playChime() {
        this.init();
        if (!this.ctx) return;
        
        // Resume context if suspended (browser security)
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const now = this.ctx.currentTime;
        
        // Play an elegant TV news chime (three bell notes: G5, C6, E6)
        this.playNote(783.99, now, 0.15);      // G5
        this.playNote(1046.50, now + 0.15, 0.15); // C6
        this.playNote(1318.51, now + 0.30, 0.4);  // E6
    }

    playNote(freq, startTime, duration) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        // Triangle/Sine mix for a warm tubular bell chime sound
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);
        
        // Exponential volume decay
        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + duration);
    }
}

const soundSynth = new AudioController();

// --- DOM Rendering Engine ---
function updateDOM() {
    // 1. Top Ticker Text
    document.getElementById('tv-ticker-title').innerText = state.tickerTitle;
    document.getElementById('tv-ticker-line1').innerText = state.tickerLine1;
    document.getElementById('tv-ticker-line2').innerText = state.tickerLine2;

    // Badge year: auto-detect from tickerTitle or use preset year
    const yearEl = document.getElementById('tv-badge-year');
    if (yearEl) {
        yearEl.innerText = state.badgeYear || new Date().getFullYear();
    }

    // 2. Central Graphics Card 1
    const card1El = document.getElementById('tv-board-card1');
    card1El.className = `board-card ${state.card1.theme}`;
    document.getElementById('tv-card1-party').innerText = state.card1.party;
    document.getElementById('tv-card1-desc').innerText = state.card1.desc;
    document.getElementById('tv-avatar1').innerHTML = AVATARS[state.card1.avatar] || '';

    // Central Graphics Card 2
    const card2El = document.getElementById('tv-board-card2');
    card2El.className = `board-card ${state.card2.theme}`;
    document.getElementById('tv-card2-party').innerText = state.card2.party;
    document.getElementById('tv-card2-desc').innerText = state.card2.desc;
    document.getElementById('tv-avatar2').innerHTML = AVATARS[state.card2.avatar] || '';

    // 3. Studio Background & Effects
    const bgEl = document.getElementById('tv-background');
    bgEl.className = state.bgStyle;
    
    if (state.ambientAnim) {
        bgEl.classList.add('ambient-animated');
    } else {
        bgEl.classList.remove('ambient-animated');
    }

    const scanlinesEl = document.getElementById('tv-scanlines');
    scanlinesEl.style.display = state.scanlines ? 'block' : 'none';

    // 4. Party Seats Tally Tapes
    renderSeatsTally();

    // 4.5. Center Board Mode Panels toggle
    const panels = {
        'mode-news': 'tv-main-board',
        'mode-proportional': 'tv-proportional-board',
        'mode-featured': 'tv-featured-district-board',
        'mode-share': 'tv-share-board'
    };
    Object.keys(panels).forEach(mode => {
        const el = document.getElementById(panels[mode]);
        if (el) {
            if (state.boardMode === mode) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    });

    // Render active board content
    if (state.boardMode === 'mode-proportional') {
        renderProportionalBoard();
    } else if (state.boardMode === 'mode-featured') {
        renderFeaturedDistrictBoard();
    } else if (state.boardMode === 'mode-share') {
        renderDonutChart();
    }

    // 5. Candidate Bulletin Info
    const bulletinEl = document.getElementById('tv-candidate-bulletin');
    if (state.showCandidate) {
        bulletinEl.classList.add('show');
    } else {
        bulletinEl.classList.remove('show');
    }

    document.getElementById('tv-cand-badge').innerText = state.candidate.badge;
    document.getElementById('tv-cand-wins').innerText = state.candidate.wins;
    document.getElementById('tv-cand-district').innerText = state.candidate.district;
    document.getElementById('tv-cand-title').innerText = state.candidate.title;
    document.getElementById('tv-cand-name').innerText = state.candidate.name;
    document.getElementById('tv-cand-age').innerText = state.candidate.age;
    
    // Assemble "Party・Status" label (e.g. 自・前, ALPHA・前)
    const partyLabel = `${state.candidate.rawParty}・${state.candidate.rawStatus}`;
    document.getElementById('tv-cand-party-label').innerText = partyLabel;

    // Red badge check (if not "確", make it gray or green)
    const badgeEl = document.getElementById('tv-cand-badge');
    if (state.candidate.badge === '確') {
        badgeEl.style.backgroundColor = '#d32f2f';
    } else if (state.candidate.badge === '当') {
        badgeEl.style.backgroundColor = '#eab308'; // Amber/Gold
    } else {
        badgeEl.style.backgroundColor = '#10b981'; // Green (内定)
    }

    // 6. Caster Avatar
    const casterSlot = document.getElementById('tv-caster-avatar-slot');
    const casterBox = document.getElementById('tv-caster-box');
    if (state.casterAvatar === 'none') {
        casterBox.style.display = 'none';
    } else {
        casterBox.style.display = 'flex';
        casterSlot.innerHTML = AVATARS[state.casterAvatar] || '';
    }

    // 7. Seat Bar Graph (visual proportion bar)
    renderSeatBarGraph();
}

// Render Proportional Representation Board
function renderProportionalBoard() {
    const container = document.getElementById('tv-prop-list');
    if (!container) return;
    container.innerHTML = '';
    
    // Sort active parties by seats (excluding '残')
    const activeParties = [...state.parties]
        .filter(p => p.name !== '残' && p.seats > 0)
        .sort((a, b) => b.seats - a.seats);
        
    const totalAcquired = activeParties.reduce((sum, p) => sum + Number(p.seats), 0);
    
    // If no seats are acquired yet, display all parties with 0%
    const displayParties = activeParties.length > 0 ? activeParties : state.parties.filter(p => p.name !== '残');
    
    displayParties.forEach(p => {
        const row = document.createElement('div');
        row.className = 'prop-row';
        
        const pct = totalAcquired > 0 ? (p.seats / totalAcquired) * 100 : 0;
        const barColor = getPartyColor(p.name);
        
        row.innerHTML = `
            <div class="prop-party-name">${p.name}</div>
            <div class="prop-bar-outer">
                <div class="prop-bar-inner" style="width: ${Math.max(1, pct)}%; background-color: ${barColor};"></div>
            </div>
            <div class="prop-seats-box">
                <span>${p.seats}</span>
                <span class="unit">議席</span>
            </div>
        `;
        container.appendChild(row);
    });
}

// Render Featured District Battle Board
function renderFeaturedDistrictBoard() {
    document.getElementById('tv-feat-district-name').innerText = state.featured.district;
    document.getElementById('tv-feat-district-status').innerText = state.featured.status;
    
    // Candidate 1 (Left)
    document.getElementById('tv-feat-party-1').innerText = state.featured.cand1.party;
    document.getElementById('tv-feat-party-1').className = `vs-party-badge party-bg-${getPartyClass(state.featured.cand1.party)}`;
    document.getElementById('tv-feat-name-1').innerText = state.featured.cand1.name;
    document.getElementById('tv-feat-avatar-1').innerHTML = AVATARS[state.featured.cand1.avatar] || '';
    document.getElementById('tv-feat-votes-1').innerText = Number(state.featured.cand1.votes).toLocaleString() + ' 票';
    
    // Candidate 2 (Right)
    document.getElementById('tv-feat-party-2').innerText = state.featured.cand2.party;
    document.getElementById('tv-feat-party-2').className = `vs-party-badge party-bg-${getPartyClass(state.featured.cand2.party)}`;
    document.getElementById('tv-feat-name-2').innerText = state.featured.cand2.name;
    document.getElementById('tv-feat-avatar-2').innerHTML = AVATARS[state.featured.cand2.avatar] || '';
    document.getElementById('tv-feat-votes-2').innerText = Number(state.featured.cand2.votes).toLocaleString() + ' 票';
    
    // Calculate VS Gauge percentage
    const v1 = Number(state.featured.cand1.votes);
    const v2 = Number(state.featured.cand2.votes);
    const totalVotes = v1 + v2;
    const pct1 = totalVotes > 0 ? Math.round((v1 / totalVotes) * 100) : 50;
    const pct2 = 100 - pct1;
    
    const fillEl = document.getElementById('tv-feat-gauge-fill');
    if (fillEl) {
        fillEl.style.width = `${pct1}%`;
        fillEl.style.backgroundColor = getPartyColor(state.featured.cand1.party);
    }
    
    const wrapEl = document.querySelector('.vs-bar-wrap');
    if (wrapEl) {
        wrapEl.style.backgroundColor = getPartyColor(state.featured.cand2.party);
    }
    
    document.getElementById('tv-feat-pct-1').innerText = `${pct1}%`;
    document.getElementById('tv-feat-pct-2').innerText = `${pct2}%`;
}

// Render the 3D-feeling SVG donut chart for seats distribution
function renderDonutChart() {
    const segmentsContainer = document.getElementById('donut-segments');
    const legendContainer = document.getElementById('tv-share-legend');
    const acquiredSeatsEl = document.getElementById('donut-center-acquired');
    const totalSeatsEl = document.getElementById('donut-center-total');
    
    if (!segmentsContainer || !legendContainer) return;
    
    segmentsContainer.innerHTML = '';
    legendContainer.innerHTML = '';
    
    // Calculate total acquired seats excluding '残'
    const activeParties = state.parties.filter(p => p.name !== '残' && p.seats > 0);
    const totalAcquired = activeParties.reduce((sum, p) => sum + Number(p.seats), 0);
    const remainingSeats = Math.max(0, state.maxSeats - totalAcquired);
    
    if (acquiredSeatsEl) acquiredSeatsEl.textContent = totalAcquired;
    if (totalSeatsEl) totalSeatsEl.textContent = `/ ${state.maxSeats}`;
    
    // Circle radius = 70. Circumference = 2 * PI * r = 439.82
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    
    const chartData = [];
    activeParties.forEach(p => {
        chartData.push({ name: p.name, seats: Number(p.seats), color: getPartyColor(p.name) });
    });
    
    // Add "Unconfirmed/Remaining" segment if there are any remaining seats
    if (remainingSeats > 0) {
        chartData.push({ name: '無確定', seats: remainingSeats, color: 'rgba(255, 255, 255, 0.08)' });
    }
    
    // Sort descending by seats, keep Unconfirmed at the very end
    chartData.sort((a, b) => {
        if (a.name === '無確定') return 1;
        if (b.name === '無確定') return -1;
        return b.seats - a.seats;
    });
    
    let accumulatedPercent = 0;
    
    chartData.forEach(data => {
        const pct = (data.seats / state.maxSeats);
        const strokeLength = pct * circumference;
        const strokeOffset = circumference - (accumulatedPercent * circumference);
        
        // Draw segment using SVG Circle element
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('class', 'donut-segment');
        circle.setAttribute('cx', '100');
        circle.setAttribute('cy', '100');
        circle.setAttribute('r', radius.toString());
        circle.setAttribute('fill', 'transparent');
        circle.setAttribute('stroke', data.color);
        circle.setAttribute('stroke-width', '20');
        circle.setAttribute('stroke-dasharray', `${strokeLength} ${circumference}`);
        circle.setAttribute('stroke-dashoffset', strokeOffset.toString());
        circle.setAttribute('transform', 'rotate(-90 100 100)'); // Start from top 12 o'clock
        
        segmentsContainer.appendChild(circle);
        accumulatedPercent += pct;
        
        // Add legend list item for actual parties
        if (data.name !== '無確定') {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';
            
            const percentText = ((data.seats / state.maxSeats) * 100).toFixed(1);
            legendItem.innerHTML = `
                <div class="legend-left">
                    <span class="legend-color" style="background-color: ${data.color}"></span>
                    <span class="legend-name">${data.name}</span>
                </div>
                <div class="legend-right">
                    <span class="legend-seats">${data.seats}</span>
                    <span class="legend-pct">${percentText}%</span>
                </div>
            `;
            legendContainer.appendChild(legendItem);
        }
    });
}

// Helper to map party name to class string
function getPartyClass(partyName) {
    const map = {
        '自民': 'jimin', '立民': 'ritumin', '公明': 'komei', '共産': 'kyosan',
        '維新': 'ishin', '国民': 'kokumin', 'れ新': 'rewa', '社民': 'shamin',
        '参政': 'sansei', '保守': 'hoshu'
    };
    return map[partyName] || 'other';
}

// Render the scrolling/scrolled party seat blocks in the bottom bar
function renderSeatsTally() {
    const track = document.getElementById('tv-seats-track');
    track.innerHTML = '';

    // Calculate Remaining seats
    let acquiredSeats = 0;
    const activeParties = state.parties.filter(p => p.name.trim() !== '残');
    
    activeParties.forEach(p => {
        acquiredSeats += Number(p.seats);
    });
    
    const remainingSeats = Math.max(0, state.maxSeats - acquiredSeats);

    // Create block for each active party
    activeParties.forEach(p => {
        const block = document.createElement('div');
        block.className = `party-seat-block ${p.seats > 0 ? 'has-seats' : ''}`;
        block.setAttribute('data-party', p.name);
        
        block.innerHTML = `
            <div class="block-party-name">${p.name}</div>
            <div class="block-seats-count">${p.seats}</div>
        `;
        track.appendChild(block);
    });

    // Append 'Remaining' (残) block
    const remainingBlock = document.createElement('div');
    remainingBlock.className = 'party-seat-block';
    remainingBlock.setAttribute('data-party', '残');
    remainingBlock.innerHTML = `
        <div class="block-party-name">残</div>
        <div class="block-seats-count">${remainingSeats}</div>
    `;
    track.appendChild(remainingBlock);

    // Also update values in Editor summary
    document.getElementById('editor-total-acquired').innerText = acquiredSeats;
    document.getElementById('editor-total-remaining').innerText = remainingSeats;
}

// --- Sidebar Control Sync Engine (Inputs -> State) ---
function initControls() {
    // Top Tickers inputs
    bindInput('input-ticker-title', 'tickerTitle');
    bindInput('input-ticker-line1', 'tickerLine1');
    bindInput('input-ticker-line2', 'tickerLine2');

    // Board Mode & Featured District bindings
    bindInput('select-board-mode', 'boardMode', (val) => {
        state.boardMode = val;
        // Toggle configuration form visibility
        const settingsNews = document.getElementById('settings-mode-news');
        const settingsFeatured = document.getElementById('settings-mode-featured');
        if (settingsNews && settingsFeatured) {
            if (val === 'mode-news') {
                settingsNews.style.display = 'block';
                settingsFeatured.style.display = 'none';
            } else if (val === 'mode-featured') {
                settingsNews.style.display = 'none';
                settingsFeatured.style.display = 'block';
            } else {
                settingsNews.style.display = 'none';
                settingsFeatured.style.display = 'none';
            }
        }
    });
    bindInput('input-feat-district', 'featured.district', (val) => state.featured.district = val);
    bindInput('input-feat-status', 'featured.status', (val) => state.featured.status = val);
    bindInput('input-feat-party-1', 'featured.cand1.party', (val) => state.featured.cand1.party = val);
    bindInput('input-feat-name-1', 'featured.cand1.name', (val) => state.featured.cand1.name = val);
    bindInput('input-feat-votes-1', 'featured.cand1.votes', (val) => state.featured.cand1.votes = Number(val));
    bindInput('select-feat-avatar-1', 'featured.cand1.avatar', (val) => state.featured.cand1.avatar = val);
    bindInput('input-feat-party-2', 'featured.cand2.party', (val) => state.featured.cand2.party = val);
    bindInput('input-feat-name-2', 'featured.cand2.name', (val) => state.featured.cand2.name = val);
    bindInput('input-feat-votes-2', 'featured.cand2.votes', (val) => state.featured.cand2.votes = Number(val));
    bindInput('select-feat-avatar-2', 'featured.cand2.avatar', (val) => state.featured.cand2.avatar = val);

    // Central Card 1
    bindInput('input-card1-party', 'card1.party', (val) => state.card1.party = val);
    bindInput('input-card1-desc', 'card1.desc', (val) => state.card1.desc = val);
    bindInput('select-card1-color', 'card1.theme', (val) => state.card1.theme = val);
    bindInput('select-avatar1-type', 'card1.avatar', (val) => state.card1.avatar = val);

    // Central Card 2
    bindInput('input-card2-party', 'card2.party', (val) => state.card2.party = val);
    bindInput('input-card2-desc', 'card2.desc', (val) => state.card2.desc = val);
    bindInput('select-card2-color', 'card2.theme', (val) => state.card2.theme = val);
    bindInput('select-avatar2-type', 'card2.avatar', (val) => state.card2.avatar = val);

    // Studio & Ambient
    bindInput('select-bg-style', 'bgStyle');
    bindCheckbox('check-ambient-anim', 'ambientAnim');
    bindCheckbox('check-scanline', 'scanlines');
    bindCheckbox('check-sound-effect', 'soundOn');

    // Sound Test Button
    document.getElementById('btn-sound-test').addEventListener('click', () => {
        soundSynth.playChime();
    });

    // Candidate Bulletin
    bindCheckbox('check-candidate-show', 'showCandidate', (checked) => {
        state.showCandidate = checked;
        if (checked && state.soundOn) {
            soundSynth.playChime();
        }
    });
    bindInput('input-cand-name', 'candidate.name', (val) => state.candidate.name = val);
    bindInput('input-cand-age', 'candidate.age', (val) => state.candidate.age = Number(val));
    bindInput('input-cand-wins', 'candidate.wins', (val) => state.candidate.wins = val);
    bindInput('input-cand-district', 'candidate.district', (val) => state.candidate.district = val);
    bindInput('input-cand-title', 'candidate.title', (val) => state.candidate.title = val);
    bindInput('select-cand-badge', 'candidate.badge', (val) => state.candidate.badge = val);
    bindInput('select-caster-avatar', 'casterAvatar');

    // Split party & status for bottom label
    bindInput('input-cand-party', 'candidate.rawParty', (val) => {
        state.candidate.rawParty = val;
    });
    bindInput('select-cand-status', 'candidate.rawStatus', (val) => {
        state.candidate.rawStatus = val;
    });

    // Build the seats editors inputs dynamically
    renderSeatsEditorList();

    // Tab buttons functionality
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const targetId = tab.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Preset Select Dropdown
    const presetSelect = document.getElementById('preset-select');
    presetSelect.addEventListener('change', (e) => {
        loadPreset(e.target.value);
    });

    // Fullscreen toggles
    const fullscreenBtn = document.getElementById('btn-toggle-fullscreen');
    const exitFullscreenBtn = document.getElementById('btn-exit-fullscreen');
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    exitFullscreenBtn.addEventListener('click', exitFullscreen);

    // Keyboard support for exiting fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            exitFullscreen();
        }
    });

    // シミュレーションコントロールの初期化
    initSimulationControls();
}

// Utility to bind standard input/select changes to state
function bindInput(elementId, statePath, customSetter = null) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.addEventListener('input', (e) => {
        const val = e.target.value;
        if (customSetter) {
            customSetter(val);
        } else {
            setValueByPath(state, statePath, val);
        }
        updateDOM();
    });
}

// Utility to bind checkboxes to state
function bindCheckbox(elementId, statePath, customSetter = null) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.addEventListener('change', (e) => {
        const checked = e.target.checked;
        if (customSetter) {
            customSetter(checked);
        } else {
            setValueByPath(state, statePath, checked);
        }
        updateDOM();
    });
}

// Helper to set nested object properties
function setValueByPath(obj, path, value) {
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
}

// Render dynamic seat counters in control panel
function renderSeatsEditorList() {
    const container = document.getElementById('seats-editor-container');
    container.innerHTML = '';

    state.parties.forEach((party, index) => {
        const row = document.createElement('div');
        row.className = 'seat-row-edit';
        
        row.innerHTML = `
            <span class="party-label-edit">
                <span class="color-indicator" style="background-color: ${getPartyColor(party.name)}"></span>
                ${party.name}
            </span>
            <input type="number" min="0" max="500" value="${party.seats}" id="editor-seat-input-${index}">
            <div style="display:flex; gap: 4px;">
                <button class="secondary-btn" style="padding:4px 8px; margin:0;" onclick="adjustSeat(${index}, 1)">+</button>
                <button class="secondary-btn" style="padding:4px 8px; margin:0;" onclick="adjustSeat(${index}, -1)">-</button>
            </div>
        `;
        container.appendChild(row);

        // Bind events manually for the dynamic input
        const input = document.getElementById(`editor-seat-input-${index}`);
        input.addEventListener('input', (e) => {
            const val = Math.max(0, Number(e.target.value));
            state.parties[index].seats = val;
            updateDOM();
        });
    });
}

// Global scope helpers for dynamic button clicks
window.adjustSeat = function(index, delta) {
    const current = Number(state.parties[index].seats);
    const newVal = Math.max(0, current + delta);
    state.parties[index].seats = newVal;
    
    // Update input field on UI
    const input = document.getElementById(`editor-seat-input-${index}`);
    if (input) input.value = newVal;

    updateDOM();
};

function getPartyColor(partyName) {
    const colorMap = {
        '自民': '#A31313',
        '立民': '#005CAF',
        '公明': '#db2777',
        '共産': '#8b5cf6',
        '維新': '#b45309',
        '国民': '#0d9488',
        'れ新': '#d946ef',
        '社民': '#e11d48',
        'N党': '#84cc16',
        '参政': '#ea580c',
        '保守': '#0ea5e9',
        '無・他': '#4b5563',
        '残': '#1f2937'
    };
    return colorMap[partyName] || '#6b7280';
}

// --- Load Presets ---
function loadPreset(presetName) {
    const preset = PRESETS[presetName];
    if (!preset) return;

    // Apply values to state
    state.tickerTitle = preset.tickerTitle;
    state.tickerLine1 = preset.tickerLine1;
    state.tickerLine2 = preset.tickerLine2;
    
    state.card1 = { ...preset.card1 };
    state.card2 = { ...preset.card2 };
    
    state.boardMode = preset.boardMode || "mode-news";
    state.bgStyle = preset.bgStyle;
    state.showCandidate = preset.showCandidate;
    state.candidate = { ...preset.candidate };
    state.casterAvatar = preset.casterAvatar;
    state.maxSeats = preset.maxSeats;

    // Reset Featured district to preset or default values
    const presetFeatured = preset.featured || {
        district: "東京1区",
        status: "接戦激突！",
        cand1: { party: "自民", name: "山田 太郎", votes: 85200, avatar: "man-young" },
        cand2: { party: "立民", name: "佐藤 花子", votes: 78900, avatar: "woman-young" }
    };
    state.featured = {
        district: presetFeatured.district,
        status: presetFeatured.status,
        cand1: { ...presetFeatured.cand1 },
        cand2: { ...presetFeatured.cand2 }
    };

    // Copy parties array correctly
    state.parties = preset.parties.map(p => ({ ...p, active: true }));

    // Sync input controls values with new state
    document.getElementById('input-ticker-title').value = state.tickerTitle;
    document.getElementById('input-ticker-line1').value = state.tickerLine1;
    document.getElementById('input-ticker-line2').value = state.tickerLine2;

    const boardModeSelect = document.getElementById('select-board-mode');
    if (boardModeSelect) boardModeSelect.value = state.boardMode;
    const settingsNews = document.getElementById('settings-mode-news');
    const settingsFeatured = document.getElementById('settings-mode-featured');
    if (settingsNews && settingsFeatured) {
        if (state.boardMode === 'mode-news') {
            settingsNews.style.display = 'block';
            settingsFeatured.style.display = 'none';
        } else if (state.boardMode === 'mode-featured') {
            settingsNews.style.display = 'none';
            settingsFeatured.style.display = 'block';
        } else {
            settingsNews.style.display = 'none';
            settingsFeatured.style.display = 'none';
        }
    }

    document.getElementById('input-card1-party').value = state.card1.party;
    document.getElementById('input-card1-desc').value = state.card1.desc;
    document.getElementById('select-card1-color').value = state.card1.theme;
    document.getElementById('select-avatar1-type').value = state.card1.avatar;

    document.getElementById('input-card2-party').value = state.card2.party;
    document.getElementById('input-card2-desc').value = state.card2.desc;
    document.getElementById('select-card2-color').value = state.card2.theme;
    document.getElementById('select-avatar2-type').value = state.card2.avatar;

    document.getElementById('select-bg-style').value = state.bgStyle;
    document.getElementById('check-candidate-show').checked = state.showCandidate;
    document.getElementById('select-caster-avatar').value = state.casterAvatar;

    document.getElementById('input-cand-name').value = state.candidate.name;
    document.getElementById('input-cand-age').value = state.candidate.age;
    document.getElementById('input-cand-wins').value = state.candidate.wins;
    document.getElementById('input-cand-district').value = state.candidate.district;
    document.getElementById('input-cand-title').value = state.candidate.title;
    document.getElementById('select-cand-badge').value = state.candidate.badge;
    document.getElementById('input-cand-party').value = state.candidate.rawParty;
    document.getElementById('select-cand-status').value = state.candidate.rawStatus;

    // Sync Featured inputs
    const setFeatVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
    setFeatVal('input-feat-district', state.featured.district);
    setFeatVal('input-feat-status', state.featured.status);
    setFeatVal('input-feat-party-1', state.featured.cand1.party);
    setFeatVal('input-feat-name-1', state.featured.cand1.name);
    setFeatVal('input-feat-votes-1', state.featured.cand1.votes);
    setFeatVal('select-feat-avatar-1', state.featured.cand1.avatar);
    setFeatVal('input-feat-party-2', state.featured.cand2.party);
    setFeatVal('input-feat-name-2', state.featured.cand2.name);
    setFeatVal('input-feat-votes-2', state.featured.cand2.votes);
    setFeatVal('select-feat-avatar-2', state.featured.cand2.avatar);

    // Hide overlay
    const overlay = document.getElementById('tv-complete-overlay');
    if (overlay) overlay.classList.remove('show');

    // Refresh dynamic lists
    renderSeatsEditorList();
    updateDOM();

    // Sound alert
    if (state.soundOn) {
        soundSynth.playChime();
    }
}

// --- Fullscreen Manager ---
function toggleFullscreen() {
    const elem = document.getElementById('tv-monitor-wrapper');
    
    // Toggle CSS class first for custom fallback layout styling
    document.body.classList.add('fullscreen');

    // Trigger browser fullscreen if supported
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function exitFullscreen() {
    document.body.classList.remove('fullscreen');
    
    if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen().catch(() => {});
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen().catch(() => {});
    }
}

// Handle browser-native fullscreen change events (e.g. Esc button pressed)
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.body.classList.remove('fullscreen');
    }
});

// --- Bootstrapping App ---
window.addEventListener('DOMContentLoaded', () => {
    initControls();
    updateDOM();
    startClock();
});

// Real-time TV clock
function startClock() {
    function tick() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        const timeEl = document.getElementById('tv-clock-time');
        const dateEl = document.getElementById('tv-clock-date');
        if (timeEl) timeEl.textContent = `${h}:${m}:${s}`;
        if (dateEl) {
            const y = now.getFullYear();
            const mo = String(now.getMonth() + 1).padStart(2, '0');
            const d = String(now.getDate()).padStart(2, '0');
            dateEl.textContent = `${y}.${mo}.${d}`;
        }
    }
    tick();
    setInterval(tick, 1000);
}

// Render Seat Bar Graph (proportional seats visualization)
function renderSeatBarGraph() {
    const track = document.getElementById('tv-seat-bar-track');
    const majorityLine = document.getElementById('tv-seat-bar-majority-line');
    if (!track) return;

    const activeParties = state.parties.filter(p => p.name !== '残' && p.seats > 0);
    const totalAcquired = activeParties.reduce((sum, p) => sum + Number(p.seats), 0);

    if (totalAcquired === 0) {
        track.innerHTML = '<div class="seat-bar-empty">開票待ち...</div>';
        if (majorityLine) majorityLine.style.display = 'none';
        return;
    }

    track.innerHTML = '';
    // Sort by seats descending
    const sorted = [...activeParties].sort((a, b) => b.seats - a.seats);

    sorted.forEach(p => {
        const pct = (Number(p.seats) / state.maxSeats) * 100;
        const color = getPartyColor(p.name);
        const seg = document.createElement('div');
        seg.className = 'seat-bar-seg';
        seg.style.width = `${pct}%`;
        seg.style.backgroundColor = color;
        seg.title = `${p.name}: ${p.seats}議席 (${pct.toFixed(1)}%)`;
        seg.innerHTML = pct > 3 ? `<span class="seat-bar-label">${p.name}<br><b>${p.seats}</b></span>` : '';
        track.appendChild(seg);
    });

    // Majority line marker
    if (majorityLine) {
        // Use sim engine's majorityLine if running, otherwise calculate from maxSeats
        const halfSeats = Math.ceil(state.maxSeats / 2);
        const majorityCount = (typeof simEngine !== 'undefined' && simEngine.majorityLine)
            ? simEngine.majorityLine
            : halfSeats;
        const majorityPct = (majorityCount / state.maxSeats) * 100;
        if (majorityPct < 100) {
            majorityLine.style.display = 'block';
            majorityLine.style.left = `${majorityPct}%`;
            majorityLine.title = `過半数: ${majorityCount}議席`;
        } else {
            majorityLine.style.display = 'none';
        }
    }
}

// ==========================================================================
// 仮想選挙シミュレーションエンジン
// ==========================================================================

// --- 候補者名プール ---
const SIM_SURNAMES = [
    '田中', '佐藤', '鈴木', '高橋', '伊藤', '渡辺', '山本', '中村', '小林', '加藤',
    '吉田', '山田', '山口', '松本', '井上', '木村', '林', '斎藤', '清水', '山崎',
    '森', '池田', '橋本', '阿部', '石川', '前田', '小川', '岡田', '長谷川', '藤田',
    '近藤', '村上', '遠藤', '青木', '坂本', '太田', '西村', '松田', '原田', '中島',
    '河野', '野田', '岸田', '菅', '安倍', '石破', '茂木', '玉木', '枝野', '馬場'
];
const SIM_GIVEN_M = ['太郎', '一郎', '健一', '浩二', '誠', '博之', '修', '直樹', '雄一', '達也', '翔太', '大輝', '康平', '龍太', '亮介', '光', '勇気', '浩', '聡', '武'];
const SIM_GIVEN_F = ['花子', '美穂', '恵子', '智子', '裕子', '桃子', '彩', '美咲', '千夏', '葵', '紀子', '由美', '春香', '奈々', '百合子', '麻衣', '真由美', '梨花', '沙織', '優子'];
const SIM_DISTRICTS = [
    '東京1区', '東京3区', '東京5区', '東京7区', '東京10区', '東京13区', '東京18区', '東京22区',
    '大阪1区', '大阪2区', '大阪3区', '大阪5区', '大阪7区', '大阪9区', '大阪15区',
    '神奈川1区', '神奈川4区', '神奈川7区', '神奈川11区', '神奈川15区', '神奈川18区',
    '愛知1区', '愛知3区', '愛知5区', '愛知7区', '愛知10区',
    '埼玉1区', '埼玉3区', '埼玉5区', '埼玉7区', '埼玉10区',
    '千葉1区', '千葉3区', '千葉5区', '千葉7区',
    '兵庫1区', '兵庫3区', '兵庫5区', '兵庫7区',
    '北海道1区', '北海道3区', '北海道5区', '北海道7区',
    '福岡1区', '福岡3区', '福岡5区', '福岡7区',
    '静岡1区', '静岡4区', '静岡7区',
    '広島1区', '広島3区', '広島5区',
    '比例代表 近畿', '比例代表 東京', '比例代表 南関東', '比例代表 東海', '比例代表 北陸信越',
    '比例代表 北海道', '比例代表 東北', '比例代表 北関東', '比例代表 九州', '比例代表 中国'
];
const SIM_TITLES = [
    '元国土交通大臣', '元厚生労働大臣', '元防衛大臣', '元総務大臣', '元財務副大臣',
    '元文部科学大臣', '元経済産業副大臣', '元農林水産大臣', '元外務副大臣', '元内閣官房長官',
    '元市長', '前衆院議員', '元参院議員', '元県知事', '元内閣府副大臣',
    '党政調会長', '党国対委員長', '党幹事長代理', '元弁護士', '元医師',
    '元教授', '元アナウンサー', '元スポーツ選手', '党青年局長', '元官僚'
];
const SIM_STATUSES = ['前', '前', '前', '元', '新', '新']; // 前職が多め

// --- 政党テーママッピング（シミュレーション時のカード色） ---
const PARTY_THEMES_SIM = {
    '自民': { theme: 'party-jimin',    avatar: 'man-old' },
    '立民': { theme: 'party-ritumin',  avatar: 'man-middle' },
    '維新': { theme: 'party-ishin',    avatar: 'man-young' },
    '公明': { theme: 'party-komei',    avatar: 'woman-middle' },
    '国民': { theme: 'party-ritumin',  avatar: 'man-young' },
    '共産': { theme: 'party-kyosan',   avatar: 'woman-middle' },
    'れ新': { theme: 'party-kyosan',   avatar: 'woman-young' },
    '社民': { theme: 'party-komei',    avatar: 'woman-young' },
    'N党':  { theme: 'party-ishin',    avatar: 'man-young' },
    '参政': { theme: 'party-ishin',    avatar: 'man-young' },
    '保守': { theme: 'party-ritumin',  avatar: 'man-young' },
    '無・他':{ theme: 'party-ishin',   avatar: 'man-old' }
};

// --- 政党略称マッピング ---
const PARTY_SHORTS_SIM = {
    '自民': '自', '立民': '立', '公明': '公', '共産': '共',
    '維新': '維', '国民': '国', 'れ新': 'れ', '社民': '社', 'N党': 'N',
    '参政': '参', '保守': '保', '無・他': '無'
};

// --- シミュレーションシナリオ定義 ---
const SIMULATION_SCENARIOS = {
    'sim-standard': {
        name: '衆院選2021風 (自民大勝)',
        maxSeats: 465,
        majorityLine: 233,
        bgStyle: 'bg-studio-dark',
        tickerTitle: '衆院選',
        parties: [
            { name: '自民', seats: 0 }, { name: '立民', seats: 0 }, { name: '公明', seats: 0 },
            { name: '共産', seats: 0 }, { name: '維新', seats: 0 }, { name: '国民', seats: 0 },
            { name: 'れ新', seats: 0 }, { name: '社民', seats: 0 }, { name: 'N党', seats: 0 },
            { name: '無・他', seats: 0 }
        ],
        targets: {
            '自民': 261, '立民': 96, '維新': 41, '公明': 32,
            '国民': 11, '共産': 10, 'れ新': 3, '社民': 1, 'N党': 1, '無・他': 9
        },
        featured: {
            district: "東京1区",
            status: "接戦激突！",
            cand1: { party: "自民", name: "山田 太郎", votes: 0, avatar: "man-young" },
            cand2: { party: "立民", name: "佐藤 花子", votes: 0, avatar: "woman-young" }
        }
    },
    'sim-surprise': {
        name: '野党大逆転！サプライズ選挙',
        maxSeats: 465,
        majorityLine: 233,
        bgStyle: 'bg-studio-cyber',
        tickerTitle: '衆院選',
        parties: [
            { name: '自民', seats: 0 }, { name: '立民', seats: 0 }, { name: '公明', seats: 0 },
            { name: '共産', seats: 0 }, { name: '維新', seats: 0 }, { name: '国民', seats: 0 },
            { name: 'れ新', seats: 0 }, { name: '社民', seats: 0 }, { name: 'N党', seats: 0 },
            { name: '無・他', seats: 0 }
        ],
        targets: {
            '自民': 149, '立民': 210, '維新': 48, '公明': 21,
            '国民': 16, '共産': 8, 'れ新': 6, '社民': 2, 'N党': 1, '無・他': 4
        },
        featured: {
            district: "神奈川11区",
            status: "大物接戦！",
            cand1: { party: "自民", name: "小泉 進次郎", votes: 0, avatar: "man-young" },
            cand2: { party: "無・他", name: "鈴木 一郎", votes: 0, avatar: "man-old" }
        }
    },
    'sim-sangiin': {
        name: '参院選2025風 (大混戦)',
        maxSeats: 248,
        majorityLine: 125,
        bgStyle: 'bg-studio-dark',
        tickerTitle: '参院選',
        parties: [
            { name: '自民', seats: 0 }, { name: '立民', seats: 0 }, { name: '公明', seats: 0 },
            { name: '共産', seats: 0 }, { name: '維新', seats: 0 }, { name: '国民', seats: 0 },
            { name: 'れ新', seats: 0 }, { name: '社民', seats: 0 }, { name: '無・他', seats: 0 }
        ],
        targets: {
            '自民': 62, '立民': 47, '維新': 35, '公明': 26,
            '国民': 22, '共産': 12, 'れ新': 17, '社民': 4, '無・他': 23
        },
        featured: {
            district: "東京選挙区",
            status: "改選大混戦",
            cand1: { party: "自民", name: "丸川 葵", votes: 0, avatar: "woman-middle" },
            cand2: { party: "維新", name: "吉村 翔太", votes: 0, avatar: "man-young" }
        }
    },
    'sim-close': {
        name: '超接戦！連立政権か政界再編か',
        maxSeats: 465,
        majorityLine: 233,
        bgStyle: 'bg-studio-gold',
        tickerTitle: '総選挙',
        parties: [
            { name: '自民', seats: 0 }, { name: '立民', seats: 0 }, { name: '公明', seats: 0 },
            { name: '共産', seats: 0 }, { name: '維新', seats: 0 }, { name: '国民', seats: 0 },
            { name: 'れ新', seats: 0 }, { name: '社民', seats: 0 }, { name: '無・他', seats: 0 }
        ],
        targets: {
            '自民': 212, '立民': 192, '維新': 28, '公明': 16,
            '国民': 8, '共産': 5, 'れ新': 2, '社民': 1, '無・他': 1
        },
        featured: {
            district: "大阪10区",
            status: "1票の攻防",
            cand1: { party: "自民", name: "大和 浩", votes: 0, avatar: "man-middle" },
            cand2: { party: "維新", name: "浪速 勇気", votes: 0, avatar: "man-young" }
        }
    },
    'sim-51shuin': {
        name: '第51回衆院選 (2024年史実)',
        maxSeats: 465,
        majorityLine: 233,
        bgStyle: 'bg-studio-dark',
        tickerTitle: '衆院選',
        parties: [
            { name: '自民', seats: 0 }, { name: '立民', seats: 0 }, { name: '維新', seats: 0 },
            { name: '国民', seats: 0 }, { name: '公明', seats: 0 }, { name: 'れ新', seats: 0 },
            { name: '共産', seats: 0 }, { name: '参政', seats: 0 }, { name: '保守', seats: 0 },
            { name: '社民', seats: 0 }, { name: '無・他', seats: 0 }
        ],
        targets: {
            '自民': 191, '立民': 148, '維新': 38, '国民': 28, '公明': 24,
            'れ新': 9, '共産': 8, '参政': 3, '保守': 3, '社民': 1, '無・他': 12
        },
        featured: {
            district: "東京24区",
            status: "因縁対決！",
            cand1: { party: "自民", name: "萩生田 光", votes: 0, avatar: "man-old" },
            cand2: { party: "立民", name: "有田 芳生", votes: 0, avatar: "man-middle" }
        }
    }
};

// ==========================================================================
// SimulationEngine クラス
// ==========================================================================
class SimulationEngine {
    constructor() {
        this.isRunning   = false;
        this.isPaused    = false;
        this.intervalId  = null;
        this.speed       = 1000; // ms per event
        this.step        = 0;
        this.announcements = [];
        this.majorityLine  = 233;
        this.milestones    = new Set(); // 既に通知したマイルストーン
    }

    // ランダム候補者を生成
    _genCandidate(partyName) {
        const isFemale = Math.random() < 0.3;
        const surname   = SIM_SURNAMES[Math.floor(Math.random() * SIM_SURNAMES.length)];
        const given     = isFemale
            ? SIM_GIVEN_F[Math.floor(Math.random() * SIM_GIVEN_F.length)]
            : SIM_GIVEN_M[Math.floor(Math.random() * SIM_GIVEN_M.length)];
        const status    = SIM_STATUSES[Math.floor(Math.random() * SIM_STATUSES.length)];
        return {
            type:       'candidate',
            party:      partyName,
            partyShort: PARTY_SHORTS_SIM[partyName] || partyName.substring(0, 2),
            name:       `${surname} ${given}`,
            district:   SIM_DISTRICTS[Math.floor(Math.random() * SIM_DISTRICTS.length)],
            title:      SIM_TITLES[Math.floor(Math.random() * SIM_TITLES.length)],
            age:        25 + Math.floor(Math.random() * 55),
            status:     status,
            wins:       status === '新' ? '初当選' : `${1 + Math.floor(Math.random() * 8)}回目`,
            badge:      '確'
        };
    }

    // Fisher-Yates シャッフル
    _shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // 政党を均等に混ぜるシャッフル（加重ランダム）
    _interleave(byParty) {
        const result  = [];
        const keys    = Object.keys(byParty).filter(k => byParty[k].length > 0);
        const buckets = {};
        keys.forEach(k => buckets[k] = [...byParty[k]]);

        while (true) {
            const available = Object.keys(buckets).filter(k => buckets[k].length > 0);
            if (available.length === 0) break;
            // √残数 で重み付け → 多い党が連続しすぎないように
            const weights     = available.map(k => Math.sqrt(buckets[k].length));
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            let rand = Math.random() * totalWeight;
            let chosen = available[0];
            for (let i = 0; i < available.length; i++) {
                rand -= weights[i];
                if (rand <= 0) { chosen = available[i]; break; }
            }
            result.push(buckets[chosen].shift());
        }
        return result;
    }

    // シナリオを読み込み、発表シーケンスを構築
    buildAnnouncements(scenarioKey) {
        const scenario = SIMULATION_SCENARIOS[scenarioKey];
        if (!scenario) return;

        this.majorityLine = scenario.majorityLine;
        this.milestones.clear();

        const byParty = {};
        for (const [partyName, count] of Object.entries(scenario.targets)) {
            byParty[partyName] = [];
            for (let i = 0; i < count; i++) {
                byParty[partyName].push(this._genCandidate(partyName));
            }
            // 各党内でもシャッフル
            byParty[partyName] = this._shuffle(byParty[partyName]);
        }

        this.announcements = this._interleave(byParty);
        this.step = 0;
    }

    // シナリオをリセットして state を再構築
    reset(scenarioKey, updateUI = true) {
        this.pause();
        this.isPaused = false;
        this.step = 0;
        this.milestones.clear();

        const scenario = SIMULATION_SCENARIOS[scenarioKey];
        if (!scenario) return;

        // state.parties をシナリオのパーティーリストで上書き
        state.parties = scenario.parties.map(p => ({ ...p, seats: 0, active: true }));
        state.maxSeats   = scenario.maxSeats;
        state.bgStyle    = scenario.bgStyle;
        state.tickerTitle = scenario.tickerTitle;
        state.tickerLine1 = `${scenario.name} — まもなく開票速報を開始します`;
        state.tickerLine2 = `総議席 ${scenario.maxSeats}  過半数ライン ${scenario.majorityLine}議席`;
        state.showCandidate = false;

        // 注目選挙区の初期化
        const scenarioFeatured = scenario.featured || {
            district: "東京1区",
            status: "接戦激突！",
            cand1: { party: "自民", name: "山田 太郎", votes: 0, avatar: "man-young" },
            cand2: { party: "立民", name: "佐藤 花子", votes: 0, avatar: "woman-young" }
        };

        state.featured = {
            district: scenarioFeatured.district,
            status: scenarioFeatured.status,
            cand1: { ...scenarioFeatured.cand1, votes: 0 },
            cand2: { ...scenarioFeatured.cand2, votes: 0 }
        };

        // サイドバーのインプット値も同期
        const setFeatVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
        setFeatVal('input-feat-district', state.featured.district);
        setFeatVal('input-feat-status', state.featured.status);
        setFeatVal('input-feat-party-1', state.featured.cand1.party);
        setFeatVal('input-feat-name-1', state.featured.cand1.name);
        setFeatVal('input-feat-votes-1', state.featured.cand1.votes);
        setFeatVal('select-feat-avatar-1', state.featured.cand1.avatar);
        setFeatVal('input-feat-party-2', state.featured.cand2.party);
        setFeatVal('input-feat-name-2', state.featured.cand2.name);
        setFeatVal('input-feat-votes-2', state.featured.cand2.votes);
        setFeatVal('select-feat-avatar-2', state.featured.cand2.avatar);

        // Hide overlay
        const overlay = document.getElementById('tv-complete-overlay');
        if (overlay) overlay.classList.remove('show');

        // シナリオカード初期状態
        state.card1 = { party: '開票待ち', desc: '各地で開票作業が進む...', theme: 'party-ritumin', avatar: 'man-old' };
        state.card2 = { party: '情報収集中', desc: 'まもなく最初の結果が...', theme: 'party-ishin', avatar: 'man-middle' };

        this.buildAnnouncements(scenarioKey);

        if (updateUI) {
            renderSeatsEditorList();
            updateDOM();
            this.updateSimUI();
            this.updateSimProgressUI();
            // 過半数ラインテキスト更新
            const majorityEl = document.getElementById('sim-majority-text');
            if (majorityEl) majorityEl.textContent = `過半数ライン: ${scenario.majorityLine}議席`;
        }
    }

    // 速度設定（ms）
    setSpeed(ms) {
        this.speed = ms;
        if (this.isRunning) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(() => this.tick(), this.speed);
        }
    }

    // 開始
    start(scenarioKey) {
        if (this.isRunning) return;

        // まだ一度もビルドしていない or 初回の場合リセット
        if (this.step === 0 && this.announcements.length === 0) {
            this.reset(scenarioKey, false);
        }
        // シナリオ切り替えが必要な場合（ステップ0ならリセット）
        if (this.step === 0) {
            this.reset(scenarioKey, true);
        }

        this.isRunning = true;
        this.isPaused  = false;
        this.intervalId = setInterval(() => this.tick(), this.speed);
        this.updateSimUI();
    }

    // 一時停止
    pause() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.isRunning = false;
        if (this.step > 0) this.isPaused = true;
        this.updateSimUI();
    }

    // 再開
    resume() {
        if (!this.isPaused) return;
        this.isRunning = true;
        this.isPaused  = false;
        this.intervalId = setInterval(() => this.tick(), this.speed);
        this.updateSimUI();
    }

    // 1ティック処理
    tick() {
        if (this.step >= this.announcements.length) {
            this._handleElectionComplete();
            return;
        }

        const event = this.announcements[this.step];
        this._processEvent(event);
        this.step++;
        this.updateSimProgressUI();
    }

    // 個別イベント処理（1候補者の当確）
    _processEvent(event) {
        // 1. 議席カウントアップ
        const idx = state.parties.findIndex(p => p.name === event.party);
        if (idx >= 0) {
            state.parties[idx].seats = Number(state.parties[idx].seats) + 1;
            // サイドバーの入力欄も同期
            const input = document.getElementById(`editor-seat-input-${idx}`);
            if (input) input.value = state.parties[idx].seats;
        }

        // 2. 当確テロップ更新
        state.candidate = {
            badge:     event.badge,
            wins:      event.wins,
            district:  event.district,
            title:     event.title,
            name:      event.name,
            age:       event.age,
            rawParty:  event.partyShort,
            rawStatus: event.status
        };
        state.showCandidate = true;

        // 3. チャイム
        if (state.soundOn) soundSynth.playChime();

        // 4. 中央カードを現在の上位2党で更新
        this._updateBoardCards();

        // 5. テロップテキスト更新
        this._updateTickerText(event);

        // 5.5 注目選挙区の得票をシミュレーションの進捗に合わせて自動加算
        if (state.boardMode === 'mode-featured' && this.announcements.length > 0) {
            const progress = (this.step + 1) / this.announcements.length;
            const target1 = 112500;
            const target2 = 109000;
            const base1 = Math.round(target1 * progress);
            const base2 = Math.round(target2 * progress);
            const noise1 = -1000 + Math.floor(Math.random() * 2000);
            const noise2 = -1000 + Math.floor(Math.random() * 2000);
            
            state.featured.cand1.votes = Math.max(0, base1 + noise1);
            state.featured.cand2.votes = Math.max(0, base2 + noise2);
            
            const votes1El = document.getElementById('input-feat-votes-1');
            const votes2El = document.getElementById('input-feat-votes-2');
            if (votes1El) votes1El.value = state.featured.cand1.votes;
            if (votes2El) votes2El.value = state.featured.cand2.votes;
        }

        // 6. DOM更新
        updateDOM();

        // 7. 議席ブロックのフラッシュアニメ
        this._flashSeatBlock(event.party);

        // 8. マイルストーン確認（過半数, 100議席など）
        this._checkMilestones();

        // 9. サイドバーの「当確速報」タブの入力を同期
        this._syncCandidateSidebarInputs();
    }

    _updateBoardCards() {
        const sorted = [...state.parties]
            .filter(p => p.seats > 0)
            .sort((a, b) => b.seats - a.seats);

        if (sorted.length >= 1) {
            const p1   = sorted[0];
            const t1   = PARTY_THEMES_SIM[p1.name] || { theme: 'party-ritumin', avatar: 'man-old' };
            state.card1.party  = p1.name;
            state.card1.theme  = t1.theme;
            state.card1.avatar = t1.avatar;
            if (p1.seats >= this.majorityLine) {
                state.card1.desc = `過半数${this.majorityLine}を突破！`;
            } else if (p1.seats >= Math.floor(this.majorityLine * 0.85)) {
                state.card1.desc = `過半数まであと${this.majorityLine - p1.seats}議席`;
            } else {
                state.card1.desc = `${p1.seats}議席 首位！`;
            }
        }

        if (sorted.length >= 2) {
            const p2   = sorted[1];
            const t2   = PARTY_THEMES_SIM[p2.name] || { theme: 'party-ishin', avatar: 'man-middle' };
            state.card2.party  = p2.name;
            state.card2.theme  = t2.theme;
            state.card2.avatar = t2.avatar;
            const diff = sorted[0].seats - p2.seats;
            state.card2.desc = diff <= 5 ? `猛追中！差${diff}議席` : `${p2.seats}議席 追走`;
        } else {
            state.card2.party = '他';
            state.card2.desc  = 'まもなく...';
            state.card2.theme = 'party-ishin';
            state.card2.avatar = 'man-middle';
        }
    }

    _updateTickerText(event) {
        const total  = state.parties.reduce((s, p) => s + Number(p.seats), 0);
        const sorted = [...state.parties].sort((a, b) => b.seats - a.seats);
        const leader = sorted[0];
        const second = sorted.find(p => p.name !== leader.name && p.seats > 0);
        const rate   = Math.round((total / state.maxSeats) * 100);

        // マイルストーンは _checkMilestones で処理するため通常ローテーション
        const msgIndex = this.step % 5;
        switch (msgIndex) {
            case 0:
                state.tickerLine1 = `開票速報 ${total}/${state.maxSeats}議席確定 (開票率${rate}%)`;
                state.tickerLine2 = `${event.district} ${event.party}・${event.name}氏 当選確実`;
                break;
            case 1:
                state.tickerLine1 = `${leader.name}がトップ ${leader.seats}議席${second ? '　' + second.name + ' ' + second.seats + '議席' : ''}`;
                state.tickerLine2 = leader.seats >= this.majorityLine
                    ? `${leader.name}が単独過半数（${this.majorityLine}議席）を確保`
                    : `過半数まであと${this.majorityLine - leader.seats}議席`;
                break;
            case 2:
                state.tickerLine1 = `【速報】${event.party} ${event.name}氏（${event.district}）当確！`;
                state.tickerLine2 = `開票率${rate}% — 引き続き速報をお伝えします`;
                break;
            case 3:
                state.tickerLine1 = `開票作業が続く各地 — 計${total}議席が確定`;
                state.tickerLine2 = `${leader.name} ${leader.seats}議席で首位${second ? ' / ' + second.name + ' ' + second.seats + '議席' : ''}`;
                break;
            case 4:
                state.tickerLine1 = `【当確】${event.name}氏 (${event.party}・${event.status}) ${event.district}`;
                state.tickerLine2 = `${event.title} — ${event.wins}の当選`;
                break;
        }
    }

    _checkMilestones() {
        const sorted = [...state.parties].sort((a, b) => b.seats - a.seats);
        const leader = sorted[0];
        if (!leader || leader.seats === 0) return;

        // 過半数突破
        const majorityKey = `majority-${leader.name}`;
        if (leader.seats >= this.majorityLine && !this.milestones.has(majorityKey)) {
            this.milestones.add(majorityKey);
            state.tickerLine1 = `🎉【速報】${leader.name}が過半数（${this.majorityLine}議席）を確保！`;
            state.tickerLine2 = `単独での政権維持が確実となりました`;
            // バー全体をフラッシュ
            const bar = document.getElementById('tv-bottom-bar');
            if (bar) {
                bar.classList.add('milestone-flash');
                setTimeout(() => bar.classList.remove('milestone-flash'), 1300);
            }
            // 多重チャイム
            if (state.soundOn) {
                setTimeout(() => soundSynth.playChime(), 300);
                setTimeout(() => soundSynth.playChime(), 700);
            }
        }

        // 100議席突破マイルストーン
        const hundredKey = `hundred-${leader.name}`;
        if (leader.seats >= 100 && !this.milestones.has(hundredKey)) {
            this.milestones.add(hundredKey);
            state.tickerLine1 = `${leader.name} 100議席の大台を突破！`;
            state.tickerLine2 = `このまま首位をキープできるか注目`;
        }

        // 50議席マイルストーン（首位の政党が50議席）
        const fiftyKey = `fifty-${leader.name}`;
        if (leader.seats >= 50 && !this.milestones.has(fiftyKey)) {
            this.milestones.add(fiftyKey);
            state.tickerLine1 = `${leader.name}が50議席に到達！勢いが止まらない`;
            state.tickerLine2 = `他政党の追い上げはあるか`;
        }
    }

    _flashSeatBlock(partyName) {
        const track = document.getElementById('tv-seats-track');
        if (!track) return;
        track.querySelectorAll('.party-seat-block').forEach(block => {
            if (block.getAttribute('data-party') === partyName) {
                block.classList.remove('seat-flash');
                // 強制リフロー（アニメーション再実行のため）
                void block.offsetWidth;
                block.classList.add('seat-flash');
                setTimeout(() => block.classList.remove('seat-flash'), 700);
            }
        });
    }

    _handleElectionComplete() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.intervalId = null;

        const sorted = [...state.parties].sort((a, b) => b.seats - a.seats);
        const winner = sorted[0];

        state.tickerLine1 = `【確定】開票率100% — ${winner.name}が${winner.seats}議席で第一党`;
        state.tickerLine2 = winner.seats >= this.majorityLine
            ? `${winner.name}が過半数（${this.majorityLine}議席）を${winner.seats - this.majorityLine}議席上回り大勝！`
            : `過半数（${this.majorityLine}議席）に${this.majorityLine - winner.seats}議席届かず — 連立協議へ`;

        state.showCandidate = false;

        // Show overlay with summary text
        const overlay = document.getElementById('tv-complete-overlay');
        const summaryEl = document.getElementById('tv-complete-summary');
        const titleEl = document.getElementById('tv-complete-title');
        
        if (titleEl) {
            titleEl.textContent = `${state.tickerTitle || '衆院選'} 開票確定`;
        }
        if (summaryEl) {
            summaryEl.textContent = winner.seats >= this.majorityLine
                ? `${winner.name}が${winner.seats}議席を獲得し、単独過半数を確保しました`
                : `${winner.name}が${winner.seats}議席で第一党（過半数 ${this.majorityLine} に届かず、連立交渉へ）`;
        }
        if (overlay) {
            overlay.classList.add('show');
        }

        updateDOM();
        this.updateSimUI();

        // 終了ファンファーレ（3連チャイム）
        if (state.soundOn) {
            setTimeout(() => soundSynth.playChime(), 200);
            setTimeout(() => soundSynth.playChime(), 700);
            setTimeout(() => soundSynth.playChime(), 1200);
        }

        // 底バー全体フラッシュ
        const bar = document.getElementById('tv-bottom-bar');
        if (bar) {
            bar.classList.add('milestone-flash');
            setTimeout(() => bar.classList.remove('milestone-flash'), 1500);
        }
    }

    // サイドバーの「当確速報」タブ入力フィールドを同期
    _syncCandidateSidebarInputs() {
        const c = state.candidate;
        const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
        setVal('input-cand-name',      c.name);
        setVal('input-cand-age',       c.age);
        setVal('input-cand-wins',      c.wins);
        setVal('input-cand-district',  c.district);
        setVal('input-cand-title',     c.title);
        setVal('select-cand-badge',    c.badge);
        setVal('input-cand-party',     c.rawParty);
        setVal('select-cand-status',   c.rawStatus);
        const showEl = document.getElementById('check-candidate-show');
        if (showEl) showEl.checked = state.showCandidate;
    }

    // サイドバーのシミュレーションUI（ボタン・ドット）を更新
    updateSimUI() {
        const startBtn  = document.getElementById('sim-start-btn');
        const statusTxt = document.getElementById('sim-status-text');
        const liveDot   = document.getElementById('sim-live-indicator');

        if (!startBtn) return;

        if (this.isRunning) {
            startBtn.textContent = '⏸️ 一時停止';
            startBtn.className   = 'sim-pause-btn';
            if (statusTxt) statusTxt.textContent = '🔴 放送中...';
            if (liveDot)   liveDot.classList.add('live');
        } else if (this.step >= this.announcements.length && this.announcements.length > 0) {
            startBtn.textContent = '✅ 開票完了';
            startBtn.className   = 'sim-start-btn-el';
            startBtn.disabled    = true;
            if (statusTxt) statusTxt.textContent = '✅ 選挙終了';
            if (liveDot)   liveDot.classList.remove('live');
        } else {
            startBtn.textContent = this.isPaused ? '▶️ 再開' : '▶️ シミュレーション開始';
            startBtn.className   = 'sim-start-btn-el';
            startBtn.disabled    = false;
            if (statusTxt) statusTxt.textContent = this.isPaused ? '⏸️ 一時停止中' : '⏹️ 待機中';
            if (liveDot)   liveDot.classList.remove('live');
        }
    }

    updateSimProgressUI() {
        const fill = document.getElementById('sim-progress-bar-fill');
        const text = document.getElementById('sim-progress-text');
        if (!fill) return;
        const pct = this.announcements.length > 0
            ? (this.step / this.announcements.length) * 100 : 0;
        fill.style.width = `${pct}%`;
        if (text) text.textContent = `${this.step} / ${this.announcements.length} 議席確定`;
    }
}

// シミュレーションエンジンのシングルトン
const simEngine = new SimulationEngine();

// シミュレーションコントロールの初期化（initControls から呼ぶ）
function initSimulationControls() {
    const scenarioSelect = document.getElementById('sim-scenario-select');
    const startBtn       = document.getElementById('sim-start-btn');
    const resetBtn       = document.getElementById('sim-reset-btn');
    const speedSlider    = document.getElementById('sim-speed-slider');
    const speedLabel     = document.getElementById('sim-speed-label');
    const majorityEl     = document.getElementById('sim-majority-text');

    if (!startBtn) return;

    // 速度テーブル
    const SPEED_MS     = [3000, 2000, 1500, 1000, 700, 400, 200, 80];
    const SPEED_LABELS = ['とても遅い', '遅い', '普通', '少し速い', '速い', 'とても速い', '高速', '超高速'];

    if (speedSlider) {
        speedSlider.addEventListener('input', () => {
            const idx = parseInt(speedSlider.value);
            simEngine.setSpeed(SPEED_MS[idx]);
            if (speedLabel) speedLabel.textContent = SPEED_LABELS[idx];
        });
        // デフォルト: index=3 (少し速い = 1000ms)
        speedSlider.value = '3';
        if (speedLabel) speedLabel.textContent = SPEED_LABELS[3];
        simEngine.speed = SPEED_MS[3];
    }

    // スタート/ポーズボタン
    startBtn.addEventListener('click', () => {
        const key = scenarioSelect ? scenarioSelect.value : 'sim-standard';
        if (simEngine.isRunning) {
            simEngine.pause();
        } else if (simEngine.isPaused) {
            simEngine.resume();
        } else {
            simEngine.reset(key, true);
            // リセット後に少し間を置いて開始
            setTimeout(() => simEngine.start(key), 300);
        }
    });

    // リセットボタン
    resetBtn.addEventListener('click', () => {
        const key = scenarioSelect ? scenarioSelect.value : 'sim-standard';
        simEngine.reset(key, true);
        renderSeatsEditorList();
    });

    // シナリオ変更時: リセットだけ（自動再生しない）
    if (scenarioSelect) {
        scenarioSelect.addEventListener('change', () => {
            const key = scenarioSelect.value;
            simEngine.reset(key, true);
            renderSeatsEditorList();
            // 過半数ラインの表示更新
            const scenario = SIMULATION_SCENARIOS[key];
            if (scenario && majorityEl) {
                majorityEl.textContent = `過半数ライン: ${scenario.majorityLine}議席`;
            }
        });
        // 初回ビルド
        simEngine.buildAnnouncements(scenarioSelect.value);
    }

    simEngine.updateSimUI();
    simEngine.updateSimProgressUI();
}

