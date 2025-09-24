import { useState, useEffect } from "react";

// props ini punya functional component
// kita bisa langsung ambil props-nya dari parameter fungsi atau dengan destructuring
const UserProfileFunct = ({ name, city, initialAge }) => {
  // state ini pakai hook 'useState'
  // caranya lebih singkat daripada di class comp
  const [age, setAge] = useState(initialAge); // 1. state buat umur, nilainya dari props
  const [status, setStatus] = useState("Offline"); // 2. state buat status
  const [message, setMessage] = useState("Halo semua!"); // 3. state buat pesan

  // ini pakai lifecycle hook 'useEffect'

  // 1. useEffect untuk ComponentDidMount dan ComponentWillUnmount
  useEffect(() => {
    // bagian ini sama kayak componentDidMount, jalan sekali pas komponen muncul
    console.log("useEffect (Mount): Komponen udah muncul di layar!");
    const timerID = setTimeout(() => {
      setStatus("Online");
    }, 3000);

    // 'return' di dalam useEffect ini sama kayak componentWillUnmount
    return () => {
      console.log("useEffect (Unmount): Komponen mau hilang, dadah!");
      clearTimeout(timerID); // clear timeout pas komponennya hilang
    };
  }, []); // kurung siku kosong [] atau dependency array kosong artinya ini cuma jalan sekali

  // 2. useEffect untuk ComponentDidUpdate
  // useEffect: cuma akan jalan kalo nilai 'age' atau 'message' berubah
  useEffect(() => {
    // ga perlu cek manual kayak di class, karena udah diatur di dependency array
    console.log(
      "useEffect (Update): State 'age' atau 'message' baru aja berubah!"
    );
  }, [age, message]); // Jalanin kalo 'age' atau 'message' berubah

  const tambahUmur = () => {
    setAge((oldAge) => oldAge + 1);
  };

  return (
    <div
      style={{
        border: "2px solid dodgerblue",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}>
      <h2>Profil Pengguna (Functional Component)</h2>
      <p>
        <strong>Nama:</strong> {name}
      </p>
      <p>
        <strong>Kota:</strong> {city}
      </p>

      <hr />

      <p>
        <strong>Umur:</strong> {age}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      <p>
        <strong>Pesan:</strong> {message}
      </p>

      <button onClick={tambahUmur}>Tambah Umur</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tulis pesan baru"
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default UserProfileFunct;
