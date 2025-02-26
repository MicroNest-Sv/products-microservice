# Products Microservice

## Development Setup

Follow these steps to set up the development environment for the Products Microservice:

1. **Clone the repository**:
  ```sh
  git clone https://github.com/MicroNest-Sv/products-microservice.git
  ```

2. **Install dependencies**:
  ```sh
  yarn
  ```

3. **Create environment variables file**:
  - Copy the `env.example` file and rename it to `.env`.
  - Update the `.env` file with the necessary configuration values.

4. **Run Prisma migrations**:
  ```sh
  yarn prisma migrate dev
  ```

5. **Start the development server**:
  ```sh
  yarn start:dev
  ```

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Microservices Architecture](https://microservices.io/)

## Contributing

If you wish to contribute to this project, please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
