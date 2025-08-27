import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
function ListaEmpleados({ empleados }) {
  return (
    <div className="row">
      {empleados.map((empleado) => (
        <div key={empleado.id} className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="me-3">
                <img
                  src={`${empleado.img}${empleado.id}`}
                  alt={empleado.fullName}
                  className="rounded-circle"
                  width="80"
                  height="80"
                />
              </div>
              <div>
                <h5 className="card-title mb-1">{empleado.fullName}</h5>
                <Badge bg="primary">{empleado.badge}</Badge>
                    <p className="card-text text-muted mb-0">{empleado.title}</p>
                <small className="text-secondary">{empleado.department}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaEmpleados;
