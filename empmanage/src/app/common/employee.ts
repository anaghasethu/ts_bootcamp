export class Employee {

    /*
    "empno" : 7369,
      "ename" : "SMITH",
      "job" : "CLERK",
      "hiredate" : "1993-01-12",
      "managerId" : 7902,
      "salary" : 28000,
      "commission" : 1200,
      "deptNo" : 20,
    */
    constructor(public empno : number,
                public ename : string,
                public job : string,
                public hiredate : Date,
                public managerId : number,
                public salary : number,
                public commission : number,
                public deptNo : number) {}
}
