export type VoucherType = 'Payment' | 'Receipt' | 'Sales' | 'Purchase' | 'Contra' | 'Journal';

export interface Transaction {
  date: string | null;
  voucher_type: VoucherType;
  debit_ledger: string;
  credit_ledger: string;
  amount: number;
  narration: string;
  original_rough_text: string;
}

export interface AccountingResponse {
  status: 'success' | 'error';
  error_message: string | null;
  transactions: Transaction[];
}
