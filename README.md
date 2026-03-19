# Geeparts JS

Parte del código de JavaScript para el sitio web Geeparts.

## Publish

### Configurar token de npm (primera vez o cuando el token expire)

1. Ir a [npmjs.com → Account → Access Tokens](https://www.npmjs.com/settings/johnserranodev/tokens)
2. Hacer clic en **Generate New Token → Classic Token**
3. Tipo: seleccionar **Automation** (evita el flujo de 2FA al publicar desde tu máquina)
   - El aviso _"There are security risks with this option"_ es solo informativo, se puede ignorar para uso local
4. Copiar el token generado
5. Pegarlo en el archivo `.npmrc` en la raíz del proyecto (ya está en `.gitignore`):
   ```
   //registry.npmjs.org/:_authToken=npm_TuTokenAqui
   ```
6. Verificar que el token funciona:
   ```shell
   npm whoami
   ```

### Publicar

```shell
# El flag --access public es necesario si el nombre del paquete no es un scope privado (por ejemplo, @andrey/geeparts-js).
npm publish --access public
# Esto simula la publicación y te muestra qué archivos serán subidos.
npm publish --dry-run
```
