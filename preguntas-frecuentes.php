<?php
    include_once('header.php');
?>

<div class="container">
    <div class="row mt-5 mb-4">
        <h1 class="font-weight-bold" >Preguntas frecuentes</h1>
    </div>
<div class="row row-cols-1 row-cols-md-3 mb-5">
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-garantia.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Cuentan con garantía?</h5>
        <p class="card-text">
            Todas nuestras mamparas cuentan con una garantía sobre defectos de fabricación de un año. Nuestros herrajes en Acero garantía de por vida.
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-condiciones-de-pago.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Cuales son las condiciones de pago?</h5>
        <p class="card-text">
            60% de anticipo y 40% cuanto estan listas para embarque.
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-tiempo-de-cotizacion.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Cómo se cotizan y cuanto tarda?</h5>
        <p class="card-text">
            Se cotizan por módulos agrupados por áreas, se cotiza en 24 horas o menos.
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-tiempo-de-instalacion.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Cuanto tardan en instalar?</h5>
        <p class="card-text">
            En promedio una cuadrilla de 2 instaladores realizan 5 unidades por día.
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-tiempo-de-entrega.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Que tiempo de entrega tienen?</h5>
        <p class="card-text">
            Con colores de inventario de 5 a 7 días, en colores especiales 5 semanas.
        </p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card h-100">
      <img src="./img/icono-cotizacion.svg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">¿Que requiero para que me coticen?</h5>
        <p class="card-text">
            Planos con medidas o croquis, en formato digital (dwg, pdf o jpg) subiendolos a nuestro formulario 
            o enviandonos un correo.
        </p>
      </div>
    </div>
  </div>
</div>
</div>

<!-- Opciones -->
<div class="container bg-light">
    <div class="row ml-auto">
      <h2 class="font-weight-bold mt-2">Opciones para cotizar</h2>
    </div>
    <div class="row align-items-center my-5">
      <div class="col-lg-2">
        <img src="./img/01-main.svg" alt="Opción 1">
      </div>
      <div class="col-lg-7">
        <h4 class="font-weight-normal">Agenda una visita a obra</h4>
        <p>Proporciona los datos de tu obra y agenda una cita con nuestros expertos
          para asesorarte en tu proyecto <strong>sin costo.</strong>
        </p>
        <a class="btn btn-outline-primary" href="agenda.php">Agendar</a>
      </div>
      <div class="col-lg-3">
        <img src="./img/person_main.svg" alt="Agenda una Cita">
      </div>
    </div>
    <div class="row align-items-center my-5">
      <div class="col-lg-2">
        <img src="./img/02-main.svg" alt="Opción 2">
      </div>
      <div class="col-lg-7">
        <h4 class="font-weight-normal">Sube tu plano</h4>
        <p>Envianos tu plano en formato <strong>.dwg</strong> (AutoCad) o en <strong>.pdf</strong> con las
      medidas de tu proyecto.</p>
        <a class="btn btn-outline-primary" href="sube-tu-plano.php">Subir</a>
      </div>
      <div class="col-lg-3">
        <img src="./img/cloud_main.svg" alt="Sube tu plano">
      </div>
    </div>
    <div class="row align-items-center my-5">
      <div class="col-lg-2">
        <img src="./img/03-main.svg" alt="Opción 3">
      </div>
      <div class="col-lg-7">
        <h4 class="font-weight-normal">Cotiza en línea</h4>
        <p>Precios al instante, puedes obtener un estimado de tu proyecto, solo proporciona los datos requeridos.</p>
        <a class="btn btn-outline-primary" href="cotizador.php">Cotizar</a>
      </div>
      <div class="col-lg-3">
        <img src="./img/sys_main.svg" alt="Cotiza tu proyecto el línea">
      </div>
    </div>
  </div>
<?php
    include_once('footer.php');
?>