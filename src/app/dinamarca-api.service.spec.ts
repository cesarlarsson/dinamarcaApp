import { TestBed } from '@angular/core/testing';

import { DinamarcaAPIService } from './dinamarca-api.service';

describe('DinamarcaAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinamarcaAPIService = TestBed.get(DinamarcaAPIService);
    expect(service).toBeTruthy();
  });
});
