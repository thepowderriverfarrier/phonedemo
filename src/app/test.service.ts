import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  // demo function for unit test
  add(a, b) {
    return a + b;
  }
}
