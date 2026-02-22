# Backend README

## Navigating the Folder & File Structure

This backend follows a modular Go project structure for clarity, scalability, and maintainability. Here’s how to navigate and use each folder:

### Main Folders
- **cmd/**: Entry points for applications (main.go).
- **internals/**: Core application logic, subdivided into:
  - **api/**: API layer.
    - **handler/**: HTTP handlers (business logic for endpoints).
    - **router/**: Route definitions and setup.
  - **config/**: Configuration files and logic (env, app settings).
  - **dto/**: Data Transfer Objects (request/response schemas).
  - **models/**: Database models/entities (define structs here for GORM).
  - **repository/**: Data access layer (DB queries, GORM usage).
  - **services/**: Business logic and integrations (notifications, email, Redis, etc.).
  - **errors/**: Custom error types and handling.
  - **logger/**: Logging setup/utilities.
  - **migrations/**: SQL migration files/scripts.
  - **tests/**: Test files for backend logic.
  - **utils/**: Utility functions/helpers.
  - **workers/**: Background jobs, async processing.
  - **integrations/**: External service integrations (optional).
- **mock/**: Mock data or interfaces for testing.

### Adding Features
- **Notifications/Email**: Add service files in `internals/services`.
- **Redis DB**: Add integration/service code in `internals/services`.
- **New DB Tables**: Define structs in `internals/models`, update GORM models, add migration scripts in `internals/migrations`.
- **Migrations**: Use a migration tool (e.g., golang-migrate), keep scripts in `internals/migrations`.
- **Error Handling/Logging**: Centralize logic in `internals/errors` and `internals/logger`.

### Example: Bookkeeping Software
Suppose you’re building a bookkeeping backend:

- **models/**: Define structs like `Account`, `Transaction`, `Invoice`.
- **repository/**: Implement GORM queries for CRUD operations.
- **services/**: Add business logic, e.g., posting transactions, sending invoice emails, integrating with payment gateways.
- **api/handler/**: Create HTTP handlers for endpoints like `/accounts`, `/transactions`, `/invoices`.
- **api/router/**: Set up routes for bookkeeping endpoints.
- **migrations/**: Add SQL files for creating tables (accounts, transactions, invoices).
- **errors/**: Define custom error types (e.g., `ErrInsufficientFunds`).
- **logger/**: Set up logging for audit trails.
- **workers/**: Add background jobs (e.g., nightly reconciliation).

### Bookkeeping Example Structure
```
backend/
  cmd/
  internals/
    api/
      handler/
      router/
    config/
    dto/
    models/
      account.go
      transaction.go
      invoice.go
    repository/
      account_repository.go
      transaction_repository.go
    services/
      email_service.go
      notification_service.go
      payment_integration.go
    errors/
    logger/
    migrations/
      001_create_accounts.sql
      002_create_transactions.sql
    workers/
      reconciliation_worker.go
    tests/
    utils/
    integrations/
  mock/
```

## Summary
- Keep business logic in `services/`.
- Separate API, handlers, and routing.
- Isolate DB models and repositories.
- Use dedicated folders for config, errors, logging, migrations.
- Organize tests alongside code or in a central `tests/`.

This structure supports scalable, maintainable Go web apps and is suitable for complex domains like bookkeeping software.