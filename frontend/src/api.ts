import axios, { AxiosResponse } from 'axios';
import {
  ClosedPeriodDto,
  EventDto,
  EventGroupDto,
  FoodCategoryDto,
  FoodPreferenceDto,
  GangDto,
  GangTypeDto,
  HomePageDto,
  ImageDto,
  ImagePostDto,
  InformationPageDto,
  KeyValueDto,
  MenuDto,
  MenuItemDto,
  NotificationDto,
  OrganizationDto,
  RecruitmentAdmissionDto,
  RecruitmentDto,
  RecruitmentPositionDto,
  SaksdokumentDto,
  TextItemDto,
  UserDto,
  UserPreferenceDto,
  VenueDto,
} from '~/dto';
import { reverse } from '~/named-urls';
import { ROUTES } from '~/routes';
import { BACKEND_DOMAIN } from './constants';

export async function getCsrfToken(): Promise<string> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__csrf;
  const response = await axios.get(url, { withCredentials: true });
  return response.data;
}

export async function login(username: string, password: string): Promise<number> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__login;
  const data = { username, password };
  const response = await axios.post(url, data, { withCredentials: true });

  // Django rotates csrftoken after login, set new token received.
  const new_token = response.data;
  axios.defaults.headers.common['X-CSRFToken'] = new_token;

  return response.status;
}

export async function logout(): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__logout;
  const response = await axios.post(url, undefined, { withCredentials: true });

  return response;
}

export async function register(
  username: string,
  firstname: string,
  lastname: string,
  password: string,
): Promise<number> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__register;
  const data = { username, firstname, lastname, password };
  const response = await axios.post(url, data, { withCredentials: true });

  // Django rotates csrftoken after login, set new token received.
  const new_token = response.data;
  axios.defaults.headers.common['X-CSRFToken'] = new_token;

  return response.status;
}

export async function getUser(): Promise<UserDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__user;
  const response = await axios.get<UserDto>(url, { withCredentials: true });

  return response.data;
}

export async function impersonateUser(user?: UserDto): Promise<boolean> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__impersonate;
  const response = await axios.post(url, { user_id: user?.id }, { withCredentials: true });
  return response.status == 200;
}

export async function getUsers(): Promise<UserDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__users;
  const response = await axios.get<UserDto[]>(url, { withCredentials: true });
  return response.data;
}

export async function assignUserToGroup(username: string, group_name: string): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__assign_group;
  const payload = {
    username,
    group_name,
  };
  const response = await axios.post(url, payload, { withCredentials: true });

  return response;
}

export async function getHomeData(): Promise<HomePageDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__home;
  const response = await axios.get<HomePageDto>(url, { withCredentials: true });

  return response.data;
}

export async function putUserPreference(id: string | number, data: Partial<UserPreferenceDto>): Promise<unknown> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__user_preference_detail,
      urlParams: { pk: id },
    });
  const response = await axios.put<UserPreferenceDto>(url, data, { withCredentials: true });

  return response.data;
}

export async function getVenues(): Promise<VenueDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__venues_list;
  const response = await axios.get<VenueDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getVenue(id: string | number): Promise<VenueDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__venues_detail, urlParams: { pk: id } });
  const response = await axios.get<VenueDto>(url, { withCredentials: true });

  return response.data;
}

export async function putVenue(id: string | number, venue: Partial<VenueDto>): Promise<VenueDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__venues_detail, urlParams: { pk: id } });
  const response = await axios.put<VenueDto>(url, venue, { withCredentials: true });
  return response.data;
}

export async function getInformationPages(): Promise<InformationPageDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__information_list;
  const response = await axios.get<InformationPageDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getInformationPage(slug_field: string): Promise<InformationPageDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: slug_field } });
  const response = await axios.get<InformationPageDto>(url, { withCredentials: true });

  return response.data;
}

export async function deleteInformationPage(slug_field: string): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: slug_field } });
  const response = await axios.delete<AxiosResponse>(url, { withCredentials: true });

  return response.data;
}

export async function postInformationPage(data: InformationPageDto): Promise<InformationPageDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__information_list;
  const response = await axios.post<InformationPageDto>(url, data, { withCredentials: true });
  return response.data;
}

