interface ICreateAssetDataDTO {
  revenue: number;
  net_income: number;
  dividends_paid: number;
  fco: number;
  fcf: number;
  ebit: number;
  cash: number;
  equity: number;
  year: number;
  quarter: number;
  assetId: number;
}

export { ICreateAssetDataDTO };