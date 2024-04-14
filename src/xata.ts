// Generated by Xata Codegen 0.29.2. Please do not edit.
import { buildClient } from '@xata.io/client'
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from '@xata.io/client'

const tables = [
  {
    name: 'uploads',
    columns: [{ name: 'image', type: 'file', file: { defaultPublicAccess: true } }],
  },
  {
    name: 'profiles',
    columns: [
      { name: 'slug', type: 'string', unique: true },
      { name: 'name', type: 'string' },
      { name: 'image', type: 'string' },
      { name: 'height', type: 'string' },
      { name: 'width', type: 'string' },
      { name: 'imageHash', type: 'text' },
    ],
  },
  {
    name: 'photographs',
    columns: [
      { name: 'image', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'tagline', type: 'string' },
      { name: 'height', type: 'string' },
      { name: 'width', type: 'string' },
      { name: 'profile-slug', type: 'string' },
      { name: 'slug', type: 'string' },
      { name: 'imageHash', type: 'text' },
    ],
  },
  {
    name: 'user',
    columns: [
      { name: 'paid', type: 'bool' },
      { name: 'hashed_password', type: 'string' },
      { name: 'user_id', type: 'string' },
      { name: 'email', type: 'string', unique: true },
    ],
  },
  {
    name: 'session',
    columns: [
      { name: 'user_id', type: 'string' },
      { name: 'expires_at', type: 'datetime' },
      { name: 'session_id', type: 'string' },
    ],
  },
] as const

export type SchemaTables = typeof tables
export type InferredTypes = SchemaInference<SchemaTables>

export type Uploads = InferredTypes['uploads']
export type UploadsRecord = Uploads & XataRecord

export type Profiles = InferredTypes['profiles']
export type ProfilesRecord = Profiles & XataRecord

export type Photographs = InferredTypes['photographs']
export type PhotographsRecord = Photographs & XataRecord

export type User = InferredTypes['user']
export type UserRecord = User & XataRecord

export type Session = InferredTypes['session']
export type SessionRecord = Session & XataRecord

export type DatabaseSchema = {
  user: UserRecord
  session: SessionRecord
  uploads: UploadsRecord
  profiles: ProfilesRecord
  photographs: PhotographsRecord
}

const DatabaseClient = buildClient()

const defaultOptions = {
  databaseURL:
    'https://Hrihorii-Ilin-s-workspace-tmh8bt.eu-central-1.xata.sh/db/salo-ai',
}

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables)
  }
}

let instance: XataClient | undefined = undefined

export const getXataClient = () => {
  if (instance) return instance

  instance = new XataClient()
  return instance
}



