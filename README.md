# Products Microservice

Microservicio de productos construido con [NestJS](https://nestjs.com/), Prisma y SQLite. Se comunica vía [NATS](https://nats.io/).

## Inicio rápido

```bash
# 1. Levantar NATS
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats

# 2. Instalar dependencias
pnpm install

# 3. Generar cliente de Prisma y ejecutar migraciones
pnpm exec prisma generate
pnpm exec prisma migrate dev

# 4. Iniciar en modo desarrollo
pnpm run start:dev
```

## Variables de entorno

```env
NATS_SERVERS="nats://localhost:4222"
DATABASE_URL="file:./dev.db"
```
