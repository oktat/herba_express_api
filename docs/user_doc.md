# User documentation

## Install dependencies

```cmd
npm install
```

## Copy config file

Copy **config/default.json.example** to **config/default.json** file.

## App key generation

```cmd
node op key:generate
```

## Database setup

Edit the config/default.json file.

## Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | yes |  read users |

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

## The register endpoint

```json
{
    "name": "joe",
    "email": "joe@green.lan",
    "password": "secret",
    "password_confirmation": "secret"
}
```

## The login endpoint

```json
{
    "name": "joe",
    "password": "secret"
}
```

You receive the bearear token with accessToken key.

## The users endpoint

Send the bearer token.

## Model and controller generation

```cmd
node op create model thing
node op create controller thing
```