export async function putInformationPage(
  slug_field: string,
  page: Partial<InformationPageDto>,
): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: slug_field } });
  const response = await axios.put<InformationPageDto>(url, page, { withCredentials: true });
  return response;
}

export async function getEventsPerDay(): Promise<EventDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__eventsperday;
  const response = await axios.get<EventDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getEventsUpcomming(): Promise<EventDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__eventsupcomming;
  const response = await axios.get<EventDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getEvents(): Promise<EventDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__events_list;
  const response = await axios.get<EventDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function postEvent(data: EventDto): Promise<AxiosResponse<EventDto>> {
  const transformed = { ...data, image_id: data.image?.id };
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__events_list;
  const response = await axios.post<EventDto>(url, transformed, { withCredentials: true });
  return response;
}

export async function putEvent(id: string | number, data: Partial<EventDto>): Promise<AxiosResponse<EventDto>> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__events_detail, urlParams: { pk: id } });
  const response = await axios.put<EventDto>(url, data, { withCredentials: true });
  return response;
}

export async function deleteEvent(id: string | number): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__events_detail, urlParams: { pk: id } });
  const response = await axios.delete<AxiosResponse>(url, { withCredentials: true });
  return response;
}

export async function getEvent(pk: string | number): Promise<EventDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__events_detail, urlParams: { pk: pk } });
  const response = await axios.get<EventDto>(url, { withCredentials: true });

  return response.data;
}

export async function getEventGroups(): Promise<EventGroupDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__eventgroups_list;
  const response = await axios.get<EventGroupDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getMenus(): Promise<MenuDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__menu_list;
  const response = await axios.get<MenuDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getMenu(pk: string | number): Promise<MenuDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__menu_detail, urlParams: { pk: pk } });
  const response = await axios.get<MenuDto>(url, { withCredentials: true });

  return response.data;
}

export async function getMenuItems(): Promise<MenuItemDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__information_list;
  const response = await axios.get<MenuItemDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getMenuItem(pk: string | number): Promise<MenuItemDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: pk } });
  const response = await axios.get<MenuItemDto>(url, { withCredentials: true });

  return response.data;
}

export async function getFoodPreferences(): Promise<FoodPreferenceDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__information_list;
  const response = await axios.get<FoodPreferenceDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getFoodPreference(pk: string | number): Promise<FoodPreferenceDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: pk } });
  const response = await axios.get<FoodPreferenceDto>(url, { withCredentials: true });

  return response.data;
}

export async function getFoodCategorys(): Promise<FoodCategoryDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__information_list;
  const response = await axios.get<FoodCategoryDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getFoodCategory(pk: string | number): Promise<FoodCategoryDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__information_detail, urlParams: { pk: pk } });
  const response = await axios.get<FoodCategoryDto>(url, { withCredentials: true });

  return response.data;
}

export async function getTextItem(pk: string): Promise<TextItemDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__text_item_detail, urlParams: { pk: pk } });
  const response = await axios.get<TextItemDto>(url, { withCredentials: true });
  return response.data;
}

export async function getSaksdokumenter(): Promise<SaksdokumentDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__saksdokument_list;
  const response = await axios.get<SaksdokumentDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getSaksdokument(pk: string | number): Promise<SaksdokumentDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__saksdokument_detail, urlParams: { pk: pk } });
  const response = await axios.get<SaksdokumentDto>(url, { withCredentials: true });

  return response.data;
}

export async function postSaksdokument(data: SaksdokumentDto): Promise<SaksdokumentDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__saksdokument_list;
  const response = await axios.postForm<SaksdokumentDto>(url, data, {
    withCredentials: true,
  });
  return response.data;
}

export async function putSaksdokument(id: string | number, data: Partial<SaksdokumentDto>): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__saksdokument_detail, urlParams: { pk: id } });
  const response = await axios.put<SaksdokumentDto>(url, data, { withCredentials: true });
  return response;
}

