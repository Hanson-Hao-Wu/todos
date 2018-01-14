import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const todos = [
      { id: 11, content: 'Mr. Nice', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now(),status:"todo"},
      { id: 12, content: 'Narco', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now(),status:"todo" },
      { id: 13, content: 'Bombasto', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now(),status:"todo" },
      { id: 14, content: 'Celeritas', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"todo"},
      { id: 15, content: 'Magneta', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"todo"},
      { id: 16, content: 'RubberMan', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"todo"},
      { id: 17, content: 'Dynama', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"todo"},
      { id: 18, content: 'Dr IQ', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"done"},
      { id: 19, content: 'Magma', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now() ,status:"done"},
      { id: 20, content: 'Tornado', createTime: Date.now(), lastUpdateTime: Date.now(), reminderDate: Date.now(),status:"done" }
    ];
    return { todos };
  }

}
