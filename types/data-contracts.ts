/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** CountryResource */
export interface CountryResource {
  id: number;
  iso: string | null;
  name: string | null;
  nicename: string | null;
  iso3: string | null;
  numcode: number | null;
  phonecode: number | null;
  created_at: string | null;
  updated_at: string | null;
}

/** MobileNetworkResource */
export interface MobileNetworkResource {
  id: number;
  mcc: string;
  mnc: string;
  country_name: string | null;
  country_code: string | null;
  country_id: number | null;
  brand: string | null;
  operator: string | null;
  status: string | null;
}

/** SmsRouteCompaniesCollection */
export interface SmsRouteCompaniesCollection {
  data: SmsRouteCompanyResource[];
  links: {
    store: {
      url: string;
    };
  };
}

/** SmsRouteCompanyResource */
export interface SmsRouteCompanyResource {
  id: string;
  team_id: string;
  name: string;
  created_at: object | null;
  updated_at: object | null;
  links: string[];
}

/** SmsRoutingRouteCollection */
export interface SmsRoutingRouteCollection {
  data: SmsRoutingRouteResource[];
  links: {
    store: string;
  };
}

/** SmsRoutingRouteResource */
export interface SmsRoutingRouteResource {
  id: string;
  name: string;
  sms_route_company_id: string;
  company?: SmsRouteCompanyResource;
  connection: string;
  rates?: SmsRoutingRateResource[];
  created_at: string;
  links: {
    delete: string;
  };
}

/** SmsRoutingRateResource */
export interface SmsRoutingRateResource {
  id: string;
  country_id: string;
  rate: string;
  sms_route_id: string;
  sms_route: SmsRoutingRouteResource;
}

/** SmsRouteSmppConnectionResource */
export interface SmsRouteSmppConnectionResource {
  id: string;
  url: string;
  username: string | null;
  password: string | null;
  port: string | null;
  dlr_url: string | null;
  dlr_port: string | null;
  workers_count: number | null;
  workers_delay: number | null;
  created_at: object | null;
  type: string;
}

/** SmsRoutingPlanRuleResource */
export interface SmsRoutingPlanRuleResource {
  id: string;
  sms_route_id: string;
  sms_routing_plan_id: string;
  country_id: number | null;
  network_id: number | null;
  is_active: boolean;
  priority: string;
  action: string;
  created_at: object | null;
  updated_at: object | null;
}

/** SmsRoutingPlanResource */
export interface SmsRoutingPlanResource {
  id: string;
  team_id: string;
  name: string;
  created_at: object | null;
  updated_at: object | null;
  connections_count: string;
  sms_routes_count: string;
}

/** SmsRoutingLogsCollection */
export interface SmsRoutingLogsCollection {
  data: SmsRoutingLogsResource[];
}

/** SmsRoutingLogsResource */
export interface SmsRoutingLogsResource {
  id: string;
  action: string;
  sms_route_id: string;
  country_id: string;
  network_id: string;
  old_rate: string;
  new_rate: string;
  user_id: string;
  team_id: string;
  created_at: string;
  updated_at: string;
}

/** SmsCampaignResource */
export interface SmsCampaignResource {
  meta: any[] | null;
  id: string;
  name: string;
  status: string;
  sms_campaign_plan_id: string;
  created_at: object | null;
  updated_at: object | null;
  offers_count: string;
  sends_count: string;
  team_id: string;
  offers?: OfferResource[];
}

/** OfferResource */
export interface OfferResource {
  id: string;
  name: string;
  url: string;
  profit: number | null;
  created_at: object | null;
  updated_at: object | null;
}

/** SmsCampaignTextResource */
export interface SmsCampaignTextResource {
  id: string;
  sms_campaign_id: string;
  text: string;
  is_active: boolean;
  created_at: object | null;
  updated_at: object | null;
}

/** SmsCampaignSenderidResource */
export interface SmsCampaignSenderidResource {
  id: string;
  sms_campaign_id: string;
  text: string;
  is_active: boolean;
  created_at: object | null;
  updated_at: object | null;
}

