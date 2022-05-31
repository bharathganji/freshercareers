export class jobData {
  title!: string;
  salary!: string;
  description!: string;
  postdate!: Date;
  companylogo!: string;
  applylink!: string;
  constructor(
    title: string,
    salary: string,
    description: string,
    postdate: Date,
    companylogo: string,
    applylink: string
  ) {
    this.title = title;
    this.salary = salary;
    this.description = description;
    this.postdate = postdate;
    this.companylogo = companylogo;
    this.applylink = applylink;
  }
}
