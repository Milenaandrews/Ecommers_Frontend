import { Container, Row, Col, Button } from 'react-bootstrap';
import Slide from '../../components/Slider/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <section>
    <Container className="col-xxl-8 px-4 py-5">
      <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
        <Col xs={10} sm={8} lg={6} className="d-flex justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block mx-auto img-fluid rounded-4"
            alt=""
            width="700"
            height="500"
            loading="lazy"
          />
        </Col>
        <Col lg={6} className="text-center">
          <div>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Bienvenido al mejor marketplace de libros</h1>
            <p className="lead">
              ¡Explora un mundo de conocimiento con nuestro marketplace de libros! Descubre historias cautivadoras, sumérgete en emocionantes aventuras y aprende de los grandes pensadores
            </p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">

            <Button variant="dark" size="lg" className="px-4 me-md-2 mt-3 bg-dark" onClick={() => navigate("/auth")}>
              Inicia sesión
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
      </section>

      <section className='bg-dark'>
        <h1 className='text-light fw-bold py-3 display-4'>Tendencias</h1>
        <p className='text-light'>Déjate cautivar por los libros del momento</p>
        <div className='container h-100'>
          <div className='my-3 p-3'>
            <Slide/>
          </div>
        </div>
      </section>

    <section>
      <Container className='d-flex justify-content-center'>
      <div><i className="bi bi-telephone display-5 mx-5"></i><p>Llamanos!</p></div>
      <div><i className="bi bi-truck display-5 mx-5"></i><p>Despacho a Domicilio</p></div>
      <div><i className="bi bi-shop display-5 mx-5"></i><p>Retiro en tienda</p></div>
      </Container>
    </section>
    </>
  )
}

export default Home