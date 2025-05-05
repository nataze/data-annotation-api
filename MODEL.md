# Data Model

## User
| Field       | Type      | Description                             |
| ----------- | --------- | --------------------------------------- |
| `_id`       | ObjectId  | Unique identifier                       |
| `name`      | String    | Full name of the user                   |
| `email`     | String    | User’s email address (must be unique)   |
| `createdAt` | Date      | When the user record was created        |
| `updatedAt` | Date      | When the user record was last modified  |

---

## Project
| Field         | Type      | Description                                               |
| ------------- | --------- | --------------------------------------------------------- |
| `_id`         | ObjectId  | Unique identifier                                         |
| `name`        | String    | Human-readable project name                               |
| `description` | String    | Optional longer description                              |
| `owner`       | ObjectId  | Reference to the User who owns/manages this project       |
| `createdAt`   | Date      | When the project was created                              |
| `updatedAt`   | Date      | When the project was last modified                        |

---

## Image
| Field         | Type      | Description                                               |
| ------------- | --------- | --------------------------------------------------------- |
| `_id`         | ObjectId  | Unique identifier                                         |
| `project`     | ObjectId  | Reference to the Project this image belongs to            |
| `uri`         | String    | URL or storage path of the image                          |
| `width`       | Number    | Width of the image in pixels                              |
| `height`      | Number    | Height of the image in pixels                             |
| `createdAt`   | Date      | When the image record was created                         |
| `updatedAt`   | Date      | When the image record was last modified                   |

---

## Annotation
| Field        | Type             | Description                                                                                       |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------- |
| `_id`        | ObjectId         | Unique identifier                                                                                 |
| `image`      | ObjectId         | Reference to the Image being annotated                                                            |
| `annotator`  | ObjectId         | Reference to the User who made this annotation                                                    |
| `label`      | String           | Semantic label for the mask (e.g. `"car"`, `"tree"`)                                              |
| `mask`       | `number[][][]`   | Array of polygons; each polygon is an array of `[x, y]` points                                     |
| `bbox`       | Object           | Tight bounding box for the mask (see below) 
| `area`      | Number          | Precomputed area of the mask in squared pixels                                                  |
| `metadata`  | Object          | Optional SAM-specific and free-form metadata (see below)                                        |
| `createdAt` | Date            | When the annotation was created                                                                 |
| `updatedAt` | Date            | When the annotation was last modified    


### `bbox` sub-fields

| Field  | Type   | Description                                     |
|--------|--------|-------------------------------------------------|
| `x`    | Number | X-coordinate of the top-left corner of the box  |
| `y`    | Number | Y-coordinate of the top-left corner of the box  |
| `width`| Number | Width of the bounding box in pixels             |
| `height`| Number| Height of the bounding box in pixels            |


### `metadata` sub-fields
| Field             | Type               | Description                                         |
|-------------------|--------------------|-----------------------------------------------------|
| `predicted_iou`   | Number             | SAM’s predicted Intersection-over-Union score       |
| `stability_score` | Number             | SAM’s mask stability score                          |
| `mask_rle`        | String             | RLE-encoded mask (e.g. COCO RLE or base64)          |
| `point_coords`    | [number,number][]  | Prompt points used by SAM                           |
| _any other key_   | Any                | Future or custom metadata      