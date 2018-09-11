import { TestBed, inject } from '@angular/core/testing';

import { MusicInfoService } from './music-info.service';

describe('MusicInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicInfoService]
    });
  });

  it('should be created', inject([MusicInfoService], (service: MusicInfoService) => {
    expect(service).toBeTruthy();
  }));
});
