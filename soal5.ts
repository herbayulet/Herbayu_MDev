class Employee {
  // Deklarasikan atribut
  private name: string;
  private age: number;
  private salary: number;

  // Definisikan konstruktor
  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  // Metode untuk menampilkan informasi karyawan
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
  }

  // Metode untuk memberikan kenaikan gaji
  giveRaise(amount: number): void {
    this.salary += amount;
  }

  // Metode untuk mengurangi gaji
  dicreaseSalary(amount: number): void {
    this.salary -= amount;
  }
}

// Buat objek karyawan
let emp1 = new Employee("John Doe", 30, 5000);
let emp2 = new Employee("Jane Smith", 35, 6000);

// Panggil metode untuk menampilkan informasi karyawan
emp1.displayInfo();
emp2.displayInfo();

// Berikan kenaikan gaji kepada karyawan
emp1.giveRaise(1000);
emp2.dicreaseSalary(1000);

// Cek apakah kenaikan gaji berhasil
emp1.displayInfo();
emp2.displayInfo();

// Dalam contoh ini, saya telah membuat kelas Employee dengan atribut name, age, dan salary,
// serta metode displayInfo untuk menampilkan informasi karyawan dan giveRaise untuk memberikan kenaikan gaji.
// Kemudian, kita membuat dua objek karyawan (emp1 dan emp2) dari kelas Employee dan menggunakan metode yang telah didefinisikan.
