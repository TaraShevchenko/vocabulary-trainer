import { z } from 'zod'

export const Sort = z.enum(['asc', 'desc'])

export const Currency = z.enum(['UAH', 'USD', 'EUR', 'BTC', 'ETH', 'USDT'])
export const Currencies = z.array(Currency)

export const Source = z.enum(['PrivateBank', 'Monobank', 'Binance', 'Ledger', 'Cash', 'Other'])
export const Sources = z.array(Source)

export const PaginationLimit = z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40), z.literal(50)])
