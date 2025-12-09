# Endpoints

All endpoint have a /api prefix.

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| /register | POST  | no |  create user |
| /login    | POST  | no |  login  |
| /users    | GET   | yes |  read users |

## Herbs

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/herbs | Yes | Get all herbs |
| GET | /api/herbs/:id | Yes | Get a herb |
| POST | /api/herbs | Yes | Create a herb |
| PUT | /api/herbs/:id | Yes | Update a herb |
| DELETE | /api/herbs/:id | Yes | Delete a herb |

### Fields of the herbs table

| Field | Type | Description |
|---|---|---|
| id | int | identifier |
| name | string | Nem of the herb |

## Medicinals

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/medicinals | Yes | Get all medicinals |
| GET | /api/medicinals/:id | Yes | Get a medicinal |
| POST | /api/medicinals | Yes | Create a medicinal |
| PUT | /api/medicinals/:id | Yes | Update a medicinal |
| DELETE | /api/medicinals/:id | Yes | Delete a medicinal |

### Fields of the medicinals table

| Field | Type | Description |
|---|---|---|
| id | int | identifier |
| name | string | Medicinal effect |

### Herbmeds

| Endpoint | Method | Auth | Description |
|-|-|-|-|
| GET | /api/herbmeds | Yes | Get all herbmeds |
| POST | /api/herbmeds | Yes | Create a herbmed |
| DELETE | /api/herbmeds/:id | Yes | Delete a herbmed |

### Fields of the herb_med table

| Field | Type | Description |
|---|---|---|
| herbId | int | herb identifier |
| medicinalId | int | Medicinal effect identifier |

For example:

```bash
res post localhost:8000/api/herbs name=növény1
res post localhost:8000/api/medicinals name=hatás1
res post localhost:8000/api/herbmeds/1/1
```
