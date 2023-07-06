export interface CatsResponse {
  debug_report: DebugReport;
  data: Cat[];
  versioning: Versioning;
}

export interface DebugReport {
  time: Time;
  memory: Memory;
}

export interface Time {
  total: string;
  queries: string;
}

export interface Memory {
  start_usage: string;
  end_usage: string;
  peak_usage: string;
}

export interface Cat {
  category_id: number;
  category_type: number;
  has_icon: number;
  title: string;
  seo_title: string;
  vehicle_types: number[];
}

export interface Versioning {
  app_data_version: string;
  langs_version: string;
  app_store_version: string;
  play_store_version: string;
  endPoints: EndPoints;
  application: string;
  androidVersion: string;
  iosVersion: string;
}

export interface EndPoints {
  appDataGenerator: string;
  langGenerator: string;
}
