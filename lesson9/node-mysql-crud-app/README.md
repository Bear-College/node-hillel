# Node.js MySQL CRUD Example

## Usage

1. Set up your MySQL server and create a database:
```sql
CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);
```

2. Update your DB password in `src/db.js`.

3. Start the project:

```bash
npm run dev
```

4. API Endpoints:

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| POST   | /api/users     | Create new user   |
| GET    | /api/users     | Get all users     |
| PUT    | /api/users/:id | Update user by ID |
| DELETE | /api/users/:id | Delete user by ID |
