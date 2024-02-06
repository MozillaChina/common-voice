import { AddingSentences } from './sidebar-content/sentence-collection/adding-sentences';
import { CitingSentences } from './sidebar-content/sentence-collection/citing-sentences';
import { PublicDomain } from './sidebar-content/sentence-collection/public-domain';
import { ReviewingSentences } from './sidebar-content/sentence-collection/reviewing-sentences';
import { Domain } from './sidebar-content/sentence-collection/domain';

import { BackgoundNoise } from './sidebar-content/voice-collection/background-noise';
import { BackgoundVoices } from './sidebar-content/voice-collection/background-voices';
import { Effects } from './sidebar-content/voice-collection/effects';
import { Misreadings } from './sidebar-content/voice-collection/misreadings';
import { OffensiveContent } from './sidebar-content/voice-collection/offensive-content';
import { Unsure } from './sidebar-content/voice-collection/unsure';
import { VaryingPronounciation } from './sidebar-content/voice-collection/varying-pronunciations';
import { Volume } from './sidebar-content/voice-collection/volume';

import { GuidelinesSection } from './types';

export const VOICE_NAV_IDS: Record<string, string> = {
  PRONUNCIATIONS: 'varying-pronunciations',
  OFFENSIVE_CONTENT: 'offensive-content',
  MISREADINGS: 'misreadings',
  BACKGROUND_NOISE: 'background-noise',
  BACKGROUND_VOICES: 'background-voices',
  VOLUME: 'volume',
  EFFECTS: 'reader-effects',
  UNSURE: 'just-unsure',
};

export const SENTENCE_NAV_IDS: Record<string, string> = {
  PUBLIC_DOMAIN: 'public-domain',
  CITING_SENTENCES: 'citing-sentences',
  ADDING_SENTENCES: 'adding-sentences',
  REVIEWING_SENTENCES: 'reviewing-sentences',
  DOMAIN: 'domain',
};

export const voiceGuidelinesSections: GuidelinesSection[] = [
  {
    id: VOICE_NAV_IDS.PRONUNCIATIONS,
    component: VaryingPronounciation,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.OFFENSIVE_CONTENT,
    component: OffensiveContent,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.MISREADINGS,
    component: Misreadings,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.BACKGROUND_NOISE,
    component: BackgoundNoise,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.BACKGROUND_VOICES,
    component: BackgoundVoices,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.VOLUME,
    component: Volume,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.EFFECTS,
    component: Effects,
    visible: true,
  },
  {
    id: VOICE_NAV_IDS.UNSURE,
    component: Unsure,
    visible: true,
  },
];

export const sentenceGuidelineSections: GuidelinesSection[] = [
  {
    id: SENTENCE_NAV_IDS.PUBLIC_DOMAIN,
    component: PublicDomain,
    visible: true,
  },
  {
    id: SENTENCE_NAV_IDS.CITING_SENTENCES,
    component: CitingSentences,
    visible: true,
  },
  {
    id: SENTENCE_NAV_IDS.ADDING_SENTENCES,
    component: AddingSentences,
    visible: true,
  },
  {
    id: SENTENCE_NAV_IDS.REVIEWING_SENTENCES,
    component: ReviewingSentences,
    visible: true,
  },
  {
    id: SENTENCE_NAV_IDS.DOMAIN,
    component: Domain,
    visible: true,
  },
];
