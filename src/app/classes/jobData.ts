export class jobData {
  id!: string;
  title!: string;
  position!: string;
  location!: string;
  type!: string;
  experience!: string;
  qualification!: string;
  batch!: string;
  salary!: string;
  link!: string;
  postdate!: string;
  constructor(
    id: string,
    title: string,
    position: string,
    location: string,
    type: string,
    experience: string,
    qualification: string,
    batch: string,
    salary: string,
    link: string,
    postdate: string
  ) {
    this.title = title;
    this.salary = salary;
    this.id = id;
    this.position = position;
    this.location = location;
    this.type = type;
    this.experience = experience;
    this.qualification = qualification;
    this.batch = batch;
    this.link = link;
    this.postdate = postdate;
  }
}