/** OfferCampaignResource */
export interface OfferCampaignResource {
  offer_id: string;
  sms_campaign_id: string;
  is_active: boolean;
  created_at: object | null;
  updated_at: object | null;
  is_deleted: boolean;
}

export type TokenLoginCreatePayload = object;

export type TokenRefreshCreatePayload = object;

export type TokenLogoutCreatePayload = object;

export interface DataFilesContactsCreatePayload {
  file: string;
  type: "numbers" | "emails";
}

export interface SmsRoutingCompaniesCreatePayload {
  name: string;
}

export interface SmsRoutingRoutesCreatePayload {
  name: string;
  sms_route_company_id: string;
  connection_id: string;
  connection_type: "smpp";
}

export type SmsRoutingRoutesDeletePayload = object;

export interface SmsRoutingRoutesSmppConnectionsCreatePayload {
  url: string;
  username: string;
  password: string;
  port: number;
  dlr_url?: string | null;
  dlr_port?: number | null;
  workers_count?: number | null;
  workers_delay?: number | null;
}

export interface SmsRoutingRoutesSmppConnectionsTestCreatePayload {
  url: string;
  username: string;
  password: string;
  port: number;
  dlr_url?: string | null;
  dlr_port?: number | null;
  workers_count?: number | null;
  workers_delay?: number | null;
}

export interface SmsRoutingPlansRulesCreatePayload {
  /** @format uuid */
  sms_route_id?: string;
  country_id?: number;
  network_id?: number;
  is_active?: boolean;
  priority?: number;
  action: "send" | "drop";
  action_vars?: any[] | null;
}

export interface SmsRoutingPlansRulesUpdatePayload {
  /** @format uuid */
  sms_route_id?: string;
  country_id?: number;
  network_id?: number;
  is_active?: boolean;
  priority?: number;
  action: "send" | "drop";
  action_vars?: any[] | null;
}

export type SmsRoutingPlansRulesDeletePayload = object;

export interface SmsRoutingPlansCreatePayload {
  name: string;
}

export interface SmsRoutingPlansUpdatePayload {
  name: string;
}

export type SmsRoutingPlansDeletePayload = object;

export interface SmsRoutingRatesCreatePayload {
  rate: number;
  country_id: number;
  sms_route_id: number;
  network_id?: number;
}

export interface SmsRoutingRatesUpdatePayload {
  rate: number;
}

export interface SmsCampaignsCreatePayload {
  name: string;
}

export interface SmsCampaignsUpdatePayload {
  name?: string;
  meta?: {
    /** H:i - 24 hour format (f.e - 13:00) */
    send_time?: string;
    /** Y-m-d - date format (f.e - 2021-01-01) */
    send_date?: string;
    /** @min 1 */
    sms_amount?: number;
    /** @format uuid */
    sms_routing_plan_id?: string;
  };
}

export type SmsCampaignsDeletePayload = object;

export interface SmsCampaignsTextsCreatePayload {
  text: string;
}

export interface SmsCampaignsTextsUpdatePayload {
  text?: string;
  is_active?: boolean;
}

export type SmsCampaignsTextsDeletePayload = object;

export interface SmsCampaignsSenderidsCreatePayload {
  text: string;
}

export interface SmsCampaignsSenderidsUpdatePayload {
  text?: string;
  is_active?: boolean;
}

export type SmsCampaignsSenderidsDeletePayload = object;

export interface SmsCampaignsOffersCreatePayload {
  offer_id: number;
}

export interface SmsCampaignsOffersUpdatePayload {
  is_active?: boolean;
}

export type SmsCampaignsOffersDeletePayload = object;

export interface SmsCampaignsSendManualCreatePayload {
  /** @min 1 */
  sms_amount?: number;
}

export interface OffersCreatePayload {
  name: string;
  url: string;
  profit?: number;
}

export interface OffersUpdatePayload {
  name?: string;
  url?: string;
  profit?: number;
}

export type OffersDeletePayload = object;
