class Test {
  private hello(name: string) {
    console.log("Hello, ", name);
  }
  private goodMorning(name: string) {
    console.log("Good Morning, ", name);
  }
  public greeting() {
    this.hello("takashi");
    this.goodMorning("takashi");
  }
}
export default Test;
