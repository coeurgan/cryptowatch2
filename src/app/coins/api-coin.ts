export interface CoinListResponse {
    Response: string,
    Message: string,
    BaseImageUrl: string,
    BaseLinkUrl: string,
    Type: number,
     Data: CoinData
}

export interface ApiCoin {
    Id: number,
    Url: string,
    Name: string,
    CoinName: string,
    FullName: string,
    Algorithm: string,
    ProofType: string,
    SortOrder: number
}

export interface CoinData {
  [key: string]: ApiCoin
};