import { CommandDefinition } from '../lib/command';
import Logger from '../lib/logger';
import { abbreviations } from './support/abbreviations';
import { addon } from './memes/addon';
import { adirs } from './a32nx/adirs';
import { afloor } from './a32nx/afloor';
import { airac } from './support/airac';
import { airframe } from './a32nx/airframe';
import { assistance } from './a32nx/assistance';
import { atc } from './a32nx/atc';
import { audio } from './a32nx/audio';
import { autoland } from './a32nx/autoland';
import { autopilot } from './a32nx/autopilot';
import { avatar } from './utils/avatar';
import { beginner } from './a32nx/beginner-guide';
import { birthday } from './utils/birthday';
import { boratorium } from './memes/boratorium';
import { boris } from './memes/boris';
import { briefing } from './a32nx/briefing';
import { bruheg } from './memes/bruheg';
import { build } from './support/build';
import { calibrate } from './support/calibrate';
import { cfms } from './a32nx/cfms';
import { checklist } from './a32nx/checklist';
import { clean } from './support/clean-install';
import { coffee } from './memes/coffee';
import { community } from './support/community';
import { content } from './support/content';
import { controls } from './support/controls';
import { count } from './utils/count';
import { cowsay } from './memes/cowsay';
import { CPDLC } from './a32nx/cpdlc';
import { crak } from './memes/crak';
import { ctd } from './support/ctd';
import { ctrlE } from './a32nx/ctrlE';
import { cursor } from './support/cursor';
import { deadzones } from './support/deadzones';
import { defaultmeme } from './memes/default';
import { dfd } from './general/dfd';
import { direct } from './a32nx/direct';
import { directx12 } from './support/directx12';
import { discontinuity } from './support/discontinuity';
import { dlss } from './support/dlss';
import { docsearch } from './general/docsearch';
import { donate } from './general/donate';
import { efb } from './a32nx/efb';
import { experimental } from './a32nx/experimental';
import { fdr } from './support/fdr';
import { fixinfo } from './a32nx/fixinfo';
import { flexTemp } from './a32nx/flex-temp';
import { flights } from './utils/flights';
import { flyPadOS } from './a32nx/flyPadOS';
import { fma } from './a32nx/fma';
import { fms } from './memes/fms';
import { freetext } from './a32nx/freetext';
import { fridge } from './memes/fridge';
import { fsltl } from './general/fsltl';
import { github } from './a32nx/github';
import { goldenRules } from './general/goldenRules';
import { guard } from './memes/guard';
import { headwind } from './general/headwind';
import { help } from './utils/help';
import { holds } from './a32nx/holds';
import { hud } from './support/hud';
import { installer } from './general/installer';
import { juan } from './memes/juan';
import { latlongfix } from './general/latlongfix';
import { liveries } from './a32nx/liveries';
import { logs } from './support/logs';
import { manualleg } from './support/manualleg';
import { market } from './support/market';
import { mcdu } from './a32nx/mcdu';
import { membercount } from './utils/membercount';
import { merge } from './memes/merge';
import { metar } from './utils/metar';
import { mico } from './memes/mico';
import { msfs } from './support/msfs';
import { msfsdisc } from './general/msfsdiscord';
import { navdata } from './support/navdata';
import { noHello } from './memes/noHello';
import { notams } from './general/notams';
import { nut } from './memes/nut';
import { oim } from './memes/oim';
import { otter } from './memes/otter';
import { p3d } from './memes/p3d';
import { ping } from './utils/ping';
import { poggers } from './memes/poggers';
import { pov } from './memes/pov';
import { preflight } from './a32nx/preflight';
import { printer } from './a32nx/printer';
import { ptu } from './memes/ptu';
import { pw } from './memes/pw';
import { qa } from './general/qa';
import { recommendedSettings } from './a32nx/recommendedsettings';
import { remoteMcdu } from './a32nx/remoteMcdu';
import { reportedissues } from './support/reportedissues';
import { roadmap } from './general/roadmap';
import { roleinfo } from './utils/roleinfo';
import { salty } from './general/salty';
import { screens } from './a32nx/screens';
import { screenshot } from './support/screenshot';
import { shame } from './memes/shame';
import { shomas } from './memes/shomas';
import { simbridge } from './support/simbridge';
import { simbriefimport } from './a32nx/simbriefimport';
import { simulationRate } from './support/simulationRate';
import { simversion } from './support/simversion';
import { sop } from './a32nx/sop';
import { station } from './utils/station';
import { storedWaypoint } from './a32nx/stored-waypoint';
import { synaptic } from './general/synaptic';
import { takeoffIssues } from './a32nx/takeoffissues';
import { takeoffPerf } from './a32nx/takeoffPerf';
import { tcas } from './a32nx/tcas';
import { temporarycommand } from './general/temporaryCommand';
import { tiller } from './a32nx/tiller';
import { translate } from './general/translate';
import { trythis } from './support/trythis';
import { tug } from './support/tug';
import { utf8 } from './support/utf-8';
import { vatsimData } from './utils/vatsimData';
import { vatsimEvents } from './utils/vatsimEvents';
import { versions } from './a32nx/versions';
import { verticalGuidance } from './a32nx/verticalGuidance';
import { verticalGuidanceSymbols } from './a32nx/verticalGuidanceSymbols';
import { verticalSpeedPriority } from './a32nx/verticalSpeedPriority';
import { wasm } from './support/wasm';
import { weather } from './a32nx/weather';
import { website } from './general/website';
import { weightBalance } from './a32nx/weightBalance';
import { when } from './general/when';
import { where } from './support/where';
import { willithave } from './general/willithave';
import { wolframalpha } from './utils/wolframalpha';
import { xbox } from './general/xbox';
import { xp } from './memes/xp';
import { yourControls } from './general/yourControls';
import { zulu } from './utils/zulu';

