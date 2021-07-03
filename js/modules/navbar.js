/**
 * 재사용가능한 Navbar.js
 */
class Navbar {
  // 생성자
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  // 내가 정의한 메서드
  init() {
    console.log(this);
  }
}

export default Navbar;
