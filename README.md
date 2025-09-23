# sip expressapi sabon

Express based REST API sablon

## Install

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## APP KEY generation

Run the genkey:

```cmd
node op key:generate
```

## Database settings

The database settings can be found at the following location:

* config/default.json

### Database dialect

The default database is an in-memory database. Its contents are cleared after the server is restarted.

One of:

* sqlite
* mariadb

After installing the appropriate dependencies, it can be used:

* mysql
* postgres
* mssql
* db2
* snowflake
* oracle

With the `sqlite` option, the usual path setting is `database.sqlite`. The default storage is :memory:, where data is stored in memory only.

## Starting

For development:

```cmd
npm run dev
```

Run productum:

```cmd
npm start
```

## Model and controller creation

You can generate a model and controller with the following commands:

```bash
node op make:model something
node op make:controller something
```

The name after the model and controller statements must be given in the singular. Controller generation automatically appends the "Controller" suffix.

## Admin user

The admin user can be created with the following command:

```bash
node op admin:generate
```

The command will prompt for the password.

## Config generation

The next command generates the default config file:

```bash
node op conf:generate
```

## Database seed

The database can be seeded with the following command:

```bash
node op db:seed <model_name> <file_path>
```

The model name must be given in the singular and lowercase. The file extension must be:

* .json
* .csv

The keys in the JSON file and the field names in the CSV file must match the model fields.

If the CSV file contains quotation marks, they are automatically removed.

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2023 Sallai András

## Endpoints

### Users

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| POST | /api/register | No | Register a user |
| POST | /api/login | No | Login a user |
| GET | /api/users | Yes | Get all users |

### Herbs

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/herbs | Yes | Get all herbs |
| GET | /api/herbs/:id | Yes | Get a herb |
| POST | /api/herbs | Yes | Create a herb |
| PUT | /api/herbs/:id | Yes | Update a herb |
| DELETE | /api/herbs/:id | Yes | Delete a herb |

### Medicinals

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/medicinals | Yes | Get all medicinals |
| GET | /api/medicinals/:id | Yes | Get a medicinal |
| POST | /api/medicinals | Yes | Create a medicinal |
| PUT | /api/medicinals/:id | Yes | Update a medicinal |
| DELETE | /api/medicinals/:id | Yes | Delete a medicinal |

### Herbmeds

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/herbmeds | Yes | Get all herbmeds |
| POST | /api/herbmeds | Yes | Create a herbmed |
| DELETE | /api/herbmeds/:id | Yes | Delete a herbmed |

For example:

```bash
res post localhost:8000/api/herbs name=növény1
res post localhost:8000/api/medicinals name=hatás1
res post localhost:8000/api/herbmeds/1/1
```
