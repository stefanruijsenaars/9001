import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { AudioControls } from '../models/audio-controls.model';

@Injectable()
export class AudioControlsActions {

  static TOGGLE_VISUALIZATION_FREQ_WAVE = '[AudioControls] Toggle Showing Frequency Bars or Oscilliscope';
  toggleVisualizersFreqWave(): Action {
    return {
      type: AudioControlsActions.TOGGLE_VISUALIZATION_FREQ_WAVE,
    };
  }

  static TOGGLE_EQUALIZER = '[AudioControls] Toggle Equalizer';
  toggleShowEqualizer(): Action {
    return {
      type: AudioControlsActions.TOGGLE_EQUALIZER,
    };
  }

  static ADJUST_BASS = '[AudioControls] Adjust Bass';
  adjustBass(bass: number): Action {
    return {
      type: AudioControlsActions.ADJUST_BASS,
      payload: {
        bass
      }
    };
  }

  static ADJUST_MIDS = '[AudioControls] Adjust Mids';
  adjustMids(mids: number, frequencyBandId: number): Action {
    return {
      type: AudioControlsActions.ADJUST_MIDS,
      payload: {
        mids,
        frequencyBandId
      }
    };
  }

  static ADJUST_TREBLE = '[AudioControls] Adjust Treble';
  adjustTreble(treble: number): Action {
    return {
      type: AudioControlsActions.ADJUST_TREBLE,
      payload: {
        treble
      }
    };
  }
}