export async function getOrganizations(): Promise<OrganizationDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__organizations_list;
  const response = await axios.get<OrganizationDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getGangList(): Promise<GangTypeDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__gangsorganized_list;
  const response = await axios.get<GangTypeDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function getGang(id: string | number): Promise<GangDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__gangs_detail, urlParams: { pk: id } });
  const response = await axios.get<GangDto>(url, { withCredentials: true });

  return response.data;
}

export async function getGangs(): Promise<GangDto[]> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__gangs_list });
  const response = await axios.get<GangDto[]>(url, { withCredentials: true });

  return response.data;
}

export async function postGang(data: GangDto): Promise<GangDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__gangs_list;
  const response = await axios.post<GangDto>(url, data, { withCredentials: true });

  return response.data;
}

export async function putGang(id: string | number, data: Partial<GangDto>): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__gangs_detail, urlParams: { pk: id } });
  const response = await axios.put<GangDto>(url, data, { withCredentials: true });
  return response;
}

export async function getClosedPeriods(): Promise<ClosedPeriodDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__closedperiods_list;
  const response = await axios.get<ClosedPeriodDto[]>(url, { withCredentials: true });
  return response.data;
}

export async function getClosedPeriod(id: string | number): Promise<ClosedPeriodDto> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__closedperiods_detail, urlParams: { pk: id } });
  const response = await axios.get<ClosedPeriodDto>(url, { withCredentials: true });
  return response.data;
}

export async function putClosedPeriod(id: string | number, data: Partial<ClosedPeriodDto>): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__closedperiods_detail, urlParams: { pk: id } });
  const response = await axios.put<ClosedPeriodDto>(url, data, { withCredentials: true });
  return response;
}

export async function postClosedPeriod(data: ClosedPeriodDto): Promise<ClosedPeriodDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__closedperiods_list;
  const response = await axios.post<ClosedPeriodDto>(url, data, { withCredentials: true });
  return response.data;
}

export async function deleteClosedPeriod(id: string | number): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__closedperiods_detail, urlParams: { pk: id } });
  const response = await axios.delete<AxiosResponse>(url, { withCredentials: true });
  return response;
}

export async function getImages(): Promise<ImageDto[]> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__images_list;
  const response = await axios.get<ImageDto[]>(url, { withCredentials: true });
  return response.data;
}

export async function getImage(id: string | number): Promise<ImageDto> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__images_detail, urlParams: { pk: id } });
  const response = await axios.get<ImageDto>(url, { withCredentials: true });
  return response.data;
}

export async function postImage(data: ImagePostDto): Promise<ImageDto> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__images_list;
  const response = await axios.postForm<ImageDto>(url, data, { withCredentials: true });
  return response.data;
}

export async function putImage(id: string | number, data: Partial<ImageDto>): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__images_detail, urlParams: { pk: id } });
  const response = await axios.put<ImageDto>(url, data, { withCredentials: true });
  return response;
}

/** Fetch all KeyValues from backend. */
export function getKeyValues(): Promise<AxiosResponse<KeyValueDto[]>> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__key_value_list;
  const response = axios.get<KeyValueDto[]>(url);
  return response;
}

// ############################################################
//                       Notifications
// ############################################################

type AllNotificationsResponse = {
  all_count: number;
  all_list: NotificationDto[];
};
export function getAllNotifications(): Promise<AxiosResponse<AllNotificationsResponse>> {
  const url = BACKEND_DOMAIN + ROUTES.backend.notifications__live_all_notification_list;
  const response = axios.get<AllNotificationsResponse>(url, { withCredentials: true });
  return response;
}

type UnreadNotificationsResponse = {
  unread_count: number;
  unread_list: NotificationDto[];
};
export function getUnreadNotifications(): Promise<AxiosResponse<UnreadNotificationsResponse>> {
  const url = BACKEND_DOMAIN + ROUTES.backend.notifications__live_unread_notification_list;
  const response = axios.get<UnreadNotificationsResponse>(url, { withCredentials: true });
  return response;
}

export function markAllAsRead(): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + ROUTES.backend.notifications__mark_all_as_read;
  const response = axios.get(url, { withCredentials: true });
  return response;
}

export function markAsRead(slug: string): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.notifications__mark_as_read,
      urlParams: { slug },
    });
  const response = axios.get(url, { withCredentials: true });
  return response;
}

