# Products Microservice

Microservicio de productos construido con [NestJS](https://nestjs.com/), Prisma y SQLite.

## Inicio rapido

```bash
# 1. Instalar dependencias
pnpm install

# 2. Generar cliente de Prisma y ejecutar migraciones
pnpm exec prisma generate
pnpm exec prisma migrate dev

# 3. Iniciar en modo desarrollo
pnpm run start:dev
```

La app corre en el puerto `3000` por defecto (configurable en `.env`).
