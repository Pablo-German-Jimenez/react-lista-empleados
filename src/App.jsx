import ListaEmpleados from "./ListaEmpleados";
import bboyLinkinrefachero from "./Assets/bboyLinkinrefachero.bmp";


const empleados = [
  { id: 1, fullName: "Jeff Bezos", title: "CEO", badge:"Engineer",department: "Business",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYbmThfOWu_RUYLADeeMhb8i_sy02ALpPqQ&s" },
  { id: 2, fullName: "Dora la exploradora", title: "CTO",badge:"Marketing", department: "Tech",img:"https://media.revistagq.com/photos/5ca5f069c4b7fbab38ba9237/16:9/w_2560%2Cc_limit/por_que_trailer_dora_exploradora_esta_siendo_tan_criticado_6251.jpeg" },
  { id: 3, fullName: "Michael Saylor", title: "CFO", badge:"Criptocurrency investor",department: "Finance Manager",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wyw9wl82XKQJWtKbUAaBw1XJJQ9u4YJwQE5JbpBNpJHbar8IJVcyqZDpIW06ODXz1L0&usqp=CAU" },
{ id: 4, fullName: "Pablo Germán Jiménez", title: "Art Director",badge:"Engineering dev.FullStack", department: "Design", img:bboyLinkinrefachero },
];

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee List</h2>
      <ListaEmpleados empleados={empleados} />
    </div>
  );
}

export default App;