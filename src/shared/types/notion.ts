export type TextProperty = {
  id: string;
  type: string;
  title?: {
    type: string;
    plain_text: string;
  }[];
  rich_text?: {
    type: string;
    plain_text: string;
  }[];
};

export type TimeProperty = {
  id: string;
  type: string;
  created_time?: string;
  last_edited_time?: string;
};

export type MultiSelectProperty = {
  id: string;
  type: string;
  multi_select: {
    id: string;
    name: string;
    color: string;
  }[];
};
