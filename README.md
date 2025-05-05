# Data Annotation API

A minimal Express + TypeScript + MongoDB service for managing image annotation projects and segmentation masks.

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

| Method | Endpoint                                      | Body                                               | Description                      |
|--------|-----------------------------------------------|----------------------------------------------------|----------------------------------|
| GET    | `/health`                                     | —                                                  | Health check                     |
| POST   | `/api/projects`                               | `{ name, description? }`                           | Create project                   |
| POST   | `/api/projects/:projectId/images`             | `{ uri, width, height }`                           | Register image                   |
| POST   | `/api/images/:imageId/annotations`            | `{ annotator, label, mask, bbox, metadata? }`      | Create annotation                |
| GET    | `/api/annotations/:annotationId`              | —                                                  | Retrieve annotation by ID        |
| GET    | `/api/annotations`                            | `?label=&annotator=`                               | Filtered list of annotations     |
| GET    | `/api/annotations/:annotationId/rank`         | —                                                  | Compute area rank within image   |

> **Note:**  
> - `mask` = array of polygons (`number[][][]`)  
> - `bbox` = `{ x, y, width, height }`  
> - `metadata` = optional SAM/custom JSON  
> - All resources include `createdAt` & `updatedAt`
---
