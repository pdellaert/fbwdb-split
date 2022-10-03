import { BaseCommandDefinition } from '../lib/command';
import Logger from '../lib/logger';
import { typeCommand } from '../lib/typeCommand';
import { abbreviations } from './support/abbreviations';
import { addon } from './memes/addon';
import { adirs } from './aircraft/adirs';
import { afloor } from './aircraft/afloor';
import { airac } from './support/airac';
import { airframe } from './aircraft/airframe';
import { assistance } from './aircraft/assistance';
import { atc } from './aircraft/atc';
import { audio } from './aircraft/audio';
import { autoland } from './aircraft/autoland';
import { autopilot } from './aircraft/autopilot';
import { avatar } from './utils/avatar';
import { beginner } from './aircraft/beginner-guide';
import { birthday } from './utils/birthday';
import { boratorium } from './memes/boratorium';
import { boris } from './memes/boris';
import { briefing } from './aircraft/briefing';
import { bruheg } from './memes/bruheg';
import { build } from './support/build';
import { calibrate } from './support/calibrate';
import { cfms } from './aircraft/cfms';
import { checklist } from './aircraft/checklist';
import { clean } from './support/clean-install';
import { coffee } from './memes/coffee';
import { community } from './support/community';
import { content } from './support/content';
import { controls } from './support/controls';
import { count } from './utils/count';
import { cowsay } from './memes/cowsay';
import { CPDLC } from './aircraft/cpdlc';
import { crak } from './memes/crak';
import { ctd } from './support/ctd';
import { ctrlE } from './aircraft/ctrlE';
import { cursor } from './support/cursor';
import { deadzones } from './support/deadzones';
import { defaultmeme } from './memes/default';
import { dfd } from './general/dfd';
import { direct } from './aircraft/direct';
import { directx12 } from './support/directx12';
import { discontinuity } from './support/discontinuity';
import { dlss } from './support/dlss';
import { docsearch } from './general/docsearch';
import { donate } from './general/donate';
import { efb } from './aircraft/efb';
import { experimental } from './aircraft/experimental';
import { fdr } from './support/fdr';
import { fixinfo } from './aircraft/fixinfo';
import { flexTemp } from './aircraft/flex-temp';
import { flights } from './utils/flights';
import { flyPadAbout } from './support/flyPadAbout';
import { flyPadOS } from './aircraft/flyPadOS';
import { fma } from './aircraft/fma';
import { fms } from './memes/fms';
import { freetext } from './aircraft/freetext';
import { fridge } from './memes/fridge';
import { fsltl } from './general/fsltl';
import { github } from './aircraft/github';
import { goldenRules } from './general/goldenRules';
import { guard } from './memes/guard';
import { headwind } from './general/headwind';
import { help } from './utils/help';
import { holds } from './aircraft/holds';
import { hud } from './support/hud';
import { installer } from './general/installer';
import { juan } from './memes/juan';
import { latlongfix } from './general/latlongfix';
import { liveries } from './aircraft/liveries';
import { logs } from './support/logs';
import { manualleg } from './support/manualleg';
import { market } from './support/market';
import { mcdu } from './aircraft/mcdu';
import { membercount } from './utils/membercount';
import { merge } from './memes/merge';
import { metar } from './utils/metar';
import { mico } from './memes/mico';
import { msfs } from './support/msfs';
import { msfsdisc } from './general/msfsdiscord';
import { navdata } from './support/navdata';
import { navigraphNavdata } from './support/navigraphNavdata';
import { navRouteTypes } from './general/navRouteTypes';
import { noHello } from './memes/noHello';
import { notams } from './general/notams';
import { nut } from './memes/nut';
import { oim } from './memes/oim';
import { otter } from './memes/otter';
import { p3d } from './memes/p3d';
import { ping } from './utils/ping';
import { poggers } from './memes/poggers';
import { pov } from './memes/pov';
import { preflight } from './aircraft/preflight';
import { printer } from './aircraft/printer';
import { ptu } from './memes/ptu';
import { pw } from './memes/pw';
import { qa } from './general/qa';
import { recommendedSettings } from './aircraft/recommendedsettings';
import { remoteMcdu } from './aircraft/remoteMcdu';
import { reportedissues } from './support/reportedissues';
import { roadmap } from './general/roadmap';
import { roleinfo } from './utils/roleinfo';
import { salty } from './general/salty';
import { screens } from './aircraft/screens';
import { screenshot } from './support/screenshot';
import { shame } from './memes/shame';
import { shomas } from './memes/shomas';
import { simbridge } from './support/simbridge';
import { simbridgeLog } from './support/simbridgeLog';
import { simbriefimport } from './aircraft/simbriefimport';
import { simulationRate } from './support/simulationRate';
import { simversion } from './support/simversion';
import { sop } from './aircraft/sop';
import { station } from './utils/station';
import { storedWaypoint } from './aircraft/stored-waypoint';
import { synaptic } from './general/synaptic';
import { takeoffIssues } from './aircraft/takeoffissues';
import { takeoffPerf } from './aircraft/takeoffPerf';
import { tcas } from './aircraft/tcas';
import { temporarycommand } from './general/temporaryCommand';
import { tiller } from './aircraft/tiller';
import { translate } from './general/translate';
import { trythis } from './support/trythis';
import { tug } from './support/tug';
import { utf8 } from './support/utf-8';
import { vatsimData } from './utils/vatsimData';
import { vatsimEvents } from './utils/vatsimEvents';
import { versions } from './aircraft/versions';
import { verticalGuidance } from './aircraft/verticalGuidance';
import { verticalGuidanceSymbols } from './aircraft/verticalGuidanceSymbols';
import { verticalSpeedPriority } from './aircraft/verticalSpeedPriority';
import { wasm } from './support/wasm';
import { weather } from './aircraft/weather';
import { website } from './general/website';
import { weightBalance } from './aircraft/weightBalance';
import { when } from './general/when';
import { where } from './support/where';
import { willithave } from './general/willithave';
import { winss } from './support/winss';
import { wolframalpha } from './utils/wolframalpha';
import { xbox } from './general/xbox';
import { xp } from './memes/xp';
import { yourControls } from './general/yourControls';
import { zulu } from './utils/zulu';

const commands: BaseCommandDefinition[] = [
    typeCommand,
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
    flyPadAbout,
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
    navigraphNavdata,
    navRouteTypes,
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
    simbridgeLog,
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
    winss,
    wolframalpha,
    xbox,
    xp,
    yourControls,
    zulu,
];

const userCommands: { [k: string]: BaseCommandDefinition } = {};

for (const def of commands) {
    for (const name of (typeof def.name === 'string' ? [def.name] : def.name)) {
        if (userCommands[name]) {
            Logger.warn(`Duplicate command/alias inserted: ${name}`);
        }
        userCommands[name] = def;
    }
}

export default userCommands;
