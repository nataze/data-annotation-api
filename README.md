# Data Annotation API

A minimal Express, TypeScript, and MongoDB service for managing image annotation projects and segmentation masks.

---

## Setup

1. Clone the repo and `cd` into it  
2. Install dependencies:  

```
npm install
```

---

## Environment Variables

| Key         | Description                                    |
|-------------|------------------------------------------------|
| `MONGO_URI` | MongoDB connection URI (e.g. Atlas cluster)    |
| `PORT`      | Port for the API to listen on (default: 5000)  |

---

## Running the Service

- **Development** (with hot reload):  

```
npm run dev
```

- **Production**:  

```
npm run build
npm start
```

The API will be available at `http://localhost:{{PORT}}` (default `5000`).

---

## API Endpoints

| Method | Endpoint                                                       | Body                                               | Description                           |
|--------|----------------------------------------------------------------|----------------------------------------------------|---------------------------------------|
| GET    | `/health`                                                      | —                                                  | Health check                          |
| POST   | `/api/v1/projects`                                             | `{ name, description? }`                           | Create project                        |
| POST   | `/api/v1/projects/:projectId/images`                           | `{ uri, width, height }`                           | Register image                        |
| POST   | `/api/v1/images/:imageId/annotations`                          | `{ annotator, label, mask, bbox, metadata? }`      | Create annotation                     |
| GET    | `/api/v1/images/:imageId/annotations/:id`                      | —                                                  | Retrieve annotation by ID             |
| GET    | `/api/v1/images/:imageId/annotations?label=&annotator=`        | —                                                  | List or Filter annotations by label/annotator |
| GET    | `/api/v1/images/:imageId/annotations/:id/rank`                 | —                                                  | Compute annotation area rank (1 = largest) |                                                 | Compute area rank within image   |

> **Note:**  
> - `mask` = array of polygons (`number[][][]`)  
> - `bbox` = `{ x, y, width, height }`  
> - `metadata` = optional SAM/custom JSON
---
