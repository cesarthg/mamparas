
<?php
    include_once('header.php');
?>

<div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-6">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="./img/img-sube-tu-plano.jpg"
            alt="Colores y Acabados de Mampras"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="font-weight-bold py-2">Sube tu plano</h1>
          <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
        </div>
      </div>
    </div>
    <!-- Formulario -->
    <div class="container">
      <div class="row">
        <h4>Sube tu plano</h4>
      </div>
      <div class="row mt-3">
        <p>
          Puedes subir tu plano en formato <strong>.dwg</strong> (dibujo de
          AutoCad) o en <strong>PDF</strong>.
        </p>
      </div>
      <div class="row mt-3">
        <form>
          <div class="form-row">
            <div class="form-group col-lg-3">
              <label for="input-Contacto">Nombre</label>
              <input
                type="text"
                class="form-control"
                placeholder="Nombre Apellido"
              />
            </div>
            <div class="form-group col-lg-3">
              <label for="input-Correo">Correo</label>
              <input
                type="email"
                class="form-control"
                placeholder="alguien@correo.com"
              />
            </div>
            <div class="form-group col-lg-3">
              <label for="input-Telefono">Teléfono</label>
              <input
                type="text"
                class="form-control"
                placeholder="55 6677 9988"
              />
            </div>
            <div class="form-group col-lg-3">
              <label for="input-Modelo">Modelo de Mampara</label>
              <select class="form-control">
                <option>Selecciona un modelo</option>
                <option>Modelo 2</option>
                <option>Modelo 3</option>
                <option>Modelo 4</option>
                <option>Modelo 5</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col mt-3">
              <div class="custom-file col">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile02"
                />
                <label
                  class="custom-file-label"
                  for="inputGroupFile02"
                  aria-describedby=""
                  >Selecciona tu archivo</label
                >
              </div>
              <div class="input-group-append">
                <span class="input-group-text" id="">Subir</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

<?php
    include_once('footer.php');
?>