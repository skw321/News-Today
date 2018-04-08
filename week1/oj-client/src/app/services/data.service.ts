import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model'
import { PROBLEMS } from '../mock-problems'

@Injectable()
export class DataService {

  //list of problem
  problems: Problem[] = PROBLEMS;

  constructor() { }

  getProblems():Problem[]{
    return this.problems;
  }

  getProblem (id : number): Problem{
    return this.problems.find((problem) => problem.id === id);
  }
}
