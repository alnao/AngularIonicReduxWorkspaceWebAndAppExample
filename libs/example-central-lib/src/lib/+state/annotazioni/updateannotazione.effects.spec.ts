import { TestBed, async } from "@angular/core/testing";

import { Observable } from "rxjs";

import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { NxModule, DataPersistence } from "@nrwl/angular";
import { hot } from "@nrwl/angular/testing";

import { UpdateannotazioneEffects } from "./updateannotazione.effects";
import * as UpdateannotazioneActions from "./updateannotazione.actions";

describe("UpdateannotazioneEffects", () => {
  let actions: Observable<any>;
  let effects: UpdateannotazioneEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UpdateannotazioneEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UpdateannotazioneEffects);
  });

  describe("init$", () => {
    it("should work", () => {
      actions = hot("-a-|", { a: UpdateannotazioneActions.loadUpdateannotazioneInit({id:null,element:null}) });

      const expected = hot("-a-|", {
        a: UpdateannotazioneActions.loadUpdateannotazioneSuccess({
          updateannotazione: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
