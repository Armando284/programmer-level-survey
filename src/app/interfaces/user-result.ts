import { FieldValue } from "@angular/fire/firestore";
import { level } from "./types";

export interface UserResult {
  level: level,
  createdAt: string | Date | FieldValue,
}