const commands: CommandDefinition[] = [
    abbreviations,
    addon,
    adirs,
    afloor,
    airac,
    airframe,
    assistance,
    atc,
    audio,
    autoland,
    autopilot,
    avatar,
    beginner,
    birthday,
    boratorium,
    boris,
    briefing,
    bruheg,
    build,
    calibrate,
    cfms,
    checklist,
    clean,
    coffee,
    community,
    content,
    controls,
    count,
    cowsay,
    CPDLC,
    crak,
    ctd,
    ctrlE,
    cursor,
    deadzones,
    defaultmeme,
    dfd,
    direct,
    directx12,
    discontinuity,
    dlss,
    docsearch,
    donate,
    efb,
    experimental,
    fdr,
    fixinfo,
    flexTemp,
    flights,
    flyPadOS,
    fma,
    fms,
    freetext,
    fridge,
    fsltl,
    github,
    goldenRules,
    guard,
    headwind,
    help,
    holds,
    hud,
    installer,
    juan,
    latlongfix,
    liveries,
    logs,
    manualleg,
    market,
    mcdu,
    membercount,
    merge,
    metar,
    mico,
    msfs,
    msfsdisc,
    navdata,
    noHello,
    notams,
    nut,
    oim,
    otter,
    p3d,
    ping,
    poggers,
    pov,
    preflight,
    printer,
    ptu,
    pw,
    qa,
    recommendedSettings,
    remoteMcdu,
    reportedissues,
    roadmap,
    roleinfo,
    salty,
    screens,
    screenshot,
    shame,
    shomas,
    simbridge,
    simbriefimport,
    simulationRate,
    simversion,
    sop,
    station,
    storedWaypoint,
    synaptic,
    takeoffIssues,
    takeoffPerf,
    tcas,
    temporarycommand,
    tiller,
    translate,
    trythis,
    tug,
    utf8,
    vatsimData,
    vatsimEvents,
    versions,
    verticalGuidance,
    verticalGuidanceSymbols,
    verticalSpeedPriority,
    wasm,
    weather,
    website,
    weightBalance,
    when,
    where,
    willithave,
    wolframalpha,
    xbox,
    xp,
    yourControls,
    zulu,
];

const userCommands: { [k: string]: CommandDefinition } = {};

for (const def of commands) {
    for (const name of (typeof def.name === 'string' ? [def.name] : def.name)) {
        if (userCommands[name]) {
            Logger.warn(`Duplicate command/alias inserted: ${name}`);
        }
        userCommands[name] = def;
    }
}

export default userCommands;
