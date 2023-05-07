import { join } from 'desm'
import autoload from '@fastify/autoload'

export default async function (app, opts) {
  app.register(autoload, {
    dir: join(import.meta.url, 'routes')
  })
}