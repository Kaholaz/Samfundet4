import { ThemeValue } from '~/constants';

export type UserDto = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  date_joined: Date;
  last_login: Date;
  user_preference: UserPreferenceDto;
  profile: ProfileDto;
  groups: GroupDto[];
  user_permissions?: PermissionDto[];
  user_object_perms?: UserObjectPermissionDto[];
  content_type: ContentTypeDto;
};

export type GroupDto = {
  id: number;
  name: string;
  permissions?: PermissionDto[];
  group_object_perms?: GroupObjectPermissionDto[];
  content_type: ContentTypeDto;
};

export type PermissionDto = {
  id: number;
  name: string;
  content_type: ContentTypeDto;
  codename: string;
};

export type UserObjectPermissionDto = {
  id: number;
  permission: PermissionDto;
  content_type: ContentTypeDto;
  obj_id: string;
  user: UserDto;
};

export type GroupObjectPermissionDto = {
  id: number;
  permission: PermissionDto;
  content_type: ContentTypeDto;
  obj_id: string;
  group: GroupDto;
};

export type ContentTypeDto = {
  id: number;
  app_label: string;
  model: string;
};

export type VenueDto = {
  id: number;
  name: string;
  description: string;
  floor: number;
  last_renovated: number;
  handicapped_approved: boolean;
  responsible_crew: string;
  content_type: ContentTypeDto;
};

export type EventDto = {
  id: number;
  title_no: string;
  title_en: string;
  start_dt: Date;
  end_dt: Date;
  description_long_no: string;
  description_long_en: string;
  description_short_no: string;
  description_short_en: string;
  publish_dt: Date;
  host: string;
  location: string;
  event_group: EventGroupDto;
  content_type: ContentTypeDto;
};

export type EventGroupDto = {
  id: number;
  content_type: ContentTypeDto;
};

export type ProfileDto = {
  id: number;
  nickname: string;
  content_type: ContentTypeDto;
};

export type UserPreferenceDto = {
  id?: number;
  theme?: ThemeValue;
  content_type?: ContentTypeDto;
};
