import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const transactions = [
      { id: 11, type: 'debt', manner: 'DC', description: 'Walmart', amount: 2346, date: new Date().setFullYear(2017, 11, 13) },
      { id: 12, type: 'debt', manner: 'DC', description: 'Man O War BP', amount: 2687, date: new Date().setFullYear(2017, 11, 14) },
      { id: 13, type: 'credit', manner: 'DEP', description: 'Appriss', amount: 196339, date: new Date().setFullYear(2017, 11, 15) },
      { id: 14, type: 'debt', manner: 'DC', description: 'Walmart', amount: 10827, date: new Date().setFullYear(2017, 11, 16) },
      { id: 15, type: 'debt', manner: 'DC', description: 'Walmart', amount: 1842, date: new Date().setFullYear(2017, 11, 16) },
      { id: 16, type: 'debt', manner: 'DC', description: 'Casa Grande', amount: 5237, date: new Date().setFullYear(2017, 11, 17) },
      { id: 17, type: 'credit', manner: 'TRAN', description: 'From Savings', amount: 153432, date: new Date().setFullYear(2017, 11, 13) },
      { id: 18, type: 'debt', manner: 'ACHK', description: 'Tuition Management', amount: 153432, date: new Date().setFullYear(2017, 11, 13) },
      { id: 19, type: 'debt', manner: 'DC', description: 'Walmart', amount: 14287, date: new Date().setFullYear(2017, 11, 18) },
      { id: 20, type: 'debt', manner: 'DC', description: 'Amazon', amount: 6397, date: new Date().setFullYear(2017, 11, 19) },
      { id: 21, type: 'debt', manner: 'DC', description: 'Walmart', amount: 2986, date: new Date().setFullYear(2017, 11, 19) },
    ];

    return {transactions};
  }

}