export function markAsUnread(slug: string): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.notifications__mark_as_unread,
      urlParams: { slug },
    });
  const response = axios.get(url, { withCredentials: true });
  return response;
}

export function deleteNotification(slug: string): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.notifications__delete,
      urlParams: { slug },
    });
  const response = axios.get(url, { withCredentials: true });
  return response;
}

// ############################################################
//                       Recruitment
// ############################################################

export async function getAllRecruitments(): Promise<AxiosResponse<RecruitmentDto[]>> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__recruitment_list;
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function getRecruitment(id: string): Promise<AxiosResponse<RecruitmentDto>> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__recruitment_detail, urlParams: { pk: id } });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function postRecruitment(recruitmentData: RecruitmentDto): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__recruitment_list;
  const response = await axios.post(url, recruitmentData, { withCredentials: true });

  return response;
}

export async function putRecruitment(id: string, recruitment: Partial<RecruitmentDto>): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN + reverse({ pattern: ROUTES.backend.samfundet__recruitment_detail, urlParams: { pk: id } });
  const response = await axios.put<RecruitmentDto>(url, recruitment, { withCredentials: true });
  return response;
}

export async function getRecruitmentPositions(recruitmentId: string): Promise<AxiosResponse<RecruitmentPositionDto[]>> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__recruitment_positions,
      queryParams: { recruitment: recruitmentId },
    });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function getRecruitmentPosition(positionId: string): Promise<AxiosResponse<RecruitmentPositionDto>> {
  const url =
    BACKEND_DOMAIN +
    reverse({ pattern: ROUTES.backend.samfundet__recruitment_position_detail, urlParams: { pk: positionId } });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function postRecruitmentPosition(recruitmentPosition: RecruitmentPositionDto): Promise<AxiosResponse> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__recruitment_position_list;
  const response = await axios.post(url, recruitmentPosition, { withCredentials: true });

  return response;
}

export async function putRecruitmentPosition(
  positionId: string,
  recruitment: Partial<RecruitmentPositionDto>,
): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({ pattern: ROUTES.backend.samfundet__recruitment_position_detail, urlParams: { pk: positionId } });
  const response = await axios.put<RecruitmentPositionDto>(url, recruitment, { withCredentials: true });
  return response;
}

export async function getRecruitmentAdmissionsForApplicant(
  recruitmentId: string,
): Promise<AxiosResponse<RecruitmentAdmissionDto[]>> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__recruitment_admissions_for_applicant_list,
      queryParams: { recruitment: recruitmentId },
    });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function getRecruitmentAdmissionsForGang(
  gangId: string,
  recruitmentId: string,
): Promise<AxiosResponse<RecruitmentAdmissionDto[]>> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__recruitment_admissions_for_gang_list,
      queryParams: {
        gang: gangId,
        recruitment: recruitmentId,
      },
    });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function putRecruitmentAdmissionForGang(
  admissionId: string,
  admission: Partial<RecruitmentAdmissionDto>,
): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__recruitment_admissions_for_gang_detail,
      urlParams: { pk: admissionId },
    });
  const response = await axios.put<RecruitmentAdmissionDto>(url, admission, { withCredentials: true });
  return response;
}

export async function getActiveRecruitmentPositions(): Promise<AxiosResponse<RecruitmentPositionDto[]>> {
  const url = BACKEND_DOMAIN + ROUTES.backend.samfundet__active_recruitment_positions;
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function getApplicantsWithoutInterviews(recruitmentId: string): Promise<AxiosResponse<UserDto[]>> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__applicants_without_interviews,
      queryParams: {
        recruitment: recruitmentId,
      },
    });
  const response = await axios.get(url, { withCredentials: true });

  return response;
}

export async function postRecruitmentAdmission(admission: Partial<RecruitmentAdmissionDto>): Promise<AxiosResponse> {
  const url =
    BACKEND_DOMAIN +
    reverse({
      pattern: ROUTES.backend.samfundet__recruitment_admissions_for_applicant_list,
    });
  const data = {
    admission_text: admission.admission_text,
    recruitment_position: admission.recruitment_position,
  };
  const response = await axios.post(url, data, { withCredentials: true });

  return response;
}
