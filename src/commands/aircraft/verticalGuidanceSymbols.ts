import { CommandDefinition } from '../../lib/command';
import { CommandCategory } from '../../constants';
import { makeEmbed } from '../../lib/embed';

export const verticalGuidanceSymbols: CommandDefinition = {
    name: ['verticalguidancesymbols', 'vnavsymbols', 'vnavnd'],
    description: 'Provides a link to the Vertical Guidance ND Symbols',
    category: CommandCategory.AIRCRAFT,
    executor: (msg) => {
        const verticalGuidanceSymbolsEmbed = makeEmbed({
            title: 'FlyByWire A32NX | Vertical Guidance Navigation Display Symbols documentation',
            description: 'Please see our [Vertical Guidance Navigation Display Symbols documentation](https://docs.flybywiresim.com/pilots-corner/advanced-guides/flight-guidance/vertical-guidance/nd-symbols/) for information on the VNAV symbols on the ND of the FlyByWire A32NX.',
        });

        return msg.channel.send({ embeds: [verticalGuidanceSymbolsEmbed] });
    },
};
