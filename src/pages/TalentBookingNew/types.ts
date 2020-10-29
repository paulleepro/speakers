export interface IMessage {
  from_account_id: string;
  to_account_id: string;
  is_read: boolean; // default false
  contents: string;
  // parent_message;
}

export interface IBookingInquiryAttachment {
  from_account_id: string;
  adapter: string;
  url: string;
  description: string;
  needs_signing: boolean;
  is_signed: boolean;
  signature_metadata: any;
}

export interface IBookingProposal {
  event_type: string;
  status: string;
  agent_account_id: string;
  options: any;
  accepted_option: string;
  activity_logs: any[];
}

export interface IBookingInquiry {
  enabled: boolean;
  talent_ids: string[];
  host_account_id: string;
  agent_account_id: string;
  activity_logs: any[];
  status: string;
  kind: string; //  = "event"
  logs: any[];
  notes: string; // for speakers step
  event_type: string; //  (live_drop_in, interactive_qa, deep_dive, multiple_speakers)
  event_focus: string;
  event_topics: string[];
  event_audience: string;
  event_audience_size_range: string; // ("min:max")
  // event_audience_size_min: number;
  // event_audience_size_max: number;
  event_name: string;
  event_notes: string;
  considered_talent_types: string[];
  have_hosted_speakers: boolean;
  hosted_speakers: string;
  host_full_name: string;
  host_company_name: string;
  host_role: string;
  host_phone: string;
  event_date_start: Date;
  event_date_end?: Date; //  (optional)
  event_time: string; //  enum: (morning, midday, evening) afternoon
  event_country: string;
  event_city_State: string;
  event_dates_flexible: boolean;
  event_budget_range: string; //  ("min:max" or specific value)
  event_budget_custom_range: string;
  // event_budget_range_min: number;
  // event_budget_range_max: number;
  messages: IMessage[];
  attachments: IBookingInquiryAttachment[];
  proposals: IBookingProposal[];
}
