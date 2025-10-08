function getCorsHeaders(request) {
  const origin = request.headers.get('Origin')
  const allowedOrigins = [
    'https://geeparts.co',
    'https://www.geeparts.co',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ]

  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : 'https://geeparts.co',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export default {
  async fetch(request, env) {
    const corsHeaders = getCorsHeaders(request)

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ message: 'Method not allowed', success: false }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    try {
      const { email, listId } = await request.json()

      if (!email || !email.includes('@')) {
        return new Response(JSON.stringify({ message: 'Email inválido', success: false }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': env.BREVO_API_KEY, // Variable de entorno
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listIds: [listId || 2],
          updateEnabled: true,
        }),
      })

      let data = null
      const contentType = brevoResponse.headers.get('content-type')

      if (brevoResponse.status !== 204 && contentType?.includes('application/json')) {
        data = await brevoResponse.json()
      }

      if (!brevoResponse.ok) {
        if (data.code === 'duplicate_parameter') {
          return new Response(
            JSON.stringify({
              message: '¡Ya estás suscrito a nuestro newsletter!',
              success: true,
              duplicate: true,
            }),
            {
              status: 200,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          )
        }

        return new Response(JSON.stringify(data), {
          status: brevoResponse.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }

      return new Response(
        JSON.stringify({
          message: 'Suscripción exitosa',
          success: true,
          duplicate: false,
          data: data,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: 'Error al procesar la solicitud',
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }
  },
}
