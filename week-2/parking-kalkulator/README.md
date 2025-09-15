# Parking Fee Calculator

Tugas **Week 2** Bootcamp Fullstack Web Development di **Sinau Koding**.  
Program ini dibuat menggunakan **JavaScript** untuk menghitung biaya parkir motor dan mobil sesuai aturan yang diberikan.

---

## Rules Perhitungan Parkir

- **Motor**
  - 1 jam pertama: Rp 2.000
  - Jam berikutnya: Rp 1.000 / jam
- **Mobil**
  - 1 jam pertama: Rp 5.000
  - Jam berikutnya: Rp 2.000 / jam

---

## Fungsi yang Dibuat

1. `calculateMotorcycle(hours) -> number`  
   Menghitung biaya parkir **1 motor** berdasarkan lama parkir (jam).

2. `calculateCar(hours) -> number`  
   Menghitung biaya parkir **1 mobil** berdasarkan lama parkir (jam).

---

## Contoh Kasus

Misalnya:

- 3 motor parkir masing-masing **1, 2, 3 jam**
- 2 mobil parkir masing-masing **1, 2 jam**

Perhitungan:

- Motor:

  - 1 jam → Rp 2.000
  - 2 jam → Rp 3.000
  - 3 jam → Rp 4.000
  - **Total Motor = Rp 9.000**

- Mobil:
  - 1 jam → Rp 5.000
  - 2 jam → Rp 7.000
  - **Total Mobil = Rp 12.000**

**Total Pendapatan Parkir = Rp 21.000**

---

## 📂 Struktur Project

```bash
week-2-parking-calculator/
├── index.js
├── README.md
```

---

## Cara Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/fathurrahman20/week-2-parking-calculator.git
   cd week-2-parking-calculator
   ```

2. Jalankan program:

   ```bash
   node index.js
   ```

3. Lihat hasil di console.

---

## Output Program

```
Motor: [ 1, 2, 3 ] jam → Rp 9,000
Mobil: [ 1, 2 ] jam → Rp 12,000
=================================
Total Pendapatan: Rp 21,000
```

---

## Author

- Nama: Fathurrahman
- Bootcamp: Sinau Koding - Fullstack Web Development (Week 2 Task)
