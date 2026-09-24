export class WaldenError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN',
    public suggestion?: string
  ) {
    super(message);
    this.name = 'WaldenError';
  }
}
