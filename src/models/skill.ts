class Skill {
  id: string;
  text: string;

  constructor(skillTest: string) {
    this.text = skillTest;
    this.id = new Date().toISOString();
  }
}

export default Skill;
