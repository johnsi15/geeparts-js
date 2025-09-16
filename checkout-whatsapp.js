jQuery(document).ready(function ($) {
  console.log('Documento listo - Checkout WhatsApp')

  // Selector del botón
  var $botonWhatsApp = $('#boton-checkout-whatsapp')

  // Verificar existencia del botón
  if ($botonWhatsApp.length === 0) {
    console.error('Botón de WhatsApp no encontrado')
    return
  }

  // Función para abrir WhatsApp (simplificada con wa.me)
  function abrirWhatsApp(numero, mensaje) {
    // Limpiar el número (quitar + si existe, wa.me lo maneja automáticamente)
    var numeroLimpio = numero.replace(/\+/g, '')

    // URL universal que funciona en todos los dispositivos
    var urlWhatsApp = 'https://wa.me/' + numeroLimpio + '?text=' + mensaje

    console.log('Abriendo WhatsApp con URL:', urlWhatsApp)

    // Abrir WhatsApp - wa.me maneja automáticamente app vs web
    window.open(urlWhatsApp, '_blank')
  }

  // Manejador de eventos de click
  $(document).on('click', '#boton-checkout-whatsapp', function (e) {
    console.log('Botón WhatsApp clickeado')
    e.preventDefault()

    // Validación de formulario
    var $formulario = $('form.checkout')

    console.log('Formulario de checkout:', $formulario)

    // Limpiar errores previos
    $('.woocommerce-error').remove()
    $('.woocommerce-invalid').removeClass('woocommerce-invalid')

    // Validación de campos requeridos
    var camposValidos = true
    $formulario.find('.validate-required').each(function () {
      var $campo = $(this).find('input, select, textarea')

      // Evita errores de campos no encontrados
      if ($campo.length === 0) return

      // Omitir los campos de envío (shipping)
      if ($campo.is('#shipping_first_name, #shipping_last_name')) {
        console.log('Omitiendo validación para:', $campo.attr('id'))
        return
      }

      // Asegurar que $campo existe antes de llamar .val()
      var valor = $campo.length ? $campo.val()?.trim() : ''

      console.log('Validando campo:', $campo, 'Valor:', valor)

      if (!valor) {
        console.error('Campo requerido vacío:', $campo)
        camposValidos = false
        $campo.addClass('woocommerce-invalid')

        // Mostrar mensaje de error
        var mensajeError = $campo.attr('data-error-message') || 'Este campo es obligatorio'
        $campo.closest('.form-row').prepend(
          `<ul class="woocommerce-error" role="alert">
                        <li>${mensajeError}</li>
                    </ul>`
        )
      }
    })

    // Validación de email
    var $email = $('#billing_email')
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    console.log('Validando email:', $email.val())

    if (!$email.val() || !emailRegex.test($email.val())) {
      console.error('Email inválido')
      camposValidos = false
      $email.addClass('woocommerce-invalid')
      $email.closest('.form-row').prepend(
        `<ul class="woocommerce-error" role="alert">
                    <li>Introduce una dirección de correo electrónico válida</li>
                </ul>`
      )
    }

    // Si hay campos inválidos, detener proceso
    if (!camposValidos) {
      console.error('Formulario con campos inválidos')

      // Desplazar a primer error
      $('html, body').animate(
        {
          scrollTop: $('.woocommerce-error').first().offset().top - 100,
        },
        500
      )

      return false
    }

    // Deshabilitar botón durante el proceso
    $(this).prop('disabled', true).addClass('cargando')

    console.log('Iniciando proceso de pedido por WhatsApp')

    // Llamada AJAX para crear pedido
    $.ajax({
      url: checkoutWhatsappParams.ajax_url,
      type: 'POST',
      data: {
        action: 'crear_pedido_whatsapp',
        seguridad: checkoutWhatsappParams.nonce,
      },
      success: function (respuesta) {
        console.log('Respuesta del servidor:', respuesta)

        if (respuesta.success) {
          // Usar wa.me para máxima compatibilidad
          abrirWhatsApp(respuesta.data.numero_whatsapp, respuesta.data.mensaje_whatsapp)

          setTimeout(function () {
            window.location.href = '/mi-cuenta/orders/'
          }, 1500)
        } else {
          console.error('Error al crear pedido')
          alert('Error al crear el pedido')
        }
      },
      error: function (xhr, status, error) {
        console.error('Error en la solicitud AJAX:', status, error)
        console.error('Detalles del error:', xhr.responseText)
        alert('Error al procesar la solicitud')
      },
      complete: function () {
        console.log('Proceso AJAX completado')
        $('#boton-checkout-whatsapp').prop('disabled', false).removeClass('cargando')
      },
    })
  })
})
