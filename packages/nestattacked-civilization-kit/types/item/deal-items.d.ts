interface FixDealItemsAttributes {
  DealItemType: string;
  Name: string;
  Description: string;
  AllowDurationTrade?: boolean;
}

interface FloatDealItemsAttributes {
  DealItemType?: string;
  Name?: string;
  Description?: string;
  AllowDurationTrade?: boolean;
}

export function createDealItems(attributes: FixDealItemsAttributes): void;
