function confirmar_producto_a_carrito(html_carrito, boton, en_producto) {
    //$( "#lugar_carrito" ).html( html_carrito );
    //$('.svg-carrito').removeClass('svg-carrito').addClass('svg-carrito-lleno');
    var num_productos = html_carrito;
    $('#cant_prod_carrito').text(num_productos);
    //$('#svg_pro_carrito_movil').text(num_productos);
    $("span", boton).text("Eliminar del carrito");
    if (en_producto){
        $(boton).removeClass('btn-agregar-producto-carrito').addClass('btn-agregar-producto-carrito-ok');
    }
    else{
        $(boton).removeClass('btn-producto-carrito').addClass('btn-producto-carrito-ok');
    }
}
function confirmar_eliminaciion_carrito(html_carrito, boton, en_producto) {
    if (html_carrito === 'nada'){
        $( "#lugar_carrito" ).html( '<div></div>' );
        $('.svg-carrito').removeClass('svg-carrito-lleno').addClass('svg-carrito');
        $('#svg_pro_carrito').text('');
        $('#svg_pro_carrito_movil').text('');
    }
    else{
        $( "#lugar_carrito" ).html( html_carrito );
        $('.svg-carrito').removeClass('svg-carrito').addClass('svg-carrito-lleno');
        var num_productos = $("#area_carrito").data("numproductos");
        $('#svg_pro_carrito').text(num_productos);
        $('#svg_pro_carrito_movil').text(num_productos);
    }
    $("span", boton).text("Agregar al carrito");
    if (en_producto){
        $(boton).removeClass('btn-agregar-producto-carrito').addClass('btn-agregar-producto-carrito-ok');
    }
    else{
        $(boton).removeClass('btn-producto-carrito-ok').addClass('btn-producto-carrito');
    }
}
function agregar_producto(id_producto, boton, en_producto) {
    var url_car = baseurl.concat("carrito/agregar/");
    $.ajax({
        url : url_car,
        method : "POST",
        data : {pro_id: id_producto},
        success: function(respuesta){
            if (respuesta !== 'FALSE'){
                confirmar_producto_a_carrito(respuesta, boton, en_producto);
            }
        }
    });
}
function eliminar_producto(id_producto, boton, en_producto) {
    var url_car = baseurl.concat("carrito/eliminar_ajax/");
    $.ajax({
        url : url_car,
        method : "POST",
        data : {pro_id: id_producto},
        success: function(respuesta){
            if (respuesta !== 'FALSE'){
                confirmar_eliminaciion_carrito(respuesta, boton, en_producto);
            }
        }
    });
}
$( document ).ready(function() {
	$( "#carouselInicio" ).carousel({
		interval: 4000
    });
    $( ".btn-producto-carrito" ).click(function(){
        var id_producto = $(this).data("productoid");
        agregar_producto(id_producto, this, false);
    });

    $( ".btn-producto-carrito-ok" ).click(function(){
        var id_producto = $(this).data("productoid");
        eliminar_producto(id_producto, this, false);
    });

    $( ".btn-agregar-producto-carrito" ).click(function(){
        var id_producto = $(this).data("productoid");
        agregar_producto(id_producto, this, true);
    });

    $( "#btn_act_carrito" ).click(
        function() {
            var width = $(window).width();
            if (width > 767) {
                $("#area_carrito").toggle();
                return false;
            }
            else {
                return true;
            }
        }
    );

    $( ".carrito-cantidad-menos-mas" ).click(
        function() {
            var id_producto = $(this).data("pid");
            var precio = $(this).data("pprecio");
            var opc = $(this).data("opc");
            var input = "#carrito_input_".concat(id_producto);
            var id_span_subtotal = "#subtotal_".concat(id_producto);
            var cantidad = parseInt($(input).val());
            if (isNaN(cantidad))
            {
                cantidad = 1;
            }
            if (opc == 0)
            {
                cantidad = cantidad-1;
                if (cantidad < 1)
                {
                    cantidad = 1;
                }
            }
            else
            {
                cantidad = cantidad+1;
                if (cantidad > 19) {
                    cantidad = 19;
                }
            }
            $(input).val(cantidad);
            precio = cantidad*precio;
            var precio_texto = "$ ".concat($.number(precio, 2));
            precio_texto = precio_texto.concat(" MXN");
            $(id_span_subtotal).text(precio_texto);
            for (var i = 0; i < obj_carrito.length; i++)
            {
                if (id_producto == obj_carrito[i].id)
                {
                    obj_carrito[i].cantidad = cantidad;
                }
            }
            var total = 0;
            for (var i = 0; i < obj_carrito.length; i++)
            {
                total = total+(obj_carrito[i].cantidad*obj_carrito[i].precio);
            }
            var subtotal = total/1.16;
            var iva = subtotal*0.16;
            var subtotal_texto = "$".concat($.number(subtotal, 2));
            subtotal_texto = subtotal_texto.concat(" MXN");
            var iva_texto = "$".concat($.number(iva, 2));
            iva_texto = iva_texto.concat(" MXN");
            var total_texto = "$".concat($.number(total, 2));
            total_texto = total_texto.concat(" MXN");
            $("#carrito_subtotal").text(subtotal_texto);
            $("#carrito_total").text(total_texto);
            $("#carrito_iva").text(iva_texto);
            return false;
        }
    );

    $( "#btn_generar_cotizacion" ).click(
        function() {
            $('#modal_datos_cotizacion').modal('show');
            return false;
        }
    );

    $( "#btn_crear_cotizacion" ).click(
        function() {
            var inputs = ["#titulo", "#nombre", "#apellidos", "#email", "#telefono"];
            var requeridos = true;
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val().length < 3) {
                    $(inputs[i]).addClass('is-invalid');
                    requeridos = false;
                }
                else {
                    $(inputs[i]).removeClass('is-invalid');
                }
            }
            if (requeridos === true) {
                var correo = $("#email").val();
                var telefono = $("#telefono").val();
                var exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var exp_telefono = /^(?=.*\d)[\d ()-]+$/;
                var inputs_validos = true;
                if (exp_telefono.test(telefono) === false) {
                    $("#telefono").addClass('is-invalid');
                    inputs_validos = false;
                }
                else {
                    $("#telefono").removeClass('is-invalid');
                }
                if (exp_email.test(correo) === false) {
                    $("#email").addClass('is-invalid');
                    inputs_validos = false;
                }
                else {
                    $("#email").removeClass('is-invalid');
                }
                if (inputs_validos === true) {
                    $("#btn_crear_cotizacion").hide();
                    $("#btn_crear_cotizacion_trabajando").show();
                    var aux = 1;
                    for (var j = 0; j < obj_carrito.length; j++) {
                        aux = parseInt($("#carrito_input_".concat(obj_carrito[j].id)).val());
                        $("#can_cot_".concat(obj_carrito[j].id)).val(aux);
                    }
                    $( "#form_crear_cotizacion" ).submit();
                }
            }
            return false;
        }
    );

    $( "#select_opc" ).change(function () {
        $( "select option:selected" ).each(function() {
            location.href = $(this).val();
        });
    });

    $( ".btn-producto-no-habilitado" ).click(
        function() {
            var id_producto = $(this).data("productoid");
            $('#tmp_pro_aviso').val(id_producto);
            $("#btn_enviando_aviso").hide();
            $('#aviso_disponibilidad').modal('show');
            return false;
        }
    );

    $( "#btn_enviar_aviso" ).click(
        function() {
            var id_producto = $('#tmp_pro_aviso').val();
            var email = $('#email_aviso').val();
            var exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (exp_email.test(email) === true && id_producto.length > 0) {
                $("#btn_enviar_aviso").hide();
                $("#btn_enviando_aviso").show();
                var url_post = baseurl.concat("contacto/disponibilidad/");
                $.ajax({
                    url : url_post,
                    method : "POST",
                    data : {pro_id: id_producto, correo: email},
                    success: function(respuesta) {
                        if (respuesta !== 'FALSE') {
                            $("#btn_enviar_aviso").show();
                            $("#btn_enviando_aviso").hide();
                            $('#tmp_pro_aviso').val('');
                            $('#email_aviso').val(email);
                            $('#aviso_disponibilidad').modal('hide');
                        }
                    }
                });
            }
            return false;
        }
    );

    $( ".btn-producto-descuento-adicional" ).click(
        function() {
            var id_producto = $(this).data("productoid");
            $('#tmp_pro_aviso_descuento').val(id_producto);
            $("#btn_enviando_aviso2").hide();
            $('#aviso_gana_descuento').modal('show');
            return false;
        }
    );

    $( "#btn_enviar_aviso_descuento" ).click(
        function() {
            var id_producto = $('#tmp_pro_aviso_descuento').val();
            var email = $('#email_aviso_descuento').val();
            var nombre = $('#nombre_aviso_descuento').val();
            var celular = $('#celular_aviso_descuento').val();
            var exp_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var exp_nombre = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
            var exp_celular = /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/;
            if (exp_email.test(email) === true && id_producto.length > 0 && exp_nombre.test(nombre) === true && exp_celular.test(celular) === true) {
                $("#btn_enviar_aviso_descuento").hide();
                $("#btn_enviando_aviso2").show();
                var url_post = baseurl.concat("contacto/obtener_codigo_descuento/");
                $.ajax({
                    url : url_post,
                    method : "POST",
                    data : {txt_id: id_producto, txt_email: email, txt_nombre: nombre, txt_cel: celular},
                    success: function(respuesta) {
                        if (respuesta !== 'FALSE') {
                            $("#btn_enviar_aviso_descuento").show();
                            $("#btn_enviando_aviso2").hide();
                            $('#tmp_pro_aviso_descuento').val('');
                            $('#email_aviso_descuento').val(email);
                            $('#aviso_gana_descuento').modal('hide');
                        }
                    }
                });
            }
            return false;
        }
    );

    $( ".btn-sitio" ).mouseover(
        function() {
            var img = $(this).data("img");
            var img_id = $(this).data("id");
            var src = baseurl.concat("publico/imagenes/sitios/");
            src = src.concat(img);
            $(img_id).attr("src", src);
        }
    ).mouseout(
        function() {
            var img = $(this).data("img");
            img = img.replace("_2", "");
            var img_id = $(this).data("id");
            var src = baseurl.concat("publico/imagenes/sitios/");
            src = src.concat(img);
            $(img_id).attr("src", src);
        }
    );

});
$(window).click(function() {
    $("#area_carrito").hide();
});