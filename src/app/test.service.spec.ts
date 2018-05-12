// make test environment available from angular core
import { TestBed, inject } from '@angular/core/testing';
// make the created service available
import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // inject the service
      providers: [TestService]
    });
  });

  // default test to see if service is actually there
  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should hav the add function', inject([TestService], (service: TestService) => {
    expect(service.add).toBeTruthy();
  }));

  it('should add the numbers', inject([TestService], (service: TestService) => {
    expect(service.add(2, 2).toEqual(4));
  }));
});
