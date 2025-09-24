import { Component } from "react";

class UserProfileClass extends Component {
  // constructor ini jalan pertama kali ketika komponen dibuat
  constructor(props) {
    super(props);

    // ini state class component
    // state: data internal komponen yang nilaunya bisa berubah
    this.state = {
      age: this.props.initialAge, // 1. state buat umur, nilainya diambil dari props
      status: "Offline", // 2. state buat status online/offline
      message: "Halo semua!", // 3. state buat nampung pesan
    };
  }

  // ini lifecycle compoenent did mount
  // lifecycle ini cuma jalan sekali, pas komponen pertama kali muncul di layar
  componentDidMount() {
    console.log("componentDidMount: Komponen udah muncul di layar!");
    // ubah status jadi Online setelah 3 detik
    this.timerID = setTimeout(() => {
      this.setState({ status: "Online" });
    }, 3000);
  }

  // ini lifecycle did update
  // lifecycle ini jalan setiap kali ada perubahan di props atau state
  componentDidUpdate(prevProps, prevState) {
    if (prevState.age !== this.state.age) {
      console.log(
        `componentDidUpdate: Umur berubah dari ${prevState.age} jadi ${this.state.age}`
      );
    }
    if (prevState.message !== this.state.message) {
      console.log("componentDidUpdate: Pesannya berubah nih!");
    }
  }

  // ini lifecycle will unmount
  // lifecycle ini jalan tepat sebelum komponennya dihilangkan dari layar
  componentWillUnmount() {
    console.log("componentWillUnmount: Komponen mau hilang, dadah!");
    // clear timeout supaya ga bikin error
    clearTimeout(this.timerID);
  }

  tambahUmur = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    // props ini punya class component
    // props: data yang dikirim dari komponen luar (parent)
    const { name, city } = this.props; // 1. Props 'name', 2. Props 'city'

    return (
      <div
        style={{
          border: "2px solid tomato",
          padding: "15px",
          margin: "10px",
          borderRadius: "8px",
        }}>
        <h2>Profil Pengguna (Class Component)</h2>
        <p>
          <strong>Nama:</strong> {name}
        </p>
        <p>
          <strong>Kota:</strong> {city}
        </p>

        <hr />

        <p>
          <strong>Umur:</strong> {this.state.age}
        </p>
        <p>
          <strong>Status:</strong> {this.state.status}
        </p>
        <p>
          <strong>Pesan:</strong> {this.state.message}
        </p>

        <button onClick={this.tambahUmur}>Tambah Umur</button>
        <input
          type="text"
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
          placeholder="Tulis pesan baru"
          style={{ marginLeft: "10px" }}
        />
      </div>
    );
  }
}

export default UserProfileClass;
