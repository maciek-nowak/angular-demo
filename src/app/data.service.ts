import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class DataService {

  private goals = new BehaviorSubject<string[]>([]);
  goal = this.goals.asObservable();
  kot = 'chomik';

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
